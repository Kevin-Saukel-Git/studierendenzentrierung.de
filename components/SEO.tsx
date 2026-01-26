import Head from "next/head";

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	canonical?: string;
	ogImage?: string;
	ogType?: string;
	noindex?: boolean;
	nofollow?: boolean;
	structuredData?: object;
}

const defaultTitle = "Studierendenzentrierung";
const defaultDescription =
	"Plattform für Studierendenzentrierung: Informationen, Tools und Methoden zur Umsetzung studierendenzentrierter Lehr-Lernprozesse an Hochschulen.";
const defaultKeywords =
	"Studierendenzentrierung, Hochschulbildung, Student-Centered Learning, ESG, European Standards and Guidelines, Hochschulentwicklung, Partizipation, Ko-Kreation";
const siteUrl = "https://studierendenzentrierung.de";
const defaultOgImage = `${siteUrl}/Logo.png`;

export function SEO({
	title,
	description = defaultDescription,
	keywords = defaultKeywords,
	canonical,
	ogImage = defaultOgImage,
	ogType = "website",
	noindex = false,
	nofollow = false,
	structuredData,
}: SEOProps) {
	const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
	const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
	const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

	return (
		<Head>
			{/* Basic Meta Tags */}
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			<meta name="author" content="Studierendenzentrierung" />
			<meta name="robots" content={`${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`} />
			<link rel="canonical" href={canonicalUrl} />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content={ogType} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImageUrl} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:locale" content="de_DE" />
			<meta property="og:site_name" content={defaultTitle} />

			{/* Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImageUrl} />

			{/* Additional Meta Tags */}
			<meta name="theme-color" content="#1e3a8a" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

			{/* Structured Data (JSON-LD) */}
			{structuredData && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData),
					}}
				/>
			)}
		</Head>
	);
}
