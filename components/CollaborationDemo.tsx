import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, RefreshCw, Users, ShieldCheck, Zap } from 'lucide-react';

const CollaborationDemo = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Collaboration <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Without Limits</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience true realtime multi-user editing with zero conflict resolution. 
            See what your team is typing instantly, chat within the editor, and ship faster together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Animated Features List */}
          <div className="space-y-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-yellow-500" />,
                title: "Instant Synchronization",
                desc: "Changes are broadcasted in milliseconds, making it feel like you are typing on the same keyboard."
              },
              {
                icon: <Users className="w-6 h-6 text-primary" />,
                title: "Multi-User Editing",
                desc: "Invite your whole team. See live cursors, selections, and typing indicators for everyone in the room."
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-secondary" />,
                title: "Integrated Chat",
                desc: "Discuss code directly within the editor workspace. No need to switch between Slack and your IDE."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
                title: "Room Access Control",
                desc: "Secure your sessions. Approve join requests and manage read/write permissions for every user."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-border/50 group"
              >
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center border border-border group-hover:bg-background transition-colors shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Visual Demo Cards */}
          <div className="relative h-[500px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 glass-panel rounded-2xl border border-border/50 p-6 flex flex-col gap-4 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-xs text-primary z-30">A</div>
                    <div className="w-8 h-8 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center text-xs text-secondary z-20">B</div>
                    <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-xs text-accent z-10">C</div>
                  </div>
                  <span className="text-sm font-medium text-foreground">Room ID: xyz-789</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Live
                </div>
              </div>

              {/* Floating Activity Cards */}
              <div className="flex-1 relative flex flex-col gap-4 justify-center">
                
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="glass-panel p-4 rounded-xl border border-primary/20 flex items-center gap-4 self-start max-w-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Changes Synced</p>
                    <p className="text-xs text-muted-foreground">42ms latency across 3 users</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="glass-panel p-4 rounded-xl border border-secondary/20 flex items-center gap-4 self-end max-w-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Access Approved</p>
                    <p className="text-xs text-muted-foreground">Admin granted write access to Devesh</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="glass-panel p-4 rounded-xl border border-border flex items-center gap-4 self-center max-w-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">New Message</p>
                    <p className="text-xs text-muted-foreground">"Hey, I fixed the compiler error."</p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CollaborationDemo;
