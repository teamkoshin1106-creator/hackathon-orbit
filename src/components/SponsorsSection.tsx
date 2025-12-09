import techfinityLogo from "@/assets/techfinity-logo.png";
import cambridgeLogo from "@/assets/cambridge-logo.png";
import iicLogo from "@/assets/iic-logo.png";

const SponsorsSection = () => {
  const sponsors = [
    { name: "Techfinity Club", logo: techfinityLogo },
    { name: "Cambridge Institute of Technology", logo: cambridgeLogo },
    { name: "Institution's Innovation Council", logo: iicLogo },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mb-12">Our Sponsors & Partners</h2>
      
      <div className="glass-card p-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((sponsor, i) => (
            <div
              key={i}
              className="group relative p-4 rounded-xl transition-all duration-300 hover:bg-primary/5"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className="h-16 md:h-20 w-auto object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: '0 0 30px hsl(var(--glow-cyan) / 0.3), 0 0 60px hsl(var(--glow-purple) / 0.2)'
                }}
              />
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8 text-sm">
          Interested in sponsoring? Contact us at hackfinity@cambridge.edu.in
        </p>
      </div>
    </div>
  );
};

export default SponsorsSection;
