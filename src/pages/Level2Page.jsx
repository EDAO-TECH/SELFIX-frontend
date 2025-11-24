import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Shield, Download, CheckSquare, Square, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Breadcrumb from '@/components/Breadcrumb';
import { useCertification } from '@/context/CertificationContext';
import { useAuth } from '@/context/AuthContext';

const Level2Page = () => {
  const { certificationState, updateModuleStatus } = useCertification();
  const { progress, modules } = certificationState.level2;
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
        <title>Level 2 Accreditation | Selfix Academy</title>
        <meta name="description" content="Level 2 Governance Accredited - Advanced training for clinical directors." />
      </Helmet>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Breadcrumb items={[
            { label: 'Academy', path: '/academy' },
            { label: 'Level 1', path: '/certification/level1' },
            { label: 'Level 2', path: null }
          ]} />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mt-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium">
              <Shield size={16} />
              <span>Advanced Accreditation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Level 2 — Governance Accredited
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl leading-relaxed">
              Advanced training for clinical directors and compliance officers overseeing AI implementation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        
        {/* Progress Section */}
        <Card className="border-purple-100 shadow-lg">
          <CardHeader className="bg-purple-50/50 border-b border-purple-100">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl text-purple-900">Accreditation Progress</CardTitle>
                <CardDescription>
                  {user ? "Complete all modules to unlock the final assessment." : "Sign in to track your progress."}
                </CardDescription>
              </div>
              <div className="text-2xl font-bold text-purple-600">{progress}%</div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {authLoading ? (
              <div className="flex justify-center py-8"><Loader2 className="animate-spin text-purple-600" /></div>
            ) : !user ? (
              <div className="text-center py-8 space-y-4">
                <p className="text-slate-600">Please sign in to access course modules and track your certification progress.</p>
                <Button asChild className="bg-purple-600 hover:bg-purple-700"><Link to="/contact">Sign In / Register</Link></Button>
              </div>
            ) : (
              <>
                <Progress value={progress} className="h-3" indicatorColor="bg-purple-600" />
                <div className="mt-8 grid gap-4">
                  <h3 className="font-semibold text-slate-900">Governance Modules</h3>
                  {modules.length === 0 ? (
                    <p className="text-slate-500 italic">Loading modules...</p>
                  ) : (
                    modules.map((module) => (
                      <div 
                        key={module.id} 
                        className="flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all cursor-pointer group"
                        onClick={() => updateModuleStatus('level2', module.id)}
                      >
                        <div className="flex items-center gap-3">
                          {module.completed ? (
                            <CheckSquare className="text-purple-600 h-5 w-5" />
                          ) : (
                            <Square className="text-slate-300 h-5 w-5 group-hover:text-purple-400" />
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
              {progress === 100 ? "Ready for Assessment" : `${modules.filter(m => !m.completed).length} modules remaining`}
            </div>
            {progress === 100 && (
              <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
                <Download size={16} /> Download Accreditation
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Governance Mastery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Developing Comprehensive AI Governance Frameworks",
              "Risk Assessment & Mitigation Strategies",
              "Audit Trails & Accountability Management",
              "Regulatory Alignment (GDPR, HIPAA, Local Laws)"
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600 shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next Level CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Aim for the top.</h2>
            <p className="text-slate-300 max-w-xl mx-auto">
              Become an industry authority. Level 3 is designed for executives shaping the future of healthcare AI.
            </p>
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-purple-50 hover:text-purple-700 border-none">
              <Link to="/certification/level3">
                Go to Level 3 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Level2Page;