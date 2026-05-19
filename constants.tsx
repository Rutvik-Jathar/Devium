

import React from 'react';
import type { NavLink, Feature } from './types';
import { 
    CollaborationSnippet, 
    TerminalSnippet, 
    IntegrationsSnippet, 
    SecuritySnippet 
} from './components/FeatureSnippets';

export const DEVIUM_DOWNLOAD_URL =
  'https://github.com/Rutvik-Jathar/Devium/releases/download/Devium/Devium-Setup-x64.1.exe';

export const NAV_LINKS: NavLink[] = [
  { name: 'Features', path: '/features' },
  { name: 'Resources', path: '/resources' },
  { name: 'About', path: '/about' },
];

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-8 w-8"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);

export const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-8 w-8"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
);

export const ZapIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-8 w-8"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);

export const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-8 w-8"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);

export const HOME_FEATURES: Feature[] = [
  {
    icon: <UsersIcon />,
    title: 'Seamless Collaboration',
    description: 'Code in tandem with your team in a shared, real-time environment. See changes instantly, no more merge conflicts.',
  },
  {
    icon: <CodeIcon />,
    title: 'Powerful Editor',
    description: 'A full-featured editor with syntax highlighting, IntelliSense, and Vim/Emacs keybindings. All in the browser.',
  },
  {
    icon: <ZapIcon />,
    title: 'Blazing Fast',
    description: 'Built on a modern stack for near-native performance. Your workspace loads in seconds, not minutes.',
  },
];

export const DETAILED_FEATURES: Feature[] = [
    {
      icon: <UsersIcon className="w-12 h-12 text-primary"/>,
      title: 'Real-time Multi-Cursor Editing',
      description: 'Experience pair programming like never before. Follow your teammates\' cursors, make simultaneous edits, and communicate seamlessly with integrated audio and text chat. Resolve issues faster and ship code together.',
      snippet: <CollaborationSnippet />
    },
    {
      icon: <CodeIcon className="w-12 h-12 text-primary"/>,
      title: 'Built-in Terminal & Debugger',
      description: 'Run commands, execute scripts, and debug your applications without ever leaving the editor. Devium provides a fully functional integrated terminal and a powerful debugger with breakpoints and step-through execution.',
      snippet: <TerminalSnippet />
    },
    {
      icon: <ZapIcon className="w-12 h-12 text-primary"/>,
      title: 'One-Click Integrations',
      description: 'Connect Devium to your favorite tools. With native integrations for GitHub, GitLab, Docker, and popular cloud providers like AWS and Vercel, your entire development workflow is unified in one place.',
      snippet: <IntegrationsSnippet />
    },
    {
      icon: <ShieldIcon className="w-12 h-12 text-primary"/>,
      title: 'Secure & Isolated Workspaces',
      description: 'Each project runs in a secure, containerized environment. Manage permissions, control access, and ensure your codebase is always safe. Your code is yours, and Devium keeps it that way.',
      snippet: <SecuritySnippet />
    }
];

export const TESTIMONIAL_LOGOS = [
    { name: "SynthCore", logo: "SynthCore" },
    { name: "QuantumLeap", logo: "QuantumLeap" },
    { name: "DataWeave", logo: "DataWeave" },
    { name: "InnovateIO", logo: "InnovateIO" },
    { name: "NexusForge", logo: "NexusForge" }
];
// Fix: Add missing PRICING_TIERS constant.
export const PRICING_TIERS = [
    {
      name: 'Free',
      description: 'For individuals and small teams getting started with collaborative coding.',
      price: '$0',
      period: 'per user/month',
      ctaText: 'Get Started',
      features: [
        'Real-time collaboration for up to 3 users',
        '1 Private project',
        'Community support',
        'Basic integrations (GitHub)',
      ],
      isPopular: false,
    },
    {
      name: 'Pro',
      description: 'For growing teams that need more power and advanced features.',
      price: '$15',
      period: 'per user/month',
      ctaText: 'Start Pro Trial',
      features: [
        'Unlimited collaborators',
        'Unlimited private projects',
        'Priority email support',
        'Advanced integrations (GitLab, Docker)',
        'Built-in terminal and debugger',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations requiring custom solutions and dedicated support.',
      price: 'Contact Us',
      period: '',
      ctaText: 'Contact Sales',
      features: [
        'Everything in Pro, plus:',
        'Single Sign-On (SSO)',
        'On-premise deployment options',
        'Dedicated account manager',
        '24/7 premium support',
      ],
      isPopular: false,
    },
];
// Fix: Add missing FAQ_DATA constant.
export const FAQ_DATA = [
    {
      question: 'Can I use Devium for my open-source projects?',
      answer: 'Absolutely! Our Free tier is perfect for open-source projects and small teams. It provides all the core collaborative features you need to get started.',
    },
    {
      question: 'What happens when my Pro trial ends?',
      answer: 'At the end of your 14-day Pro trial, you can choose to upgrade to a paid plan or your workspace will be automatically downgraded to the Free plan. You won\'t lose any of your work.',
    },
    {
      question: 'Is my code secure on Devium?',
      answer: 'Yes, security is our top priority. All projects run in secure, isolated containerized environments. We use industry-standard encryption for data in transit and at rest. The Enterprise plan offers additional security features like SSO and on-premise deployment.',
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your Pro subscription at any time. Your plan will remain active until the end of the current billing cycle, and you will not be charged again.',
    },
];