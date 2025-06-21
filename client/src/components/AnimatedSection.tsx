import { motion, Variants } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  ref?: React.Ref<HTMLDivElement>;
  animation?: "fadeUp" | "fadeIn" | "slideUp" | "scaleIn" | "stagger";
  delay?: number;
  duration?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  (
    {
      children,
      className = "",
      id,
      animation = "fadeUp",
      delay = 0,
      duration = 0.6,
      staggerChildren = false,
      staggerDelay = 0.1,
    },
    ref
  ) => {
    const animations: Record<string, Variants> = {
      fadeUp: {
        hidden: {
          opacity: 0,
          y: 60,
          filter: "blur(5px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 20,
            duration: duration,
            delay: delay,
            staggerChildren: staggerChildren ? staggerDelay : 0,
          },
        },
      },
      fadeIn: {
        hidden: {
          opacity: 0,
          scale: 0.95,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            type: "tween" as const,
            ease: "easeOut",
            duration: duration,
            delay: delay,
            staggerChildren: staggerChildren ? staggerDelay : 0,
          },
        },
      },
      slideUp: {
        hidden: {
          opacity: 0,
          y: 100,
          rotateX: -15,
        },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 25,
            duration: duration,
            delay: delay,
            staggerChildren: staggerChildren ? staggerDelay : 0,
          },
        },
      },
      scaleIn: {
        hidden: {
          opacity: 0,
          scale: 0.8,
          rotateY: -10,
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
            staggerChildren: staggerChildren ? staggerDelay : 0,
          },
        },
      },
      stagger: {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      },
    };

    const childVariants: Variants = {
      hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 100,
          damping: 15,
        },
      },
    };

    return (
      <motion.div
        id={id}
        className={className}
        variants={animations[animation]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        ref={ref}
      >
        {staggerChildren ? (
          <motion.div variants={childVariants}>{children}</motion.div>
        ) : (
          children
        )}
      </motion.div>
    );
  }
);

export default AnimatedSection;
