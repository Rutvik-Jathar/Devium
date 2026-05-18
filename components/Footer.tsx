import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-background pt-16 pb-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-primary/10 blur-[100px] pointer-events-none rounded-t-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-4 inline-flex">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/5 border border-primary/20 group-hover:border-primary/50 transition-colors overflow-hidden">
                <img src="/devium.ico" alt="Devium Logo" className="w-6 h-6 object-contain rounded-md relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">Devium</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              The AI first realtime collaborative code editor built for teams and developers.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/20">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/20">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/20">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/download" className="text-sm text-muted-foreground hover:text-primary transition-colors">Download</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Changelog</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Community</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Open Source</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li>
                <a href="mailto:support@devium.io" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Support
                </a>
              </li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Devium. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
