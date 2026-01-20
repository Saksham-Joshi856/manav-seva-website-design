import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ImpactSection } from "@/components/home/ImpactSection";
import { CTASection } from "@/components/home/CTASection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const Index = () => {
  return (
    <Layout>
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>

      <ScrollReveal>
        <AboutPreview />
      </ScrollReveal>

      <ScrollReveal>
        <ServicesPreview />
      </ScrollReveal>

      <ScrollReveal>
        <ImpactSection />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection />
      </ScrollReveal>

    </Layout>
  );
};

export default Index;
