import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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

const BlogPage = () => {
    const { toast } = useToast();

    const handleReadMore = () => {
         toast({
            title: "🚧 Feature Coming Soon",
            description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    }

    const posts = [
        {
            title: 'The Road to Autonomous Healing in Healthcare IT',
            category: 'Technology',
            author: 'Marcus Thorne',
            date: '2025-11-15',
            img: 'Abstract technology background with glowing blue lines',
            excerpt: 'Exploring the core concepts behind the Selfix Healing Engine and why autonomous systems are the future of reliability.'
        },
        {
            title: 'Why AI Safety Cannot Be an Afterthought',
            category: 'Safety',
            author: 'Lena Petrova',
            date: '2025-11-05',
            img: 'Shield icon integrated into a digital circuit board',
            excerpt: 'A deep dive into the SHX-Gov framework and the critical importance of building AI with safety at its core, not as a feature.'
        },
        {
            title: 'LiquidTrust™ vs. Zero Trust: A New Paradigm',
            category: 'Security',
            author: 'Dr. Evelyn Reed',
            date: '2025-10-28',
            img: 'Dynamic network of interconnected nodes with varying trust levels',
            excerpt: 'How our dynamic, context-aware LiquidTrust model goes beyond traditional zero-trust architectures to provide superior security.'
        }
    ];

  return (
    <>
      <Helmet>
        <title>Blog | SELFIX</title>
        <meta name="description" content="Read the latest insights on autonomous AI, healthcare technology, security, and safety from the Selfix team." />
      </Helmet>
      <PageHero
        title="From the SELFIX Team"
        subtitle="Insights, ideas, and deep dives into the technology and philosophy driving the future of healthcare reliability."
      />
      
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white rounded-lg overflow-hidden flex flex-col border border-[#C7CBD1] hover:border-[#13C296]/50 shadow-sm"
                    >
                        <img class="w-full h-48 object-cover" alt={post.title} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                        <div className="p-6 flex flex-col flex-grow">
                             <p className="text-sm text-[#13C296] font-semibold">{post.category}</p>
                             <h3 className="mt-2 text-xl font-bold text-[#2D3748] flex-grow">{post.title}</h3>
                             <p className="mt-2 text-slate-600 text-sm">{post.excerpt}</p>
                             <div className="mt-4 pt-4 border-t border-[#C7CBD1] flex items-center justify-between">
                                 <div>
                                     <p className="text-sm font-medium text-[#2D3748]">{post.author}</p>
                                     <p className="text-xs text-slate-500">{post.date}</p>
                                 </div>
                                 <Button variant="ghost" onClick={handleReadMore} className="text-[#13C296] hover:text-[#10a37f]">Read More</Button>
                             </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;