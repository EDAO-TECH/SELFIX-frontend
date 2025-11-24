import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TermsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Terms of Service | SELFIX</title>
        <meta name="description" content="Terms of Service for Selfix Technologies." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="border-b pb-8">
          <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
          <p className="mt-4 text-slate-600">Last Updated: November 20, 2025</p>
        </header>

        <main className="prose prose-slate max-w-none">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Service Description</h2>
            <p>Selfix Technologies ("Selfix") provides an autonomous AI infrastructure platform designed for healthcare operations, clinical support, and security. Access to the platform is governed by these Terms and any applicable Master Services Agreement.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. User Responsibilities</h2>
            <p>Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account. Users must ensure that their use of the platform complies with all applicable healthcare regulations and laws.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Acceptable Use Policy</h2>
            <p>You agree not to misuse the Selfix platform. Prohibited actions include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attempting to bypass or tamper with the Governance Evidence Layer.</li>
              <li>Reverse engineering the AI models or infrastructure.</li>
              <li>Using the platform to transmit unauthorized or malicious code.</li>
              <li>Violating the privacy or intellectual property rights of others.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Governance & Audit Logging</h2>
            <p>You acknowledge and agree that all actions taken within the Selfix platform are subject to immutable logging via our Governance Evidence Layer. These logs serve as a definitive record for compliance, security auditing, and operational verification. Tampering with these logs is a material breach of these Terms.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Intellectual Property</h2>
            <p>Selfix retains all rights, title, and interest in and to the platform, including all related intellectual property rights. The Governance Evidence Layer technology and AI models are proprietary to Selfix.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Selfix shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Selfix and its officers, directors, employees, and agents from any claims, disputes, demands, liabilities, damages, losses, and costs and expenses arising out of or in any way connected with your access to or use of the platform or your violation of these Terms.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8. Termination</h2>
            <p>We may terminate or suspend your access to the platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Selfix is incorporated, without regard to its conflict of law provisions.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">10. Contact</h2>
            <p>If you have any questions about these Terms, please contact our legal team.</p>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/contact">Contact Legal Team</Link>
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TermsPage;