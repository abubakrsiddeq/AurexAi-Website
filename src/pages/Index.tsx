import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ModulesSection from "@/components/ModulesSection";
import TimelineSection from "@/components/TimelineSection";
import CompetitionsSection from "@/components/CompetitionsSection";
import SpeakersSection from "@/components/SpeakersSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ModulesSection />
    <TimelineSection />
    <CompetitionsSection />
    <SpeakersSection />
    <WorkshopsSection />
    <EventDetailsSection />
    <FooterSection />
  </div>
);

export default Index;
