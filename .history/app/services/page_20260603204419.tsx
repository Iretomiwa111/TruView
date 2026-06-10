import ProcessSection from "@/components/services/process-section";
import ServicesHero from "@/components/services/services-hero";
import ServicesGrid from "@/components/services/services-grid";
import CommunityCTA from "@/components/home/CTA";
import Testimonials from "@/components/home/Testimonials";

export default function Services() {
  return (
    <>

    <ServicesHero/>
    <ServicesGrid/>
    <ProcessSection/>
    <Testimonials/>
    <CommunityCTA/>
    </>
  );
}