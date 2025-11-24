
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Lock, Cloud, Heart, Code } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Sealed Trusted Logic',
    description: 'Trust‑sealed manifests for scripts, configurations and IaC, so only verified "known‑good" logic is ever restored after an incident or drift.',
    color: '#36FFB5'
  },
  {
    icon: FileText,
    title: 'Forensic Recovery Ledger',
    description: 'Append‑only, hash‑chained ledger that records every detection, repair action, approver and outcome, with cryptographic continuity for audit.',
    color: '#13C296'
  },
  {
    icon: Lock,
    title: 'Signed Proof‑of‑Recovery',
    description: 'Digitally signed JSON/PDF/XLSX artefacts that demonstrate exactly what was healed, when, and against which controls for external review.',
    color: '#36FFB5'
  },
  {
    icon: Cloud,
    title: 'Tombstone Redactions',
    description: 'Evidence that preserves chain‑of‑custody while redacting sensitive payloads, so investigators see the facts without exposing PHI or secrets.',
    color: '#13C296'
  },
  {
    icon: Heart,
    title: 'Air‑Gapped & Clinical‑Safe Operation',
    description: 'Offline‑capable edition with local ledger and exports, suitable for high‑assurance clinical and public‑sector environments where internet is constrained.',
    color: '#36FFB5'
  },
  {
    icon: Code,
    title: 'SIEM & Audit Load Reduction',
    description: 'Offloads remediation evidence into a focused ledger, reducing SIEM ingest noise and manual audit effort while improving traceability.',
    color: '#13C296'
  }
];

const WhyHealthcareSection = () => {
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
            Core capabilities for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36FFB5] to-[#13C296]">regulated environments</span>
          </h2>
          <p className="text-xl text-[#C7CBD1] max-w-3xl mx-auto">
            SELFIX ProHealers combines autonomous healing, policy enforcement and audit‑ready evidence in a single platform, aligned with ISO 27001, Essential Eight and health‑sector obligations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative bg-[#0A2342]/50 border border-[#13C296]/20 rounded-xl p-8 shadow-lg group hover:border-[#13C296]/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center p-4 rounded-full bg-[#0A0A0A] border-2 border-[#13C296]/30 mb-6 group-hover:border-[#36FFB5] transition-all duration-300">
                <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
              </div>
              <h3 className="text-2xl font-bold text-[#F3F5F7] mb-3 group-hover:text-[#36FFB5] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#C7CBD1] leading-relaxed">
                {feature.description}
              </p>
              <div 
                className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at center, ${feature.color} 0%, transparent 70%)` }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHealthcareSection;
