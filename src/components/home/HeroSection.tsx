import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wedding couple at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p 
          className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Wedding Photography & Cinematography
        </p>
        
        <h1 
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-ivory leading-tight mb-8 opacity-0 animate-fade-up text-balance"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Turning Your Wedding
          <br />
          <span className="italic">Into a Timeless Story</span>
        </h1>

        <p 
          className="text-ivory/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          We capture the emotions, the details, and the magic of your special day 
          with artistry and elegance.
        </p>

        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <Button variant="hero-primary" size="lg" asChild>
            <Link to="/contact">Check Availability</Link>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <Link to="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <a 
          href="#services"
          className="flex flex-col items-center gap-2 text-ivory/60 hover:text-ivory transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-float" />
        </a>
      </div>
    </section>
  );
};
