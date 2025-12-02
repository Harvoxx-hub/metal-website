import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service - The Metal App",
  description: "Read The Metal App's Terms of Service and understand your rights and responsibilities when using our platform.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-dark pt-20">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
            Terms and <span className="metallic-text">Conditions</span>
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Last updated: January 8th, 2025
          </p>

          <div className="bg-dark-tertiary rounded-2xl p-6 lg:p-8 border border-dark-border space-y-8">
            <section>
              <p className="text-gray-300 leading-relaxed mb-6">
                Welcome to METAL BLIND CONNECT (referred to as the "App," "we," "our," or "us"). The following terms and conditions (referred to as the "Terms") govern your use of the App's services. By accessing or using the App, you acknowledge and agree to these Terms. Please read them carefully before using the App.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using the App, you agree to abide by these Terms and any future modifications. If you do not agree to these Terms, you must not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">2. Eligibility</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">2.1.</strong> You must be at least 18 years old to use the App.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">2.2.</strong> You are responsible for providing accurate and truthful information during registration and profile creation.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">3. User Content</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">3.1.</strong> You are solely responsible for the content you upload, share, or otherwise make available on the App, including your profile information, photos, and messages.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">3.2.</strong> You agree not to post content that is offensive, discriminatory, defamatory, or violates any applicable laws.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">4. Appropriate Usage</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">4.1.</strong> The App is intended for creating connections, friendships, mentoring, parenting, and romantic relationships.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">4.2.</strong> You agree to use the App in a respectful and considerate manner, treating other users with dignity and refraining from any form of harassment, abuse, or unwanted advances.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">5. Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">5.1.</strong> This Privacy Policy explains how METAL BLIND CONNECT collects, uses, shares, and protects your personal information. By using the App, you consent to the practices described in this Privacy Policy at the bottom of this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">6. Safety</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">6.1.</strong> While we strive to create a safe environment, we cannot guarantee the actions or intentions of other users. You are responsible for your interactions with other users both online and offline.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">6.2.</strong> It is advised to exercise caution when sharing personal information, and to report any suspicious or inappropriate behavior to us.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">7. Prohibited Activities</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">7.1.</strong> You agree not to engage in any illegal, unauthorized, or harmful activities on the App.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">7.2.</strong> You must not impersonate others, spam, solicit money, or engage in any fraudulent or deceptive behavior.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">8. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">8.1.</strong> We reserve the right to suspend or terminate your access to the App if you violate these Terms or engage in any inappropriate behavior.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">9. Intellectual Property</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">9.1.</strong> The App and its content, including text, graphics, logos, and software, are solely owned by METAL BLIND CONNECT.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">9.2.</strong> You agree not to use, reproduce, modify, distribute, or create derivative works based on the App's content without our prior written consent.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">10. Limitation of Liability</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">10.1.</strong> We are not responsible for the conduct of users on the App.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">10.2.</strong> To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use or inability to use the App.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">10.3.</strong> By using the App, you agree to indemnify, defend, and hold harmless METAL BLIND CONNECT App, its affiliates, officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Your use or misuse of the App.</li>
                  <li>Your violation of these Terms or applicable laws and regulations.</li>
                  <li>Any content you upload, post, or share through the App.</li>
                  <li>Any offline interactions, activities, or events resulting from connections, matches, or communications made through the App.</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">10.4.</strong> METAL BLIND CONNECT App is not responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>The behavior, actions, or conduct of users online or offline.</li>
                  <li>Any harm, loss, or damages resulting from interactions, meetings, or relationships formed through the App.</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">10.5.</strong> You acknowledge and agree that you use the App at your own risk and that we make no guarantees regarding the behavior, compatibility, or safety of any user you interact with, whether online or offline.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">11. Modifications to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">11.1.</strong> We reserve the right to modify these Terms at any time. You will be notified of significant changes and continued use of the App after such changes constitute your acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">12. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">12.1.</strong> These Terms are governed by the laws of Canada. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Canada.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">13. Use of Face Data</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">13.1.</strong> If the App captures or processes Face Data (e.g., facial recognition or augmented reality features), we will notify you and obtain explicit consent prior to collection or use.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">13.2.</strong> Face Data is processed locally on your device whenever possible and is not transmitted to external servers without additional consent.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">13.3.</strong> You may request deletion of your Face Data at any time through the App settings or by contacting us.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">13.4.</strong> We comply with applicable privacy laws, such as GDPR and CCPA, to protect your biometric information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">14. Updates and Changes</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">14.1.</strong> We may update the App's features, services, or functionality at any time. Significant updates will be communicated to you through notifications or email.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">14.2.</strong> Continued use of the App after updates indicates your acceptance of the changes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">15. Third-Party Services</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">15.1.</strong> The App may include third-party services or SDKs to enhance functionality. By using the App, you agree to the terms of these third-party providers.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">15.2.</strong> We are not liable for any issues arising from third-party services integrated into the App.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">16. Data Security</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">16.1.</strong> We implement reasonable measures to protect your personal information. However, no transmission or storage method is entirely secure, and we cannot guarantee absolute security.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">16.2.</strong> In the event of a data breach, we will notify affected users and take appropriate steps to mitigate harm.
                </p>
              </div>
            </section>

            <div className="border-t border-dark-border pt-8 mt-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Privacy Policy</h2>
            </div>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Information Collection</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">1.1. Personal Information:</strong> We may collect personal information that you provide during registration, profile creation, and use of the App. This may include your name, email address, gender, date of birth, location, photos, and other relevant details.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">1.2. Usage Data:</strong> We collect information about how you use the App, including interactions, messages, and preferences.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Use of Information</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">2.1.</strong> We use the collected information to provide, personalize, and improve our services, as well as to ensure a safe and engaging user experience.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">2.2.</strong> Your information may be used to match you with potential friends, mentors, parents, or romantic partners based on your preferences and interactions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">2.3.</strong> We may send you notifications, updates, and promotional materials related to the App's features and services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Information Sharing</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">3.1.</strong> Your information may be shared with other users as necessary for the intended purpose of the App, such as connecting with potential friends, mentors, parents, or romantic partners.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">3.2.</strong> We may share aggregated and anonymized data with third parties for analytics, research, and marketing purposes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">3.3.</strong> We may share your information with service providers, contractors, and partners who assist in the operation of the App and related services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">3.4.</strong> We may disclose your information to comply with legal obligations or respond to lawful requests.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Data Security</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">4.1.</strong> We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or destruction.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">4.2.</strong> Despite our efforts, no data transmission over the internet or electronic storage method is entirely secure. We cannot guarantee absolute security of your information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">User Choices</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">5.1.</strong> You can update or delete your profile information at any time through the App's settings.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">5.2.</strong> You can choose to opt out of receiving promotional communications from us by adjusting your notification preferences in the App.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">6.1.</strong> The App is intended for use by individuals who are at least 18 years old. We do not knowingly collect personal information from children under the age of 18.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Changes to Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">7.1.</strong> We may update this Privacy Policy as needed to reflect changes in our practices and services. We will notify you of significant changes and provide the updated policy on the App.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">8.1.</strong> If you have questions or concerns about this Privacy Policy, please contact us at <a href="mailto:contact@themetalapp.com" className="text-primary hover:text-primary-light">contact@themetalapp.com</a>.
              </p>
            </section>

            <section className="bg-primary/10 border-l-4 border-primary rounded-lg p-6 mt-8">
              <p className="text-gray-300 leading-relaxed">
                By using METAL, you acknowledge that you have read, understood, and agreed to these Terms and the Privacy Policy. These Terms and Privacy Policy were last updated on January 8th, 2025.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

