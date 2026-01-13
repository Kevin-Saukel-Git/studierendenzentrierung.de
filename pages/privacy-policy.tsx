import { Title, Text, Stack, Paper } from "@mantine/core";

export default function PrivacyPolicyPage() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", padding: "2rem" }}>
      <Stack gap="xl">
        <Title order={1}>Privacy Policy</Title>
        
        <Paper p="xl" withBorder>
          <Stack gap="lg">
            <div>
              <Title order={2} size="h3" mb="md">
                1. Datenschutz auf einen Blick
              </Title>
              <Text>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen.
              </Text>
            </div>

            <div>
              <Title order={2} size="h3" mb="md">
                2. Allgemeine Hinweise und Pflichtinformationen
              </Title>
              <Text>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
                den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
              </Text>
            </div>

            <div>
              <Title order={2} size="h3" mb="md">
                3. Datenerfassung auf dieser Website
              </Title>
              <Text>
                Wenn Sie diese Website besuchen, werden automatisch Informationen
                allgemeiner Natur erfasst. Diese Informationen werden in den
                Server-Logfiles erfasst.
              </Text>
            </div>

            <div>
              <Title order={2} size="h3" mb="md">
                4. Ihre Rechte
              </Title>
              <Text>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
                Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
                erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
                dieser Daten zu verlangen.
              </Text>
            </div>

            <div>
              <Title order={2} size="h3" mb="md">
                5. Kontakt
              </Title>
              <Text>
                Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.
              </Text>
            </div>
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
}
