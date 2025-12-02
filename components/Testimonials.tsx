"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Finally, an app that focuses on who I am, not what I look like. I've made genuine friendships here.",
    author: "Sarah",
    age: 29,
    metal: "gold",
  },
  {
    quote: "The un-melt feature gave me so much control. I revealed myself only when I felt truly comfortable.",
    author: "Michael",
    age: 34,
    metal: "silver",
  },
  {
    quote: "I found my travel buddy through Metal! We connected over shared values, not photos.",
    author: "Emma",
    age: 26,
    metal: "bronze",
  },
  {
    quote: "As someone who values privacy, Metal is perfect. Real conversations, real connections.",
    author: "David",
    age: 31,
    metal: "gold",
  },
];

const metalColors = {
  gold: "bg-primary-gradient text-white",
  silver: "bg-silver-gradient text-dark",
  bronze: "bg-gradient-to-br from-bronze to-bronze-dark text-white",
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Early Members Are <span className="metallic-text">Saying</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-tertiary rounded-2xl p-5 sm:p-6 border border-dark-border hover:border-primary/50 transition-all duration-300"
            >
              <p className="text-white mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className={`w-10 h-10 ${metalColors[testimonial.metal as keyof typeof metalColors]} rounded-full flex items-center justify-center font-bold mr-3`}>
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.age}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

