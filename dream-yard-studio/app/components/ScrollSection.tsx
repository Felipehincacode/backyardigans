'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  onSectionChange?: (section: number) => void;
  sectionIndex: number;
}

export default function ScrollSection({ 
  children, 
  className = "", 
  onSectionChange,
  sectionIndex 
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  useEffect(() => {
    if (isInView && onSectionChange) {
      onSectionChange(sectionIndex);
    }
  }, [isInView, onSectionChange, sectionIndex]);

  return (
    <motion.div
      ref={ref}
      className={`min-h-screen flex items-center justify-center ${className}`}
      style={{ opacity, scale, y }}
    >
      {children}
    </motion.div>
  );
}

// Parallax Text Component
export function ParallaxText({ 
  children, 
  speed = 0.5,
  className = "" 
}: {
  children: string;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return (
    <motion.div
      ref={ref}
      className={`text-6xl md:text-8xl font-bold ${className}`}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
}

// Fade In Component
export function FadeIn({ 
  children, 
  delay = 0,
  direction = "up",
  className = "" 
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const directions = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 }
  };

  return (
    <motion.div
      className={className}
      initial={directions[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Staggered Children Component
export function StaggeredContainer({ 
  children, 
  staggerDelay = 0.1,
  className = "" 
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Staggered Item Component
export function StaggeredItem({ 
  children,
  className = "" 
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
