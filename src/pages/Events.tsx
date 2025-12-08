import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <EventsSection />
      </div>
    </div>
  );
};

export default Events;
