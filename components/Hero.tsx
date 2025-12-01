"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-gradient pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-secondary to-dark opacity-90 z-0" />
      
      {/* Particles Background */}
      <Particles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Real Connections.
              <br />
              <span className="metallic-text">No Pictures.</span>
              <br />
              No Pressure.
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're revolutionizing how people connect by focusing on personality, values, and meaningful conversations — not appearances.
            </p>
            <div className="flex justify-center">
              <CTAButton variant="primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
