"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TextMorphInline } from "@/components/ui/TextMorph";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Hero Background Image */}
            <div
                className="absolute -inset-[5%] w-[110%] h-[110%] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/backgrounds/hero-bg.png')",
                    animation: "bgKenBurns 25s ease-in-out infinite alternate",
                }}
            />

            {/* Dark navy overlay */}
            <div className="absolute inset-0 bg-[#040a14]/80" />

            {/* Gradient overlays for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040a14]/90 via-[#040a14]/60 to-[#040a14]/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#040a14]/50 via-transparent to-[#040a14]/70" />
            <div className="vignette" />

            {/* Content */}
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-[1fr_0.7fr] gap-12 lg:gap-8 items-center">

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
                            className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-tight mb-6"
                        >
                            <TextMorphInline className="text-gradient-silver" immediate delay={0.3} stagger={0.04}>Đặc quyền toàn diện,</TextMorphInline>
                            <br />
                            <TextMorphInline className="text-gradient-silver" immediate delay={0.8} stagger={0.04}>chia sẻ cùng người thân</TextMorphInline>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            variants={staggerItem}
                            className="text-lg md:text-xl text-[#94a3b8] max-w-lg mx-auto lg:mx-0 mb-8"
                        >
                            Thẻ MB Priority Visa Signature — Đặc quyền vượt trội dành cho bạn và người thân, hoàn tiền lên đến{" "}
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
                            <a href="#register" className="btn-metallic shimmer-hover">
                                Đăng ký ngay
                            </a>
                            <a href="#benefits" className="btn-metallic-outline shimmer-hover">
                                Khám phá quyền lợi
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right - Card Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative"
                        >
                            {/* Glow behind cards */}
                            <div className="absolute inset-0 bg-gradient-radial from-blue-500/15 via-cyan-400/5 to-transparent blur-3xl scale-125" />

                            {/* Floating animation */}
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.5,
                                }}
                            >
                                <img
                                    src="/images/hero-cards.png"
                                    alt="MB Priority Visa Signature Cards"
                                    className="relative z-10 drop-shadow-2xl w-[512px] md:w-[640px] lg:w-[736px] h-auto"
                                />
                            </motion.div>
                        </motion.div>
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
