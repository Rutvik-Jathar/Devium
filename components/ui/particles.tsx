import React, { useMemo } from 'react';

const Particles: React.FC<{ count?: number, className?: string }> = ({ count = 50, className }) => {
    const particles = useMemo(() => {
        const particleArray = [];
        for (let i = 0; i < count; i++) {
            const size = Math.random() * 2.5 + 1.5; // size between 1.5px and 4px
            const duration = Math.random() * 20 + 15; // duration between 15s and 35s
            const delay = Math.random() * 5; // delay up to 5s
            const x = Math.random() * 100; // left position %
            const y = Math.random() * 100; // top position %
            
            particleArray.push({
                id: i,
                style: {
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${x}%`,
                    top: `${y}%`,
                    animationDuration: `${duration}s`,
                    animationDelay: `${delay}s`,
                },
            });
        }
        return particleArray;
    }, [count]);

    return (
        <div className={`absolute inset-0 -z-20 overflow-hidden ${className}`}>
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle bg-accent"
                    style={p.style}
                />
            ))}
        </div>
    );
};

export default Particles;