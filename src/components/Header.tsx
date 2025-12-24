import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Films", href: "/films" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || !isHomePage
            ? "bg-background/95 backdrop-blur-md shadow-soft py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link 
            to="/" 
            className={cn(
              "inline-flex items-center font-serif text-2xl md:text-3xl font-light tracking-wide transition-colors duration-300",
              scrolled || !isHomePage ? "text-foreground" : "text-ivory"
            )}
          >
            <img
              src="https://res.cloudinary.com/dsddldquo/image/upload/v1766576853/apb19xhnicnrg0eyb2ia.jpg"
              alt="Milan Photography logo"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
            />
            <span className="ml-3">
              Milan <span className="text-gold">Photography</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 line-reveal",
                  location.pathname === link.href
                    ? "text-gold"
                    : scrolled || !isHomePage
                    ? "text-foreground hover:text-gold"
                    : "text-ivory/90 hover:text-ivory"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              variant={scrolled || !isHomePage ? "elegant" : "hero"} 
              size="sm" 
              asChild
            >
              <Link to="/contact">Book Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled || !isHomePage ? "text-foreground" : "text-ivory"
            )}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-charcoal transition-all duration-500 lg:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col h-full">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="inline-flex items-center font-serif text-2xl font-light tracking-wide text-ivory"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="https://res.cloudinary.com/dsddldquo/image/upload/v1766576853/apb19xhnicnrg0eyb2ia.jpg"
                alt="Milan Photography logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="ml-3">
                Milan <span className="text-gold">Photography</span>
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-ivory"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-serif font-light tracking-wide transition-all duration-300",
                  location.pathname === link.href
                    ? "text-gold"
                    : "text-ivory/80 hover:text-ivory",
                  isOpen && "animate-fade-up"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-6 text-ivory/60">
            <a href="#" className="hover:text-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:hello@milanphotography.com" className="hover:text-gold transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+1234567890" className="hover:text-gold transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
