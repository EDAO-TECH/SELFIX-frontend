import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Heart } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Autonomic Healing Engine',
    description: 'Detect → Protect → Heal → Verify → Harden',
    details: 'Self-generating defense + BOF',
    color: '#13C296'
  },
  {
    icon: Lock,
    title: 'Trust & Safety Layer',
    description: 'Sealed Guardian, Liquid Trust, Tamper-proof ledgers',
    details: 'Regulator-grade compliance',
    color: '#36FFB5'
  },
  {
    icon: Heart,
    title: 'ProHealers™ Healthcare Layer',
    description: 'Safe clinical workflows, NDIS-ready',
    details: 'Guardian approvals, Evidence automation',
    color: '#13C296'
  }
];

const ThreePillarsSection = () => {
  return (
    <section className="relative py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F3F5F7] mb-4">
            Three Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36FFB5] to-[#13C296]">Healthcare Protection</span>
          </h2>
          <p className="text-xl text-[#C7CBD1] max-w-3xl mx-auto">
            Enterprise-grade autonomous systems designed specifically for healthcare reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342] to-[#0A0A0A] rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-2xl border border-[#13C296]/20 group-hover:border-[#13C296]/50 transition-all duration-300"></div>
              
              <div className="relative p-8 space-y-6">
                {/* Icon */}
                <div className="inline-flex p-4 rounded-xl bg-[#0A2342]/50 border border-[#13C296]/30 group-hover:border-[#13C296]/60 transition-all duration-300">
                  <pillar.icon className="w-8 h-8" style={{ color: pillar.color }} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#F3F5F7] group-hover:text-[#36FFB5] transition-colors duration-300">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-[#C7CBD1] leading-relaxed">
                  {pillar.description}
                </p>

                {/* Details */}
                <div className="pt-4 border-t border-[#13C296]/20">
                  <p className="text-sm text-[#36FFB5] font-semibold">
                    {pillar.details}
                  </p>
                </div>

                {/* Glow effect */}
                <div 
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle, ${pillar.color} 0%, transparent 70%)` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillarsSection;