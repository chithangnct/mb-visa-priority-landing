"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UtensilsCrossed, ShoppingBag, Trophy } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TextMorphInline } from "@/components/ui/TextMorph";

const privileges = [
    {
        icon: UtensilsCrossed,
        title: "Fine Dining",
        discount: "-50%",
        description: "Giảm 50% tại hơn 30 nhà hàng cao cấp",
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
        description: "Giảm 500,000 VND phí chơi Golf",
        details: [
            "60 sân Golf toàn quốc",
            "Đặt trước qua tổng đài",
            "Thanh toán bằng thẻ hợp lệ",
            "Tối thiểu 2 người",
        ],
        note: "Đặt trước qua tổng đài MB",
    },
];

export default function LifestylePrivileges() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section relative overflow-hidden bg-transparent">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-transparent to-[#0a1628]/90" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-[#c0c0c0] uppercase tracking-[0.2em] text-sm mb-4">
                        Phong cách sống thượng lưu
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Ưu đãi <TextMorphInline className="text-gradient-silver" stagger={0.04}>đẳng cấp</TextMorphInline>
                    </h2>
                    <p className="text-[#94a3b8] max-w-2xl mx-auto">
                        Trải nghiệm cuộc sống sang trọng với những đặc quyền dành riêng cho chủ thẻ
                    </p>
                </motion.div>

                {/* Privileges Grid */}
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-6 lg:gap-8"
                >
                    {privileges.map((privilege, index) => {
                        const Icon = privilege.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{ y: -8 }}
                                className="group relative"
                            >
                                {/* Glow Effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c0c0c0]/10 to-[#1e3a8a]/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative glass-card-diamond p-8 h-full flex flex-col">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        {/* Silver Metallic Icon with Diagonal Aura */}
                                        <div className="relative inline-flex">
                                            <div className="absolute -inset-2 bg-gradient-to-br from-white/30 via-transparent to-[#c0c0c0]/20 rounded-2xl blur-md transform rotate-12" />
                                            <div className="relative p-4 rounded-xl bg-gradient-to-br from-[#d0d0d0] via-[#f0f0f0] to-[#b8b8b8] shadow-lg">
                                                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/60 via-transparent to-transparent" />
                                                <Icon className="relative w-6 h-6 text-[#1a2a5e]" />
                                            </div>
                                        </div>
                                        <span className="text-2xl font-bold text-white">{privilege.discount}</span>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {privilege.title}
                                    </h3>
                                    <p className="text-[#94a3b8] text-sm mb-6">
                                        {privilege.description}
                                    </p>

                                    {/* Details */}
                                    <ul className="space-y-2 mb-6 flex-grow">
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
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
