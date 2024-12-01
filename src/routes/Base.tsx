import {
  AppShell,
  AspectRatio,
  Center,
  Container,
  useMantineTheme,
} from "@mantine/core";
import { Link, Outlet } from "react-router";

export default function Base() {
  const theme = useMantineTheme();

  return (
    <AppShell header={{ height: 80 }} padding="md">
      <AppShell.Header>
        <Center my="10">
          <Link to="/">
            <AspectRatio ratio={650 / 191} maw="180">
              <img
                src="/img/olimax_logo_alt.png"
                alt="Olimax logo"
              />
            </AspectRatio>
          </Link>
        </Center>
      </AppShell.Header>
      <AppShell.Main bg={theme.colors.gray[0]}>
        <Container>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
