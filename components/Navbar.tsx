import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Resources', path: '/resources' },
  { name: 'About', path: '/about' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 border border-primary/20 group-hover:border-primary/50 transition-colors overflow-hidden">
              <img src="/devium.png" alt="Devium Logo" className="w-8 h-8 object-contain rounded-md relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">Devium</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-1 py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  <span className={isActive ? 'text-primary' : 'text-muted-foreground'}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              to="/download"
              className="relative group px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]"></div>
              <div className="absolute inset-0 rounded-full ring-1 ring-white/20"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-md opacity-0 group-hover:opacity-50 transition-opacity z-[-1]"></div>
              <span className="relative text-white flex items-center gap-2">
                Download
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 shadow-2xl md:hidden flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-medium p-2 rounded-lg ${
                location.pathname === link.path
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/download"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 bg-gradient-to-r from-primary to-secondary text-white text-center py-3 rounded-xl font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)]"
          >
            Download Devium
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
