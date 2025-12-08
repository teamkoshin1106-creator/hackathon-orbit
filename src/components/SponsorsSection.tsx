const SponsorsSection = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mb-12">Our Sponsors</h2>
      
      <div className="glass-card p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Sponsor Placeholders */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-32 h-20 bg-muted/30 rounded-lg flex items-center justify-center border border-border/50 hover:border-primary/50 transition-colors"
            >
              <span className="text-foreground/40 text-sm">Sponsor {i}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-foreground/50 mt-8 text-sm">
          Interested in sponsoring? Contact us at hackfinity@cambridge.edu.in
        </p>
      </div>
    </div>
  );
};

export default SponsorsSection;
