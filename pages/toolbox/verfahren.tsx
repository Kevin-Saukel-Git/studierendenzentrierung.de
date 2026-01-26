import { Title, Text, Stack, Timeline, Badge, Box, Container, Button, Group } from "@mantine/core";
import Link from "next/link";
import { SEO } from "../../components/SEO";

export default function VerfahrenPage() {
	return (
		<>
			<SEO
				title="Verfahren"
				description="Erfahren Sie, wie Tools zur Studierendenzentrierung eingereicht und in die Toolbox aufgenommen werden. Informationen zum Einreichungs- und Bewertungsprozess."
				keywords="Tool Einreichungsverfahren, Toolbox Bewertung, Studierendenzentrierung Prozess"
				canonical="/toolbox/verfahren"
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
							Verfahren
						</Title>
						<Text
							size="lg"
							style={{ color: "#1e3a8a" }}
						>
							Hier erfahren Sie, wie Tools zur Studierendenzentrierung
							eingereicht und in die Toolbox aufgenommen werden.
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
						<Timeline
							active={-1}
							bulletSize={32}
							lineWidth={2}
						>
							<Timeline.Item
								title={
									<Text
										size="md"
										fw={600}
										style={{ color: "#1e3a8a" }}
									>
										Einreichung
									</Text>
								}
								bullet={
									<Badge
										size="md"
										style={{
											backgroundColor: "#1e3a8a",
											color: "white",
											minWidth: "28px",
											height: "28px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											padding: 0,
										}}
									>
										1
									</Badge>
								}
							>
								<Text
									size="lg"
									style={{ lineHeight: 1.8 }}
								>
									Über das Einreichungsformular können Tools,
									Formate, Maßnahmen oder Konzepte vorgeschlagen
									werden. Bitte beschreiben Sie das Tool so
									präzise wie möglich und ergänzen Sie – sofern
									vorhanden – Materialien, Quellen oder Beispiele.
								</Text>
							</Timeline.Item>

							<Timeline.Item
								title={
									<Text
										size="md"
										fw={600}
										style={{ color: "#1e3a8a" }}
									>
										Sichtung und Zuordnung
									</Text>
								}
								bullet={
									<Badge
										size="md"
										style={{
											backgroundColor: "#1e3a8a",
											color: "white",
											minWidth: "28px",
											height: "28px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											padding: 0,
										}}
									>
										2
									</Badge>
								}
							>
								<Text
									size="lg"
									style={{ lineHeight: 1.8 }}
								>
									Nach der Einreichung werden die Inhalte auf
									Vollständigkeit geprüft und thematisch in die
									bestehende Struktur eingeordnet (z. B.
									Kategorie, Tags, Kontext der
									Studierendenzentrierung).
								</Text>
							</Timeline.Item>

							<Timeline.Item
								title={
									<Text
										size="md"
										fw={600}
										style={{ color: "#1e3a8a" }}
									>
										Erste Bewertung
									</Text>
								}
								bullet={
									<Badge
										size="md"
										style={{
											backgroundColor: "#1e3a8a",
											color: "white",
											minWidth: "28px",
											height: "28px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											padding: 0,
										}}
									>
										3
									</Badge>
								}
							>
								<Text
									size="lg"
									style={{ lineHeight: 1.8 }}
									mb="xs"
								>
									Aktuell erfolgt die erste Bewertung
									redaktionell. Dabei werden insbesondere folgende
									Aspekte geprüft:
								</Text>
								<Stack
									gap="xs"
									ml="md"
								>
									<Text
										size="sm"
										style={{ lineHeight: 1.7 }}
									>
										• welche Aspekte der
										Studierendenzentrierung adressiert
										werden,
									</Text>
									<Text
										size="sm"
										style={{ lineHeight: 1.7 }}
									>
										• wie praxistauglich und übertragbar das
										Tool ist,
									</Text>
									<Text
										size="sm"
										style={{ lineHeight: 1.7 }}
									>
										• welche Voraussetzungen oder
										Rahmenbedingungen für die Umsetzung
										erforderlich sind.
									</Text>
								</Stack>
								<Text
									size="sm"
									c="dimmed"
									mt="xs"
									style={{ fontStyle: "italic", lineHeight: 1.7 }}
								>
									Hinweis: Das Bewertungsverfahren wird
									kontinuierlich weiterentwickelt und soll
									perspektivisch durch weitere Expert:innen
									ergänzt werden.
								</Text>
							</Timeline.Item>

							<Timeline.Item
								title={
									<Text
										size="md"
										fw={600}
										style={{ color: "#1e3a8a" }}
									>
										Veröffentlichung
									</Text>
								}
								bullet={
									<Badge
										size="md"
										style={{
											backgroundColor: "#1e3a8a",
											color: "white",
											minWidth: "28px",
											height: "28px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											padding: 0,
										}}
									>
										4
									</Badge>
								}
							>
								<Text
									size="lg"
									style={{ lineHeight: 1.8 }}
								>
									Nach der Prüfung wird das Tool in die Toolbox
									aufgenommen und öffentlich zugänglich gemacht.
									Dadurch wird Wissen sichtbar, übertragbar und
									für andere Hochschulen nutzbar.
								</Text>
							</Timeline.Item>
						</Timeline>

						<Group
							justify="center"
							mt="xl"
						>
							<Button
								component={Link}
								href="/toolbox/einreichen"
								size="lg"
								radius="xl"
								style={{
									background: "#1e3a8a",
									boxShadow: "0 4px 15px rgba(30, 58, 138, 0.3)",
								}}
							>
								Tool einreichen →
							</Button>
						</Group>
					</Stack>
				</Container>
			</div>
		</>
	);
}
