"use client";

import { AnimatedBackground } from "./components/ui/animated-background";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <Hero />
    </main>
  );
}