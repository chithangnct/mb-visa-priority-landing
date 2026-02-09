"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Hotel, Plane, Globe } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TextMorphInline } from "@/components/ui/TextMorph";

const travelBenefits = [
    {
        icon: Hotel,
        title: "Agoda",
        discount: "Giảm đến 20%",
        description: "Đặt phòng khách sạn trên toàn cầu",
    },
    {
        icon: Plane,
        title: "Visa Dặm Bay",
        discount: "2 dặm / 20,000 đồng",
        description: "Nhận dặm bay cho chi tiêu nước ngoài",
    },
    {
        icon: Globe,
        title: "Phí ngoại tệ",
        discount: "Chỉ 1.5%",
        description: "Phí giao dịch ngoại tệ cạnh tranh",
    },
];

export default function TravelBenefits() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <section id="travel" className="section relative overflow-hidden bg-accent-section">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-transparent to-[#0a1628]/95" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-12"
                >
                    <p className="text-[#c0c0c0] uppercase tracking-[0.2em] text-sm mb-4">
                        Đồng hành trên mọi hành trình
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        <TextMorphInline className="text-white" stagger={0.04}>Ưu đãi </TextMorphInline><TextMorphInline className="text-gradient-silver" stagger={0.04} delay={0.3}>du lịch</TextMorphInline>
                    </h2>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {travelBenefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        const slideDirection = index === 0 ? -80 : index === 2 ? 80 : 0;
                        const slideY = index === 1 ? 60 : 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: slideDirection, y: slideY }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: false, margin: "-80px" }}
                                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className="glass-card-diamond p-6 flex items-center gap-4 group cursor-default"
                            >
                                {/* Silver Metallic Icon with Diagonal Aura */}
                                <div className="relative inline-flex">
                                    <div className="absolute -inset-2 bg-gradient-to-br from-white/30 via-transparent to-[#c0c0c0]/20 rounded-2xl blur-md transform rotate-12" />
                                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-[#d0d0d0] via-[#f0f0f0] to-[#b8b8b8] shadow-lg shimmer-auto group-hover:scale-110 transition-transform">
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/60 via-transparent to-transparent" />
                                        <Icon className="relative w-6 h-6 text-[#1a2a5e]" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white font-semibold">{benefit.title}</p>
                                    <p className="text-xl font-bold text-gradient-silver">{benefit.discount}</p>
                                    <p className="text-sm text-[#94a3b8]">{benefit.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
