import { Anchor, Text, Title } from "@mantine/core";
import { useDocumentTitle } from "../utils/hooks";

export default function Eula() {
  useDocumentTitle("EULA");

  return (
    <>
      <Title my="xl">Olimax Atlassian add-ons EULA</Title>
      <Text size="lg" my="md">
        IMPORTANT! BE SURE TO CAREFULLY READ AND UNDERSTAND ALL OF THE RIGHTS
        AND RESTRICTIONS SET FORTH IN THIS END USER LICENSE AGREEMENT (“
        <Text fw={700} span>
          EULA
        </Text>
        ”). YOU ARE NOT AUTHORISED TO USE THIS SOFTWARE UNLESS AND UNTIL YOU
        ACCEPT THE TERMS OF THIS EULA.
      </Text>
      <Text my="md">
        This EULA is a binding legal agreement between Olimax S.E.N.C
        (hereinafter “
        <Text fw={700} span>
          Licensor
        </Text>
        ”), a provider of downloadable and cloud-based applications under the
        Olimax Atlassian Add-ons brand name through the Atlassian Marketplace or
        any other means that interoperate with applicable products manufactured
        by Atlassian Pty Ltd (“
        <Text fw={700} span>
          Atlassian
        </Text>
        ”), and you (either an individual or a single legal entity you
        represent) whose details are provided to Licensor upon purchase
        (hereinafter “
        <Text fw={700} span>
          Licensee
        </Text>
        ” or “
        <Text fw={700} span>
          you
        </Text>
        ”) for the materials accompanying this EULA, including the accompanying
        computer software, associated media, printed materials and any “online”
        or electronic documentation.
      </Text>
      <Text my="md">
        By clicking on the “I agree” (or similar button) that is presented to
        you at the time of your order, or by installing, copying, downloading or
        otherwise using the Software, you agree to be bound by the terms of this
        EULA. If you do not agree to the terms of this EULA, you may not
        install, copy, download or otherwise use the Software. If you are
        agreeing to this EULA on behalf of a company or other organisation, you
        represent that you have the authority to bind that company or
        organisation to this EULA, and the terms Licensee, "you" and “your"
        refer to that company or organisation. If you do not have that
        authority, you may not install, copy, download or otherwise use the
        Software.
      </Text>
      <Text my="md">
        This is a “Publisher EULA” as referred to in the Atlassian Marketplace
        Terms of Use, found at{" "}
        <Anchor href="https://www.atlassian.com/licensing/marketplace/termsofuse">
          https://www.atlassian.com/licensing/marketplace/termsofuse.
        </Anchor>
      </Text>
      <Title order={2}>1. Scope of the Agreement</Title>
      <Text my="md">
        A. This EULA governs (a) Licensor’s commercially available downloadable
        software products sold, or made available at no charge (“
        <Text fw={700} span>
          Software
        </Text>
        ”), (b) Licensor’s Software provided in a hosted or cloud-based
        environment (“
        <Text fw={700} span>
          Hosted Services
        </Text>
        ”), and (c) any support services provided by Licensor relating to the
        Software or Hosted Services. Software and Hosted Services, together with
        related Documentation, are referred to herein as “
        <Text fw={700} span>
          Products
        </Text>
        ”.
      </Text>
      <Text my="md">
        B. This EULA does not cover the sale or resale of Atlassian-manufactured
        software, Licensor’s other professional services relating to
        Atlassian-manufactured software, nor any physical hardware products
        provided by Licensor.
      </Text>
      <Title order={2}>2. Account Registration</Title>
      <Text my="md">
        You may need to register on the Atlassian Marketplace at
        https://marketplace.atlassian.com in order to place orders or access or
        receive any Products. Any registration information that you provide must
        be accurate, current and complete. You must also update your information
        so that the Licensor may send notices, statements and other information
        to you by email or through your account. You are responsible for all
        actions taken through your accounts.
      </Text>
      <Title order={2}>3. Orders</Title>
      <Text my="md">
        Your order through the Atlassian Marketplace or with an authorized
        Reseller (“
        <Text fw={700} span>
          Order
        </Text>
        ”) will specify your authorized scope of use for the Products, which may
        include: (a) the defined number of installations, the number of specific
        individuals for whom you have paid the required fees and whom you
        designate through the applicable Product (“
        <Text fw={700} span>
          Authorized Users
        </Text>
        ”), the number of authorized servers, the number of unique data set
        platforms, and/or other defined resource utilisation limitations, (b)
        storage or capacity (for Hosted Services), (c) numbers of licenses,
        copies or instances (for Software), or (d) other restrictions or
        billable units (all of the above, as applicable, the “
        <Text fw={700} span>
          Scope of Use
        </Text>
        ”). The term “
        <Text fw={700} span>
          Order
        </Text>
        ” also includes any applicable Product or Support Services renewal, or
        purchases you make to increase or upgrade your Scope of Use. You may
        increase the number of Authorized Users permitted to access your
        instance of the Product by placing a new Order or, in some cases,
        directly through the Product.
      </Text>
      <Title order={2}>4. Grant of License</Title>
      <Text my="md">
        The Products are licensed, not sold, and no ownership right is conveyed
        to you, irrespective of the use of terms in this EULA such as “purchase”
        or “sale”.
      </Text>
      <Text my="md">A. This EULA grants you the following rights: </Text>
      <Text my="md">
        <Text fw={700} span>
          Standard Use
        </Text>
        . For other than No-Charge Products, the Licensor grants you a perpetual
        (subject to termination for breach), worldwide, non-exclusive,
        non-transferable, non-sub licensable license to install and use the
        Software in object code only, limited to the Scope of Use as designated
        in your Order.
      </Text>
      <Text my="md">
        <Text fw={700} span>
          Hosted Services
        </Text>
        . The Licensor grants you a monthly (paid in advance) subscription for
        worldwide, non-exclusive, non-transferable, non-sub licensable use of
        the Hosted Services, subject to automatic renewal for successive monthly
        terms unless either Licensor or you notifies the other of non-renewal or
        Licensor ceases to make a particular Hosted Service available. If you
        cancel, your subscription will terminate at the end of the then-current
        billing cycle, but you will not be entitled to any credits or refunds
        for amounts accrued or paid prior to such termination. You acknowledge
        that Hosted Services are on-line, subscription-based products, hosted by
        Licensor and/or Atlassian, and that Licensor and/or Atlassian may make
        changes to the Hosted Services from time to time.
      </Text>
      <Text my="md">
        <Text fw={700} span>
          No-Charge Products
        </Text>
        . The Licensor may offer you a time-limited, worldwide, non-exclusive,
        non-transferable, non-sublicensable limited license for certain Products
        at no charge, including free accounts, trial use, and access to Beta
        Versions as defined below (“
        <Text fw={700} span>
          No-Charge Products
        </Text>
        ”). Your use of No-Charge Products is subject to any additional terms
        specified by Licensor and is only permitted for the evaluation period
        designated by Licensor. After the evaluation period is expired you must
        abide by the Standard Use rights, or must remove and delete all copies
        of the Software in your possession. You may not use No-Charge Products
        for competitive analysis or similar purposes. Licensor may terminate
        your right to use No-Charge Products at any time and for any reason in
        its sole discretion, without liability to you. You understand that any
        pre-release and beta products (“
        <Text fw={700} span>
          Beta Versions
        </Text>
        ”) are still under development, may be inoperable or incomplete and are
        likely to contain more errors and bugs than generally available
        Products. Licensor makes no promises that any Beta Versions will ever be
        made generally available. In some circumstances, Licensor may charge a
        fee in order to allow you to access Beta Versions, but the Beta Versions
        will still remain subject to this paragraph. All information regarding
        the characteristics, features or performance of Beta Versions
        constitutes Licensor’s Confidential Information. To the maximum extent
        permitted by applicable law, Licensor disclaims all obligations or
        liabilities with respect to No-Charge Products, including any Support
        Services, warranty, and indemnity obligations.
      </Text>
      <Text my="md">
        B. Your license rights under this EULA are non-exclusive,
        non-transferable and non-sublicensable. You may not sell, transfer or
        convey the Software to any third party without Licensor’s prior express
        written consent. Licensor reserves all rights not expressly granted to
        the Licensee in this EULA.
      </Text>
      <Text my="md">
        C. Standard Use licensees are permitted to make one (1) copy of the
        Software for data protection, archiving and backup purposes only and for
        no other purpose.
      </Text>
      <Text my="md">
        D. You may only install the Software and make the Software available for
        use on hardware systems owned, leased or controlled by you, or your
        third party service providers so long as you remain responsible for
        their compliance with the terms and conditions of this EULA.
      </Text>
      <Text my="md">
        E. This EULA applies whether you purchase Products directly from
        Licensor, through the Atlassian marketplace, through an authorized
        Reseller or otherwise. If you purchase through a Reseller, your license
        rights shall be as stated in the Order placed by Reseller for you, and
        the Reseller is responsible for the accuracy of any such Order.
        Resellers are not authorized to make any promises or commitments on
        Licensor’s behalf, and Licensor is not bound by any obligations to you
        other than what is included in this EULA.
      </Text>
      <Title order={2}>5. Third-Party Software</Title>
      <Text my="md">
        A. You acknowledge the Products may contain software licensed by
        Licensor from third parties, including open source software, and
        embedded in the Products, and that in addition to the obligations of
        this EULA, additional obligations may apply in relation to any use of
        the third party software by you which is not in accordance with the use
        of the Products as permitted under the terms of this EULA. In such
        circumstances you must consult the relevant third party to acquire any
        necessary licenses and consents in relation to your use of the third
        party software.
      </Text>
      <Text my="md">
        B. The Software uses, requires and depends on various third party APIs.
        Licensor disclaims any liability for any failure or limitations of these
        APIs or services. Atlassian, or any other API provider, may remove the
        API end points required for the Software to function properly. Licensor
        disclaims any liability for the consequence of such actions by such
        third parties.
      </Text>
      <Title order={2}>6. Price and Payment</Title>
      <Text my="md">
        If you have not previously paid the license fee for the Product, then
        you must pay the license fee within the period indicated in the
        applicable invoice or as otherwise provided in Licensor’s pricing terms
        as published on the Atlassian Marketplace. Failure to pay any license
        fees by the due date will result in the immediate termination of the
        license(s) granted under this EULA.
      </Text>
      <Title order={2}>7. Support Services</Title>
      <Text my="md">
        A. Licensor may provide you with online support services related to the
        Products (“
        <Text fw={700} span>
          Support Services
        </Text>
        ”), in its discretion and for the sole purpose of addressing technical
        issues relating to the use of the Products. Support Services also
        include access to bug fixes, patches, modifications, or enhancements
        (together, “
        <Text fw={700} span>
          Releases
        </Text>
        ”) to the Products that Licensor makes generally commercially available
        during the “
        <Text fw={700} span>
          Support Period
        </Text>
        .” When accepted by you, any such Releases will be considered part of
        the Products and subject to the terms of this EULA.
      </Text>
      <Text my="md">
        B. The Initial Support Period for each Product is for twelve (12) months
        starting at the time each Product is purchased, and may be renewed for
        additional twelve (12) month periods (each, a “
        <Text fw={700} span>
          Renewal Support Period
        </Text>
        ”) at the then-current rate for Support Services. Renewal Support
        Periods commence upon the expiration of the prior Support Period
        regardless of when the Product is purchased.
      </Text>
      <Text my="md">
        C. Use of Support Services, if any, is governed by Licensor’s policies
        and programs described in any user manual, in online documentation,
        and/or other Licensor-provided materials. Any supplemental software code
        provided to you as a part of Support Services will be considered part of
        the Products and subject to the terms of this EULA.
      </Text>
      <Text my="md">
        D. All deliveries of Software will be electronic. For the avoidance of
        doubt, you are responsible for the installation of any Software.
      </Text>
      <Text my="md">
        E. Licensor encourages feedback from its customers. If you have any
        feedback regarding your purchase or use of the Products, please provide
        that feedback to Licensor at:{" "}
        <Anchor href="mailto:legal@olimax.ca">legal@olimax.ca</Anchor> .
      </Text>
      <Title order={2}>8. Data Security & Privacy</Title>
      <Text my="md">
        A. Licensor values your privacy and is committed to secure private
        information from loss, misuse, unauthorised access, disclosure,
        alteration and destruction. Licensor will not sell or otherwise
        redistribute to third parties the information Licensor collects from
        you, as described in this Section.
      </Text>
      <Text my="md">
        B. Licensor constantly strives to improve its Products. To do so,
        Licensor needs to measure, analyse, and aggregate how users interact
        with the Products, such as usage patterns and characteristics of its
        user base. Licensor collects and uses analytics data regarding your use
        of the Products.
      </Text>
      <Text my="md">
        C. You agree that Licensor may collect and use technical data and
        related information, including without limitation, technical information
        relating to your device, system, and Products, that is gathered
        periodically to facilitate the provision of software updates, product
        support, marketing efforts and other services and communications to you
        related to the Products, including providing you with information about
        services, features, surveys, newsletters, offers, promotions; providing
        other news or information about us and our select partners; and sending
        you technical notices, updates, security alerts, and support and
        administrative messages. Licensor may use this technical data and
        related information, as long as it is in a form that does not personally
        identify you, except to the extent necessary to provide you with
        support, or communications to improve its products or to provide
        services or technology to you. Licensor agrees to handle your data in
        accordance with (i) all applicable laws; and (ii) privacy and security
        measures reasonably adequate to preserve your data’s confidentiality and
        security. Licensee may opt out of promotions by sending an email to{" "}
        <Anchor href="mailto:legal@olimax.ca">legal@olimax.ca</Anchor>. Requests
        to opt out may take thirty (30) calendar days to process.
      </Text>
      <Text my="md">
        D. You retain all right, title and interest in and to any data, content,
        code, video, images or other materials of any type (“
        <Text fw={700} span>
          Your Data
        </Text>
        ”) that you upload, submit or otherwise transmit to or through the
        Hosted Services or through Licensor’s online support systems . Subject
        to the terms of this EULA, you grant Licensor a non-exclusive,
        worldwide, royalty-free right to (a) collect, use, copy, store,
        transmit, modify and create derivative works of Your Data, in each case
        solely to the extent necessary to provide the applicable Hosted Service
        to you and (b) for Hosted Services that enable you to share Your Data or
        interact with other people, to distribute and publicly perform and
        display Your Data as you (or your Authorized Users) direct or enable
        through the Hosted Service.
      </Text>
      <Text my="md">
        E. Customer order data, if any, is stored encrypted and in
        access-controlled servers. Application data, if any, is stored on
        redundant storage nodes to protect data from hardware failures. Your
        Data is stored in the United State of America.
      </Text>
      <Text my="md">
        F. Licensor agrees (i) to handle Your Data in accordance with all
        applicable laws; and (ii) not share Your Data with third parties except
        as required by law. You acknowledge and agree that Licensor may disclose
        personally identifiable information under special circumstances, such as
        to comply with law.
      </Text>
      <Text my="md">
        G. Licensor has implemented privacy and security measures reasonably
        adequate to preserve Your Data from loss, misuse, unauthorised access,
        disclosure, alteration and destruction. Licensor uses a self-assessment
        approach to ensure compliance with this Privacy policy and verifies
        periodically that the policy is accurate and comprehensive for the
        information intended to be covered, prominently displayed, completely
        implemented, and accessible and in conformity with the Privacy
        Principles. Licensor encourages interested parties to contact us with
        any concerns using the contact information provided. Licensor will
        investigate and attempt to resolve any complaints and disputes regarding
        use and disclosure of private information in accordance with the Privacy
        Principles.
      </Text>
      <Title order={2}>9. Termination</Title>
      <Text my="md">
        You may terminate your license to the Products at any time by destroying
        all your copies of the Software or ceasing your access to the Hosted
        Services. Your license to the Products shall automatically terminate if
        you fail to comply with the terms of this EULA. Upon termination of your
        license, you are required to remove all Software from your computer
        systems and destroy any copies of the Software in your possession.
      </Text>
      <Title order={2}>10. Copyright</Title>
      <Text my="md">
        A. The Products and all copies thereof are protected by copyright and
        other intellectual property laws and treaties. Licensor or its relevant
        third parties own the title, copyright, and all other intellectual
        property rights in the Products and all subsequent copies of the
        Products.
      </Text>
      <Text my="md">
        B. All title and copyrights in and to the Products (including but not
        limited to any images, icons, text files, pdfs or other static non-code
        assets contained within the Products), the accompanying printed
        materials, and any copies of the Products, are owned by Licensor or its
        suppliers. This EULA does not grant you any rights to use such content.
        If the Products contain documentation that is provided only in
        electronic form, you may print one copy of such electronic
        documentation. Except for any copies of this EULA, you may not copy the
        printed materials accompanying the Products.
      </Text>
      <Text my="md">
        C. Other than as allowed by this EULA, you may not (i) reverse engineer,
        de-compile, disassemble, alter, duplicate, modify, rent, lease, loan,
        sublicense, make copies of, create derivative works from, distribute or
        provide non-Authorized Users with access to the Products in whole or
        part, (ii) use the Products for the benefit of any third party, (iii)
        incorporate any Products into a product or service you provide to a
        third party, (iv) interfere with any license key mechanism in the
        Products or otherwise circumvent mechanisms in the Products intended to
        limit your use, (v) remove or obscure any proprietary notices on the
        Products or any permitted copies of the Products , or (vi) publicly
        disseminate information regarding the benchmarking performance of the
        Products.
      </Text>
      <Text my="md">
        D. You may not copy or embed elements of the Source Code into other
        applications, or publish, transmit or communicate the Source Code to
        other parties other than yourself or the entity you represent.
      </Text>
      <Title order={2}>11. Confidentiality</Title>
      <Text my="md">
        You agree that all code, inventions, know-how, business, technical and
        financial information disclosed to you by Licensor constitute the
        confidential property of Licensor (“
        <Text fw={700} span>
          Confidential Information
        </Text>
        ”). Any intellectual property, the underlying technology, and any
        performance information relating to the Products shall be deemed
        Confidential Information without any marking or further designation.
        Except as expressly authorised herein, you will hold in confidence and
        not use or disclose any Confidential Information. Your nondisclosure
        obligation shall not apply to information that you can document: (i) was
        rightfully in your possession or known to you prior to receipt of the
        Confidential Information; (ii) is or has become public knowledge through
        no fault of your own; (iii) is rightfully obtained by you from a third
        party without breach of any confidentiality obligation; or (iv) is
        independently developed by you or your employees who had no access to
        such information. You may also disclose Confidential Information if so
        required pursuant to a regulation, law or court order (but only to the
        minimum extent required to comply with such regulation or order and with
        advance notice to Licensor). You acknowledges that disclosure of
        Confidential Information would cause substantial harm for which damages
        alone would not be a sufficient remedy, and therefore that upon any such
        disclosure by you, Licensor shall be entitled to appropriate equitable
        relief in addition to whatever other remedies it might have at law. For
        the avoidance of doubt, this Section shall not operate as a separate
        warranty with respect to the operation of any Products.
      </Text>
      <Title order={2}>12. License Certifications and Audits</Title>
      <Text my="md">
        At Licensor’s request, you agree to provide a signed certification that
        you are using all Products pursuant to the terms of this EULA, including
        the Scope of Use. You agree to allow Licensor or its agent, to audit
        your use of the Products. Licensor will provide you with at least 10
        days advance notice prior to the audit, and the audit will be conducted
        during normal business hours. Licensor will bear all its own
        out-of-pocket costs for the audit, unless the audit reveals that you
        have exceeded the Scope of Use. You will provide reasonable assistance,
        cooperation, and access to relevant information in the course of any
        audit at your own cost. If you exceed your Scope of Use, Licensor may
        invoice you for any past or ongoing excessive use, and you will pay the
        invoice promptly after receipt. This remedy is without prejudice to any
        other remedies available to Licensor at law or equity or under this
        EULA. To the extent necessary, Licensor may share audit results with
        certain of its third party licensors or assign the audit rights
        specified in this Section to such licensors.
      </Text>
      <Title order={2}>13. Publicity Rights</Title>
      <Text my="md">
        The Licensee grants Licensor the right to include the Licensee’s name,
        company name, logo, and/or likeness that you provide during
        registration, and any review that Licensee may provide (in full or in
        part) to Licensor, within Product promotional material and on Licensor’s
        web site. Licensee can revoke this right at any time by submitting a
        written request via email to{" "}
        <Anchor href="mailto:legal@olimax.ca">legal@olimax.ca</Anchor>,
        requesting to be excluded from future Product promotional material.
        Requests made after purchasing may take thirty (30) calendar days to
        process.
      </Text>
      <Title order={2}>14. Export Restrictions</Title>
      <Text my="md">
        You may not use or otherwise export or re-export any Product(s) except
        as authorised by United States law and the laws of the jurisdiction in
        which the Product(s) was obtained. In particular, but without
        limitation, the Product(s) may not be exported or re-exported (a) into
        any U.S. embargoed countries or (b) to anyone on the U.S Treasury
        Department’s list of Specially Designated Nationals or the U.S.
        Department of Commerce Denied Person’s List or Entity List. By using the
        Product(s), you represent and warrant that you are not located in any
        such country or on any such list.
      </Text>
      <Title order={2}>15. Disclaimer of Warranties</Title>
      <Text my="md">
        Save as provided in Sections 17 and 18 below, the Products are provided
        on an “as is” and “as available” basis without warranty, express or
        implied, of any kind or nature, including, but not limited to, any
        warranties of performance, merchantability, fitness for a particular
        purpose, or title. You may have other statutory rights, but the duration
        of statutorily required warranties, if any, shall be limited to the
        shortest period permitted by law. Licensor shall not be liable for
        delays, interruptions, service failures and other problems inherent in
        use of the internet and electronic communications or other systems
        outside the reasonable control of Licensor. To the maximum extent
        permitted by law, Licensor does not make any representation, warranty or
        guarantee that: (a) the use of the Products will be secure, timely,
        uninterrupted or error-free; (b) the Products will operate in
        combination with any other hardware, software, system, or data; (c) the
        Products will meet your requirements or expectations; (d) any stored
        data will be accurate or reliable or that any stored data will not be
        lost or corrupted; (e) errors or defects will be corrected; or (f) the
        Products (or any server(s) that make a Hosted Service available) are
        free of viruses or other harmful components.
      </Text>
      <Title order={2}>16. Return Policy</Title>
      <Text my="md">
        Licensor’s customary business practice is to allow customers to return
        Software within 30 days of payment for any reason or no reason and to
        receive a refund of the amount paid for the returned Software. A return
        means that Licensor will disable the license key that allowed the
        Software to operate. Licensor will not accept returns after the 30-day
        return period. Returns are not available for Hosted Services.
      </Text>
      <Title order={2}>17. Infringement; Indemnification</Title>
      <Text my="md">
        A. If you purchase a Standard Use license, and if the Software becomes,
        or in the opinion of Licensor may become, the subject of a claim of
        infringement of any third party right, Licensor may, at its option and
        in its discretion: (i) procure for Licensee the right to use the
        Software free of any liability; (ii) replace or modify the Software to
        make it non-infringing; or (iii) refund any license fees paid by you for
        the current Support Period for that Software.
      </Text>
      <Text my="md">
        B. Licensee will defend or settle, at Licensee’s expense, any action
        brought against Licensor based upon the claim that any modifications to
        the Software or combination of the Software with other, third-party,
        products infringes or violates any third party right, and only to the
        extent that such modification or combination contributes to such claim;
        provided, however, that: (i) Licensor shall notify Licensee promptly in
        writing of any such claim; (ii) Licensor shall not enter into any
        settlement or compromise any such claim without Licensee’s prior written
        consent; (iii) Licensee shall have sole control of any such action and
        settlement negotiations; and (iv) Licensor shall provide Licensee with
        information and reasonable assistance, at Licensee’s request and
        expense, necessary to settle or defend such claim. Licensee agrees to
        pay all damages and costs finally awarded against Licensor attributable
        to such claim.
      </Text>
      <Text my="md">
        C. Licensee agrees to indemnify and hold Licensor, and its subsidiaries,
        affiliates, officers, agents, and employees, harmless from any claims by
        third parties, and any related damages, losses or costs (including
        reasonable attorney fees and costs), arising out of Licensee’s use of
        the Software, or Licensee’s violation of the EULA or any rights of a
        third party.
      </Text>
      <Text my="md">
        D. Licensor assumes no liability hereunder for, and shall have no
        obligation to defend Licensee or to pay costs, damages or attorney’s
        fees for, any claim based upon any modifications to any of the Software
        not approved by Licensor or combination of any of the Software with
        products not approved by Licensor, and only to the extent that such
        modification or combination contributes to such claim.
      </Text>
      <Title order={2}>18. Limitation of Liability</Title>
      <Text my="md">
        A. Except for the indemnification obligations of Section 17 or breach of
        Sections 6 or 10, neither party will be liable to any person, with
        respect to any loss, damage, cost, expense or other claim, for any
        consequential (such as loss of income; loss of business profits or
        contracts; business interruption; loss of the use of money or
        anticipated savings; loss of information; loss of opportunity, goodwill
        or reputation; loss of, damage to or corruption of data), indirect,
        special, punitive or other damages in relation to the Products
        including, without limitation: (a) any use or reliance on a Product by
        the person (including the form and content of errors in and/or omissions
        from any information contained in the Products); (b) any delay,
        interruption or other failure in the provision of a Product; or (c) any
        change in the form or content of a Product. All the foregoing
        limitations shall apply even if Licensor has been informed of the
        possibility of such damages.
      </Text>
      <Text my="md">
        B. In no event will Licensor’s aggregate liability under any claims
        arising out of this EULA exceed the fees paid by you for the current
        Support Period, except where not permitted by applicable law, in which
        case Licensor’s liability shall be limited to the maximum extent allowed
        by such applicable law.
      </Text>
      <Text my="md">
        C. Except for each party’s indemnification obligations or breach of
        Sections 6 or 10, neither party will be liable for lost profits or for
        special, indirect, incidental or consequential damages, regardless of
        the form of action, even if such party is advised of the possibility of
        such damages. The foregoing liability limitations shall apply to the
        maximum extent allowed by applicable law. To the extent the foregoing
        liability limitations or the warranty disclaimers of Section 15 are not
        allowed by applicable law, then the liability of Licensor, and the
        remedy of Licensee, shall be limited to: (i) the re-supply of any
        defective Product; or (ii) the refund of the license fees paid by you
        for the current Support Period for such defective Product.
      </Text>
      <Text my="md">
        D. These limitations will apply to you even if the remedies fail of
        their essential purpose.
      </Text>
      <Title order={2}>19. Dispute Resolution</Title>
      <Text my="md">
        The parties agree that this EULA will be governed by and construed and
        interpreted in accordance with the laws of the State of New South Wales,
        Australia. The parties irrevocably and unconditionally submit to the
        non-exclusive jurisdiction of the federal and state courts of New South
        Wales, Australia. The terms of the United Nations Convention on
        Contracts for the Sale of Goods do not apply to this EULA.
      </Text>
      <Title order={2}>20. Severability</Title>
      <Text my="md">
        If any term of this EULA is found to be unenforceable or contrary to
        law, it will be modified to the least extent necessary to make it
        enforceable, and the remaining portions of this EULA will remain in full
        force and effect.
      </Text>
      <Title order={2}>21. No Waiver</Title>
      <Text my="md">
        No waiver of any right under this EULA will be deemed effective unless
        contained in writing signed by a duly authorised representative of the
        party against whom the waiver is to be asserted, and no waiver of any
        past or present right arising from any breach or failure to perform will
        be deemed to be a waiver of any future rights arising out of this EULA.
      </Text>
      <Title order={2}>22. Assignment</Title>
      <Text my="md">
        Licensee may assign this EULA to succeeding parties in the case of a
        merger, acquisition or change of control; provided, however, that in
        each case, (a) Licensor is notified in writing within ninety (90) days
        of such assignment, (b) the assignee agrees to be bound by the terms and
        conditions contained in this EULA and (c) upon such assignment the
        assignee makes no further use of the Product(s) licensed under this
        EULA. Licensor may assign its rights and obligation under this EULA
        without consent of Licensee. Any permitted assignee shall be bound by
        the terms and conditions of this EULA.
      </Text>
      <Title order={2}>23. U.S. Government Users</Title>
      <Text my="md">
        If you are a U.S. Government end user, Licensor is providing the
        Products to you as a "Commercial Item" as that term is defined in the
        U.S. Code of Federal Regulations (see 48 C.F.R. § 2.101), and the rights
        granted to you by Licensor for the Products are the same as the rights
        Licensor customarily grant to others under this EULA.
      </Text>
      <Title order={2}>24. Revisions to EULA</Title>
      <Text my="md">
        Licensor may update, modify or amend (together, “Revise”) this EULA from
        time to time, including any referenced policies and other documents. If
        a revision meaningfully reduces your rights, Licensor will use
        reasonable efforts to notify you by, for example, sending an email to
        the billing or technical contact you designate in the applicable Order,
        posting on our blog, website, on the Atlassian Marketplace website (
        <Anchor href="https://marketplace.atlassian.com">
          https://marketplace.atlassian.com
        </Anchor>
        ) or within the Licensor’s then currently published product
        documentation wiki. If Licensor revises this EULA during your term of
        your license or subscription, the revised version will be effective upon
        your next renewal of a License Term, Support Services, Hosted Services
        or Subscription Term, as applicable. In this case, if you object to any
        revisions, as your exclusive remedy, you may choose not to renew,
        including cancelling any terms set to auto-renew. With respect to
        No-Charge Products, accepting the revised EULA is required for you to
        continue using the No-Charge Products. You may be required to click
        through the updated EULA to show your acceptance. If you do not agree to
        the revised EULA after it becomes effective, you will no longer have a
        right to use No-Charge Products. For the avoidance of doubt, any Order
        is subject to the version of the EULA in effect at the time of the
        Order. You may not revise this EULA without Licensor’s written agreement
        (which may be withheld in Licensor’s complete discretion).
      </Text>
      <Title order={2}>25. Entire Agreement</Title>
      <Text my="md">
        This EULA constitutes the entire agreement between the parties with
        respect to its subject matter, and supersedes all prior agreements,
        proposals, negotiations, representations or communications relating to
        the subject matter. Both parties acknowledge that they have not been
        induced to enter into this EULA by any representations or promises not
        specifically stated herein. This EULA may not be modified or amended by
        you without Licensor’s written agreement (which may be withheld in
        Licensor’s complete discretion). In the event of a conflict between the
        terms of this EULA and the terms of any open source licenses applicable
        to the Software, for the specific terms in conflict the terms of the
        open source licenses shall control with regard to the Software, or
        part-thereof.
      </Text>
      <Title order={2}>26. Contact Information</Title>
      <Text my="md">
        For communications concerning this EULA, please write to{" "}
        <Anchor href="mailto:legal@olimax.ca">legal@olimax.ca</Anchor>.
      </Text>
    </>
  );
}
