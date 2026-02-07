"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
    products: [
        { label: "Thẻ tín dụng", href: "#" },
        { label: "Thẻ ghi nợ", href: "#" },
        { label: "Vay tiêu dùng", href: "#" },
        { label: "Tài khoản", href: "#" },
    ],
    support: [
        { label: "Câu hỏi thường gặp", href: "#" },
        { label: "Biểu phí", href: "#" },
        { label: "Điều khoản sử dụng", href: "#" },
        { label: "Chính sách bảo mật", href: "#" },
    ],
};

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
    return (
        <footer className="relative bg-[#0a1628] border-t border-white/5">
            <div className="container-custom py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo & Contact */}
                    <div className="lg:col-span-2">
                        {/* Logo */}
                        <a href="#" className="inline-block mb-6">
                            <img
                                src="/images/logo-mb-priority.png"
                                alt="MB Priority Visa Signature"
                                className="h-12 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </a>

                        <p className="text-[#94a3b8] mb-6 max-w-sm">
                            MB Visa Priority Signature - Thẻ tín dụng cao cấp dành cho khách hàng ưu tiên với đặc quyền vượt trội.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a href="tel:19006232" className="flex items-center gap-3 text-[#94a3b8] hover:text-white transition-colors">
                                <Phone className="w-4 h-4 text-[#c0c0c0]" />
                                <span>1900 6232</span>
                            </a>
                            <a href="mailto:contact@mbbank.com.vn" className="flex items-center gap-3 text-[#94a3b8] hover:text-white transition-colors">
                                <Mail className="w-4 h-4 text-[#c0c0c0]" />
                                <span>contact@mbbank.com.vn</span>
                            </a>
                            <p className="flex items-start gap-3 text-[#94a3b8]">
                                <MapPin className="w-4 h-4 text-[#c0c0c0] mt-1 flex-shrink-0" />
                                <span>21 Cát Linh, Đống Đa, Hà Nội</span>
                            </p>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Sản phẩm</h4>
                        <ul className="space-y-3">
                            {footerLinks.products.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Hỗ trợ</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-[#64748b] text-sm text-center md:text-left">
                            © {new Date().getFullYear()} MB Bank. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.1 }}
                                        className="p-2 rounded-lg bg-white/5 text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Visa Logo */}
                        <div className="flex items-center gap-2 text-[#64748b] text-sm">
                            <span>Powered by</span>
                            <div className="px-2 py-1 bg-white/10 rounded">
                                <span className="font-bold text-white">VISA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
