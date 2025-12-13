import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import techfinityLogo from "@/assets/techfinity-logo.png";
import cambridgeLogo from "@/assets/cambridge-logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Schedule", href: "/schedule" },
  { name: "Problem Statements", href: "/problem-statements" },
  { name: "Downloads", href: "#downloads", hasDropdown: true },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDownloads, setShowDownloads] = useState(false);
  const location = useLocation();

  const handleDownload = (type: "schedule" | "brochure") => {
    const link = document.createElement("a");
    if (type === "schedule") {
      link.href = "/schedule.pdf";
      link.download = "HACKFINITY_Schedule.pdf";
    } else {
      link.href = "/brochure.pdf";
      link.download = "HACKFINITY_Event_Brochure.pdf";
    }
    link.click();
    setShowDownloads(false);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 rounded-t-none">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logos */}
          <Link to="/" className="flex items-center gap-3">
            <img src={cambridgeLogo} alt="Cambridge Institute of Technology" className="h-12 w-auto" />
            <img src={techfinityLogo} alt="Techfinity Club" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowDownloads(true)}
                    onMouseLeave={() => setShowDownloads(false)}
                  >
                    <button className="flex items-center px-4 py-2 text-foreground/80 hover:text-primary transition-colors font-medium">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {showDownloads && (
                      <div className="absolute top-full left-0 mt-1 glass-card p-2 min-w-[180px] animate-slide-up">
                        <button
                          onClick={() => handleDownload("schedule")}
                          className="flex items-center w-full px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Schedule
                        </button>
                        <button
                          onClick={() => handleDownload("brochure")}
                          className="flex items-center w-full px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Event Brochure
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 transition-colors font-medium ${
                      isActive(item.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Techfinity Club Text */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="font-share-tech text-lg text-primary font-bold">Techfinity Club</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="text-center pb-4 border-b border-border mb-4">
              <span className="font-share-tech text-lg text-primary font-bold">Techfinity Club</span>
            </div>
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div className="py-2">
                    <span className="block px-4 py-2 text-foreground/60 font-medium">
                      {item.name}
                    </span>
                    <button
                      onClick={() => handleDownload("schedule")}
                      className="flex items-center w-full px-8 py-2 text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Schedule
                    </button>
                    <button
                      onClick={() => handleDownload("brochure")}
                      className="flex items-center w-full px-8 py-2 text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Event Brochure
                    </button>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 transition-colors font-medium ${
                      isActive(item.href) ? "text-primary bg-primary/10" : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
