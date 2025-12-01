import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Help Center - The Metal App",
  description: "Get help and support for The Metal App. Find answers to common questions and learn how to use our blind connection platform.",
};

export default function SupportPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          q: "How do I create an account?",
          a: "Download The Metal App from the App Store or Google Play, then follow the signup process. You'll choose your metal avatar (Gold, Silver, or Bronze) and set up your profile with your interests and values.",
        },
        {
          q: "What is a metal avatar?",
          a: "A metal avatar is how you're represented on Metal before you choose to 'un-melt'. You can choose from Gold, Silver, or Bronze. This allows you to connect anonymously while building relationships based on personality and values.",
        },
        {
          q: "How do I choose my connection preference?",
          a: "During signup, you'll be asked what you're looking for: dating, relationships, mentorship, friendship, or just someone to talk to. You can update this preference anytime in your profile settings.",
        },
      ],
    },
    {
      title: "Using The App",
      questions: [
        {
          q: "How do I join a community?",
          a: "Browse available communities based on your interests. Tap on a community to view details and join. Once you're a member, you can chat with other members anonymously.",
        },
        {
          q: "What are Sparks?",
          a: "Sparks are points you earn by referring friends and engaging with the community. You can send sparks to people you want to connect with, or convert them to gift cards and currency.",
        },
        {
          q: "How do I play games with someone?",
          a: "In any chat, you'll see game options like 'Truth or Dare'. Tap the game icon to start playing interactive games that help break the ice and make conversations more engaging.",
        },
        {
          q: "What does 'un-melt' mean?",
          a: "Un-melting is when both parties in a connection agree to reveal more about themselves—like photos, real names, or additional personal information. You have complete control over when (or whether) you un-melt.",
        },
      ],
    },
    {
      title: "Privacy & Safety",
      questions: [
        {
          q: "Is my information private?",
          a: "Yes, privacy is at the core of Metal. Your photos and personal information remain hidden until you choose to un-melt with someone. We never share your data without your explicit consent.",
        },
        {
          q: "How do I report inappropriate behavior?",
          a: "You can report any user or content by tapping the report button in their profile or in the chat. Our safety team reviews all reports and takes appropriate action.",
        },
        {
          q: "What safety features does Metal have?",
          a: "Metal encourages meeting in public spaces and provides safety guidelines. We also have reporting and blocking features to ensure your interactions are secure.",
        },
      ],
    },
    {
      title: "Account & Billing",
      questions: [
        {
          q: "How do I delete my account?",
          a: "Go to Settings > Account > Delete Account. Please note that this action is permanent and cannot be undone.",
        },
        {
          q: "How do I change my metal avatar?",
          a: "You can change your metal avatar in Settings > Profile. However, this will reset your connections, so choose carefully.",
        },
        {
          q: "How do I convert Sparks to gift cards?",
          a: "Go to the Sparks section in your profile, then tap 'Convert to Gift Card'. Follow the prompts to redeem your sparks.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-dark pt-20">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
            Help <span className="metallic-text">Center</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Find answers to common questions and learn how to get the most out of The Metal App.
          </p>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-dark-tertiary rounded-2xl p-6 lg:p-8 border border-dark-border">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((item, index) => (
                    <div key={index} className="border-b border-dark-border last:border-0 pb-6 last:pb-0">
                      <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">
                        {item.q}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-dark-tertiary rounded-2xl p-8 border border-primary/20 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Still need help?
            </h2>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-primary-glow transition-all duration-300 hover:scale-105"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

