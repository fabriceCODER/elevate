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
  },
];
