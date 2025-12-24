import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
          Begin Your Journey
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-6">
          Ready to Tell Your Story?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Let's create something beautiful together. Check our availability for your 
          special day and let's start planning your dream wedding coverage.
        </p>
        <Button variant="elegant" size="xl" asChild>
          <Link to="/contact">Check Availability</Link>
        </Button>
      </div>
    </section>
  );
};
