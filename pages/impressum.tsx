import { Title, Text, Stack, Paper, Box, Container } from "@mantine/core";
import { SEO } from "../components/SEO";

export default function ImpressumPage() {
	return (
		<>
			<SEO
				title="Impressum"
				description="Impressum der Plattform Studierendenzentrierung. Angaben gemäß § 5 TMG, Kontaktinformationen und rechtliche Hinweise."
				canonical="/impressum"
				noindex={true}
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
							}}
						>
							Impressum
						</Title>
					</Container>
				</Box>

				{/* Main Content */}
				<Container
					size="lg"
					py="3rem"
					px="2rem"
				>
					<Stack gap="xl">
						{/* Section 1: Angaben gemäß § 5 TMG */}
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
										size="1.75rem"
										fw={700}
										style={{
											color: "#1e3a8a",
											marginBottom: "0.5rem",
										}}
									>
										Angaben gemäß § 5 TMG
									</Title>
								</Box>
								<Box
									style={{
										padding: "1rem",
										backgroundColor: "rgba(30, 58, 138, 0.03)",
										borderRadius: "8px",
										border: "1px solid rgba(30, 58, 138, 0.1)",
									}}
								>
									<Text mb="xs">
										Kevin Saukel<br />
										Langobardenweg 16<br />
										65929 Frankfurt am Main
									</Text>
								</Box>
							</Stack>
						</Paper>

						{/* Section 2: Kontakt */}
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
										size="1.75rem"
										fw={700}
										style={{
											color: "#1e3a8a",
											marginBottom: "0.5rem",
										}}
									>
										Kontakt
									</Title>
								</Box>
								<Box
									style={{
										padding: "1rem",
										backgroundColor: "rgba(30, 58, 138, 0.03)",
										borderRadius: "8px",
										border: "1px solid rgba(30, 58, 138, 0.1)",
									}}
								>
									<Text mb="xs">
										Telefon: 0179 412 98 07<br />
										E-Mail: datenschutz@saukels.de
									</Text>
								</Box>
							</Stack>
						</Paper>

						{/* Section 3: Redaktionelle Verantwortlichkeit */}
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
										size="1.75rem"
										fw={700}
										style={{
											color: "#1e3a8a",
											marginBottom: "0.5rem",
										}}
									>
										Redaktionelle Verantwortlichkeit gem. §55 Abs. 2 RStV
									</Title>
								</Box>
								<Text mb="md" style={{ lineHeight: 1.8 }}>
									Kevin Saukel
								</Text>
							</Stack>
						</Paper>

						{/* Section 4: Haftungsbeschränkung */}
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
										size="1.75rem"
										fw={700}
										style={{
											color: "#1e3a8a",
											marginBottom: "0.5rem",
										}}
									>
										Haftungsbeschränkung
									</Title>
								</Box>
								<Text mb="md" style={{ lineHeight: 1.8 }}>
									Die Inhalte und Links dieser Website werden mit größtmöglicher Sorgfalt überprüft. Wir übernehmen dennoch keine Gewähr für Aktualität, Richtigkeit und Vollständigkeit der Inhalte. Wir übernehmen keine Haftung für die Inhalte oder Aktualität externer Links. Für den Inhalt der verlinkten Websites sind ausschließlich deren Betreiber verantwortlich.
								</Text>
							</Stack>
						</Paper>

						{/* Section 5: Alternative Dispute Resolution */}
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
										size="1.75rem"
										fw={700}
										style={{
											color: "#1e3a8a",
											marginBottom: "0.5rem",
										}}
									>
										Alternative Dispute Resolution in accordance with Art. 14 (1) ODR-VO and § 36 VSBG
									</Title>
								</Box>
								<Text mb="md" style={{ lineHeight: 1.8 }}>
									Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die du unter{" "}
									<a
										href="https://ec.europa.eu/consumers/odr"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											color: "#1e3a8a",
											textDecoration: "underline",
										}}
									>
										https://ec.europa.eu/consumers/odr
									</a>{" "}
									findest. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
								</Text>
							</Stack>
						</Paper>
					</Stack>
				</Container>
			</div>
		</>
	);
}
