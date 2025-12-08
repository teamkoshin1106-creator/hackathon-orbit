const AssociatedClubsSection = () => {
  const clubs = [
    "Techfinity Club",
    "Coding Club",
    "Robotics Club",
    "AI/ML Club",
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mb-12">Associated Clubs</h2>
      
      <div className="glass-card p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {clubs.map((club, i) => (
            <div
              key={i}
              className="glass-card-hover px-6 py-4 text-center w-full"
            >
              <span className="font-share-tech text-foreground/80 font-medium">{club}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssociatedClubsSection;
