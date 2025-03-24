
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  name: string;
  image: string;
  description: string;
  tags: string[];
  index: number;
}

const DestinationCard = ({ name, image, description, tags, index }: DestinationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate({
      pathname: '/itinerary',
      search: `?destination=${encodeURIComponent(name)}&days=3`
    });
  };

  return (
    <Card 
      className="overflow-hidden card-hover h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 100}ms`,
        opacity: 0,
        animation: 'fade-in 0.5s ease-out forwards',
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-2 right-2 flex gap-1">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="bg-primary/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={handleExplore}
        >
          Explore
        </Button>
      </div>
    </Card>
  );
};

export default DestinationCard;
