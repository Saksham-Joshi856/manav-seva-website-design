import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ImpactSection } from "@/components/home/ImpactSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ImpactSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
