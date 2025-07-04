import { LpNavbar5 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-5";
import { HeroSection3 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-3";
import { FeatureSection10 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section-10";
import { PricingSection3 } from "@/components/pro-blocks/landing-page/pricing-sections/pricing-section-3";
import { CtaSection7 } from "@/components/pro-blocks/landing-page/cta-sections/cta-section-7";
import { Footer3 } from "@/components/pro-blocks/landing-page/footers/footer-3";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LpNavbar5 />
      <HeroSection3 />
      <FeatureSection10 />
      <PricingSection3 />
      <CtaSection7 />
      <Footer3 />
    </div>
  );
}
