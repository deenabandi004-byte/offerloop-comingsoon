import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: 29th August, 2025</p>

          <p className="text-lg leading-relaxed mb-8">
            Welcome to Offerloop.ai ("Offerloop.ai," "we," "us," or "our"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our application and services (collectively, the "Services"). Please read this Privacy Policy carefully. If you do not agree with the terms, please do not use the Services.
          </p>

          <p className="mb-8">
            We may update this Privacy Policy at any time. If we do, we will update the "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically to remain informed.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">1. INFORMATION WE COLLECT</h2>
          
          <p className="mb-6">
            We may collect information about you in the following ways, depending on how you use the Services:
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">a. Personal Data You Provide to Us</h3>
          
          <div className="mb-6">
            <p className="font-medium mb-2">Account Information:</p>
            <p className="mb-4">When you register for an account, we collect your name, email address, and authentication information from your chosen provider (e.g., Google ID or Microsoft ID, via Firebase).</p>
            
            <p className="font-medium mb-2">Profile Information:</p>
            <p className="mb-4">To enhance your networking and outreach experience, you may provide details such as your university, class year, major, work experience, organizations, extracurricular activities, personal interests, target job roles, target locations, and resumes. You may also choose to sync your LinkedIn profile.</p>
            
            <p className="font-medium mb-2">User-Generated Content:</p>
            <p className="mb-4">This includes email templates you create or customize, notes you take on contacts, and any content you generate within our performance-tracking modules.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">b. Data Related to Your Use of the Services</h3>
          
          <div className="mb-6">
            <p className="font-medium mb-2">Contact and Professional Information:</p>
            <p className="mb-4">Information about professionals you connect with through Offerloop.ai, including names, positions, companies, contact details, and any notes or status updates you log. Some of this data may also be provided by trusted third-party data providers such as <strong>People Data Labs (PDL)</strong> to help you discover relevant professionals and enrich connections.</p>
            
            <p className="font-medium mb-2">Email Data (Content & Metadata):</p>
            <p className="mb-2">If you connect your Gmail or Outlook account, we process:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Email drafts saved via Gmail API (when you use our service to prepare outreach emails).</li>
              <li>Draft, sent, and received email data (subjects, bodies, recipients, timestamps, thread IDs, conversation IDs, Message-IDs) that you choose to manage through Offerloop.ai.</li>
            </ul>
            
            <p className="font-medium mb-2">Tracking Information:</p>
            <p className="mb-4">We may include tracking pixels and tracked links in emails to measure open rates, clicks, IP addresses, approximate locations, devices, and timestamps of activity.</p>
            
            <p className="font-medium mb-2">Performance Data:</p>
            <p className="mb-4">This includes your outreach performance metrics, such as emails sent, open rates, response rates, meeting conversions, template effectiveness, and connection growth.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">c. Information from Third-Party Services</h3>
          
          <div className="mb-6">
            <p className="font-medium mb-2">Authentication (Firebase with Google/Microsoft):</p>
            <p className="mb-4">When registering or logging in, we receive your name, email, profile picture, and authentication token. Encrypted access/refresh tokens are stored to connect to your email provider.</p>
            
            <p className="font-medium mb-2">AI Services (OpenAI/ChatGPT):</p>
            <p className="mb-4">When using AI-powered personalization or explanations, relevant data may be securely sent to AI providers to generate responses.</p>
            
            <p className="font-medium mb-2">Payment Processors (Stripe):</p>
            <p className="mb-4">Stripe processes all payments. We only receive subscription details and a Stripe Customer ID—not full payment card details.</p>
            
            <p className="font-medium mb-2">Hosting Providers (Render, Firebase Hosting):</p>
            <p className="mb-4">Used for backend infrastructure and secure data storage.</p>
            
            <p className="font-medium mb-2">Analytics Tools:</p>
            <p className="mb-4">Used to monitor performance and improve our Services.</p>
            
            <p className="font-medium mb-2">Data Partners:</p>
            <p className="mb-4">External data labs such as <strong>People Data Labs</strong> may provide professional contact information to supplement your searches and improve connection opportunities.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">d. Technical & Usage Data</h3>
          
          <div className="mb-6">
            <p className="font-medium mb-2">Device & Connection Info:</p>
            <p className="mb-4">IP address, browser type, device type, OS, and related metadata.</p>
            
            <p className="font-medium mb-2">Usage Data:</p>
            <p className="mb-4">Features accessed, time spent, click paths, and other interactions within the Services.</p>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-6">2. HOW WE USE YOUR INFORMATION</h2>
          
          <p className="mb-4">We use collected information to:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Create and manage your account.</li>
            <li>Provide, operate, and maintain the Services (e.g., connecting to email providers, saving drafts in Gmail, sending emails, managing contacts, generating analytics).</li>
            <li>Personalize emails and generate AI-powered content suggestions.</li>
            <li>Process subscriptions and payments securely through Stripe.</li>
            <li>Deliver analytics, dashboards, and outreach performance insights.</li>
            <li>Communicate updates, support responses, and account notices.</li>
            <li>Detect, investigate, and prevent fraud, misuse, or security issues.</li>
            <li>Comply with legal obligations.</li>
            <li>Ensure compliance with privacy and anti-spam laws such as GDPR, CCPA, and CAN-SPAM.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-6">3. LEGAL BASES FOR PROCESSING (GDPR)</h2>
          
          <p className="mb-4">Where required by applicable law, we process personal data on the following legal bases:</p>
          <ul className="list-disc ml-6 mb-6">
            <li><strong>Consent:</strong> When you provide explicit consent (e.g., connecting your Google account).</li>
            <li><strong>Contract:</strong> When processing is necessary to provide the Services under our Terms of Service.</li>
            <li><strong>Legal Obligation:</strong> When processing is required to comply with applicable laws or regulations.</li>
            <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate business interests, such as improving the Services, preventing abuse, or analyzing usage, provided those interests are not overridden by your rights.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-6">4. SECURITY MEASURES</h2>
          
          <p className="mb-4">We use industry-standard safeguards to protect your data:</p>
          <ul className="list-disc ml-6 mb-6">
            <li><strong>Encryption in Transit & At Rest:</strong> TLS (HTTPS) for data in motion; AES-256 for sensitive data like OAuth tokens.</li>
            <li><strong>Access Controls:</strong> Restricted to authorized personnel/systems.</li>
            <li><strong>Monitoring & Auditing:</strong> Logging and vulnerability audits.</li>
            <li><strong>Compliance:</strong> Best practices aligned with the Google API Services User Data Policy.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-6">5. DISCLOSURE OF YOUR INFORMATION</h2>
          
          <p className="mb-4">We may disclose information in the following cases:</p>
          <ul className="list-disc ml-6 mb-6">
            <li><strong>By Law / Protection of Rights:</strong> As required to comply with law, legal process, or enforce our rights.</li>
            <li><strong>Third-Party Providers:</strong> For authentication (Firebase), email (Gmail API, Microsoft Graph API), AI processing (OpenAI), payments (Stripe), hosting (Render, Firebase Hosting), and analytics. All are bound by contractual obligations to protect your data.</li>
            <li><strong>Third-Party Data Sources:</strong> Data from People Data Labs (PDL) and similar providers is used only for professional networking/recruiting functionality.</li>
            <li><strong>Business Transfers:</strong> If we undergo a merger, acquisition, or sale.</li>
            <li><strong>No Sale of Data:</strong> We do not sell, rent, or trade personal data.</li>
            <li><strong>No Advertising Use:</strong> We do not use Google user data or third-party data for advertising or unrelated marketing.</li>
            <li><strong>With Your Consent:</strong> We share data only for purposes you explicitly approve.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-6">6. GOOGLE API SERVICES USER DATA POLICY</h2>
          
          <p className="mb-4">Offerloop.ai's use and transfer of information received from Google APIs strictly adheres to the Google API Services User Data Policy, including the Limited Use requirements. Specifically:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>We only access Gmail data with your explicit consent through Google OAuth.</li>
            <li>Requested scopes (e.g., gmail.readonly, gmail.compose, gmail.modify, gmail.metadata, gmail.insert) are used to save outreach emails into your Gmail Drafts folder at your request, schedule and send emails on your behalf, and detect replies and update email status.</li>
            <li>We never sell Gmail data or use it for advertising.</li>
            <li>Humans cannot access Gmail content except with your explicit consent, for abuse/security investigations, to comply with law, or after anonymization/aggregation for service operations.</li>
            <li>We do not use Gmail or Google Workspace data to train general AI/ML models.</li>
            <li>You may revoke access at any time via your Google Account Security Settings.</li>
            <li>Upon account deletion or revocation, associated Google data is promptly deleted from our systems, except where retention is legally required.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-6">7. DATA RETENTION</h2>
          
          <ul className="list-disc ml-6 mb-6">
            <li><strong>Account Data:</strong> Stored as long as your account is active.</li>
            <li><strong>Drafts & Emails:</strong> Retained only as long as needed to fulfill Service functions (draft storage, scheduling, reply detection).</li>
            <li><strong>Analytics Data:</strong> May be anonymized/aggregated for long-term storage.</li>
            <li><strong>Deletion Requests:</strong> Honored within 30 days, except where retention is legally required.</li>
            <li><strong>Export Rights:</strong> Users may request an export of their personal data in a machine-readable format (e.g., CSV or JSON) before deletion.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-6">8. YOUR RIGHTS & CHOICES</h2>
          
          <p className="mb-4">Depending on your jurisdiction, you may request:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Access to personal data we hold.</li>
            <li>Correction of inaccuracies.</li>
            <li>Deletion of personal data (with some legal/operational exceptions).</li>
            <li>Restriction or objection to processing.</li>
            <li>Data portability in machine-readable format.</li>
            <li>Revocation of consent (e.g., disconnecting Google/Microsoft accounts).</li>
            <li>Email tracking opt-out by disabling image loading in your client.</li>
            <li>The right to lodge a complaint with a supervisory authority if you believe our processing of personal data violates applicable law.</li>
          </ul>
          
          <p className="mb-6">
            Requests may be made via <strong>privacy@offerloop.ai</strong> or <strong>support@offerloop.ai</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">9. CHILDREN'S PRIVACY</h2>
          
          <p className="mb-6">
            The Services are not intended for children under 13 (or 16 in certain regions). We do not knowingly collect data from children under these ages. If such data is discovered, it will be deleted promptly.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">10. INTERNATIONAL DATA TRANSFERS</h2>
          
          <p className="mb-6">
            Your information may be stored on servers located outside your home country (e.g., via Render and Firebase Hosting). By using the Services, you consent to international transfers as permitted by law.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">11. THIRD-PARTY WEBSITES & SERVICES</h2>
          
          <p className="mb-6">
            Our Services may link to third-party sites (LinkedIn, Stripe, AI providers, etc.). We are not responsible for their practices; please review their privacy policies separately.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">12. COOKIES & TRACKING TECHNOLOGIES</h2>
          
          <p className="mb-4">We use:</p>
          <ul className="list-disc ml-6 mb-6">
            <li><strong>Session Cookies</strong> for secure navigation.</li>
            <li><strong>Preference Cookies</strong> for saved settings.</li>
            <li><strong>Analytics Cookies</strong> for performance insights.</li>
            <li><strong>Tracking Pixels & Links</strong> for email activity monitoring.</li>
          </ul>
          
          <p className="mb-6">
            You may disable cookies in browser settings, though this may impact functionality.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">13. SERVICE AVAILABILITY DISCLAIMER</h2>
          
          <p className="mb-6">
            The Services may rely on third-party infrastructure providers (e.g., Firebase, Render, OpenAI). While we use industry-standard practices to maintain availability, we cannot guarantee uninterrupted or error-free operation, and availability may depend on those providers.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">14. CHANGES TO THIS POLICY</h2>
          
          <p className="mb-6">
            We may update this Privacy Policy periodically. Updates are effective immediately once posted with a new "Last Updated" date.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">15. CONTACT US</h2>
          
          <p className="mb-4">If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>📧 <strong>support@offerloop.ai</strong> (general inquiries)</li>
            <li>📧 <strong>privacy@offerloop.ai</strong> (privacy and data protection inquiries)</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;