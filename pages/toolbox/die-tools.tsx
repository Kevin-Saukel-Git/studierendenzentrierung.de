import { useState, useMemo } from "react";
import { Title, Text, Stack, Grid, Card, Button, Group, Badge, Paper, Box } from "@mantine/core";
import { Tools, Tool, ToolCategory, ToolTag } from "../../data/Tool";
import Link from "next/link";

export default function DieToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get unique categories and tags for filters
  const categories = Object.values(ToolCategory).filter(cat => cat !== ToolCategory.NONE);
  const allTags = Object.values(ToolTag);

  // Filter tools based on selected category and tags
  const filteredTools = useMemo(() => {
    return Tools.filter((tool) => {
      const categoryMatch = !selectedCategory || tool.category === selectedCategory;
      const tagMatch = selectedTags.length === 0 || selectedTags.some(tag => tool.tags.includes(tag as ToolTag));
      return categoryMatch && tagMatch;
    });
  }, [selectedCategory, selectedTags]);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric"
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
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh", padding: "2rem" }}>
      <Stack gap="xl">
          <div>
            <Title order={1} style={{ color: "#1e3a8a", marginBottom: "0.5rem" }}>
              Die Tools
            </Title>
            <Text size="lg" c="dimmed">
              Hier finden Sie eine Übersicht aller verfügbaren Tools für die Studierendenzentrierung.
            </Text>
          </div>

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
                <Text size="sm" fw={600} mb="xs" style={{ color: "#1e3a8a" }}>
                  Kategorien
                </Text>
                <Group gap="xs" wrap="wrap">
                  <Button
                    variant={selectedCategory === null ? "filled" : "outline"}
                    size="sm"
                    radius="xl"
                    onClick={() => setSelectedCategory(null)}
                    style={{
                      backgroundColor: selectedCategory === null ? "#1e3a8a" : "transparent",
                      borderColor: "#1e3a8a",
                      color: selectedCategory === null ? "white" : "#1e3a8a",
                      fontWeight: 500,
                    }}
                  >
                    Alle
                  </Button>
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={selectedCategory === cat ? "filled" : "outline"}
                      size="sm"
                      radius="xl"
                      onClick={() => setSelectedCategory(cat)}
                      style={{
                        backgroundColor: selectedCategory === cat ? getCategoryColor(cat) : "transparent",
                        borderColor: getCategoryColor(cat),
                        color: selectedCategory === cat ? "white" : getCategoryColor(cat),
                        fontWeight: 500,
                      }}
                    >
                      {cat}
                    </Button>
                  ))}
                </Group>
              </div>

              <div>
                <Text size="sm" fw={600} mb="xs" style={{ color: "#9333ea" }}>
                  Tags
                </Text>
                <Group gap="xs" wrap="wrap">
                  {allTags.map((tag) => (
                    <Button
                      key={tag}
                      variant={selectedTags.includes(tag) ? "filled" : "outline"}
                      size="sm"
                      radius="xl"
                      onClick={() => toggleTag(tag)}
                      style={{
                        backgroundColor: selectedTags.includes(tag) ? "#9333ea" : "transparent",
                        borderColor: "#9333ea",
                        color: selectedTags.includes(tag) ? "white" : "#9333ea",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </Button>
                  ))}
                </Group>
              </div>

              {(selectedCategory || selectedTags.length > 0) && (
                <Group justify="space-between" align="center">
                  <Text size="sm" c="dimmed">
                    {filteredTools.length} von {Tools.length} Tools angezeigt
                  </Text>
                  <Button
                    variant="subtle"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory(null);
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
              {filteredTools.map((tool, index) => {
                const categoryColor = getCategoryColor(tool.category);
                return (
                  <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                    <Card
                      shadow="lg"
                      padding={0}
                      radius="lg"
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        overflow: "hidden",
                        border: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-8px)";
                        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      {/* Colored Header */}
                      <Box
                        style={{
                          background: `linear-gradient(135deg, ${categoryColor} 0%, ${categoryColor}dd 100%)`,
                          padding: "1.5rem",
                          color: "white",
                        }}
                      >
                        <Title order={3} size="h4" style={{ color: "white", marginBottom: "0.75rem" }}>
                          {tool.title}
                        </Title>
                        <Group gap="xs">
                          {tool.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              size="sm"
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.3)",
                                color: "white",
                                border: "1px solid rgba(255, 255, 255, 0.5)",
                                backdropFilter: "blur(10px)",
                              }}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </Group>
                      </Box>

                      {/* Content */}
                      <Stack gap="md" p="lg" style={{ flex: 1 }}>
                        <Text size="sm" c="dimmed" style={{ flex: 1, lineHeight: 1.6 }}>
                          {tool.shortDescription}
                        </Text>
                        
                        <Group justify="space-between" align="center" mt="auto">
                          <Text size="xs" c="dimmed">
                            {formatDate(tool.updatedAt)}
                          </Text>
                          <Button
                            component={Link}
                            href={`/toolbox/${index}`}
                            size="sm"
                            radius="xl"
                            style={{
                              background: `linear-gradient(135deg, ${categoryColor} 0%, ${categoryColor}dd 100%)`,
                              color: "white",
                              fontWeight: 500,
                            }}
                          >
                            Mehr erfahren →
                          </Button>
                        </Group>
                      </Stack>
                    </Card>
                  </Grid.Col>
                );
              })}
            </Grid>
          ) : (
            <Paper p="xl" withBorder radius="lg" style={{ textAlign: "center" }}>
              <Text size="lg" c="dimmed">
                Keine Tools gefunden. Bitte passen Sie Ihre Filter an.
              </Text>
            </Paper>
          )}
        </Stack>
    </div>
  );
}
