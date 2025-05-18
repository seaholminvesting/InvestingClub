import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'beginner' | 'intermediate' | 'advanced' | 'video';
  readTime: string;
  link: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  rating: number;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  day: number;
  month: string;
}
