"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Phone } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 500);
        };
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="floating-btn"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    {isMobile ? (
                        /* Phone call button on mobile */
                        <a
                            href="tel:02422048899"
                            aria-label="Gọi hotline"
                            className="group cursor-pointer block"
                        >
                            {/* Pulse ring */}
                            <div className="absolute inset-0 rounded-full bg-green-500/20 blur-lg animate-pulse" />

                            {/* Button */}
                            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/30 flex items-center justify-center transition-all duration-300 group-hover:shadow-green-500/50 group-hover:scale-110">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                        </a>
                    ) : (
                        /* Back to top on desktop */
                        <button
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            className="group cursor-pointer"
                        >
                            {/* Outer glow */}
                            <div className="absolute inset-0 rounded-full bg-[#c0c0c0]/20 blur-lg group-hover:bg-[#c0c0c0]/30 transition-all duration-300" />

                            {/* Button */}
                            <div className="relative w-12 h-12 rounded-full border border-[#c0c0c0]/30 bg-[#0a1628]/80 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:border-[#c0c0c0]/60 group-hover:bg-[#0a1628]/95 group-hover:shadow-[0_0_20px_rgba(192,192,192,0.2)]">
                                <ChevronUp className="w-5 h-5 text-[#c0c0c0] group-hover:text-white transition-colors duration-300" />
                            </div>
                        </button>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
