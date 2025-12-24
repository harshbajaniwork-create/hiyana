import { AboutHero } from "../components/about-hero";
import { AboutStats } from "../components/about-stats";
import { OurStory } from "../components/our-story";
import { OurValuesSection } from "../components/our-values";
import { OurOffice } from "../components/our-office";

export default function AboutView() {
  return (
    <div>
      <AboutHero />
      <AboutStats />
      <OurStory />
      <OurValuesSection />
      <OurOffice />
    </div>
  );
}
