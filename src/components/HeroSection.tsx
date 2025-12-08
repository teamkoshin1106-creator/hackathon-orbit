import { useEffect, useState } from "react";

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
    <div className="glass-card p-4 md:p-6 min-w-[80px] md:min-w-[100px] animate-pulse-glow">
      <div className="font-orbitron text-3xl md:text-5xl font-bold text-primary glow-text">
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
      className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 circuit-bg relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-glow-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-glow-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="text-center z-10">
        {/* College Name */}
        <p className="text-foreground/60 text-lg md:text-xl mb-4 font-medium tracking-wide">
          Cambridge Institute of Technology North Campus, Bangalore
        </p>

        {/* Main Title */}
        <h1
          className="font-orbitron font-bold text-primary glow-text mb-4 tracking-wider"
          style={{ fontSize: "clamp(3rem, 10vw, 85pt)" }}
        >
          HACKFINITY
        </h1>

        {/* Tagline */}
        <p className="text-foreground/70 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Enter the nexus of innovation. Where ideas turn into impact.
        </p>

        {/* Date */}
        <p className="font-orbitron text-2xl md:text-3xl text-foreground/90 mb-12">
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
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-register inline-block text-secondary-foreground font-orbitron text-xl"
        >
          REGISTER HERE
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
