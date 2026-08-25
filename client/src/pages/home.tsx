import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemsSection from "@/components/problems-section";
import SolutionSection from "@/components/solution-section";
import ProjectsGallery from "@/components/projects-gallery";
import ServicesSection from "@/components/services-section";
import CreativeProcess from "@/components/creative-process";
import JourneySection from "@/components/journey-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-architectural-cream text-ink">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Navigation />
      <main id="conteudo">
        <HeroSection />
        <JourneySection />
        <ProjectsGallery />
        <ServicesSection />
        <CreativeProcess />
        <ProblemsSection />
        <SolutionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
