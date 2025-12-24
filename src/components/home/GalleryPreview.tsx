import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const galleryImages = [
  { src: gallery1, alt: "Bride portrait with bouquet", span: "row-span-2" },
  { src: gallery2, alt: "Couple's first dance", span: "" },
  { src: gallery3, alt: "Wedding rings detail", span: "" },
  { src: gallery4, alt: "Pre-wedding couple shoot", span: "col-span-2" },
  { src: gallery5, alt: "Beach destination wedding", span: "" },
];

export const GalleryPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Our Portfolio
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal">
              Featured Work
            </h2>
          </div>
          <Button variant="elegant-outline" asChild className="w-fit">
            <Link to="/portfolio">
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`image-reveal rounded-sm overflow-hidden ${image.span} opacity-0 animate-fade-up`}
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                animationFillMode: "forwards" 
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
