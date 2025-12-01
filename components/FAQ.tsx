"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How is Metal different from other dating apps?",
    answer: "Metal focuses on personality, values, and meaningful conversations rather than appearances. You choose a metal avatar instead of uploading photos, and you stay anonymous until both parties agree to 'un-melt' and reveal more about yourselves.",
  },
  {
    question: "What are Metal Communities?",
    answer: "Metal Communities are anonymous groups based on shared interests. You can join various communities, chat with members, and connect with people who share your values — all while staying anonymous until you're ready to reveal more.",
  },
  {
    question: "What games can I play on Metal?",
    answer: "Metal offers interactive games like truth or dare that you can play directly in chat. These games help break the ice and make conversations more engaging and fun. More games are being added regularly!",
  },
  {
    question: "What are Sparks and how do I earn them?",
    answer: "Sparks are points you earn by referring friends to Metal and engaging with the community. You can send sparks to people you want to connect with, or convert them to gift cards and currency. The more you engage, the more sparks you earn!",
  },
  {
    question: "What does 'un-melt' mean?",
    answer: "Un-melting is when both parties in a connection agree to reveal more about themselves — like photos, real names, or additional personal information. You have complete control over when (or whether) you un-melt.",
  },
  {
    question: "Can I use Metal for friendships, not just dating?",
    answer: "Absolutely! Metal is designed for all types of connections — friendships, mentorships, travel buddies, activity partners, or just meaningful conversations. When you sign up, you select your connection preference (dating, relationship, mentorship, friendship, etc.).",
  },
  {
    question: "What are Thoughts on Metal?",
    answer: "Thoughts allow you to share your ideas and read what others are thinking. It's a way to connect with people based on their thoughts and values. If someone's thoughts resonate with you, you can connect with them directly.",
  },
  {
    question: "Is my information private?",
    answer: "Yes, privacy is at the core of Metal. Your photos and personal information remain hidden until you choose to un-melt with someone. We never share your data without your explicit consent.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="metallic-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-tertiary rounded-lg border border-dark-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-dark-secondary transition-colors"
              >
                <span className="text-white font-semibold text-lg">{faq.question}</span>
                <HiChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
