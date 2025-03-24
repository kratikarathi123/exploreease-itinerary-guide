import { Activity, Hotel, Attraction } from "../components/ItineraryDay";

export const popularDestinations = [
  {
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop",
    description: "Known as the 'Pink City', Jaipur is famous for its stunning architecture and royal heritage.",
    tags: ["Heritage", "Architecture"]
  },
  {
    name: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop",
    description: "India's beach paradise with golden sands, vibrant nightlife, and Portuguese-influenced culture.",
    tags: ["Beaches", "Nightlife"]
  },
  {
    name: "Varanasi",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=2070&auto=format&fit=crop",
    description: "One of the world's oldest continuously inhabited cities and a spiritual hub on the Ganges River.",
    tags: ["Spiritual", "Historic"]
  },
  {
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
    description: "Known for its backwaters, tea plantations, and Ayurvedic traditions.",
    tags: ["Nature", "Relaxation"]
  },
  {
    name: "Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop",
    description: "Home to the iconic Taj Mahal, one of the world's most beautiful monuments.",
    tags: ["Monument", "Architecture"]
  },
  {
    name: "Darjeeling",
    image: "https://images.unsplash.com/photo-1544686093-e1a6078b1c76?q=80&w=2070&auto=format&fit=crop",
    description: "Famous for its tea plantations, stunning Himalayan views, and the toy train.",
    tags: ["Mountains", "Tea"]
  }
];

// Sample itinerary activities for different destinations
const itineraries: Record<string, Activity[][]> = {
  "jaipur": [
    // Day 1
    [
      {
        time: "08:00 AM",
        title: "Breakfast at local cafe",
        description: "Start your day with a traditional Rajasthani breakfast at a local cafe.",
        location: "Old City, Jaipur"
      },
      {
        time: "09:30 AM",
        title: "Visit Amber Fort",
        description: "Explore the majestic Amber Fort, known for its artistic Hindu style elements.",
        location: "Amer, Jaipur"
      },
      {
        time: "01:00 PM",
        title: "Lunch at Chokhi Dhani",
        description: "Enjoy authentic Rajasthani cuisine at this popular restaurant.",
        location: "Chokhi Dhani, Jaipur"
      },
      {
        time: "03:00 PM",
        title: "City Palace Tour",
        description: "Visit the City Palace, a breathtaking blend of Rajasthani and Mughal architecture.",
        location: "City Palace, Jaipur"
      },
      {
        time: "06:00 PM",
        title: "Shopping at Johari Bazaar",
        description: "Shop for traditional Rajasthani crafts, textiles, and jewelry.",
        location: "Johari Bazaar, Jaipur"
      },
      {
        time: "08:00 PM",
        title: "Dinner at Peacock Rooftop",
        description: "Enjoy dinner with a view of the illuminated Pink City.",
        location: "Peacock Rooftop Restaurant, Jaipur"
      }
    ],
    // Day 2
    [
      {
        time: "08:00 AM",
        title: "Breakfast at hotel",
        description: "Enjoy breakfast at your hotel.",
        location: "Your hotel, Jaipur"
      },
      {
        time: "09:30 AM",
        title: "Hawa Mahal Visit",
        description: "Visit the iconic 'Palace of Winds' with its unique honeycomb facade.",
        location: "Hawa Mahal, Jaipur"
      },
      {
        time: "12:00 PM",
        title: "Lunch at LMB",
        description: "Try the famous Rajasthani thali at Laxmi Misthan Bhandar.",
        location: "LMB, Jaipur"
      },
      {
        time: "02:00 PM",
        title: "Jantar Mantar Tour",
        description: "Explore this UNESCO World Heritage site featuring astronomical instruments.",
        location: "Jantar Mantar, Jaipur"
      },
      {
        time: "04:30 PM",
        title: "Visit Albert Hall Museum",
        description: "Discover the oldest museum in Rajasthan with its rich collection.",
        location: "Albert Hall Museum, Jaipur"
      },
      {
        time: "07:00 PM",
        title: "Dinner and cultural show",
        description: "Experience traditional Rajasthani dance and music while dining.",
        location: "Nahargarh Haveli, Jaipur"
      }
    ],
    // Day 3
    [
      {
        time: "08:00 AM",
        title: "Breakfast at hotel",
        description: "Enjoy breakfast at your hotel.",
        location: "Your hotel, Jaipur"
      },
      {
        time: "09:30 AM",
        title: "Nahargarh Fort Visit",
        description: "Explore this stunning fort with panoramic views of the city.",
        location: "Nahargarh Fort, Jaipur"
      },
      {
        time: "12:30 PM",
        title: "Lunch at Padao",
        description: "Enjoy lunch with a view at this restaurant in Nahargarh Fort.",
        location: "Padao Restaurant, Nahargarh Fort"
      },
      {
        time: "02:30 PM",
        title: "Jal Mahal photo stop",
        description: "Take photos of the beautiful Water Palace in Man Sagar Lake.",
        location: "Jal Mahal, Jaipur"
      },
      {
        time: "04:00 PM",
        title: "Visit Birla Temple",
        description: "Explore this beautiful white marble temple dedicated to Lord Vishnu and Goddess Lakshmi.",
        location: "Birla Temple, Jaipur"
      },
      {
        time: "06:30 PM",
        title: "Farewell dinner",
        description: "Enjoy your last evening in Jaipur with a special dinner.",
        location: "1135 AD, Amber Fort"
      }
    ]
  ],
  "goa": [
    // Day 1
    [
      {
        time: "08:00 AM",
        title: "Breakfast at hotel",
        description: "Start your day with a leisurely breakfast at your hotel.",
        location: "Your hotel, Goa"
      },
      {
        time: "10:00 AM",
        title: "Baga Beach",
        description: "Relax at one of Goa's most popular beaches with various water sports options.",
        location: "Baga Beach, North Goa"
      },
      {
        time: "01:00 PM",
        title: "Lunch at Britto's",
        description: "Enjoy fresh seafood at this popular beachside restaurant.",
        location: "Britto's, Baga Beach"
      },
      {
        time: "03:00 PM",
        title: "Visit Calangute Beach",
        description: "Experience the vibrant atmosphere of Goa's largest beach.",
        location: "Calangute Beach, North Goa"
      },
      {
        time: "06:00 PM",
        title: "Visit Tito's Street",
        description: "Explore the famous strip known for shopping and nightlife.",
        location: "Tito's Street, Baga"
      },
      {
        time: "08:00 PM",
        title: "Dinner and nightlife",
        description: "Experience Goa's famous nightlife at one of the beach clubs.",
        location: "Tito's Lane, Baga"
      }
    ],
    // Add more days for Goa similarly
  ],
  // Add more destinations similarly
};

// Sample hotels for different destinations
const hotels: Record<string, Hotel[]> = {
  "jaipur": [
    {
      name: "Taj Rambagh Palace",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop",
      price: "₹25,000/night",
      rating: 5,
      location: "Bhawani Singh Road, Jaipur"
    },
    {
      name: "ITC Rajputana",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      price: "₹12,000/night",
      rating: 4,
      location: "Palace Road, Jaipur"
    },
    {
      name: "Trident Jaipur",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
      price: "₹9,500/night",
      rating: 4,
      location: "Amber Fort Road, Jaipur"
    },
    {
      name: "The Oberoi Rajvilas",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      price: "₹30,000/night",
      rating: 5,
      location: "Goner Road, Jaipur"
    }
  ],
  "goa": [
    {
      name: "W Goa",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop",
      price: "₹18,000/night",
      rating: 5,
      location: "Vagator Beach, North Goa"
    },
    {
      name: "Taj Fort Aguada",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2032&auto=format&fit=crop",
      price: "₹15,000/night",
      rating: 4,
      location: "Sinquerim Beach, North Goa"
    },
    {
      name: "Alila Diwa Goa",
      image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1974&auto=format&fit=crop",
      price: "₹12,500/night",
      rating: 4,
      location: "Majorda, South Goa"
    }
  ],
  // Add more destinations similarly
};

// Sample attractions for different destinations
const attractions: Record<string, Attraction[]> = {
  "jaipur": [
    {
      name: "Jaigarh Fort",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
      description: "Situated on the promontory called the Cheel ka Teela (Hill of Eagles) of the Aravalli range.",
      distance: "5 km",
      rating: 4
    },
    {
      name: "Elephant Joy",
      image: "https://images.unsplash.com/photo-1577110581888-040bdb9474c9?q=80&w=2071&auto=format&fit=crop",
      description: "Ethical elephant sanctuary where you can interact with elephants in a responsible way.",
      distance: "12 km",
      rating: 5
    },
    {
      name: "Galtaji Temple",
      image: "https://images.unsplash.com/photo-1545156071-39024508ea65?q=80&w=1935&auto=format&fit=crop",
      description: "An ancient Hindu pilgrimage site with natural springs and temples in a mountain pass.",
      distance: "10 km",
      rating: 4
    },
    {
      name: "Sisodia Rani Garden",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop",
      description: "A multi-level garden with fountains, pavilions, and murals depicting the love story of Radha and Krishna.",
      distance: "8 km",
      rating: 3
    }
  ],
  "goa": [
    {
      name: "Dudhsagar Falls",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1935&auto=format&fit=crop",
      description: "One of India's tallest waterfalls, located in the Bhagwan Mahavir Wildlife Sanctuary.",
      distance: "60 km",
      rating: 5
    },
    {
      name: "Basilica of Bom Jesus",
      image: "https://images.unsplash.com/photo-1551927336-09d50efd69cd?q=80&w=1949&auto=format&fit=crop",
      description: "UNESCO World Heritage Site containing the relics of St. Francis Xavier.",
      distance: "15 km",
      rating: 4
    },
    {
      name: "Fort Aguada",
      image: "https://images.unsplash.com/photo-1590064661010-d542a1501de0?q=80&w=1932&auto=format&fit=crop",
      description: "A well-preserved 17th-century Portuguese fort and lighthouse offering panoramic views.",
      distance: "8 km",
      rating: 4
    }
  ],
  // Add more destinations similarly
};

// Generate AI-based itinerary for destinations not in our database
const generateAIItinerary = (destination: string, days: number): {
  activities: Activity[][];
  hotels: Hotel[];
  attractions: Attraction[];
} => {
  const activities: Activity[][] = [];
  
  // Generate placeholder activities for each day
  for (let day = 0; day < days; day++) {
    const dayActivities: Activity[] = [];
    
    // Morning activities
    dayActivities.push({
      time: "08:00 AM",
      title: `Breakfast at local ${destination} cafe`,
      description: `Enjoy authentic local cuisine at a popular cafe in ${destination}.`,
      location: `${destination} City Center`
    });
    
    dayActivities.push({
      time: "09:30 AM",
      title: `Visit ${destination} Cultural Heritage Site`,
      description: `Explore the rich cultural heritage and historical significance of ${destination}.`,
      location: `${destination} Heritage Area`
    });
    
    // Afternoon activities
    dayActivities.push({
      time: "12:30 PM",
      title: "Lunch at recommended restaurant",
      description: `Try the local specialties and flavors of ${destination}.`,
      location: `Downtown ${destination}`
    });
    
    dayActivities.push({
      time: "02:00 PM",
      title: `${destination} Nature Experience`,
      description: `Experience the natural beauty and landscapes unique to ${destination}.`,
      location: `${destination} Nature Park`
    });
    
    // Evening activities
    dayActivities.push({
      time: "05:00 PM",
      title: "Shopping and Local Crafts",
      description: `Discover local handicrafts, souvenirs and traditional items from ${destination}.`,
      location: `${destination} Market Street`
    });
    
    dayActivities.push({
      time: "07:30 PM",
      title: "Dinner and Cultural Show",
      description: `Experience local cuisine and traditional entertainment of ${destination}.`,
      location: `${destination} Cultural Center`
    });
    
    activities.push(dayActivities);
  }
  
  // Generate placeholder hotels
  const generatedHotels: Hotel[] = [
    {
      name: `${destination} Luxury Resort`,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      price: "₹15,000/night",
      rating: 5,
      location: `Central ${destination}`
    },
    {
      name: `${destination} Heritage Hotel`,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop",
      price: "₹8,500/night",
      rating: 4,
      location: `Old Town, ${destination}`
    },
    {
      name: `${destination} Budget Stay`,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
      price: "₹4,000/night",
      rating: 3,
      location: `${destination} City Area`
    }
  ];
  
  // Generate placeholder attractions
  const generatedAttractions: Attraction[] = [
    {
      name: `${destination} Historical Monument`,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop",
      description: `One of the most iconic historical monuments in ${destination} with rich cultural heritage.`,
      distance: "3 km",
      rating: 5
    },
    {
      name: `${destination} Nature Reserve`,
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1935&auto=format&fit=crop",
      description: `Beautiful natural landscapes and wildlife unique to the ${destination} region.`,
      distance: "12 km",
      rating: 4
    },
    {
      name: `${destination} Cultural Museum`,
      image: "https://images.unsplash.com/photo-1577110581888-040bdb9474c9?q=80&w=2071&auto=format&fit=crop",
      description: `Learn about the rich culture and traditions of ${destination} through historical artifacts.`,
      distance: "5 km",
      rating: 4
    },
    {
      name: `${destination} Local Markets`,
      image: "https://images.unsplash.com/photo-1545156071-39024508ea65?q=80&w=1935&auto=format&fit=crop",
      description: `Experience the vibrant local shopping scene and find unique souvenirs from ${destination}.`,
      distance: "2 km",
      rating: 4
    }
  ];
  
  return {
    activities,
    hotels: generatedHotels,
    attractions: generatedAttractions
  };
};

// Get itinerary based on destination and number of days
export const getItinerary = (destination: string, days: number) => {
  const normalizedDestination = destination.toLowerCase();
  
  // Find matching destination or generate AI-based itinerary
  const destinationKey = Object.keys(itineraries).find(key => 
    key === normalizedDestination || normalizedDestination.includes(key)
  );
  
  if (destinationKey) {
    // Get activities based on number of days from our database
    const activities = itineraries[destinationKey]?.slice(0, days) || [];
    
    // If requested days is more than available days, repeat the last day
    if (activities.length < days) {
      const lastDay = activities[activities.length - 1];
      for (let i = activities.length; i < days; i++) {
        activities.push(lastDay);
      }
    }
    
    return {
      activities,
      hotels: hotels[destinationKey] || hotels["jaipur"],
      attractions: attractions[destinationKey] || attractions["jaipur"]
    };
  } else {
    // Generate AI-based itinerary for destinations not in our database
    return generateAIItinerary(destination, days);
  }
};
