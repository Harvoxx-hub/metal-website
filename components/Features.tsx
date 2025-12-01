"use client";

import { motion } from "framer-motion";
import ImageSnippet from "./ImageSnippet";

const features = [
  {
    title: "Anonymous Communities",
    description: "Join various communities based on your interests. Chat and connect with people anonymously, all while staying true to who you are.",
    imageSrc: "/images/screenshots/metal-community-page.png",
    imageAlt: "Metal App - Community Feature",
  },
  {
    title: "Interactive Games",
    description: "Break the ice with fun games like truth or dare. Play multiple games directly in the chat to make conversations more engaging and less awkward.",
    imageSrc: "/images/screenshots/metal-game-page.png",
    imageAlt: "Metal App - Games Feature",
  },
  {
    title: "Share Your Thoughts",
    description: "Express yourself through thoughts. Read what others are thinking, and connect with people whose ideas resonate with you.",
    imageSrc: "/images/screenshots/metal-tought-page.png",
    imageAlt: "Metal App - Thoughts Feature",
  },
  {
    title: "Earn & Send Sparks",
    description: "Refer friends to earn spark points. Send sparks to people you want to connect with, or convert your sparks to gift cards and currency.",
    imageSrc: "/images/screenshots/metal-sparks-page.png",
    imageAlt: "Metal App - Sparks Feature",
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-32 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powerful Features for <span className="metallic-text">Real Connections</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to build meaningful relationships based on who you are
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-tertiary rounded-2xl p-6 lg:p-8 border border-dark-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className={`flex justify-center ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                  <ImageSnippet
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="w-48 lg:w-64"
                    rotation={index % 2 === 0 ? 3 : -3}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chat & Un-Melt Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <div className="bg-dark-tertiary rounded-2xl p-6 lg:p-8 border border-dark-border">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Real Conversations
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Chat with people based on shared interests and values. Every conversation starts with who you are, not what you look like.
            </p>
            <div className="flex justify-center">
              <ImageSnippet
                src="/images/screenshots/chat-metal.png"
                alt="Metal App - Chat Conversation"
                className="w-full max-w-xs"
                rotation={2}
              />
            </div>
          </div>

          <div className="bg-dark-tertiary rounded-2xl p-6 lg:p-8 border border-dark-border">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Un-Melt When Ready
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Take control of your privacy. Reveal more about yourself only when you feel comfortable and there's a mutual connection.
            </p>
            <div className="flex justify-center">
              <ImageSnippet
                src="/images/screenshots/its-a-melt.png"
                alt="Metal App - Un-Melt Feature"
                className="w-full max-w-xs"
                rotation={-3}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
