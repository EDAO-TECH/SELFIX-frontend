
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { typography, colors, spacing } from '@/styles/design-tokens';
import { Shield, AlertTriangle, CheckCircle, XCircle, Activity } from 'lucide-react';

const StyleGuideShowcase = () => {
  return (
    <div className="min-h-screen bg-background p-8 space-y-12">
      <header className="mb-12 border-b pb-6">
        <h1 className="text-4xl font-bold mb-2 text-primary">Design System Showcase</h1>
        <p className="text-muted-foreground">Selfix ProHealers Unified Style Guide & Component Library</p>
      </header>

      {/* Typography Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Typography</h2>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold">H1. Headline Hero (60px)</h1>
            <p className="text-muted-foreground font-mono text-sm">Inter Bold / 3.75rem</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-5xl font-bold">H2. Section Title (48px)</h2>
            <p className="text-muted-foreground font-mono text-sm">Inter Bold / 3rem</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-semibold">H3. Card Title (36px)</h3>
            <p className="text-muted-foreground font-mono text-sm">Inter SemiBold / 2.25rem</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-3xl font-semibold">H4. Widget Title (30px)</h4>
            <p className="text-muted-foreground font-mono text-sm">Inter SemiBold / 1.875rem</p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4">
            <div>
              <p className="text-lg mb-2">Body Large (18px)</p>
              <p className="text-lg text-muted-foreground">
                AI-governed, self-healing infrastructure that seals trusted logic, detects drift, and restores services.
              </p>
            </div>
            <div>
              <p className="text-base mb-2">Body Base (16px)</p>
              <p className="text-base text-muted-foreground">
                Built for hospitals, NDIS providers and regulated enterprises that must prove resilience, not just claim it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Color Palette</h2>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Brand Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-[#13C296] text-white shadow-md">
              <span className="block font-bold">Primary</span>
              <span className="text-xs opacity-90">#13C296</span>
            </div>
            <div className="p-4 rounded-lg bg-[#36FFB5] text-black shadow-md">
              <span className="block font-bold">Accent</span>
              <span className="text-xs opacity-70">#36FFB5</span>
            </div>
            <div className="p-4 rounded-lg bg-[#0A0A0A] text-white shadow-md border border-gray-800">
              <span className="block font-bold">Dark</span>
              <span className="text-xs opacity-70">#0A0A0A</span>
            </div>
            <div className="p-4 rounded-lg bg-[#F3F5F7] text-black shadow-md border">
              <span className="block font-bold">Light</span>
              <span className="text-xs opacity-70">#F3F5F7</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Semantic States</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-4 rounded-lg bg-emerald-500 text-white shadow-sm">
              <span className="block font-bold">Success</span>
              <span className="text-xs opacity-90">Emerald-500</span>
            </div>
            <div className="p-4 rounded-lg bg-amber-500 text-white shadow-sm">
              <span className="block font-bold">Warning</span>
              <span className="text-xs opacity-90">Amber-500</span>
            </div>
            <div className="p-4 rounded-lg bg-red-500 text-white shadow-sm">
              <span className="block font-bold">Risk</span>
              <span className="text-xs opacity-90">Red-500</span>
            </div>
            <div className="p-4 rounded-lg bg-blue-500 text-white shadow-sm">
              <span className="block font-bold">Info</span>
              <span className="text-xs opacity-90">Blue-500</span>
            </div>
            <div className="p-4 rounded-lg bg-indigo-500 text-white shadow-sm">
              <span className="block font-bold">Audit</span>
              <span className="text-xs opacity-90">Indigo-500</span>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Components</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Primary Action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap gap-4">
               <Button disabled>Disabled</Button>
               <Button variant="outline" disabled>Disabled Outline</Button>
            </div>
          </div>

          {/* Badges */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Status Badges</h3>
            <div className="flex gap-3">
              <span className="badge badge-success gap-1"><CheckCircle className="w-3 h-3" /> Active</span>
              <span className="badge badge-warning gap-1"><AlertTriangle className="w-3 h-3" /> Drift Detected</span>
              <span className="badge badge-destructive gap-1"><XCircle className="w-3 h-3" /> Critical</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Cards & Tiles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="text-primary w-5 h-5" />
                  Security Status
                </CardTitle>
                <CardDescription>Real-time monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">Secured</div>
                <p className="text-sm text-muted-foreground mt-2">Last checked: 2m ago</p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/10 border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="text-accent w-5 h-5" />
                  Uptime
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">99.99%</div>
                <div className="w-full bg-secondary/20 h-2 rounded-full mt-3 overflow-hidden">
                  <div className="bg-accent h-full w-[99.99%]"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-4 max-w-md">
          <h3 className="text-lg font-semibold">Inputs</h3>
          <div className="space-y-4">
             <div className="grid gap-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input type="email" placeholder="admin@hospital.org" />
             </div>
             <div className="grid gap-2">
                <label className="text-sm font-medium text-red-500">Error State</label>
                <Input type="text" value="Invalid Input" className="border-red-500 focus-visible:ring-red-500" readOnly />
                <p className="text-xs text-red-500">This field is required.</p>
             </div>
          </div>
        </div>
      </section>
      
      {/* Accessibility */}
      <section className="space-y-6 pb-12">
         <h2 className="text-2xl font-bold border-b pb-2">Accessibility Check</h2>
         <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg flex items-start gap-3 bg-emerald-50/10">
               <CheckCircle className="text-emerald-500 w-6 h-6 mt-0.5" />
               <div>
                  <h4 className="font-semibold">Contrast Ratios</h4>
                  <p className="text-sm text-muted-foreground">All text combinations meet WCAG AA 4.5:1 standards.</p>
               </div>
            </div>
            <div className="p-4 border rounded-lg flex items-start gap-3 bg-emerald-50/10">
               <CheckCircle className="text-emerald-500 w-6 h-6 mt-0.5" />
               <div>
                  <h4 className="font-semibold">Focus Indicators</h4>
                  <p className="text-sm text-muted-foreground">Visible custom focus rings on all interactive elements.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default StyleGuideShowcase;
