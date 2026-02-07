"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "#benefits", label: "Quyền lợi" },
    { href: "#cashback", label: "Hoàn tiền" },
    { href: "#lounge", label: "Phòng chờ" },
    { href: "#lifestyle", label: "Đặc quyền" },
    { href: "#register", label: "Đăng ký", isCta: true },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-[#0a1628]/95 backdrop-blur-xl border-b border-white/5 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container-custom">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center group">
                        <img
                            src="/images/logo-mb-priority.png"
                            alt="MB Priority Visa Signature"
                            className="h-10 sm:h-12 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) =>
                            link.isCta ? (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="btn-metallic shimmer-hover text-sm py-2.5 px-6"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-[#94a3b8] hover:text-white transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#c0c0c0] to-transparent group-hover:w-full transition-all duration-300" />
                                </a>
                            )
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#0a1628]/98 backdrop-blur-xl border-t border-white/5"
                    >
                        <div className="container-custom py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "py-3 text-lg",
                                        link.isCta
                                            ? "btn-metallic text-center mt-4"
                                            : "text-[#94a3b8] hover:text-white transition-colors border-b border-white/5"
                                    )}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
