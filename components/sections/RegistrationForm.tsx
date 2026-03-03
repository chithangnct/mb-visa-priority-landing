"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Headphones } from "lucide-react";
import { TextMorphInline } from "@/components/ui/TextMorph";

export default function RegistrationForm() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <section id="register" className="section relative overflow-hidden bg-transparent">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/95 via-[#0a1628]/90 to-[#0a1628]/95" />

            <div className="container-custom relative z-10">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-center mb-12"
                    >
                        <p className="text-[#c0c0c0] uppercase tracking-[0.2em] text-sm mb-4">
                            Liên hệ ngay
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            <TextMorphInline className="text-white" stagger={0.05}>Tư vấn </TextMorphInline><TextMorphInline className="text-gradient-gold" stagger={0.05} delay={0.3}>sản phẩm</TextMorphInline>
                        </h2>
                        <p className="text-[#94a3b8]">
                            Để được tư vấn về sản phẩm và phát hành thẻ
                        </p>
                    </motion.div>

                    {/* Contact Box */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="glass-card-diamond p-8 md:p-10 space-y-8"
                    >
                        {/* Hotline Section */}
                        <div className="space-y-5">
                            {/* Domestic Hotline */}
                            <div className="flex items-start gap-4">
                                <div className="relative inline-flex flex-shrink-0">
                                    <div className="absolute -inset-2 bg-gradient-to-br from-white/30 via-transparent to-[#c0c0c0]/20 rounded-2xl blur-md transform rotate-12" />
                                    <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#d0d0d0] via-[#f0f0f0] to-[#b8b8b8] shadow-lg shimmer-auto">
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/60 via-transparent to-transparent" />
                                        <Phone className="relative w-5 h-5 text-[#1a2a5e]" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-[#94a3b8] mb-1">Hotline trong nước</p>
                                    <a href="tel:02422048899" className="text-2xl font-bold text-white hover:text-[#c0c0c0] transition-colors">
                                        024 2204 8899
                                    </a>
                                </div>
                            </div>

                            {/* International Hotline */}
                            <div className="flex items-start gap-4">
                                <div className="relative inline-flex flex-shrink-0">
                                    <div className="absolute -inset-2 bg-gradient-to-br from-white/30 via-transparent to-[#c0c0c0]/20 rounded-2xl blur-md transform rotate-12" />
                                    <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#d0d0d0] via-[#f0f0f0] to-[#b8b8b8] shadow-lg shimmer-auto">
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/60 via-transparent to-transparent" />
                                        <Headphones className="relative w-5 h-5 text-[#1a2a5e]" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-[#94a3b8] mb-1">Hotline quốc tế</p>
                                    <a href="tel:+842437674050" className="text-2xl font-bold text-white hover:text-[#c0c0c0] transition-colors">
                                        (84-24) 3767 4050
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-[#c0c0c0]/20 to-transparent" />

                        {/* Visit Branch */}
                        <div className="flex items-start gap-4">
                            <div className="relative inline-flex flex-shrink-0">
                                <div className="absolute -inset-2 bg-gradient-to-br from-white/30 via-transparent to-[#c0c0c0]/20 rounded-2xl blur-md transform rotate-12" />
                                <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#d0d0d0] via-[#f0f0f0] to-[#b8b8b8] shadow-lg shimmer-auto">
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/60 via-transparent to-transparent" />
                                    <MapPin className="relative w-5 h-5 text-[#1a2a5e]" />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-[#94a3b8] mb-1">Hoặc đến trực tiếp</p>
                                <p className="text-white font-semibold text-lg">
                                    Chi nhánh, Phòng Giao dịch MB gần nhất
                                </p>
                                <p className="text-[#94a3b8] text-sm mt-1">
                                    để được hỗ trợ tư vấn và phát hành thẻ
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
