import { Anchor, List, Text, Title } from "@mantine/core";
import { Link } from "react-router";
import { useDocumentTitle } from "../utils/hooks";

export default function PrivacyPolicy() {
  useDocumentTitle("Privacy Policy");

  return (
    <>
      <Title my="xl">Privacy Policy</Title>
      <Title order={2}>What information do we collect?</Title>
      <Text my="md">
        We collect information from you when you register on our site or fill
        out a form. Any data we request that is not required will be specified
        as voluntary or optional. When registering on our site, as appropriate,
        you may be asked to enter your: name, e-mail address, mailing address or
        credit card information. You may, however, visit our site anonymously.
      </Text>
      <Title order={3}>Forge apps</Title>
      <Text my="md">
        <Anchor href="https://developer.atlassian.com/platform/forge/">
          Atlassian Forge
        </Anchor>{" "}
        is a new app framework with focus on security and privacy.
      </Text>
      <Text my="md">
        <Text fw={700} span>
          Apps created using Forge framework are hosted by Atlassian. It means
          all app data is stored on the Atlassian servers only
        </Text>
        . The region of the app’s data storage is the same as your Jira or
        Confluence Cloud region.
      </Text>
      <Text my="md">
        Since our Forge apps are run on Atlassian's infrastructure and do not
        communicate with external services. We have no automated access to data
        or personal information generated as part of your usage of our apps.
      </Text>
      <Text my="md">
        Atlassian Forge takes care of authentication and authorization, software
        execution, and data management. The region of the app’s data storage is
        the same as your Jira or Confluence Cloud region.
      </Text>
      <Title order={2}>What do we use your information for?</Title>
      <Text my="md">
        We provide customer relationship management services to you. We process
        personal data as necessary to perform these services:
      </Text>
      <List my="md">
        <List.Item>To personalize your experience</List.Item>
        <List.Item>To improve our website</List.Item>
        <List.Item>To improve customer service</List.Item>
      </List>
      <Title order={2}>
        Do we disclose any information to outside parties?
      </Title>
      <Text my="md">
        We do not sell, trade, or otherwise transfer your personal information
        except in accordance with this policy. This does not include trusted
        third parties who assist us in operating our website, conducting our
        business, or servicing you, so long as those parties agree to keep this
        information confidential. We may also release your information when we
        believe release is appropriate to comply with the law, enforce our site
        policies, or protect ours or others’ rights, property, or safety.
      </Text>
      <Title order={2}>Security?</Title>
      <Text my="md">
        We take pride in having built and actively maintaining a secure site and
        product. You can find out more about our specific policies around
        security at <Link to="/security">https://www.olimax.ca/security/</Link>.
      </Text>
      <Text fw={700}>Effective Date: 25/11/2024</Text>
      <Text my="md">
        This Privacy Policy describes the data protection practices of Olimax
        S.E.N.C., hencefore referred to as (“Olimax,” “we,” “us,” or “our”).
        This Privacy Policy applies to information that we collect and use about
        you when you access or use the Olimax website, or other online or
        offline Olimax services that link to or refer to this Privacy Policy. We
        refer to these products and services collectively as the “Services.”
      </Text>
      <Text my="md">
        However, please note that this Privacy Policy does not cover information
        about users that we receive from customers that have signed a separate
        agreement and data processing agreement with us (“Customers”), or that
        we otherwise process on behalf of such Customers, in connection with the
        services provided by Olimax to those Customers (“Customer End Users”).
        Olimax processes Customer End User information under the instructions of
        the relevant Customer as the “data controller” or similar role as
        defined in applicable privacy laws. Olimax’s obligations as a “data
        processor” or “service provider” with respect to such information are
        defined in the applicable agreements, and are not made part of this
        Privacy Policy. If you are a Customer End User and you have questions
        about how your information is collected and processed through the
        services, please contact the Customer who has provided your information
        to us for more information.
      </Text>
      <Text fw={700} my="md">
        PLEASE READ THIS PRIVACY POLICY CAREFULLY TO UNDERSTAND HOW WE HANDLE
        YOUR INFORMATION. IF YOU DO NOT AGREE TO THIS PRIVACY POLICY, PLEASE DO
        NOT USE THE SERVICES.
      </Text>
      <Text my="md">This Privacy Policy contains the following sections:</Text>
      <List my="md">
        <List.Item>The Information We Collect</List.Item>
        <List.Item>How We Use Your Information</List.Item>
        <List.Item>Legal Bases for Use of Your Information</List.Item>
        <List.Item>Cookies and Similar Technologies</List.Item>
        <List.Item>Online Analytics and Advertising</List.Item>
        <List.Item>How We Share and Disclose Your Information</List.Item>
        <List.Item>Retention of Your Information</List.Item>
        <List.Item>Data Subject Rights and Your Choices</List.Item>
        <List.Item>Third Party Links and Features</List.Item>
        <List.Item>International Users</List.Item>
        <List.Item>How We Protect Your Information</List.Item>
        <List.Item>California Privacy Rights</List.Item>
        <List.Item>Changes to Our Privacy Policy</List.Item>
        <List.Item>Olimax Contact Information</List.Item>
      </List>
      <Title order={2}>THE INFORMATION WE COLLECT</Title>
      <Title order={3} my="md">
        1. Information You Provide to Us
      </Title>
      <Text my="md">
        We collect a variety of information that you provide directly to us. For
        example, we collect information from you through:
      </Text>
      <List my="md">
        <List.Item>
          The Services you use and your registration to use the Services
        </List.Item>
        <List.Item>
          Requests or questions you submit to us via online forms, email, or
          otherwise
        </List.Item>
        <List.Item>Uploads or posts to the Services</List.Item>
        <List.Item>
          Requests for customer support and technical assistance
        </List.Item>
      </List>
      <Text my="md">
        The types of data we may collect directly from you includes:
      </Text>
      <List my="md">
        <List.Item>Email address</List.Item>
        <List.Item>Mailing address</List.Item>
        <List.Item>Business titles and roles</List.Item>
        <List.Item>First and last name</List.Item>
        <List.Item>
          Payment information, collected by our third-party payment processors
          (e.g., Atlassian) on our behalf
        </List.Item>
        <List.Item>
          Information about how the Services are implemented and used
        </List.Item>
        <List.Item>
          Information about your support and customer success interactions with
          us
        </List.Item>
        <List.Item>
          Information provided in responses to surveys we conduct
        </List.Item>
        <List.Item>
          Any other information you choose to directly provide to us in
          connection with your use of the Services
        </List.Item>
      </List>
      <Text my="md">
        When you interact with our Services, we also collect a variety of
        metadata regarding your use of the Services such as: email addresses and
        names of participants; email headers; and information about the number
        of times and times emails are sent, timing and participants in calls and
        meetings, text notes, and similar information generated through your use
        of the Services.
      </Text>
      <Title order={3}>2. Information We Collect Through Automated Means</Title>
      <Text my="md">
        When you use our Services, we collect certain information as described
        in this Section. As discussed further below, we and our service
        providers (which are third party companies that work on our behalf), may
        use a variety of technologies, including cookies and similar tools, to
        assist in collecting this information.
      </Text>
      <Text my="md">
        Specifically, when you use our Services, we may collect and analyze
        information such as your IP address, browser types, browser language,
        operating system, software and hardware attributes (including device
        IDs) referring and exit pages and URLs, files you download, domain
        names, pages viewed and the order of those pages, the date and time you
        used the Services, error logs, and other similar information. We may
        also collect general location information (e.g., IP address, city/state
        and or postal code associated with an IP address) from your computer or
        mobile device.
      </Text>
      <Title order={3}>3. Information We Collect from Others</Title>
      <Text my="md">
        <Text fw={700} span>
          Google
        </Text>
        . We collect a variety of information related to your Google accounts to
        facilitate your use of the Services. Olimax’s use and transfer to any
        other app of information received from Google accounts will adhere to
        Google API Services User Data Policy, including the Limited Use
        requirements.
      </Text>
      <Text my="md">
        <Text fw={700} span>
          Others
        </Text>
        . We may receive additional business information such as demographic and
        statistical information from third parties, such as business partners,
        marketers, researchers, analysts, and other parties that we may
        attribute to you. We use this information to supplement the information
        that we collect directly from you in order to derive your possible
        interests and to provide more relevant experiences for you and improve
        our products, analytics, and advertising.
      </Text>
      <Title order={2}>HOW WE USE YOUR INFORMATION</Title>
      <Text my="md">
        We, or our service providers, use your information for various purposes
        depending on the types of information we have collected from and about
        you, in order to:
      </Text>
      <List my="md">
        <List.Item>Provides the Services to you</List.Item>
        <List.Item>
          Respond to your requests for information and provide you with more
          effective and efficient service
        </List.Item>
        <List.Item>
          Generate reports and insights of your interactions through the
          Services on your behalf
        </List.Item>
        <List.Item>
          Contact you by email, postal mail, or phone regarding Olimax and
          partner products, services, surveys, research studies, promotions,
          special events and other subjects that we think may be of interest to
          you
        </List.Item>
        <List.Item>Customize the content you see on the Services</List.Item>
        <List.Item>
          Help us better understand your interests and needs, and improve the
          Services, including through research and reports, and test and create
          new products, features, and services
        </List.Item>
        <List.Item>
          Secure our Services and resolve technical issues being reported
        </List.Item>
        <List.Item>
          Comply with any procedures, laws, and regulations which apply to us
          where it is necessary for our legitimate interests or the legitimate
          interests of others
        </List.Item>
        <List.Item>
          Establish, exercise, or defend our legal rights where it is necessary
          for our legitimate interests or the legitimate interests of others
        </List.Item>
      </List>
      <Text my="md">
        <Text fw={700} span>
          Combined Information
        </Text>
        . For the purposes discussed in this Privacy Policy, we may combine the
        information that we collect through the Services with information that
        we receive from other sources, both online and offline, and use such
        combined information in accordance with this Privacy Policy.
      </Text>
      <Text my="md">
        <Text fw={700} span>
          Aggregated/De-Identified Data
        </Text>
        . We may aggregate and/or de-identify information collected through the
        Services so that such information does not identify you as the source of
        the information (“Aggregate/De-Identified Information”). We may use such
        information to improve the Services, for research and marketing
        purposes, and may also share such data with third parties, including
        advertisers, promotional partners, customers, and sponsors.
      </Text>
      <Title order={2}>LEGAL BASES FOR USE OF YOUR INFORMATION</Title>
      <Text my="md">
        The legal bases for using your information as set out in this Privacy
        Policy are as follows:
      </Text>
      <List my="md">
        <List.Item>
          Where use of your information is necessary to perform our obligations
          under a contract with you (for example, to comply with: our relevant
          terms or a purchase you made)
        </List.Item>
        <List.Item>
          Where use of your information is necessary for our legitimate
          interests or the legitimate interests of others (for example, to
          provide security for our Services; operate our business and our
          Services; receive payments; comply with legal requirements and defend
          our legal rights; and prevent fraud)
        </List.Item>
        <List.Item> Where we have legal reasons to process such data</List.Item>
        <List.Item>
          Where we have your consent to engage in a particular processing
          activity
        </List.Item>
      </List>
      <Text fw={700} my="md">
        Cookies and Similar Technologies
      </Text>
      <Text my="md">
        To collect the information in the “Information We Automatically Collect”
        section above, we and our service providers may use Internet server
        logs, cookies, tracking pixels, and other similar tracking technologies.
        We use these technologies to offer you a more tailored experience by
        understanding and remembering your particular browsing preferences.
        Cookies are small text files that are placed on your computer or mobile
        device when you visit a site or app, that enable us to: (i)recognize
        your device; (ii) store your preferences and settings; (iii)understand
        the parts of the Services you have used; (iv) enhance your user
        experience by delivering and measuring the effectiveness of content and
        advertising tailored to your interests; (v) perform searches and
        analytics; and(vi) assist with security and administrative functions.
      </Text>
      <Text my="md">
        As we adopt additional technologies, we may also gather information
        through other methods.
      </Text>
      <Text my="md">
        Please note that you can change your settings to notify you when a
        cookie is being set or updated, or to block cookies altogether. Please
        consult the “Help” section of your browser for more information (e.g.,
        Internet Explorer; Google Chrome; MozillaFirefox; or Apple Safari).
        Please note that by blocking, disabling, or managing any or all cookies,
        you may not have access to certain features or offerings of the Services
        (for example, cookies are required to connect the Services with your
        Gmail account).
      </Text>
      <Title order={2}>ONLINE ANALYTICS AND ADVERTISING</Title>
      <Title order={3} my="md">
        1. Analytics
      </Title>
      <Text my="md">
        We may use third-party web analytics services (such as those of Google
        Analytics) on our Services to collect and analyze usage information
        through cookies and similar tools; engage in auditing, research, or
        reporting; assist with fraud prevention; and provide certain features to
        you. To prevent Google Analytics from using your information for
        analytics, you may install the Google AnalyticsOpt-out Browser Add-on by
        clicking here. If you receive email from us, we may use certain
        analytics tools, such as clear GIFs to capture data such as when you
        open our message or click on any links or banners our email contains.
        This data allows us to gauge the effectiveness of our communications and
        marketing campaigns.
      </Text>
      <Title order={3}>2. Online Advertising</Title>
      <Text my="md">
        The Services may integrate technologies that allow for us or our service
        provides to tailor online advertising to you on the Services or on other
        sites you visit based on your web browsing activities. If you are
        interested in information about tailored browser advertising and how you
        can generally control the technologies used to deliver tailored
        advertising, you may visit the Network Advertising Initiative’s Consumer
        Opt-Out link, the Digital Advertising Alliance’s Consumer Opt-Out link,
        or Your Online Choices to opt-out of receiving tailored advertising from
        companies that participate in those programs. To opt out of Google
        Analytics for display advertising or customize Google display network
        ads, visit theGoogle Ads Settings page. We do not control these opt-out
        links or whether any particular company chooses to participate in these
        opt-out programs. We are not responsible for any choices you make using
        these mechanisms or the continued availability or accuracy of these
        mechanisms. Please note that if you exercise the choices above, you may
        still see advertising when you use the Services, but it will not be
        tailored to you based on your online behavior over time.
      </Text>
      <Title order={3}>3. Notice Concerning Do Not Track</Title>
      <Text my="md">
        Do Not Track(“DNT”) is a privacy preference that users can set in
        certain web browsers. We are committed to providing you with choices
        about the information collected on our website for third party purposes,
        and that is why we provide the variety of opt-out mechanisms listed
        above. However, we do not currently recognize or respond to
        browser-initiated DNT signals. To learn more about Do Not Track, you can
        do so here.
      </Text>
      <Title order={3}>HOW WE SHARE AND DISCLOSE YOUR INFORMATION</Title>
      <Text my="md">
        Olimax will share your information in the following ways:
      </Text>
      <List my="md">
        <List.Item>
          <Text fw={700} span>
            Affiliates and Subsidiaries
          </Text>
          . We may share information we collect with companies under common
          ownership or control with Olimax to deliver products and services to
          you, ensure a consistent level of service, and enhance our products,
          services, and your customer experience.
        </List.Item>
        <List.Item>
          <Text fw={700} span>
            Service Providers
          </Text>
          . We provide access to or share your information with select third
          parties who perform services on our behalf. They provide a variety of
          services to us, including billing, sales, marketing, product content
          and features, advertising, analytics, research, customer service, data
          storage, security, fraud prevention, payment processing, and legal
          services.
        </List.Item>
        <List.Item>
          <Text fw={700} span>
            Your Company
          </Text>
          . If you are a Customer End User, we may provide your information to
          the Customer you are engaged or employed by in order to fulfill and
          enforce our agreement with the Customer, and to inform the Customer
          regarding usage, support, or training needs.
        </List.Item>
        <List.Item>
          <Text fw={700} span>
            Protection of Olimax and Others
          </Text>
          . By using the Services, you acknowledge and agree that we may access,
          retain and disclose the information we collect and maintain about you
          if required to do so by law or in a good faith belief that such
          access, retention or disclosure is reasonably necessary to: (a) comply
          with legal process (e.g. a subpoena or court order); (b) enforce our
          terms, this Privacy Policy, or other contracts with you, including
          investigation of potential violations thereof; (c) respond to claims
          that any content violates the rights of third parties; (d) respond to
          your requests for customer service; and/or (e) protect the rights,
          property or personal safety of Olimax, its agents and affiliates, its
          users and/or the public. This includes exchanging information with
          other companies and organizations for fraud protection, and
          spam/malware prevention, and similar purposes.
        </List.Item>
        <List.Item>
          <Text fw={700} span>
            Business Transfers
          </Text>
          . As we continue to develop our business, we may buy, merge, or
          partner with other companies. In such transactions, (including in
          contemplation of such transactions) user information may be among the
          transferred assets. If a portion or all of our assets are sold or
          transferred to a third-party, customer information (including your
          email address) would likely be one of the transferred business assets.
          If such transfer is subject to additional mandatory restrictions under
          applicable laws, we will comply with such restrictions.
        </List.Item>
        <List.Item>
          <Text fw={700} span>
            Aggregate/De-Identified Information
          </Text>
          . From time to time, we may share Aggregated/De-Identified Information
          about use of the Services, such as by publishing a report on usage
          trends. The sharing of such data is unrestricted.
        </List.Item>
      </List>
      <Title order={2}>RETENTION OF YOUR INFORMATION</Title>
      <Text my="md">
        We keep your information for no longer than necessary for the purposes
        for which it is processed. The length of time for which we retain
        information depends on the purposes for which we collected and use it
        and/or as required to comply with applicable laws.
      </Text>
      <Title order={2}>DATA SUBJECT RIGHTS AND YOUR CHOICES</Title>
      <Text my="md">
        You have certain rights with respect to your information as further
        described in this section.
      </Text>
      <Title order={3}>1. Your Legal Rights</Title>
      <Text my="md">
        If you would like further information in relation to your legal rights
        under applicable law or would like to exercise any of them, please
        contact us at{" "}
        <Anchor href="mailto:legal@olimax.ca">legal@olimax.ca</Anchor>. Your
        local laws (e.g.,in the EU) may permit you to request that we:
      </Text>
      <List my="md">
        <List.Item>
          provide access to and/or a copy of certain information we hold about
          you
        </List.Item>
        <List.Item>
          prevent the processing of your information for direct-marketing
          purposes (including any direct marketing processing based on
          profiling)
        </List.Item>
        <List.Item>
          update information which is out of date or incorrect
        </List.Item>
        <List.Item>
          delete certain information which we are holding about you
        </List.Item>
        <List.Item>
          restrict the way that we process and disclose certain of your
          information
        </List.Item>
        <List.Item>
          transfer your information to a third party provider of services
        </List.Item>
        <List.Item>
          revoke your consent for the processing of your information
        </List.Item>
      </List>
      <Text my="md">
        We will consider all requests and provide our response within the time
        period required by applicable law. Please note, however, that certain
        information may be exempt from such requests in some circumstances,
        which may include if we need to keep processing your information for our
        legitimate interests or to comply with a legal obligation. We may
        request you provide us with information necessary to confirm your
        identity before responding to your request.
      </Text>
      <Text my="md">
        If you are a Customer End User and your information has been collected
        by Olimax as a result of the Customer’s use of the Services pursuant to
        a services agreement between Customer and Olimax, Olimax collects and
        processes any information of yours under the directions of the relevant
        Customer. If these circumstances apply to you and you wish to access,
        edit, delete or exercise any rights you may have under applicable data
        protection laws with respect to any information that we have collected
        about you, please direct your query to the relevant Customer, as this
        may expedite the completion of your request. We nevertheless provide
        reasonable assistance to our Customers to give effect to data subject
        rights as appropriate and required by applicable laws.
      </Text>
      <Title order={3}>2. Marketing Communications and Sharing</Title>
      <Text my="md">
        You may instruct us not to use your contact information to contact you
        by email, postal mail, or phone regarding products, services, promotions
        and special events that might appeal to your interests by contacting us
        using the “Contact” information below. In commercial email messages, you
        can also opt out by following the instructions located at the bottom of
        such emails. Please note that, regardless of your request, we may still
        use and share certain information as permitted by this Privacy Policy or
        as required by applicable law. For example, you may not opt out of
        certain operational emails, such as those reflecting our relationship or
        transactions with you.
      </Text>
      <Title order={2}>THIRD PARTY LINKS AND FEATURES</Title>
      <Text my="md">
        The Services contain links to third-party websites such as social media
        sites, and also contain third-party plug-ins. If you choose to use these
        sites or features, you may disclose your information not just to those
        third parties, but also to their users and the public more generally
        depending on how their services function. We are not responsible for the
        content or practices of those websites or services. The collection, use,
        and disclosure of your information will be subject to the privacy
        policies of the third-party websites or services, and not this Privacy
        Policy. We urge you to read the privacy and security policies of these
        third parties.
      </Text>
      <Title order={2}>INTERNATIONAL USERS</Title>
      <Text my="md">
        The information discussed in this Policy is processed in Canada by
        Olimax, whose principal office in Canada. Your information will be
        processed in Canada for the purposes described herein. As described
        above, we also may subcontract the processing of your data to, or
        otherwise share your data with, other members within Olimax or our
        service providers in countries other than your country of residence,
        including the United States, in accordance with applicable law. Such
        third parties may be engaged in, among other things, the provision of
        Services to you, the processing of transactions and/or the provision of
        support services. By providing us with your information, you acknowledge
        any such transfer, storage or use.
      </Text>
      <Text my="md">
        If we provide any information about you to third party information
        processors, we will take appropriate measures to ensure such companies
        protect your information adequately in accordance with this Privacy
        Policy. These measures may include signing Standard Contractual Clauses
        in accordance with EU and other data protection laws to govern the
        transfers of such data. For more information about these transfer
        mechanisms, please contact us as detailed in the “Contact Information”
        section below.
      </Text>
      <Text my="md">
        If applicable, you may make a complaint to the data protection
        supervisory authority in the country where you reside. Alternatively,
        you may seek a remedy through local courts if you believe your rights
        have been breached.
      </Text>
      <Title order={2}>HOW WE PROTECT YOUR INFORMATION</Title>
      <Text my="md">
        Olimax takes technical, organizational, and physical security measures
        to protect the information provided via the Services from loss, misuse,
        and unauthorized access, disclosure, alteration, or destruction.
        However, no Internet or email transmission is ever fully secure or error
        free. Please keep this in mind when disclosing any information to Olimax
        via the Internet.
      </Text>
      <Title order={3}>PRIVACY INFORMATION FOR CALIFORNIA USERS</Title>
      <Text my="md">
        If you are a California resident, California law requires us to provide
        you with some additional information regarding how we collect, use, and
        share your “personal information” (as defined in the California
        ConsumerPrivacy Act (“CCPA”)).
      </Text>
      <Text my="md">
        Categories of Personal Information We Collect and How We Use
        Them.Throughout this Privacy Policy, we discuss in detail the specific
        pieces of personal information we collect from and about our users.
        Under the CCPA, we are also required to provide you with the
        “categories” of personal information we collect and how we use each
        category of personal information. The categories we collect are listed
        below with how we use this personal information below that:
      </Text>
      <Text my="md">
        1. Contact Information (such as your full name, phone number, address,
        email address)
      </Text>
      <List my="md">
        <List.Item>Provide the services and respond to your requests</List.Item>
        <List.Item>Contact you with relevant information and offers</List.Item>
        <List.Item>
          Customize content, and analyze use of and improve the services
        </List.Item>
        <List.Item>Comply with law or defend our legal rights</List.Item>
        <List.Item>Security/fraud prevention</List.Item>
        <List.Item>Create aggregate/de-identified information</List.Item>
      </List>
      <Text my="md">
        2. Login Information (such as your account name and password)
      </Text>
      <List my="md">
        <List.Item>Provide the services</List.Item>
        <List.Item>Comply with law or defend our legal rights</List.Item>
        <List.Item>Security/fraud prevention</List.Item>
        <List.Item>Create aggregate/de-identified information</List.Item>
      </List>
      <Text my="md">
        3. Device and Online Information (such as mobile device content, IP
        address, browsing history, and usage information)
      </Text>
      <List my="md">
        <List.Item>Provide the services and respond to your requests</List.Item>
        <List.Item>Contact you with relevant information and offers</List.Item>
        <List.Item>
          Customize content, and analyze use of and improve the services
        </List.Item>
        <List.Item>Comply with law or defend our legal rights</List.Item>
        <List.Item>Security/fraud prevention</List.Item>
        <List.Item>Create aggregate/de-identified information</List.Item>
      </List>
      <Text my="md">
        4. Other information (any other information you choose to provide
        directly to us)
      </Text>
      <List my="md">
        <List.Item>Provide the services and respond to your requests</List.Item>
        <List.Item>Contact you with relevant information and offers</List.Item>
        <List.Item>
          Customize content, and analyze use of and improve the services
        </List.Item>
        <List.Item>Comply with law or defend our legal rights</List.Item>
        <List.Item>Security/fraud prevention</List.Item>
        <List.Item>Create aggregate/de-identified information</List.Item>
      </List>
      <Text my="md">
        <Text fw={700} span>
          Do Not Sell Rights
        </Text>
        . Please note that the CCPA sets forth certain obligations for
        businesses that “sell” personal information to third parties. We do not
        engage in such activity and have not engaged in such activity in the
        past twelve months from the Effective Date of this Privacy Policy.
      </Text>
      <Text my="md">
        <Text fw={700} span>
          Your California Privacy Rights
        </Text>
        . The CCPA allows you to make certain requests about your personal
        information.Specifically, the CCPA allows you to request us to:
      </Text>
      <List my="md">
        <List.Item>
          Inform you about the categories of personal information we collect or
          disclose about you; the categories of sources of such information; the
          business or commercial purpose for collecting your personal
          information; and the categories of third parties with whom we
          share/disclose personal information.
        </List.Item>
        <List.Item>
          Provide access to and/or a copy of certain personal information we
          hold about you.
        </List.Item>
        <List.Item>
          Delete certain personal information we have about you.
        </List.Item>
        <List.Item>
          Provide you with information about the financial incentives that we
          offer to you, if any.
        </List.Item>
      </List>
      <Text my="md">
        The CCPA further provides you with the right not to be discriminated
        against (as provided for in applicable law)for exercising your rights.
        Please note that certain information may be exempt from such requests
        under California law. For example, we need certain information to
        provide the Service to you. We also will take reasonable steps to verify
        your identity before responding to a request. In doing so, we may ask
        you for verification information so that we can match at least two
        verification points with information we maintain in our files about you.
        If we are unable to verify you through this method, we shall have the
        right, but not the obligation, to request additional information from
        you.
      </Text>
      <Text my="md">
        If you would like further information regarding your legal rights under
        California law or would like to exercise any of them, or if you are an
        authorized agent making a request on a California consumer’s behalf,
        please contact us using the contact information provided below. If you
        are a Customer End User, please contact the Customer who has provided
        your information to us for more information.
      </Text>
      <Text my="md">
        <Text fw={700} span>
          Shine the Light Disclosure
        </Text>
        : The California “Shine the Light” law gives residents of California the
        right under certain circumstances to request information from us
        regarding the manner in which we share certain categories of personal
        information (as defined in theShine the Light law) with third parties
        for their direct marketing purposes. We do not share your personal
        information with third parties for their own direct marketing purposes.
      </Text>
      <Title order={3}>NOTICE TO NEVADA RESIDENTS</Title>
      <Text my="md">
        Certain Nevada consumers may opt out of the sale of “personally
        identifiable information” for monetary consideration(as such terms are
        defined under Nevada law) to a person for that person to license or sell
        such information to additional persons. We do not engage in such
        activity; however, if you are a Nevada resident who has purchased goods
        or services from us, you may submit a request to opt out of any
        potential future sales under Nevada law by contacting us using the
        methods outlined in the“Contact Information” section. Please note we may
        take reasonable steps to verify your identity and the authenticity of
        the request. Once verified, we will maintain your request in the event
        our practices change.
      </Text>
      <Title order={2}>CHANGES TO OUR PRIVACY POLICY</Title>
      <Text my="md">
        We reserve the right to amend this Privacy Policy at any time to reflect
        changes in the law, our data collection and use practices, the features
        of our Services, or advances in technology. We will make the revised
        Privacy Policy accessible through the Services, so you should review the
        Privacy Policy periodically. You can know if the Privacy Policy has
        changed since the last time you reviewed it by checking the “Effective
        Date” included at the beginning of the document. If we make a material
        change to the Policy, you will be provided with appropriate notice in
        accordance with legal requirements. By continuing to use theServices,
        you are confirming that you have read and understood the latest version
        of this Privacy Policy.
      </Text>
      <Title order={3}>CONTACT INFORMATION</Title>
      <Text>
        Please feel free to contact us if you have any questions about Olimax’s
        Privacy Policy or the information practices of the Services. You can
        reach us via email at{" "}
        <Anchor href="mailto:legal@olimax.ca">legal@olimax.ca</Anchor>.
      </Text>
    </>
  );
}
