
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342] via-[#0A0A0A] to-[#0A2342]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#13C296] rounded-full filter blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#36FFB5] rounded-full filter blur-[128px] animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Shield Logo Visual */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <Shield className="w-[600px] h-[600px] text-[#13C296]" strokeWidth={0.5} />
          <Activity className="w-64 h-64 text-[#36FFB5] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" strokeWidth={1} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Logo Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0A2342]/80 border border-[#13C296]/30 backdrop-blur-sm"
          >
            <Shield className="w-6 h-6 text-[#36FFB5]" />
            <span className="text-[#36FFB5] font-semibold tracking-wider">SELFIX-PRO HealthOps</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#F3F5F7] leading-tight"
          >
            SELFIX ProHealers™ — <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36FFB5] to-[#13C296]">
              Autonomous Recovery with Proof
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-[#C7CBD1] max-w-3xl mx-auto"
          >
            AI‑governed, self‑healing infrastructure that seals trusted logic, detects drift, restores services, and issues cryptographically signed proof‑of‑recovery for auditors and regulators.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-[#C7CBD1] max-w-2xl mx-auto italic"
          >
            Built for hospitals, NDIS providers and regulated enterprises that must prove resilience, not just claim it.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#36FFB5] to-[#13C296] hover:from-[#13C296] hover:to-[#36FFB5] text-[#0A0A0A] font-semibold px-8 py-6 text-lg rounded-lg shadow-lg shadow-[#13C296]/20 transition-all duration-300 hover:shadow-[#13C296]/40 hover:scale-105"
            >
              <Link to="/contact">Book Demo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#13C296] text-[#13C296] hover:bg-[#13C296]/10 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Link to="/technology">Explore Technology</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-8 pt-12 text-[#C7CBD1] text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#36FFB5] animate-pulse"></div>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#36FFB5] animate-pulse"></div>
              <span>NDIS Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#36FFB5] animate-pulse"></div>
              <span>ISO 27001 Certified</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#13C296]/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#36FFB5] rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
