import { Button, Group, Title, Text, Stack, Container, Box, Paper } from "@mantine/core";
import Link from "next/link";
import { SEO } from "../components/SEO";

export default function IndexPage() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Studierendenzentrierung",
		description:
			"Plattform für Studierendenzentrierung: Informationen, Tools und Methoden zur Umsetzung studierendenzentrierter Lehr-Lernprozesse an Hochschulen.",
		url: "https://studierendenzentrierung.de",
		potentialAction: {
			"@type": "SearchAction",
			target: "https://studierendenzentrierung.de/toolbox/die-tools?search={search_term_string}",
			"query-input": "required name=search_term_string",
		},
	};

	return (
		<>
			<SEO
				title="Startseite"
				description="Plattform für Studierendenzentrierung: Informationen, Tools und Methoden zur Umsetzung studierendenzentrierter Lehr-Lernprozesse an Hochschulen. Unterstützt Hochschulen dabei, Studierende aktiv in Entscheidungsprozesse einzubinden."
				canonical="/"
				structuredData={structuredData}
			/>
			<div style={{ width: "100%", minHeight: "100vh", margin: 0, padding: 0 }}>
				{/* Hero Section */}
				<Box
					style={{
						background: "linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)",
						padding: "6rem 2rem",
						textAlign: "center",
						width: "100%",
					}}
				>
					<Container
						size="lg"
						style={{ padding: 0 }}
					>
						<Stack
							gap="xl"
							align="center"
						>
							<Title
								order={1}
								size="3.5rem"
								fw={800}
								style={{
									color: "#1e3a8a",
									lineHeight: 1.2,
								}}
							>
								Studierendenzentrierung
							</Title>
							<Stack
								gap="md"
								maw={700}
								style={{ textAlign: "center" }}
							>
								<Text
									size="lg"
									style={{ color: "#1e3a8a", fontWeight: 500 }}
								>
									...nicht nur an Studierende denken, sondern vor
									allem mit Studierenden denken,
								</Text>
								<Text
									size="lg"
									style={{ color: "#1e3a8a", fontWeight: 500 }}
								>
									...nicht nur über Studierende reden, sondern vor
									allem mit Studierenden reden,
								</Text>
								<Text
									size="lg"
									style={{ color: "#1e3a8a", fontWeight: 500 }}
								>
									...nicht nur für Studierende gestalten, sondern
									vor allem mit Studierenden gestalten.
								</Text>
							</Stack>
							<Group
								gap="md"
								justify="center"
								mt="xl"
							>
								<Button
									component={Link}
									href="/der-begriff"
									size="lg"
									radius="xl"
									style={{
										background: "#1e3a8a",
										boxShadow: "0 4px 15px rgba(30, 58, 138, 0.3)",
									}}
								>
									Mehr erfahren
								</Button>
								<Button
									component={Link}
									href="/toolbox/die-tools"
									size="lg"
									variant="outline"
									radius="xl"
									style={{
										borderColor: "#60a5fa",
										color: "#1e3a8a",
									}}
								>
									Tools entdecken
								</Button>
							</Group>
						</Stack>
					</Container>
				</Box>

				{/* Info Section */}
				<Container
					size="lg"
					py="5rem"
					px="2rem"
				>
					<Paper
						p="xl"
						withBorder
						radius="lg"
						shadow="sm"
						style={{
							textAlign: "center",
							background: "linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, rgba(249, 115, 22, 0.05) 100%)",
						}}
					>
						<Stack
							gap="md"
							maw={800}
							style={{ margin: "0 auto" }}
						>
							<Title
								order={2}
								size="2rem"
								fw={700}
								style={{ color: "#1e3a8a" }}
							>
								Über diese Plattform
							</Title>
							<Text
								size="lg"
								c="dimmed"
								style={{ lineHeight: 1.8 }}
							>
								Diese Work-in-Progress-Plattform informiert über
								Studierendenzentrierung und bietet praxisnahe
								Informationen zur Umsetzung. Sie unterstützt Hochschulen
								dabei, Studierende aktiv in Entscheidungsprozesse
								einzubinden und gemeinsam innovative Lösungen zu
								entwickeln.
							</Text>
						</Stack>
					</Paper>
				</Container>
			</div>
		</>
	);
}
