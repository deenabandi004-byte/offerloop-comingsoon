import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/lovable-uploads/ac562722-41e0-4f2f-82fb-fd686f9dd01c.png"
                alt="Offerloop.ai logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold text-lg">Offerloop.ai</span>
            </a>
            <Button variant="outline" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last Updated: 29th August, 2025</p>

          <p className="text-lg leading-relaxed mb-8">
            These Terms of Service ("Terms") are a binding agreement between you ("you," "User") and Offerloop.ai ("Offerloop.ai," "we," "us," or "our") governing your use of our website, application, APIs, and related services (collectively, the "Services"). By creating an account, accessing, or using the Services, you agree to these Terms and our Privacy Policy (incorporated by reference). If you do not agree, you must not use the Services.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">1. Eligibility</h2>
          
          <p className="mb-6">
            You confirm that you are at least 18 years old (or the age of majority in your jurisdiction), legally capable of entering this agreement, not on any restricted party list, and permitted under applicable law to access the Services. The Services are not directed to children under 13 (or 16 where a higher threshold applies).
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">2. Account Registration & Security</h2>
          
          <p className="mb-6">
            You must provide accurate, up-to-date information when creating an account and maintain it. You are responsible for keeping your login credentials secure and for all activity on your account. Notify us immediately at <strong>support@offerloop.ai</strong> if you suspect unauthorized access. We may refuse, reclaim, or remove usernames at our discretion.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">3. Subscriptions & Payments</h2>
          
          <ul className="list-disc ml-6 mb-6">
            <li><strong>Plans & Fees:</strong> Some features require a paid subscription ("Paid Plan"). Plan prices, features, and billing cycles are shown at purchase.</li>
            <li><strong>Billing Authorization:</strong> By providing payment details, you authorize Stripe to charge applicable fees, taxes, and adjustments.</li>
            <li><strong>Auto-Renewal:</strong> Paid Plans renew automatically unless you cancel in-app before the renewal date.</li>
            <li><strong>Changes:</strong> We may adjust plan pricing or features prospectively with notice (email or in-app). Continuing to use the Services after changes take effect means you accept them.</li>
            <li><strong>Upgrades/Downgrades:</strong> Upgrades may bill immediately on a prorated basis; downgrades apply at the next renewal.</li>
            <li><strong>Refunds:</strong> Except where required by law, payments are non-refundable.</li>
            <li><strong>Taxes:</strong> You are responsible for applicable taxes, though we may collect and remit when legally required.</li>
            <li><strong>Chargebacks:</strong> Fraudulent or unwarranted chargebacks may result in suspension or termination.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-6">4. License & Access</h2>
          
          <p className="mb-6">
            Subject to these Terms and payment of applicable fees, Offerloop.ai grants you a limited, revocable, non-exclusive, non-transferable license to use the Services for personal or internal professional purposes (such as networking, recruiting outreach, and related learning). All other rights are reserved by Offerloop.ai.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">5. User Content</h2>
          
          <p className="mb-6">
            "User Content" includes resumes, text, email templates, contact notes, performance metrics, and other material you provide or generate through the Services. You retain ownership of your content. By using the Services, you grant Offerloop.ai a worldwide, royalty-free, non-exclusive license to host, store, process, reproduce, transmit, and display User Content only as necessary to (i) operate and improve the Services, (ii) comply with legal obligations, and (iii) enforce these Terms. You represent that you have the necessary rights to your User Content and that it does not infringe any laws or third-party rights.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">6. Email & Outreach Responsibilities</h2>
          
          <p className="mb-4">You are solely responsible for the content, legality, and recipients of emails or messages you send through the Services. You agree not to:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Send emails without appropriate consent or legal basis.</li>
            <li>Mislead recipients with false headers, deceptive subject lines, or impersonation.</li>
            <li>Send bulk spam or messages unrelated to legitimate professional networking.</li>
            <li>Misuse analytics (open/click tracking) in ways that violate law or fail to provide necessary notice.</li>
          </ul>
          
          <p className="mb-6">
            We reserve the right to throttle, filter, suspend, or terminate accounts that appear abusive.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">7. AI & Automated Features</h2>
          
          <p className="mb-6">
            The Services may incorporate AI (e.g., OpenAI) to generate personalized content, analytics, or explanations. Outputs may be inaccurate, incomplete, or non-compliant. You are responsible for reviewing AI-generated suggestions before using them. Offerloop.ai disclaims liability for actions you take based on AI outputs.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">8. Integrations & Third-Party Services</h2>
          
          <p className="mb-6">
            The Services may integrate with Google, Microsoft, Stripe, LinkedIn, OpenAI, Firebase, hosting providers, analytics partners, and other third-party platforms. Each integration is governed by its own terms. Offerloop.ai is not responsible for the availability, performance, or data practices of third-party services outside our reasonable control.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">9. Third-Party Data Providers</h2>
          
          <p className="mb-6">
            In addition to integrations, Offerloop.ai may obtain professional or publicly available information from trusted data providers, such as People Data Labs (PDL). Such information may include names, job titles, company details, and professional contact information. Use of this data is limited to enabling networking, recruiting automation, and related services. Users may request removal of such third-party data as described in our Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">10. Google API Services; Limited Use</h2>
          
          <p className="mb-4">If you connect your Google account (e.g., Gmail, Drive), Offerloop.ai's access and use of such data complies with the Google API Services User Data Policy, including the Limited Use requirements. Specifically:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>We access Google data only with your explicit OAuth consent.</li>
            <li>We request only the minimum scopes necessary (e.g., draft creation, scheduling emails, contact syncing).</li>
            <li>We never sell Google data or use it for advertising.</li>
            <li>Human access is strictly limited to narrow cases (e.g., security investigations, abuse prevention, compliance with law, or with your explicit consent).</li>
            <li>We do not use Google data to train generalized AI/ML models.</li>
            <li>You may revoke our access at any time via your Google Account Security Settings.</li>
            <li>Upon account deletion or revocation, associated Google data is promptly deleted from our systems, except where retention is legally required.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-6">11. Prohibited Uses</h2>
          
          <p className="mb-4">You may not use the Services to:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Violate any law, regulation, or third-party right.</li>
            <li>Reverse engineer, decompile, or attempt to extract source code.</li>
            <li>Introduce malware or impose excessive load on our systems.</li>
            <li>Bypass or probe system security without authorization.</li>
            <li>Harvest personal data without a lawful basis.</li>
            <li>Upload or distribute unlawful, defamatory, or infringing content.</li>
            <li>Upload sensitive personal data categories (such as health, financial account numbers, government identifiers, or children's data) unless explicitly permitted.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-6">12. Intellectual Property</h2>
          
          <p className="mb-6">
            The Services (including software, interfaces, design, branding, and trademarks) are owned by Offerloop.ai or its licensors. Except for the limited license in Section 4, you gain no rights in the Services. Third-party marks remain the property of their respective owners.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">13. Feedback</h2>
          
          <p className="mb-6">
            If you provide feedback or suggestions, you grant Offerloop.ai a perpetual, worldwide, royalty-free license to use and incorporate them without restriction or obligation.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">14. Beta / Experimental Features</h2>
          
          <p className="mb-6">
            Beta or trial features may change or be removed at any time and are provided "as is," without warranties.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">15. Privacy & Data Protection</h2>
          
          <p className="mb-6">
            Your use of the Services is subject to our Privacy Policy. Unless a separate data processing agreement is in place, each party acts as an independent controller of the personal data it provides. You are responsible for ensuring you have appropriate consents for any professional contact information you upload.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">16. Analytics & Tracking</h2>
          
          <p className="mb-6">
            The Services may track email opens, link clicks, replies, and usage data to deliver functionality and insights. You are responsible for disclosing such tracking to recipients when legally required.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">17. Security Practices</h2>
          
          <p className="mb-6">
            Offerloop.ai uses industry-standard security measures, including encryption in transit and at rest, access logging, and administrative controls, to protect user data.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">18. Data Deletion & Retention</h2>
          
          <p className="mb-6">
            Users may request deletion of their account and associated personal data by contacting <strong>privacy@offerloop.ai</strong>. Upon such request, Offerloop.ai will delete user data within 30 days, except as necessary to comply with legal obligations or enforce these Terms. Unless otherwise required by law, we retain personal data only as long as necessary to provide the Services.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">19. Compliance With Privacy & Anti-Spam Laws</h2>
          
          <p className="mb-6">
            You are responsible for ensuring that your use of the Services complies with all applicable laws, including but not limited to GDPR, CCPA, CAN-SPAM, and other data protection and anti-spam regulations.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">20. Suspension & Termination</h2>
          
          <p className="mb-6">
            We may suspend or terminate your access immediately for breach of these Terms, suspected abuse, non-payment, or legal reasons. You may cancel your account at any time in-app; cancellation takes effect at the end of the current billing period. Sections 5–8 and 10–24 survive termination.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">21. Disclaimers</h2>
          
          <p className="mb-6 uppercase font-medium">
            The services, including ai features and beta functionality, are provided "as is" and "as available." we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, non-infringement, and that services will be error-free or uninterrupted.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">22. Limitation of Liability</h2>
          
          <p className="mb-6 uppercase font-medium">
            To the maximum extent permitted by law: (a) offerloop.ai shall not be liable for indirect, incidental, consequential, special, or punitive damages (including lost profits, lost data, or business interruption), even if advised of possibility; (b) our total liability for all claims shall not exceed the greater of (i) the fees paid by you in the prior 12 months or (ii) us $100 if no paid plan applied.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">23. Indemnification</h2>
          
          <p className="mb-6">
            You agree to defend, indemnify, and hold harmless Offerloop.ai and its affiliates, officers, and employees against any claims, damages, or expenses arising from your User Content, your use of the Services, or your violation of these Terms or applicable law.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">24. Modifications</h2>
          
          <p className="mb-6">
            We may modify these Terms or the Services at any time. Material changes will be communicated via email or in-app notice and take effect as of the "Last Updated" date. Continued use after changes constitutes acceptance.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">25. Governing Law & Dispute Resolution</h2>
          
          <p className="mb-4">These Terms are governed by the laws of Delaware (excluding conflict rules).</p>
          
          <div className="mb-6">
            <p className="font-medium mb-2">Arbitration:</p>
            <p className="mb-4">Any dispute will be resolved by binding arbitration through the AAA in Wilmington, Delaware (or virtually) before a single arbitrator.</p>
            
            <p className="font-medium mb-2">Exceptions:</p>
            <p className="mb-4">Either party may seek injunctive relief in court to protect intellectual property or bring individual claims in small claims court.</p>
            
            <p className="font-medium mb-2">Class Action Waiver:</p>
            <p className="mb-4">Claims must proceed individually. No class or representative actions are permitted. If unenforceable, such claims default to court.</p>
            
            <p className="font-medium mb-2">Opt-Out:</p>
            <p className="mb-4">You may opt out of arbitration (but not the class waiver) by emailing <strong>support@offerloop.ai</strong> within 30 days of first acceptance, stating your name and account email.</p>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-6">26. Export & Sanctions Compliance</h2>
          
          <p className="mb-6">
            You represent you are not located in or a resident of a country under U.S. embargo and are not on any restricted party list. You agree not to export or re-export the Services in violation of applicable laws.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">27. Force Majeure</h2>
          
          <p className="mb-6">
            We are not responsible for delays or failures caused by circumstances beyond our control, including natural disasters, government actions, labor disputes, or third-party outages.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">28. Assignment</h2>
          
          <p className="mb-6">
            You may not assign these Terms without our prior written consent. We may assign them freely (e.g., through merger, acquisition, or reorganization).
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">29. Severability</h2>
          
          <p className="mb-6">
            If any provision is held invalid, the rest remain in effect. A valid term will replace the invalid one to best reflect original intent.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">30. Waiver</h2>
          
          <p className="mb-6">
            Failure to enforce any provision is not a waiver of future enforcement. No waiver is valid unless in writing.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">31. Entire Agreement</h2>
          
          <p className="mb-6">
            These Terms, our Privacy Policy, and any subscription details constitute the full agreement between you and Offerloop.ai, replacing all prior agreements.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">32. Notices</h2>
          
          <p className="mb-6">
            We may notify you via email (to your registered address) or in-app messaging. You are responsible for keeping your contact information current. Legal notices to Offerloop.ai may be sent to: <strong>support@offerloop.ai</strong> or <strong>privacy@offerloop.ai</strong> (Subject: "Legal Notice").
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">33. Contact</h2>
          
          <p className="mb-4">Questions about these Terms? Contact us at:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>📧 <strong>support@offerloop.ai</strong> (general support)</li>
            <li>📧 <strong>privacy@offerloop.ai</strong> (privacy and data protection inquiries)</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;