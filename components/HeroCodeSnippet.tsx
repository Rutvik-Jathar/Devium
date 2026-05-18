import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// The typing script remains the same
const typingScript = [
  { user: 'A', line: 0, text: "import { DeviumClient } from '@devium/sdk';" },
  { user: 'A', line: 2, text: "const session = new DeviumClient({" },
  { user: 'A', line: 3, text: "  project: 'your-project-id'," },
  { user: 'A', line: 4, text: "});" },
  { user: 'A', line: 6, text: "session.join('main-branch').then(workspace => {" },
  { user: 'A', line: 7, text: "  // Your team is now connected!" },
  { user: 'B', line: 8, text: "  workspace.on('change', () => {});" },
  { user: 'A', line: 9, text: "});" },
] as const;

// The syntax highlighting function can also remain
const codeToJsx = (line: string): React.ReactNode => {
    if (line.trim().startsWith('//')) {
        return <span className="text-muted-foreground/70">{line}</span>;
    }

    const html = line
        .replace(/\b(import|const|new|from|then)\b/g, (match) => `<span class="text-pink-400">${match}</span>`)
        .replace(/\b(DeviumClient|join|on)\b/g, (match) => `<span class="text-yellow-300">${match}</span>`)
        .replace(/\b(session|workspace|project)\b/g, (match) => `<span class="text-sky-400">${match}</span>`)
        .replace(/'[^']*'/g, (match) => `<span class="text-emerald-400">${match}</span>`);

    return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

const HeroCodeSnippet: React.FC = () => {
    const [codeLines, setCodeLines] = useState<string[]>(Array(10).fill(''));
    
    // Logical state for cursor positions (line, col)
    const [logicalCursors, setLogicalCursors] = useState({
        A: { line: 0, col: 0, visible: false },
        B: { line: 0, col: 0, visible: false },
    });

    // Animated state for cursor positions (x, y)
    const [animatedCursors, setAnimatedCursors] = useState({
        A: { x: 0, y: 0, visible: false },
        B: { x: 0, y: 0, visible: false },
    });

    const preRef = useRef<HTMLPreElement>(null);
    const charMeasureRef = useRef<HTMLSpanElement>(null);
    
    // NEW STATE: Consolidate all measurements
    const [measurements, setMeasurements] = useState({
        charWidth: 0,
        lineHeight: 0,
        paddingTop: 0,
        paddingLeft: 0,
    });

    // 1. Measure character size and padding once after the component mounts
    useEffect(() => {
        // A timeout ensures styles are applied before we measure
        const timer = setTimeout(() => {
            if (preRef.current && charMeasureRef.current) {
                const charRect = charMeasureRef.current.getBoundingClientRect();
                const style = window.getComputedStyle(preRef.current);
                const lineHeight = parseFloat(style.lineHeight) || 20;
                const paddingTop = parseFloat(style.paddingTop) || 0;
                const paddingLeft = parseFloat(style.paddingLeft) || 0;

                if (charRect.width > 0 && lineHeight > 0) {
                    setMeasurements({
                        charWidth: charRect.width,
                        lineHeight: lineHeight,
                        paddingTop: paddingTop,
                        paddingLeft: paddingLeft,
                    });
                }
            }
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // 2. Orchestrate the typing animation sequence
    useEffect(() => {
        if (measurements.charWidth === 0) return; // Wait for measurements

        const timeouts: number[] = [];
        let scriptIndex = 0;

        const processNextAction = () => {
            if (scriptIndex >= typingScript.length) {
                timeouts.push(setTimeout(() => {
                    setLogicalCursors(prev => ({
                        A: { ...prev.A, visible: false },
                        B: { ...prev.B, visible: false },
                    }));
                }, 2000));
                return;
            }

            const action = typingScript[scriptIndex];
            const { user, line, text } = action;
            let charIndex = 0;

            const typeChar = () => {
                if (charIndex >= text.length) {
                    scriptIndex++;
                    const pause = typingScript[scriptIndex]?.user !== user ? 500 : 150;
                    timeouts.push(setTimeout(processNextAction, pause));
                    return;
                }

                setCodeLines(prev => {
                    const newLines = [...prev];
                    newLines[line] = text.substring(0, charIndex + 1);
                    return newLines;
                });
                
                setLogicalCursors(prev => ({
                    A: user === 'A' ? { line, col: charIndex + 1, visible: true } : { ...prev.A, visible: false },
                    B: user === 'B' ? { line, col: charIndex + 1, visible: true } : { ...prev.B, visible: false },
                }));

                charIndex++;
                const delay = Math.random() * 60 + 50;
                timeouts.push(setTimeout(typeChar, delay));
            };
            
            timeouts.push(setTimeout(typeChar, 100));
        };

        timeouts.push(setTimeout(processNextAction, 500));
        return () => timeouts.forEach(clearTimeout);
    }, [measurements.charWidth]);

    // 3. Translate logical positions to animated pixel coordinates, accounting for padding
    useEffect(() => {
        if (measurements.charWidth === 0) return;
        setAnimatedCursors({
            A: {
                x: logicalCursors.A.col * measurements.charWidth + measurements.paddingLeft,
                y: logicalCursors.A.line * measurements.lineHeight + measurements.paddingTop,
                visible: logicalCursors.A.visible,
            },
            B: {
                x: logicalCursors.B.col * measurements.charWidth + measurements.paddingLeft,
                y: logicalCursors.B.line * measurements.lineHeight + measurements.paddingTop,
                visible: logicalCursors.B.visible,
            },
        });
    }, [logicalCursors, measurements]);

    return (
        <div className="bg-card rounded-lg shadow-2xl overflow-hidden border">
            <pre ref={preRef} className="p-6 text-sm overflow-x-auto min-h-[280px] relative font-mono">
                {/* Invisible character for measurement */}
                <span ref={charMeasureRef} className="absolute invisible -z-10">X</span>
                
                <AnimatePresence>
                    {animatedCursors.A.visible && (
                        <motion.div
                            className="absolute top-0 left-0"
                            animate={{ x: animatedCursors.A.x, y: animatedCursors.A.y }}
                            transition={{ type: "spring", stiffness: 400, damping: 35 }}
                            initial={false}
                        >
                            <span className="relative">
                                <span className="inline-block bg-primary w-0.5 h-4 animate-blinking-cursor" />
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-primary text-xs px-1.5 py-0.5 bg-card rounded-sm whitespace-nowrap select-none">Rutvik</span>
                            </span>
                        </motion.div>
                    )}
                    {animatedCursors.B.visible && (
                        <motion.div
                            className="absolute top-0 left-0"
                            animate={{ x: animatedCursors.B.x, y: animatedCursors.B.y }}
                            transition={{ type: "spring", stiffness: 400, damping: 35 }}
                            initial={false}
                        >
                             <span className="relative">
                                <span className="inline-block bg-orange-500/80 w-0.5 h-4 animate-blinking-cursor" />
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-orange-400 text-xs px-1.5 py-0.5 bg-card rounded-sm whitespace-nowrap select-none">Devesh</span>
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <code>
                    {codeLines.map((line, index) => (
                        // Using a div ensures consistent line height even for empty lines
                        <div key={index}>
                            {line ? codeToJsx(line) : <span className="invisible">.</span>}
                        </div>
                    ))}
                </code>
            </pre>
        </div>
    );
};

export default HeroCodeSnippet;