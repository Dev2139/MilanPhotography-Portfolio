import { Award, Camera, Heart, Users } from "lucide-react";

const stats = [
  { icon: Heart, value: "500+", label: "Weddings Captured" },
  { icon: Camera, value: "100K+", label: "Photos Delivered" },
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Destination Weddings" },
];

const reasons = [
  {
    title: "Storytelling Approach",
    description: "We don't just take photos; we tell your love story through carefully crafted images and films.",
  },
  {
    title: "Unobtrusive Style",
    description: "Our documentary approach captures genuine moments without disrupting your celebration.",
  },
  {
    title: "Luxury Experience",
    description: "From consultation to delivery, we provide a seamless, premium experience you'll treasure.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 bg-champagne">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-8">
              Creating Memories
              <br />
              <span className="italic">That Last Forever</span>
            </h2>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div 
                  key={reason.title}
                  className="opacity-0 animate-fade-up"
                  style={{ 
                    animationDelay: `${index * 0.15}s`, 
                    animationFillMode: "forwards" 
                  }}
                >
                  <h3 className="font-serif text-xl mb-2 text-charcoal">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-background p-8 text-center hover-lift opacity-0 animate-fade-up"
                style={{ 
                  animationDelay: `${0.3 + index * 0.1}s`, 
                  animationFillMode: "forwards" 
                }}
              >
                <div className="w-12 h-12 rounded-full bg-champagne flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="font-serif text-3xl md:text-4xl text-charcoal mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
