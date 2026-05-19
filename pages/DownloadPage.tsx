import React from 'react';
import { motion } from 'framer-motion';
import { Download, Monitor, Apple, Terminal, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DEVIUM_DOWNLOAD_URL } from '../constants';

const DownloadPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Devium</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the ultimate collaborative code editor. Experience realtime sync, 
              integrated tools, and a premium developer environment.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Windows Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 md:col-span-3 glass-panel rounded-2xl p-8 relative overflow-hidden group border border-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Monitor className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Windows</h2>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-md border border-primary/20">v1.104</span>
                    <span>Windows 10/11</span>
                    <span>•</span>
                    <span>142 MB</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <a href={DEVIUM_DOWNLOAD_URL} className="flex-1 sm:flex-none relative group px-8 py-4 rounded-xl font-medium transition-all duration-300 overflow-hidden inline-block text-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 rounded-xl ring-1 ring-white/20"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-md opacity-0 group-hover:opacity-50 transition-opacity z-[-1]"></div>
                  <span className="relative text-white flex items-center justify-center gap-2 text-lg">
                    <Download className="w-5 h-5" />
                    Download Installer
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* macOS Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel rounded-2xl p-6 flex flex-col items-center text-center opacity-60"
          >
            <div className="w-16 h-16 rounded-xl bg-muted/50 flex items-center justify-center mb-4 border border-border">
              <Apple className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">macOS</h3>
            <p className="text-sm text-muted-foreground mb-4">Apple Silicon & Intel</p>
            <div className="mt-auto inline-block px-4 py-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground">
              Coming Soon
            </div>
          </motion.div>

          {/* Linux Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel rounded-2xl p-6 flex flex-col items-center text-center opacity-60"
          >
            <div className="w-16 h-16 rounded-xl bg-muted/50 flex items-center justify-center mb-4 border border-border">
              <Terminal className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">Linux</h3>
            <p className="text-sm text-muted-foreground mb-4">AppImage & .deb</p>
            <div className="mt-auto inline-block px-4 py-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground">
              Coming Soon
            </div>
          </motion.div>
        </div>

        {/* Installation Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Quick Installation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-border/50 -translate-y-1/2 z-0" />
            
            {[
              { title: "Download Installer", desc: "Get the latest Windows .exe" },
              { title: "Run Setup", desc: "Follow the quick setup wizard" },
              { title: "Login to Devium", desc: "Authenticate your account" },
              { title: "Start Collaborating", desc: "Create your first room" }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-bold mb-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadPage;
