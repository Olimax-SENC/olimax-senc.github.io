import {
  Alert,
  AspectRatio,
  Box,
  Group,
  Image,
  List,
  Paper,
  Space,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconBarrierBlock, IconLink } from "@tabler/icons-react";
import { NavLink } from "react-router";

export default function Home() {
  const theme = useMantineTheme();

  return (
    <>
      <Alert
        variant="light"
        color="pink"
        radius="md"
        title="Site under construction"
        icon={<IconBarrierBlock />}
      >
        This site is a work in progress. For now, it only serves as a repository
        for essential legal and technical documentation for our apps. Check back
        later for updates.
      </Alert>
      <Space h="75" />
      <Paper shadow="xs" p="xl">
        <Group>
          <AspectRatio ratio={1024 / 1024} maw="50">
            <Image
              radius="100%"
              bd="1px solid #000"
              src="./src/public/img/ucpc_logo.jpg"
              alt="Universal Capacity Planner Connector logo"
            />
          </AspectRatio>
          <Title size="h3">Universal Capacity Planner Connector</Title>
        </Group>
        <Space h="xl" />
        <Box ml="xl">
          <List
            spacing="md"
            size="sm"
            center
            icon={
              <ThemeIcon radius="xl" variant="light" size="sm">
                <IconLink />
              </ThemeIcon>
            }
          >
            <List.Item c={theme.colors.gray[5]}>
              Atlassian Marketplace listing (coming soon)
            </List.Item>
            <List.Item>
              <NavLink to="/eula">EULA</NavLink>
            </List.Item>
            <List.Item>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </List.Item>
            <List.Item>
              <NavLink to="/security">Security</NavLink>
            </List.Item>
          </List>
        </Box>
      </Paper>
    </>
  );
}
