"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from "react-icons/hi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-dark pt-20">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
            Contact <span className="metallic-text">Us</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Have a question or need support? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-dark-tertiary rounded-2xl p-5 sm:p-6 lg:p-8 border border-dark-border">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send us a message</h2>
              
              {submitted ? (
                <div className="bg-primary/20 border border-primary rounded-lg p-6 text-center">
                  <HiCheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Message sent!</h3>
                  <p className="text-gray-300">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-dark-secondary border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-dark-secondary border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-dark-secondary border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-dark-secondary border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-gradient text-white px-6 py-3 rounded-lg font-semibold hover:shadow-primary-glow transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-dark-tertiary rounded-2xl p-5 sm:p-6 lg:p-8 border border-dark-border">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get in touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <HiMail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:contact@themetalapp.com" className="text-primary hover:text-primary-light transition-colors">
                        contact@themetalapp.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <HiPhone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a href="tel:+12267913817" className="text-primary hover:text-primary-light transition-colors">
                      +1 (289) 627-8486
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <HiLocationMarker className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Address</h3>
                      <p className="text-gray-300">
                        
                      Toronto, Ontario, Canada <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
