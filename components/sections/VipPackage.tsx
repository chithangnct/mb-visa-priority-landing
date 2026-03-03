"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { TextMorphInline } from "@/components/ui/TextMorph";

const packageItems = [
    {
        title: "Hộp thiết kế",
        subtitle: "Ép kim bạc logo · Phủ UV không màu · Họa tiết ép kim bạc",
    },
    {
        title: "Trọn bộ đặc quyền",
        subtitle: "Hộp mở ra thế giới ưu đãi dành riêng cho bạn",
    },
    {
        title: "Thẻ Visa Signature",
        subtitle: "Thiết kế mặt kính đa chiều — tỏa sáng từ mọi góc nhìn",
    },
];

export default function VipPackage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section relative overflow-hidden bg-transparent">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#040a14] via-[#0a1628]/80 to-[#040a14]" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Fixed Image */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -80 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative"
                    >
                        {/* Glow behind image */}
                        <div className="absolute inset-0 bg-gradient-radial from-[#c0c0c0]/8 via-transparent to-transparent blur-3xl scale-110" />

                        {/* Image Container - maintain aspect ratio */}
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src="/images/imagepackage.png"
                                alt="MB Priority Visa Signature - Bộ sưu tập đẳng cấp"
                                className="w-full h-auto rounded-2xl"
                            />
                            {/* Light streak overlay */}
                            <div className="light-streak" />
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <p className="text-[#c0c0c0] uppercase tracking-[0.2em] text-sm mb-4">
                            The Prestige Facet
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-relaxed">
                            <TextMorphInline className="text-white" stagger={0.02}>
                                Bộ sưu tập </TextMorphInline><TextMorphInline className="text-gradient-silver" stagger={0.02} delay={0.25}>
                                đẳng cấp
                            </TextMorphInline>
                        </h2>

                        <p className="text-[#94a3b8] text-lg mb-8 leading-relaxed">
                            Sự khác biệt không cần phô bày — tự khắc tỏa sáng qua đặc quyền.
                            Mỗi chi tiết trong bộ Welcome Kit đều được chế tác tỉ mỉ,
                            phản ánh vị thế của người sở hữu.
                        </p>

                        {/* Package Items List - all visible */}
                        <div className="space-y-4">
                            {packageItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl glass-card-diamond border-[#c0c0c0]/20"
                                >
                                    {/* Number */}
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold bg-gradient-to-br from-[#d0d0d0] via-[#f0f0f0] to-[#b8b8b8] text-[#1a2a5e] flex-shrink-0">
                                        {index + 1}
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <p className="font-semibold text-white">
                                            {item.title}
                                        </p>
                                        <p className="text-sm text-[#94a3b8]">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
