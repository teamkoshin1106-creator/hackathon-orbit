import { Download, Calendar, FileText } from "lucide-react";

const DownloadsSection = () => {
  const handleDownload = (type: "schedule" | "brochure") => {
    // In a real scenario, these would be actual PDF files
    const link = document.createElement("a");
    if (type === "schedule") {
      // Create a downloadable text file as placeholder
      const content = `HACKFINITY 2026 - Event Schedule

13th February, 2026 (Day 1)
07:30 AM – 09:00 AM – Breakfast
10:00 AM – 11:00 AM – Inauguration
11:30 AM – Hackathon Kick-off
01:30 PM – 02:30 PM – Lunch
04:30 PM – Snacks
05:00 PM – 06:30 PM – Cultural Activities
07:30 PM – 08:30 PM – Dinner

14th February, 2026 (Day 2)
12:00 AM - Midnight Snack distribution with unlimited Tea/Coffee stationed
07:30 AM – 08:30 AM – Breakfast
11:30 AM – Conclusion of Hackathon
11:30 AM – 01:00 PM – Evaluation
02:00 PM – 04:00 PM – Valedictory Event
04:00 PM - Snacks

Venue: Cambridge Institute of Technology North Campus, Bangalore`;
      
      const blob = new Blob([content], { type: "text/plain" });
      link.href = URL.createObjectURL(blob);
      link.download = "HACKFINITY_Schedule.txt";
    } else {
      const content = `HACKFINITY 2026 - Event Brochure

Cambridge Institute of Technology North Campus, Bangalore
13th - 14th February, 2026

ABOUT HACKFINITY
A national-level hackathon that ignites innovation, creativity, and problem-solving among young minds.

THEMES:
1. Blockchain & Cybersecurity
2. FoodTech/MedTech/AgriTech
3. InfraTech & IoT
4. Space Tech
5. Miscellaneous

Join the brightest developers, designers, and innovators from across the nation!

For more information, visit our website.`;
      
      const blob = new Blob([content], { type: "text/plain" });
      link.href = URL.createObjectURL(blob);
      link.download = "HACKFINITY_Brochure.txt";
    }
    link.click();
  };

  return (
    <section id="downloads" className="py-20 px-4 circuit-bg">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-6">Downloads</h2>
        <p className="text-center text-foreground/60 text-lg mb-16 max-w-2xl mx-auto">
          Get all the essential documents for HACKFINITY 2026
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <button
            onClick={() => handleDownload("schedule")}
            className="glass-card-hover p-8 text-center group"
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="h-12 w-12 text-primary" />
            </div>
            <h3 className="font-orbitron text-xl font-bold text-foreground mb-4">
              Event Schedule
            </h3>
            <p className="text-foreground/60 mb-6">
              Download the complete itinerary for both days
            </p>
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <Download className="h-5 w-5" />
              Click to Download
            </div>
          </button>

          <button
            onClick={() => handleDownload("brochure")}
            className="glass-card-hover p-8 text-center group"
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileText className="h-12 w-12 text-secondary" />
            </div>
            <h3 className="font-orbitron text-xl font-bold text-foreground mb-4">
              Event Brochure
            </h3>
            <p className="text-foreground/60 mb-6">
              Get detailed information about themes and prizes
            </p>
            <div className="flex items-center justify-center gap-2 text-secondary font-medium">
              <Download className="h-5 w-5" />
              Click to Download
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
