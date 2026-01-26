import { useState } from "react";
import {
	Title,
	Text,
	Stack,
	Paper,
	TextInput,
	Textarea,
	Button,
	Group,
	Box,
	Container,
	Select,
	Checkbox,
	Anchor,
	Divider,
	Notification,
} from "@mantine/core";
import { ToolCategory, ToolTag } from "../../data/Tool";
import Link from "next/link";
import { SEO } from "../../components/SEO";

export default function EinreichenPage() {
	const [toolName, setToolName] = useState("");
	const [shortDescription, setShortDescription] = useState("");
	const [category, setCategory] = useState<string | null>(null);
	const [applicationArea, setApplicationArea] = useState("");
	const [studentCenteredness, setStudentCenteredness] = useState<string[]>([]);
	const [studentInvolvement, setStudentInvolvement] = useState("");
	const [materials, setMaterials] = useState("");
	const [submitterName, setSubmitterName] = useState("");
	const [submitterEmail, setSubmitterEmail] = useState("");
	const [privacyAccepted, setPrivacyAccepted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [notification, setNotification] = useState<{
		type: "success" | "error";
		message: string;
	} | null>(null);

	return (
		<>
			<SEO
				title="Tool einreichen"
				description="Reichen Sie Ihr Tool, Ihre Methode oder Ihr Format für die Studierendenzentrierung ein. Teilen Sie Ihr Wissen und unterstützen Sie andere Hochschulen bei der Umsetzung."
				keywords="Tool einreichen, Studierendenzentrierung Methode, Hochschulmethoden teilen, Tool vorschlagen"
				canonical="/toolbox/einreichen"
			/>
			<div style={{ width: "100%", minHeight: "100vh", margin: 0, padding: 0 }}>
				{/* Hero Section */}
				<Box
					style={{
						background: "linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)",
						padding: "4rem 2rem 3rem 2rem",
						width: "100%",
					}}
				>
					<Container size="lg">
						<Title
							order={1}
							size="3rem"
							fw={800}
							style={{
								color: "#1e3a8a",
								lineHeight: 1.2,
								marginBottom: "0.5rem",
							}}
						>
							Einreichen
						</Title>
						<Text
							size="lg"
							style={{ color: "#1e3a8a" }}
						>
							Reichen Sie hier Ihr Tool oder Ihre Methode für die
							Studierendenzentrierung ein.
						</Text>
					</Container>
				</Box>

				{/* Main Content */}
				<Container
					size="lg"
					py="3rem"
					px="2rem"
				>
					<Stack gap="xl">
						<form
							onSubmit={async (e) => {
								e.preventDefault();
								setIsSubmitting(true);
								setNotification(null);

								try {
									const response = await fetch(
										"/api/submit-tool",
										{
											method: "POST",
											headers: {
												"Content-Type":
													"application/json",
											},
											body: JSON.stringify({
												toolName,
												shortDescription,
												category,
												applicationArea,
												studentCenteredness,
												studentInvolvement,
												materials,
												submitterName,
												submitterEmail,
											}),
										}
									);

									const data = await response.json();

									if (!response.ok) {
										const errorMessage = data.message
											? `${data.error || "Fehler"}: ${
													data.message
											  }`
											: data.error ||
											  "Fehler beim Senden";
										throw new Error(errorMessage);
									}

									setNotification({
										type: "success",
										message: "Ihre Einreichung wurde erfolgreich versendet. Vielen Dank!",
									});

									// Reset form
									setToolName("");
									setShortDescription("");
									setCategory(null);
									setApplicationArea("");
									setStudentCenteredness([]);
									setStudentInvolvement("");
									setMaterials("");
									setSubmitterName("");
									setSubmitterEmail("");
									setPrivacyAccepted(false);
								} catch (error) {
									setNotification({
										type: "error",
										message:
											error instanceof Error
												? error.message
												: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
									});
								} finally {
									setIsSubmitting(false);
								}
							}}
						>
							<Stack gap="xl">
								{/* Abschnitt: Tool-Basisdaten */}
								<Paper
									p="xl"
									withBorder
									radius="md"
									style={{
										background: "linear-gradient(135deg, rgba(96, 165, 250, 0.02) 0%, rgba(249, 115, 22, 0.02) 100%)",
										borderColor: "rgba(96, 165, 250, 0.2)",
									}}
								>
									<Stack gap="lg">
										<Box>
											<Title
												order={2}
												size="1.5rem"
												fw={600}
												style={{
													color: "#1e3a8a",
													marginBottom:
														"0.5rem",
												}}
											>
												Tool-Basisdaten
											</Title>
											<Text
												size="sm"
												c="dimmed"
												style={{
													lineHeight: 1.6,
												}}
											>
												Bitte füllen Sie die
												grundlegenden
												Informationen zu Ihrem
												Tool aus.
											</Text>
										</Box>
										<Stack gap="md">
											<TextInput
												label="Name des Tools"
												placeholder="Geben Sie den Namen ein"
												required
												size="md"
												value={toolName}
												onChange={(e) =>
													setToolName(
														e
															.currentTarget
															.value
													)
												}
												styles={{
													label: {
														fontSize: "0.875rem",
														fontWeight: 500,
														marginBottom:
															"0.5rem",
														whiteSpace: "nowrap",
													},
													required: {
														display: "inline",
													},
												}}
											/>

											<Textarea
												label="Kurzbeschreibung"
												placeholder="Kurze Beschreibung für die Übersicht"
												rows={3}
												required
												size="md"
												value={shortDescription}
												onChange={(e) =>
													setShortDescription(
														e
															.currentTarget
															.value
													)
												}
												styles={{
													label: {
														fontSize: "0.875rem",
														fontWeight: 500,
														marginBottom:
															"0.5rem",
														whiteSpace: "nowrap",
													},
													required: {
														display: "inline",
													},
												}}
											/>

											<Select
												label="Kategorie"
												placeholder="Wählen Sie eine Kategorie"
												data={[
													ToolCategory.HOCHSCHULORGANISATION,
													ToolCategory.LEHRE,
													ToolCategory.LEARNING_AND_TEACHING_PROJECTS,
													ToolCategory.RAHMENBEDINGUNGEN,
												]}
												required
												size="md"
												value={category}
												onChange={setCategory}
												styles={{
													label: {
														fontSize: "0.875rem",
														fontWeight: 500,
														marginBottom:
															"0.5rem",
														whiteSpace: "nowrap",
													},
													required: {
														display: "inline",
													},
												}}
											/>

											<Textarea
												label="Anwendungsbereich"
												placeholder="In welchem Kontext wird das Tool eingesetzt?"
												rows={4}
												required
												size="md"
												value={applicationArea}
												onChange={(e) =>
													setApplicationArea(
														e
															.currentTarget
															.value
													)
												}
												styles={{
													label: {
														fontSize: "0.875rem",
														fontWeight: 500,
														marginBottom:
															"0.5rem",
														whiteSpace: "nowrap",
													},
													required: {
														display: "inline",
													},
												}}
											/>
										</Stack>
									</Stack>
								</Paper>

								{/* Abschnitt: Studierendenzentrierung */}
								<Paper
									p="xl"
									withBorder
									radius="md"
									style={{
										background: "linear-gradient(135deg, rgba(96, 165, 250, 0.02) 0%, rgba(249, 115, 22, 0.02) 100%)",
										borderColor: "rgba(96, 165, 250, 0.2)",
									}}
								>
									<Stack gap="lg">
										<Box>
											<Title
												order={2}
												size="1.5rem"
												fw={600}
												style={{
													color: "#1e3a8a",
													marginBottom:
														"0.5rem",
												}}
											>
												Studierendenzentrierung
											</Title>
											<Text
												size="sm"
												c="dimmed"
												style={{
													lineHeight: 1.6,
												}}
											>
												Beschreiben Sie, wie Ihr
												Tool zur
												Studierendenzentrierung
												beiträgt.
											</Text>
										</Box>
										<Stack gap="md">
											<Box
												style={{
													padding: "1rem",
													backgroundColor:
														"rgba(30, 58, 138, 0.03)",
													borderRadius:
														"8px",
													border: "1px solid rgba(30, 58, 138, 0.1)",
												}}
											>
												<Checkbox.Group
													label={
														<Text
															size="sm"
															fw={
																500
															}
															mb="xs"
															style={{
																display: "inline-block",
																whiteSpace: "nowrap",
															}}
														>
															Aspekte
															der
															Studierendenzentrierung
														</Text>
													}
													value={
														studentCenteredness
													}
													onChange={
														setStudentCenteredness
													}
													required
													styles={{
														label: {
															whiteSpace: "nowrap",
														},
														required: {
															display: "inline",
														},
													}}
												>
													<Stack
														gap="xs"
														mt="xs"
													>
														<Checkbox
															value={
																ToolTag.PARTIZIPATION
															}
															label="Partizipation"
														/>
														<Checkbox
															value={
																ToolTag.MITBESTIMMUNG
															}
															label="Mitbestimmung"
														/>
														<Checkbox
															value={
																ToolTag.FEEDBACK_EVALUATION
															}
															label="Feedback"
														/>
														<Checkbox
															value={
																ToolTag.ANREIZE_ENGAGEMENT
															}
															label="Engagement"
														/>
														<Checkbox
															value={
																ToolTag.BERATUNG_MENTORING
															}
															label="Mentoring"
														/>
														<Checkbox
															value={
																ToolTag.LEHRKONZEPT_DIDAKTIK
															}
															label="Didaktik"
														/>
														<Checkbox
															value={
																ToolTag.FORMAT_VERANSTALTUNG
															}
															label="Format"
														/>
														<Checkbox
															value={
																ToolTag.STRUKTURELLE_MASSNAHME
															}
															label="Struktur"
														/>
														<Checkbox
															value={
																ToolTag.DIGITAL_PARTICIPATION
															}
															label="Digital"
														/>
														<Checkbox
															value={
																ToolTag.STUDENTISCHE_FORSCHUNG
															}
															label="Studierendenforschung"
														/>
													</Stack>
												</Checkbox.Group>
											</Box>

											<Textarea
												label="Wie werden Studierende beteiligt?"
												placeholder="Beschreiben Sie, wie Studierende eingebunden sind."
												rows={4}
												required
												size="md"
												value={
													studentInvolvement
												}
												onChange={(e) =>
													setStudentInvolvement(
														e
															.currentTarget
															.value
													)
												}
												styles={{
													label: {
														fontSize: "0.875rem",
														fontWeight: 500,
														marginBottom:
															"0.5rem",
														whiteSpace: "nowrap",
													},
													required: {
														display: "inline",
													},
												}}
											/>
										</Stack>
									</Stack>
								</Paper>

								{/* Abschnitt: Materialien & Kontakt */}
								<Paper
									p="xl"
									withBorder
									radius="md"
									style={{
										background: "linear-gradient(135deg, rgba(96, 165, 250, 0.02) 0%, rgba(249, 115, 22, 0.02) 100%)",
										borderColor: "rgba(96, 165, 250, 0.2)",
									}}
								>
									<Stack gap="lg">
										<Box>
											<Title
												order={2}
												size="1.5rem"
												fw={600}
												style={{
													color: "#1e3a8a",
													marginBottom:
														"0.5rem",
												}}
											>
												Materialien & Kontakt
											</Title>
											<Text
												size="sm"
												c="dimmed"
												style={{
													lineHeight: 1.6,
												}}
											>
												Optional können Sie
												Materialien hinzufügen
												und Ihre Kontaktdaten
												angeben.
											</Text>
										</Box>
										<Stack gap="md">
											<Textarea
												label="Links / Materialien (optional)"
												placeholder="URLs zu Materialien, Webseiten oder Dokumenten (eine URL pro Zeile)"
												rows={3}
												size="md"
												value={materials}
												onChange={(e) =>
													setMaterials(
														e
															.currentTarget
															.value
													)
												}
												styles={{
													label: {
														fontSize: "0.875rem",
														fontWeight: 500,
														marginBottom:
															"0.5rem",
													},
												}}
											/>

											<TextInput
												label="Ihr Name"
												placeholder="Ihr vollständiger Name"
												required
												size="md"
												value={submitterName}
												onChange={(e) =>
													setSubmitterName(
														e
															.currentTarget
															.value
													)
												}
												styles={{
													label: {
														fontSize: "0.875rem",
														fontWeight: 500,
														marginBottom:
															"0.5rem",
														whiteSpace: "nowrap",
													},
													required: {
														display: "inline",
													},
												}}
											/>

											<TextInput
												label="E-Mail"
												type="email"
												placeholder="ihre.email@beispiel.de"
												required
												size="md"
												value={submitterEmail}
												onChange={(e) =>
													setSubmitterEmail(
														e
															.currentTarget
															.value
													)
												}
												styles={{
													label: {
														fontSize: "0.875rem",
														fontWeight: 500,
														marginBottom:
															"0.5rem",
														whiteSpace: "nowrap",
													},
													required: {
														display: "inline",
													},
												}}
											/>
										</Stack>
									</Stack>
								</Paper>

								<Paper
									p="lg"
									withBorder
									radius="md"
									style={{
										backgroundColor:
											"rgba(30, 58, 138, 0.03)",
										borderColor: "rgba(30, 58, 138, 0.2)",
									}}
								>
									<Checkbox
										checked={privacyAccepted}
										onChange={(event) =>
											setPrivacyAccepted(
												event.currentTarget
													.checked
											)
										}
										label={
											<Text
												size="sm"
												style={{
													lineHeight: 1.7,
												}}
											>
												Ich akzeptiere die{" "}
												<Anchor
													component={Link}
													href="/privacy-policy"
													target="_blank"
													style={{
														color: "#1e3a8a",
														fontWeight: 500,
													}}
												>
													Datenschutzerklärung
												</Anchor>
												.
											</Text>
										}
										required
									/>
								</Paper>

								{notification && (
									<Notification
										color={
											notification.type === "success"
												? "green"
												: "red"
										}
										title={
											notification.type === "success"
												? "Erfolg"
												: "Fehler"
										}
										onClose={() => setNotification(null)}
										withCloseButton
									>
										{notification.message}
									</Notification>
								)}

								<Group
									justify="flex-end"
									mt="xl"
								>
									<Button
										type="submit"
										size="lg"
										radius="xl"
										disabled={
											!privacyAccepted || isSubmitting
										}
										loading={isSubmitting}
										style={{
											background: "#1e3a8a",
											boxShadow: "0 4px 15px rgba(30, 58, 138, 0.3)",
										}}
									>
										{isSubmitting
											? "Wird gesendet..."
											: "Einreichen"}
									</Button>
								</Group>
							</Stack>
						</form>
					</Stack>
				</Container>
			</div>
		</>
	);
}
