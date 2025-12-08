import Navbar from "@/components/Navbar";
import ScheduleSection from "@/components/ScheduleSection";

const Schedule = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ScheduleSection />
      </div>
    </div>
  );
};

export default Schedule;
