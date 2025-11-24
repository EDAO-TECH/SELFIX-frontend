import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Clock, UserCheck, Bot, FilePlus, Eye, CheckCircle } from 'lucide-react';
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

const ClinicalSupportPage = () => {
  const burdens = [
    { icon: FileText, title: 'Excessive Documentation', description: 'Hours spent writing notes instead of with patients.' },
    { icon: Clock, title: 'Repetitive Admin Tasks', description: 'Manually scheduling appointments and sending reminders.' },
    { icon: UserCheck, title: 'Compliance Overhead', description: 'Ensuring every note and action meets regulatory standards.' },
  ];

  const features = [
      { icon: Bot, title: 'AI-Powered Note Generation', description: 'Drafts accurate, compliant clinical notes from conversations.' },
      { icon: FilePlus, title: 'Task & Workflow Automation', description: 'Automates scheduling, follow-ups, and data entry.' },
      { icon: Eye, title: 'Guardian-Supervised Actions', description: 'Clinicians review and approve AI-suggested tasks with one click.' },
  ];

  const outcomes = [
    { value: '70%', label: 'Reduction in Documentation Time' },
    { value: '10+', label: 'Hours Saved Per Clinician Weekly' },
    { value: '100%', label: 'Compliance with NDIS & HIPAA' },
  ];

  return (
    <>
      <Helmet>
        <title>Clinical Support: Safe AI with Guardian Oversight | SELFIX</title>
        <meta name="description" content="Empower your clinical teams with ProHealers™ AI, designed to automate administrative burdens under strict Guardian supervision." />
      </Helmet>
      <PageHero
        title="Safe Clinical AI With Guardian Oversight"
        subtitle="Free your clinicians from administrative burdens. ProHealers™ automates documentation and workflows, all governed by human oversight to ensure safety and quality."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-foreground">Give Your Clinicians Their Time Back</h2>
             <p className="mt-4 text-lg text-slate-600">The daily grind of administrative work burns out the best caregivers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {burdens.map((burden, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="p-8 bg-slate-50 rounded-lg text-center border hover:border-primary transition-colors">
                <div className="inline-block p-4 bg-white rounded-full border"><burden.icon className="w-10 h-10 text-slate-500" /></div>
                <h3 className="mt-6 text-xl font-bold text-slate-800">{burden.title}</h3>
                <p className="mt-2 text-slate-600">{burden.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-foreground">Introducing ProHealers™ Clinical AI</h2>
             <p className="mt-4 text-lg text-slate-600">An intelligent assistant that works for your clinicians, not the other way around.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="p-8 bg-white rounded-lg border shadow-sm">
                <feature.icon className="w-10 h-10 text-primary" />
                <h3 className="mt-6 text-xl font-bold text-slate-800">{feature.title}</h3>
                <p className="mt-2 text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-foreground">The Guardian in the Loop</h2>
                    <p className="mt-4 text-lg text-slate-600">Safety is non-negotiable. Our Guardian layer ensures a human is always in control. AI can suggest, draft, and prepare, but a qualified clinician gives the final approval. This creates a powerful partnership between human expertise and AI efficiency.</p>
                     <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground" asChild><Link to="/trust">View Trust Framework <span aria-hidden="true">→</span></Link></Button>
                </div>
                <div className="p-8 rounded-xl bg-slate-50 border">
                    <div className="flow-root">
                        <ul className="-mb-8">
                            <li className="relative pb-8">
                                <div className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-border"></div>
                                <div className="relative flex items-start space-x-3">
                                    <div className="relative px-1">
                                        <div className="h-8 w-8 bg-primary rounded-full ring-4 ring-slate-50 flex items-center justify-center"><Bot className="w-5 h-5 text-white" /></div>
                                    </div>
                                    <div className="min-w-0 flex-1 py-1.5">
                                        <div className="text-md text-slate-800">AI drafts a clinical note</div>
                                    </div>
                                </div>
                            </li>
                             <li className="relative pb-8">
                                <div className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-border"></div>
                                <div className="relative flex items-start space-x-3">
                                    <div className="relative px-1">
                                        <div className="h-8 w-8 bg-primary rounded-full ring-4 ring-slate-50 flex items-center justify-center"><UserCheck className="w-5 h-5 text-white" /></div>
                                    </div>
                                    <div className="min-w-0 flex-1 py-1.5">
                                        <div className="text-md text-slate-800">Guardian/Clinician reviews suggestion</div>
                                    </div>
                                </div>
                            </li>
                             <li>
                                <div className="relative flex items-start space-x-3">
                                    <div className="relative px-1">
                                        <div className="h-8 w-8 bg-primary rounded-full ring-4 ring-slate-50 flex items-center justify-center"><CheckCircle className="w-5 h-5 text-white" /></div>
                                    </div>
                                    <div className="min-w-0 flex-1 py-1.5">
                                        <div className="text-md text-slate-800">Clinician approves, action is logged</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <section className="py-24 bg-background text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground">Documentation That Writes Itself</h2>
              <p className="mt-4 text-lg text-slate-600">Our engine transforms interactions into fully compliant, auditable documentation for NDIS, HIPAA, and more. What once took hours now takes minutes.</p>
          </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-foreground">Real Results for Care Teams</h2>
             <p className="mt-4 text-lg text-slate-600">Less admin, more care. The numbers speak for themselves.</p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {outcomes.map((outcome, index) => (
                    <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="p-8 bg-slate-50 rounded-lg border">
                        <p className="text-5xl font-bold text-primary">{outcome.value}</p>
                        <p className="mt-2 text-lg font-semibold text-slate-800">{outcome.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default ClinicalSupportPage;