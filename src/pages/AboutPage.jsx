import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Users, FileText } from 'lucide-react';
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

const AboutPage = () => {
  const leadership = [
    { name: 'Dr. Evelyn Reed', title: 'Founder & CEO', img: 'Woman with dark hair and glasses in a lab coat' },
    { name: 'Marcus Thorne', title: 'Chief Technology Officer', img: 'Man with short brown hair in a dark sweater' },
    { name: 'Lena Petrova', title: 'Head of Clinical Safety', img: 'Woman with blonde hair wearing a blue blazer' },
  ];
  
  const timeline = [
    { year: '2020', event: 'Selfix Founded' },
    { year: '2022', event: 'First Patent for Healing Engine' },
    { year: '2024', event: 'SHX-Gov Framework Deployed' },
    { year: '2025', event: 'ProHealers™ Clinical AI Launch' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | SELFIX</title>
        <meta name="description" content="Learn about Selfix's mission to build a resilient, autonomous future for healthcare, our team, and our philosophy." />
      </Helmet>
      <PageHero
        title="Building the Future of Healthcare Reliability"
        subtitle="We are a collective of engineers, security experts, and clinicians on a mission to eliminate system failure and make healthcare technology fundamentally safe and reliable."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                  <div className="flex gap-4">
                      <Target className="w-12 h-12 text-primary flex-shrink-0"/>
                      <div><h2 className="text-2xl font-bold text-slate-800">Our Mission</h2><p className="text-slate-600 mt-2">To create a world where healthcare technology is 100% reliable, secure, and operates with verifiable trust.</p></div>
                  </div>
                   <div className="flex gap-4">
                      <Eye className="w-12 h-12 text-primary flex-shrink-0"/>
                      <div><h2 className="text-2xl font-bold text-slate-800">Our Vision</h2><p className="text-slate-600 mt-2">An autonomous, self-healing infrastructure that serves as the central nervous system for all of healthcare.</p></div>
                  </div>
              </div>
               <div className="p-8 bg-slate-50 rounded-xl border">
                    <h3 className="text-2xl font-bold text-slate-800">The Selfix Philosophy</h3>
                    <p className="mt-4 text-slate-600 italic">"We believe that the most complex problems demand the most elegant, simple solutions. True reliability isn't about adding more layers of complexity; it's about building an intelligent foundation that manages complexity on its own. Autonomy is not a feature, it's the future."</p>
                    <p className="mt-4 font-semibold text-foreground">- Dr. Evelyn Reed, Founder</p>
                </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Leadership</h2>
          <p className="mt-4 text-lg text-slate-600 mb-12">Meet the minds behind the mission.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {leadership.map((person, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <img class="w-32 h-32 rounded-full mx-auto" alt={person.name} src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                <h4 className="mt-4 text-xl font-bold text-foreground">{person.name}</h4>
                <p className="text-primary font-semibold">{person.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-foreground">A Legacy of Innovation</h2>
                      <p className="mt-4 text-lg text-slate-600">Our work is protected by a growing portfolio of patents in autonomous systems, AI safety, and forensic data structures. We are not just building a product; we are inventing a new category of technology.</p>
                  </div>
                   <div className="p-8 bg-slate-50 rounded-xl border space-y-4">
                       <div className="flex items-center gap-4"><FileText className="w-6 h-6 text-slate-500"/><p className="text-slate-800">Patent: Autonomous System Healing (2022)</p></div>
                       <div className="flex items-center gap-4"><FileText className="w-6 h-6 text-slate-500"/><p className="text-slate-800">Patent: AI Governance Framework (2023)</p></div>
                       <div className="flex items-center gap-4"><FileText className="w-6 h-6 text-slate-500"/><p className="text-slate-800">Patent: LiquidTrust Scoring Model (2024)</p></div>
                   </div>
              </div>
          </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Journey</h2>
            <div className="relative">
                <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-border hidden md:block"></div>
                {timeline.map((item, index) => (
                    <div key={item.year} className="relative mb-12 md:mb-20">
                        <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:gap-8`}>
                            <div className="hidden md:block w-1/2"></div>
                            <div className="w-full md:w-1/2">
                               <div className="p-4 bg-white rounded-lg border relative shadow-sm">
                                    <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full hidden md:block" style={index % 2 === 0 ? {right: '-2rem'} : {left: '-2rem'}}></div>
                                    <p className="text-lg font-bold text-slate-800">{item.year}: {item.event}</p>
                               </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Users className="w-12 h-12 text-primary mx-auto mb-4"/>
              <h2 className="text-3xl font-bold text-foreground">Join Our Mission</h2>
              <p className="mt-4 text-lg text-slate-600">We are always looking for passionate, brilliant minds to help us solve some of the toughest challenges in technology and healthcare. If you believe in our mission, we want to hear from you.</p>
               <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/contact">Contact Sales</Link>
               </Button>
          </div>
      </section>
    </>
  );
};

export default AboutPage;