import { useState } from "react";
import { ChevronDown, ChevronUp, Shield, Leaf, Building, Rocket, Sparkles } from "lucide-react";

const themes = [
  {
    id: "blockchain",
    title: "Blockchain & Cybersecurity",
    icon: Shield,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-cyan-400/50",
    problems: [
      { id: "PS101", title: "Decentralized Blockchain Platform for Blue Carbon Tracking and Credit Management" },
      { id: "PS102", title: "Decentralized Blockchain System for Transparent Agri-Supply Chains" },
      { id: "PS103", title: "AI/ML-Driven Real-Time Email and Web Phishing Protection Platform" },
      { id: "PS104", title: "Intelligent Firewall System for Dynamic Threat Analysis and Zero Trust Enforcement" },
      { id: "PS105", title: "Mitigating National Security Threats from AI-Driven Disinformation and LLM Misuse" },
    ],
  },
  {
    id: "foodtech",
    title: "FoodTech/MedTech/AgriTech",
    icon: Leaf,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "hover:border-green-400/50",
    problems: [
      { id: "PS201", title: "AI-Powered Image Recognition System for Indian Livestock Breed Identification" },
      { id: "PS202", title: "AI-Integrated Nutrient Analysis and Practice Management Software for Ayurveda Nutritionists" },
      { id: "PS203", title: "Blockchain-Based Supply Chain Transparency for Agricultural Produce" },
      { id: "PS204", title: "AI-powered monitoring of crop health, soil condition, and pest risks using multispectral/hyperspectral imaging and sensor data" },
      { id: "PS205", title: "AI Tool for Early-Stage Dementia Detection" },
    ],
  },
  {
    id: "infratech",
    title: "InfraTech & IoT",
    icon: Building,
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "hover:border-orange-400/50",
    problems: [
      { id: "PS301", title: "Waste Segregation Monitoring System for Urban Local Bodies" },
      { id: "PS302", title: "Developing a real-time Ganga Water Quality Monitoring System using AI, Satellite Data, IoT, and Dynamic Models" },
      { id: "PS303", title: "AI-Powered Smart Construction Site & Workforce Management System" },
      { id: "PS304", title: "Smart Parking Detection and Reservation Platform" },
      { id: "PS305", title: "IoT-Enabled Air Quality and Noise Monitoring Station" },
    ],
  },
  {
    id: "spacetech",
    title: "Space Tech",
    icon: Rocket,
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "hover:border-purple-400/50",
    problems: [
      { id: "PS401", title: "Space Debris Detection and Tracking System Using Edge AI and Sensors" },
      { id: "PS402", title: "AI-Powered Satellite Constellation Management System" },
      { id: "PS403", title: "Blockchain-Enabled Satellite Data Security and Transmission Verification" },
      { id: "PS404", title: "AI-Based Space Weather Monitoring and Radiation Prediction" },
      { id: "PS405", title: "Cybersecurity Framework for Protecting Satellite Communication Channels" },
    ],
  },
  {
    id: "misc",
    title: "Miscellaneous",
    icon: Sparkles,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "hover:border-pink-400/50",
    problems: [],
    description: `The Miscellaneous theme is designed for teams that showcase exceptional creativity, innovation, or interdisciplinary skills. Teams under this theme will not submit a specific problem statement in advance. Instead, they will be selected based on the quality and originality of their submissions in other themes. Selected teams will be given a surprise problem statement at the start of the hackathon, which they must ideate, design, and develop within the given time frame. This ensures that only the most adaptable and high-performing teams—those capable of solving complex, real-world problems under pressure—qualify for this category.`,
  },
];

const ProblemStatementsSection = () => {
  const [expandedTheme, setExpandedTheme] = useState<string | null>("blockchain");

  return (
    <section id="problems" className="py-20 px-4 circuit-bg">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-6">Problem Statements</h2>
        <p className="text-center text-foreground/60 text-lg mb-16 max-w-2xl mx-auto">
          Choose from 5 exciting themes and solve real-world challenges
        </p>

        <div className="space-y-4 max-w-4xl mx-auto">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className={`theme-card overflow-hidden transition-all duration-500 ${theme.borderColor}`}
              style={{
                background: `linear-gradient(135deg, ${theme.color.split(" ")[0].replace("from-", "hsl(var(--card)),")} ${theme.color.split(" ")[1].replace("to-", "")})`,
              }}
            >
              <button
                onClick={() => setExpandedTheme(expandedTheme === theme.id ? null : theme.id)}
                className="w-full flex items-center justify-between p-2"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <theme.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-orbitron text-xl font-bold text-foreground">
                    {theme.title}
                  </h3>
                </div>
                {expandedTheme === theme.id ? (
                  <ChevronUp className="h-6 w-6 text-primary" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-foreground/60" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedTheme === theme.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 pt-0 space-y-3">
                  {theme.problems.length > 0 ? (
                    theme.problems.map((problem, index) => (
                      <div
                        key={problem.id}
                        className="glass-card p-4 hover:border-primary/30 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex gap-4">
                          <span className="font-orbitron text-primary font-bold shrink-0">
                            {problem.id}
                          </span>
                          <p className="text-foreground/80">{problem.title}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="glass-card p-6">
                      <p className="text-foreground/70 leading-relaxed">
                        {theme.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementsSection;
