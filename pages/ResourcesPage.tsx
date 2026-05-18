import React from 'react';

const resourceCategories = [
  { title: 'Getting Started', description: 'Your first steps with Devium, from setup to your first collaborative session.' },
  { title: 'API Reference', description: 'In-depth documentation for the Devium SDK and platform APIs.' },
  { title: 'Tutorials', description: 'Follow step-by-step guides to learn key features and workflows.' },
  { title: 'Integrations', description: 'Connect Devium with your favorite tools like GitHub, Vercel, and more.' },
  { title: 'Security', description: 'Learn about our commitment to security and best practices.' },
  { title: 'Community', description: 'Join our community on Discord and contribute to the project.' },
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-rajdhani tracking-tighter">Resources & Docs</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Everything you need to get the most out of Devium.
          </p>
        </section>

        {/* Search Bar */}
        <section className="mb-16 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="search"
              placeholder="Search documentation..."
              className="w-full bg-card border border-input rounded-md py-3 px-4 pl-12 text-foreground focus:ring-2 focus:ring-ring focus:border-ring outline-none transition"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Resource Grid */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category) => (
              <a href="#" key={category.title} className="block bg-card p-8 rounded-lg border transition-all duration-300 hover:border-primary hover:-translate-y-1">
                <h3 className="text-2xl font-bold font-rajdhani mb-2 text-foreground">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourcesPage;