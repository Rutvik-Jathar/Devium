
import React, { useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { DEVIUM_DOWNLOAD_URL, NAV_LINKS } from '../constants';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <RouterNavLink to={to} className={({ isActive }) => `text-base font-medium transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`} onClick={() => setIsMenuOpen(false)}>
      {children}
    </RouterNavLink>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/favicon.ico" alt="Devium Logo" className="h-9 w-9 object-contain rounded-md" />
            <span className="text-2xl font-bold font-rajdhani text-foreground">Devium</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (<NavLink key={link.name} to={link.path}>{link.name}</NavLink>))}
          </nav>
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4">
              <Button asChild>
                <a href={DEVIUM_DOWNLOAD_URL} rel="noopener noreferrer">
                  Download
                </a>
              </Button>
            </div>
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground focus:outline-none ml-4" aria-label="Toggle menu">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{isMenuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}</svg>
                </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background pb-8 border-b border-border">
          <nav className="flex flex-col items-center space-y-6 pt-6">
            {NAV_LINKS.map((link) => (<NavLink key={link.name} to={link.path}>{link.name}</NavLink>))}
            <div className="w-48">
              <Button asChild size="lg" className="w-full">
                <a
                  href={DEVIUM_DOWNLOAD_URL}
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
