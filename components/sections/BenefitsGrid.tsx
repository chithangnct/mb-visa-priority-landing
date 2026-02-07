"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Banknote, PlaneTakeoff, Sparkles } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TextMorphInline } from "@/components/ui/TextMorph";

const benefits = [
    {
        icon: Banknote,
        value: 12.6,
        suffix: " triệu",
        unit: "VND/năm",
        title: "Hoàn tiền",
        description: "Hoàn tiền lên đến 800,000 VND mỗi kỳ sao kê trên 10 lĩnh vực",
        gradient: "from-[#c0c0c0] to-[#e8e8e8]",
    },
    {
        icon: PlaneTakeoff,
        value: 4,
        prefix: "",
        suffix: "+4",
        unit: "lượt miễn phí",
        title: "Phòng chờ sân bay",
        description: "4 lượt cho chủ thẻ và 4 lượt cho người đi kèm tại 11 phòng chờ",
        gradient: "from-[#1e3a8a] to-[#3b82f6]",
    },
    {
        icon: Sparkles,
        value: 10,
        suffix: "",
        unit: "lĩnh vực",
        title: "Ưu đãi đa dạng",
        description: "Du lịch, ẩm thực, giải trí, thời trang, y tế và nhiều hơn nữa",
        gradient: "from-[#d4af37] to-[#f4d03f]",
    },
];

// Animated counter component
function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(current);
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {prefix}
            {count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
            {suffix}
        </span>
    );
}

export default function BenefitsGrid() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section id="benefits" className="section relative overflow-hidden">
            {/* Consistent dark background - transparent to show global bg */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#040a14]/80 via-[#040a14]/60 to-[#040a14]/80" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#c0c0c0] uppercase tracking-[0.2em] text-sm mb-4">
                        Quyền lợi nổi bật
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Đặc quyền <TextMorphInline className="text-gradient-silver" stagger={0.04}>vượt trội</TextMorphInline>
                    </h2>
                    <p className="text-[#94a3b8] max-w-2xl mx-auto">
                        Thẻ MB Visa Priority Signature mang đến trải nghiệm đẳng cấp với những ưu đãi độc quyền
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    ref={containerRef}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-6 lg:gap-8"
                >
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        const slideDirection = index === 0 ? -80 : index === 2 ? 80 : 0;
                        const slideY = index === 1 ? 60 : 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: slideDirection, y: slideY }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative"
                            >
                                {/* Card Glow */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c0c0c0]/20 to-[#1e3a8a]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Card with Diamond Edge */}
                                <div className="relative glass-card-diamond p-8 h-full">
                                    {/* Icon with Silver Metallic Background + Diagonal Aura */}
                                    <div className="relative inline-flex mb-6">
                                        {/* Diagonal Aura Effect */}
                                        <div className="absolute -inset-2 bg-gradient-to-br from-white/30 via-transparent to-[#c0c0c0]/20 rounded-2xl blur-md transform rotate-12" />
                                        <div className="absolute -inset-1 bg-gradient-to-tr from-[#e8e8e8]/20 via-transparent to-white/10 rounded-xl blur-sm transform -rotate-6" />

                                        {/* Silver Metallic Icon Container */}
                                        <div className="relative p-4 rounded-xl bg-gradient-to-br from-[#d0d0d0] via-[#f0f0f0] to-[#b8b8b8] shadow-lg">
                                            {/* Inner shine effect */}
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/60 via-transparent to-transparent" />
                                            {/* Metallic edge highlight */}
                                            <div className="absolute inset-0 rounded-xl border border-white/40" />
                                            <Icon className="relative w-6 h-6 text-[#1a2a5e]" />
                                        </div>
                                    </div>

                                    {/* Value */}
                                    <div className="mb-4">
                                        <span className="text-4xl md:text-5xl font-bold text-white">
                                            <Counter
                                                value={benefit.value}
                                                suffix={benefit.suffix}
                                                prefix={benefit.prefix}
                                            />
                                        </span>
                                        <span className="block text-sm text-[#94a3b8] mt-1">
                                            {benefit.unit}
                                        </span>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-[#94a3b8] text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>

                                    {/* Decorative Line */}
                                    <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#c0c0c0]/20 to-transparent" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
