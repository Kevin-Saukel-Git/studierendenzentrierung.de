import { AppShell, Group, Text, Anchor, Button, Menu, Stack, TextInput } from "@mantine/core";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
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
          <div style={{ 
            width: "100%", 
            height: "100%", 
            padding: "1rem 3rem", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            gap: "2rem"
          }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
              <Image
                src="/Logo.png"
                alt="Studierendenzentrierung"
                width={300}
                height={70}
                style={{ height: "auto", width: "auto", maxHeight: "70px" }}
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
                backdropFilter: "blur(8px)"
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
                  transition: "all 0.2s ease"
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
                  transition: "all 0.2s ease"
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
                      transition: "all 0.2s ease"
                    }}
                    rightSection={
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginLeft: "4px" }}
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
                  <Menu.Item component="a" href="/toolbox/die-tools">
                    <Stack gap={2}>
                      <Text size="sm" fw={500}>Die Tools</Text>
                      <Text size="xs" c="dimmed">
                        Übersicht aller verfügbaren Tools für die Studierendenzentrierung
                      </Text>
                    </Stack>
                  </Menu.Item>
                  <Menu.Item component="a" href="/toolbox/einreichen">
                    <Stack gap={2}>
                      <Text size="sm" fw={500}>Einreichen</Text>
                      <Text size="xs" c="dimmed">
                        Reichen Sie Ihr Tool oder Ihre Methode ein
                      </Text>
                    </Stack>
                  </Menu.Item>
                  <Menu.Item component="a" href="/toolbox/verfahren">
                    <Stack gap={2}>
                      <Text size="sm" fw={500}>Verfahren</Text>
                      <Text size="xs" c="dimmed">
                        Informationen zum Einreichungs- und Bewertungsprozess
                      </Text>
                    </Stack>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>

            <div style={{ flexShrink: 0, display: "flex", justifyContent: "flex-end" }}>
              <TextInput
                placeholder="Suchen..."
                size="md"
                style={{ 
                  width: "220px",
                }}
                styles={{
                  input: {
                    borderRadius: "24px",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                    transition: "all 0.2s ease"
                  }
                }}
                rightSection={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "var(--mantine-color-gray-6)" }}
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
            </div>
          </div>
        </AppShell.Header>

        <AppShell.Main style={{ flex: 1 }}>
          {children}
        </AppShell.Main>
      </AppShell>

      <footer style={{ width: "100%", height: "80px", padding: "0 2rem", borderTop: "1px solid var(--mantine-color-gray-3)" }}>
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Text size="sm" c="dimmed">
            © {new Date().getFullYear()} Studierendenzentrierung. All rights reserved.
          </Text>
          <Group gap="md">
            <Anchor href="/privacy-policy" size="sm" c="dimmed">
              Privacy Policy
            </Anchor>
            <Anchor href="/imprint" size="sm" c="dimmed">
              Impressum
            </Anchor>
          </Group>
        </div>
      </footer>
    </div>
  );
}
