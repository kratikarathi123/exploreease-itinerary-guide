
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Hotel } from "./ItineraryDay";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate star rating
  const starRating = Array.from({ length: 5 }, (_, i) => (
    <svg 
      key={i} 
      xmlns="http://www.w3.org/2000/svg" 
      className={`h-4 w-4 ${i < hotel.rating ? "text-yellow-400" : "text-gray-300"}`}
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));

  return (
    <Card 
      className="overflow-hidden h-full card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-36 overflow-hidden">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-2 right-2">
          <span className="bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded-full">
            {hotel.price}
          </span>
        </div>
      </div>
      <div className="p-3">
        <h4 className="font-medium text-sm">{hotel.name}</h4>
        <div className="flex items-center mt-1 mb-2">
          <div className="flex mr-2">
            {starRating}
          </div>
        </div>
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{hotel.location}</span>
        </div>
        <Button size="sm" variant="outline" className="w-full text-xs">
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default HotelCard;
