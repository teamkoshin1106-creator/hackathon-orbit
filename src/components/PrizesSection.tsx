import { Trophy, Sparkles, Users, Palette } from "lucide-react";

const PrizesSection = () => {
  const themes = [
    "Blockchain & Cybersecurity",
    "FoodTech/MedTech/AgriTech",
    "InfraTech & IoT",
    "Space Tech",
    "Miscellaneous"
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mb-12">Prize Pool</h2>
      
      {/* Total Prize Pool */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-4 glass-card px-12 py-8 border-2 border-primary/30">
          <Trophy className="w-12 h-12 text-yellow-400" />
          <div>
            <p className="text-foreground/60 text-lg mb-1">Total Prize Pool Worth</p>
            <p className="font-share-tech text-5xl md:text-6xl font-bold text-gradient">
              ₹3+ Lakhs
            </p>
          </div>
          <Trophy className="w-12 h-12 text-yellow-400" />
        </div>
      </div>

      {/* Theme-wise Prizes */}
      <div className="glass-card p-8 md:p-10 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-primary" />
          <h3 className="font-share-tech text-2xl md:text-3xl font-bold text-primary">
            Theme-wise Prizes
          </h3>
        </div>
        
        <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
          For each of the hackathon themes, there will be two winners with exciting prizes:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass-card-hover p-6 text-center border-2 border-yellow-400/30 bg-gradient-to-br from-yellow-400/10 to-transparent">
            <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 mb-4">
              <Trophy className="h-8 w-8 text-background" />
            </div>
            <p className="text-yellow-400 font-share-tech text-lg mb-2">First Prize</p>
            <p className="font-share-tech text-4xl font-bold text-foreground">₹40,000</p>
            <p className="text-foreground/60 mt-2">per theme</p>
          </div>
          
          <div className="glass-card-hover p-6 text-center border-2 border-gray-300/30 bg-gradient-to-br from-gray-300/10 to-transparent">
            <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 mb-4">
              <Trophy className="h-8 w-8 text-background" />
            </div>
            <p className="text-gray-300 font-share-tech text-lg mb-2">Second Prize</p>
            <p className="font-share-tech text-4xl font-bold text-foreground">₹20,000</p>
            <p className="text-foreground/60 mt-2">per theme</p>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-foreground/60 text-center mb-4">Applicable across all five themes:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {themes.map((theme, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium text-sm"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Special Awards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Best UI/UX Award */}
        <div className="glass-card p-8 border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-br from-accent to-pink-600">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-share-tech text-xl md:text-2xl font-bold text-accent">
              Best UI/UX Award
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-accent/10 border border-accent/20">
              <span className="text-foreground/80">First Prize</span>
              <span className="font-share-tech text-2xl font-bold text-accent">₹40,000</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-accent/5 border border-accent/10">
              <span className="text-foreground/80">Second Prize</span>
              <span className="font-share-tech text-2xl font-bold text-accent/80">₹20,000</span>
            </div>
          </div>
        </div>

        {/* Best Women Team Award */}
        <div className="glass-card p-8 border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 to-transparent">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-br from-secondary to-purple-600">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-share-tech text-xl md:text-2xl font-bold text-secondary">
              Best Women Team Award
            </h3>
          </div>
          
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/10 border border-secondary/20">
            <span className="text-foreground/80">Prize Worth</span>
            <span className="font-share-tech text-2xl font-bold text-secondary">₹20,000</span>
          </div>
          
          <p className="text-foreground/60 mt-4 text-sm">
            Celebrating and encouraging women in tech with a dedicated award for the best all-women team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrizesSection;
