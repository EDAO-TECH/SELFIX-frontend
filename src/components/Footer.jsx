import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="https://horizons-cdn.hostinger.com/65dbac05-f2b6-4e2c-a408-8adbc6bca203/5ed0a23087cb983aed7184cd02c6bec9.jpg" alt="Selfix Logo" className="w-10 h-10 object-contain brightness-0 invert" />
              <span className="text-2xl font-bold text-white">SELFIX</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Empowering healthcare with autonomous AI agents that ensure safety, compliance, and operational excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/clinical-support" className="hover:text-white transition-colors">Clinical Support</Link></li>
              <li><Link to="/safety" className="hover:text-white transition-colors">Safety Protocols</Link></li>
              <li><Link to="/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
              <li><Link to="/security" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Certifications (New Section) */}
          <div>
            <h4 className="text-white font-semibold mb-6">Certifications</h4>
            <ul className="space-y-4">
              <li><Link to="/academy" className="hover:text-white transition-colors">Academy Overview</Link></li>
              <li><Link to="/certification/level1" className="hover:text-white transition-colors">Level 1: Certified</Link></li>
              <li><Link to="/certification/level2" className="hover:text-white transition-colors">Level 2: Accredited</Link></li>
              <li><Link to="/certification/level3" className="hover:text-white transition-colors">Level 3: Strategic</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Selfix Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/security-statement" className="hover:text-white transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;