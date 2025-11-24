import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Lock, Scale, FileBadge, CheckCircle, Shield, Eye } from 'lucide-react';
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

const TrustPage = () => {
    const principles = [
        { icon: Shield, title: 'Safety First', description: 'Technology must never cause harm. All systems are fail-safe by design.' },
        { icon: Eye, title: 'Verifiable by Default', description: 'Trust must be proven, not promised. All actions are auditable.' },
        { icon: Lock, title: 'Human in Control', description: 'Autonomy must serve human expertise, not replace it.' },
    ];
    
    const trustLevels = [
        { score: '0-20', level: 'Untrusted', access: 'No access', color: 'bg-red-500' },
        { score: '21-60', level: 'Limited', access: 'Read-only access', color: 'bg-yellow-500' },
        { score: '61-90', level: 'Trusted', access: 'Standard operational access', color: 'bg-teal-500' },
        { score: '91-100', level: 'Highly Trusted', access: 'Privileged/Admin access', color: 'bg-primary' },
    ];

  return (
    <>
      <Helmet>
        <title>Trust Framework | SELFIX</title>
        <meta name="description" content="Explore the Selfix Trust Framework, including our governance principles, dynamic Trust Score model, and Guardian approval workflows." />
      </Helmet>
      <PageHero
        title="The Trust Framework"
        subtitle="Trust is the currency of healthcare. Our framework is a comprehensive system of technology, process, and governance designed to make trust a measurable, verifiable, and dynamic asset."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-foreground">Our Governance Principles</h2>
             <p className="mt-4 text-lg text-slate-600">The immovable pillars that support our entire platform.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((p, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="p-8 bg-slate-50 rounded-lg text-center border">
                <div className="inline-block p-4 bg-white rounded-full border"><p.icon className="w-10 h-10 text-primary" /></div>
                <h3 className="mt-6 text-xl font-bold text-slate-800">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-foreground">The Dynamic Trust Score Model</h2>
             <p className="mt-4 text-lg text-slate-600">LiquidTrust™ moves beyond static permissions. We assign a real-time Trust Score (0-100) to every actor, granting access based on context, behavior, and credentials.</p>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-4 mb-4 flex overflow-hidden">
              <div className="h-4 bg-red-500" style={{width: '20%'}}></div>
              <div className="h-4 bg-yellow-500" style={{width: '40%'}}></div>
              <div className="h-4 bg-teal-500" style={{width: '30%'}}></div>
              <div className="h-4 bg-primary" style={{width: '10%'}}></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {trustLevels.map(level => (
                  <div key={level.level} className="p-4 bg-white rounded-lg border">
                      <p className={`font-bold text-lg ${level.color.replace('bg-', 'text-')}`}>{level.level} ({level.score})</p>
                      <p className="text-slate-600 text-sm">{level.access}</p>
                  </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Scale className="w-12 h-12 text-primary mx-auto mb-4"/>
              <h2 className="text-3xl font-bold text-foreground">Guardian Approval Workflow</h2>
              <p className="mt-4 text-lg text-slate-600">For high-stakes clinical actions, technology and trust must work together. Our Guardian workflow requires explicit approval from authorized humans for AI-initiated tasks, ensuring a human-centric safety net that is fully auditable in the BOF ledger.</p>
          </div>
      </section>

      <section className="py-24 bg-background text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <FileBadge className="w-12 h-12 text-primary mx-auto mb-4"/>
              <h2 className="text-3xl font-bold text-foreground">Certification and Attestation</h2>
              <p className="mt-4 text-lg text-slate-600">We partner with leading third-party auditors to continuously certify our platform against key healthcare standards. Our compliance reports are available on-demand for our customers.</p>
               <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/api">Start Integration</Link>
               </Button>
          </div>
      </section>
    </>
  );
};

export default TrustPage;