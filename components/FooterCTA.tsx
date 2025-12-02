"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import ImageSnippet from "./ImageSnippet";

export default function FooterCTA() {
  return (
    <section className="py-20 lg:py-32 bg-dark-gradient relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-silver/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Connect Without the <span className="metallic-text">Pressure?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              No more swiping, judging, or superficial matches. Connect based on who you are — not what you look like.
            </p>
            <div className="flex justify-center lg:justify-start">
              <CTAButton variant="primary" />
            </div>
          </motion.div>

          {/* Right: Snippet Images - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Chat Snippet - Top */}
            <div className="absolute top-10 right-10 z-20 w-56 sm:w-64 lg:w-72">
              <ImageSnippet
                src="/images/screenshots/chat-metal.png"
                alt="Metal App - Chat"
                rotation={8}
              />
            </div>

            {/* Un-Melt Snippet - Bottom */}
            <div className="absolute bottom-10 left-10 z-20 w-52 sm:w-60 lg:w-68">
              <ImageSnippet
                src="/images/screenshots/its-a-melt.png"
                alt="Metal App - Un-Melt"
                rotation={-6}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
