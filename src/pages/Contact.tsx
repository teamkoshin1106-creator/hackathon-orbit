import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;
