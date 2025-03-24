
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ItineraryForm from "@/components/ItineraryForm";
import ItineraryDay from "@/components/ItineraryDay";
import { Activity, Hotel, Attraction } from "@/components/ItineraryDay";
import { Button } from "@/components/ui/button";
import { getItinerary } from "@/utils/itineraryData";
import { toast } from "sonner";
import { Calendar, Printer, Share2 } from "lucide-react";

const Itinerary = () => {
  const [searchParams] = useSearchParams();
  const queryDestination = searchParams.get("destination") || "";
  const queryDays = searchParams.get("days") || "3";
  const queryDate = searchParams.get("date") || "";
  
  const [destination, setDestination] = useState(queryDestination);
  const [days, setDays] = useState(queryDays);
  const [startDate, setStartDate] = useState(queryDate);
  const [itineraryData, setItineraryData] = useState<{
    activities: Activity[][];
    hotels: Hotel[];
    attractions: Attraction[];
  } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (destination) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const data = getItinerary(destination, parseInt(days, 10));
        setItineraryData(data);
        setLoading(false);
        toast.success(`Itinerary for ${destination} generated successfully!`);
      }, 1500);
    }
  }, [destination, days]);

  const handleItinerarySubmit = (newDestination: string, newDays: string, newStartDate: string) => {
    setDestination(newDestination);
    setDays(newDays);
    setStartDate(newStartDate);
  };

  // Calculate dates if start date is provided
  const getDates = () => {
    if (!startDate) return [];
    
    const dates: string[] = [];
    const start = new Date(startDate);
    
    for (let i = 0; i < parseInt(days, 10); i++) {
      const date = new Date(start);
      date.setDate(date.getDate() + i);
      dates.push(date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      }));
    }
    
    return dates;
  };
  
  const dateArray = getDates();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold mb-4">Travel Planner</h2>
                <ItineraryForm 
                  initialDestination={destination}
                  initialDays={days}
                  onSubmit={handleItinerarySubmit}
                />

                {itineraryData && (
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-medium">Your Itinerary</h3>
                    
                    <div className="glassmorphism p-4 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="bg-primary/10 rounded-full p-1 mr-2">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <h4 className="text-sm font-medium">
                          {destination}
                        </h4>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {startDate ? (
                          <span>
                            {new Date(startDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })} - {" "}
                            {new Date(new Date(startDate).setDate(new Date(startDate).getDate() + parseInt(days, 10) - 1)).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        ) : (
                          <span>{days} days itinerary</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" className="w-full" size="sm">
                        <Printer className="h-4 w-4 mr-2" />
                        Print Itinerary
                      </Button>
                      <Button variant="outline" className="w-full" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Itinerary
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              {loading ? (
                <div className="h-64 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin-slow"></div>
                    <p className="mt-4 text-muted-foreground animate-pulse">
                      Generating your perfect itinerary...
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {destination && itineraryData ? (
                    <div>
                      <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">
                          Your {days}-Day Itinerary for {destination}
                        </h1>
                        <p className="text-muted-foreground">
                          A personalized travel plan with recommended activities, hotels, and attractions
                        </p>
                      </div>
                      
                      <div className="space-y-8">
                        {itineraryData.activities.map((dayActivities, index) => (
                          <ItineraryDay
                            key={index}
                            day={index + 1}
                            date={dateArray[index] || undefined}
                            activities={dayActivities}
                            hotels={itineraryData.hotels}
                            attractions={itineraryData.attractions}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="h-64 flex items-center justify-center text-center">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          Create Your Perfect Indian Journey
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          Enter your destination and travel details to generate a personalized itinerary
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 mx-auto text-muted"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-secondary py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ExploreEase. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Itinerary;
