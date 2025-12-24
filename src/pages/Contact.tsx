import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    weddingDate: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Thank you for your inquiry! We'll be in touch within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      weddingDate: "",
      location: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Milan Photography</title>
        <meta 
          name="description" 
          content="Ready to book your wedding photography? Contact Milan Photography to check availability and discuss your vision for your special day." 
        />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-cream">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6">
              Let's Create Magic
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to capture your love story? Fill out the form below and we'll 
              be in touch within 24 hours to discuss your vision.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="font-serif text-2xl text-charcoal mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-champagne flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-charcoal" />
                    </div>
                    <div>
                      <p className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:hello@milanphotography.com" className="text-charcoal hover:text-gold transition-colors">
                        hello@milanphotography.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-champagne flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-charcoal" />
                    </div>
                    <div>
                      <p className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                      <a href="tel:+1234567890" className="text-charcoal hover:text-gold transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-champagne flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-charcoal" />
                    </div>
                    <div>
                      <p className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-1">Studio</p>
                      <p className="text-charcoal">
                        123 Studio Avenue<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="mt-10">
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-ivory rounded-sm hover:bg-[#20BD5A] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-sans text-sm tracking-wider uppercase">Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-cream p-8 md:p-12">
                  <h2 className="font-serif text-2xl text-charcoal mb-8">Check Availability</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                      >
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="pre-wedding">Pre-Wedding Shoot</SelectItem>
                          <SelectItem value="engagement">Engagement Session</SelectItem>
                          <SelectItem value="destination">Destination Wedding</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weddingDate">Wedding Date</Label>
                      <Input
                        id="weddingDate"
                        type="date"
                        value={formData.weddingDate}
                        onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Wedding Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="City, Country"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mt-6">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Tell us about your wedding vision, any specific requests, or questions you have..."
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <div className="mt-8">
                    <Button 
                      type="submit" 
                      variant="elegant" 
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Check Availability
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
