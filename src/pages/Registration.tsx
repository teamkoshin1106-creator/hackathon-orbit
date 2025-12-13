import Navbar from "@/components/Navbar";
import registrationQR from "@/assets/registration-qr.jpeg";

const Registration = () => {
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSdY_6EyONRyy31rzplr5M6CkQ53D0MFLLG_1lxzZBIqOLT0pQ/viewform?usp=dialog";

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section className="py-20 px-4 circuit-bg min-h-[calc(100vh-4rem)]">
          <div className="container mx-auto">
            <h1 className="section-title text-center mb-6">Registration & Submission</h1>
            <p className="text-center text-foreground/60 text-lg mb-16 max-w-2xl mx-auto">
              Register your team for HACKFINITY 2026 and start your innovation journey!
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* QR Code */}
                  <div className="flex flex-col items-center">
                    <div className="glass-card p-6 bg-white/95 rounded-2xl">
                      <img 
                        src={registrationQR} 
                        alt="Scan to Register" 
                        className="w-64 h-64 object-contain"
                      />
                    </div>
                    <p className="mt-4 text-foreground/60 text-center font-medium">
                      Scan the QR code to register
                    </p>
                  </div>

                  {/* Registration Info */}
                  <div className="space-y-6">
                    <h2 className="font-share-tech text-2xl font-bold text-foreground">
                      Ready to <span className="text-gradient">Hack</span>?
                    </h2>
                    <p className="text-foreground/70 leading-relaxed">
                      Join us at HACKFINITY 2026 and showcase your skills! 
                      Register your team now to be part of this exciting 24-hour hackathon 
                      where innovation meets opportunity.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-foreground/70">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>Team size: 4 members</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/70">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <span>All colleges eligible</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/70">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span>5 exciting themes</span>
                      </div>
                    </div>

                    <a
                      href={registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-share-tech font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                    >
                      REGISTER NOW
                    </a>
                  </div>
                </div>
              </div>

              {/* Submission Guidelines */}
              <div className="mt-12 glass-card p-8">
                <h3 className="font-share-tech text-xl font-bold text-foreground mb-6">
                  Submission Guidelines
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <h4 className="font-share-tech text-primary font-bold mb-2">Before the Event</h4>
                    <p className="text-foreground/70 text-sm">
                      Complete registration with all team member details. Submit your problem statement preferences.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/10">
                    <h4 className="font-share-tech text-secondary font-bold mb-2">During the Event</h4>
                    <p className="text-foreground/70 text-sm">
                      All development must be done during the hackathon. Submit your project before the deadline.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                    <h4 className="font-share-tech text-accent font-bold mb-2">Final Presentation</h4>
                    <p className="text-foreground/70 text-sm">
                      Use the provided PPT template. Prepare for Q&A with judges.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <h4 className="font-share-tech text-primary font-bold mb-2">Originality</h4>
                    <p className="text-foreground/70 text-sm">
                      All work must be original. Plagiarism leads to disqualification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registration;
