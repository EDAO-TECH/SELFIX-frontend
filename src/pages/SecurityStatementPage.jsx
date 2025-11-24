import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SecurityStatementPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Security Statement | SELFIX</title>
        <meta name="description" content="Security Statement for Selfix Technologies - Governance Evidence Layer and Compliance." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="border-b pb-8">
          <h1 className="text-4xl font-bold text-foreground">Security Statement</h1>
          <p className="mt-4 text-slate-600">Last Updated: November 20, 2025</p>
        </header>

        <main className="prose prose-slate max-w-none">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Security Principles</h2>
            <p>At Selfix, security is not an afterthought; it is the foundation of our Autonomous AI Infrastructure. We adhere to a "Secure by Design" philosophy, ensuring that every component, from our AI models to our data storage, is built to withstand sophisticated threats while maintaining high availability and integrity.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Governance Evidence Layer</h2>
            <p>Our proprietary Governance Evidence Layer is the cornerstone of our security architecture. It provides:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Immutable Logging:</strong> Cryptographically secured logs of all system activities that cannot be altered or deleted.</li>
              <li><strong>Real-time Auditing:</strong> Continuous monitoring of data access and configuration changes.</li>
              <li><strong>Traceability:</strong> Complete lineage tracking for all AI decisions and data processing events.</li>
            </ul>
            <p>This layer ensures that we can prove the integrity of our operations to auditors and regulators at any time.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Compliance</h2>
            <p>Selfix is committed to meeting the highest standards of regulatory compliance. Our platform is designed to support compliance with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>HIPAA:</strong> Protecting the privacy and security of Protected Health Information (PHI).</li>
              <li><strong>GDPR:</strong> Ensuring data protection and privacy for individuals within the EU.</li>
              <li><strong>SOC 2 Type II:</strong> Demonstrating effective controls over security, availability, processing integrity, confidentiality, and privacy.</li>
              <li><strong>ISO 27001:</strong> Adhering to international standards for information security management.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Incident Response</h2>
            <p>We maintain a comprehensive Incident Response Plan (IRP) that is regularly tested and updated. Our dedicated security team monitors the platform 24/7 for anomalies. In the event of a security incident, we have established procedures for containment, eradication, recovery, and transparent communication with affected customers and regulatory bodies.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Third-Party Security</h2>
            <p>We rigorously vet all third-party vendors and partners. Our vendor risk management program ensures that any external entity with access to our systems or data adheres to security standards that are at least as stringent as our own.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Contact</h2>
            <p>Security is a shared responsibility. If you have questions about our security practices or wish to report a potential vulnerability, please contact our Security Team.</p>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/contact">Contact Security Team</Link>
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SecurityStatementPage;