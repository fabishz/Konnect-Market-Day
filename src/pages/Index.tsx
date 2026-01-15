import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CountdownSection } from "@/components/home/CountdownSection";
import { FeaturedVendorsSection } from "@/components/home/FeaturedVendorsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { SponsorsSection } from "@/components/home/SponsorsSection";
import { VendorCTASection } from "@/components/home/VendorCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CountdownSection />
        <AboutSection />
        <FeaturedVendorsSection />
        <VendorCTASection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
