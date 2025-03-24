
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("3");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination) return;
    
    // Navigate to itinerary page with search params
    navigate({
      pathname: '/itinerary',
      search: `?destination=${encodeURIComponent(destination)}&days=${days}`
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop')",
          filter: "brightness(0.6)"
        }}
      />
      
      <div className="relative container mx-auto px-4 py-16 md:py-24 z-10 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-shadow text-balance">
            Discover the Magic of <span className="text-gradient">India</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Create your perfect travel itinerary with personalized recommendations
          </p>
          
          <form 
            onSubmit={handleSubmit}
            className="glassmorphism p-6 rounded-2xl max-w-xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-3 mb-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Where in India do you want to go?"
                  className="w-full bg-white/90"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>
              <div className="w-full md:w-32">
                <Select value={days} onValueChange={setDays}>
                  <SelectTrigger className="w-full bg-white/90">
                    <SelectValue placeholder="Days" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14].map(day => (
                      <SelectItem key={day} value={day.toString()}>
                        {day} {day === 1 ? 'day' : 'days'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Plan Your Journey
            </Button>
          </form>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default Hero;
