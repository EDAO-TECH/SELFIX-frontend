
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EvidenceSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

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
            Evidence that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36FFB5] to-[#13C296]">stands up in audit</span>
          </h2>
          <p className="text-xl text-[#C7CBD1] max-w-3xl mx-auto">
            SELFIX provides immutable, cryptographically verifiable proof of every recovery action.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card: Sample Proof-of-Recovery Report */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative bg-[#0A2342]/50 border border-[#13C296]/20 rounded-xl p-8 shadow-lg group hover:border-[#13C296]/50 transition-all duration-300"
          >
            <div className="flex items-center justify-center p-4 rounded-full bg-[#0A0A0A] border-2 border-[#13C296]/30 mb-6 group-hover:border-[#36FFB5] transition-all duration-300">
              <FileText className="w-8 h-8 text-[#36FFB5]" />
            </div>
            <h3 className="text-2xl font-bold text-[#F3F5F7] mb-3 group-hover:text-[#36FFB5] transition-colors duration-300">
              Sample Proof‑of‑Recovery Report
            </h3>
            <p className="text-[#C7CBD1] leading-relaxed">
              Signed PDF showing remediation timeline, approvers, hash references and PHI‑safe redactions – the exact format your auditors and insurers expect.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline" className="border-[#36FFB5] text-[#36FFB5] hover:bg-[#36FFB5]/10">
                <Link to="/contact">View Sample</Link>
              </Button>
            </div>
            <div
              className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"
              style={{ background: `radial-gradient(circle at center, #36FFB5 0%, transparent 70%)` }}
            ></div>
          </motion.div>

          {/* Right Card: "Rollback ≠ Forgiveness" explainer */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className="relative bg-[#0A2342]/50 border border-[#13C296]/20 rounded-xl p-8 shadow-lg group hover:border-[#13C296]/50 transition-all duration-300"
          >
            <div className="flex items-center justify-center p-4 rounded-full bg-[#0A0A0A] border-2 border-[#13C296]/30 mb-6 group-hover:border-[#36FFB5] transition-all duration-300">
              <ClipboardList className="w-8 h-8 text-[#13C296]" />
            </div>
            <h3 className="text-2xl font-bold text-[#F3F5F7] mb-3 group-hover:text-[#13C296] transition-colors duration-300">
              "Rollback ≠ Forgiveness" explainer
            </h3>
            <p className="text-[#C7CBD1] leading-relaxed">
              Short walkthrough of why traditional rollback is not enough, and how Sealed Memory plus a forensic forgiveness ledger changes the assurance model.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline" className="border-[#13C296] text-[#13C296] hover:bg-[#13C296]/10">
                <Link to="/blog">Read Article</Link>
              </Button>
            </div>
            <div
              className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"
              style={{ background: `radial-gradient(circle at center, #13C296 0%, transparent 70%)` }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceSection;
