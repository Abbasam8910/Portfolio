import ScrollyCanvas from "@/components/ScrollyCanvas";
import DetailedCaseStudies from "@/components/DetailedCaseStudies";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MetricsShowcase from "@/components/MetricsShowcase";
import SkillsMatrix from "@/components/SkillsMatrix";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import GridOverlay from "@/components/GridOverlay";
import ParticleField from "@/components/ParticleField";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen relative">
      <GridOverlay />
      <ParticleField />
      <Navigation />
      <ScrollyCanvas />
      <MetricsShowcase />
      <ExperienceSection />
      <DetailedCaseStudies />
      <SkillsMatrix />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
