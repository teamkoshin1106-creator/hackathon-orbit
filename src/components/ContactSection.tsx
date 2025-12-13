import { MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const facultyCoordinators = [
    {
      name: "Dr. SJ Sugumar",
      role: "Innovation Incharge",
      phone: "+91 89036 18874",
      email: "drsugumar.ece.nc@cambridge.edu.in",
    },
    {
      name: "Dr. Abhilash S G",
      role: "IIC Conviner, Mech HOD",
      phone: "+91 90089 16991",
      email: "abhilash.mech.nc@cambridge.edu.in",
    },
    {
      name: "Dr. Rajaramakrishna R",
      role: "IEEE Conviner, Physics HOD",
      phone: "+91 90369 41887",
      email: "rajaramakrishna.bs.nc@cambridge.edu.in",
    },
  ];

  const studentCoordinators = [
    { name: "Mohammed Yusuf", phone: "+91 78923 11408" },
    { name: "Shreya Pal", phone: "+91 82570 02386" },
    { name: "Sowmya Sharma", phone: "+91 93430 87280" },
  ];

  return (
    <section id="contact" className="py-20 px-4 circuit-bg">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-6">Contact Us</h2>
        <p className="text-center text-foreground/60 text-lg mb-16 max-w-2xl mx-auto">
          Have questions? Reach out to us!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Details */}
          <div className="space-y-6">
            {/* Venue Card */}
            <div className="glass-card-hover p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-share-tech text-lg font-bold text-foreground mb-4">
                  Venue
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  Cambridge Institute of Technology<br />
                  North Campus, Kundana,<br />
                  Bangalore-562110, Karnataka
                </p>
              </div>
            </div>

            {/* Faculty Coordinators */}
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="font-share-tech text-xl font-bold text-foreground mb-6 pb-3 border-b border-primary/20">
                  <span className="underline decoration-primary/50 underline-offset-4">Faculties Co-ordinators</span>
                </h3>
                <div className="space-y-6">
                  {facultyCoordinators.map((faculty, index) => (
                    <div 
                      key={index} 
                      className={`${index !== facultyCoordinators.length - 1 ? "pb-5 border-b border-border/50" : ""}`}
                    >
                      <p className="font-share-tech text-lg font-bold text-foreground">
                        {faculty.name}, <span className="text-foreground/60 font-normal text-base">{faculty.role}</span>
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Phone className="w-4 h-4 text-primary/60" />
                        <span className="text-foreground/60">{faculty.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Mail className="w-4 h-4 text-primary/60" />
                        <a 
                          href={`mailto:${faculty.email}`}
                          className="text-foreground/60 hover:text-primary transition-colors"
                        >
                          {faculty.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Student Coordinators */}
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="font-share-tech text-xl font-bold text-foreground mb-6 pb-3 border-b border-secondary/20">
                  <span className="underline decoration-secondary/50 underline-offset-4">Students Co-ordinators</span>
                </h3>
                <div className="space-y-4">
                  {studentCoordinators.map((student, index) => (
                    <div key={index}>
                      <p className="font-share-tech text-lg font-bold text-foreground">
                        {student.name}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Phone className="w-4 h-4 text-secondary/60" />
                        <span className="text-foreground/60">{student.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="glass-card p-4 h-full min-h-[400px] lg:min-h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.8989509279246!2d77.7289!3d13.1494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1c1c00000001%3A0x0!2sCambridge%20Institute%20of%20Technology%20North%20Campus!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0.75rem", minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cambridge Institute of Technology North Campus Location"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="font-share-tech text-primary text-xl font-bold mb-2">
            HACKFINITY 2026
          </p>
          <p className="text-foreground/40">
            Cambridge Institute of Technology North Campus, Kundana, Bangalore
          </p>
          <p className="text-foreground/30 mt-4 text-sm">
            © 2026 HACKFINITY. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
