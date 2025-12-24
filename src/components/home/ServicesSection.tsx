import { Camera, Film, Heart, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Timeless images that capture every emotion, every glance, every tear of joy.",
  },
  {
    icon: Film,
    title: "Cinematic Films",
    description: "Beautifully crafted wedding films that tell your unique love story.",
  },
  {
    icon: Heart,
    title: "Pre-Wedding Shoots",
    description: "Romantic sessions that celebrate your journey to 'I do'.",
  },
  {
    icon: Plane,
    title: "Destination Weddings",
    description: "We travel the world to capture your dream destination wedding.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group bg-background p-8 hover-lift opacity-0 animate-fade-up"
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                animationFillMode: "forwards" 
              }}
            >
              <div className="w-14 h-14 rounded-full bg-champagne flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                <service.icon className="w-6 h-6 text-charcoal group-hover:text-ivory transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-charcoal group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
