"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import { HiCheck } from "react-icons/hi";

export default function Referral() {
  return (
    <section className="py-20 lg:py-32 bg-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Phone Mockup with rotated screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup
              imageSrc="/images/screenshots/metal-rotated-page.png"
              imageAlt="Metal App - Referral Program"
              className="w-64 lg:w-80"
              rotated={true}
            />
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
              Refer Friends, <span className="metallic-text">Earn Sparks</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Share Metal with your friends and earn spark points for every referral. The more friends you bring, the more sparks you earn. Use your sparks to send to people you want to connect with, or convert them to gift cards and currency.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <HiCheck className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300">Earn spark points for every successful referral</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <HiCheck className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300">Send sparks to people you want to connect with</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <HiCheck className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300">Convert sparks to gift cards and currency</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
