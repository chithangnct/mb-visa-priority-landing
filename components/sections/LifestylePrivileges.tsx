"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { UtensilsCrossed, ShoppingBag, Trophy } from "lucide-react";
import { TextMorphInline } from "@/components/ui/TextMorph";

const privileges = [
    {
        icon: UtensilsCrossed,
        title: "Fine Dining",
        discount: "-50%",
        description: "Giảm 50% tại hơn 30 nhà hàng cao cấp",
        image: "/images/lifestyle-dining.png",
        details: [
            "Yen Sushi & Sake Pub",
            "Chapter Dining & Grill",
            "Masu, Barbak",
            "Tặng 1 món tại Starbucks sân bay",
        ],
        note: "Đặt trước qua tổng đài 8428 7301 2700",
    },
    {
        icon: ShoppingBag,
        title: "Luxury Fashion",
        discount: "-5%",
        description: "Giảm ngay 5% tại các thương hiệu xa xỉ",
        image: "/images/lifestyle-fashion.png",
        details: [
            "Loewe, Diptyque",
            "Kenzo, Longchamp",
            "Marc Jacobs, BOSS, HUGO",
            "Nâng hạng tại Lotte Duty Free Korea",
        ],
        note: "Thanh toán trực tiếp tại cửa hàng Tam Sơn",
    },
    {
        icon: Trophy,
        title: "Golf Privilege",
        discount: "-500K",
        description: "Giảm 500,000 VNĐ phí chơi Golf",
        image: "/images/lifestyle-golf.png",
        details: [
            "60 sân Golf toàn quốc",
            "Đặt trước qua tổng đài",
            "Thanh toán bằng thẻ hợp lệ",
            "Tối thiểu 2 người",
        ],
        note: "Đặt trước qua tổng đài MB",
    },
];

// Single privilege card component
function PrivilegeCard({
    privilege,
    compact = false,
}: {
    privilege: (typeof privileges)[0];
    compact?: boolean;
}) {
    const Icon = privilege.icon;
    return (
        <div className="relative glass-card-diamond p-6 md:p-8 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                {/* Silver Metallic Icon */}
                <div className="relative inline-flex">
                    <div className="absolute -inset-2 bg-gradient-to-br from-white/30 via-transparent to-[#c0c0c0]/20 rounded-2xl blur-md transform rotate-12" />
                    <div className="relative p-3 md:p-4 rounded-xl bg-gradient-to-br from-[#d0d0d0] via-[#f0f0f0] to-[#b8b8b8] shadow-lg shimmer-auto">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/60 via-transparent to-transparent" />
                        <Icon className="relative w-5 h-5 md:w-6 md:h-6 text-[#1a2a5e]" />
                    </div>
                </div>
                <span className="text-xl md:text-2xl font-bold text-white">
                    {privilege.discount}
                </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                {privilege.title}
            </h3>
            <p className="text-[#94a3b8] text-sm mb-4">{privilege.description}</p>

            {/* Details */}
            {!compact && (
                <>
                    <ul className="space-y-2 mb-4 flex-grow">
                        {privilege.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#c0c0c0]/50" />
                                <span className="text-[#94a3b8]">{detail}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Note */}
                    <p className="text-xs text-[#64748b] pt-4 border-t border-white/5">
                        {privilege.note}
                    </p>
                </>
            )}
        </div>
    );
}

export default function LifestylePrivileges() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    const [activeStep, setActiveStep] = useState(-1);

    // Auto-cycle: show each card one by one, then show all
    useEffect(() => {
        if (!isInView) {
            setActiveStep(-1);
            return;
        }

        setActiveStep(0);

        const timers = [
            setTimeout(() => setActiveStep(1), 3500),
            setTimeout(() => setActiveStep(2), 7000),
            setTimeout(() => setActiveStep(3), 10500), // 3 = show all
        ];

        return () => timers.forEach(clearTimeout);
    }, [isInView]);

    const showAll = activeStep === 3;

    return (
        <section id="lifestyle" className="section relative overflow-hidden bg-transparent">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-transparent to-[#0a1628]/90" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <p className="text-[#c0c0c0] uppercase tracking-[0.2em] text-sm mb-4">
                        Phong cách sống thượng lưu
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        <TextMorphInline className="text-white" stagger={0.04}>Ưu đãi </TextMorphInline><TextMorphInline
                            className="text-gradient-silver"
                            stagger={0.04}
                            delay={0.3}
                        >
                            đẳng cấp
                        </TextMorphInline>
                    </h2>
                    <p className="text-[#94a3b8] max-w-2xl mx-auto">
                        Trải nghiệm cuộc sống sang trọng với những đặc quyền dành riêng cho
                        chủ thẻ
                    </p>
                </motion.div>

                {/* Sequential Cards with Images → then All Cards Grid */}
                <AnimatePresence mode="wait">
                    {!showAll && activeStep >= 0 && activeStep <= 2 ? (
                        <motion.div
                            key={`step-${activeStep}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="grid lg:grid-cols-[1fr_2fr] gap-8 items-stretch"
                        >
                            {/* Left - Card (1/3) */}
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                            >
                                <PrivilegeCard privilege={privileges[activeStep]} />
                            </motion.div>

                            {/* Right - Image (2/3) */}
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.2,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className="relative rounded-2xl overflow-hidden aspect-[2/1] lg:aspect-auto"
                            >
                                <img
                                    src={privileges[activeStep].image}
                                    alt={privileges[activeStep].title}
                                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/40 via-transparent to-transparent rounded-2xl" />
                                {/* Light streak */}
                                <div className="light-streak" />
                            </motion.div>
                        </motion.div>
                    ) : showAll ? (
                        <motion.div
                            key="all-cards"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="grid md:grid-cols-3 gap-6 lg:gap-8"
                        >
                            {privileges.map((privilege, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                    whileHover={{ y: -8 }}
                                    className="group relative"
                                >
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c0c0c0]/10 to-[#1e3a8a]/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <PrivilegeCard privilege={privilege} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                {/* Step Indicators */}
                <div className="flex items-center justify-center gap-3 mt-8">
                    {[0, 1, 2, 3].map((step) => (
                        <button
                            key={step}
                            onClick={() => setActiveStep(step)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${step === activeStep
                                ? "w-10 bg-gradient-to-r from-[#c0c0c0] to-white"
                                : "w-4 bg-white/20 hover:bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
