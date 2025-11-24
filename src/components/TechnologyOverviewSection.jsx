import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Stethoscope, ArrowDown } from 'lucide-react';

const layers = [
  {
    number: '01',
    icon: Cpu,
    title: 'SELFIX-PRO Engine',
    subtitle: 'Core Infrastructure',
    features: [
      'Self-Healing Automation',
      'Self-Generating Defense',
      'Forensic Ledger System',
      'Real-time Threat Detection'
    ],
    color: '#13C296'
  },
  {
    number: '02',
    icon: Shield,
    title: 'A.I. Guardian',
    subtitle: 'Safety & Governance Layer',
    features: [
      'BOF + SLX Licensing',
      'Sealed Policy Enforcement',
      'Trusted Action Verification',
      'Restricted AI Behavior'
    ],
    color: '#36FFB5'
  },
  {
    number: '03',
    icon: Stethoscope,
    title: 'ProHealers Applications',
    subtitle: 'Healthcare Workflows',
    features: [
      'Clinical Automation',
      'NDIS Workflows',
      'Carers/Guardians Portal',
      'Evidence Documentation'
    ],
    color: '#13C296'
  }
];

const TechnologyOverviewSection = () => {
  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#13C296] rounded-full filter blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#36FFB5] rounded-full filter blur-[128px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F3F5F7] mb-4">
            Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36FFB5] to-[#13C296]">Architecture</span>
          </h2>
          <p className="text-xl text-[#C7CBD1] max-w-3xl mx-auto">
            Three-layer intelligent system designed for healthcare resilience and compliance
          </p>
        </motion.div>

        <div className="space-y-8">
          {layers.map((layer, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative bg-[#0A2342]/30 rounded-2xl border border-[#13C296]/20 p-8 backdrop-blur-sm hover:border-[#13C296]/50 transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Layer Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="text-6xl font-bold text-[#13C296]/10 group-hover:text-[#13C296]/20 transition-colors duration-300">
                          {layer.number}
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="p-4 rounded-xl bg-[#0A2342] border-2 border-[#13C296]/30 group-hover:border-[#13C296]/60 transition-all duration-300">
                            <layer.icon className="w-10 h-10" style={{ color: layer.color }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-[#36FFB5] mb-2">
                          {layer.subtitle}
                        </div>
                        <h3 className="text-3xl font-bold text-[#F3F5F7] group-hover:text-[#36FFB5] transition-colors duration-300">
                          {layer.title}
                        </h3>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                        {layer.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-3 p-3 rounded-lg bg-[#0A0A0A]/50 border border-[#13C296]/10 group-hover:border-[#13C296]/30 transition-all duration-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#36FFB5] flex-shrink-0"></div>
                            <span className="text-sm text-[#C7CBD1]">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div 
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at center, ${layer.color} 0%, transparent 70%)` }}
                  ></div>
                </div>
              </motion.div>

              {/* Arrow connector */}
              {index < layers.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  className="flex justify-center"
                >
                  <div className="p-3 rounded-full bg-[#0A2342]/50 border border-[#13C296]/30">
                    <ArrowDown className="w-6 h-6 text-[#36FFB5] animate-bounce" />
                  </div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyOverviewSection;