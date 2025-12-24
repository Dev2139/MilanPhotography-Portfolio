import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/home/CTASection";
import teamImage from "@/assets/team.jpg";

const values = [
  {
    title: "Storytelling",
    description: "We don't just document; we tell the story of your love through every frame.",
  },
  {
    title: "Authenticity",
    description: "Candid moments, genuine emotions, and real connections - that's what we capture.",
  },
  {
    title: "Excellence",
    description: "From consultation to final delivery, we maintain the highest standards of quality.",
  },
  {
    title: "Connection",
    description: "We build relationships with our couples, making them feel comfortable and confident.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Milan Photography Studio</title>
        <meta 
          name="description" 
          content="Meet the passionate team behind Milan Photography. With over 12 years of experience, we specialize in capturing timeless wedding memories." 
        />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-cream">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6">
              Our Story
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate storytellers dedicated to capturing the magic of your most 
              precious moments.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
                  The Beginning
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-6">
                  A Passion for Love Stories
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Milan Photography was born from a simple belief: every love story deserves 
                    to be told beautifully. What started as a passion project over 12 years 
                    ago has grown into a premier wedding photography and cinematography studio.
                  </p>
                  <p>
                    We've had the privilege of capturing over 500 weddings across the globe, 
                    from intimate garden ceremonies to grand destination celebrations. Each 
                    wedding teaches us something new about love, connection, and the art of 
                    visual storytelling.
                  </p>
                  <p>
                    Our approach is simple: be present, be unobtrusive, and capture the 
                    moments that matter. We believe the best photos are the ones you didn't 
                    know were being taken – the stolen glances, the happy tears, the 
                    spontaneous laughter.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="image-reveal">
                  <img
                    src={teamImage}
                    alt="Milan Photography team"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-champagne">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
                Our Philosophy
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
                What We Believe In
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="text-center opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <h3 className="font-serif text-xl text-charcoal mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-charcoal text-ivory">
          <div className="container mx-auto px-6 text-center">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <p className="font-serif text-5xl md:text-6xl text-gold mb-2">12+</p>
                <p className="text-ivory/60 text-sm uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                <p className="font-serif text-5xl md:text-6xl text-gold mb-2">500+</p>
                <p className="text-ivory/60 text-sm uppercase tracking-wider">Weddings Captured</p>
              </div>
              <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                <p className="font-serif text-5xl md:text-6xl text-gold mb-2">30+</p>
                <p className="text-ivory/60 text-sm uppercase tracking-wider">Countries Visited</p>
              </div>
              <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                <p className="font-serif text-5xl md:text-6xl text-gold mb-2">100%</p>
                <p className="text-ivory/60 text-sm uppercase tracking-wider">Happy Couples</p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default About;
