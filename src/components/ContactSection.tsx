import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
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
            <div className="glass-card-hover p-8">
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

            <div className="glass-card-hover p-8">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 mb-6">
                <Mail className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-share-tech text-lg font-bold text-foreground mb-4">
                Email
              </h3>
              <a
                href="mailto:hackfinity@cambridge.edu.in"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                hackfinity@cambridge.edu.in
              </a>
            </div>

            <div className="glass-card-hover p-8">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 mb-6">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-share-tech text-lg font-bold text-foreground mb-4">
                Phone
              </h3>
              <p className="text-foreground/60">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="glass-card p-4 h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.8989509279246!2d77.7289!3d13.1494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1c1c00000001%3A0x0!2sCambridge%20Institute%20of%20Technology%20North%20Campus!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0.75rem", minHeight: "400px" }}
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
