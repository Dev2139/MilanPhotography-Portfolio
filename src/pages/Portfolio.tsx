import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/home/CTASection";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import heroImage from "@/assets/hero-wedding.jpg";

type Category = "all" | "weddings" | "pre-wedding" | "couples" | "films";

const galleryItems = [
  { id: 1, src: heroImage, alt: "Sunset wedding ceremony", category: "weddings", couple: "Sarah & Michael" },
  { id: 2, src: gallery1, alt: "Bride portrait", category: "weddings", couple: "Emily & James" },
  { id: 3, src: gallery2, alt: "First dance", category: "weddings", couple: "Jessica & David" },
  { id: 4, src: gallery3, alt: "Wedding rings", category: "weddings", couple: "Anna & Robert" },
  { id: 5, src: gallery4, alt: "Pre-wedding couple", category: "pre-wedding", couple: "Maria & Chris" },
  { id: 6, src: gallery5, alt: "Beach wedding", category: "weddings", couple: "Sofia & Thomas" },
  { id: 7, src: gallery1, alt: "Engagement portrait", category: "couples", couple: "Lisa & Mark" },
  { id: 8, src: gallery2, alt: "Reception dance", category: "weddings", couple: "Nicole & Andrew" },
  { id: 9, src: gallery4, alt: "Sunset shoot", category: "pre-wedding", couple: "Rachel & Steven" },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "weddings", label: "Weddings" },
  { value: "pre-wedding", label: "Pre-Wedding" },
  { value: "couples", label: "Couple Shoots" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio | Milan Photography</title>
        <meta 
          name="description" 
          content="Browse our stunning wedding photography portfolio featuring intimate ceremonies, grand celebrations, and romantic pre-wedding shoots from around the world." 
        />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-cream">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Our Portfolio
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6">
              Stories We've Told
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every wedding is unique, every love story different. Browse through our 
              collection of captured moments that celebrate the beauty of love.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-background sticky top-0 z-40 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-6 py-2 text-sm font-sans tracking-wider uppercase transition-all duration-300 ${
                    activeCategory === cat.value
                      ? "bg-charcoal text-ivory"
                      : "text-muted-foreground hover:text-charcoal"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer image-reveal aspect-[4/5] relative opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "forwards" }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-end p-6">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <p className="text-ivory font-serif text-xl">{item.couple}</p>
                      <p className="text-ivory/70 text-sm capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-ivory text-3xl hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="max-w-5xl max-h-[90vh] animate-scale-in">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="text-center mt-4">
                <p className="text-ivory font-serif text-2xl">{selectedImage.couple}</p>
                <p className="text-ivory/60 text-sm capitalize">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}

        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;
