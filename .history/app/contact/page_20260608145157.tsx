import ContactHero from "@/components/contact/contact-hero";
import ContactInfo from "@/components/contact/contact-info";
import FAQSection from "@/components/contact/faq-section";
import CommunityCTA from "@/components/home/CTA";

export default function Contact() {
  return (
    <>
      <ContactHero/>
      <ContactInfo />
      </>
      <FAQSection />
      <CommunityCTA/>
    </>
  );
}