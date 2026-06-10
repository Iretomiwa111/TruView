import AboutHero from "@/components/about/about-hero";
import AboutStory from "@/components/about/about-story";
import MissionVision from "@/components/about/mission-vision";
import CommunityCTA from "@/components/home/CTA";
import Stats from "@/components/home/Stats";


export default function About() {
  return (
   <>
        <AboutHero/>
        <AboutStory/>
        <MissionVision/>
        <Stats/>
        <CommunityCTA/>
   </>
  );
}