import { Trophy, Sparkles, Users, Palette } from "lucide-react";

const PrizesSection = () => {
  const themes = [
    "Viksit Bharat",
    "AIML, Blockchain & Cybersecurity",
    "FoodTech/MedTech/AgriTech",
    "InfraTech & IoT",
    "Miscellaneous"
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mb-12">Prize Pool</h2>
      
      {/* Total Prize Pool - Enhanced Design */}
      <div className="text-center mb-16 relative">
        {/* Background glow effects */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-80 h-80 bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-yellow-300/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative inline-block">
          {/* Outer glow ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/60 via-amber-500/60 to-yellow-300/60 rounded-3xl blur-md opacity-50" />
          
          {/* Main card */}
          <div className="relative glass-card px-10 md:px-20 py-8 md:py-10 border-2 border-yellow-400/30 bg-background/90 backdrop-blur-xl rounded-3xl overflow-hidden">
            {/* Subtle corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-400/40 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-400/40 rounded-br-3xl" />
            
            <div className="flex items-center justify-center gap-4 md:gap-6">
              {/* Left Trophy - smaller, positioned beside text */}
              <Trophy className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 flex-shrink-0" />
              
              <div className="text-center">
                <p className="text-foreground/60 text-sm md:text-base mb-1 font-medium tracking-widest uppercase">
                  Total Prize Pool Worth
                </p>
                <div className="relative">
                  <p className="font-share-tech text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    ₹3+ Lakhs
                  </p>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 animate-shimmer" />
                </div>
              </div>
              
              {/* Right Trophy - smaller, positioned beside text */}
              <Trophy className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 flex-shrink-0" />
            </div>
            
            {/* Decorative bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* Theme-wise Prizes */}
      <div className="glass-card p-8 md:p-10 mb-8 border-2 border-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 relative overflow-hidden">
        {/* Golden glow accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-3 mb-6 relative">
          <Sparkles className="w-8 h-8 text-yellow-400" />
          <h3 className="font-share-tech text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
            Theme-wise Prizes
          </h3>
        </div>
        
        <p className="text-foreground/70 mb-8 text-lg leading-relaxed relative">
          For each of the hackathon themes, there will be two winners with exciting prizes:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8 relative">
          <div className="glass-card-hover p-6 text-center border-2 border-yellow-400/30 bg-gradient-to-br from-yellow-400/10 to-amber-500/5">
            <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 mb-4">
              <Trophy className="h-8 w-8 text-background" />
            </div>
            <p className="text-yellow-400 font-share-tech text-lg mb-2">First Prize</p>
            <p className="font-share-tech text-4xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">₹40,000</p>
            <p className="text-foreground/60 mt-2">per theme</p>
          </div>
          
          <div className="glass-card-hover p-6 text-center border-2 border-amber-300/25 bg-gradient-to-br from-amber-300/10 to-yellow-400/5">
            <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 mb-4">
              <Trophy className="h-8 w-8 text-background" />
            </div>
            <p className="text-amber-300 font-share-tech text-lg mb-2">Second Prize</p>
            <p className="font-share-tech text-4xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">₹20,000</p>
            <p className="text-foreground/60 mt-2">per theme</p>
          </div>
        </div>

        <div className="border-t border-yellow-400/20 pt-6 relative">
          <p className="text-foreground/60 text-center mb-4">Applicable across all five themes:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {themes.map((theme, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 font-medium text-sm"
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
        <div className="glass-card p-8 border-2 border-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-6 relative">
            <div className="p-3 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600">
              <Palette className="h-6 w-6 text-background" />
            </div>
            <h3 className="font-share-tech text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Best UI/UX Award
            </h3>
          </div>
          
          <div className="space-y-4 relative">
            <div className="flex items-center justify-between p-4 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
              <span className="text-foreground/80">First Prize</span>
              <span className="font-share-tech text-2xl font-bold text-yellow-400">₹40,000</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-amber-400/5 border border-amber-400/15">
              <span className="text-foreground/80">Second Prize</span>
              <span className="font-share-tech text-2xl font-bold text-amber-400">₹20,000</span>
            </div>
          </div>
        </div>

        {/* Best Women Team Award */}
        <div className="glass-card p-8 border-2 border-yellow-400/20 bg-gradient-to-br from-amber-500/5 to-yellow-400/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-6 relative">
            <div className="p-3 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600">
              <Users className="h-6 w-6 text-background" />
            </div>
            <h3 className="font-share-tech text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Best Women Team Award
            </h3>
          </div>
          
          <div className="flex items-center justify-between p-4 rounded-lg bg-yellow-400/10 border border-yellow-400/20 relative">
            <span className="text-foreground/80">Prize Worth</span>
            <span className="font-share-tech text-2xl font-bold text-yellow-400">₹20,000</span>
          </div>
          
          <p className="text-foreground/60 mt-4 text-sm relative">
            Celebrating and encouraging women in tech with a dedicated award for the best all-women team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrizesSection;
