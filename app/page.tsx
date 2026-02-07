import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import WelcomeOffer from "@/components/sections/WelcomeOffer";
import CashbackSection from "@/components/sections/CashbackSection";
import LoungeAccess from "@/components/sections/LoungeAccess";
import LifestylePrivileges from "@/components/sections/LifestylePrivileges";
import TravelBenefits from "@/components/sections/TravelBenefits";
import RegistrationForm from "@/components/sections/RegistrationForm";
import VipPackage from "@/components/sections/VipPackage";
import AppShell from "@/components/ui/AppShell";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <AppShell>
      <div className="bg-luxury-global min-h-screen">
        <Header />

        <main>
          {/* Hero - 3D Card với The Prestige Facet */}
          <Hero />

          {/* Bộ sưu tập VIP Package */}
          <VipPackage />

          {/* 3 Key Benefits với animated counter */}
          <BenefitsGrid />

          {/* Ưu đãi chào mừng 3,000,000 VND */}
          <WelcomeOffer />

          {/* Hoàn tiền 10% + 2% với interactive selector */}
          <CashbackSection />

          {/* Phòng chờ sân bay 4+4 */}
          <LoungeAccess />

          {/* Fine Dining, Fashion, Golf */}
          <LifestylePrivileges />

          {/* Travel: Agoda, Visa Miles, FX */}
          <TravelBenefits />

          {/* Form đăng ký */}
          <RegistrationForm />
        </main>

        <Footer />
      </div>
      <BackToTop />
    </AppShell>
  );
}

