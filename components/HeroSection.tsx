import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Play, Users, Zap, Lock, Code2, Folder, FileJson, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [typingText, setTypingText] = useState("");
  const fullText = "function syncRealtime(state) {\n  return broadcast(state);\n}";
  const [notification, setNotification] = useState<string | null>(null);
  
  const activeUsers = [
    { name: "Devesh", colorClass: "text-secondary", bgClass: "bg-secondary" },
    { name: "Rutvik", colorClass: "text-primary", bgClass: "bg-primary" },
    { name: "Shree", colorClass: "text-accent", bgClass: "bg-accent" }
  ];
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const notifications = [
    "Rutvik joined room",
    "Devesh is typing...",
    "Code synced in 42ms",
    "3 developers online"
  ];

  useEffect(() => {
    // Typewriter effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.substring(0, i + 1));
        i++;
      } else {
        setTimeout(() => {
          i = 0;
          setTypingText("");
        }, 3000);
      }
    }, 100);

    // Notifications
    let notifIndex = 0;
    const notifInterval = setInterval(() => {
      setNotification(notifications[notifIndex]);
      notifIndex = (notifIndex + 1) % notifications.length;
    }, 4000);

    const userInterval = setInterval(() => {
      setCurrentUserIndex((prev) => (prev + 1) % activeUsers.length);
    }, 4000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(notifInterval);
      clearInterval(userInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background flex items-center">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[120px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] bg-[length:40px_40px] opacity-50" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              v1.104 Available Now
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Code Together. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Build Faster.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Devium is the AI first realtime collaborative code editor built for teams and developers. Experience seamless sync, integrated chat, and zero latency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group px-8 py-4 rounded-xl font-medium transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]"></div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/20"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-md opacity-0 group-hover:opacity-50 transition-opacity z-[-1]"></div>
                <span className="relative text-white flex items-center justify-center gap-2 text-lg">
                  <Download className="w-5 h-5" />
                  Download Devium
                </span>
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="flex items-center gap-2 text-foreground font-semibold mb-1">
                  <Zap className="w-4 h-4 text-accent" /> 50ms
                </div>
                <div className="text-sm text-muted-foreground">Sync Speed</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-foreground font-semibold mb-1">
                  <Users className="w-4 h-4 text-primary" /> Infinite
                </div>
                <div className="text-sm text-muted-foreground">Multi User</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-foreground font-semibold mb-1">
                  <Lock className="w-4 h-4 text-secondary" /> E2E
                </div>
                <div className="text-sm text-muted-foreground">Secure Collab</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Animated Editor */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] w-full"
          >
            {/* Realtime Notification Bubble */}
            <AnimatePresence mode="wait">
              {notification && (
                <motion.div
                  key={notification}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  className="absolute -top-6 -right-6 z-30 glass-panel px-4 py-2 rounded-lg flex items-center gap-2 border border-primary/20 shadow-2xl shadow-primary/10"
                >
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-foreground">{notification}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl blur-2xl" />
            
            <div className="relative h-full w-full rounded-2xl border border-border/50 bg-[#0d1117] overflow-hidden shadow-2xl flex flex-col">
              {/* Editor Header */}
              <div className="h-10 border-b border-border/50 bg-[#161b22] flex items-center px-4 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> App.tsx
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 text-[10px] text-primary">R</div>
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/50 text-[10px] text-secondary">D</div>
                </div>
              </div>

              <div className="flex flex-1 overflow-hidden">
                {/* Fake Sidebar */}
                <div className="w-48 border-r border-border/50 bg-[#0d1117] p-2 hidden sm:block">
                  <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">EXPLORER</div>
                  <div className="space-y-1 text-sm text-foreground/80">
                    <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded cursor-pointer">
                      <ChevronRight className="w-4 h-4" /> <Folder className="w-4 h-4 text-blue-400" /> src
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 bg-white/10 text-white rounded cursor-pointer ml-4">
                      <Code2 className="w-4 h-4 text-blue-400" /> App.tsx
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded cursor-pointer ml-4">
                      <FileJson className="w-4 h-4 text-yellow-400" /> config.ts
                    </div>
                  </div>
                </div>

                {/* Editor Content */}
                <div className="flex-1 p-4 font-mono text-sm relative">
                  <div className="text-muted-foreground absolute left-4 select-none text-right w-6 space-y-1">
                    <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
                  </div>
                  <div className="ml-10 space-y-1 text-gray-300 whitespace-pre">
                    <span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>;<br/>
                    <br/>
                    {typingText}
                    <span className="inline-block relative">
                      <span className={`inline-block w-2 h-4 ${activeUsers[currentUserIndex].bgClass} ml-0.5 animate-blinking-cursor align-middle transition-colors duration-500`} />
                      
                      {/* Name Tag Cursor following the text */}
                      <motion.div 
                        className="absolute top-4 left-0 pointer-events-none z-20 flex flex-col items-center"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${activeUsers[currentUserIndex].colorClass} drop-shadow-md transition-colors duration-500`}>
                          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="currentColor"/>
                        </svg>
                        <div className={`${activeUsers[currentUserIndex].bgClass} text-white text-[10px] px-2 py-0.5 rounded-full mt-1 whitespace-nowrap shadow-lg transition-colors duration-500`}>
                          {activeUsers[currentUserIndex].name}
                        </div>
                      </motion.div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
