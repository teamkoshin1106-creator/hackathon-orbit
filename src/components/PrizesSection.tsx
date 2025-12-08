import { Trophy, Medal, Award } from "lucide-react";

const PrizesSection = () => {
  const prizes = [
    {
      place: "1st Place",
      icon: Trophy,
      color: "from-yellow-400 to-amber-600",
      textColor: "text-yellow-400",
      prize: "₹50,000",
      description: "Winner takes it all",
    },
    {
      place: "2nd Place",
      icon: Medal,
      color: "from-gray-300 to-gray-500",
      textColor: "text-gray-300",
      prize: "₹30,000",
      description: "First Runner Up",
    },
    {
      place: "3rd Place",
      icon: Award,
      color: "from-amber-600 to-amber-800",
      textColor: "text-amber-600",
      prize: "₹20,000",
      description: "Second Runner Up",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mb-12">Prize by Category</h2>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className="glass-card-hover p-8 text-center"
          >
            <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${prize.color} mb-6`}>
              <prize.icon className="h-10 w-10 text-background" />
            </div>
            <h3 className={`font-share-tech text-2xl font-bold mb-2 ${prize.textColor}`}>
              {prize.place}
            </h3>
            <p className="text-foreground/60 text-sm mb-4">{prize.description}</p>
            <p className="font-share-tech text-3xl font-bold text-primary">
              {prize.prize}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizesSection;
