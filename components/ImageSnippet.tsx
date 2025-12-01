"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageSnippetProps {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
  delay?: number;
  floating?: boolean;
}

export default function ImageSnippet({
  src,
  alt,
  className = "",
  rotation = 0,
  delay = 0,
  floating = false,
}: ImageSnippetProps) {
  const floatingAnimation = floating
    ? {
        animate: {
          y: [0, -10, 0],
          rotate: [rotation, rotation + 2, rotation],
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      {...floatingAnimation}
      className={`relative ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-primary-glow">
        <Image
          src={src}
          alt={alt}
          width={400}
          height={600}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 200px, (max-width: 1200px) 300px, 400px"
        />
      </div>
    </motion.div>
  );
}

