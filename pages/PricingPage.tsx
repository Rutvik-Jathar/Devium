import React, { useState } from 'react';
import { PRICING_TIERS, FAQ_DATA, CheckIcon } from '../constants';
import { Button } from '../components/ui/button';

const FaqItemComponent: React.FC<{ item: typeof FAQ_DATA[0] }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-border">
            <button
                className="w-full flex justify-between items-center text-left py-6"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-foreground">{item.question}</span>
                <svg className={`w-6 h-6 transform transition-transform duration-300 text-muted-foreground ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="pb-6 pr-12">
                    <p className="text-muted-foreground">{item.answer}</p>
                </div>
            )}
        </div>
    );
};


const PricingPage: React.FC = () => {
    const handleCtaClick = (tierName: string) => {
        if (tierName === 'Enterprise') {
            window.location.href = 'mailto:sales@devium.com';
        } else {
             // Placeholder for download action
            alert(`Initiating ${tierName} download... (demo)`);
        }
    };

    return (
        <div className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold font-rajdhani tracking-tighter">Find the Right Plan for Your Team</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                        Start for free, then scale as you grow. No hidden fees.
                    </p>
                </div>

                {/* Pricing Tiers */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
                    {PRICING_TIERS.map((tier) => (
                        <div key={tier.name} className={`relative bg-card rounded-lg p-8 border ${tier.isPopular ? 'border-primary/50' : 'border-border'} transition-all duration-300`}>
                            {tier.isPopular && <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>}
                            {tier.isPopular && <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">MOST POPULAR</span>}
                            <h2 className="text-3xl font-bold font-rajdhani mb-2 mt-4">{tier.name}</h2>
                            <p className="text-muted-foreground mb-6 h-12">{tier.description}</p>
                            <div className="mb-6">
                                <span className="text-5xl font-bold">{tier.price}</span>
                                {tier.period && <span className="text-muted-foreground ml-2">{tier.period}</span>}
                            </div>
                           <Button 
                                size="lg" 
                                variant={tier.isPopular ? 'default' : 'secondary'} 
                                className="w-full mb-8"
                                onClick={() => handleCtaClick(tier.name)}
                           >
                                {tier.ctaText}
                           </Button>
                            <ul className="space-y-4">
                                {tier.features.map(feature => (
                                    <li key={feature} className="flex items-start">
                                        <CheckIcon className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto mt-28">
                    <h2 className="text-4xl font-bold font-rajdhani text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {FAQ_DATA.map(item => (
                            <FaqItemComponent key={item.question} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;