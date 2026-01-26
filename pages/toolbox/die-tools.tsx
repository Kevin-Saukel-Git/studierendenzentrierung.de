import { useState, useMemo, useRef, useEffect } from "react";
import { Title, Text, Stack, Grid, Card, Button, Group, Badge, Paper, Box, Container, Tooltip } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Tools, Tool, ToolCategory, ToolTag } from "../../data/Tool";
import Link from "next/link";
import { useRouter } from "next/router";
import { SEO } from "../../components/SEO";

export default function DieToolsPage() {
	const router = useRouter();
	const { search } = router.query;
	const isMobile = useMediaQuery("(max-width: 768px)");
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>("");

	// Initialize search query from URL parameter
	useEffect(() => {
		if (search && typeof search === "string") {
			setSearchQuery(search);
		}
	}, [search]);

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Die Tools - Studierendenzentrierung",
		description:
			"Übersicht aller verfügbaren Tools, Methoden und Formate für die Umsetzung von Studierendenzentrierung an Hochschulen.",
		url: "https://studierendenzentrierung.de/toolbox/die-tools",
		mainEntity: {
			"@type": "ItemList",
			numberOfItems: Tools.length,
			itemListElement: Tools.slice(0, 10).map((tool, index) => ({
				"@type": "ListItem",
				position: index + 1,
				item: {
					"@type": "CreativeWork",
					name: tool.title,
					description: tool.shortDescription,
				},
			})),
		},
	};

	// Get unique categories and tags for filters
	const categories = Object.values(ToolCategory).filter((cat) => cat !== ToolCategory.NONE);
	const allTags = Object.values(ToolTag);

	// Filter tools based on selected category, tags, and search query, then sort by category order, then alphabetically
	const filteredTools = useMemo(() => {
		const categoryOrder = [
			ToolCategory.HOCHSCHULORGANISATION,
			ToolCategory.LEHRE,
			ToolCategory.LEARNING_AND_TEACHING_PROJECTS,
			ToolCategory.RAHMENBEDINGUNGEN,
		];

		const query = searchQuery.toLowerCase().trim();

		return Tools.filter((tool) => {
			const categoryMatch = !selectedCategory || tool.category === selectedCategory;
			const tagMatch =
				selectedTags.length === 0 ||
				selectedTags.some((tag) => tool.tags.includes(tag as ToolTag));
			
			// Search filter
			const searchMatch =
				!query ||
				tool.title.toLowerCase().includes(query) ||
				tool.shortDescription.toLowerCase().includes(query) ||
				tool.category.toLowerCase().includes(query) ||
				tool.tags.some((tag) => tag.toLowerCase().includes(query));

			return categoryMatch && tagMatch && searchMatch;
		}).sort((a, b) => {
			// First sort by category order
			const categoryIndexA = categoryOrder.indexOf(a.category);
			const categoryIndexB = categoryOrder.indexOf(b.category);

			if (categoryIndexA !== categoryIndexB) {
				return categoryIndexA - categoryIndexB;
			}

			// Then sort alphabetically by title within the same category
			return a.title.localeCompare(b.title, "de");
		});
	}, [selectedCategory, selectedTags, searchQuery]);

	const formatDate = (date: Date) => {
		return new Date(date).toLocaleDateString("de-DE", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const getCategoryColor = (category: ToolCategory) => {
		const colors: Record<string, string> = {
			[ToolCategory.HOCHSCHULORGANISATION]: "#60a5fa",
			[ToolCategory.LEHRE]: "#f97316",
			[ToolCategory.LEARNING_AND_TEACHING_PROJECTS]: "#1e3a8a",
			[ToolCategory.RAHMENBEDINGUNGEN]: "#10b981",
		};
		return colors[category] || "#60a5fa";
	};

	const toggleTag = (tag: string) => {
		setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
	};

	// Component to show tooltip only when text is truncated
	const TruncatedTitle = ({ title }: { title: string }) => {
		const titleRef = useRef<HTMLHeadingElement>(null);
		const [isTruncated, setIsTruncated] = useState(false);

		useEffect(() => {
			const checkTruncation = () => {
				if (titleRef.current) {
					setIsTruncated(titleRef.current.scrollWidth > titleRef.current.clientWidth);
				}
			};
			checkTruncation();
			window.addEventListener("resize", checkTruncation);
			return () => window.removeEventListener("resize", checkTruncation);
		}, [title]);

		const titleElement = (
			<Title
				ref={titleRef}
				order={3}
				size="h4"
				style={{
					color: "white",
					marginBottom: "0.75rem",
					overflow: "hidden",
					textOverflow: "ellipsis",
					whiteSpace: "nowrap",
					lineHeight: 1.4,
					minHeight: "1.68em",
					maxHeight: "1.68em",
				}}
			>
				{title}
			</Title>
		);

		if (isTruncated) {
			return (
				<Tooltip
					multiline
					label={title}
					withArrow
					position="top"
					withinPortal
					zIndex={1000}
					style={{ maxWidth: "400px" }}
				>
					{titleElement}
				</Tooltip>
			);
		}

		return titleElement;
	};

	return (
		<>
			<SEO
				title="Die Tools"
				description="Übersicht aller verfügbaren Tools, Methoden und Formate für die Umsetzung von Studierendenzentrierung an Hochschulen. Filterbar nach Kategorien und Tags."
				keywords="Studierendenzentrierung Tools, Hochschulmethoden, Partizipation Tools, Ko-Kreation Methoden, Hochschulentwicklung Tools"
				canonical="/toolbox/die-tools"
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
							size={isMobile ? "2rem" : "3rem"}
							fw={800}
							style={{
								color: "#1e3a8a",
								lineHeight: 1.2,
								marginBottom: "0.5rem",
							}}
						>
							Die Tools
						</Title>
						<Text
							size="lg"
							style={{ color: "#1e3a8a" }}
						>
							Hier finden Sie eine Übersicht aller verfügbaren Tools für die
							Studierendenzentrierung.
						</Text>
						{searchQuery && (
							<Group gap="md" mt="md">
								<Badge
									size="lg"
									style={{
										backgroundColor: "#1e3a8a",
										color: "white",
									}}
									rightSection={
										<Button
											variant="subtle"
											size="xs"
											style={{
												color: "white",
												padding: 0,
												minWidth: "auto",
												width: "20px",
												height: "20px",
											}}
											onClick={() => {
												setSearchQuery("");
												router.push("/toolbox/die-tools");
											}}
										>
											×
										</Button>
									}
								>
									Suche: {searchQuery}
								</Badge>
							</Group>
						)}
					</Container>
				</Box>

				{/* Main Content */}
				<Container
					size="lg"
					py="3rem"
					px="2rem"
				>
					<Stack gap="xl">
						{/* Filters */}
						<Paper
							p="xl"
							withBorder
							radius="lg"
							style={{
								background: "linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, rgba(249, 115, 22, 0.05) 100%)",
								borderColor: "rgba(96, 165, 250, 0.2)",
							}}
						>
							<Stack gap="lg">
								<div>
									<Text
										size="sm"
										fw={600}
										mb="xs"
										style={{ color: "#1e3a8a" }}
									>
										Kategorien
									</Text>
									<Group
										gap="xs"
										wrap="wrap"
									>
										<Button
											variant={
												selectedCategory ===
												null
													? "filled"
													: "outline"
											}
											size="sm"
											radius="xl"
											onClick={() =>
												setSelectedCategory(
													null
												)
											}
											style={{
												backgroundColor:
													selectedCategory ===
													null
														? "#1e3a8a"
														: "transparent",
												borderColor: "#1e3a8a",
												color:
													selectedCategory ===
													null
														? "white"
														: "#1e3a8a",
												fontWeight: 500,
											}}
										>
											Alle
										</Button>
										{categories.map((cat) => (
											<Button
												key={cat}
												variant={
													selectedCategory ===
													cat
														? "filled"
														: "outline"
												}
												size="sm"
												radius="xl"
												onClick={() =>
													setSelectedCategory(
														cat
													)
												}
												style={{
													backgroundColor:
														selectedCategory ===
														cat
															? getCategoryColor(
																	cat
															  )
															: "transparent",
													borderColor:
														getCategoryColor(
															cat
														),
													color:
														selectedCategory ===
														cat
															? "white"
															: getCategoryColor(
																	cat
															  ),
													fontWeight: 500,
												}}
											>
												{cat}
											</Button>
										))}
									</Group>
								</div>

								<div>
									<Text
										size="sm"
										fw={600}
										mb="xs"
										style={{ color: "#9333ea" }}
									>
										Tags
									</Text>
									<Group
										gap="xs"
										wrap="wrap"
									>
										{allTags.map((tag) => (
											<Button
												key={tag}
												variant={
													selectedTags.includes(
														tag
													)
														? "filled"
														: "outline"
												}
												size="sm"
												radius="xl"
												onClick={() =>
													toggleTag(tag)
												}
												style={{
													backgroundColor:
														selectedTags.includes(
															tag
														)
															? "#9333ea"
															: "transparent",
													borderColor:
														"#9333ea",
													color: selectedTags.includes(
														tag
													)
														? "white"
														: "#9333ea",
													fontWeight: 500,
												}}
											>
												{tag}
											</Button>
										))}
									</Group>
								</div>

								{(selectedCategory || selectedTags.length > 0) && (
									<Group
										justify="space-between"
										align="center"
									>
										<Text
											size="sm"
											c="dimmed"
										>
											{filteredTools.length} von{" "}
											{Tools.length} Tools angezeigt
										</Text>
										<Button
											variant="subtle"
											size="sm"
											onClick={() => {
												setSelectedCategory(
													null
												);
												setSelectedTags([]);
											}}
											style={{ color: "#1e3a8a" }}
										>
											✕ Filter zurücksetzen
										</Button>
									</Group>
								)}
							</Stack>
						</Paper>

						{/* Tools Grid */}
						{filteredTools.length > 0 ? (
							<Grid>
								{filteredTools.map((tool) => {
									const categoryColor = getCategoryColor(
										tool.category
									);
									// Find the actual index in the original Tools array
									const toolIndex = Tools.findIndex(
										(t) => t === tool
									);
									return (
										<Grid.Col
											key={toolIndex}
											span={{
												base: 12,
												sm: 6,
												md: 4,
											}}
										>
											<Card
												shadow="lg"
												padding={0}
												radius="lg"
												style={{
													height: "100%",
													display: "flex",
													flexDirection:
														"column",
													transition: "transform 0.3s ease, box-shadow 0.3s ease",
													overflow: "hidden",
													border: "none",
												}}
												onMouseEnter={(e) => {
													e.currentTarget.style.transform =
														"translateY(-8px)";
													e.currentTarget.style.boxShadow =
														"0 12px 40px rgba(0, 0, 0, 0.15)";
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.transform =
														"translateY(0)";
													e.currentTarget.style.boxShadow =
														"0 4px 12px rgba(0, 0, 0, 0.1)";
												}}
											>
												{/* Colored Header */}
												<Box
													style={{
														background: `linear-gradient(135deg, ${categoryColor} 0%, ${categoryColor}dd 100%)`,
														padding: "1.5rem",
														color: "white",
														position: "relative",
														zIndex: 1,
														width: "100%",
														display: "flex",
														flexDirection:
															"column",
													}}
												>
													<TruncatedTitle
														title={
															tool.title
														}
													/>
													<Group
														gap="xs"
														wrap="wrap"
														style={{
															width: "100%",
														}}
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
																	style={{
																		backgroundColor:
																			"rgba(255, 255, 255, 0.3)",
																		color: "white",
																		border: "1px solid rgba(255, 255, 255, 0.5)",
																		backdropFilter:
																			"blur(10px)",
																		flexShrink: 0,
																	}}
																>
																	{
																		tag
																	}
																</Badge>
															)
														)}
													</Group>
												</Box>

												{/* Content */}
												<Stack
													gap="md"
													p="lg"
													style={{
														flex: 1,
													}}
												>
													<Text
														size="sm"
														c="dimmed"
														style={{
															flex: 1,
															lineHeight: 1.6,
															display: "-webkit-box",
															WebkitLineClamp: 6,
															WebkitBoxOrient:
																"vertical",
															overflow: "hidden",
															textOverflow:
																"ellipsis",
															minHeight: "9.6em",
															maxHeight: "9.6em",
														}}
													>
														{
															tool.shortDescription
														}
													</Text>

													<Group
														justify="space-between"
														align="center"
														mt="auto"
													>
														<Text
															size="xs"
															c="dimmed"
														>
															{formatDate(
																tool.updatedAt
															)}
														</Text>
														<Button
															component={
																Link
															}
															href={`/toolbox/${toolIndex}`}
															size="sm"
															radius="xl"
															style={{
																background: `linear-gradient(135deg, ${categoryColor} 0%, ${categoryColor}dd 100%)`,
																color: "white",
																fontWeight: 500,
															}}
														>
															Mehr
															erfahren
															→
														</Button>
													</Group>
												</Stack>
											</Card>
										</Grid.Col>
									);
								})}
							</Grid>
						) : (
							<Paper
								p="xl"
								withBorder
								radius="lg"
								style={{ textAlign: "center" }}
							>
								<Text
									size="lg"
									c="dimmed"
								>
									Keine Tools gefunden. Bitte passen Sie Ihre
									Filter an.
								</Text>
							</Paper>
						)}
					</Stack>
				</Container>
			</div>
		</>
	);
}
