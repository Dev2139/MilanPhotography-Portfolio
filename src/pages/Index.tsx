import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InstagramSection } from "@/components/home/InstagramSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Milan Photography | Premium Wedding Photography & Cinematography</title>
        <meta 
          name="description" 
          content="Capture your wedding day with timeless elegance. Milan Photography offers premium wedding photography and cinematic films for weddings, pre-wedding shoots, and destination events." 
        />
        <meta name="keywords" content="wedding photography, wedding cinematography, wedding films, pre-wedding shoots, destination weddings, engagement photography" />
        <link rel="canonical" href="https://milanphotography.com" />
      </Helmet>
      
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <GalleryPreview />
        <WhyChooseUs />
        <TestimonialsSection />
        <InstagramSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
