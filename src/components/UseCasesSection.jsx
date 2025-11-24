import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, HeartPulse, Users, FileText, Cloud } from 'lucide-react';

const useCases = [
  {
    icon: Building2,
    title: 'Hospitals',
    description: 'Zero downtime for EMR systems.',
    gradient: 'from-[#13C296] to-[#36FFB5]'
  },
  {
    icon: Stethoscope,
    title: 'Clinics',
    description: 'Self-healing critical care devices.',
    gradient: 'from-[#36FFB5] to-[#13C296]'
  },
  {
    icon: HeartPulse,
    title: 'Aged Care',
    description: 'NDIS-compliant note automation.',
    gradient: 'from-[#13C296] to-[#36FFB5]'
  },
  {
    icon: Users,
    title: 'Disability (NDIS)',
    description: 'Guardian-safe AI interactions.',
    gradient: 'from-[#36FFB5] to-[#13C296]'
  },
  {
    icon: FileText,
    title: 'Insurers',
    description: 'Forensic evidence automation.',
    gradient: 'from-[#13C296] to-[#36FFB5]'
  },
  {
    icon: Cloud,
    title: 'Health SaaS Vendors',
    description: 'Trustware compliance layer.',
    gradient: 'from-[#36FFB5] to-[#13C296]'
  }
];

const UseCasesSection = () => {
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
            Trusted Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36FFB5] to-[#13C296]">Healthcare Sectors</span>
          </h2>
          <p className="text-xl text-[#C7CBD1] max-w-3xl mx-auto">
            Purpose-built solutions for every healthcare environment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="relative group cursor-pointer"
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342] to-[#0A0A0A] rounded-xl"></div>
              <div className="absolute inset-0 rounded-xl border border-[#13C296]/20 group-hover:border-[#13C296]/50 transition-all duration-300"></div>
              
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative p-8 space-y-4">
                {/* Icon */}
                <div className="inline-flex p-4 rounded-xl bg-[#0A2342]/80 border border-[#13C296]/30 group-hover:border-[#13C296]/60 transition-all duration-300 group-hover:scale-110">
                  <useCase.icon className="w-8 h-8 text-[#36FFB5]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#F3F5F7] group-hover:text-[#36FFB5] transition-colors duration-300">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-[#C7CBD1] leading-relaxed">
                  {useCase.description}
                </p>

                {/* Decorative line */}
                <div className="pt-4">
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${useCase.gradient} rounded-full transition-all duration-500`}></div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#13C296]/0 via-[#13C296]/20 to-[#13C296]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;