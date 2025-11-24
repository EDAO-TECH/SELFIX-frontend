import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ServerCrash, Bot, ShieldCheck, Clock, AlertTriangle, Layers, Heart, LineChart, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
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

const OperationsPage = () => {
  const painPoints = [
    { icon: ServerCrash, text: 'System Downtime' },
    { icon: Bot, text: 'Manual Errors' },
    { icon: Clock, text: 'Slow Incident Response' },
    { icon: AlertTriangle, text: 'Security Vulnerabilities' },
    { icon: Layers, text: 'Complex Infrastructure' },
    { icon: Cpu, text: 'High Operational Costs' },
  ];

  const outcomes = [
      { value: '99.999%', label: 'Guaranteed Uptime' },
      { value: '80%', label: 'Reduction in Manual Tasks' },
      { value: '95%', label: 'Faster Incident Resolution' },
  ];

  return (
    <>
      <Helmet>
        <title>Operations: AI That Never Breaks | SELFIX</title>
        <meta name="description" content="Discover how Selfix ensures zero downtime and autonomous reliability for mission-critical healthcare IT operations." />
      </Helmet>
      <PageHero
        title="AI That Never Breaks"
        subtitle="Selfix delivers autonomous reliability for mission-critical healthcare systems, ensuring zero downtime and operational excellence so you can focus on patient outcomes."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-foreground">Overcome Your Biggest Operational Hurdles</h2>
             <p className="mt-4 text-lg text-slate-600">Healthcare IT is complex and unforgiving. We solve the core problems.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-4 bg-slate-100 rounded-full inline-block border border-transparent group-hover:border-primary transition-colors">
                    <point.icon className="w-10 h-10 text-primary" />
                </div>
                <p className="mt-4 font-semibold text-slate-800">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">The SELFIX Operational Layer</h2>
              <p className="text-lg text-slate-600 mb-12">Our infrastructure is an intelligent, self-healing foundation that sits beneath your applications, ensuring they are always available, secure, and performant.</p>
              <div className="relative border-2 border-primary/30 rounded-xl p-8 bg-white">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-primary-foreground font-semibold rounded-full text-sm">Your Applications</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="text-center space-y-2 p-4 rounded-lg bg-slate-50">
                            <Layers size={32} className="mx-auto text-slate-500"/>
                            <h4 className="font-bold text-slate-800">EHR / EMR</h4>
                        </div>
                         <div className="text-center space-y-2 p-4 rounded-lg bg-slate-50">
                            <Heart size={32} className="mx-auto text-slate-500"/>
                            <h4 className="font-bold text-slate-800">Clinical Systems</h4>
                        </div>
                         <div className="text-center space-y-2 p-4 rounded-lg bg-slate-50">
                            <LineChart size={32} className="mx-auto text-slate-500"/>
                            <h4 className="font-bold text-slate-800">Patient Portals</h4>
                        </div>
                    </div>
                    <div className="my-8 border-b-2 border-dashed border-primary/50"></div>
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-4 py-1 bg-primary text-primary-foreground font-semibold rounded-full text-sm">SELFIX Operational Layer</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="p-4">
                            <h4 className="font-bold text-slate-800">Self-Healing Engine</h4>
                            <p className="text-sm text-slate-600">Autonomous recovery</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-slate-800">SHX-Gov</h4>
                             <p className="text-sm text-slate-600">Reliability governance</p>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-slate-800">Cyber Defense</h4>
                             <p className="text-sm text-slate-600">Real-time protection</p>
                        </div>
                    </div>
              </div>
          </div>
      </section>

      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-foreground">Reliability Through Governance</h2>
                      <p className="mt-4 text-lg text-slate-600">Our <span className="text-primary font-semibold">SHX-Gov</span> framework is the brain behind our reliability. It's not just about fixing problems—it's about creating an environment where problems are prevented before they start. By enforcing strict operational policies, SHX-Gov ensures every action is safe, authorized, and optimized for performance.</p>
                  </div>
                  <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border">
                          <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0 mt-1"/>
                          <div>
                              <h4 className="font-bold text-slate-800">Policy Enforcement</h4>
                              <p className="text-slate-600 text-sm">Ensures all changes and actions adhere to pre-defined safety and operational rules.</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border">
                          <Bot className="w-8 h-8 text-primary flex-shrink-0 mt-1"/>
                          <div>
                              <h4 className="font-bold text-slate-800">Autonomous Control</h4>
                              <p className="text-slate-600 text-sm">Manages resources, configurations, and recovery processes without human intervention.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-foreground">Integrated with ProHealers™ Clinical AI</h2>
              <p className="mt-4 text-lg text-slate-600 mb-12">The Selfix operational layer provides the reliable foundation upon which our ProHealers™ clinical applications run, ensuring that patient-facing services are always on.</p>
               <div className="grid md:grid-cols-2 gap-8">
                   <div className="p-8 rounded-lg bg-white border hover:border-primary transition-colors shadow-sm">
                       <h3 className="text-xl font-bold text-primary">Clinical Workflow Automation</h3>
                       <p className="mt-2 text-slate-600">Automate notes, scheduling, and tasks on an infrastructure that never fails.</p>
                   </div>
                   <div className="p-8 rounded-lg bg-white border hover:border-primary transition-colors shadow-sm">
                       <h3 className="text-xl font-bold text-primary">Guardian-Approved Actions</h3>
                       <p className="mt-2 text-slate-600">Clinical AI actions are executed flawlessly with guaranteed system availability.</p>
                   </div>
               </div>
          </div>
      </section>
      
       <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-foreground">Proven Outcomes</h2>
             <p className="mt-4 text-lg text-slate-600">The measurable impact of autonomous operations.</p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {outcomes.map((outcome, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="p-8 bg-slate-50 rounded-lg border"
                    >
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

export default OperationsPage;