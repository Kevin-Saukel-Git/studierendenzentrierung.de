import { AppShell, Group, Text, Anchor, Button, Menu, Stack, TextInput, Paper, Box } from "@mantine/core";
import { ReactNode, useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Tools, Tool } from "../data/Tool";

interface LayoutProps {
	children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");
	const [isSearchFocused, setIsSearchFocused] = useState(false);
	const searchRef = useRef<HTMLDivElement>(null);

	// Search functionality
	const searchResults = useMemo(() => {
		if (!searchQuery.trim()) return [];

		const query = searchQuery.toLowerCase().trim();
		return Tools.filter((tool) => {
			const titleMatch = tool.title.toLowerCase().includes(query);
			const descriptionMatch = tool.shortDescription.toLowerCase().includes(query);
			const categoryMatch = tool.category.toLowerCase().includes(query);
			const tagsMatch = tool.tags.some((tag) => tag.toLowerCase().includes(query));
			return titleMatch || descriptionMatch || categoryMatch || tagsMatch;
		}).slice(0, 5); // Limit to 5 results
	}, [searchQuery]);

	// Close search dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
				setIsSearchFocused(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleSearchSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			router.push(`/toolbox/die-tools?search=${encodeURIComponent(searchQuery.trim())}`);
			setSearchQuery("");
			setIsSearchFocused(false);
		}
	};

	const handleResultClick = (toolIndex: number) => {
		router.push(`/toolbox/${toolIndex}`);
		setSearchQuery("");
		setIsSearchFocused(false);
	};

	return (
		<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<AppShell
				header={{ height: 100 }}
				padding={0}
			>
				<AppShell.Header
					withBorder={false}
					style={{
						backgroundColor: "rgba(255, 255, 255, 0.95)",
						backdropFilter: "blur(10px)",
						boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
					}}
				>
					<div
						style={{
							width: "100%",
							height: "100%",
							padding: "1rem 3rem",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "2rem",
						}}
					>
						<Link
							href="/"
							style={{
								display: "flex",
								alignItems: "center",
								textDecoration: "none",
								flexShrink: 0,
							}}
						>
							<Image
								src="/Logo.png"
								alt="Studierendenzentrierung"
								width={300}
								height={70}
								style={{
									height: "auto",
									width: "auto",
									maxHeight: "70px",
								}}
								priority
							/>
						</Link>

						<Group
							gap="xs"
							style={{
								border: "1px solid rgba(96, 165, 250, 0.2)",
								borderRadius: "28px",
								padding: "0.25rem 0.5rem",
								flex: 1,
								maxWidth: "650px",
								justifyContent: "center",
								margin: "0 auto",
								boxShadow: "0 4px 12px rgba(96, 165, 250, 0.1), 0 1px 2px rgba(0, 0, 0, 0.04)",
								backgroundColor: "rgba(255, 255, 255, 0.8)",
								backdropFilter: "blur(8px)",
							}}
						>
							<Button
								variant="subtle"
								component="a"
								href="/"
								size="md"
								style={{
									color: "#1e3a8a",
									borderRadius: "20px",
									fontWeight: 500,
									transition: "all 0.2s ease",
								}}
							>
								Startseite
							</Button>
							<Button
								variant="subtle"
								component="a"
								href="/der-begriff"
								size="md"
								style={{
									color: "#1e3a8a",
									borderRadius: "20px",
									fontWeight: 500,
									transition: "all 0.2s ease",
								}}
							>
								Der Begriff
							</Button>
							<Menu
								shadow="lg"
								width={300}
								trigger="hover"
								openDelay={100}
								closeDelay={300}
							>
								<Menu.Target>
									<Button
										variant="subtle"
										size="md"
										style={{
											color: "#1e3a8a",
											borderRadius: "20px",
											fontWeight: 500,
											transition: "all 0.2s ease",
										}}
										rightSection={
											<svg
												width="12"
												height="12"
												viewBox="0 0 12 12"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												style={{
													marginLeft: "4px",
												}}
											>
												<path
													d="M2 4L6 8L10 4"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										}
									>
										Toolbox
									</Button>
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Item
										component="a"
										href="/toolbox/die-tools"
									>
										<Stack gap={2}>
											<Text
												size="sm"
												fw={500}
											>
												Tools für
												Studierendenzentrierung
											</Text>
											<Text
												size="xs"
												c="dimmed"
											>
												Übersicht einer
												Best-Practice-Sammlung
												zum Thema
												Studierendenzentrierung
											</Text>
										</Stack>
									</Menu.Item>
									<Menu.Item
										component="a"
										href="/toolbox/verfahren"
									>
										<Stack gap={2}>
											<Text
												size="sm"
												fw={500}
											>
												Verfahren
											</Text>
											<Text
												size="xs"
												c="dimmed"
											>
												Informationen zum
												Einreichungs- und
												Bewertungsprozess
											</Text>
										</Stack>
									</Menu.Item>
									<Menu.Item
										component="a"
										href="/toolbox/einreichen"
									>
										<Stack gap={2}>
											<Text
												size="sm"
												fw={500}
											>
												Einreichen
											</Text>
											<Text
												size="xs"
												c="dimmed"
											>
												Reichen Sie Ihr Tool
												oder Ihre Methode ein
											</Text>
										</Stack>
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						</Group>

					<div
						ref={searchRef}
						style={{
							flexShrink: 0,
							display: "flex",
							justifyContent: "flex-end",
							position: "relative",
						}}
					>
						<form onSubmit={handleSearchSubmit} style={{ width: "100%" }}>
							<TextInput
								placeholder="Suchen..."
								size="md"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.currentTarget.value)}
								onFocus={() => setIsSearchFocused(true)}
								style={{
									width: "220px",
								}}
								styles={{
									input: {
										borderRadius: "24px",
										border: isSearchFocused
											? "1px solid rgba(30, 58, 138, 0.3)"
											: "1px solid rgba(0, 0, 0, 0.08)",
										backgroundColor: "rgba(255, 255, 255, 0.8)",
										backdropFilter: "blur(8px)",
										boxShadow: isSearchFocused
											? "0 4px 12px rgba(30, 58, 138, 0.15)"
											: "0 2px 8px rgba(0, 0, 0, 0.06)",
										transition: "all 0.2s ease",
									},
								}}
								rightSection={
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										style={{
											color: "var(--mantine-color-gray-6)",
											cursor: "pointer",
										}}
										onClick={handleSearchSubmit}
									>
										<path
											d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M14 14L11.1 11.1"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								}
							/>
						</form>

						{/* Search Results Dropdown */}
						{isSearchFocused && searchQuery.trim() && searchResults.length > 0 && (
							<Paper
								shadow="lg"
								p="xs"
								style={{
									position: "absolute",
									top: "100%",
									right: 0,
									marginTop: "8px",
									width: "400px",
									maxHeight: "400px",
									overflowY: "auto",
									zIndex: 1000,
									border: "1px solid rgba(0, 0, 0, 0.1)",
									borderRadius: "12px",
								}}
							>
								<Stack gap="xs">
									{searchResults.map((tool, index) => {
										const toolIndex = Tools.findIndex((t) => t === tool);
										return (
											<Box
												key={toolIndex}
												onClick={() => handleResultClick(toolIndex)}
												style={{
													padding: "12px",
													borderRadius: "8px",
													cursor: "pointer",
													transition: "background-color 0.2s ease",
												}}
												onMouseEnter={(e) => {
													e.currentTarget.style.backgroundColor =
														"rgba(30, 58, 138, 0.05)";
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.backgroundColor = "transparent";
												}}
											>
												<Text size="sm" fw={600} style={{ color: "#1e3a8a" }}>
													{tool.title}
												</Text>
												<Text size="xs" c="dimmed" lineClamp={2} mt={4}>
													{tool.shortDescription}
												</Text>
												<Group gap="xs" mt={8}>
													<Text size="xs" c="dimmed">
														{tool.category}
													</Text>
													{tool.tags.slice(0, 2).map((tag, tagIndex) => (
														<Text key={tagIndex} size="xs" c="dimmed">
															• {tag}
														</Text>
													))}
												</Group>
											</Box>
										);
									})}
									<Box
										style={{
											padding: "8px",
											borderTop: "1px solid rgba(0, 0, 0, 0.1)",
											marginTop: "4px",
										}}
									>
										<Text
											size="xs"
											c="dimmed"
											style={{ textAlign: "center", cursor: "pointer" }}
											onClick={handleSearchSubmit}
										>
											Alle Ergebnisse anzeigen →
										</Text>
									</Box>
								</Stack>
							</Paper>
						)}

						{/* No Results Message */}
						{isSearchFocused && searchQuery.trim() && searchResults.length === 0 && (
							<Paper
								shadow="lg"
								p="md"
								style={{
									position: "absolute",
									top: "100%",
									right: 0,
									marginTop: "8px",
									width: "300px",
									zIndex: 1000,
									border: "1px solid rgba(0, 0, 0, 0.1)",
									borderRadius: "12px",
								}}
							>
								<Text size="sm" c="dimmed" style={{ textAlign: "center" }}>
									Keine Ergebnisse gefunden
								</Text>
							</Paper>
						)}
					</div>
					</div>
				</AppShell.Header>

				<AppShell.Main style={{ flex: 1 }}>{children}</AppShell.Main>
			</AppShell>

			<footer
				style={{
					width: "100%",
					height: "80px",
					padding: "0 2rem",
					borderTop: "1px solid var(--mantine-color-gray-3)",
				}}
			>
				<div
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
					}}
				>
					<Group gap="md">
						<Anchor
							component={Link}
							href="/privacy-policy"
							size="sm"
							c="dimmed"
						>
							Datenschutzerklärung
						</Anchor>
						<Anchor
							component={Link}
							href="/impressum"
							size="sm"
							c="dimmed"
						>
							Impressum
						</Anchor>
					</Group>
				</div>
			</footer>
		</div>
	);
}
