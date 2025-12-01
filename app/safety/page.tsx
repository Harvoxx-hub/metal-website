import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Safety Guidelines - The Metal App",
  description: "Learn about safety features and guidelines for using The Metal App. Your safety is our priority.",
};

export default function SafetyPage() {
  const safetyTips = [
    {
      title: "Stay Anonymous Until Ready",
      description: "Use your metal avatar and stay anonymous until you feel comfortable. Only un-melt when both parties agree and you're ready to share more.",
      icon: "🔒",
    },
    {
      title: "Meet in Public Places",
      description: "Always meet in public, well-lit locations for your first few meetings. Avoid private or isolated locations until you've built trust.",
      icon: "📍",
    },
    {
      title: "Tell Someone Your Plans",
      description: "Let a friend or family member know where you're going, who you're meeting, and when you expect to return. Share your location if possible.",
      icon: "👥",
    },
    {
      title: "Trust Your Instincts",
      description: "If something feels off, trust your gut. You're never obligated to continue a conversation or meet someone if you're uncomfortable.",
      icon: "💭",
    },
    {
      title: "Report Inappropriate Behavior",
      description: "Use our reporting feature to report any harassment, inappropriate content, or suspicious behavior. Our team reviews all reports promptly.",
      icon: "🚨",
    },
    {
      title: "Keep Personal Information Private",
      description: "Don't share personal information like your home address, workplace, or financial details until you've built a strong, trusted connection.",
      icon: "🛡️",
    },
  ];

  const safetyFeatures = [
    {
      title: "Anonymous Connections",
      description: "Connect without photos, focusing on personality and values first.",
    },
    {
      title: "Un-Melt Control",
      description: "You decide when to reveal more about yourself. Both parties must agree.",
    },
    {
      title: "Reporting System",
      description: "Easy-to-use reporting tools to flag inappropriate behavior or content.",
    },
    {
      title: "Block & Report",
      description: "Block users and report concerns directly from profiles or chats.",
    },
    {
      title: "Community Guidelines",
      description: "Clear community standards that all users must follow.",
    },
    {
      title: "24/7 Moderation",
      description: "Our team monitors the platform to ensure a safe environment.",
    },
  ];

  return (
    <main className="min-h-screen bg-dark pt-20">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
            Your Safety is Our <span className="metallic-text">Priority</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            We're committed to creating a safe, respectful environment for meaningful connections.
          </p>

          {/* Safety Tips */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Safety Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {safetyTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-dark-tertiary rounded-2xl p-6 border border-dark-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Safety Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {safetyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-dark-tertiary rounded-2xl p-6 border border-dark-border"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Resources */}
          <div className="bg-dark-tertiary rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-white mb-6">Need Immediate Help?</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                If you're in immediate danger, call your local emergency services (911 in North America, 999 in the UK, etc.).
              </p>
              <p className="text-gray-300">
                For support with harassment or abuse, you can also contact:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>National Domestic Violence Hotline: 1-800-799-7233 (US)</li>
                <li>RAINN (Rape, Abuse & Incest National Network): 1-800-656-4673 (US)</li>
                <li>Your local law enforcement</li>
              </ul>
            </div>
          </div>

          {/* Report Section */}
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-block bg-primary-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-primary-glow transition-all duration-300 hover:scale-105"
            >
              Report a Safety Concern
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

