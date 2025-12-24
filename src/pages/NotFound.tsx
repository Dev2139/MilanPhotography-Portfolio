import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Milan Photography</title>
      </Helmet>
      
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
            404 Error
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal mb-6">
            Page Not Found
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <Button variant="elegant" size="lg" asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
