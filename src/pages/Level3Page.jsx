import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Star, Award, Download, CheckSquare, Square, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Breadcrumb from '@/components/Breadcrumb';
import { useCertification } from '@/context/CertificationContext';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';

const Level3Page = () => {
  const { certificationState, updateModuleStatus } = useCertification();
  const { progress, modules } = certificationState.level3;
  const { user, loading: authLoading } = useAuth();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      <Helmet>
        <title>Level 3 Strategic Authority | Selfix Academy</title>
        <meta name="description" content="Level 3 Strategic Authority - Executive leadership certification for AI." />
      </Helmet>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Breadcrumb items={[
            { label: 'Academy', path: '/academy' },
            { label: 'Level 1', path: '/certification/level1' },
            { label: 'Level 2', path: '/certification/level2' },
            { label: 'Level 3', path: null }
          ]} />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mt-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-sm font-medium">
              <Award size={16} />
              <span>Executive Leadership</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Level 3 — Strategic Authority
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl leading-relaxed">
              Executive leadership certification for shaping the future of AI in healthcare networks and setting industry standards.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        
        {/* Progress Section */}
        <Card className="border-amber-100 shadow-lg">
          <CardHeader className="bg-amber-50/50 border-b border-amber-100">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl text-amber-900">Executive Training Progress</CardTitle>
                <CardDescription>
                  {user ? "Complete all strategic modules for certification." : "Sign in to track your progress."}
                </CardDescription>
              </div>
              <div className="text-2xl font-bold text-amber-600">{progress}%</div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {authLoading ? (
              <div className="flex justify-center py-8"><Loader2 className="animate-spin text-amber-600" /></div>
            ) : !user ? (
              <div className="text-center py-8 space-y-4">
                <p className="text-slate-600">Please sign in to access course modules and track your certification progress.</p>
                <Button asChild className="bg-amber-600 hover:bg-amber-700"><Link to="/contact">Sign In / Register</Link></Button>
              </div>
            ) : (
              <>
                <Progress value={progress} className="h-3" indicatorColor="bg-amber-600" />
                <div className="mt-8 grid gap-4">
                  <h3 className="font-semibold text-slate-900">Strategic Modules</h3>
                  {modules.length === 0 ? (
                    <p className="text-slate-500 italic">Loading modules...</p>
                  ) : (
                    modules.map((module) => (
                      <div 
                        key={module.id} 
                        className="flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all cursor-pointer group"
                        onClick={() => updateModuleStatus('level3', module.id)}
                      >
                        <div className="flex items-center gap-3">
                          {module.completed ? (
                            <CheckSquare className="text-amber-600 h-5 w-5" />
                          ) : (
                            <Square className="text-slate-300 h-5 w-5 group-hover:text-amber-400" />
                          )}
                          <span className={`font-medium ${module.completed ? 'text-slate-900' : 'text-slate-600'}`}>
                            {module.title}
                          </span>
                        </div>
                        <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 text-slate-500">
                          {module.completed ? 'Completed' : 'Pending'}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </>
            )}
          </CardContent>
          <CardFooter className="bg-slate-50/50 border-t border-slate-100 p-6 flex justify-between items-center">
            <div className="text-sm text-slate-500">
              {progress === 100 ? "Ready for Board Review" : `${modules.filter(m => !m.completed).length} modules remaining`}
            </div>
            {progress === 100 && (
              <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
                <Download size={16} /> Download Executive Certificate
              </Button>
            )}
          </CardFooter>
        </Card>

        {/* Learning Outcomes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Strategic Leadership Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Enterprise AI Strategy & Roadmap Development",
              "Ethical AI Leadership & Organizational Culture",
              "Industry Standards & Policy Advocacy",
              "Crisis Management & Reputation Protection"
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600 shrink-0">
                  <Star size={20} fill="currentColor" />
                </div>
                <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Level3Page;