import { useState } from "react";
import { ChevronDown, ChevronUp, Globe, Shield, Leaf, Building, Sparkles } from "lucide-react";

const themes = [
  {
    id: "viksit",
    title: "Viksit Bharat",
    icon: Globe,
    color: "from-indigo-500/20 to-blue-500/20",
    borderColor: "hover:border-indigo-400/50",
    description: "Viksit Bharat focuses on building inclusive, tech-driven solutions for national growth. Participants will create innovations that empower youth through better learning, skills, careers, and mental wellbeing. The theme also emphasizes women empowerment, promoting safety, education, financial independence, and healthcare through digital tools. Additionally, it aims to uplift under-economic communities with accessible solutions in education, healthcare, livelihoods, and essential resources.",
    problems: [
      { id: "PS101", title: "AI-Powered Career Guidance System for Rural Youth" },
      { id: "PS102", title: "Digital Platform for Women Safety and Emergency Response" },
      { id: "PS103", title: "Smart Learning App for Skill Development in Underserved Areas" },
      { id: "PS104", title: "Mental Health Support Chatbot for Students" },
      { id: "PS105", title: "Financial Literacy and Microfinance Platform for Women Entrepreneurs" },
    ],
  },
  {
    id: "aiml",
    title: "AIML, Blockchain & Cybersecurity",
    icon: Shield,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-cyan-400/50",
    description: "AI/ML, Blockchain & Cybersecurity focuses on building secure and intelligent digital solutions. Participants can use AI/ML to automate tasks, make predictions, and improve decision-making across industries. The Blockchain track encourages transparent, decentralized applications for trust, security, and efficiency. The Cybersecurity track emphasizes protecting data, systems, and users through strong security and privacy-focused innovations.",
    problems: [
      { id: "PS201", title: "Decentralized Blockchain Platform for Blue Carbon Tracking and Credit Management" },
      { id: "PS202", title: "Decentralized Blockchain System for Transparent Agri-Supply Chains" },
      { id: "PS203", title: "AI/ML-Driven Real-Time Email and Web Phishing Protection Platform" },
      { id: "PS204", title: "Intelligent Firewall System for Dynamic Threat Analysis and Zero Trust Enforcement" },
      { id: "PS205", title: "Mitigating National Security Threats from AI-Driven Disinformation and LLM Misuse" },
    ],
  },
  {
    id: "foodtech",
    title: "FoodTech/MedTech/AgriTech",
    icon: Leaf,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "hover:border-green-400/50",
    description: "FoodTech, MedTech & AgriTech focus on technology-driven innovation in essential sectors. FoodTech encourages solutions that improve food safety, reduce waste, and promote healthier, smarter consumption. MedTech aims to enhance healthcare through better diagnosis, monitoring, accessibility, and patient-centric systems. AgriTech empowers farmers with smart, sustainable technologies to boost productivity, efficiency, and resilience in agriculture.",
    problems: [
      { id: "PS301", title: "AI-Powered Image Recognition System for Indian Livestock Breed Identification" },
      { id: "PS302", title: "AI-Integrated Nutrient Analysis and Practice Management Software for Ayurveda Nutritionists" },
      { id: "PS303", title: "Blockchain-Based Supply Chain Transparency for Agricultural Produce" },
      { id: "PS304", title: "AI-powered monitoring of crop health, soil condition, and pest risks using multispectral/hyperspectral imaging and sensor data" },
      { id: "PS305", title: "AI Tool for Early-Stage Dementia Detection" },
    ],
  },
  {
    id: "infratech",
    title: "InfraTech & IoT",
    icon: Building,
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "hover:border-orange-400/50",
    description: "InfraTech & IoT focus on building smart, connected, and sustainable systems. InfraTech encourages modern solutions for urban development, transportation, utilities, and smart cities using automation and AI-driven monitoring. IoT emphasizes interconnected devices and sensors to enable real-time monitoring, data-driven insights, and automated actions.",
    problems: [
      { id: "PS401", title: "Waste Segregation Monitoring System for Urban Local Bodies" },
      { id: "PS402", title: "Developing a real-time Ganga Water Quality Monitoring System using AI, Satellite Data, IoT, and Dynamic Models" },
      { id: "PS403", title: "AI-Powered Smart Construction Site & Workforce Management System" },
      { id: "PS404", title: "Smart Parking Detection and Reservation Platform" },
      { id: "PS405", title: "IoT-Enabled Air Quality and Noise Monitoring Station" },
    ],
  },
  {
    id: "misc",
    title: "Miscellaneous",
    icon: Sparkles,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "hover:border-pink-400/50",
    description: "This category allows participants to solve any real-world problem of their choice. It encourages creative, flexible, and innovative tech solutions beyond the defined themes.",
    problems: [],
  },
];

const ProblemStatementsSection = () => {
  const [expandedTheme, setExpandedTheme] = useState<string | null>("viksit");

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
                className="w-full flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <theme.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-share-tech text-xl font-bold text-foreground">
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
                  expandedTheme === theme.id ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 pt-0 space-y-4">
                  {/* Theme Description */}
                  <div className="glass-card p-5 border-l-4 border-l-primary/50">
                    <p className="text-foreground/70 leading-relaxed">
                      {theme.description}
                    </p>
                  </div>

                  {/* Problem Statements */}
                  {theme.problems.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-share-tech text-lg text-primary/80 font-semibold px-2">
                        Problem Statements
                      </h4>
                      {theme.problems.map((problem, index) => (
                        <div
                          key={problem.id}
                          className="glass-card p-4 hover:border-primary/30 transition-all duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="flex gap-4">
                            <span className="font-share-tech text-primary font-bold shrink-0">
                              {problem.id}
                            </span>
                            <p className="text-foreground/80">{problem.title}</p>
                          </div>
                        </div>
                      ))}
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
