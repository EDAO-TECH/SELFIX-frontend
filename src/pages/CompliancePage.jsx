import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Shield, Gavel, Lock, CheckCircle, FileBadge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PageHero = ({ title, subtitle }) => (
  <section className="bg-background py-20 md:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

const CompliancePage = () => {
    const standards = ['ISO27001', 'HIPAA', 'NDIS', 'Essential 8', 'WORM'];

  return (
    <>
      <Helmet>
        <title>Compliance Without Effort | SELFIX</title>
        <meta name="description" content="Automate compliance with Selfix's BOF forensic ledger, Guardian-approved actions, and automated documentation for major healthcare standards." />
      </Helmet>
      <PageHero
        title="Compliance Without Effort"
        subtitle="Our platform is built on a foundation of forensic-grade evidence and automated governance, making compliance a continuous, effortless outcome, not a periodic struggle."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground">Automated Adherence to Key Standards</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                {standards.map(standard => (
                    <div key={standard} className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full border">
                        <CheckCircle className="w-5 h-5 text-primary"/>
                        <span className="font-semibold text-slate-800">{standard}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-foreground">The BOF Forensic Ledger</h2>
                      <p className="mt-4 text-lg text-slate-600">The Bag of Facts (BOF) is our immutable, WORM-compliant ledger that provides the unimpeachable evidence regulators require. Every single system event—from a user login to an automated healing action—is cryptographically sealed and recorded. This eliminates ambiguity and provides a perfect audit trail.</p>
                      <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"><Link to="/technology">Explore the Technology <span aria-hidden="true">→</span></Link></Button>
                  </div>
                  <div className="p-8 bg-white rounded-xl border space-y-6 shadow-sm">
                      <div className="flex items-start gap-4">
                          <Lock className="w-10 h-10 text-primary flex-shrink-0"/>
                          <div><h4 className="font-bold text-slate-800">Tamper-Proof</h4><p className="text-slate-600">Records cannot be altered or deleted.</p></div>
                      </div>
                      <div className="flex items-start gap-4">
                          <Gavel className="w-10 h-10 text-primary flex-shrink-0"/>
                          <div><h4 className="font-bold text-slate-800">Regulator-Grade</h4><p className="text-slate-600">Designed to meet the strictest evidence requirements.</p></div>
                      </div>
                      <div className="flex items-start gap-4">
                          <FileText className="w-10 h-10 text-primary flex-shrink-0"/>
                          <div><h4 className="font-bold text-slate-800">Chronologically Ordered</h4><p className="text-slate-600">Provides a clear, sequential history of events.</p></div>
                      </div>
                  </div>
              </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <h2 className="text-3xl font-bold text-foreground">Guardian-Approved Actions</h2>
              <p className="mt-4 text-lg text-slate-600">Compliance is also about control. The Guardian layer ensures that critical AI-driven actions in clinical settings are reviewed and approved by authorized personnel. The BOF ledger then records both the AI's proposal and the human's approval, creating a complete, accountable decision-making record.</p>
          </div>
      </section>

      <section className="py-24 bg-background text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <FileBadge className="w-12 h-12 text-primary mx-auto mb-4"/>
              <h2 className="text-3xl font-bold text-foreground">Automated Documentation</h2>
              <p className="mt-4 text-lg text-slate-600">Stop chasing paperwork. Our system generates compliance documentation automatically from the verified data in the BOF ledger. Produce audit reports, access logs, and system change histories in minutes, not weeks.</p>
               <Button size="lg" asChild className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/contact">Contact Sales</Link>
               </Button>
          </div>
      </section>
    </>
  );
};

export default CompliancePage;