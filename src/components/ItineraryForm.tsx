
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
import { Calendar, MapPin, Navigation } from "lucide-react";
import { popularDestinations } from "@/utils/itineraryData";

interface ItineraryFormProps {
  initialDestination?: string;
  initialDays?: string;
  onSubmit?: (destination: string, days: string, startDate: string) => void;
}

const ItineraryForm = ({ 
  initialDestination = "", 
  initialDays = "3",
  onSubmit 
}: ItineraryFormProps) => {
  const [destination, setDestination] = useState(initialDestination);
  const [days, setDays] = useState(initialDays);
  const [startDate, setStartDate] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination) return;
    
    if (onSubmit) {
      onSubmit(destination, days, startDate);
    } else {
      // Navigate to itinerary page with search params
      navigate({
        pathname: '/itinerary',
        search: `?destination=${encodeURIComponent(destination)}&days=${days}${startDate ? `&date=${startDate}` : ''}`
      });
    }
  };

  // Filter destinations based on input
  const filteredDestinations = popularDestinations
    .filter(dest => dest.name.toLowerCase().includes(destination.toLowerCase()))
    .slice(0, 3);

  return (
    <form 
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-2xl max-w-xl w-full animate-scale-in bg-white/90 backdrop-blur-lg border border-orange-200 shadow-xl p-6 dark:bg-gray-900/80 dark:border-gray-800"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-gradient opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-orange-light-gradient opacity-20 rounded-full blur-3xl"></div>
      
      <h3 className="text-xl font-bold mb-4 text-gradient">Plan Your Dream Journey</h3>
      
      <div className="space-y-4 relative z-10">
        <div>
          <label htmlFor="destination" className="text-sm font-medium mb-1 block text-orange-800 dark:text-orange-300">
            Destination
          </label>
          <div className="relative">
            <Input
              id="destination"
              type="text"
              placeholder="Enter any place in India"
              className="w-full border-orange-200 focus:border-orange-400 focus:ring-orange-400 pl-10 text-black dark:border-orange-800/50 dark:text-black dark:bg-white/90 dark:focus:border-orange-500"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                setShowSuggestions(!!e.target.value);
              }}
              onFocus={() => destination && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              required
            />
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-orange-500" />

            {showSuggestions && filteredDestinations.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-orange-200 rounded-md shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                {filteredDestinations.map((dest) => (
                  <div 
                    key={dest.name}
                    className="p-2 hover:bg-orange-50 cursor-pointer flex items-center border-b border-orange-100 last:border-0 dark:hover:bg-orange-900/30 dark:border-gray-700"
                    onClick={() => {
                      setDestination(dest.name);
                      setShowSuggestions(false);
                    }}
                  >
                    <div 
                      className="h-10 w-10 rounded-md bg-cover bg-center mr-2 border border-orange-200 dark:border-orange-800"
                      style={{ backgroundImage: `url(${dest.image})` }}
                    />
                    <div>
                      <div className="font-medium text-orange-800 dark:text-orange-300">{dest.name}</div>
                      <div className="text-xs text-orange-600 dark:text-orange-400">{dest.tags.join(' • ')}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="text-xs text-orange-600 mt-1 italic dark:text-orange-400">
            Enter any destination in India. Our AI will create a custom itinerary for you!
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="days" className="text-sm font-medium mb-1 block text-orange-800 dark:text-orange-300">
              Number of Days
            </label>
            <Select value={days} onValueChange={setDays}>
              <SelectTrigger id="days" className="w-full border-orange-200 text-black dark:border-orange-800/50 dark:text-black dark:bg-white/90">
                <SelectValue placeholder="Days" />
              </SelectTrigger>
              <SelectContent className="border-orange-200 dark:border-orange-800">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14].map(day => (
                  <SelectItem key={day} value={day.toString()} className="hover:bg-orange-50 dark:hover:bg-orange-900/30">
                    {day} {day === 1 ? 'day' : 'days'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="startDate" className="text-sm font-medium mb-1 block text-orange-800 dark:text-orange-300">
              Start Date (Optional)
            </label>
            <div className="relative">
              <Input
                id="startDate"
                type="date"
                className="w-full border-orange-200 focus:border-orange-400 focus:ring-orange-400 pl-10 text-black dark:border-orange-800/50 dark:text-black dark:bg-white/90 dark:focus:border-orange-500"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-orange-500" />
            </div>
          </div>
        </div>
        
        <Button type="submit" className="w-full mt-2 bg-orange-gradient hover:opacity-90 transition-opacity animate-pulse-orange">
          <Navigation className="mr-2 h-4 w-4" />
          Generate Itinerary
        </Button>
      </div>
    </form>
  );
};

export default ItineraryForm;
