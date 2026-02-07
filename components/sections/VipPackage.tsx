"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { TextMorphInline } from "@/components/ui/TextMorph";

const packageItems = [
    {
        image: "/images/package/box-closed.png",
        title: "Hộp thiết kế",
        subtitle: "Ép kim bạc logo · Phủ UV không màu · Họa tiết ép kim bạc",
    },
    {
        image: "/images/package/box-open.png",
        title: "Trọn bộ đặc quyền",
        subtitle: "Hộp mở ra thế giới ưu đãi dành riêng cho bạn",
    },
    {
        image: "/images/package/card.png",
        title: "Thẻ Visa Signature",
        subtitle: "Thiết kế mặt kính đa chiều — tỏa sáng từ mọi góc nhìn",
    },
    {
        image: "/images/package/card-holder.png",
        title: "Ví đựng thẻ",
        subtitle: "Da cao cấp · Dập logo MB Priority · Sang trọng & tinh tế",
    },
];

export default function VipPackage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    // Auto-cycle through items
    useEffect(() => {
        if (!isInView) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % packageItems.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <section className="section relative overflow-hidden bg-transparent">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#040a14] via-[#0a1628]/80 to-[#040a14]" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Image Showcase */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -80 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative"
                    >
                        {/* Glow behind image */}
                        <div className="absolute inset-0 bg-gradient-radial from-[#c0c0c0]/8 via-transparent to-transparent blur-3xl scale-110" />

                        {/* Image Container */}
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={packageItems[currentIndex].image}
                                    alt={packageItems[currentIndex].title}
                                    initial={{ opacity: 0, scale: 1.08 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {/* Light streak overlay */}
                            <div className="light-streak" />
                        </div>

                        {/* Progress Indicators */}
                        <div className="flex items-center justify-center gap-3 mt-6">
                            {packageItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className="group flex flex-col items-center gap-2"
                                >
                                    <div
                                        className={`h-1 rounded-full transition-all duration-500 ${index === currentIndex
                                            ? "w-10 bg-gradient-to-r from-[#c0c0c0] to-white"
                                            : "w-6 bg-white/20 group-hover:bg-white/40"
                                            }`}
                                    />
                                    <span
                                        className={`text-xs transition-all duration-300 ${index === currentIndex
                                            ? "text-white/80"
                                            : "text-white/30 group-hover:text-white/50"
                                            }`}
                                    >
                                        {item.title}
                                    </span>
                                </button>
                            ))}
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
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            <TextMorphInline className="text-white" stagger={0.04}>
                                Bộ sưu tập </TextMorphInline><TextMorphInline className="text-gradient-silver" stagger={0.04} delay={0.5}>
                                đẳng cấp
                            </TextMorphInline>
                        </h2>

                        <p className="text-[#94a3b8] text-lg mb-8 leading-relaxed">
                            Sự khác biệt không cần phô bày — tự khắc tỏa sáng qua đặc quyền.
                            Mỗi chi tiết trong bộ Welcome Kit đều được chế tác tỉ mỉ,
                            phản ánh vị thế của người sở hữu.
                        </p>

                        {/* Package Items List */}
                        <div className="space-y-4">
                            {packageItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-500 ${index === currentIndex
                                        ? "glass-card-diamond border-[#c0c0c0]/30"
                                        : "bg-transparent hover:bg-white/5"
                                        }`}
                                    animate={
                                        index === currentIndex
                                            ? { x: 0, opacity: 1 }
                                            : { x: 0, opacity: 0.6 }
                                    }
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Number */}
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500 ${index === currentIndex
                                            ? "bg-gradient-to-br from-[#d0d0d0] via-[#f0f0f0] to-[#b8b8b8] text-[#1a2a5e]"
                                            : "bg-white/10 text-white/40"
                                            }`}
                                    >
                                        {index + 1}
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <p className={`font-semibold transition-colors duration-300 ${index === currentIndex ? "text-white" : "text-white/50"
                                            }`}>
                                            {item.title}
                                        </p>
                                        <p className={`text-sm transition-colors duration-300 ${index === currentIndex ? "text-[#94a3b8]" : "text-white/25"
                                            }`}>
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
