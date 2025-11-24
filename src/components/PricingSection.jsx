
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const pricingTiers = [
  {
    name: 'Lite',
    icon: Zap,
    description: 'Entry package for GP and allied‑health practices that need basic Seal → Detect → Heal → Prove capability on a constrained footprint.',
    features: [
      'Autonomous Healing Engine',
      'Proof Ledger',
      'Basic Dashboard',
      'Limited Proofs/month'
    ],
    buttonText: 'Start Free Trial',
    buttonLink: '/contact',
    accentColor: '#36FFB5'
  },
  {
    name: 'Standard',
    icon: Shield,
    description: 'Full resilience suite for single‑site hospitals and aged‑care operators, including continuous drift monitoring, sandbox simulations and mapped compliance templates.',
    features: [
      'All Lite Features',
      'Continuous Drift Monitoring',
      'Sandbox Simulations',
      'Compliance Templates',
      'Enhanced Proofs/month'
    ],
    buttonText: 'Request Demo',
    buttonLink: '/contact',
    accentColor: '#13C296'
  },
  {
    name: 'Enterprise',
    icon: TrendingUp,
    description: 'Multi‑site automation with SSO, advanced integrations and optional dedicated trust node, designed for networks that must evidence recovery at scale.',
    features: [
      'All Standard Features',
      'Multi-site Automation',
      'SSO & Advanced Integrations',
      'Optional Dedicated Trust Node',
      'Unlimited Proofs/month'
    ],
    buttonText: 'Contact Sales',
    buttonLink: '/contact',
    accentColor: '#36FFB5'
  },
];

const PricingSection = () => {
  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F3F5F7] mb-4">
            Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36FFB5] to-[#13C296]">Pricing</span> for Every Scale
          </h2>
          <p className="text-xl text-[#C7CBD1] max-w-3xl mx-auto">
            SELFIX ProHealers is sold as a subscription Proof‑as‑a‑Service platform for clinics, hospitals and healthcare networks. Each tier combines the core autonomous healing engine, proof ledger and dashboard with clear limits on proofs per month, sandbox access and integrations, so procurement teams know exactly what is included.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="relative bg-[#0A2342]/50 border border-[#13C296]/20 rounded-xl p-8 shadow-lg group hover:border-[#13C296]/50 transition-all duration-300"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-center p-4 rounded-full bg-[#0A0A0A] border-2 border-[#13C296]/30 mb-6 group-hover:border-white transition-all duration-300">
                  <tier.icon className="w-8 h-8" style={{ color: tier.accentColor }} />
                </div>
                <h3 className="text-3xl font-bold text-[#F3F5F7] mb-3 group-hover:text-white transition-colors duration-300">
                  {tier.name}
                </h3>
                <p className="text-[#C7CBD1] mb-6 flex-grow">
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[#C7CBD1]">
                      <CheckCircle className="w-5 h-5 text-[#36FFB5] mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button
                    asChild
                    size="lg"
                    className="w-full font-semibold px-6 py-6 text-base rounded-lg transition-all duration-300 bg-gradient-to-r from-[#36FFB5] to-[#13C296] hover:from-[#13C296] hover:to-[#36FFB5] text-[#0A0A0A] shadow-lg shadow-[#13C296]/20 hover:shadow-[#13C296]/40"
                  >
                    <Link to={tier.buttonLink}>
                      {tier.buttonText}
                    </Link>
                  </Button>
                </div>
              </div>
              <div
                className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at center, ${tier.accentColor} 0%, transparent 70%)` }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
