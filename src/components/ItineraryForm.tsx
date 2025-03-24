
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
import { Calendar } from "lucide-react";

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

  return (
    <form 
      onSubmit={handleSubmit}
      className="glassmorphism p-6 rounded-2xl max-w-xl w-full animate-scale-in"
    >
      <h3 className="text-lg font-medium mb-4">Plan Your Itinerary</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="destination" className="text-sm font-medium mb-1 block">
            Destination
          </label>
          <Input
            id="destination"
            type="text"
            placeholder="Where in India do you want to go?"
            className="w-full"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="days" className="text-sm font-medium mb-1 block">
              Number of Days
            </label>
            <Select value={days} onValueChange={setDays}>
              <SelectTrigger id="days" className="w-full">
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
          
          <div>
            <label htmlFor="startDate" className="text-sm font-medium mb-1 block">
              Start Date (Optional)
            </label>
            <div className="relative">
              <Input
                id="startDate"
                type="date"
                className="w-full"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>
        
        <Button type="submit" className="w-full">
          Generate Itinerary
        </Button>
      </div>
    </form>
  );
};

export default ItineraryForm;
