import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code, Share2, Lock, Zap, ShieldCheck, Heart, FileSearch, Terminal, Download } from 'lucide-react';
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

const ApiPage = () => {

  const capabilities = [
    { icon: Zap, title: 'Trust Score', description: 'Query the real-time trust score of any user or entity.' },
    { icon: ShieldCheck, title: 'Seal Action', description: 'Propose a privileged action to be approved by a Guardian.' },
    { icon: Lock, title: 'Unseal Action', description: 'Execute a previously sealed and approved action.' },
    { icon: Code, title: 'Workflow Trigger', description: 'Initiate a ProHealers™ automated workflow.' },
    { icon: FileSearch, title: 'Ledger Query', description: 'Securely query the BOF forensic ledger for audit data.' },
    { icon: Heart, title: 'Heal Task', description: 'Programmatically trigger a system healing process.' },
    { icon: Share2, title: 'Verify Task', description: 'Verify the integrity and completion of any system task.' },
  ];

  return (
    <>
      <Helmet>
        <title>API: Build on the LiquidTrust™ Framework | SELFIX</title>
        <meta name="description" content="Integrate verifiable trust, security, and reliability into your applications with the Selfix LiquidTrust™ API." />
      </Helmet>
      <PageHero
        title="The LiquidTrust™ API"
        subtitle="Build next-generation healthcare applications on a foundation of verifiable trust. Integrate autonomous reliability and security directly into your own products and workflows."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-foreground">Core API Capabilities</h2>
             <p className="mt-4 text-lg text-slate-600">A powerful set of endpoints to embed trust into every layer of your stack.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="p-8 bg-slate-50 rounded-lg border">
                <cap.icon className="w-10 h-10 text-primary" />
                <h3 className="mt-6 text-xl font-bold text-slate-800">{cap.title}</h3>
                <p className="mt-2 text-slate-600">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="sandbox" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-foreground">Developer Sandbox</h2>
                    <p className="mt-4 text-lg text-slate-600">Get access to a full-featured sandbox environment to build and test your integrations. Simulate healing events, query a sample ledger, and test Guardian approval flows without any risk to production data.</p>
                    <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"><Link to="/api">Start Integration</Link></Button>
                </div>
                 <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-lg">
                    <Terminal className="w-8 h-8 text-primary mb-4"/>
                    <pre className="text-sm bg-slate-900 p-4 rounded-md text-slate-300 overflow-x-auto"><code>
                        {`fetch('https://api.selfix.pro/v1/trust/score', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ userId: 'user-123' })
});`}
                    </code></pre>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
          <div id="whitepaper" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Download className="w-12 h-12 text-primary mx-auto mb-4"/>
              <h2 className="text-3xl font-bold text-foreground">SDKs and Documentation</h2>
              <p className="mt-4 text-lg text-slate-600">Get started quickly with our official SDKs for popular languages and explore our comprehensive API documentation with guides and examples for every endpoint.</p>
               <div className="mt-8 flex justify-center gap-4">
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-accent hover:text-primary"><Link to="/technology#whitepaper">Download Whitepaper</Link></Button>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-accent hover:text-primary"><Link to="/trust">View Trust Framework</Link></Button>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground"><Link to="/contact">Book Demo</Link></Button>
               </div>
          </div>
      </section>
    </>
  );
};

export default ApiPage;