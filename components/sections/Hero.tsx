"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TextMorphInline } from "@/components/ui/TextMorph";

// Diamond shards for the explosion effect
const diamondShards = [
    { x: -120, y: -80, rotate: -45, delay: 0, size: 40 },
    { x: 100, y: -100, rotate: 30, delay: 0.05, size: 35 },
    { x: -80, y: 80, rotate: 60, delay: 0.1, size: 45 },
    { x: 120, y: 60, rotate: -30, delay: 0.08, size: 38 },
    { x: 0, y: -120, rotate: 15, delay: 0.03, size: 42 },
    { x: -140, y: 0, rotate: -60, delay: 0.06, size: 32 },
    { x: 150, y: -30, rotate: 45, delay: 0.04, size: 36 },
    { x: -60, y: 100, rotate: -15, delay: 0.07, size: 40 },
    { x: 80, y: 100, rotate: 75, delay: 0.09, size: 34 },
    { x: 0, y: 120, rotate: 0, delay: 0.11, size: 38 },
    // Additional shards
    { x: -160, y: -60, rotate: 25, delay: 0.02, size: 28 },
    { x: 170, y: 40, rotate: -50, delay: 0.12, size: 30 },
];

export default function Hero() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    // Mouse position for 3D effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation
    const springConfig = { stiffness: 150, damping: 15 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimationComplete(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // Handle mouse move for 3D tilt
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set((e.clientX - centerX) / rect.width);
        mouseY.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Hero Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/backgrounds/hero-bg.png')" }}
            />

            {/* Dark navy overlay */}
            <div className="absolute inset-0 bg-[#040a14]/80" />

            {/* Gradient overlays for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040a14]/90 via-[#040a14]/60 to-[#040a14]/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#040a14]/50 via-transparent to-[#040a14]/70" />
            <div className="vignette" />

            {/* Content */}
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left - Text Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left"
                    >
                        {/* Script Title */}
                        <motion.p
                            variants={staggerItem}
                            className="font-script text-3xl md:text-4xl text-[#c0c0c0] mb-4"
                        >
                            The Prestige Facet
                        </motion.p>

                        {/* Main Headline */}
                        <motion.h1
                            variants={staggerItem}
                            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                        >
                            <TextMorphInline className="text-gradient-silver" immediate delay={0.3} stagger={0.04}>Đặc quyền</TextMorphInline>
                            <br />
                            <TextMorphInline className="text-gradient-silver" immediate delay={0.7} stagger={0.04}>thượng lưu</TextMorphInline>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            variants={staggerItem}
                            className="text-lg md:text-xl text-[#94a3b8] max-w-lg mx-auto lg:mx-0 mb-8"
                        >
                            Thẻ MB Visa Priority Signature - Chia sẻ đặc quyền cùng người thân với hoàn tiền lên đến{" "}
                            <span className="text-white font-semibold">12.6 triệu đồng/năm</span>
                        </motion.p>

                        {/* Key Benefits Pills */}
                        <motion.div
                            variants={staggerItem}
                            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
                        >
                            {[
                                "4+4 Phòng chờ miễn phí",
                                "Hoàn tiền 10%",
                                "Ưu đãi 10 lĩnh vực",
                            ].map((benefit, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 glass-card text-sm text-[#c0c0c0] flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                                    {benefit}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={staggerItem}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a href="#register" className="btn-metallic">
                                Đăng ký ngay
                            </a>
                            <a href="#benefits" className="btn-metallic-outline">
                                Khám phá quyền lợi
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right - 3D Card with Diamond Shatter Effect */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div
                            ref={cardRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative"
                            style={{ perspective: 1000 }}
                        >
                            {/* Diamond Shards - Exploding outward */}
                            {diamondShards.map((shard, index) => (
                                <motion.div
                                    key={index}
                                    initial={{
                                        x: 0,
                                        y: 0,
                                        scale: 1,
                                        rotate: 0,
                                        opacity: 1
                                    }}
                                    animate={{
                                        x: shard.x,
                                        y: shard.y,
                                        scale: isAnimationComplete ? 0 : 0.6,
                                        rotate: shard.rotate,
                                        opacity: isAnimationComplete ? 0 : 0.8
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        delay: shard.delay,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
                                    style={{
                                        width: shard.size,
                                        height: shard.size,
                                    }}
                                >
                                    {/* Diamond shard SVG */}
                                    <svg viewBox="0 0 40 40" className="w-full h-full">
                                        <defs>
                                            <linearGradient id={`diamondGrad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="rgba(192, 210, 255, 0.9)" />
                                                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.95)" />
                                                <stop offset="100%" stopColor="rgba(147, 197, 253, 0.8)" />
                                            </linearGradient>
                                            <filter id={`glow${index}`}>
                                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                                <feMerge>
                                                    <feMergeNode in="coloredBlur" />
                                                    <feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                        </defs>
                                        <polygon
                                            points="20,0 40,15 35,40 5,40 0,15"
                                            fill={`url(#diamondGrad${index})`}
                                            filter={`url(#glow${index})`}
                                            opacity="0.9"
                                        />
                                        <polygon
                                            points="20,5 35,17 31,35 9,35 5,17"
                                            fill="rgba(255,255,255,0.3)"
                                        />
                                    </svg>
                                </motion.div>
                            ))}

                            {/* Center Light Burst */}
                            <motion.div
                                initial={{ scale: 0, opacity: 1 }}
                                animate={{ scale: [0, 3, 0], opacity: [1, 0.5, 0] }}
                                transition={{ duration: 1.5, delay: 0.2 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-gradient-radial from-white/40 via-blue-200/20 to-transparent pointer-events-none z-10"
                            />



                            {/* Main Card Container */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0, rotateY: -30 }}
                                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.5,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                className="relative z-30"
                            >

                                {/* Card with Tilt */}
                                <motion.div
                                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                    className="relative"
                                >
                                    {/* Card Shadow - behind and offset */}
                                    <div className="absolute inset-0 bg-black/40 rounded-2xl blur-2xl transform translate-x-4 translate-y-6 scale-95" />

                                    {/* Subtle outer glow */}
                                    <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 rounded-3xl blur-xl" />

                                    {/* Card Container with tilt */}
                                    <div className="relative transform rotate-[8deg]">
                                        {/* Card Image */}
                                        <div className="relative w-[320px] md:w-[400px] lg:w-[450px] aspect-[1.586/1] rounded-2xl overflow-hidden shadow-2xl">
                                            <Image
                                                src="/images/card-front.png"
                                                alt="MB Visa Priority Signature Card"
                                                fill
                                                className="object-contain"
                                                priority
                                            />
                                        </div>

                                        {/* Sparkle/Light Burst at top-right corner */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{
                                                opacity: [0, 1, 0.8, 1],
                                                scale: [0.5, 1, 0.9, 1]
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 1,
                                                repeat: Infinity,
                                                repeatDelay: 3
                                            }}
                                            className="absolute -top-8 -right-8 w-24 h-24"
                                        >
                                            {/* Main sparkle */}
                                            <div className="absolute inset-0 bg-gradient-radial from-white via-white/50 to-transparent rounded-full blur-sm" />
                                            {/* Cross rays */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent" />
                                            {/* Diagonal rays */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent via-white/80 to-transparent rotate-45" />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent via-white/80 to-transparent -rotate-45" />
                                            {/* Center bright dot */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_8px_rgba(255,255,255,0.8)]" />
                                        </motion.div>

                                        {/* Secondary smaller sparkle */}
                                        <motion.div
                                            animate={{
                                                opacity: [0.3, 0.8, 0.3],
                                                scale: [0.8, 1.1, 0.8]
                                            }}
                                            transition={{
                                                duration: 2,
                                                delay: 1.5,
                                                repeat: Infinity
                                            }}
                                            className="absolute -top-2 right-4 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_4px_rgba(255,255,255,0.6)]"
                                        />
                                    </div>

                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-[#64748b]"
                >
                    <span className="text-xs uppercase tracking-widest">Cuộn xuống</span>
                    <div className="w-6 h-10 border-2 border-[#64748b] rounded-full flex justify-center pt-2">
                        <motion.div
                            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-[#64748b] rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
