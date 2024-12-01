import { Anchor, AspectRatio, Center, List, Text, Title } from "@mantine/core";
import { useDocumentTitle } from "../../utils/hooks";

export default function Documentation() {
  useDocumentTitle("UCPC - Docs");

  return (
    <>
      <Title my="xl">Universal Capacity Planner Connector documentation</Title>
      <Text my="md">
        Welcome to our hub for the Universal Capacity Plan Connector. This is
        where you will be able to find all of the documentation to configure
        your app.
      </Text>
      <Title order={2}>Installation</Title>
      <Text my="md">
        You can get Universal Capacity Plan Connector (UCPC) from the Atlassian
        Marketplace or directly from Jira (apps → find new apps).
      </Text>
      <Text my="md">
        The app is distributed by Atlassian, so the payments will be done
        through Atlassian as well.
      </Text>
      <Text my="md">
        Buying through Atlassian means that you have access to a free 30-day
        trial. You do not need OliMax’s special permission to do so.
      </Text>
      <Title order={2}>Getting Started</Title>
      <Title order={3} my="md">
        What does the app do?
      </Title>
      <Text my="md">
        UCPC is a bi-directional connector between Google Calendar and Tempo
        Capacity Planner (Formerly Tempo Planner).
      </Text>
      <List type="ordered" my="md">
        <List.Item>
          UCPC lets you sync your plans from Tempo into your personal Google
          Calendar
        </List.Item>
        <List.Item>
          UCPC lets you sync your Google Calendar events into Tempo
        </List.Item>
      </List>
      <Title order={3}>Apps requirement</Title>
      <Text my="md">
        To properly work, users will have to connect the following apps:
      </Text>
      <List type="ordered" my="md">
        <List.Item>
          <Anchor href="https://marketplace.atlassian.com/apps/1211881/capacity-planner-jira-team-resource-management-tempo?hosting=cloud&tab=overview">
            Tempo Capacity Planner
          </Anchor>{" "}
          (You might need special permission to allow access)
        </List.Item>
        <List.Item>
          <Anchor href="https://calendar.google.com/">Google Calendar</Anchor>
        </List.Item>
        <List.Item>Universal Capacity Planner Connector</List.Item>
      </List>
      <Title order={3}>Setup</Title>
      <Text my="md">
        Do note that UCPC will need to be connected on an individual basis.{" "}
        <Text fw={700} span>
          This means that anyone who wishes to connect Tempo Capacity Planner
          (Tempo Planner) to Google Calendar will need to go through the
          following steps.
        </Text>
      </Text>
      <Title order={4}>Navigating to the app</Title>
      <Text my="md">
        UCPC can only be found under the managed app tab in Jira (Apps → 3 dots
        → Manage apps → UCPC → Configure)
      </Text>
      <Center>
        <AspectRatio ratio={12.26 / 8} maw="500">
          <img
            src="/src/public/img/ucpc_docs/docs1.png"
            alt="Universal Capacity Planner Connector documentation step 1"
          />
        </AspectRatio>
      </Center>
      <Title order={4}>
        Authenticating Tempo Capacity Planner (Tempo Planner)
      </Title>
      <Text my="md">
        For UCPC to work, you will first need to connect Tempo Capacity Planner
        (Tempo Planner).
      </Text>
      <Text my="md">
        To do so , you will need to authenticate the Tempo app.
      </Text>
      <Text my="md">
        When you first start using UCPC, the app will display an error message
        mentioning that you need to authenticate the app. To remedy that
        problem, click on “Tempo - Not Authenticated” to go to the next step
      </Text>
      <Center>
        <AspectRatio ratio={16 / 12.65} maw="500">
          <img
            src="/src/public/img/ucpc_docs/docs2.png"
            alt="Universal Capacity Planner Connector documentation step 2"
          />
        </AspectRatio>
      </Center>
      <Text my="md">
        You can then follow the instructions shown on your screen for the
        information to fill in.
      </Text>
      <Center>
        <AspectRatio ratio={16.51 / 9.99} maw="500">
          <img
            src="/src/public/img/ucpc_docs/docs3.png"
            alt="Universal Capacity Planner Connector documentation step 3"
          />
        </AspectRatio>
      </Center>
      <Text my="md">
        To authorize your Tempo account, you will need to generate secure OAuth
        2.0 codes inside your Tempo dashboard.
      </Text>
      <Text my="md">
        To do so, navigate to: Apps {">"} Tempo {">"} Settings {">"} OAuth 2.0
        Applications {">"} + New Application.
      </Text>
      <Text fw={700}>
        Do note that you might need special permission to enable this request.
      </Text>
      <Text my="md">And enter the following information:</Text>
      <Center>
        <AspectRatio ratio={17.09 / 9.35} maw="500">
          <img
            src="/src/public/img/ucpc_docs/docs4.png"
            alt="Universal Capacity Planner Connector documentation step 4"
          />
        </AspectRatio>
      </Center>
      <List my="md">
        <List.Item>
          <Text fw={700} span>
            Name:
          </Text>{" "}
          Universal Capacity Planner Connector
        </List.Item>
        <List.Item>
          <Text fw={700} span>
            Redirect URI
          </Text>{" "}
          (copy the text shown). For example:
          https://b28206c7-9e77-47e1-aa50-32cde751a4ee.hello.atlassian-dev.net/x1/I9lX9uoZCwdxnWA7h9CQ2p07zO0
        </List.Item>
        <List.Item>
          <Text fw={700} span>
            Client type:
          </Text>{" "}
          Confidential
        </List.Item>
        <List.Item>
          <Text fw={700} span>
            Authorization grant type:
          </Text>{" "}
          Authorization Code
        </List.Item>
      </List>
      <Text my="md">
        Once you create the application, you will get the required credentials
        from Tempo.
      </Text>
      <Center>
        <AspectRatio ratio={18.13 / 9.84} maw="500">
          <img
            src="/src/public/img/ucpc_docs/docs5.png"
            alt="Universal Capacity Planner Connector documentation step 5"
          />
        </AspectRatio>
      </Center>
      <Text my="md">
        Fill out the resulting OAuth 2.0 credentials back into the UCPC fields:
      </Text>
      <List my="md">
        <List.Item>
          <Text fw={700} span>
            Client ID:
          </Text>{" "}
          Your generated Tempo Client ID
        </List.Item>
        <List.Item>
          <Text fw={700} span>
            Client Secret:
          </Text>{" "}
          Your generated Tempo Client Secret
        </List.Item>
      </List>
      <Text my="md">And continue to the next step.</Text>
      <Text my="md">
        You will be redirected to a permission page where you will need to
        authorize the access to your Tempo data → Authorize Access
      </Text>
      <Center>
        <AspectRatio ratio={17.68 / 8.76} maw="500">
          <img
            src="/src/public/img/ucpc_docs/docs6.png"
            alt="Universal Capacity Planner Connector documentation step 6"
          />
        </AspectRatio>
      </Center>
      <Text my="md">
        Once this is done, the Tempo side will be Authenticated. You will still
        need to activate it and enable the use cases that you want (See Use Case
        section)
      </Text>
      <Center>
        <AspectRatio ratio={16.89 / 10.36} maw="500">
          <img
            src="/src/public/img/ucpc_docs/docs7.png"
            alt="Universal Capacity Planner Connector documentation step 7"
          />
        </AspectRatio>
      </Center>
      <Title order={4}>Authenticating Google Calendar</Title>
      <Text my="md">
        For UCPC to work, you will also need to connect Google Calendar.
      </Text>
      <Text my="md">To do so , you will need to authenticate Google.</Text>
      <Center>
        <AspectRatio ratio={17.57 / 10.88} maw="500">
          <img
            src="/src/public/img/ucpc_docs/docs8.png"
            alt="Universal Capacity Planner Connector documentation step 8"
          />
        </AspectRatio>
      </Center>
      <Text my="md">
        When you first start using UCPC, the app will display an error message
        mentioning that you need to authenticate the app. To remedy to that
        problem, click on “Google - Not Authenticated” to go to the next step.
      </Text>
      <Center>
        <AspectRatio ratio={18.85 / 10.73} maw="500">
          <img
            src="/src/public/img/ucpc_docs/docs9.png"
            alt="Universal Capacity Planner Connector documentation step 9"
          />
        </AspectRatio>
      </Center>
      <Text my="md">
        Once you click on to start the next step, you will get a message asking
        you to authorize your Google Account .
      </Text>
      <Text my="md">
        You will be redirected to the Google OAuth 2.0 page. Once the process is
        done, refresh this page to see the changes. This will redirect you to a
        new page where you will need to accept the permission requests from
        UCPC.
      </Text>
      <Center>
        <AspectRatio ratio={17.16 / 11.81} maw="500">
          <img
            src="/src/public/img/ucpc_docs/docs10.png"
            alt="Universal Capacity Planner Connector documentation step 10"
          />
        </AspectRatio>
      </Center>
      <Text my="md" fs="italic">
        About the permission requests:
      </Text>
      <List my="md">
        <List.Item>
          UCPC needs to see your calendars and your events that you have as part
          of them
        </List.Item>
        <List.Item>
          UCPC needs to be able to create calendar events to sync Tempo Plans to
          Google
        </List.Item>
      </List>
      <Text my="md">
        Once this is complete, the authentication process will be completed. You
        will still need to activate it and enable the use cases that you want (
        <Text fs="italic" span>
          See Use Case section
        </Text>
        ).
      </Text>
      <Center>
        <AspectRatio ratio={17.7 / 12.21} maw="500">
          <img
            src="/src/public/img/ucpc_docs/docs11.png"
            alt="Universal Capacity Planner Connector documentation step 11"
          />
        </AspectRatio>
      </Center>
    </>
  );
}
