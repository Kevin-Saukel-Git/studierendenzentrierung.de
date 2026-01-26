import { Title, Text, Stack, Container, Box, List, Divider, Anchor, Group, Grid, Paper } from "@mantine/core";
import Image from "next/image";
import { SEO } from "../components/SEO";

export default function DerBegriffPage() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "Der Begriff: Studierendenzentrierung",
		description:
			"Definition und Einordnung von Studierendenzentrierung im Kontext der European Standards and Guidelines (ESG 2015) und des deutschen Hochschuldiskurses.",
		author: {
			"@type": "Organization",
			name: "Studierendenzentrierung",
		},
		publisher: {
			"@type": "Organization",
			name: "Studierendenzentrierung",
		},
		datePublished: "2024-01-01",
		dateModified: "2024-01-01",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": "https://studierendenzentrierung.de/der-begriff",
		},
	};

	return (
		<>
			<SEO
				title="Der Begriff"
				description="Definition und Einordnung von Studierendenzentrierung im Kontext der European Standards and Guidelines (ESG 2015). Studierendenzentrierung als kultureller und organisationaler Gestaltungsansatz für Hochschulen."
				keywords="Studierendenzentrierung Definition, ESG 2015, Student-Centered Learning, Hochschulentwicklung, Partizipation, Ko-Kreation, European Standards and Guidelines"
				canonical="/der-begriff"
				ogType="article"
				structuredData={structuredData}
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
							Der Begriff
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
						{/* Definition Quote */}
						<Box
							style={{
								padding: "2rem 0",
								borderLeft: "4px solid #1e3a8a",
								paddingLeft: "2rem",
							}}
						>
							<Stack gap="lg">
								<Group
									gap="xl"
									align="flex-start"
									wrap="wrap"
								>
									<Box style={{ flex: 1, minWidth: "300px" }}>
										<Text
											size="lg"
											style={{
												lineHeight: 1.8,
												fontStyle: "italic",
												color: "#1e3a8a",
												marginBottom: "1.5rem",
											}}
										>
											„Studierendenzentrierung
											beschreibt eine offene und
											wertschätzende Kultur einer
											Hochschuleinrichtung. Sie
											beinhaltet das gegenseitige
											Commitment der Lehrenden,
											Mitarbeitenden und Studierenden,
											alle lehr-, lern- und
											studienbezogenen Prozesse und
											Strukturen einer Hochschule
											partnerschaftlich und kokreativ
											so zu gestalten, dass die
											Studierenden in ihrer Diversität
											gut auf ihre Aufgaben in der
											Arbeitswelt und der Gesellschaft
											vorbereitet sind. Wesentliches
											Merkmal der
											Studierendenzentrierung ist
											dabei die gleichberechtigte
											Beteiligung an Strategie- und
											Projektentwicklung sowie die
											Einbindung in
											Entscheidungsprozesse.
											Studierendenzentrierung als
											Gestaltungsansatz kann dabei in
											den drei Bereichen
											Lehr-Lernveranstaltungen,
											Lehr-Lern-Projekte und
											Hochschulorganisation gedacht
											werden.&rdquo;
										</Text>
										<Text
											size="sm"
											c="dimmed"
											style={{ fontStyle: "italic" }}
										>
											Bachus, L., Saukel, K., & Rahrt,
											R., Studierendenzentrierung neu
											denken. Diskussionspapier Nr.
											22. Berlin: Hochschulforum
											Digitalisierung.
										</Text>
									</Box>
									<Box style={{ flexShrink: 0 }}>
										<Anchor
											href="https://hochschulforumdigitalisierung.de/sites/default/files/dateien/Studierendenzentrierung%20neu%20denken.pdf"
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: "none",
											}}
										>
											<Box
												style={{
													width: "220px",
													borderRadius:
														"8px",
													overflow: "hidden",
													boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
													transition: "transform 0.2s ease, box-shadow 0.2s ease",
													cursor: "pointer",
													marginBottom:
														"0.5rem",
												}}
												onMouseEnter={(e) => {
													e.currentTarget.style.transform =
														"translateY(-2px)";
													e.currentTarget.style.boxShadow =
														"0 4px 12px rgba(0, 0, 0, 0.15)";
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.transform =
														"translateY(0)";
													e.currentTarget.style.boxShadow =
														"0 2px 8px rgba(0, 0, 0, 0.1)";
												}}
											>
												<Image
													src="/cover_hfd.png"
													alt="Diskussionspapier: Studierendenzentrierung neu denken"
													width={220}
													height={311}
													style={{
														width: "100%",
														height: "auto",
														display: "block",
													}}
												/>
											</Box>
										</Anchor>
										<Anchor
											href="https://hochschulforumdigitalisierung.de/sites/default/files/dateien/Studierendenzentrierung%20neu%20denken.pdf"
											target="_blank"
											rel="noopener noreferrer"
											size="sm"
											style={{
												color: "#1e3a8a",
												fontWeight: 500,
												display: "block",
												textAlign: "center",
											}}
										>
											PDF herunterladen
										</Anchor>
									</Box>
								</Group>
							</Stack>
						</Box>

						{/* Überleitung */}
						<Box style={{ padding: "1rem 0" }}>
							<Text
								size="lg"
								style={{ lineHeight: 1.8 }}
							>
								Mit dieser Definition wird Studierendenzentrierung nicht
								ausschließlich auf die Ebene der Lehre begrenzt, sondern
								als umfassender kultureller und organisationaler
								Gestaltungsansatz verstanden. Damit schließt das Konzept
								unmittelbar an internationale Qualitätsstandards für
								Hochschulbildung an, insbesondere an die European
								Standards and Guidelines (ESG 2015), die den
								studentischen Beitrag zur Gestaltung von Lernprozessen
								systematisch verankern.
							</Text>
						</Box>

						{/* Section 1: Einordnung in den Kontext der ESG */}
						<Box style={{ padding: "1rem 0" }}>
							<Group
								gap="xl"
								align="flex-start"
								wrap="wrap"
							>
								<Box style={{ flex: 1, minWidth: "300px" }}>
									<Title
										order={2}
										size="2rem"
										fw={700}
										style={{
											color: "#1e3a8a",
											marginBottom: "1rem",
										}}
									>
										1. Einordnung in den Kontext der
										European Standards and Guidelines (ESG
										2015)
									</Title>
									<Text
										size="lg"
										style={{ lineHeight: 1.8 }}
									>
										Die European Standards and Guidelines
										(ESG) definieren für den europäischen
										Hochschulraum Qualitätskriterien, um
										Studienqualität, Transparenz und
										Anschlussfähigkeit zu sichern. Ein
										zentraler Baustein ist die Schaffung
										studierendenzentrierter Lernumgebungen,
										die die Rolle der Studierenden als
										aktive Mitgestalter*innen im
										Hochschulsystem betonen.
									</Text>
								</Box>
								<Box style={{ flexShrink: 0 }}>
									<Anchor
										href="https://www.enqa.eu/wp-content/uploads/2015/11/ESG_2015.pdf"
										target="_blank"
										rel="noopener noreferrer"
										style={{ textDecoration: "none" }}
									>
										<Box
											style={{
												width: "180px",
												borderRadius: "8px",
												overflow: "hidden",
												boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
												transition: "transform 0.2s ease, box-shadow 0.2s ease",
												cursor: "pointer",
												marginBottom: "0.5rem",
											}}
											onMouseEnter={(e) => {
												e.currentTarget.style.transform =
													"translateY(-2px)";
												e.currentTarget.style.boxShadow =
													"0 4px 12px rgba(0, 0, 0, 0.15)";
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.transform =
													"translateY(0)";
												e.currentTarget.style.boxShadow =
													"0 2px 8px rgba(0, 0, 0, 0.1)";
											}}
										>
											<Image
												src="/cover_esg.png"
												alt="ESG 2015: Standards and Guidelines for Quality Assurance in the European Higher Education Area"
												width={180}
												height={255}
												style={{
													width: "100%",
													height: "auto",
													display: "block",
												}}
											/>
										</Box>
									</Anchor>
									<Anchor
										href="https://www.enqa.eu/wp-content/uploads/2015/11/ESG_2015.pdf"
										target="_blank"
										rel="noopener noreferrer"
										size="sm"
										style={{
											color: "#1e3a8a",
											fontWeight: 500,
											display: "block",
											textAlign: "center",
										}}
									>
										PDF herunterladen
									</Anchor>
								</Box>
							</Group>
						</Box>

						{/* Section 2: ESG-Kriterium 1.3 */}
						<Box style={{ padding: "1rem 0" }}>
							<Stack gap="xl">
								<Stack gap="lg">
									<Title
										order={2}
										size="2rem"
										fw={700}
										style={{ color: "#1e3a8a" }}
									>
										2. ESG-Kriterium 1.3: Student-Centred
										Learning, Teaching and Assessment
									</Title>

									<Box>
										<Title
											order={3}
											size="1.5rem"
											fw={600}
											mb="md"
											style={{ color: "#1e3a8a" }}
										>
											Standard
										</Title>
										<Text
											size="lg"
											style={{ lineHeight: 1.8 }}
											mb="md"
										>
											Das ESG-Kriterium 1.3
											verpflichtet Hochschulen dazu,
											Studienprogramme so zu gestalten
											und umzusetzen, dass Studierende
											aktiv am Lernprozess beteiligt
											sind. Dazu gehört insbesondere,
											dass auch die Art der
											Leistungsbewertung dieses
											Prinzip widerspiegelt.
										</Text>
										<Box
											style={{
												padding: "1rem 1.5rem",
												borderLeft: "3px solid #1e3a8a",
												backgroundColor:
													"rgba(30, 58, 138, 0.03)",
												borderRadius: "4px",
												marginTop: "1rem",
											}}
										>
											<Text
												size="md"
												style={{
													lineHeight: 1.8,
													fontStyle: "italic",
													color: "#1e3a8a",
													marginBottom:
														"0.5rem",
											}}
										>
											&ldquo;Institutions should
											ensure that the
											programmes are delivered
											in a way that encourages
											students to take an
											active role in creating
											the learning process,
											and that the assessment
											of students reflects
											this approach.&rdquo;
										</Text>
											<Text
												size="xs"
												c="dimmed"
												style={{
													fontStyle: "italic",
												}}
											>
												— ESG 2015, Standard 1.3
											</Text>
										</Box>
										<Text
											size="lg"
											style={{ lineHeight: 1.8 }}
											mt="md"
										>
											Mit diesem Standard wird
											Studierendenzentrierung als
											Qualitätsprinzip definiert, das
											sowohl die Lehr-Lernpraxis als
											auch Prüfungsformate umfasst.
										</Text>
									</Box>

									<Box>
										<Title
											order={3}
											size="1.5rem"
											fw={600}
											mb="md"
											style={{ color: "#1e3a8a" }}
										>
											Guidelines / Ausgestaltung
										</Title>
										<Text
											size="lg"
											style={{ lineHeight: 1.8 }}
											mb="md"
										>
											Um den Standard wirksam
											umzusetzen, konkretisieren die
											ESG-Guidelines die Erwartungen
											an studierendenzentrierte
											Lehr-Lernprozesse. Diese tragen
											wesentlich zur Motivation,
											Selbstreflexion und aktiven
											Beteiligung der Studierenden
											bei. Sie umfassen u. a.:
										</Text>
									</Box>
								</Stack>

								{/* Guidelines Sections */}
								<Grid gutter="lg">
									{/* 2.1 Lernprozessgestaltung */}
									<Grid.Col span={{ base: 12, md: 4 }}>
										<Paper
											p="xl"
											withBorder
											radius="md"
											style={{
												height: "100%",
												borderLeft: "3px solid #60a5fa",
												backgroundColor:
													"rgba(96, 165, 250, 0.02)",
											}}
										>
											<Stack gap="md">
												<Title
													order={3}
													size="1.2rem"
													fw={600}
													style={{
														color: "#1e3a8a",
													}}
												>
													2.1
													Lernprozessgestaltung
												</Title>
												<Text
													size="sm"
													style={{
														lineHeight: 1.6,
														color: "#64748b",
													}}
												>
													Die Umsetzung
													studierendenzentrierter
													Lehr-Lernformate:
												</Text>
												<Stack
													gap="xs"
													mt="sm"
												>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														berücksichtigt
														die
														Vielfalt
														und
														Lebensrealität
														der
														Studierenden,
													</Text>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														ermöglicht
														flexible,
														individuelle
														Lernpfade,
													</Text>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														• nutzt
														verschiedene
														Lern-
														und
														Vermittlungsformate,
													</Text>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														kombiniert
														unterschiedliche
														didaktische
														Methoden,
													</Text>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														überprüft
														und
														verbessert
														regelmäßig
														didaktische
														Ansätze.
													</Text>
												</Stack>
											</Stack>
										</Paper>
									</Grid.Col>

									{/* 2.2 Lehrenden-Lernenden-Beziehungen */}
									<Grid.Col span={{ base: 12, md: 4 }}>
										<Paper
											p="xl"
											withBorder
											radius="md"
											style={{
												height: "100%",
												borderLeft: "3px solid #f97316",
												backgroundColor:
													"rgba(249, 115, 22, 0.02)",
											}}
										>
											<Stack gap="md">
												<Title
													order={3}
													size="1.2rem"
													fw={600}
													style={{
														color: "#1e3a8a",
													}}
												>
													2.2
													Lehrenden-Lernenden-Beziehungen
												</Title>
												<Text
													size="sm"
													style={{
														lineHeight: 1.6,
														color: "#64748b",
													}}
												>
													Studierendenzentrierung
													bedeutet zudem:
												</Text>
												<Stack
													gap="xs"
													mt="sm"
												>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														Förderung
														von
														Autonomie
														bei
														gleichzeitiger
														Begleitung,
													</Text>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														Wertschätzung
														und
														Respekt
														im
														Lehr-Lernverhältnis,
													</Text>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														strukturierte
														Verfahren
														für
														Beschwerden
														und
														Rückmeldungen.
													</Text>
												</Stack>
											</Stack>
										</Paper>
									</Grid.Col>

									{/* 2.3 Leistungsbewertung / Assessment */}
									<Grid.Col span={{ base: 12, md: 4 }}>
										<Paper
											p="xl"
											withBorder
											radius="md"
											style={{
												height: "100%",
												borderLeft: "3px solid #10b981",
												backgroundColor:
													"rgba(16, 185, 129, 0.02)",
											}}
										>
											<Stack gap="md">
												<Title
													order={3}
													size="1.2rem"
													fw={600}
													style={{
														color: "#1e3a8a",
													}}
												>
													2.3
													Leistungsbewertung
													/ Assessment
												</Title>
												<Text
													size="sm"
													style={{
														lineHeight: 1.6,
														color: "#64748b",
													}}
												>
													Da Prüfungen
													entscheidend für
													Studienerfolg
													und berufliche
													Perspektiven
													sind, müssen
													Qualitätssicherungsprozesse
													sicherstellen,
													dass:
												</Text>
												<Stack
													gap="xs"
													mt="sm"
												>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														Prüfer:innen
														qualifiziert
														und
														didaktisch
														unterstützt
														werden,
													</Text>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														Beurteilungskriterien
														vorab
														kommuniziert
														werden,
													</Text>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														Prüfungsformen
														den
														Lernergebnissen
														entsprechen
														und
														Transparenz
														schaffen,
													</Text>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														Feedback
														systematisch
														gegeben
														wird und
														Lernprozesse
														unterstützt,
													</Text>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														mehrere
														Prüfende
														beteiligt
														werden
														(wo
														möglich),
													</Text>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														Ausnahmesituationen
														berücksichtigt
														werden,
													</Text>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														Prüfungen
														fair,
														konsistent
														und
														regelbasiert
														durchgeführt
														werden,
													</Text>
													<Text
														size="sm"
														style={{
															lineHeight: 1.7,
														}}
													>
														•
														Einspruchs-
														und
														Beschwerdeverfahren
														existieren.
													</Text>
												</Stack>
											</Stack>
										</Paper>
									</Grid.Col>
								</Grid>
							</Stack>
						</Box>

						{/* Section 3: Verbindung zur Studierendenzentrierung */}
						<Box style={{ padding: "1rem 0" }}>
							<Stack gap="lg">
								<Title
									order={2}
									size="2rem"
									fw={700}
									style={{ color: "#1e3a8a" }}
								>
									3. Verbindung zur Studierendenzentrierung im
									deutschen Hochschuldiskurs
								</Title>
								<Text
									size="lg"
									style={{ lineHeight: 1.8 }}
									mb="md"
								>
									Die im Diskussionspapier des Hochschulforums
									Digitalisierung formulierte Konzeptualisierung
									von Studierendenzentrierung deckt sich in
									zentralen Punkten mit den ESG-Vorgaben,
									insbesondere in Bezug auf:
								</Text>
								<Paper
									p="xl"
									withBorder
									radius="md"
									style={{
										borderLeft: "3px solid #1e3a8a",
										backgroundColor:
											"rgba(30, 58, 138, 0.02)",
										maxWidth: "900px",
									}}
								>
									<Stack gap="xs">
										<Text
											size="sm"
											style={{ lineHeight: 1.7 }}
										>
											• Partizipation (Mitgestaltung
											von Strategien und Projekten),
										</Text>
										<Text
											size="sm"
											style={{ lineHeight: 1.7 }}
										>
											• Ko-Kreation (aktive Rolle
											statt passive Konsumhaltung),
										</Text>
										<Text
											size="sm"
											style={{ lineHeight: 1.7 }}
										>
											• Organisationsentwicklung
											(Studierendenzentrierung nicht
											nur im Seminarraum),
										</Text>
										<Text
											size="sm"
											style={{ lineHeight: 1.7 }}
										>
											• Diversitätssensibilität und
											Autonomie,
										</Text>
										<Text
											size="sm"
											style={{ lineHeight: 1.7 }}
										>
											• qualitätsgesicherte Prüfungs-
											und Feedbackprozesse.
										</Text>
									</Stack>
								</Paper>
								<Text
									size="lg"
									style={{ lineHeight: 1.8 }}
									mt="md"
								>
									Damit wird Studierendenzentrierung sowohl als
									kultureller als auch als struktureller
									Organisationsansatz verstanden – und über
									Lehrveranstaltungen hinaus auf die
									institutionelle Ebene erweitert.
								</Text>
							</Stack>
						</Box>

						{/* Section 4: Ziel und Funktion der Plattform */}
						<Box style={{ padding: "1rem 0" }}>
							<Stack gap="lg">
								<Title
									order={2}
									size="2rem"
									fw={700}
									style={{ color: "#1e3a8a" }}
								>
									4. Ziel und Funktion der Plattform
								</Title>
								<Text
									size="lg"
									style={{ lineHeight: 1.8 }}
									mb="md"
								>
									Die Plattform verfolgt das Ziel,
									Studierendenzentrierung im Sinne der
									beschriebenen Qualitätsanforderungen sichtbar,
									zugänglich und praktisch umsetzbar zu machen.
									Dazu bündelt sie Informationen, Forschung,
									Beispiele und Werkzeuge, die Hochschulen bei der
									Einführung und Weiterentwicklung
									studierendenzentrierter Lehr-Lernprozesse
									unterstützen.
								</Text>
								<Text
									size="lg"
									style={{ lineHeight: 1.8 }}
								>
									Die Plattform soll als Informations- und
									Transferstelle zwischen konzeptionellen
									Anforderungen (z. B. ESG) und praktischer
									Umsetzung im Hochschulalltag dienen. Sie macht
									deutlich: Studierendenzentrierung ist kein
									abstrakter Anspruch, sondern kann konkret
									gestaltet, erprobt und weiterentwickelt werden.
								</Text>
							</Stack>
						</Box>
					</Stack>
				</Container>
			</div>
		</>
	);
}
