import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const InstructionsSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const instructions = [
    "Each team must consist of exactly 4 participants.",
    "Participants from all colleges and institutions are eligible to participate.",
    "Every team must nominate one team lead as the official point of contact.",
    "A participant may be part of only one team.",
    "Teams must submit original ideas; plagiarism or previously developed work will lead to disqualification.",
    "Teams are required to deliver a final presentation followed by a Q&A session with the judges.",
    "The judging panel's decision is final and binding.",
    "Judges may request clarification on originality, implementation, and feasibility.",
    "Each team may submit up to two problem statements for idea presentation.",
    "Any unfair practices, rule violations, or disruptive behaviour will result in immediate disqualification.",
    "Participants are expected to maintain professionalism, integrity, and teamwork throughout the event.",
    "The Participants choosing the Hardware Category are required to bring their own components.",
    "All development work must be done during the hackathon period only.",
    "The participants must follow the given template for the presentation."
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="glass-card max-w-4xl mx-auto overflow-hidden">
        {/* Dropdown Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-primary/5 transition-colors duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-pulse-glow">
                <Sparkles className="text-primary-foreground w-6 h-6" />
              </div>
              <div className="absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent opacity-50 blur-lg" />
            </div>
            <div className="text-left">
              <h2 className="font-share-tech text-xl md:text-2xl font-bold text-gradient">
                Important Instructions
              </h2>
              <p className="text-foreground/60 text-sm mt-1">
                {instructions.length} guidelines for participants
              </p>
            </div>
          </div>
          <div className={`p-3 rounded-full bg-primary/10 border border-primary/30 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDown className="w-5 h-5 text-primary" />
          </div>
        </button>

        {/* Dropdown Content */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 pb-6 md:px-8 md:pb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6" />
            
            <p className="text-foreground/70 mb-6 text-center">
              Please read the following instructions carefully before registering for HACKFINITY:
            </p>
            
            <div className="grid gap-3">
              {instructions.map((instruction, index) => (
                <div 
                  key={index}
                  className="group relative flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-background/80 to-background/60 border border-primary/10 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Techy Point Indicator */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-secondary group-hover:scale-125 transition-transform duration-300" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary/50 blur-sm group-hover:blur-md transition-all" />
                  </div>
                  
                  {/* Connector Line */}
                  <div className="w-6 h-px bg-gradient-to-r from-primary/50 to-transparent group-hover:from-primary group-hover:w-8 transition-all duration-300" />
                  
                  <p className="text-foreground/80 leading-relaxed flex-1">
                    {instruction}
                  </p>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsSection;
