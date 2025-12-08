import { Code, Users, Trophy, Lightbulb } from "lucide-react";

const events = [
  {
    icon: Code,
    title: "24-Hour Hackathon",
    description: "Non-stop coding marathon where teams build innovative solutions to real-world problems.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work with the brightest minds from across the nation in teams of 2-4 members.",
  },
  {
    icon: Lightbulb,
    title: "Mentorship Sessions",
    description: "Get guidance from industry experts and experienced developers throughout the event.",
  },
  {
    icon: Trophy,
    title: "Awards & Recognition",
    description: "Win exciting prizes and get recognized for your innovative solutions and technical brilliance.",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 px-4 circuit-bg">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-6">Events</h2>
        <p className="text-center text-foreground/60 text-lg mb-16 max-w-2xl mx-auto">
          Experience the thrill of innovation at HACKFINITY 2026
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="glass-card-hover p-8 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
                <event.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-orbitron text-xl font-bold text-foreground mb-4">
                {event.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
