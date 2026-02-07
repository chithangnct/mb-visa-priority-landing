import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

// Fonts
const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "MB Visa Priority Signature | Đặc Quyền Thượng Lưu",
  description:
    "Thẻ tín dụng MB Visa Priority Signature - Đặc quyền toàn diện, chia sẻ cùng người thân. Hoàn tiền đến 12.6 triệu/năm, phòng chờ sân bay miễn phí, ưu đãi 10 lĩnh vực.",
  keywords: [
    "MB Bank",
    "Visa Signature",
    "thẻ tín dụng cao cấp",
    "thẻ VIP",
    "Priority",
    "phòng chờ sân bay",
    "hoàn tiền",
  ],
  openGraph: {
    title: "MB Visa Priority Signature | Đặc Quyền Thượng Lưu",
    description:
      "Đặc quyền toàn diện, chia sẻ cùng người thân. Hoàn tiền đến 12.6 triệu/năm.",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/images/card-front.png",
        width: 1200,
        height: 630,
        alt: "MB Visa Priority Signature Card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MB Visa Priority Signature",
    description: "Đặc quyền thượng lưu, chia sẻ cùng người thân",
    images: ["/images/card-front.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}
    >
      <body className={inter.className}>
        {/* Noise Overlay for luxury texture */}
        <div className="noise-overlay fixed inset-0 z-50 pointer-events-none" />

        {children}
      </body>
    </html>
  );
}
