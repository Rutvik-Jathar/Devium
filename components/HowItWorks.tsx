import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, PlusSquare, UserPlus, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Login or Signup',
    description: 'Get started in seconds with GitHub or your email.',
    icon: <UserCircle className="w-6 h-6" />
  },
  {
    title: 'Create or Join Room',
    description: 'Spin up a new secure workspace or join an existing session.',
    icon: <PlusSquare className="w-6 h-6" />
  },
  {
    title: 'Invite Members',
    description: 'Share your room ID and manage access permissions.',
    icon: <UserPlus className="w-6 h-6" />
  },
  {
    title: 'Collaborate Live',
    description: 'Code together in realtime with instant synchronization.',
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: 'Ship Faster Together',
    description: 'Review, debug, and deploy your projects seamlessly.',
    icon: <Rocket className="w-6 h-6" />
  }
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A frictionless workflow designed to get you and your team coding together in seconds.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central connecting line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: idx * 0.1 + 0.2 }}
                    className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary z-10 -translate-x-1/2 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(139,92,246,0.3)] group hover:scale-110 hover:bg-primary/10 transition-all duration-300"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-24 text-left md:text-right' : 'md:pl-24 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="glass-panel p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="text-sm font-bold text-primary mb-2">Step 0{idx + 1}</div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
