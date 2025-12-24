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
        {/* Open Graph */}
        <meta property="og:title" content="Milan Photography | Premium Wedding Photography & Cinematography" />
        <meta property="og:description" content="Capture your wedding day with timeless elegance. Premium wedding photography and cinematic films for weddings, pre-wedding shoots, and destination events." />
        <meta property="og:url" content="https://milanphotography.com/" />
        <meta property="og:image" content="https://res.cloudinary.com/dsddldquo/image/upload/v1766576853/apb19xhnicnrg0eyb2ia.jpg" />
        <meta property="og:image:alt" content="Milan Photography showcase montage" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter */}
        <meta name="twitter:title" content="Milan Photography | Premium Wedding Photography & Cinematography" />
        <meta name="twitter:description" content="Capture your wedding day with timeless elegance. Premium wedding photography and cinematic films." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dsddldquo/image/upload/v1766576853/apb19xhnicnrg0eyb2ia.jpg" />
        <meta name="twitter:site" content="@milanphotography" />
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Milan Photography',
            url: 'https://milanphotography.com/',
            image: 'https://milanphotography.com/og-cover.jpg',
            logo: 'https://milanphotography.com/logo.png',
            sameAs: [
              'https://www.instagram.com/milanphotography',
              'https://www.facebook.com/milanphotography'
            ],
            description:
              'Premium wedding photography and cinematography. We capture timeless memories with elegant storytelling.',
            areaServed: 'IN',
            priceRange: '$$'
          })}
        </script>
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
