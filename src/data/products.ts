import bookMindset from "@/assets/book-mindset.jpg";
import bookProductivity from "@/assets/book-productivity.jpg";
import bookConfidence from "@/assets/book-confidence.jpg";

export interface Product {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  featured: boolean;
  description: string;
  benefits: string[];
  amazonUrl?: string;
  etsyUrl?: string;
  shopifyUrl?: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "The Growth Mindset",
    author: "Dr. Sarah Mitchell",
    price: 29.99,
    image: bookMindset,
    rating: 5,
    category: "Mindset",
    featured: true,
    description:
      "Transform your thinking patterns and embrace challenges as opportunities for growth. This comprehensive guide will help you develop a resilient, growth-oriented mindset that propels you toward success.",
    benefits: [
      "Overcome limiting beliefs",
      "Build mental resilience",
      "Embrace challenges with confidence",
      "Create lasting positive change",
    ],
    amazonUrl: "https://amazon.com/dp/B08N5WRWNW", // Example Amazon link
    etsyUrl: "https://etsy.com/listing/1234567890/growth-mindset-ebook", // Example Etsy link
    shopifyUrl: "https://yourstore.myshopify.com/products/growth-mindset", // Example Shopify link
  },
  {
    id: "2",
    title: "Productivity Mastery",
    author: "James Chen",
    price: 24.99,
    image: bookProductivity,
    rating: 5,
    category: "Productivity",
    featured: true,
    description:
      "Master the art of getting things done without burnout. Learn proven strategies to maximize your efficiency, eliminate distractions, and achieve your goals faster than ever.",
    benefits: [
      "Time management techniques",
      "Eliminate procrastination",
      "Focus strategies",
      "Work-life balance methods",
    ],
    amazonUrl: "https://amazon.com/dp/B08P3Q7X9Z",
    etsyUrl: "https://etsy.com/listing/1234567891/productivity-mastery-ebook",
    shopifyUrl: "https://yourstore.myshopify.com/products/productivity-mastery",
  },
  {
    id: "3",
    title: "Confidence Unlocked",
    author: "Emma Rodriguez",
    price: 27.99,
    image: bookConfidence,
    rating: 5,
    category: "Confidence",
    featured: true,
    description:
      "Discover your inner strength and project authentic confidence in every situation. This transformative guide provides practical exercises to boost self-esteem and overcome self-doubt.",
    benefits: [
      "Build unshakeable self-belief",
      "Overcome social anxiety",
      "Speak with authority",
      "Authentic self-expression",
    ],
    amazonUrl: "https://amazon.com/dp/B08Q3Q8X1Y",
    etsyUrl: "https://etsy.com/listing/1234567892/confidence-unlocked-ebook",
    shopifyUrl: "https://yourstore.myshopify.com/products/confidence-unlocked",
  },
  {
    id: "4",
    title: "Mindful Living",
    author: "Dr. Maya Patel",
    price: 22.99,
    image: bookMindset,
    rating: 4,
    category: "Happiness",
    featured: false,
    description:
      "Cultivate presence and inner peace in a chaotic world. Learn mindfulness techniques that reduce stress and increase joy in everyday moments.",
    benefits: [
      "Stress reduction techniques",
      "Present moment awareness",
      "Emotional regulation",
      "Inner peace practices",
    ],
    amazonUrl: "https://amazon.com/dp/B08R5R6P7Q",
    etsyUrl: "https://etsy.com/listing/1234567893/mindful-living-ebook",
    shopifyUrl: "https://yourstore.myshopify.com/products/mindful-living",
  },
  {
    id: "5",
    title: "Goal Setting Blueprint",
    author: "Marcus Thompson",
    price: 26.99,
    image: bookProductivity,
    rating: 5,
    category: "Productivity",
    featured: false,
    description:
      "Turn dreams into achievable goals with this step-by-step system. Learn how to set, track, and accomplish meaningful objectives that align with your values.",
    benefits: [
      "SMART goal framework",
      "Action planning strategies",
      "Progress tracking systems",
      "Motivation maintenance",
    ],
    amazonUrl: "https://amazon.com/dp/B08S5S7T8U",
    etsyUrl: "https://etsy.com/listing/1234567894/goal-setting-blueprint-ebook",
    shopifyUrl: "https://yourstore.myshopify.com/products/goal-setting-blueprint",
  },
  {
    id: "6",
    title: "Social Mastery",
    author: "Lisa Anderson",
    price: 25.99,
    image: bookConfidence,
    rating: 4,
    category: "Confidence",
    featured: false,
    description:
      "Navigate social situations with ease and build meaningful connections. Master the art of conversation, body language, and authentic relationship building.",
    benefits: [
      "Conversation skills",
      "Body language mastery",
      "Networking strategies",
      "Authentic connection",
    ],
    amazonUrl: "https://amazon.com/dp/B08T6T9V9W",
    etsyUrl: "https://etsy.com/listing/1234567895/social-mastery-ebook",
    shopifyUrl: "https://yourstore.myshopify.com/products/social-mastery",
  },
];
