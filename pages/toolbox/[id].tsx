import { useRouter } from "next/router";
import { Title, Text, Stack, Card, Group, Badge, Paper, Box, Anchor, Button, Divider, Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Tools, ToolCategory } from "../../data/Tool";
import Link from "next/link";
import { SEO } from "../../components/SEO";

export default function ToolDetailPage() {
	const router = useRouter();
	const { id } = router.query;
	const isMobile = useMediaQuery("(max-width: 768px)");

	// Find tool by index
	const toolIndex = id ? parseInt(id as string) : -1;
	const tool = toolIndex >= 0 && toolIndex < Tools.length ? Tools[toolIndex] : null;

	const getCategoryColor = (category: ToolCategory) => {
		const colors: Record<string, string> = {
			[ToolCategory.HOCHSCHULORGANISATION]: "#60a5fa",
			[ToolCategory.LEHRE]: "#f97316",
			[ToolCategory.LEARNING_AND_TEACHING_PROJECTS]: "#1e3a8a",
			[ToolCategory.RAHMENBEDINGUNGEN]: "#10b981",
		};
		return colors[category] || "#60a5fa";
	};

	const formatDate = (date: Date) => {
		return new Date(date).toLocaleDateString("de-DE", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	if (!tool) {
		return (
			<div style={{ width: "100%", minHeight: "100vh", padding: "2rem" }}>
				<Paper
					p="xl"
					withBorder
					radius="lg"
					style={{ textAlign: "center" }}
				>
					<Title
						order={2}
						mb="md"
						style={{ color: "#1e3a8a" }}
					>
						Tool nicht gefunden
					</Title>
					<Text
						c="dimmed"
						mb="lg"
					>
						Das angeforderte Tool konnte nicht gefunden werden.
					</Text>
					<Button
						component={Link}
						href="/toolbox/die-tools"
						style={{
							background: "#1e3a8a",
							color: "white",
						}}
					>
						Zurück zur Übersicht
					</Button>
				</Paper>
			</div>
		);
	}

	const categoryColor = getCategoryColor(tool.category);

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: tool.title,
		description: tool.shortDescription,
		url: `https://studierendenzentrierung.de/toolbox/${id}`,
		datePublished: tool.createdAt.toISOString(),
		dateModified: tool.updatedAt.toISOString(),
		about: {
			"@type": "Thing",
			name: "Studierendenzentrierung",
		},
	};

	return (
		<>
			<SEO
				title={tool.title}
				description={tool.shortDescription}
				keywords={`${tool.title}, ${tool.category}, ${tool.tags.join(
					", "
				)}, Studierendenzentrierung Tool`}
				canonical={`/toolbox/${id}`}
				ogType="article"
				structuredData={structuredData}
			/>
			<div style={{ width: "100%", minHeight: "100vh", padding: "2rem" }}>
				<Stack gap="xl">
					{/* Hero Section */}
					<Box
						style={{
							background: `linear-gradient(135deg, ${categoryColor} 0%, ${categoryColor}dd 100%)`,
							padding: isMobile ? "2rem 1.5rem" : "3rem 2rem",
							borderRadius: "lg",
							color: "white",
						}}
					>
						<Stack gap="md">
							<Button
								component={Link}
								href="/toolbox/die-tools"
								variant="subtle"
								size="sm"
								style={{
									color: "white",
									alignSelf: "flex-start",
									padding: 0,
								}}
							>
								← Zurück zur Übersicht
							</Button>
							<Group
								gap="xs"
								wrap="wrap"
							>
								<Badge
									size={isMobile ? "sm" : "lg"}
									style={{
										backgroundColor:
											"rgba(255, 255, 255, 0.3)",
										color: "white",
										border: "1px solid rgba(255, 255, 255, 0.5)",
										backdropFilter: "blur(10px)",
									}}
								>
									{tool.category}
								</Badge>
								{tool.tags.map((tag, tagIndex) => (
									<Badge
										key={tagIndex}
										size={isMobile ? "sm" : "lg"}
										style={{
											backgroundColor:
												"rgba(255, 255, 255, 0.3)",
											color: "white",
											border: "1px solid rgba(255, 255, 255, 0.5)",
											backdropFilter: "blur(10px)",
										}}
									>
										{tag}
									</Badge>
								))}
							</Group>
							<Title
								order={1}
								size={isMobile ? "1.5rem" : "3rem"}
								style={{
									color: "white",
									fontSize: isMobile ? "clamp(1.25rem, 4vw, 1.75rem)" : "3rem",
									lineHeight: isMobile ? 1.3 : 1.2,
									wordWrap: "break-word",
									overflowWrap: "break-word",
									hyphens: "auto",
									maxWidth: "100%",
								}}
							>
								{tool.title}
							</Title>
						</Stack>
					</Box>

					{/* Main Content */}
					<Grid>
						<Grid.Col span={{ base: 12, md: 8 }}>
							<Stack gap="xl">
								{/* Description */}
								<Paper
									p="xl"
									withBorder
									radius="lg"
									shadow="sm"
								>
									<Title
										order={2}
										size="h3"
										mb="md"
										style={{ color: "#1e3a8a" }}
									>
										Beschreibung
									</Title>
									<Text
										size="md"
										c="dimmed"
										style={{ lineHeight: 1.8 }}
									>
										{tool.shortDescription}
									</Text>
								</Paper>

								{/* References */}
								{tool.references.length > 0 && (
									<Paper
										p="xl"
										withBorder
										radius="lg"
										shadow="sm"
									>
										<Title
											order={2}
											size="h3"
											mb="md"
											style={{ color: "#1e3a8a" }}
										>
											Referenzen
										</Title>
										<Stack gap="md">
											{tool.references.map(
												(ref, index) => (
													<Card
														key={
															index
														}
														p="md"
														withBorder
														radius="md"
														style={{
															backgroundColor:
																"rgba(96, 165, 250, 0.05)",
															borderColor:
																"rgba(96, 165, 250, 0.2)",
														}}
													>
														<Anchor
															href={
																ref.url
															}
															target="_blank"
															rel="noopener noreferrer"
															size="md"
															style={{
																color: "#1e3a8a",
																fontWeight: 500,
																textDecoration:
																	"none",
															}}
														>
															{
																ref.title
															}{" "}
															→
														</Anchor>
													</Card>
												)
											)}
										</Stack>
									</Paper>
								)}

								{/* Literature */}
								{tool.literature.length > 0 && (
									<Paper
										p="xl"
										withBorder
										radius="lg"
										shadow="sm"
									>
										<Title
											order={2}
											size="h3"
											mb="md"
											style={{ color: "#1e3a8a" }}
										>
											Literatur
										</Title>
										<Stack gap="md">
											{tool.literature.map(
												(lit, index) => (
													<Card
														key={
															index
														}
														p="md"
														withBorder
														radius="md"
														style={{
															backgroundColor:
																"rgba(249, 115, 22, 0.05)",
															borderColor:
																"rgba(249, 115, 22, 0.2)",
														}}
													>
														<Anchor
															href={
																lit.url
															}
															target="_blank"
															rel="noopener noreferrer"
															size="sm"
															style={{
																color: "#f97316",
																fontWeight: 500,
																textDecoration:
																	"none",
																display: "block",
																marginBottom:
																	"0.5rem",
															}}
														>
															{
																lit.title
															}{" "}
															→
														</Anchor>
													</Card>
												)
											)}
										</Stack>
									</Paper>
								)}
							</Stack>
						</Grid.Col>

						{/* Sidebar */}
						<Grid.Col span={{ base: 12, md: 4 }}>
							<Stack gap="md">
								<Paper
									p="xl"
									withBorder
									radius="lg"
									shadow="sm"
								>
									<Stack gap="md">
										<Title
											order={3}
											size="h4"
											style={{ color: "#1e3a8a" }}
										>
											Informationen
										</Title>
										<Divider />
										<div>
											<Text
												size="sm"
												fw={600}
												mb="xs"
												style={{
													color: "#1e3a8a",
												}}
											>
												Kategorie
											</Text>
											<Badge
												size={isMobile ? "sm" : "lg"}
												style={{
													backgroundColor:
														categoryColor,
													color: "white",
												}}
											>
												{tool.category}
											</Badge>
										</div>
										<div>
											<Text
												size="sm"
												fw={600}
												mb="xs"
												style={{
													color: "#1e3a8a",
												}}
											>
												Tags
											</Text>
											<Group
												gap="xs"
												wrap="wrap"
											>
												{tool.tags.map(
													(
														tag,
														tagIndex
													) => (
														<Badge
															key={
																tagIndex
															}
															size="sm"
															variant="outline"
															style={{
																borderColor:
																	"#9333ea",
																color: "#9333ea",
															}}
														>
															{
																tag
															}
														</Badge>
													)
												)}
											</Group>
										</div>
										<Divider />
										<div>
											<Text
												size="sm"
												fw={600}
												mb="xs"
												style={{
													color: "#1e3a8a",
												}}
											>
												Erstellt am
											</Text>
											<Text
												size="sm"
												c="dimmed"
											>
												{formatDate(
													tool.createdAt
												)}
											</Text>
										</div>
										<div>
											<Text
												size="sm"
												fw={600}
												mb="xs"
												style={{
													color: "#1e3a8a",
												}}
											>
												Aktualisiert am
											</Text>
											<Text
												size="sm"
												c="dimmed"
											>
												{formatDate(
													tool.updatedAt
												)}
											</Text>
										</div>
									</Stack>
								</Paper>
							</Stack>
						</Grid.Col>
					</Grid>
				</Stack>
			</div>
		</>
	);
}
