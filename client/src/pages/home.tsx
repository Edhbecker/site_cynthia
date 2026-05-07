import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemsSection from "@/components/problems-section";
import SolutionSection from "@/components/solution-section";
import ProjectsGallery from "@/components/projects-gallery";
import ServicesSection from "@/components/services-section";
import CreativeProcess from "@/components/creative-process";
import JourneySection from "@/components/journey-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-architectural-cream">
      <Navigation />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <ProjectsGallery />
      <ServicesSection />
      <CreativeProcess />
      <JourneySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
