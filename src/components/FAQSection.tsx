import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is HACKFINITY 2026?",
    answer: "HACKFINITY 2026 is a national-level 24-hour hackathon organized by Cambridge Institute of Technology North Campus, Bangalore. It brings together the brightest developers, designers, and innovators from across the nation to collaborate, compete, and create innovative solutions to real-world problems.",
  },
  {
    question: "When and where is the event?",
    answer: "The event will be held on 13th-14th February, 2026 at Cambridge Institute of Technology North Campus, Bangalore.",
  },
  {
    question: "What are the themes?",
    answer: "There are 5 themes: Viksit Bharat, AIML, Blockchain & Cybersecurity, FoodTech/MedTech/AgriTech, InfraTech & IoT, and Miscellaneous. Each theme has specific problem statements that teams can choose to work on.",
  },
  {
    question: "What is the team size?",
    answer: "Teams must consist of exactly 4 members. Individual participation is not allowed to encourage collaboration and teamwork.",
  },
  {
    question: "What is the Miscellaneous theme?",
    answer: "The Miscellaneous category allows participants to solve any real-world problem of their choice. It encourages creative, flexible, and innovative tech solutions beyond the defined themes.",
  },
  {
    question: "Will food and accommodation be provided?",
    answer: "Yes! Meals including breakfast, lunch, dinner, and snacks will be provided throughout the event. Midnight snacks with unlimited tea/coffee will also be available.",
  },
  {
    question: "How do I register?",
    answer: "Click the 'REGISTER HERE' button on the homepage to access the registration form. Fill in all required details and submit your registration.",
  },
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 circuit-bg">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-6">Frequently Asked Questions</h2>
        <p className="text-center text-foreground/60 text-lg mb-16 max-w-2xl mx-auto">
          Got questions? We've got answers.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-orbitron text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </h3>
                {expandedIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-foreground/60 shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
