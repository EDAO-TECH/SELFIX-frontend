import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Cpu, Search, Heart, Lock, BrainCircuit, Zap, Shield, FileSearch } from 'lucide-react';
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

const TechnologyPage = () => {
  const coreTech = [
    { icon: Cpu, title: 'Selfix Engine', description: 'The core orchestrator for all autonomous operations.' },
    { icon: Search, title: 'Beast Detector', description: 'Real-time anomaly and threat detection engine.' },
    { icon: Heart, title: 'Healing Engine', description: 'Executes autonomous recovery and remediation tasks.' },
    { icon: Lock, title: 'BOF Ledger', description: 'Tamper-proof forensic ledger for all system actions.' },
    { icon: BrainCircuit, title: 'Adaptive State Memory', description: 'Maintains a perfect state model of the system for instant recovery.' },
    { icon: Zap, title: 'Countermeasure Evolution', description: 'Generates and deploys new defenses against emerging threats.' },
  ];
  
  const pipeline = ['Detect', 'Analyze', 'Decide', 'Act', 'Heal', 'Verify', 'Harden', 'Report'];

  return (
    <>
      <Helmet>
        <title>Technology: The Self-Healing AI Infrastructure | SELFIX</title>
        <meta name="description" content="Explore the core technologies behind Selfix, including our autonomic healing pipeline and the Selfix Engine." />
      </Helmet>
      <PageHero
        title="The Self-Healing AI Infrastructure"
        subtitle="Our technology is a fundamental shift from reactive IT to a proactive, autonomous foundation that anticipates, defends, and heals itself."
      />
      
      <section id="whitepaper" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-foreground">Core Technology Components</h2>
             <p className="mt-4 text-lg text-slate-600">A symphony of specialized engines working in concert to deliver autonomous reliability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTech.map((tech, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="p-8 bg-slate-50 rounded-lg border">
                <tech.icon className="w-10 h-10 text-primary" />
                <h3 className="mt-6 text-xl font-bold text-slate-800">{tech.title}</h3>
                <p className="mt-2 text-slate-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-foreground">The 8-Stage Autonomic Healing Pipeline</h2>
             <p className="mt-4 text-lg text-slate-600">Our closed-loop system for maintaining operational integrity.</p>
          </div>
          <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border hidden md:block"></div>
              <div className="grid grid-cols-2 md:grid-cols-8 gap-4 relative">
                  {pipeline.map((stage, index) => (
                      <div key={stage} className="flex flex-col items-center text-center p-2">
                           <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg border-4 border-background z-10">{index + 1}</div>
                           <p className="mt-3 font-semibold text-slate-800">{stage}</p>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-foreground">Forensics by Default with BOF</h2>
                    <p className="mt-4 text-lg text-slate-600">Our Bag of Facts (BOF) ledger is not just for compliance; it's a core technological advantage. By recording every system event in a tamper-proof manner, it provides the ground truth needed for the Healing Engine to make perfect recovery decisions and for the Countermeasure Evolution engine to learn from past events.</p>
                    <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"><Link to="/compliance">Learn about BOF <span aria-hidden="true">→</span></Link></Button>
                </div>
                <div className="p-8 bg-slate-50 rounded-xl border space-y-4">
                    <div className="flex items-center gap-4">
                        <FileSearch className="w-8 h-8 text-primary"/>
                        <p className="text-slate-800">Provides data for root cause analysis.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Heart className="w-8 h-8 text-primary"/>
                        <p className="text-slate-800">Enables precise, stateful system recovery.</p>
                    </div>
                     <div className="flex items-center gap-4">
                        <Shield className="w-8 h-8 text-primary"/>
                        <p className="text-slate-800">Fuels the evolution of new security countermeasures.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <section className="py-24 bg-background text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground">Broad System Compatibility</h2>
              <p className="mt-4 text-lg text-slate-600">Selfix is designed to be infrastructure-agnostic. It can be deployed on-premise, in any major cloud provider, or in hybrid environments to protect both modern and legacy healthcare systems.</p>
              <div className="mt-8 flex justify-center items-center gap-8 flex-wrap">
                  <span className="font-semibold text-slate-700">On-Premise</span>
                  <span className="font-semibold text-slate-700">AWS</span>
                  <span className="font-semibold text-slate-700">Azure</span>
                  <span className="font-semibold text-slate-700">Google Cloud</span>
                  <span className="font-semibold text-slate-700">Hybrid</span>
              </div>
          </div>
      </section>
    </>
  );
};

export default TechnologyPage;