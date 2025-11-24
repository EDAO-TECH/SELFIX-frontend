import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, BookOpen, Download, CheckSquare, Square, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Breadcrumb from '@/components/Breadcrumb';
import { useCertification } from '@/context/CertificationContext';
import { useAuth } from '@/context/AuthContext';

const Level1Page = () => {
  const { certificationState, updateModuleStatus } = useCertification();
  const { progress, modules } = certificationState.level1;
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
        <title>Level 1 Certification | Selfix Academy</title>
        <meta name="description" content="Level 1 Selfix Certified - Foundational training for safe AI usage." />
      </Helmet>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Breadcrumb items={[
            { label: 'Academy', path: '/academy' },
            { label: 'Level 1', path: null }
          ]} />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mt-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium">
              <BookOpen size={16} />
              <span>Foundational Certification</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Level 1 — Selfix Certified
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Master the essentials of safe, compliant AI usage in daily healthcare operations.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        
        {/* Progress Section */}
        <Card className="border-blue-100 shadow-lg">
          <CardHeader className="bg-blue-50/50 border-b border-blue-100">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl text-blue-900">Certification Progress</CardTitle>
                <CardDescription>
                  {user ? "Complete all modules to unlock the final exam." : "Sign in to track your progress."}
                </CardDescription>
              </div>
              <div className="text-2xl font-bold text-blue-600">{progress}%</div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {authLoading ? (
              <div className="flex justify-center py-8"><Loader2 className="animate-spin text-blue-600" /></div>
            ) : !user ? (
              <div className="text-center py-8 space-y-4">
                <p className="text-slate-600">Please sign in to access course modules and track your certification progress.</p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link to="/contact">Sign In / Register</Link></Button>
              </div>
            ) : (
              <>
                <Progress value={progress} className="h-3" indicatorColor="bg-blue-600" />
                <div className="mt-8 grid gap-4">
                  <h3 className="font-semibold text-slate-900">Course Modules</h3>
                  {modules.length === 0 ? (
                    <p className="text-slate-500 italic">Loading modules...</p>
                  ) : (
                    modules.map((module) => (
                      <div 
                        key={module.id} 
                        className="flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer group"
                        onClick={() => updateModuleStatus('level1', module.id)}
                      >
                        <div className="flex items-center gap-3">
                          {module.completed ? (
                            <CheckSquare className="text-blue-600 h-5 w-5" />
                          ) : (
                            <Square className="text-slate-300 h-5 w-5 group-hover:text-blue-400" />
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
              {progress === 100 ? "Ready for Exam" : `${modules.filter(m => !m.completed).length} modules remaining`}
            </div>
            {progress === 100 && (
              <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
                <Download size={16} /> Download Certificate
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Understanding AI Safety Protocols & Guidelines",
              "Data Privacy, Encryption & Patient Consent",
              "Identifying & Reporting System Anomalies",
              "Daily Operational Compliance Workflows"
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0">
                  <CheckCircle size={20} />
                </div>
                <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next Level CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to advance your career?</h2>
            <p className="text-slate-300 max-w-xl mx-auto">
              Once you've mastered the basics, take the next step into governance and leadership with Level 2 Accreditation.
            </p>
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-blue-50 hover:text-blue-700 border-none">
              <Link to="/certification/level2">
                Go to Level 2 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Level1Page;