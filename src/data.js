export const WHATSAPP_NUMBER = "7796198503";
export const WHATSAPP_MESSAGE =
  "Hi FYN! I run a small shop and want to grow with you. Can we talk?";
export const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const nav = [
  { label: "Partners", href: "#partners" },
  { label: "Packages", href: "#packages" },
  { label: "Method", href: "#method" },
  { label: "About", href: "#about" },
];

export const partners = [
  "Durva Soup Sadan",
  "Konkani Manus Seafood Mall",
  "Baldman Barber",
  "Sir Loom",
];

export const works = [
  {
    shop: "Durva Soup Sadan",
    type: "Restaurant",
    result: "2.1M+",
    label: "8x daily revenue (as reported by client)",
    work: "Viral reel strategy, ambience, brand positioning",
    watchLink: "https://www.instagram.com/durvasoupsadan/",
  },
  {
    shop: "Konkani Manus Seafood Mall",
    type: "Seafood store",
    result: "300K+",
    label: "5x daily revenue",
    work: "Instagram visibility, presentation, customer retention",
    watchLink: "https://www.instagram.com/konkanimanuspcmc/",
  },
  {
    shop: "Baldman Barber",
    type: "Salon",
    result: "104K+",
    label: "Single reel hit 104K views",
    work: "Personal branding, research-backed educational reels",
    watchLink: "https://www.instagram.com/baldmanbarber/",
  },
  {
    shop: "Sir Loom",
    type: "Launch",
    result: "178K+",
    label: "Before store opening",
    work: "Build-in-public launch series",
    watchLink: "https://www.instagram.com/sirloom.india/",
  },
];

export const packages = [
  {
    name: "Spark",
    tag: "For shops just starting online",
    price: "8,000",
    popular: false,
    features: [
      "8 short videos or reels a month",
      "Google Business profile setup",
      "Logo and colour touch-up",
      "WhatsApp catalogue setup",
      "Monthly progress report",
    ],
  },
  {
    name: "Grow",
    tag: "Our most chosen plan",
    price: "18,000",
    popular: true,
    features: [
      "16 reels and posts a month",
      "Product and shop photoshoot",
      "Instagram and Facebook management",
      "Local ad campaign (ad spend extra)",
      "Offer and festival campaign planning",
      "Fortnightly strategy call",
    ],
  },
  {
    name: "Scale",
    tag: "Full content and business support",
    price: "30,000",
    popular: false,
    features: [
      "30+ pieces of content a month",
      "Monthly on-site shoot",
      "Brand positioning and personal branding",
      "Customer follow-up and review system",
      "Pricing, stock and sales advice",
      "Long-term growth partnership",
    ],
  },
];

export const method = [
  {
    step: "01",
    title: "Find",
    text: "We visit or call, learn your shop, your customers and what is holding sales back.",
  },
  {
    step: "02",
    title: "Plan",
    text: "A simple 30-day plan with clear goals, content ideas and what we need from you.",
  },
  {
    step: "03",
    title: "Create",
    text: "Our creators shoot, edit and publish. You approve everything before it goes live.",
  },
  {
    step: "04",
    title: "Grow",
    text: "We track calls, visits and orders, then double down on whatever works.",
  },
];

export const aboutStats = [
  { value: "4", label: "Brands partnered" },
  { value: "70+", label: "Reels created" },
  { value: "2.8M+", label: "Views generated" },
  { value: "Pune", label: "Base" },
];

export const aboutPoints = [
  "Long-term growth partner for local businesses and public figures",
  "Content, strategy and on-ground support under one roof",
  "Proof-led growth focused on footfall, orders and repeat sales",
];
