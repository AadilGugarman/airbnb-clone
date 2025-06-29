const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] }
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] }
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] }
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] }
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.044, 39.0968] }
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] }
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.2333, 46.1001] }
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] }
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [4.8952, 52.3702] }
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: { type: "Point", coordinates: [179.194, -16.5782] }
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.8378, 51.8333] }
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.0589, 42.3601] }
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3923, 7.8804] }
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1699626665792-77b2eef3a0af?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingimage"
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-4.2026, 57.1201] }
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Coastal Cliffside Villa",
    description: "Enjoy breathtaking sunsets over the ocean from this luxury cliffside villa.",
    image: {
      url: "https://images.unsplash.com/photo-1601771237249-1c0fa6db00ff?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingimage"
    },
    price: 3800,
    location: "Santorini",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    title: "Lakeview Glass Cabin",
    description: "Modern glass cabin with panoramic views of the lake and forest surroundings.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2200,
    location: "British Columbia",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-123.1207, 49.2827] }
  },
  {
    title: "Countryside Barn Loft",
    description: "A rustic converted barn in the quiet countryside. Peace and tranquility await.",
    image: {
      url: "https://images.unsplash.com/photo-1600585153817-ff0c97cc47f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 950,
    location: "Yorkshire",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.0803, 53.9590] }
  },
  {
    title: "Minimalist Tokyo Apartment",
    description: "A sleek and stylish apartment in the heart of Tokyo with all modern amenities.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1661963540233-94097ba21f27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRva3lvJTIwYXBhcnRtZW50fGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 1400,
    location: "Tokyo",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
  },
  {
    title: "Jungle Tree Lodge",
    description: "Immerse yourself in nature in this open-air lodge in the lush jungle.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1686090450488-48ce19426bbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGp1bmdsZSUyMHRyZWUlMjBsb2RnZXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 1300,
    location: "Ubud",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.2625, -8.5069] }
  },
  {
    title: "Romantic Paris Studio",
    description: "Quaint studio apartment steps from the Eiffel Tower. Perfect for couples.",
    image: {
      url: "https://images.unsplash.com/photo-1517737528656-b04c0992516a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFJvbWFudGljJTIwUGFyaXMlMjBTdHVkaW98ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 1700,
    location: "Paris",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
  },
  {
    title: "Icelandic Aurora Cabin",
    description: "Watch the northern lights dance above you from this cozy cabin in Iceland.",
    image: {
      url: "https://images.unsplash.com/photo-1642781518748-0e2fce1c733f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGl0bGUlM0ElMjAlMjJJY2VsYW5kaWMlMjBBdXJvcmElMjBDYWJpbiUyMiUyQ3xlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1582056615894-1e8c8163ec44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2500,
    location: "Reykjavik",
    country: "Iceland",
    geometry: { type: "Point", coordinates: [-21.8174, 64.1265] }
  },
  {
    title: "Modern Desert Dome",
    description: "Unique dome stay in the desert with stunning stargazing opportunities.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1732283132703-7ad24bfbd054?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGl0bGUlM0ElMjAlMjJNb2Rlcm4lMjBEZXNlcnQlMjBEb21lJTIyJTJDfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1642953233159-e70ddcbf49ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1100,
    location: "Joshua Tree",
    country: "United States",
    geometry: { type: "Point", coordinates: [-116.3131, 34.1347] }
  },
  {
    title: "Cityscape Rooftop Apartment",
    description: "Urban apartment with rooftop access and stunning city skyline views.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2100,
    location: "Chicago",
    country: "United States",
    geometry: { type: "Point", coordinates: [-87.6298, 41.8781] }
  },
  {
    title: "Rainforest Eco Lodge",
    description: "Sustainable eco-lodge nestled deep within the Amazon rainforest.",
    image: {
      url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1900,
    location: "Manaus",
    country: "Brazil",
    geometry: { type: "Point", coordinates: [-60.0217, -3.1190] }
  }
  
];

module.exports = { data: sampleListings };
