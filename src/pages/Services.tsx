import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/home/CTASection";
import { Camera, Film, Heart, Plane, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Comprehensive coverage of your entire wedding day, from preparations to the last dance.",
    features: [
      "Full day coverage (8-12 hours)",
      "Second photographer included",
      "High-resolution edited images",
      "Online gallery for sharing",
      "Print release included",
    ],
  },
  {
    icon: Film,
    title: "Wedding Cinematography",
    description: "Cinematic wedding films that tell your love story with emotion and artistry.",
    features: [
      "Full day filming coverage",
      "Highlight film (3-5 minutes)",
      "Feature film (20-40 minutes)",
      "Drone aerial footage",
      "Licensed music soundtrack",
    ],
  },
  {
    icon: Heart,
    title: "Pre-Wedding & Engagement",
    description: "Romantic sessions that capture your connection before the big day.",
    features: [
      "2-3 hour session",
      "Location of your choice",
      "Multiple outfit changes",
      "50+ edited images",
      "Same-day preview",
    ],
  },
  {
    icon: Plane,
    title: "Destination Weddings",
    description: "We travel worldwide to capture your dream destination wedding.",
    features: [
      "International travel available",
      "Location scouting assistance",
      "Multi-day coverage options",
      "Coordination with local vendors",
      "Cultural sensitivity",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services & Packages | Milan Photography</title>
        <meta 
          name="description" 
          content="Explore our wedding photography and cinematography services. From intimate ceremonies to destination weddings, we offer customized packages for every couple." 
        />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-cream">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
              What We Offer
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6">
              Our Services
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every wedding is unique, and so are our packages. We craft personalized 
              solutions to perfectly capture your special day.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-cream p-8 md:p-12 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="w-14 h-14 rounded-full bg-champagne flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-charcoal" />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-charcoal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Packages */}
        <section className="py-20 bg-charcoal text-ivory">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Tailored For You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Custom Packages Available
            </h2>
            <p className="text-ivory/80 max-w-2xl mx-auto mb-10">
              We understand that every wedding is different. That's why we offer 
              fully customizable packages to meet your specific needs and budget. 
              Let's create the perfect coverage plan for your special day.
            </p>
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/contact">Get a Custom Quote</Link>
            </Button>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
                Our Process
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
                How We Work
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: "01", title: "Inquiry", desc: "Reach out and share your vision" },
                { step: "02", title: "Consultation", desc: "We'll discuss your needs in detail" },
                { step: "03", title: "Planning", desc: "Finalize timeline and details" },
                { step: "04", title: "Capture", desc: "We tell your beautiful story" },
              ].map((item, index) => (
                <div 
                  key={item.step}
                  className="text-center opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <p className="font-serif text-4xl text-gold mb-3">{item.step}</p>
                  <h3 className="font-serif text-lg text-charcoal mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Services;
