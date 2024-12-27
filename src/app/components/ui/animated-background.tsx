"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {/* Base gradient layer */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.15),rgba(15,23,42,0))]" />

        {/* Animated gradient waves */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(800px circle at 0% 0%, rgba(124,58,237,0.15), transparent 50%)",
              "radial-gradient(800px circle at 100% 100%, rgba(124,58,237,0.15), transparent 50%)",
              "radial-gradient(800px circle at 0% 100%, rgba(124,58,237,0.15), transparent 50%)",
              "radial-gradient(800px circle at 100% 0%, rgba(124,58,237,0.15), transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-purple-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Mouse follower */}
        <motion.div
          className="absolute h-72 w-72 rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(124,58,237,0.12), transparent 70%)",
            x: mousePosition.x - 144,
            y: mousePosition.y - 144,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
          }}
        />

        {/* Scroll-based animation */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(to bottom, transparent, rgba(124,58,237,0.1))",
            y: scrollPosition * 0.5,
          }}
        />
      </div>
    </div>
  );
};
