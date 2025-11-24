import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, Users, HeartPulse, Shield, Server, FileText } from 'lucide-react';

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

const UseCasesPage = () => {
  const useCases = [
    { icon: Building2, title: 'Hospitals', pain: 'EMR downtime halts operations.', outcome: 'Guaranteed 99.999% uptime for critical systems.' },
    { icon: Stethoscope, title: 'Clinics', pain: 'Staff overwhelmed by admin tasks.', outcome: 'Automated notes and scheduling saves 10+ hours/week per clinician.' },
    { icon: Users, title: 'Disability Support (NDIS)', pain: 'Complex NDIS documentation.', outcome: 'Automated, compliant note-taking and evidence generation.' },
    { icon: HeartPulse, title: 'Aged Care', pain: 'Ensuring safety and compliance in resident care.', outcome: 'Guardian-approved AI workflows and auditable logs.' },
    { icon: Shield, title: 'Allied Health', pain: 'Managing diverse and mobile workforces securely.', outcome: 'LiquidTrust ensures secure data access anywhere.' },
    { icon: FileText, title: 'Insurers', pain: 'Verifying claims and treatment history.', outcome: 'Forensic ledger provides immutable proof of care.' },
    { icon: Server, title: 'Health SaaS Vendors', pain: 'Struggling to meet enterprise security and compliance demands.', outcome: 'Selfix layer provides instant, verifiable trust and reliability.' },
  ];

  return (
    <>
      <Helmet>
        <title>Use Cases | SELFIX</title>
        <meta name="description" content="Discover how Selfix delivers tailored outcomes for hospitals, clinics, disability support, aged care, and more." />
      </Helmet>
      <PageHero
        title="Solutions for Every Healthcare Sector"
        subtitle="Selfix is not a one-size-fits-all solution. Our platform is purpose-built to solve the unique reliability, security, and compliance challenges of your specific environment."
      />
      
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col h-full bg-white rounded-lg border p-8 shadow-sm"
              >
                <div className="flex items-center gap-4">
                    <useCase.icon className="w-10 h-10 text-primary" />
                    <h3 className="text-2xl font-bold text-slate-800">{useCase.title}</h3>
                </div>
                <div className="mt-6 flex-grow">
                    <p className="text-red-600/90"><span className="font-semibold text-red-700">Pain Point:</span> {useCase.pain}</p>
                    <p className="mt-3 text-primary/90"><span className="font-semibold text-primary">Selfix Outcome:</span> {useCase.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UseCasesPage;