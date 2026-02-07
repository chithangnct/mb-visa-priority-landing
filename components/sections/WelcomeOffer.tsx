"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, CreditCard, Calendar, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { TextMorphInline } from "@/components/ui/TextMorph";

const conditions = [
    "Chi tiêu 60 triệu VND trong vòng 60 ngày",
    "Kể từ ngày kích hoạt thẻ",
    "Hoàn tiền trực tiếp vào thẻ tín dụng",
];

export default function WelcomeOffer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section relative overflow-hidden bg-accent-section">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-transparent to-[#0a1628]/90" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Content */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -80 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 glass-card-diamond text-sm text-[#d4af37] mb-6"
                        >
                            <Gift className="w-4 h-4" />
                            <span>Ưu đãi chào mừng</span>
                        </motion.div>

                        {/* Title */}
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Nhận ngay{" "}
                            <TextMorphInline className="text-gradient-gold" stagger={0.03}>3,000,000 VND</TextMorphInline>
                        </h2>

                        <p className="text-[#94a3b8] text-lg mb-8">
                            Đặc quyền hoàn tiền vào thẻ tín dụng dành riêng cho chủ thẻ mới
                        </p>

                        {/* Conditions */}
                        <div className="space-y-4 mb-8">
                            <p className="text-sm text-[#64748b] uppercase tracking-wider">
                                Điều kiện nhận thưởng
                            </p>

                            {conditions.map((condition, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-[#c0c0c0] flex-shrink-0" />
                                    <span className="text-white">{condition}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA - Gold Metallic Button */}
                        <motion.a
                            href="#register"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="btn-metallic-gold inline-flex"
                        >
                            Đăng ký nhận ưu đãi
                        </motion.a>
                    </motion.div>

                    {/* Right - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative flex justify-center"
                    >
                        {/* Glow background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-[#c0c0c0]/10 blur-3xl rounded-full" />

                        {/* Card Stack Visual */}
                        <div className="relative">
                            {/* Background Card */}
                            <motion.div
                                animate={{ rotate: -6 }}
                                className="absolute -left-4 top-4 w-72 md:w-80 h-48 md:h-52 rounded-2xl bg-[#1a2a5e]/50 border border-white/10"
                            />

                            {/* Middle Card */}
                            <motion.div
                                animate={{ rotate: -3 }}
                                className="absolute -left-2 top-2 w-72 md:w-80 h-48 md:h-52 rounded-2xl bg-[#1e3a8a]/50 border border-white/10"
                            />

                            {/* Front Card */}
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-72 md:w-80 h-48 md:h-52 rounded-2xl overflow-hidden"
                            >
                                <Image
                                    src="/images/card-front.png"
                                    alt="MB Visa Priority Signature"
                                    fill
                                    className="object-contain"
                                />

                                {/* Light streak */}
                                <div className="light-streak" />
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
