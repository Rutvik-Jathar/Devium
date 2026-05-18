import React from 'react';
import HeroSection from '../components/HeroSection';

import ScreenshotShowcase from '../components/ScreenshotShowcase';
import HowItWorks from '../components/HowItWorks';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ScreenshotShowcase />
      <HowItWorks />

      {/* Bottom CTA Section */}
      <section className="py-32 bg-background relative overflow-hidden border-t border-border/50">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Ready to ship <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">faster?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of developers who are already building the future with Devium's realtime collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/download">
                <button className="relative group px-8 py-4 rounded-xl font-medium transition-all duration-300 overflow-hidden w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 rounded-xl ring-1 ring-white/20"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-md opacity-0 group-hover:opacity-50 transition-opacity z-[-1]"></div>
                  <span className="relative text-white flex items-center justify-center gap-2 text-lg">
                    Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;