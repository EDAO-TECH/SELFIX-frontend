import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const solutionLinks = [
    { name: 'Clinical Support', path: '/clinical-support' },
    { name: 'Safety', path: '/safety' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'Security', path: '/security' },
];

const platformLinks = [
    { name: 'Operations', path: '/operations' },
    { name: 'Technology', path: '/technology' },
    { name: 'API', path: '/api' },
    { name: 'Trust', path: '/trust' },
];

const resourceLinks = [
    { name: 'Academy', path: '/academy' },
    { name: 'Level 1 Certification', path: '/certification/level1' },
    { name: 'Level 2 Certification', path: '/certification/level2' },
    { name: 'Level 3 Certification', path: '/certification/level3' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Blog', path: '/blog' },
    { name: 'News', path: '/news' },
];

const companyLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const allNavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Operations', path: '/operations' },
  { name: 'Clinical Support', path: '/clinical-support' },
  { name: 'Safety', path: '/safety' },
  { name: 'Technology', path: '/technology' },
  { name: 'Compliance', path: '/compliance' },
  { name: 'Security', path: '/security' },
  { name: 'Academy', path: '/academy' },
  { name: 'Level 1', path: '/certification/level1' },
  { name: 'Level 2', path: '/certification/level2' },
  { name: 'Level 3', path: '/certification/level3' },
  { name: 'Use Cases', path: '/use-cases' },
  { name: 'API', path: '/api' },
  { name: 'Trust', path: '/trust' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const activeLinkStyle = { color: 'hsl(var(--primary))', fontWeight: '600' };

  const DropdownMenu = ({ title, links }) => {
    return (
      <div className="group relative">
        <span className="text-slate-700 hover:text-primary transition-colors flex items-center cursor-pointer font-medium">
          {title}
          <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
        </span>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible z-20">
          <div className="py-1">
            {links.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-primary"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b' : 'bg-background'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-4 group py-2 px-2 rounded-lg transition-all duration-300 hover:bg-slate-50">
            <img src="https://horizons-cdn.hostinger.com/65dbac05-f2b6-4e2c-a408-8adbc6bca203/5ed0a23087cb983aed7184cd02c6bec9.jpg" alt="ProHealers SELFIX Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-md transition-all duration-300 group-hover:scale-105" />
            <span className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">SELFIX</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <DropdownMenu title="Solutions" links={solutionLinks} />
            <DropdownMenu title="Platform" links={platformLinks} />
            <DropdownMenu title="Resources" links={resourceLinks} />
            <DropdownMenu title="Company" links={companyLinks} />
          </div>

          <div className="hidden lg:flex items-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-105"
            >
              <Link to="/contact">Book Demo</Link>
            </Button>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-primary">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
              {allNavLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-100"
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 px-3">
                <Button asChild className="w-full bg-primary text-primary-foreground font-semibold">
                  <Link to="/contact">Book Demo</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;