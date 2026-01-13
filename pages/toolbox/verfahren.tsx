import { Title, Text, Stack, Paper, Timeline, Badge } from "@mantine/core";

export default function VerfahrenPage() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", padding: "2rem" }}>
      <Stack gap="xl">
        <Title order={1}>Verfahren</Title>
        
        <Paper p="xl" withBorder>
          <Stack gap="xl">
            <Text size="lg">
              Hier finden Sie Informationen zum Verfahren der Einreichung und Bewertung von Tools.
            </Text>

            <Timeline active={-1} bulletSize={24} lineWidth={2}>
              <Timeline.Item
                title="Einreichung"
                bullet={<Badge size="sm">1</Badge>}
              >
                <Text c="dimmed" size="sm">
                  Reichen Sie Ihr Tool oder Ihre Methode über das Einreichungsformular ein.
                  Bitte füllen Sie alle Pflichtfelder aus und beschreiben Sie Ihr Tool
                  so detailliert wie möglich.
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="Prüfung"
                bullet={<Badge size="sm">2</Badge>}
              >
                <Text c="dimmed" size="sm">
                  Unser Team prüft die Einreichung auf Vollständigkeit und Relevanz
                  für die Studierendenzentrierung. Dieser Prozess kann einige Tage
                  bis Wochen dauern.
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="Bewertung"
                bullet={<Badge size="sm">3</Badge>}
              >
                <Text c="dimmed" size="sm">
                  Das Tool wird von Expertinnen und Experten bewertet. Dabei werden
                  Kriterien wie Innovation, Praxistauglichkeit und Übertragbarkeit
                  berücksichtigt.
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="Veröffentlichung"
                bullet={<Badge size="sm">4</Badge>}
              >
                <Text c="dimmed" size="sm">
                  Nach erfolgreicher Bewertung wird das Tool in der Toolbox
                  veröffentlicht und steht allen Interessierten zur Verfügung.
                </Text>
              </Timeline.Item>
            </Timeline>
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
}
