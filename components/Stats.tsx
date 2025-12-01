"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatCardProps {
  number: number;
  suffix?: string;
  label: string;
  delay: number;
}

function StatCard({ number, suffix = "", label, delay }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-dark-tertiary rounded-2xl p-8 border border-dark-border hover:border-primary/50 transition-all duration-300"
    >
      <div className="text-5xl lg:text-6xl font-bold mb-4 metallic-text">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-400 text-lg">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 lg:py-32 bg-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Real Connections. <span className="metallic-text">Every Day.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <StatCard
            number={15000}
            suffix="+"
            label="Active Users"
            delay={0}
          />
          <StatCard
            number={8500}
            suffix="+"
            label="Connections Made"
            delay={0.1}
          />
          <StatCard
            number={92}
            suffix="%"
            label="Connection Success Rate"
            delay={0.2}
          />
          <StatCard
            number={78}
            suffix="%"
            label="Repeat Connections"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

