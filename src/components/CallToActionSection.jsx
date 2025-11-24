import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Download, FileCheck, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {

  const ctaButtons = [
    {
      icon: Calendar,
      label: 'Book Demo',
      variant: 'primary',
      href: '/contact'
    },
    {
      icon: Download,
      label: 'Download Whitepaper',
      variant: 'secondary',
      href: '/technology#whitepaper'
    },
    {
      icon: FileCheck,
      label: 'View Compliance Model',
      variant: 'secondary',
      href: '/compliance'
    },
    {
      icon: PlayCircle,
      label: 'Try Sandbox',
      variant: 'secondary',
      href: '/api#sandbox'
    }
  ];

  return (
    <section id="demo" className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342] via-[#0A0A0A] to-[#0A0A0A]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#13C296] rounded-full filter blur-[200px] opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A2342]/80 border border-[#13C296]/30 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#36FFB5] animate-pulse"></div>
              <span className="text-[#36FFB5] font-semibold">Ready to Transform Your Healthcare Systems?</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F3F5F7]">
              Experience the Future of<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36FFB5] to-[#13C296]">
                Healthcare Reliability
              </span>
            </h2>

            <p className="text-xl text-[#C7CBD1] max-w-3xl mx-auto">
              Join leading healthcare organizations in achieving zero downtime, complete compliance, and AI-safe operations
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8"
          >
            {ctaButtons.map((button, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Button
                    asChild
                    size="lg"
                    variant={button.variant === 'primary' ? 'default' : 'outline'}
                    className={`w-full font-semibold px-6 py-6 text-base rounded-lg transition-all duration-300
                      ${button.variant === 'primary' 
                        ? 'bg-gradient-to-r from-[#36FFB5] to-[#13C296] hover:from-[#13C296] hover:to-[#36FFB5] text-[#0A0A0A] shadow-lg shadow-[#13C296]/20 hover:shadow-[#13C296]/40' 
                        : 'border-2 border-[#13C296]/50 text-[#F3F5F7] hover:bg-[#13C296]/10 hover:border-[#13C296]'
                      }`
                    }
                  >
                    <Link to={button.href}>
                        <button.icon className="w-5 h-5 mr-2" />
                        {button.label}
                    </Link>
                  </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 pt-12 text-[#C7CBD1] text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#36FFB5]"></div>
              <span>Enterprise-Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#36FFB5]"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#36FFB5]"></div>
              <span>Rapid Deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#36FFB5]"></div>
              <span>Full Compliance</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;