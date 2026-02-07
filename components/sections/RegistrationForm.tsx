"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { TextMorphInline } from "@/components/ui/TextMorph";

// Form Schema
const formSchema = z.object({
    fullName: z.string().min(2, "Vui lòng nhập họ tên"),
    email: z.string().email("Email không hợp lệ"),
    phone: z.string().regex(/^(0|\+84)[0-9]{9,10}$/, "Số điện thoại không hợp lệ"),
    income: z.string().min(1, "Vui lòng chọn mức thu nhập"),
});

type FormData = z.infer<typeof formSchema>;

const incomeOptions = [
    { value: "under-30m", label: "Dưới 30 triệu/tháng" },
    { value: "30m-50m", label: "30 - 50 triệu/tháng" },
    { value: "50m-100m", label: "50 - 100 triệu/tháng" },
    { value: "above-100m", label: "Trên 100 triệu/tháng" },
];

export default function RegistrationForm() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setSubmitStatus("loading");

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus("success");
                reset();
                // Reset after 5 seconds
                setTimeout(() => setSubmitStatus("idle"), 5000);
            } else {
                setSubmitStatus("error");
            }
        } catch {
            setSubmitStatus("error");
        }
    };

    return (
        <section id="register" className="section relative overflow-hidden bg-transparent">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/95 via-[#0a1628]/90 to-[#0a1628]/95" />

            <div className="container-custom relative z-10">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <p className="text-[#c0c0c0] uppercase tracking-[0.2em] text-sm mb-4">
                            Đăng ký ngay
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Trở thành chủ thẻ <TextMorphInline className="text-gradient-gold" stagger={0.05}>VIP</TextMorphInline>
                        </h2>
                        <p className="text-[#94a3b8]">
                            Để lại thông tin, chúng tôi sẽ liên hệ tư vấn trong 24h
                        </p>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="glass-card-diamond p-8 md:p-10"
                    >
                        {submitStatus === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", delay: 0.2 }}
                                    className="inline-flex p-4 rounded-full bg-green-500/10 mb-4"
                                >
                                    <CheckCircle2 className="w-12 h-12 text-green-400" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Đăng ký thành công!
                                </h3>
                                <p className="text-[#94a3b8]">
                                    Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                                        Họ và tên
                                    </label>
                                    <input
                                        {...register("fullName")}
                                        type="text"
                                        placeholder="Nguyễn Văn A"
                                        className="input-premium"
                                    />
                                    {errors.fullName && (
                                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.fullName.message}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                                        Email
                                    </label>
                                    <input
                                        {...register("email")}
                                        type="email"
                                        placeholder="email@example.com"
                                        className="input-premium"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                                        Số điện thoại
                                    </label>
                                    <input
                                        {...register("phone")}
                                        type="tel"
                                        placeholder="0912 345 678"
                                        className="input-premium"
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                {/* Income */}
                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                                        Mức thu nhập hàng tháng
                                    </label>
                                    <select {...register("income")} className="input-premium">
                                        <option value="">Chọn mức thu nhập</option>
                                        {incomeOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.income && (
                                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.income.message}
                                        </p>
                                    )}
                                </div>

                                {/* Error Message */}
                                {submitStatus === "error" && (
                                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                        Đã có lỗi xảy ra. Vui lòng thử lại sau.
                                    </div>
                                )}

                                {/* Submit Button - Metallic Effect */}
                                <button
                                    type="submit"
                                    disabled={submitStatus === "loading"}
                                    className="w-full btn-metallic py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {submitStatus === "loading" ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Đang gửi...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <Send className="w-5 h-5" />
                                            Đăng ký nhận tư vấn
                                        </span>
                                    )}
                                </button>

                                {/* Privacy Note */}
                                <p className="text-xs text-[#64748b] text-center">
                                    Bằng việc đăng ký, bạn đồng ý với{" "}
                                    <a href="#" className="text-[#c0c0c0] hover:underline">
                                        Điều khoản sử dụng
                                    </a>{" "}
                                    và{" "}
                                    <a href="#" className="text-[#c0c0c0] hover:underline">
                                        Chính sách bảo mật
                                    </a>{" "}
                                    của MB Bank
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
