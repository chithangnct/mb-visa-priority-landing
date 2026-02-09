"use client";

import { Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#0a1628] border-t border-white/10">
            <div className="container-custom pt-32 pb-10">
                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <a href="#">
                        <img
                            src="/images/logo-mb-priority.png"
                            alt="MB Priority Visa Signature"
                            className="h-10 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </a>
                </div>

                {/* Title */}
                <h4 className="text-center text-white font-semibold text-xl mb-8">
                    Trung tâm dịch vụ khách hàng 24/7
                </h4>

                {/* Contact Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {/* Hotline */}
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-[#c0c0c0]/30 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-[#c0c0c0]" />
                        </div>
                        <div>
                            <a href="tel:1900545426" className="text-[#94a3b8] hover:text-white transition-colors text-sm block">
                                <span className="text-white font-semibold">Hotline</span>{" "}
                                1900 545426
                            </a>
                            <a href="tel:+842437674050" className="text-[#94a3b8] hover:text-white transition-colors text-sm block">
                                (84-24) 3767 4050 <span className="text-[#64748b]">(quốc tế gọi về)</span>
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-[#c0c0c0]/30 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-[#c0c0c0]" />
                        </div>
                        <div>
                            <a href="mailto:mb247@mbbank.com.vn" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                                <span className="text-white font-semibold">Email</span>{" "}
                                mb247@mbbank.com.vn
                            </a>
                        </div>
                    </div>

                    {/* Website */}
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-[#c0c0c0]/30 flex items-center justify-center flex-shrink-0">
                            <Globe className="w-5 h-5 text-[#c0c0c0]" />
                        </div>
                        <div>
                            <a
                                href="https://www.mbbank.com.vn/Contact"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#94a3b8] hover:text-white transition-colors text-sm"
                            >
                                <span className="text-white font-semibold">Liên hệ</span>{" "}
                                www.mbbank.com.vn/Contact
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 pt-6 border-t border-white/5">
                    <p className="text-[#64748b] text-sm text-center">
                        © {new Date().getFullYear()} MB Bank. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
