import ProcessSection from "@/components/services/process-section";
import ServicesHero from "@/components/services/services-hero";
import ServicesGrid from "@/components/services/services-grid";
import CommunityCTA from "@/components/home/CTA";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/services/why-choose-us";
import ServicesHighlight from "@/components/services/";


export default function Services() {
  return (
    <>

    <ServicesHero/>
    <ServicesHighlight/>
    <ServicesGrid/>
    <WhyChooseUs/>
    <ProcessSection/>
    <Testimonials/>
    <CommunityCTA/>
    </>
  );
}