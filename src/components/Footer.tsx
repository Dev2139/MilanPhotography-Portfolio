import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center">
              <img
                src="https://res.cloudinary.com/dsddldquo/image/upload/v1766576853/apb19xhnicnrg0eyb2ia.jpg"
                alt="Milan Photography logo"
                className="h-12 w-12 md:h-14 md:w-14 object-cover"
              />
              <span className="ml-3 font-serif text-3xl font-light tracking-wide">
                Milan <span className="text-gold">Photography</span>
              </span>
            </Link>
            <p className="mt-4 text-ivory/60 text-sm leading-relaxed">
              Capturing timeless stories of love, one frame at a time. 
              Premium wedding photography & cinematography.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Portfolio", "Films", "About Us", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-ivory/60 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-ivory/60 text-sm">
              <li>Wedding Photography</li>
              <li>Wedding Cinematography</li>
              <li>Pre-Wedding Shoots</li>
              <li>Engagement Sessions</li>
              <li>Destination Weddings</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-ivory/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-gold" />
                <span>123 Studio Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-ivory/60 text-sm">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+1234567890" className="hover:text-gold transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3 text-ivory/60 text-sm">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:hello@milanphotography.com" className="hover:text-gold transition-colors">
                  hello@milanphotography.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/40 text-sm">
            © {new Date().getFullYear()} Milan Photography. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-ivory/40 text-sm">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
