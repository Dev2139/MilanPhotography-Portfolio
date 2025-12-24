import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/home/CTASection";
import { Play } from "lucide-react";
import filmThumb from "@/assets/film-thumb-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const films = [
  {
    id: 1,
    thumbnail: filmThumb,
    title: "Sarah & Michael",
    location: "Tuscany, Italy",
    type: "Destination Wedding",
  },
  {
    id: 2,
    thumbnail: gallery2,
    title: "Emily & James",
    location: "Santorini, Greece",
    type: "Wedding Film",
  },
  {
    id: 3,
    thumbnail: gallery5,
    title: "Jessica & David",
    location: "Maldives",
    type: "Beach Wedding",
  },
  {
    id: 4,
    thumbnail: filmThumb,
    title: "Anna & Robert",
    location: "New York, USA",
    type: "Wedding Film",
  },
  {
    id: 5,
    thumbnail: gallery2,
    title: "Maria & Chris",
    location: "Amalfi Coast, Italy",
    type: "Destination Wedding",
  },
  {
    id: 6,
    thumbnail: gallery5,
    title: "Sofia & Thomas",
    location: "Bali, Indonesia",
    type: "Beach Wedding",
  },
];

const Films = () => {
  return (
    <>
      <Helmet>
        <title>Wedding Films | Milan Photography</title>
        <meta 
          name="description" 
          content="Watch our cinematic wedding films that capture the emotion and magic of your special day. Professional wedding videography and cinematography services." 
        />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-cream">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Cinematography
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6">
              Wedding Films
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cinematic storytelling that captures the emotion, laughter, and tears of your 
              special day. Films you'll cherish for generations.
            </p>
          </div>
        </section>

        {/* Films Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {films.map((film, index) => (
                <div
                  key={film.id}
                  className="group cursor-pointer opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="relative aspect-video image-reveal mb-4">
                    <img
                      src={film.thumbnail}
                      alt={film.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-all duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-ivory/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Play className="w-6 h-6 text-charcoal ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal group-hover:text-gold transition-colors duration-300">
                    {film.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {film.location} • {film.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Film Approach */}
        <section className="py-20 bg-charcoal text-ivory">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
                Our Approach
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                Cinematic Storytelling
              </h2>
              <p className="text-ivory/80 leading-relaxed mb-6">
                We believe every love story deserves to be told cinematically. Our films 
                combine stunning visuals, emotional moments, and a carefully curated 
                soundtrack to create a wedding film that feels like a movie.
              </p>
              <p className="text-ivory/80 leading-relaxed">
                From the nervous excitement of getting ready to the joyful chaos of the 
                dance floor, we capture it all with an artistic eye and attention to the 
                details that matter most.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Films;
