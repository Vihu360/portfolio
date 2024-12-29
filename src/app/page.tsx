"use client";

import { AnimatedBackground } from "./components/ui/animated-background";
import { Hero } from "./components/hero";
import axios from "axios";

export default function Home() {

  // rendering the keep-alive ping for vid craftersa

  const keepAlive = () => {
    const url = 'https://vid-craftersa.onrender.com/';
    setInterval(async () => {
      try {
        const response = await axios.get(url);
        console.log('Keep-alive ping sent, status:');
      } catch (error) {
        console.error('Keep-alive ping failed:');
      }
    }, 8400); // 14 minutes
  };
  
  keepAlive();
  return (
    <main className="relative">
      <AnimatedBackground />
      <Hero />
    </main>
  );
}