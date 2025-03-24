
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HotelCard from "./HotelCard";
import AttractionCard from "./AttractionCard";
import { Calendar, Clock, MapPin } from "lucide-react";

export interface Activity {
  time: string;
  title: string;
  description: string;
  location: string;
}

export interface Hotel {
  name: string;
  image: string;
  price: string;
  rating: number;
  location: string;
}

export interface Attraction {
  name: string;
  image: string;
  description: string;
  distance: string;
  rating: number;
}

interface ItineraryDayProps {
  day: number;
  date?: string;
  activities: Activity[];
  hotels: Hotel[];
  attractions: Attraction[];
}

const ItineraryDay = ({ day, date, activities, hotels, attractions }: ItineraryDayProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="animate-scale-in mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="bg-primary/10 text-primary font-medium rounded-full w-8 h-8 flex items-center justify-center mr-3">
              {day}
            </span>
            <span>Day {day}</span>
          </div>
          {date && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{date}</span>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <div className="space-y-4">
          {activities.map((activity, i) => (
            <div key={i} className="flex">
              <div className="mr-4 w-16 text-right flex-shrink-0">
                <span className="text-sm font-medium text-muted-foreground flex items-center justify-end">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  {activity.time}
                </span>
              </div>
              <div className="relative pb-6">
                {i < activities.length - 1 && (
                  <div className="absolute left-2.5 top-3 w-0.5 h-full bg-border"></div>
                )}
                <div className="relative flex items-start">
                  <div className="bg-primary rounded-full w-5 h-5 flex-shrink-0 mt-1"></div>
                  <div className="ml-3">
                    <h4 className="font-medium">{activity.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                    <div className="flex items-center mt-1 text-sm">
                      <MapPin className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                      <span className="text-muted-foreground">{activity.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="hotels">
            <AccordionTrigger>
              <span className="text-sm font-medium">Recommended Hotels</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {hotels.slice(0, expanded ? hotels.length : 2).map((hotel, i) => (
                  <HotelCard key={i} hotel={hotel} />
                ))}
              </div>
              {hotels.length > 2 && !expanded && (
                <Button 
                  variant="link" 
                  className="mt-2" 
                  onClick={() => setExpanded(true)}
                >
                  Show more hotels
                </Button>
              )}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="attractions">
            <AccordionTrigger>
              <span className="text-sm font-medium">Nearby Attractions</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {attractions.slice(0, expanded ? attractions.length : 2).map((attraction, i) => (
                  <AttractionCard key={i} attraction={attraction} />
                ))}
              </div>
              {attractions.length > 2 && !expanded && (
                <Button 
                  variant="link" 
                  className="mt-2" 
                  onClick={() => setExpanded(true)}
                >
                  Show more attractions
                </Button>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ItineraryDay;
