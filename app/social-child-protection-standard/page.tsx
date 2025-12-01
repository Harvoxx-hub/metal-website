import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Social Child Protection Standard - The Metal App",
  description: "Learn about The Metal App's commitment to child protection and safety measures.",
};

export default function ChildProtectionPage() {
  return (
    <main className="min-h-screen bg-dark pt-20">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
            Social Child Protection <span className="metallic-text">Standard</span>
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Effective Date: August 1st, 2025
          </p>

          <div className="bg-dark-tertiary rounded-2xl p-6 lg:p-8 border border-dark-border space-y-8">
            <section>
              <p className="text-gray-300 leading-relaxed mb-6">
                At the Metal App, we are committed to maintaining a safe and responsible user environment. Although our platform is strictly for individuals aged <strong className="text-white">18 and older</strong>, we recognize the importance of safeguarding against unauthorized access by minors and ensuring all interactions on our app uphold the highest standards of safety and integrity. Below, we outline our child protection measures:
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Age Restriction Policy</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                <li>The Metal App is exclusively for individuals aged <strong className="text-white">18 and above</strong>.</li>
                <li>During registration, users must select their date of birth to proceed. To uphold the age restriction policy, the system is designed only to display dates that confirm the user is <strong className="text-white">18 years or older</strong>. By selecting a date, users validate that they meet the age requirement.</li>
                <li>While we cannot independently verify all user ages, we rely on user honesty and commitment to maintaining a safe environment. Users found violating our policies may face account review and removal.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Monitoring and Reporting</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We take a proactive approach to maintaining a safe community:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                <li>Our team monitors flagged user behavior and interactions for signs that a user may be underage or violating community guidelines.</li>
                <li>We empower our community to help enforce our policies by allowing users to report suspicious accounts or inappropriate behavior. Reports can be submitted using the <strong className="text-white">"Report User"</strong> feature.</li>
                <li>Our team manually reviews all reported accounts. Any accounts suspected of belonging to minors will be investigated, and violators will be permanently removed from the platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Content and Profile Moderation</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                <li>We manually review flagged profiles, bios, and messages to ensure they adhere to our guidelines.</li>
                <li>Any content that suggests a user is underage or promotes child-related topics is strictly prohibited and will result in immediate action, including account suspension or removal.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Community Education</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We encourage our users to prioritize safety by:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Sharing tips on fostering safe, respectful interactions within the community during onboarding.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Enforcement Measures</h2>
              <p className="text-gray-300 leading-relaxed">
                To uphold the integrity of our platform, we enforce the following:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-3">
                <li>Any attempt to exploit or harm other users will result in review or removal and possible reporting to the appropriate authorities.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Transparency and Accountability</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                <li>We are committed to regularly reviewing and improving our child protection measures to adapt to emerging risks and technologies.</li>
                <li>If you have questions, or concerns, or wish to report an issue, please contact our <strong className="text-white">Safety Team</strong> at <a href="mailto:contact@themetalapp.com" className="text-primary hover:text-primary-light">contact@themetalapp.com</a></li>
              </ul>
            </section>

            <section className="bg-primary/10 border-l-4 border-primary rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">A Safer Community Together</h2>
              <p className="text-gray-300 leading-relaxed">
                Protecting our community from harm is a shared responsibility. By adhering to these standards and reporting any violations, you help us create a safe, supportive, and enjoyable environment for everyone.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

