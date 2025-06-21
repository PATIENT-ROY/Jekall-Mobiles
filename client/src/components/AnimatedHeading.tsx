import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  animation?: "bounce" | "slide" | "fade" | "scale" | "flip";
  delay?: number;
  duration?: number;
}

const AnimatedHeading = ({
  children,
  className = "",
  variant = "h2",
  animation = "bounce",
  delay = 0,
  duration = 0.6,
}: AnimatedHeadingProps) => {
  const animations: Record<string, Variants> = {
    bounce: {
      hidden: {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotateX: -90,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
          type: "spring" as const,
          stiffness: 100,
          damping: 15,
          duration: duration,
          delay: delay,
        },
      },
    },
    slide: {
      hidden: {
        opacity: 0,
        x: -100,
        skewX: -15,
      },
      visible: {
        opacity: 1,
        x: 0,
        skewX: 0,
        transition: {
          type: "spring" as const,
          stiffness: 80,
          damping: 20,
          duration: duration,
          delay: delay,
        },
      },
    },
    fade: {
      hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          type: "tween" as const,
          ease: "easeOut",
          duration: duration,
          delay: delay,
        },
      },
    },
    scale: {
      hidden: {
        opacity: 0,
        scale: 0.5,
        rotate: -180,
      },
      visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          type: "spring" as const,
          stiffness: 120,
          damping: 10,
          duration: duration,
          delay: delay,
        },
      },
    },
    flip: {
      hidden: {
        opacity: 0,
        rotateY: -90,
        scale: 0.8,
      },
      visible: {
        opacity: 1,
        rotateY: 0,
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
  };

  const HeadingComponent = motion[variant as keyof typeof motion] as any;

  return (
    <HeadingComponent
      className={className}
      variants={animations[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </HeadingComponent>
  );
};

export default AnimatedHeading;
