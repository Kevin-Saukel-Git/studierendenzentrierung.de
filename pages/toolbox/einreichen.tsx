import { Title, Text, Stack, Paper, TextInput, Textarea, Button, Group } from "@mantine/core";

export default function EinreichenPage() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", padding: "2rem" }}>
      <Stack gap="xl">
        <Title order={1}>Einreichen</Title>
        
        <Paper p="xl" withBorder>
          <Stack gap="md">
            <Text size="lg">
              Reichen Sie hier Ihr Tool oder Ihre Methode für die Studierendenzentrierung ein.
            </Text>
            
            <form>
              <Stack gap="md">
                <TextInput
                  label="Name des Tools"
                  placeholder="Geben Sie den Namen ein"
                  required
                />
                
                <TextInput
                  label="Ihr Name"
                  placeholder="Ihr vollständiger Name"
                  required
                />
                
                <TextInput
                  label="E-Mail"
                  type="email"
                  placeholder="ihre.email@beispiel.de"
                  required
                />
                
                <Textarea
                  label="Beschreibung"
                  placeholder="Beschreiben Sie das Tool oder die Methode ausführlich"
                  rows={6}
                  required
                />
                
                <Textarea
                  label="Anwendungsbereich"
                  placeholder="Beschreiben Sie, in welchem Kontext das Tool eingesetzt werden kann"
                  rows={4}
                />
                
                <Group justify="flex-end" mt="md">
                  <Button type="submit" size="md">
                    Einreichen
                  </Button>
                </Group>
              </Stack>
            </form>
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
}
