"use client";

import { motion } from "framer-motion";

export default function Comparison() {
  return (
    <section id="why-metal" className="py-20 lg:py-32 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Other Apps vs <span className="metallic-text">Metal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Other Apps Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-tertiary rounded-2xl p-6 sm:p-8 lg:p-10 border border-dark-border"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              100s of matches. 0 real connections.
            </h3>
            <div className="flex items-center space-x-4 mb-6">
              {/* App Icons */}
              <div className="flex space-x-3">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center relative">
                  <span className="text-white font-bold text-xs">T</span>
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    99+
                  </span>
                </div>
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center relative">
                  <span className="text-white font-bold text-xs">B</span>
                  <span className="absolute -top-1 -right-1 bg-yellow-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    64
                  </span>
                </div>
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center relative">
                  <span className="text-white font-bold text-xs">H</span>
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    128
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-base sm:text-lg">
              Endless swiping, ghosting, and wasted time.
            </p>
          </motion.div>

          {/* Metal Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-tertiary rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-primary relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/5 blur-xl" />
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-gradient rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
                <div className="bg-primary/20 rounded-full px-4 py-2">
                  <span className="text-primary font-semibold">1 meaningful connection</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                Every Connection = Real Connection.
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Connect. Chat. Unmelt. Build relationships based on who you are — not how you look.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

