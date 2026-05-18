"use client" 

import * as React from "react"
import { useState, useRef } from "react";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import type { ButtonProps } from "./button";
import { MousePointerClick } from "lucide-react";

// Fix: Changed from an interface to a type alias with an intersection.
// This correctly inherits all properties from ButtonProps, resolving type errors.
type ParticleButtonProps = ButtonProps & {
    onSuccess?: () => void;
    successDuration?: number;
};

function SuccessParticles({
    buttonRef,
}: {
    buttonRef: React.RefObject<HTMLButtonElement>;
}) {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return null;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // The total animation duration is the last particle's delay + its duration
    // (5 * 0.1) + 0.6 = 1.1s
    return (
        <AnimatePresence>
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="fixed w-1 h-1 bg-white rounded-full"
                    style={{ left: centerX, top: centerY }}
                    initial={{
                        scale: 0,
                        x: 0,
                        y: 0,
                    }}
                    animate={{
                        scale: [0, 1, 0],
                        x: [0, (i % 2 ? 1 : -1) * (Math.random() * 50 + 20)],
                        y: [0, -Math.random() * 50 - 20],
                    }}
                    transition={{
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: "easeOut",
                    }}
                />
            ))}
        </AnimatePresence>
    );
}

function ParticleButton({
    children,
    onClick,
    onSuccess,
    successDuration = 1200, // Increased to ensure full animation is visible
    className,
    ...props
}: ParticleButtonProps) {
    const [showParticles, setShowParticles] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Prevent re-clicking while animation is in progress
        if (showParticles) {
            return;
        }

        setShowParticles(true);

        // Wait for the animation to finish before firing onClick and onSuccess
        setTimeout(() => {
            setShowParticles(false);
            if (onClick) {
                onClick(e);
            }
            if (onSuccess) {
                onSuccess();
            }
        }, successDuration);
    };

    return (
        <>
            {showParticles && <SuccessParticles buttonRef={buttonRef} />}
            <Button
                ref={buttonRef}
                onClick={handleClick}
                className={cn(
                    "relative gap-2", // Use gap for spacing to ensure true centering
                    showParticles && "scale-95",
                    "transition-transform duration-100",
                    className
                )}
                {...props}
            >
                {children}
                {/* Icon no longer needs a margin */}
                <MousePointerClick className="h-4 w-4" />
            </Button>
        </>
    );
}

export { ParticleButton }