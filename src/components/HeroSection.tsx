import { useEffect, useState } from "react";
import SponsorsSection from "./SponsorsSection";
import PrizesSection from "./PrizesSection";
import AssociatedClubsSection from "./AssociatedClubsSection";
import InstructionsSection from "./InstructionsSection";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-02-13T10:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="glass-card p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
      <div className="font-share-tech text-3xl md:text-5xl font-bold text-primary glow-text">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-foreground/60 text-sm md:text-base mt-1 font-medium">
        {label}
      </div>
    </div>
  );

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 relative overflow-hidden"
    >
      {/* Futuristic particle/glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large ambient glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-glow-cyan/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-glow-pink/20 rounded-full blur-[150px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-glow-purple/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: "4s" }} />
        
        {/* Smaller particle-like glows */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-glow-cyan/30 rounded-full blur-2xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-glow-pink/30 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 left-1/4 w-20 h-20 bg-glow-purple/30 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        
      </div>

      <div className="text-center z-10">
        {/* Main Title */}
        <h1
          className="font-share-tech font-bold mb-4 tracking-wider relative"
          style={{ fontSize: "clamp(3rem, 10vw, 85pt)" }}
        >
          <span 
            className="relative inline-block text-primary"
            style={{
              backgroundImage: `
                linear-gradient(135deg, transparent 20%, hsl(var(--secondary) / 0.3) 25%, transparent 30%),
                linear-gradient(45deg, transparent 40%, hsl(var(--accent) / 0.2) 45%, transparent 50%),
                linear-gradient(90deg, transparent 60%, hsl(var(--glow-purple) / 0.25) 65%, transparent 70%),
                linear-gradient(180deg, transparent 70%, hsl(var(--primary) / 0.15) 75%, transparent 80%)
              `,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              textShadow: '0 0 40px hsl(var(--primary) / 0.3), 0 2px 0 hsl(var(--primary) / 0.1)'
            }}
          >
            HACKFINITY
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-foreground/70 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Powering the Next Generation of Innovation.
        </p>

        {/* Date */}
        <p className="font-share-tech text-2xl md:text-3xl text-foreground/90 mb-12">
          13th & 14th February 2026
        </p>

        {/* Countdown */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          <CountdownBox value={timeLeft.days} label="DAYS" />
          <CountdownBox value={timeLeft.hours} label="HOURS" />
          <CountdownBox value={timeLeft.minutes} label="MINUTES" />
          <CountdownBox value={timeLeft.seconds} label="SECONDS" />
        </div>

        {/* Register Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdY_6EyONRyy31rzplr5M6CkQ53D0MFLLG_1lxzZBIqOLT0pQ/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-register inline-block text-secondary-foreground font-share-tech text-xl"
        >
          REGISTER HERE
        </a>
      </div>

      {/* Instructions Section */}
      <div className="w-full mt-20 z-10">
        <InstructionsSection />
      </div>

      {/* Prizes Section */}
      <div className="w-full mt-16">
        <PrizesSection />
      </div>

      {/* Sponsors Section */}
      <div className="w-full mt-20">
        <SponsorsSection />
      </div>

      {/* Associated Clubs Section */}
      <div className="w-full mt-16 pb-16">
        <AssociatedClubsSection />
      </div>
    </section>
  );
};

export default HeroSection;
