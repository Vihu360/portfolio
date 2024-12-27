import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, idx) => {
        // Add specific styles for DESIGNER and DEVELOPER
        const wordStyle =
          word.toLowerCase() === "designer"
            ? "text-red-500 font-bold text-5xl lg:text-7xl"
            : word.toLowerCase() === "developer"
            ? "text-blue-500 font-bold text-5xl lg:text-7xl"
            : "";

        return (
          <motion.span
            variants={child}
            key={idx}
            className={`inline-block mr-2 ${wordStyle}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
