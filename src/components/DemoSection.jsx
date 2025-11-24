import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, title, children }) => (
    <section id={id} className="hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-[#F3F5F7]">{title}</h2>
        {children}
      </motion.div>
    </section>
  );

const DemoSection = () => {
    return (
        <>
            <SectionWrapper id="proofs" title="Recovery Proof" />
            <SectionWrapper id="whitepaper" title="Whitepaper" />
            <SectionWrapper id="compliance" title="Compliance Model" />
            <SectionWrapper id="sandbox" title="Sandbox" />
        </>
    );
};

export default DemoSection;