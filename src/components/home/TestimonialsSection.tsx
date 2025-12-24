import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They captured our wedding day so beautifully. Every photo tells a story, and watching our film still brings tears to our eyes.",
    couple: "Sarah & Michael",
    location: "Tuscany, Italy",
  },
  {
    quote: "Professional, creative, and so easy to work with. They made us feel comfortable and the results exceeded our wildest dreams.",
    couple: "Emily & James",
    location: "Santorini, Greece",
  },
  {
    quote: "The attention to detail is incredible. They captured moments we didn't even know happened. Truly artists at their craft.",
    couple: "Jessica & David",
    location: "New York, USA",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-charcoal text-ivory overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
            Words from Our Couples
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="w-16 h-16 text-gold/20 absolute -top-8 left-0" />
          
          <div className="text-center px-8 md:px-16">
            <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8 transition-opacity duration-500">
              "{testimonials[current].quote}"
            </p>
            <div className="transition-opacity duration-500">
              <p className="text-gold font-serif text-lg mb-1">
                {testimonials[current].couple}
              </p>
              <p className="text-ivory/60 text-sm">
                {testimonials[current].location}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-ivory/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    current === index ? "bg-gold w-6" : "bg-ivory/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-ivory/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
