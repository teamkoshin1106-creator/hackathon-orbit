import techfinityLogo from "@/assets/techfinity-logo.png";
import iicLogo from "@/assets/iic-logo.png";

const AssociatedClubsSection = () => {
  const clubs = [
    { name: "Techfinity Club", logo: techfinityLogo },
    { name: "Institution's Innovation Council", logo: iicLogo },
    { name: "Coding Club", logo: null },
    { name: "Robotics Club", logo: null },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mb-12">Associated Clubs</h2>
      
      <div className="glass-card p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {clubs.map((club, i) => (
            <div
              key={i}
              className="glass-card-hover px-6 py-4 text-center w-full flex flex-col items-center justify-center min-h-[120px] group"
            >
              {club.logo ? (
                <img 
                  src={club.logo} 
                  alt={club.name}
                  className="h-12 md:h-16 w-auto object-contain mb-2 filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                />
              ) : (
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <span className="font-share-tech text-primary text-xl md:text-2xl font-bold">
                    {club.name.charAt(0)}
                  </span>
                </div>
              )}
              <span className="font-share-tech text-foreground/80 font-medium text-sm md:text-base">
                {club.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssociatedClubsSection;
