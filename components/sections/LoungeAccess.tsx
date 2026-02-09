"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PlaneTakeoff, Users, Plus, MapPin } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TextMorphInline } from "@/components/ui/TextMorph";

const lounges = [
    "Nội Bài T1", "Nội Bài T2", "Tân Sơn Nhất T1",
    "Tân Sơn Nhất T2", "Đà Nẵng", "Cam Ranh",
    "Phú Quốc", "Cát Bi", "Vinh", "Pleiku", "Liên Khương"
];

export default function LoungeAccess() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <section id="lounge" className="section relative overflow-hidden bg-accent-section">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/95 via-transparent to-[#0a1628]/95" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Stats */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -80 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <p className="text-[#c0c0c0] uppercase tracking-[0.2em] text-sm mb-4">
                            Đồng hành mọi chuyến đi
                        </p>

                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            <TextMorphInline className="text-gradient-silver" stagger={0.03}>Phòng chờ sân bay</TextMorphInline>
                            <br />
                            <TextMorphInline className="text-white" stagger={0.03} delay={0.55}>hạng thương gia</TextMorphInline>
                        </h2>

                        <p className="text-[#94a3b8] text-lg mb-8">
                            Trải nghiệm không gian phòng chờ VIP đẳng cấp tại các sân bay Việt Nam
                        </p>

                        {/* Stats Grid */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="grid grid-cols-2 gap-6 mb-8"
                        >
                            <motion.div variants={staggerItem} className="glass-card-diamond p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-[#c0c0c0]/10">
                                        <Users className="w-5 h-5 text-[#c0c0c0]" />
                                    </div>
                                    <span className="text-[#94a3b8] text-sm">Chủ thẻ</span>
                                </div>
                                <p className="text-4xl font-bold text-white">4</p>
                                <p className="text-sm text-[#c0c0c0]">lượt miễn phí/năm</p>
                            </motion.div>

                            <motion.div variants={staggerItem} className="glass-card-diamond p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-[#d4af37]/10">
                                        <Users className="w-5 h-5 text-[#d4af37]" />
                                    </div>
                                    <span className="text-[#94a3b8] text-sm">Người đi kèm</span>
                                </div>
                                <p className="text-4xl font-bold text-white">+4</p>
                                <p className="text-sm text-[#d4af37]">lượt miễn phí/năm</p>
                            </motion.div>
                        </motion.div>

                        {/* Additional info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-4 p-4 glass-card-diamond"
                        >
                            <Plus className="w-5 h-5 text-[#c0c0c0]" />
                            <span className="text-[#94a3b8]">
                                Tích lũy thêm tới <span className="text-white font-semibold">24 lượt/năm</span> khi chi tiêu hoặc quy đổi <span className="text-white font-semibold">12 lượt</span> dịch vụ đón tiễn ưu tiên (flash-track)
                                <br />
                                <span className="text-xs">(Tặng thêm mỗi lượt trên mỗi 20 triệu đồng chi tiêu)</span>
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Right - Lounge Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative"
                    >
                        {/* Decorative glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#1e3a8a]/30 to-[#c0c0c0]/10 blur-3xl rounded-full" />

                        <div className="relative glass-card-diamond p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-[#c0c0c0] to-[#e8e8e8]">
                                    <PlaneTakeoff className="w-6 h-6 text-[#0a1628]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">11 Phòng chờ</h3>
                                    <p className="text-sm text-[#94a3b8]">Áp dụng với các chuyến bay trong nước</p>
                                </div>
                            </div>

                            {/* Lounge List */}
                            <div className="flex flex-wrap gap-2">
                                {lounges.map((lounge, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.4 + index * 0.05 }}
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(192, 192, 192, 0.1)" }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-[#94a3b8] hover:text-white transition-colors cursor-default"
                                    >
                                        <MapPin className="w-3 h-3" />
                                        {lounge}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Note */}
                            <p className="mt-6 text-xs text-[#64748b] italic">
                                * Danh sách phòng chờ có thể thay đổi theo chương trình hợp tác
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
