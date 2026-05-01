import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import TravelCoverage from "@/components/TravelCoverage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <TravelCoverage />
      <Footer />
      {/* Additional sections will be added here later */}
    </>
  );
}
