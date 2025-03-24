
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import ItineraryForm from "@/components/ItineraryForm";
import { Calendar, Clock, MapPin, User } from "lucide-react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleItinerarySubmit = (destination: string, days: string, startDate: string) => {
    navigate({
      pathname: '/itinerary',
      search: `?destination=${encodeURIComponent(destination)}&days=${days}${startDate ? `&date=${startDate}` : ''}`
    });
  };

  const recentItineraries = [
    {
      id: 1,
      destination: "Jaipur",
      days: "3",
      date: "Feb 15, 2024",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      destination: "Goa",
      days: "5",
      date: "Jan 10, 2024",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop"
    }
  ];

  const upcomingTrip = {
    destination: "Kerala",
    startDate: "Apr 5, 2024",
    endDate: "Apr 12, 2024",
    days: "7",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop"
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin-slow"></div>
                <h2 className="mt-4 text-xl font-medium animate-pulse">Loading your dashboard...</h2>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Dashboard</h1>
                  <p className="text-muted-foreground">Welcome back, Traveler!</p>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    My Profile
                  </Button>
                </div>
              </div>

              {upcomingTrip && (
                <div className="rounded-xl overflow-hidden relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url('${upcomingTrip.image}')`,
                      filter: "brightness(0.7)"
                    }}
                  />
                  <div className="relative z-10 p-6 md:p-8 lg:p-10">
                    <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 max-w-md">
                      <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Upcoming Trip
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{upcomingTrip.destination}</h2>
                      <div className="flex items-center text-sm mb-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{upcomingTrip.startDate} - {upcomingTrip.endDate}</span>
                      </div>
                      <div className="flex space-x-3 mb-4">
                        <Button>View Itinerary</Button>
                        <Button variant="outline">Modify Trip</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <h2 className="text-2xl font-bold mb-4">Create New Trip</h2>
                    <ItineraryForm onSubmit={handleItinerarySubmit} />
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Recent Itineraries</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {recentItineraries.length > 0 ? (
                        recentItineraries.map((itinerary) => (
                          <div 
                            key={itinerary.id}
                            className="rounded-xl overflow-hidden border border-border group hover:shadow-lg transition-all duration-300"
                          >
                            <div className="relative h-40">
                              <img 
                                src={itinerary.image} 
                                alt={itinerary.destination} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                                <h3 className="text-white font-bold">{itinerary.destination}</h3>
                                <div className="flex items-center text-white/90 text-sm">
                                  <Clock className="h-3.5 w-3.5 mr-1" />
                                  <span>{itinerary.days} days</span>
                                  <span className="mx-2">•</span>
                                  <Calendar className="h-3.5 w-3.5 mr-1" />
                                  <span>{itinerary.date}</span>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 flex justify-between items-center">
                              <div className="text-sm text-muted-foreground">
                                <MapPin className="h-3.5 w-3.5 inline mr-1" />
                                <span>{itinerary.destination}, India</span>
                              </div>
                              <Link 
                                to={`/itinerary?destination=${encodeURIComponent(itinerary.destination)}&days=${itinerary.days}`}
                              >
                                <Button variant="ghost" size="sm">
                                  View
                                </Button>
                              </Link>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-2 h-40 border border-dashed border-border rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-muted-foreground mb-2">No recent itineraries found</p>
                            <Button variant="outline" size="sm">
                              Create Your First Trip
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Popular Destinations</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {["Jaipur", "Goa", "Varanasi"].map((destination, index) => (
                        <Button 
                          key={index}
                          variant="outline" 
                          className="h-auto py-6 flex flex-col items-center justify-center gap-2"
                          onClick={() => navigate({
                            pathname: '/itinerary',
                            search: `?destination=${encodeURIComponent(destination)}&days=3`
                          })}
                        >
                          <span className="font-medium">{destination}</span>
                          <span className="text-xs text-muted-foreground">Explore now</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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

export default Dashboard;
