import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "scale" | "slide" | "flip" | "bounce";
  delay?: number;
  duration?: number;
  hover?: boolean;
}

const AnimatedCard = ({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.5,
  hover = true,
}: AnimatedCardProps) => {
  const animations = {
    fadeUp: {
      hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 100,
          damping: 20,
          duration: duration,
          delay: delay,
        },
      },
    },
    scale: {
      hidden: {
        opacity: 0,
        scale: 0.8,
        rotateY: -15,
      },
      visible: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
          type: "spring" as const,
          stiffness: 120,
          damping: 15,
          duration: duration,
          delay: delay,
        },
      },
    },
    slide: {
      hidden: {
        opacity: 0,
        x: -50,
        skewX: -10,
      },
      visible: {
        opacity: 1,
        x: 0,
        skewX: 0,
        transition: {
          type: "spring" as const,
          stiffness: 80,
          damping: 25,
          duration: duration,
          delay: delay,
        },
      },
    },
    flip: {
      hidden: {
        opacity: 0,
        rotateX: -90,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        rotateX: 0,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 100,
          damping: 15,
          duration: duration,
          delay: delay,
        },
      },
    },
    bounce: {
      hidden: {
        opacity: 0,
        y: 50,
        scale: 0.7,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 150,
          damping: 10,
          duration: duration,
          delay: delay,
        },
      },
    },
  };

  const hoverEffects = hover
    ? {
        whileHover: {
          scale: 1.05,
          y: -5,
          transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 20,
          },
        },
        whileTap: {
          scale: 0.95,
        },
      }
    : {};

  return (
    <motion.div
      className={className}
      variants={animations[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...hoverEffects}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
