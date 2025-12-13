import { CheckCircle2 } from "lucide-react";

const InstructionsSection = () => {
  const instructions = [
    "Each team must consist of exactly 4 participants.",
    "Participants from all colleges and institutions are eligible to participate.",
    "Every team must nominate one team lead as the official point of contact.",
    "A participant may be part of only one team.",
    "All development work must be done during the hackathon period only.",
    "Teams must submit original ideas; plagiarism or previously developed work will lead to disqualification.",
    "Teams are required to deliver a final presentation followed by a Q&A session with the judges.",
    "The judging panel's decision is final and binding.",
    "Judges may request clarification on originality, implementation, and feasibility.",
    "Each team may submit up to two problem statements for idea presentation.",
    "Any unfair practices, rule violations, or disruptive behaviour will result in immediate disqualification.",
    "Participants are expected to maintain professionalism, integrity, and teamwork throughout the event."
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="glass-card p-8 md:p-10 max-w-4xl mx-auto border-l-4 border-l-primary">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary text-xl">!</span>
          </div>
          <h2 className="font-share-tech text-2xl md:text-3xl font-bold text-foreground">
            Important Instructions
          </h2>
        </div>
        
        <p className="text-foreground/70 mb-8 text-lg">
          Please read the following instructions carefully before registering for HACKFINITY:
        </p>
        
        <div className="grid gap-4">
          {instructions.map((instruction, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground/80 leading-relaxed">
                {instruction}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructionsSection;
