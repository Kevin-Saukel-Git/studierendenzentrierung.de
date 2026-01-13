import { Button, Group, Title, Text, Stack, Card, Grid, Container, Box } from "@mantine/core";
import Link from "next/link";

export default function IndexPage() {
  return (
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
        <Container size="lg" style={{ padding: 0 }}>
          <Stack gap="xl" align="center">
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
            <Text size="xl" c="dimmed" maw={700}>
              Ein innovativer Ansatz in der Hochschulbildung, bei dem die Bedürfnisse,
              Interessen und Perspektiven der Studierenden im Mittelpunkt aller
              Entscheidungen und Prozesse stehen.
            </Text>
            <Group gap="md" justify="center" mt="xl">
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

      {/* Features Section */}
      <Container size="lg" py="5rem" px="2rem">
        <Stack gap="xl">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <Title order={2} size="2.5rem" fw={700} mb="md">
              Was wir bieten
            </Title>
            <Text size="lg" c="dimmed" maw={600} style={{ margin: "0 auto" }}>
              Entdecken Sie unsere umfassende Toolbox für studierendenzentrierte Hochschulbildung
            </Text>
          </div>

          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card
                shadow="lg"
                padding="xl"
                radius="lg"
                withBorder
                style={{
                  height: "100%",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <Stack gap="md">
                  <Box
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                      background: "#60a5fa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </Box>
                  <Title order={3} size="h4">
                    Die Tools
                  </Title>
                  <Text c="dimmed">
                    Eine umfassende Übersicht aller verfügbaren Tools und Methoden
                    für die Studierendenzentrierung in der Hochschulbildung.
                  </Text>
                  <Button
                    component={Link}
                    href="/toolbox/die-tools"
                    variant="light"
                    mt="auto"
                    style={{
                      color: "#1e3a8a",
                    }}
                  >
                    Tools ansehen →
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card
                shadow="lg"
                padding="xl"
                radius="lg"
                withBorder
                style={{
                  height: "100%",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <Stack gap="md">
                  <Box
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                      background: "#f97316",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                      <path d="M10 9H8" />
                    </svg>
                  </Box>
                  <Title order={3} size="h4">
                    Einreichen
                  </Title>
                  <Text c="dimmed">
                    Teilen Sie Ihre eigenen Tools und Methoden mit der Community
                    und tragen Sie zur Weiterentwicklung bei.
                  </Text>
                  <Button
                    component={Link}
                    href="/toolbox/einreichen"
                    variant="light"
                    mt="auto"
                    style={{
                      color: "#f97316",
                    }}
                  >
                    Jetzt einreichen →
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card
                shadow="lg"
                padding="xl"
                radius="lg"
                withBorder
                style={{
                  height: "100%",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <Stack gap="md">
                  <Box
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                      background: "#1e3a8a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </Box>
                  <Title order={3} size="h4">
                    Verfahren
                  </Title>
                  <Text c="dimmed">
                    Erfahren Sie mehr über den Einreichungs- und Bewertungsprozess
                    sowie die Kriterien für die Aufnahme in die Toolbox.
                  </Text>
                  <Button
                    component={Link}
                    href="/toolbox/verfahren"
                    variant="light"
                    mt="auto"
                    style={{
                      color: "#1e3a8a",
                    }}
                  >
                    Verfahren ansehen →
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>

      {/* CTA Section */}
      <Box
        style={{
          background: "linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, rgba(249, 115, 22, 0.05) 100%)",
          padding: "4rem 2rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Container size="md" style={{ padding: 0 }}>
          <Stack gap="lg" align="center">
            <Title order={2} size="2rem" fw={700} style={{ color: "#1e3a8a" }}>
              Bereit, loszulegen?
            </Title>
            <Text size="lg" c="dimmed" maw={600}>
              Entdecken Sie unsere Toolbox oder reichen Sie Ihr eigenes Tool ein,
              um die Studierendenzentrierung in der Hochschulbildung voranzutreiben.
            </Text>
            <Group gap="md" justify="center" mt="md">
              <Button
                component={Link}
                href="/toolbox/die-tools"
                size="lg"
                radius="xl"
                style={{
                  background: "#1e3a8a",
                  boxShadow: "0 4px 15px rgba(30, 58, 138, 0.3)",
                }}
              >
                Tools entdecken
              </Button>
              <Button
                component={Link}
                href="/toolbox/einreichen"
                size="lg"
                variant="outline"
                radius="xl"
                style={{
                  borderColor: "#f97316",
                  color: "#f97316",
                }}
              >
                Tool einreichen
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}
