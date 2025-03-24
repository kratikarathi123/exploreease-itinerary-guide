
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { popularDestinations } from "@/utils/itineraryData";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground">
            Discover the most beautiful and culturally rich destinations across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDestinations.map((destination, index) => (
            <DestinationCard
              key={index}
              name={destination.name}
              image={destination.image}
              description={destination.description}
              tags={destination.tags}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg">Explore All Destinations</Button>
        </div>
      </section>
      
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-x-8"}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ExploreEase?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Personalized Itineraries</h3>
                    <p className="text-muted-foreground">
                      Custom travel plans based on your preferences and travel style
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Local Expertise</h3>
                    <p className="text-muted-foreground">
                      Insider tips and hidden gems that only locals know about
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Curated Accommodations</h3>
                    <p className="text-muted-foreground">
                      Hand-picked hotels and resorts for every budget and preference
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Travel assistance and support throughout your journey
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-x-8"}`}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop"
                  alt="India travel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1598529413886-7b5ca21be1d2?q=80&w=1974&auto=format&fit=crop"
                  alt="Kerala backwaters"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Indian Adventure?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create your personalized travel itinerary in minutes and explore the wonders of India
          </p>
          <Button size="lg" className="animate-pulse">
            Plan Your Trip Now
          </Button>
        </div>
      </section>
      
      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gradient">ExploreEase</h3>
              <p className="text-sm text-muted-foreground">
                Your perfect India travel companion
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ExploreEase. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
