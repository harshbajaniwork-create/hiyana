import { About } from "../components/about";
import { CTASection } from "../components/cta";
import { CustomersSection } from "../components/customers";
import { Hero } from "../components/home-hero";
import { ServicesSection } from "../components/services";
import { StatsSection } from "../components/stats";
import { TestimonialsSection } from "../components/testimonials";
import { WhyUs } from "../components/why-us";

export const HomeView = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <About />
      <ServicesSection />
      <WhyUs />
      <CustomersSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};
