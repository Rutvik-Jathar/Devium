import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

const screenshots = [
  { path: '/screenshots/signup.png', title: 'Signup Page', className: 'md:col-span-2 md:row-span-1' },
  { path: '/screenshots/profile.png', title: 'Profile Page', className: 'md:col-span-1 md:row-span-1' },
  { path: '/screenshots/chat-room.png', title: 'Chat & Room Page', className: 'md:col-span-1 md:row-span-1' },
  { path: '/screenshots/dashboard.png', title: 'Dashboard', className: 'md:col-span-2 md:row-span-1' },
];

const ScreenshotCard = ({ screenshot, index }: { screenshot: any, index: number }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group rounded-3xl overflow-hidden glass-panel border border-border/50 hover:border-primary/50 transition-all duration-500 ${screenshot.className}`}
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

      <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        {screenshot.title}
      </div>

      <div className="w-full h-full relative flex items-center justify-center bg-muted/10">
        {/* Placeholder / Skeleton State */}
        {(!isLoaded || hasError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-full h-full absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]" />
            <ImageIcon className="w-10 h-10 text-muted-foreground/50 mb-2 relative z-10" />
            <p className="text-sm font-medium text-muted-foreground relative z-10">Image Pending</p>
            <p className="text-xs text-muted-foreground/60 relative z-10">{screenshot.path}</p>
          </div>
        )}

        {/* Actual Image */}
        {!hasError && (
          <img
            src={screenshot.path}
            alt={screenshot.title}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
      </div>
    </motion.div>
  );
};

const ScreenshotShowcase = () => {
  return (
    <section className="py-24 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            See Devium in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Action</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A premium, intuitive interface designed specifically for developers.
            Everything you need, right where you need it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {screenshots.map((screenshot, idx) => (
            <ScreenshotCard key={idx} screenshot={screenshot} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotShowcase;
