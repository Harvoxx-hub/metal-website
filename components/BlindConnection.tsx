"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlindConnection() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/images/screenshots/blindflod.png"
                alt="Blind Connection - Two people chatting with blindfolds, representing blind dating concept"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Connect Without <span className="metallic-text">Seeing</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              The Metal App revolutionizes how people connect by removing appearance from the equation. Instead of swiping through photos, you connect based on personality, values, and meaningful conversations.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🎭</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-lg">Choose Your Metal Avatar</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Instead of uploading photos, select a metal avatar (Gold, Silver, or Bronze) that represents you. Stay anonymous and let your personality shine through.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">💬</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-lg">Meaningful Conversations</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Chat with people based on shared interests, values, and compatibility. Every conversation starts with who you are, not what you look like.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🔓</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-lg">Un-Melt When Ready</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Take complete control of your privacy. Reveal more about yourself—photos, real names, or personal info—only when you feel comfortable and there's a mutual connection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-tertiary border-l-4 border-primary rounded-lg p-4 sm:p-6 mt-6">
              <p className="text-white text-base sm:text-lg italic">
                "We believe that meaningful relationships aren't built on looks — they grow from real conversations, mutual respect, and shared values. No pressure, no judgments, just authentic connections."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

