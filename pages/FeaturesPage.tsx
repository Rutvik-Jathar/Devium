import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Shield, RefreshCw } from 'lucide-react';

const FeaturesPage = () => {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6"
          >
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Collaboration</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Experience true realtime multi-user editing with zero conflict resolution. 
            See what your team is typing instantly and ship faster together.
          </motion.p>
        </div>

        <div className="space-y-32">
          
          {/* Feature 1: Real-time Multi-Cursor Editing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Real-time Multi-Cursor Editing</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Invite your whole team to edit the same file simultaneously. See live cursors, 
                text selections, and typing indicators for everyone in the room. Say goodbye to merge conflicts and screen sharing lag.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 glass-panel rounded-2xl p-6 border border-border shadow-2xl relative h-[300px] flex items-center justify-center overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-full max-w-md font-mono text-sm bg-[#0d1117] rounded-xl border border-border/50 p-6 relative shadow-inner">
                <div className="text-gray-300 whitespace-pre space-y-2">
                  <span className="text-purple-400">const</span> renderUI <span className="text-purple-400">=</span> () <span className="text-purple-400">=&gt;</span> {'{'}
                  <br />
                  {'  '}return (
                  <br />
                  {'    '}div className="container"
                  <br />
                  {'      '}h1 Hello World /h1
                  <br />
                  {'    '}/div
                  <br />
                  {'  '});
                  <br />
                  {'}'}
                </div>
                
                {/* Animated Cursors */}
                <motion.div 
                  animate={{ x: [0, 50, 20, 100], y: [0, -20, 10, -30] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-16 left-32 flex flex-col items-center pointer-events-none"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary drop-shadow-md">
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="currentColor"/>
                  </svg>
                  <div className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full mt-1 whitespace-nowrap shadow-lg">Rutvik</div>
                </motion.div>


              </div>
            </motion.div>
          </div>

          {/* Feature 2: Real-time Chat */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6 border border-border shadow-2xl relative h-[300px] flex items-end justify-center overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-full max-w-sm flex flex-col gap-3 relative z-10 pb-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="self-start bg-muted text-foreground px-4 py-2 rounded-2xl rounded-bl-sm text-sm border border-border/50 shadow-sm"
                >
                  Can someone help me with the API integration?
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="self-end bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-2xl rounded-br-sm text-sm shadow-md"
                >
                  Sure, I'm joining your room now.
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="self-start flex items-center gap-2 mt-2"
                >
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <span className="text-xs text-muted-foreground">Rutvik is typing...</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30">
                <MessageSquare className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Real-time Chat</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discuss code directly within the editor workspace. Keep the context of your conversations 
                right next to the code you are writing. No need to switch back and forth between messaging apps.
              </p>
            </motion.div>
          </div>

          {/* Feature 3: Role-based Access Control */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/30">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Role-based Access Control</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Secure your collaborative sessions with fine-grained permissions. Assign users as 
                <strong className="text-foreground"> Owners</strong>, 
                <strong className="text-foreground"> Editors</strong>, or 
                <strong className="text-foreground"> Viewers</strong>. Approve join requests dynamically.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 glass-panel rounded-2xl p-6 border border-border shadow-2xl relative h-[300px] flex items-center justify-center overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-full max-w-sm flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary border border-primary/30">D</div>
                    <span className="text-sm font-medium text-foreground">Devesh</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground border border-border">Owner</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary border border-secondary/30">R</div>
                    <span className="text-sm font-medium text-foreground">Rutvik</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">Editor</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50 opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent border border-accent/30">A</div>
                    <span className="text-sm font-medium text-foreground">Guest</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground border border-border">Viewer</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 4: Real-time Code Synchronization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6 border border-border shadow-2xl relative h-[300px] flex items-center justify-center overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                {/* Connecting Lines */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 pointer-events-none" viewBox="0 0 200 100">
                  <path d="M 20 50 Q 100 0 180 50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-accent/30 animate-[dash_2s_linear_infinite]" />
                  <path d="M 20 50 Q 100 100 180 50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-accent/30 animate-[dash_2s_linear_infinite]" />
                </svg>
                
                <div className="flex items-center gap-16 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-background border border-border shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    <RefreshCw className="w-6 h-6 text-accent animate-spin-slow" />
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-background border border-border shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                  </div>
                </div>
                
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full border border-accent/20 whitespace-nowrap">
                  Changes synced in 42ms
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6 border border-accent/30">
                <RefreshCw className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Real-time Synchronization</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Changes are broadcasted in milliseconds, making it feel like you are typing on the same keyboard. 
                Our optimized sync engine ensures reliable connections even on fluctuating networks.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
