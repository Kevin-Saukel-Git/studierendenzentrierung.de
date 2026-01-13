import { Title, Text, Stack, Paper } from "@mantine/core";

export default function DerBegriffPage() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", padding: "2rem" }}>
      <Stack gap="xl">
        <Title order={1}>Der Begriff</Title>
        
        <Paper p="xl" withBorder>
          <Stack gap="md">
            <Text size="lg">
              Hier finden Sie Informationen zum Begriff der Studierendenzentrierung.
            </Text>
            <Text>
              Studierendenzentrierung beschreibt einen Ansatz in der Hochschulbildung,
              bei dem die Bedürfnisse, Interessen und Perspektiven der Studierenden
              im Mittelpunkt aller Entscheidungen und Prozesse stehen.
            </Text>
            <Text>
              Dieser Ansatz umfasst verschiedene Aspekte wie die Gestaltung von
              Lehrveranstaltungen, die Entwicklung von Curricula, die Bereitstellung
              von Unterstützungsangeboten und die Schaffung einer inklusiven
              Lernumgebung.
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
}
