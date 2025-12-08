import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ScheduleSection from "@/components/ScheduleSection";
import ProblemStatementsSection from "@/components/ProblemStatementsSection";
import DownloadsSection from "@/components/DownloadsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <ScheduleSection />
      <ProblemStatementsSection />
      <DownloadsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Index;
