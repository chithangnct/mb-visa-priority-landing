"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Plane,
    UtensilsCrossed,
    Gamepad2,
    GraduationCap,
    Shirt,
    ShoppingBag,
    ShoppingCart,
    Car,
    Stethoscope,
    Cake,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TextMorphInline } from "@/components/ui/TextMorph";

const category10Percent = [
    { icon: Plane, name: "Du lịch" },
    { icon: UtensilsCrossed, name: "Ăn uống" },
    { icon: Gamepad2, name: "Giải trí" },
    { icon: GraduationCap, name: "Bảo hiểm & Giáo dục" },
];

const category2Percent = [
    { icon: Shirt, name: "Thời trang" },
    { icon: ShoppingBag, name: "Siêu thị" },
    { icon: ShoppingCart, name: "Mua sắm online" },
    { icon: Car, name: "Di chuyển" },
    { icon: Stethoscope, name: "Y tế" },
];

export default function CashbackSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selected10, setSelected10] = useState<number | null>(0);
    const [selected2, setSelected2] = useState<number[]>([0, 1]);

    const toggle2Percent = (index: number) => {
        if (selected2.includes(index)) {
            if (selected2.length > 1) {
                setSelected2(selected2.filter((i) => i !== index));
            }
        } else {
            if (selected2.length < 2) {
                setSelected2([...selected2, index]);
            } else {
                setSelected2([selected2[1], index]);
            }
        }
    };

    return (
        <section id="cashback" className="section relative overflow-hidden bg-transparent">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-transparent to-[#0a1628]/90" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-[#c0c0c0] uppercase tracking-[0.2em] text-sm mb-4">
                        Hoàn tiền thông minh
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Hoàn tiền đến{" "}
                        <TextMorphInline className="text-gradient-silver" stagger={0.03}>800,000 VND</TextMorphInline>/kỳ
                    </h2>
                    <p className="text-[#94a3b8] max-w-2xl mx-auto">
                        Chọn lĩnh vực ưu đãi phù hợp với phong cách sống của bạn
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {/* 10% Cashback */}
                    <motion.div variants={staggerItem} className="glass-card-diamond p-8">
                        <div className="flex items-center gap-4 mb-6">
                            {/* Silver Metallic Badge */}
                            <div className="px-4 py-2 bg-gradient-to-r from-[#d0d0d0] via-[#f0f0f0] to-[#b8b8b8] rounded-lg shadow-lg relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-transparent" />
                                <span className="relative text-2xl font-bold text-[#1a2a5e]">10%</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Hoàn tiền</h3>
                                <p className="text-sm text-[#94a3b8]">Tối đa 400k VND/kỳ</p>
                            </div>
                        </div>

                        <p className="text-[#94a3b8] text-sm mb-6">
                            Chọn <span className="text-white font-medium">1 trong 4</span> lĩnh vực
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {category10Percent.map((cat, index) => {
                                const Icon = cat.icon;
                                const isSelected = selected10 === index;
                                return (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setSelected10(index)}
                                        className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${isSelected
                                            ? "bg-[#c0c0c0]/10 border-[#c0c0c0] text-[#e8e8e8]"
                                            : "bg-white/5 border-white/10 text-[#94a3b8] hover:border-white/20"
                                            }`}
                                    >
                                        <Icon className="w-6 h-6" />
                                        <span className="text-sm font-medium">{cat.name}</span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* 2% Cashback */}
                    <motion.div variants={staggerItem} className="glass-card-diamond p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="px-4 py-2 bg-gradient-to-r from-[#c0c0c0] to-[#e8e8e8] rounded-lg">
                                <span className="text-2xl font-bold text-[#0a1628]">2%</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Hoàn tiền</h3>
                                <p className="text-sm text-[#94a3b8]">Tối đa 400k VND/kỳ</p>
                            </div>
                        </div>

                        <p className="text-[#94a3b8] text-sm mb-6">
                            Chọn <span className="text-white font-medium">2 trong 5</span> lĩnh vực
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {category2Percent.map((cat, index) => {
                                const Icon = cat.icon;
                                const isSelected = selected2.includes(index);
                                return (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => toggle2Percent(index)}
                                        className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-300 ${isSelected
                                            ? "bg-[#c0c0c0]/10 border-[#c0c0c0] text-[#c0c0c0]"
                                            : "bg-white/5 border-white/10 text-[#94a3b8] hover:border-white/20"
                                            }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="text-xs font-medium text-center">{cat.name}</span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Birthday Bonus */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-4 glass-card-diamond px-8 py-6">
                        {/* Silver Metallic Icon */}
                        <div className="relative inline-flex">
                            <div className="absolute -inset-1 bg-gradient-to-br from-white/30 via-transparent to-[#c0c0c0]/20 rounded-full blur-sm transform rotate-12" />
                            <div className="relative p-3 rounded-full bg-gradient-to-br from-[#d0d0d0] via-[#f0f0f0] to-[#b8b8b8] shadow-lg">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/60 via-transparent to-transparent" />
                                <Cake className="relative w-6 h-6 text-[#1a2a5e]" />
                            </div>
                        </div>
                        <div className="text-left">
                            <p className="text-[#94a3b8] text-sm">Kỳ sao kê có ngày sinh nhật</p>
                            <p className="text-white font-semibold">
                                Tỷ lệ hoàn tiền{" "}
                                <span className="text-gradient-silver text-xl">×2</span>{" "}
                                (tối đa 20%)
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
