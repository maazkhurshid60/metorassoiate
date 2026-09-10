import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Disciplines from "./components/Disciplines";
import HomeFaqs from "./components/HomeFaqs";
import Programs from "./components/Programs";
import WhyUs from "./components/WhyUs";
import CaseStudies from "./components/CaseStudies";
import Team from "./components/Team";
import Jobs from "./components/Jobs";
import Locations from "./components/Locations";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Disciplines />
      <Programs />
      <WhyUs />
      <CaseStudies />
      <Team />
      <Jobs />
      <Locations />
      <HomeFaqs />
      <Testimonials />
      <CTA />
    </main>
  );
}
