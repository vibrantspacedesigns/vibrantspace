export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  description: string;
  coverImage: string;
  images: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: "urban-oasis-residence",
    title: "Urban Oasis Residence",
    category: "Residential",
    location: "New York, NY",
    year: "2024",
    client: "Private Client",
    description: "This modern urban residence creates a peaceful retreat in the heart of the city. The design emphasizes natural light, open spaces, and a seamless connection to a private rooftop garden. Sustainable materials and energy-efficient systems were integrated throughout the home, including solar panels and rainwater harvesting. The interior features a minimalist aesthetic with warm wood accents and custom-designed furniture that complements the architectural elements.",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    ],
    features: [
      "4,500 square feet",
      "4 bedrooms, 3.5 bathrooms",
      "Rooftop garden with city views",
      "Floor-to-ceiling windows",
      "Smart home technology",
      "LEED Gold certified"
    ]
  },
  {
    id: "horizon-corporate-headquarters",
    title: "Horizon Corporate Headquarters",
    category: "Commercial",
    location: "Chicago, IL",
    year: "2023",
    client: "Horizon Technologies",
    description: "The Horizon Corporate Headquarters redefines the modern workplace with a design that promotes collaboration, wellness, and sustainability. The 15-story structure features a distinctive glass facade with integrated solar shading that responds to changing light conditions. Inside, flexible workspaces, communal areas, and biophilic elements create an environment that enhances employee productivity and satisfaction. The building achieved LEED Platinum certification through its innovative energy systems, green roof, and responsible material selection.",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    ],
    features: [
      "250,000 square feet",
      "15 stories",
      "Dynamic glass facade",
      "Green roof and sky gardens",
      "Flexible workspace design",
      "LEED Platinum certified"
    ]
  },
  {
    id: "serenity-wellness-center",
    title: "Serenity Wellness Center",
    category: "Healthcare",
    location: "Seattle, WA",
    year: "2023",
    client: "Serenity Healthcare Group",
    description: "The Serenity Wellness Center was designed to create a healing environment that supports physical and mental wellbeing. The architecture emphasizes natural light, views of nature, and a calming atmosphere through thoughtful material selection and spatial organization. The facility includes treatment rooms, meditation spaces, a hydrotherapy area, and gardens that provide restorative outdoor experiences. The design balances privacy and community, creating spaces for both individual reflection and group activities.",
    coverImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1613977257592-4a9a32f9141b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1613977257365-aaee5a9817f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    features: [
      "35,000 square feet",
      "Therapeutic gardens",
      "Natural material palette",
      "Abundant natural light",
      "Water features",
      "Sustainable design principles"
    ]
  },
  {
    id: "harmony-mixed-use-development",
    title: "Harmony Mixed-Use Development",
    category: "Urban Planning",
    location: "Austin, TX",
    year: "2022",
    client: "Urban Innovations LLC",
    description: "The Harmony development transforms a former industrial site into a vibrant, sustainable neighborhood that integrates residential, commercial, and public spaces. The master plan prioritizes walkability, community interaction, and environmental responsibility. Residential buildings offer a range of housing options, while ground-floor retail, restaurants, and offices create a lively street presence. Public plazas, green spaces, and a community center serve as gathering places, fostering a strong sense of community among residents and visitors.",
    coverImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    features: [
      "12-acre development",
      "350 residential units",
      "75,000 sq ft commercial space",
      "Public plazas and green spaces",
      "Pedestrian and bike-friendly design",
      "Integrated stormwater management"
    ]
  },
  {
    id: "heritage-theater-restoration",
    title: "Heritage Theater Restoration",
    category: "Restoration",
    location: "Boston, MA",
    year: "2022",
    client: "Boston Arts Foundation",
    description: "The restoration of the historic Heritage Theater balanced preservation of its 1920s architectural character with modern upgrades to create a state-of-the-art performance venue. The project involved meticulous restoration of the ornate plasterwork, murals, and decorative elements that define the theater's interior. Technical systems, including acoustics, lighting, and stage equipment, were completely modernized while remaining hidden from view. The result is a space that honors its rich history while meeting the needs of contemporary performances and audiences.",
    coverImage: "https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    features: [
      "1,200-seat capacity",
      "Restored ornamental plasterwork",
      "State-of-the-art acoustics",
      "Modern lighting and sound systems",
      "Expanded lobby and amenities",
      "ADA accessibility upgrades"
    ]
  },
  {
    id: "coastal-retreat",
    title: "Coastal Retreat",
    category: "Residential",
    location: "Malibu, CA",
    year: "2021",
    client: "Private Client",
    description: "This oceanfront residence embraces its stunning natural setting with a design that blurs the boundaries between indoor and outdoor living. Floor-to-ceiling glass walls frame panoramic views of the Pacific Ocean, while sliding doors open to expansive terraces that extend the living space outdoors. The architecture responds to the coastal environment with durable materials, a low-profile silhouette that respects the landscape, and strategic orientation to capture prevailing breezes for natural cooling. Interior spaces feature a palette of natural materials that echo the coastal setting.",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    features: [
      "5,800 square feet",
      "5 bedrooms, 6 bathrooms",
      "Infinity pool overlooking the ocean",
      "Outdoor kitchen and dining area",
      "Home automation system",
      "Sustainable design features"
    ]
  }
];