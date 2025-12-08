import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 circuit-bg">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-6">Contact Us</h2>
        <p className="text-center text-foreground/60 text-lg mb-16 max-w-2xl mx-auto">
          Have questions? Reach out to us!
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card-hover p-8 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-orbitron text-lg font-bold text-foreground mb-4">
              Venue
            </h3>
            <p className="text-foreground/60 leading-relaxed">
              Cambridge Institute of Technology<br />
              North Campus<br />
              Bangalore, Karnataka
            </p>
          </div>

          <div className="glass-card-hover p-8 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 mb-6">
              <Mail className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-orbitron text-lg font-bold text-foreground mb-4">
              Email
            </h3>
            <a
              href="mailto:hackfinity@cambridge.edu.in"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              hackfinity@cambridge.edu.in
            </a>
          </div>

          <div className="glass-card-hover p-8 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 mb-6">
              <Phone className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-orbitron text-lg font-bold text-foreground mb-4">
              Phone
            </h3>
            <p className="text-foreground/60">
              +91 98765 43210
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="font-orbitron text-primary text-xl font-bold mb-2">
            HACKFINITY 2026
          </p>
          <p className="text-foreground/40">
            Cambridge Institute of Technology North Campus, Bangalore
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
