import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Bot, Bug, Shield, Heart, Lock, CheckSquare } from 'lucide-react';
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

const SecurityPage = () => {
    const threats = [
        { icon: Bug, name: 'Ransomware' },
        { icon: ShieldAlert, name: 'Insider Threats' },
        { icon: Bot, name: 'Zero-Day Exploits' },
        { icon: Zap, name: 'Data Breaches' },
    ];
  
  return (
    <>
      <Helmet>
        <title>Security: Autonomous Cyber Defense for Healthcare | SELFIX</title>
        <meta name="description" content="Protect your healthcare organization with Selfix's self-generating defense, autonomous healing, and LiquidTrust security model." />
      </Helmet>
      <PageHero
        title="Autonomous Cyber Defense for Healthcare"
        subtitle="In a world of evolving threats, passive security is a liability. Selfix provides a proactive, self-healing security posture that actively hunts, neutralizes, and recovers from attacks."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-foreground">The Modern Healthcare Threat Landscape</h2>
             <p className="mt-4 text-lg text-slate-600">Healthcare is the #1 target. Your defense needs to be better.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {threats.map((threat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="p-8 bg-red-50 rounded-lg text-center border border-red-200">
                <div className="inline-block p-4 bg-red-100 rounded-full"><threat.icon className="w-10 h-10 text-red-600" /></div>
                <h3 className="mt-6 text-xl font-bold text-slate-800">{threat.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="p-8 bg-white rounded-xl border-2 border-primary/20 shadow-md">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
                    <h3 className="text-2xl font-bold text-slate-800 text-center">Self-Generating Defense</h3>
                    <p className="text-slate-600 mt-4 text-center">Selfix doesn't wait for attacks. Our Countermeasure Evolution engine analyzes threats and autonomously generates and deploys new security rules and configurations to harden the system *before* an attack can succeed.</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-foreground">From Passive to Proactive</h2>
                    <p className="mt-4 text-lg text-slate-600">Traditional security waits for a signature or a known bad actor. Our system assumes compromise is always possible and actively works to make it impossible. It's a fundamental shift from defense to pre-emptive hardening.</p>
                </div>
            </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Healing After the Attack</h2>
          <p className="mt-4 text-lg text-slate-600 mb-12">When an attack does occur, recovery is instant and autonomous. Our Healing Engine uses the Adaptive State Memory to revert affected systems to their last known perfect state, neutralizing the threat and restoring operations in seconds.</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-slate-50 rounded-lg border"><span className="font-bold text-slate-800">1. Detect:</span><p className="text-slate-600">Beast Detector identifies ransomware activity.</p></div>
              <div className="p-6 bg-slate-50 rounded-lg border"><span className="font-bold text-slate-800">2. Isolate:</span><p className="text-slate-600">Affected systems are instantly sandboxed.</p></div>
              <div className="p-6 bg-slate-50 rounded-lg border"><span className="font-bold text-slate-800">3. Heal:</span><p className="text-slate-600">System reverts to pre-attack state from memory.</p></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-foreground">LiquidTrust™ Security Model</h2>
                    <p className="mt-4 text-lg text-slate-600">Our security extends to identity. The LiquidTrust™ framework assigns a dynamic Trust Score to every user and system component. Access to sensitive data and critical operations is granted based on this real-time score, not static permissions. This stops lateral movement and contains insider threats instantly.</p>
                     <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"><Link to="/trust">Explore the Trust Framework <span aria-hidden="true">→</span></Link></Button>
                </div>
                 <div className="p-8 bg-white rounded-xl border space-y-4 shadow-sm">
                     <div className="flex items-start gap-4"><Lock className="w-8 h-8 text-slate-500 flex-shrink-0"/><p className="text-slate-800">Zero-trust architecture by default.</p></div>
                     <div className="flex items-start gap-4"><Zap className="w-8 h-8 text-slate-500 flex-shrink-0"/><p className="text-slate-800">Trust is dynamic and context-aware.</p></div>
                     <div className="flex items-start gap-4"><CheckSquare className="w-8 h-8 text-slate-500 flex-shrink-0"/><p className="text-slate-800">Verifiable credentials for all actors.</p></div>
                 </div>
            </div>
        </div>
      </section>

       <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4"/>
              <h2 className="text-3xl font-bold text-foreground">See the Proof</h2>
              <p className="mt-4 text-lg text-slate-600">Don't take our word for it. Watch a live demonstration of Selfix detecting, isolating, and autonomously healing from a simulated ransomware attack in under 60 seconds.</p>
               <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/technology#whitepaper">Download Whitepaper</Link>
               </Button>
          </div>
      </section>
    </>
  );
};

export default SecurityPage;