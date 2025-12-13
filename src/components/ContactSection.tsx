import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import mapsQR from "@/assets/maps-qr.png";

const ContactSection = () => {
  const mapsLink = "https://maps.app.goo.gl/Sn1hSB4LM7sqCteR9?g_st=ac";
  
  const facultyCoordinators = [
    {
      name: "Dr. S J Sugumar",
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
                  <span className="underline decoration-primary/50 underline-offset-4">Faculty Co-ordinators</span>
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
                  <span className="underline decoration-secondary/50 underline-offset-4">Student Co-ordinators</span>
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

          {/* Right Side - QR Code and Map */}
          <div className="space-y-6">
            {/* QR Code for Directions */}
            <div className="glass-card p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="glass-card p-4 bg-white/95 rounded-xl shrink-0">
                  <img src={mapsQR} alt="Scan for Directions" className="w-32 h-32 object-contain" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-share-tech text-lg font-bold text-foreground mb-2">
                    Get Directions
                  </h4>
                  <p className="text-foreground/60 text-sm mb-4">
                    Scan the QR code or click below to open Google Maps
                  </p>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-share-tech font-bold rounded-lg hover:scale-105 transition-transform"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map - Reduced Size */}
            <div className="glass-card p-3 h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.8989509279246!2d77.72632!3d13.14866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1bff2f7f7b4f%3A0x58c70ae7b1d2c4f5!2sCambridge%20Institute%20of%20Technology%20North%20Campus!5e0!3m2!1sen!2sin!4v1702469876543!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "0.5rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cambridge Institute of Technology North Campus Location"
              />
            </div>

            {/* Join Our Community */}
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="font-share-tech text-xl font-bold text-foreground mb-2">
                  Join Our Community
                </h3>
                <p className="text-foreground/60 text-sm mb-6">
                  Connect with us on social media and join our community for updates and discussions.
                </p>
                <div className="space-y-3">
                  {/* WhatsApp */}
                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all group"
                  >
                    <div className="p-2 rounded-full bg-[#25D366]/20">
                      <svg className="w-6 h-6 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-share-tech font-bold text-foreground">WhatsApp Community</p>
                      <p className="text-foreground/60 text-sm">Join our Techfinity Student hub and drop your queries there!</p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#E4405F]/10 border border-[#E4405F]/20 hover:bg-[#E4405F]/20 transition-all group"
                  >
                    <div className="p-2 rounded-full bg-gradient-to-br from-[#833AB4]/20 via-[#E4405F]/20 to-[#FCAF45]/20">
                      <svg className="w-6 h-6 text-[#E4405F]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-share-tech font-bold text-foreground">Instagram</p>
                      <p className="text-foreground/60 text-sm">Follow us on Instagram for updates and highlights</p>
                    </div>
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/20 hover:bg-[#FF0000]/20 transition-all group"
                  >
                    <div className="p-2 rounded-full bg-[#FF0000]/20">
                      <svg className="w-6 h-6 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-share-tech font-bold text-foreground">YouTube</p>
                      <p className="text-foreground/60 text-sm">Subscribe to our channel for tech tutorials and updates</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
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
