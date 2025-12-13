import posterImage from "@/assets/hackfinity-poster.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 circuit-bg">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">About HACKFINITY</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="font-share-tech text-2xl font-bold text-primary mb-4">
                Hackathon 2026
              </h3>
              <p className="text-foreground/80 text-lg leading-relaxed mb-4">
                <strong className="text-primary">Venue:</strong><br />
                Cambridge Institute of Technology<br />
                North Campus, Kundana,<br />
                Bangalore-562110, Karnataka
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                <strong className="text-primary">Date:</strong> 13th February, 2026 – 14th February, 2026
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-share-tech text-2xl font-bold text-primary mb-4">
                Objective
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                The objective of this national-level hackathon is to ignite innovation, creativity, 
                and problem-solving among young minds by challenging participants to design real-world 
                tech solutions that create meaningful impact. Conducted by Cambridge Institute of 
                Technology North Campus, this event aims to bring together the brightest developers, 
                designers, and innovators from across the nation to collaborate, compete, and code 
                towards a smarter, more sustainable future. Through this platform, participants will 
                not only showcase their technical brilliance but also gain exposure to cutting-edge 
                technologies, mentorship opportunities, and a thriving community of changemakers.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-share-tech text-2xl font-bold text-primary mb-4">
                Why Participate?
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Through this platform, participants will not only showcase their technical brilliance 
                but also gain exposure to cutting-edge technologies, mentorship opportunities, and a 
                thriving community of changemakers. Join a thrilling 24-hour national hackathon where 
                ideas turn into impact. Build, innovate, and compete with the best to create something 
                unforgettable.
              </p>
            </div>
          </div>

          {/* Poster */}
          <div className="flex justify-center lg:justify-end">
            <div className="glass-card p-4 animate-float max-w-md">
              <img
                src={posterImage}
                alt="HACKFINITY 2026 Poster"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
