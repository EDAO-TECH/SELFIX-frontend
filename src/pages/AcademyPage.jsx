import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { CheckCircle, BookOpen, Award, Shield, Users, Building2, Landmark, Stethoscope } from 'lucide-react';

const AcademyPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      <Helmet>
        <title>Governance Academy | SELFIX</title>
        <meta name="description" content="Selfix Governance Academy: Where Safe AI Becomes Standard Practice. Certification for healthcare AI safety and compliance." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium">
            <Award size={16} />
            <span>Official Certification Body</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Selfix Governance <span className="text-blue-400">Academy</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-slate-200">
            Where Safe AI Becomes Standard Practice
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            The Selfix Governance Academy is the industry's first dedicated certification body for autonomous AI in healthcare. We equip providers, clinics, and health networks with the frameworks to deploy AI safely, ethically, and in full compliance with regulatory standards.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-900/20">
              <a href="#certification-levels">Start Your Certification Pathway</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Governance Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Governance Matters</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            AI is transforming healthcare, but safety cannot be an afterthought. Governance is the bridge between innovation and trust. It ensures that every automated decision is traceable, every data point is secure, and every clinical outcome is validated against the highest standards of care. Without governance, there is no safety.
          </p>
        </div>
      </section>

      {/* Certification Levels */}
      <section id="certification-levels" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Certification Pathways</h2>
            <p className="text-slate-600 mt-4">Select the level that matches your role and organizational needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Level 1 */}
            <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <BookOpen size={24} />
                </div>
                <div className="text-sm font-bold text-blue-600 uppercase tracking-wider">Level 1</div>
                <CardTitle className="text-2xl mt-2">Selfix Certified</CardTitle>
                <CardDescription className="text-base mt-2">
                  For individual practitioners, support staff, and daily users of the platform.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-slate-900">Learning Outcomes:</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> Safe usage protocols</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> Data privacy fundamentals</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> Incident reporting</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-4 border-t bg-slate-50/50">
                <Button asChild className="w-full" variant="outline">
                  <Link to="/certification/level1">View Level 1 Details</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Level 2 */}
            <Card className="border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col relative overflow-hidden transform md:-translate-y-4">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                  <Shield size={24} />
                </div>
                <div className="text-sm font-bold text-blue-600 uppercase tracking-wider">Level 2</div>
                <CardTitle className="text-2xl mt-2">Governance Accredited</CardTitle>
                <CardDescription className="text-base mt-2">
                  For practice managers, clinical directors, and compliance officers.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-slate-900">Learning Outcomes:</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> Audit trail management</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> Policy implementation</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> Risk mitigation strategies</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-4 border-t bg-slate-50/50">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/certification/level2">View Level 2 Details</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Level 3 */}
            <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                  <Award size={24} />
                </div>
                <div className="text-sm font-bold text-purple-600 uppercase tracking-wider">Level 3</div>
                <CardTitle className="text-2xl mt-2">Strategic Authority</CardTitle>
                <CardDescription className="text-base mt-2">
                  For enterprise leaders, peak bodies, and industry standard-setters.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-slate-900">Learning Outcomes:</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> Strategic AI roadmapping</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> Industry influence</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-green-500 shrink-0" /> Advanced ethics frameworks</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-4 border-t bg-slate-50/50">
                <Button asChild className="w-full" variant="outline">
                  <Link to="/certification/level3">View Level 3 Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="text-slate-600 mt-4">A structured journey from enrollment to recognition.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { step: "01", title: "Register", desc: "Create your Academy profile." },
              { step: "02", title: "Select Pathway", desc: "Choose your certification level." },
              { step: "03", title: "Modules", desc: "Complete online learning units." },
              { step: "04", title: "Exams", desc: "Pass the verification assessment." },
              { step: "05", title: "Certify", desc: "Receive your digital credentials." },
              { step: "06", title: "Recognition", desc: "Get listed in the partner directory." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Who Is This For?</h2>
            <p className="text-slate-600 mt-4">Tailored governance solutions for every sector of the healthcare industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "NDIS Providers", desc: "Ensure compliant service delivery and automated reporting." },
              { icon: Stethoscope, title: "Allied Health", desc: "Streamline clinical notes while maintaining privacy standards." },
              { icon: Building2, title: "Hospitals", desc: "Enterprise-grade governance for large-scale AI deployment." },
              { icon: Landmark, title: "Government", desc: "Peak bodies setting the standard for regulatory adherence." }
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Start Your Certification Program Today</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Join the leaders in healthcare innovation. Secure your infrastructure, empower your team, and build trust with your patients.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-6 text-lg rounded-full shadow-lg shadow-blue-900/50">
            <Link to="/contact">Launch Selfix Governance Academy</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AcademyPage;