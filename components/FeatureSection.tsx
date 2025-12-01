"use client";

import { motion } from "framer-motion";
import { HiUserGroup } from "react-icons/hi";

export default function FeatureSection() {
  return (
    <section className="py-20 lg:py-32 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-silver/20 to-bronze/20 rounded-2xl flex items-center justify-center overflow-hidden">
              {/* Abstract connection illustration */}
              <div className="relative w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-silver/30 rounded-full blur-2xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 bg-metallic-gradient rounded-full flex items-center justify-center">
                    <HiUserGroup className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Where authentic <span className="metallic-text">connections</span> begin.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Metal, we believe that meaningful relationships aren't built on looks — they grow from real conversations, mutual respect, and shared values. Join anonymous communities, play interactive games, share thoughts, and earn sparks as you build connections. We give you control, privacy, and a safe space to be yourself — no pressure, no judgments.
            </p>
            <div className="bg-dark-tertiary border-l-4 border-primary rounded-lg p-6">
              <p className="text-white text-lg italic">
                "We make meeting someone based on who they are, not what they look like."
              </p>
            </div>
            <button className="bg-primary-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-primary-glow transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
