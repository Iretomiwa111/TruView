import Hero from "@/components/home/Hero";
import TrustPillars from "@/components/home/trust-pillars";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import StatsSection from "@/components/home/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustPillars/>
      <AboutPreview/>
      <ServicesPreview/>
      <StatsSection/>
    </>
  );
}