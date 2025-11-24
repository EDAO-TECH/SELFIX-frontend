import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Headphones, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

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

const ContactPage = () => {
    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "✅ Message Sent!",
            description: "Thank you for reaching out. Our team will get back to you shortly.",
        });
        e.target.reset();
    };

  return (
    <>
      <Helmet>
        <title>Contact Us | SELFIX</title>
        <meta name="description" content="Get in touch with the Selfix team for sales, support, or general inquiries." />
      </Helmet>
      <PageHero
        title="Contact Us"
        subtitle="Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input type="text" id="name" required className="mt-1 block w-full px-4 py-2 rounded-md bg-slate-100 border text-slate-800 focus:ring-2 focus:ring-ring outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" id="email" required className="mt-1 block w-full px-4 py-2 rounded-md bg-slate-100 border text-slate-800 focus:ring-2 focus:ring-ring outline-none" />
                </div>
                 <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-slate-700">Inquiry Type</label>
                  <select id="inquiry" required className="mt-1 block w-full px-4 py-2 rounded-md bg-slate-100 border text-slate-800 focus:ring-2 focus:ring-ring outline-none">
                      <option>Sales</option>
                      <option>Support</option>
                      <option>General</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea id="message" rows="4" required className="mt-1 block w-full px-4 py-2 rounded-md bg-slate-100 border text-slate-800 focus:ring-2 focus:ring-ring outline-none"></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">Send Message</Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                <h2 className="text-3xl font-bold text-foreground mb-6">Direct Contacts</h2>
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <DollarSign className="w-8 h-8 text-primary flex-shrink-0"/>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Sales</h3>
                            <p className="text-slate-600">For pricing, demos, and partnerships.</p>
                            <a href="mailto:sales@selfix.pro" className="text-primary hover:text-primary/90">sales@selfix.pro</a>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <Headphones className="w-8 h-8 text-primary flex-shrink-0"/>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Support</h3>
                            <p className="text-slate-600">For technical assistance and customer support.</p>
                            <a href="mailto:support@selfix.pro" className="text-primary hover:text-primary/90">support@selfix.pro</a>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <Users className="w-8 h-8 text-primary flex-shrink-0"/>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">General Inquiries</h3>
                            <p className="text-slate-600">For all other questions.</p>
                            <a href="mailto:contact@selfix.pro" className="text-primary hover:text-primary/90">contact@selfix.pro</a>
                        </div>
                    </div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;