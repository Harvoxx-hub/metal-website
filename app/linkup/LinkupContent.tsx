"use client";

import { motion } from "framer-motion";

export default function LinkupContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Linkup: Safe Group <span className="metallic-text">Connections</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Go on dates in a comfortable group setting. Linkup provides safety, reduces pressure, and creates a relaxed environment for meaningful connections.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* What is Linkup */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-tertiary rounded-2xl p-6 sm:p-8 lg:p-10 border border-dark-border"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              What is Linkup?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Linkup is Metal's innovative group dating feature designed for safety, comfort, and flexibility. Instead of traditional one-on-one dates, Linkup allows you to connect with others in small groups of 10 people or less.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Whether you're not feeling safe going alone, prefer a less intimate setting, or simply want to meet in a relaxed group environment, Linkup provides the perfect solution while still allowing you to chat one-on-one with anyone in the group if you want.
            </p>
          </motion.section>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-dark-tertiary rounded-2xl p-6 sm:p-8 border border-dark-border"
            >
              <div className="w-16 h-16 bg-primary-gradient rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Safety First
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                If you're not feeling safe going on a date alone, Linkup provides a secure group environment where you can connect with confidence and peace of mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark-tertiary rounded-2xl p-6 sm:p-8 border border-dark-border"
            >
              <div className="w-16 h-16 bg-primary-gradient rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-3xl">👥</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Small Groups
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Groups are limited to 10 people or less, creating an intimate yet comfortable setting that's perfect for meaningful conversations and connections.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-dark-tertiary rounded-2xl p-6 sm:p-8 border border-dark-border"
            >
              <div className="w-16 h-16 bg-primary-gradient rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-3xl">💬</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                One-on-One Chat Available
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Even in a group setting, you can still chat privately one-on-one with anyone in the Linkup if you want to have a more personal conversation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-dark-tertiary rounded-2xl p-6 sm:p-8 border border-dark-border"
            >
              <div className="w-16 h-16 bg-primary-gradient rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-3xl">😌</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Less Pressure
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                If you don't want your date to look so intimate or feel too much pressure, Linkup offers a relaxed group atmosphere that feels natural and comfortable.
              </p>
            </motion.div>
          </div>

          {/* How It Works */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-dark-tertiary rounded-2xl p-6 sm:p-8 lg:p-10 border border-dark-border"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              How Linkup Works
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">Join or Create a Linkup</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Browse available Linkups in your area or create your own. Set the location, time, and group size (up to 10 people).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">Connect in the Group</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Meet up with the group in a public or agreed-upon location. Engage in group conversations and get to know everyone in a relaxed setting.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">Chat Privately If You Want</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Use the app to chat one-on-one with anyone in the Linkup group if you want to have a more personal conversation, all while staying in the safe group environment.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-primary/10 border-l-4 border-primary rounded-lg p-6 sm:p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Why Choose Linkup?
            </h2>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Perfect for those who prefer safety in numbers</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Reduces the pressure and intimacy of one-on-one dates</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Allows you to meet multiple people at once</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Still enables private one-on-one conversations through the app</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Creates a natural, relaxed atmosphere for connections</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Ideal for first-time meetings or when you're not ready for intimate dates</span>
              </li>
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
