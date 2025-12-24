import { Instagram } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import heroImage from "@/assets/hero-wedding.jpg";

const instagramImages = [
  { src: gallery1, alt: "Instagram post 1" },
  { src: gallery2, alt: "Instagram post 2" },
  { src: gallery3, alt: "Instagram post 3" },
  { src: gallery4, alt: "Instagram post 4" },
  { src: gallery5, alt: "Instagram post 5" },
  { src: heroImage, alt: "Instagram post 6" },
];

export const InstagramSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 text-center mb-12">
        <a
          href="#"
          className="inline-flex items-center gap-3 text-charcoal hover:text-gold transition-colors duration-300"
        >
          <Instagram className="w-6 h-6" />
          <span className="font-serif text-2xl md:text-3xl">@eternalmoments</span>
        </a>
        <p className="text-muted-foreground mt-3">
          Follow us for daily inspiration
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6">
        {instagramImages.map((image, index) => (
          <a
            key={index}
            href="#"
            className="aspect-square image-reveal block"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
    </section>
  );
};
