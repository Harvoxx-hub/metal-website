"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import ImageSnippet from "./ImageSnippet";

const steps = [
  {
    title: "Pick Your Metal & Connect Option",
    description: "Create your profile, choose your metal avatar (Gold, Silver, or Bronze), and select your connection preference - whether you're looking for dating, relationships, mentorship, or friendship.",
    imageSrc: "/images/screenshots/metal-connection-option-page.png",
    imageAlt: "Metal App - Connection Options",
  },
  {
    title: "Join Communities & Start Conversations",
    description: "Explore various anonymous communities based on your interests. Chat with people who share your values, play games like truth or dare, and build meaningful connections.",
    imageSrc: "/images/screenshots/metal-community-page.png",
    imageAlt: "Metal App - Community",
  },
  {
    title: "Share Thoughts & Connect",
    description: "Read and share thoughts with the community. Discover people through their ideas and values. If someone's thoughts resonate with you, connect with them.",
    imageSrc: "/images/screenshots/metal-tought-page.png",
    imageAlt: "Metal App - Thoughts",
  },
  {
    title: "Earn Sparks & Un-Melt When Ready",
    description: "Earn spark points by referring friends and engaging with the community. Send sparks to people you want to connect with, or convert them to gift cards. When you're comfortable, un-melt and reveal more about yourself.",
    imageSrc: "/images/screenshots/metal-sparks-page.png",
    imageAlt: "Metal App - Sparks",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The First App for <span className="metallic-text">Blind Connections</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            How Metal Works
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-silver to-bronze transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2" style={{ top: `${(index * 25) + 10}%` }}>
                  <div className="w-6 h-6 bg-primary-gradient rounded-full glow-primary relative z-10" />
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="bg-dark-tertiary rounded-2xl p-6 lg:p-8 border border-dark-border">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Phone Mockup */}
                <div className="flex-1 flex justify-center">
                  <PhoneMockup
                    imageSrc={step.imageSrc}
                    imageAlt={step.imageAlt}
                    className="w-64 lg:w-80"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chat & Un-Melt Snippets at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="flex justify-center">
            <ImageSnippet
              src="/images/screenshots/chat-metal.png"
              alt="Metal App - Chat Snippet"
              className="w-full max-w-sm"
              rotation={3}
              floating={true}
            />
          </div>
          <div className="flex justify-center">
            <ImageSnippet
              src="/images/screenshots/its-a-melt.png"
              alt="Metal App - Un-Melt Snippet"
              className="w-full max-w-sm"
              rotation={-4}
              floating={true}
              delay={0.3}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
