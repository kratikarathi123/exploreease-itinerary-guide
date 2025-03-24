
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
import { MapPin, Navigation } from "lucide-react";

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
        }}
      />
      <div className="absolute inset-0 bg-orange-gradient opacity-60 dark:opacity-70"></div>
      
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-orange-900/60 to-transparent"></div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24 z-10 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-shadow text-balance">
            Discover the Magic of <span className="text-gradient">India</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white text-balance font-light">
            Create your perfect travel itinerary with personalized recommendations
          </p>
          
          <form 
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-2xl max-w-xl mx-auto backdrop-blur-md bg-white/10 border border-white/30 p-6 shadow-xl dark:bg-gray-900/10 dark:border-gray-800/30"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-gradient opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-orange-light-gradient opacity-20 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row gap-3 mb-4 relative z-10">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="Where in India do you want to go?"
                  className="w-full bg-white/80 border-white/30 focus:border-white pl-10 text-black placeholder-gray-500 dark:bg-white/90 dark:text-black"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
                <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-orange-600" />
              </div>
              <div className="w-full md:w-32">
                <Select value={days} onValueChange={setDays}>
                  <SelectTrigger className="w-full bg-white/80 border-white/30 text-black dark:bg-white/90 dark:text-black">
                    <SelectValue placeholder="Days" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14].map(day => (
                      <SelectItem key={day} value={day.toString()} className="hover:bg-orange-50">
                        {day} {day === 1 ? 'day' : 'days'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full bg-orange-gradient hover:opacity-90 transition-opacity animate-pulse-orange">
              <Navigation className="mr-2 h-4 w-4" /> 
              Plan Your Journey
            </Button>
          </form>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default Hero;
