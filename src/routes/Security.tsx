import { Anchor, List, Text, Title } from "@mantine/core";
import { useDocumentTitle } from "../utils/hooks";

export default function Security() {
  useDocumentTitle("Security");

  return (
    <>
      <Title my="xl">Security</Title>
      <Title order={2} my="md">
        Why does Olimax S.E.N.C. (Olimax) and its tool, Universal Capacity Plan
        Connector (UCPC), require permissions to access my Google account?
      </Title>
      <Text my="md">
        Olimax’s UCPC is a connector between your Jira Tempo Plans and your
        Google Calendar, allowing you to create plans and reminders from either
        tool through a bi-directional integration.
      </Text>
      <Text my="md">
        To do that, we ask for your permission to connect to your Google
        account, and authenticate that connection via Google Apps OAuth. Your
        UCPC account thus has the same industry-leading login security as your
        Google account.
      </Text>
      <Text my="md">
        UCPC requests access to the following Google APIs so that our features
        can work. UCPC does not make any changes to your Calendar without your
        explicit permission.
      </Text>
      <Text my="md">
        Calendar (documentation): UCPC creates for you calendar events
        associated with UCPC tasks that you create or are assigned to.
      </Text>
      <Title order={2}>What information does Olimax collect?</Title>
      <Text my="md">
        Olimax does not, and will never, sell or trade personal information
        about anyone who uses our services.
      </Text>
      <Text my="md">
        Olimax collects only as much information as needed to provide a
        functional Microsoft and Google productivity experience to you. For more
        on this, please see our Privacy Policy.
      </Text>
      <Text my="md">
        UCPC only retains data as long as it provides value for our users. (e.g.
        we don’t store calendar data for any tasks). UCPC removes data promptly
        once it is no longer referenced in the product, as far as technically
        feasible. (e.g. after we delete something in our main datastore, there
        might still be an encrypted copy in a Google backup). UCPC stores only
        as much data as necessary for critical debugging and analytical needs.
      </Text>

      <Title order={3}>Where is my data stored?</Title>
      <Text my="md">
        UPCP is built with the{" "}
        <Anchor href="https://developer.atlassian.com/platform/forge/">
          Atlassian Forge
        </Anchor>{" "}
        framework which focuses on security and privacy.{" "}
        <Text fw={700} span>
          Apps created using Forge framework are hosted by Atlassian. It means
          all app data are stored on the Atlassian servers only
        </Text>
        . Atlassian Forge takes care of authentication and authorization,
        software execution, and data management. The region of the app’s data
        storage is the same as your Jira or Confluence Cloud region.{" "}
      </Text>
      <Text my="md">
        UCPC is also built so that it has no{" "}
        <Anchor href="https://www.atlassian.com/blog/developer/no-egress-on-forge">
          data egress
        </Anchor>
        .
      </Text>
      <Text my="md">
        If you are connecting UCPC to your Google Calendar, then your data would
        be stored on the Google Platform. If you require more information on
        that, we recommend looking at their own Privacy and Security Policy.
      </Text>
      <Title order={3}>How secure is my information?</Title>
      <Text my="md">
        Olimax takes meaningful precautions to protect and safeguard our users’
        and our members’ information. Olimax has put in place physical,
        electronic, and procedural safeguards to protect the information UCPC
        collects and process. This includes, limiting access to employees,
        vendors, and others; use of pseudonymization and anonymization
        techniques where feasible; and use of encryption techniques when
        transmitting information. We do not share your data with any third party
        analytics companies.
      </Text>
      <Title order={2}>What are the Subprocessors that you use?</Title>
      <List my="md">
        <List.Item>
          <Anchor href="http://calendar.google.com">Google</Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://www.atlassian.com">Atlassian</Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://www.tempo.io">Tempo Software</Anchor>
        </List.Item>
        <List.Item>
          <Anchor href="https://www.digitalocean.com">DigitalOcean</Anchor>
        </List.Item>
      </List>
      <Title order={3}>How do I report vulnerabilities?</Title>
      <Text my="md">
        Olimax believes that working with skilled security researchers across
        the globe is crucial in identifying weaknesses in any technology. If you
        believe you’ve found a security issue in our product or service, we
        encourage you to notify us. We welcome working with you to resolve the
        issue promptly.
      </Text>
      <Title order={2}>Questions?</Title>
      <Text my="md">
        If you have more questions around Access Control, Change Control,
        Encryption (at rest and at transit), or any other security-related
        questions, please email us at{" "}
        <Anchor href="mailto:legal@olimax.ca">legal@olimax.ca</Anchor>.
      </Text>
      <Text my="md">
        We take your security and privacy very seriously. If you’d like to read
        more about how Google handles the security of data within their Cloud
        Platform, we recommend reading their documentation on it.
      </Text>
    </>
  );
}
