import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// Helper function to escape HTML
function escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Helper function to sanitize and validate string input
function sanitizeString(input: any, maxLength: number = 10000): string {
    if (typeof input !== "string") {
        return "";
    }
    // Remove control characters and trim
    const sanitized = input.replace(/[\x00-\x1F\x7F]/g, "").trim();
    // Limit length
    return sanitized.substring(0, maxLength);
}

// Helper function to validate email
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
}

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per minute per IP

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return true;
    }

    if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
        return false;
    }

    record.count++;
    return true;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Methode nicht erlaubt" });
    }

    // Rate limiting
    const clientIp = req.headers["x-forwarded-for"]?.toString().split(",")[0] || 
                     req.headers["x-real-ip"]?.toString() || 
                     req.socket.remoteAddress || 
                     "unknown";
    
    if (!checkRateLimit(clientIp)) {
        return res.status(429).json({ 
            error: "Zu viele Anfragen",
            message: "Bitte versuchen Sie es später erneut."
        });
    }

    try {
        const {
            toolName,
            shortDescription,
            category,
            applicationArea,
            studentCenteredness,
            studentInvolvement,
            materials,
            submitterName,
            submitterEmail,
        } = req.body;

        // Sanitize and validate all inputs
        const sanitizedToolName = sanitizeString(toolName, 200);
        const sanitizedShortDescription = sanitizeString(shortDescription, 500);
        const sanitizedCategory = sanitizeString(category, 100);
        const sanitizedApplicationArea = sanitizeString(applicationArea, 2000);
        const sanitizedStudentInvolvement = sanitizeString(studentInvolvement, 2000);
        const sanitizedMaterials = sanitizeString(materials, 2000);
        const sanitizedSubmitterName = sanitizeString(submitterName, 200);
        const sanitizedSubmitterEmail = sanitizeString(submitterEmail, 254);

        // Validate required fields
        if (
            !sanitizedToolName ||
            !sanitizedShortDescription ||
            !sanitizedCategory ||
            !sanitizedApplicationArea ||
            !studentCenteredness ||
            !Array.isArray(studentCenteredness) ||
            studentCenteredness.length === 0 ||
            !sanitizedStudentInvolvement ||
            !sanitizedSubmitterName ||
            !sanitizedSubmitterEmail
        ) {
            return res.status(400).json({ error: "Pflichtfelder fehlen" });
        }

        // Validate email format
        if (!isValidEmail(sanitizedSubmitterEmail)) {
            return res.status(400).json({ error: "Ungültige E-Mail-Adresse" });
        }

        // Validate studentCenteredness array
        const validTags = [
            "Partizipation",
            "Mitbestimmung",
            "Feedback",
            "Engagement",
            "Mentoring",
            "Didaktik",
            "Format",
            "Struktur",
            "Digital",
            "Studierendenforschung",
        ];
        const sanitizedStudentCenteredness = studentCenteredness
            .filter((tag: any) => typeof tag === "string" && validTags.includes(tag))
            .slice(0, 10); // Limit to 10 tags

        if (sanitizedStudentCenteredness.length === 0) {
            return res.status(400).json({ error: "Mindestens ein Aspekt der Studierendenzentrierung muss ausgewählt werden" });
        }

        // Validate SMTP configuration
        const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
        const smtpPort = parseInt(process.env.SMTP_PORT || "587");
        const smtpUser = process.env.SMTP_USER;
        const smtpPassword = process.env.SMTP_PASSWORD;

        if (!smtpUser || !smtpPassword) {
            console.error("SMTP configuration missing:", {
                hasUser: !!smtpUser,
                hasPassword: !!smtpPassword,
                host: smtpHost,
                port: smtpPort,
            });
            return res.status(500).json({
                error: "SMTP-Konfiguration unvollständig",
                message: "Die Umgebungsvariablen SMTP_USER und SMTP_PASSWORD sind erforderlich",
            });
        }

        // Create transporter with timeout settings
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465, // true for 465, false for other ports
            auth: {
                user: smtpUser,
                pass: smtpPassword,
            },
            connectionTimeout: 10000, // 10 seconds
            greetingTimeout: 10000, // 10 seconds
            socketTimeout: 10000, // 10 seconds
        });

        // Format the email content (plain text, safe from injection)
        const emailContent = `
            Neue Tool-Einreichung für Studierendenzentrierung

            Tool-Basisdaten:
            - Name: ${sanitizedToolName}
            - Kategorie: ${sanitizedCategory}
            - Kurzbeschreibung: ${sanitizedShortDescription}
            - Anwendungsbereich: ${sanitizedApplicationArea}

            Studierendenzentrierung:
            - Aspekte: ${sanitizedStudentCenteredness.join(", ")}
            - Studierendenbeteiligung: ${sanitizedStudentInvolvement}

            Materialien:
            ${sanitizedMaterials || "Keine angegeben"}

            Einreichende Person:
            - Name: ${sanitizedSubmitterName}
            - E-Mail: ${sanitizedSubmitterEmail}
                    `.trim();

        // Verify connection before sending
        try {
            await transporter.verify();
        } catch (verifyError) {
            console.error("SMTP connection verification failed:", verifyError);
            return res.status(500).json({
                error: "SMTP-Verbindung fehlgeschlagen",
                message: verifyError instanceof Error ? verifyError.message : "Verbindung zum SMTP-Server konnte nicht hergestellt werden",
            });
        }

        // Send email with sanitized HTML (XSS protection)
        await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: "ehrenamt@saukel-kevin.de",
            replyTo: sanitizedSubmitterEmail, // Allow reply to submitter
            subject: `Neue Tool-Einreichung: ${sanitizedToolName}`,
            text: emailContent,
            html: `
				<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
					<h2 style="color: #1e3a8a;">Neue Tool-Einreichung für Studierendenzentrierung</h2>
					
					<h3 style="color: #1e3a8a; margin-top: 20px;">Tool-Basisdaten</h3>
					<ul>
						<li><strong>Name:</strong> ${escapeHtml(sanitizedToolName)}</li>
						<li><strong>Kategorie:</strong> ${escapeHtml(sanitizedCategory)}</li>
						<li><strong>Kurzbeschreibung:</strong> ${escapeHtml(sanitizedShortDescription)}</li>
						<li><strong>Anwendungsbereich:</strong> ${escapeHtml(sanitizedApplicationArea)}</li>
					</ul>
					
					<h3 style="color: #1e3a8a; margin-top: 20px;">Studierendenzentrierung</h3>
					<ul>
						<li><strong>Aspekte:</strong> ${sanitizedStudentCenteredness.map(tag => escapeHtml(tag)).join(", ")}</li>
						<li><strong>Studierendenbeteiligung:</strong> ${escapeHtml(sanitizedStudentInvolvement)}</li>
					</ul>
					
					<h3 style="color: #1e3a8a; margin-top: 20px;">Materialien</h3>
					<p>${escapeHtml(sanitizedMaterials || "Keine angegeben")}</p>
					
					<h3 style="color: #1e3a8a; margin-top: 20px;">Einreichende Person</h3>
					<ul>
						<li><strong>Name:</strong> ${escapeHtml(sanitizedSubmitterName)}</li>
						<li><strong>E-Mail:</strong> ${escapeHtml(sanitizedSubmitterEmail)}</li>
					</ul>
				</div>
			`,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Fehler beim Senden der E-Mail:", error);
        const errorMessage = error instanceof Error ? error.message : "Unbekannter Fehler";
        const errorCode = error instanceof Error && "code" in error ? (error as any).code : undefined;
        
        // Translate common error messages to German
        let translatedMessage = errorMessage;
        if (errorMessage.includes("Greeting never received")) {
            translatedMessage = "Verbindung zum SMTP-Server konnte nicht hergestellt werden (Timeout)";
        } else if (errorMessage.includes("Invalid login")) {
            translatedMessage = "Ungültige Anmeldedaten für SMTP-Server";
        } else if (errorMessage.includes("Connection timeout")) {
            translatedMessage = "Verbindungs-Timeout beim SMTP-Server";
        }
        
        return res.status(500).json({
            error: "E-Mail konnte nicht gesendet werden",
            message: translatedMessage,
            code: errorCode,
            details: error instanceof Error ? {
                name: error.name,
                stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
            } : undefined,
        });
    }
}
