"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoIntro({ onComplete }: { onComplete: () => void }) {
    const [fadeOut, setFadeOut] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [showLogo, setShowLogo] = useState(false);
    const [showLine, setShowLine] = useState(false);

    const fullText = "The Prestige Facet";

    const handleEnd = useCallback(() => {
        setFadeOut(true);
        setTimeout(() => {
            onComplete();
        }, 800);
    }, [onComplete]);

    useEffect(() => {
        // Step 1: Show logo after 300ms
        const logoTimer = setTimeout(() => setShowLogo(true), 300);

        // Step 2: Show decorative line after 800ms
        const lineTimer = setTimeout(() => setShowLine(true), 800);

        // Step 3: Start typewriter after 1.2s
        let charIndex = 0;
        const typeTimer = setTimeout(() => {
            const interval = setInterval(() => {
                charIndex++;
                setTypedText(fullText.slice(0, charIndex));
                if (charIndex >= fullText.length) {
                    clearInterval(interval);
                    // Step 4: Wait 1.5s then fade out
                    setTimeout(handleEnd, 1500);
                }
            }, 80);
        }, 1200);

        // Fallback: force end after 6s
        const fallback = setTimeout(handleEnd, 6000);

        return () => {
            clearTimeout(logoTimer);
            clearTimeout(lineTimer);
            clearTimeout(typeTimer);
            clearTimeout(fallback);
        };
    }, [handleEnd]);

    return (
        <AnimatePresence>
            {!fadeOut ? (
                <motion.div
                    key="intro"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
                    style={{
                        backgroundImage: "url('/images/intro-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >


                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={showLogo ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-12"
                    >
                        <img
                            src="/images/logo-mb-priority.png"
                            alt="MB Priority"
                            className="h-10 md:h-12 w-auto brightness-0 invert opacity-90"
                        />
                    </motion.div>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={
                            showLine
                                ? { scaleX: 1, opacity: 1 }
                                : {}
                        }
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c0c0c0]/60 to-transparent mb-8"
                    />

                    {/* Typewriter text */}
                    <div className="relative h-16 flex items-center justify-center">
                        <span
                            className="font-script text-3xl md:text-4xl lg:text-5xl text-[#c0c0c0] tracking-wide"
                            style={{
                                textShadow: "0 0 40px rgba(192,192,192,0.15)",
                            }}
                        >
                            {typedText}
                            {/* Blinking cursor */}
                            {typedText.length < fullText.length && (
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                    }}
                                    className="inline-block w-[2px] h-8 md:h-10 bg-[#c0c0c0]/70 ml-1 align-middle"
                                />
                            )}
                        </span>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    key="intro-fade"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] pointer-events-none"
                    style={{
                        backgroundImage: "url('/images/intro-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            )}
        </AnimatePresence>
    );
}
