import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PrivacyPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Privacy Policy | SELFIX</title>
        <meta name="description" content="Privacy Policy for Selfix Technologies - Governance-focused data protection." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="border-b pb-8">
          <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
          <p className="mt-4 text-slate-600">Last Updated: November 20, 2025</p>
        </header>

        <main className="prose prose-slate max-w-none">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Purpose of Data Collection</h2>
            <p>Selfix Technologies collects data to operate, maintain, and enhance our Autonomous AI Infrastructure for Healthcare. Our primary purpose is to ensure the seamless, secure, and compliant operation of healthcare systems, leveraging our Governance Evidence Layer to provide immutable proof of data handling.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Types of Data Collected</h2>
            <p>We collect the following categories of data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Operational Data:</strong> System logs, performance metrics, and infrastructure status.</li>
              <li><strong>User Account Data:</strong> Names, email addresses, and role-based access credentials.</li>
              <li><strong>Audit Logs:</strong> Records of user interactions, configuration changes, and system events captured by our Governance Evidence Layer.</li>
              <li><strong>Usage Data:</strong> Information on how the platform is accessed and utilized.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. How Data Is Used</h2>
            <p>Data is utilized to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain the Selfix platform services.</li>
              <li>Generate compliance reports and audit trails via the Governance Evidence Layer.</li>
              <li>Detect and prevent security incidents.</li>
              <li>Improve AI model performance and system reliability.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Governance Evidence Layer</h2>
            <p>A core component of our privacy architecture is the Governance Evidence Layer. This system creates an immutable record of all data access and processing activities. This ensures that every interaction with sensitive healthcare data is transparent, traceable, and auditable, providing a higher standard of privacy assurance than traditional logging mechanisms.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Legal Basis for Processing</h2>
            <p>We process personal data under the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contractual Necessity:</strong> To fulfill our obligations under our Service Agreements.</li>
              <li><strong>Legal Obligation:</strong> To comply with healthcare regulations (e.g., HIPAA, GDPR).</li>
              <li><strong>Legitimate Interests:</strong> To ensure network and information security.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Audit logs within the Governance Evidence Layer may be retained for extended periods to meet regulatory compliance standards.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Disclosure of Information</h2>
            <p>We do not sell personal data. We may disclose information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in platform operations, bound by strict confidentiality agreements.</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect the rights and safety of Selfix, our users, or the public.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8. Security & Storage</h2>
            <p>We employ industry-standard security measures, including encryption in transit and at rest, strict access controls, and the Governance Evidence Layer to protect data. Data is stored in secure facilities compliant with ISO 27001 and SOC 2 standards.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">9. User Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise these rights, please contact our Privacy Officer.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">10. Contact</h2>
            <p>For any privacy-related inquiries or to exercise your rights, please contact us.</p>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/contact">Contact Privacy Team</Link>
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPage;