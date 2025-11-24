import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Newspaper, Mic, Award } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PageHero = ({ title, subtitle }) => (
  <section className="bg-[#F8F9FA] py-20 md:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A]"
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

const NewsPage = () => {
    const { toast } = useToast();
    
    const handleReadMore = () => {
        toast({
            title: "🚧 Feature Coming Soon",
            description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    }

    const newsItems = [
        {
            icon: Newspaper,
            title: 'Selfix Announces Partnership with National Hospital Group',
            date: '2025-11-10',
            source: 'HealthTech Today',
            excerpt: 'Selfix Technologies will deploy its autonomous reliability platform across 50 hospitals, aiming to eliminate critical system downtime.'
        },
        {
            icon: Award,
            title: 'Dr. Evelyn Reed Awarded "Innovator of the Year" for AI Safety Work',
            date: '2025-10-15',
            source: 'Global Tech Awards',
            excerpt: 'The award recognizes Dr. Reed\'s pioneering contributions to AI safety with the development of the SHX-Gov framework.'
        },
        {
            icon: Mic,
            title: 'Marcus Thorne to Speak at World Health Summit on Cyber Defense',
            date: '2025-09-20',
            source: 'Event Announcement',
            excerpt: 'Selfix CTO Marcus Thorne will present on "Self-Generating Defense: The Future of Healthcare Cybersecurity".'
        }
    ];

  return (
    <>
      <Helmet>
        <title>News & Press | SELFIX</title>
        <meta name="description" content="The latest news, press releases, and announcements from Selfix Technologies." />
      </Helmet>
      <PageHero
        title="SELFIX in the News"
        subtitle="Catch up on the latest announcements, press coverage, and awards as we continue our mission to revolutionize healthcare."
      />
      
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
                {newsItems.map((item, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start p-6 bg-white rounded-lg border border-[#C7CBD1] shadow-sm"
                    >
                        <div className="md:col-span-1 flex flex-col items-center text-center">
                            <item.icon className="w-12 h-12 text-[#13C296]"/>
                             <p className="mt-4 text-sm text-slate-600">{item.date}</p>
                             <p className="text-xs text-slate-500">{item.source}</p>
                        </div>
                        <div className="md:col-span-3">
                             <h3 className="text-xl font-bold text-[#2D3748]">{item.title}</h3>
                             <p className="mt-2 text-slate-600">{item.excerpt}</p>
                             <Button variant="link" className="px-0 text-[#13C296] hover:text-[#10a37f]" onClick={handleReadMore}>Read More</Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;