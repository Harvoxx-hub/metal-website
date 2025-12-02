import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cookies Policy - The Metal App",
  description: "Learn how The Metal App uses cookies and similar tracking technologies.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-dark pt-20">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
            Cookies <span className="metallic-text">Policy</span>
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Effective Date: August 1st, 2025
          </p>

          <div className="bg-dark-tertiary rounded-2xl p-6 lg:p-8 border border-dark-border space-y-8">
            <section>
              <p className="text-gray-300 leading-relaxed">
                This Cookies Policy explains how Triple3JSolutions Inc. ("we," "our," or "us") uses cookies and similar tracking technologies on METAL BLIND CONNECT App website and mobile application ("our Services"). By using our Services, you consent to the use of cookies as described in this policy. If you do not agree, you may disable cookies through your browser or device settings, though some features of our Services may not function properly as a result.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are sent to or accessed from your web browser or your device's memory. A cookie typically contains the name of the domain (Internet location) from which the cookie originated, the "lifetime" of the cookie (i.e., when it expires), and a randomly generated unique number or similar identifier. A cookie may also contain information about your device, such as user settings, browsing history, and activities conducted while using our services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Other technologies such as web beacons (also called pixels, tags, or clear gifs), tracking URLs, or software development kits (SDKs) are used for similar purposes as cookies. Web beacons are tiny graphics files that contain a unique identifier, enabling us to recognize when someone has visited our service or opened an email we've sent them. SDKs are small pieces of code included in apps that function like cookies and web beacons. For simplicity, we also refer to these technologies as "cookies" in this Cookies Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Types of Cookies We Use</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We use the following types of cookies to improve your experience and the functionality of our Services:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2.1. Essential Cookies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies are strictly necessary to provide our services, such as enabling you to log in, remembering your preferences, and keeping you safe by detecting malicious activity.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2.2. Functional Cookies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies allow us to remember your preferences and settings to provide a more personalized experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2.3. Analytics Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    These cookies help us understand how our services are being used and help us customize and improve our services for you. For example, we use Google Analytics to analyze user behavior and improve app performance. For more information about how Google collects and processes data, visit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light">Google's Privacy Policy</a>. You can opt out of Google Analytics by downloading the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light">Google Analytics Opt-out Browser Add-on</a>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2.4. Advertising and Marketing Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    These cookies are used to determine how effective our marketing campaigns are and to make the ads you see more relevant to you. They perform functions like helping us understand how much traffic our marketing campaigns drive on our services, ensuring ads are properly displayed, and selecting advertisements relevant to you. For interest-based advertising, you can opt out using industry-standard opt-out tools such as the <a href="https://youradchoices.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light">Digital Advertising Alliance</a> or <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light">Your Online Choices</a>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2.5. Social Networking Cookies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies are used to enable you to share pages and content that you find interesting on our services through third-party social networking and other websites. These cookies may also be used for advertising purposes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide, operate, and improve our Services.</li>
                <li>Enhance user experience by remembering your preferences and interactions.</li>
                <li>Analyze usage trends and gather demographic information.</li>
                <li>Deliver targeted advertising and measure its effectiveness.</li>
                <li>Ensure the security and functionality of our Services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Managing Cookies</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.1. Tools We Provide</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You can set and adjust your cookie preferences at any time by heading to your account settings in the app and adjusting your app cookie preferences there.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.2. Browser and Device Controls</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Some web browsers provide settings that allow you to control or reject cookies, or that alert you when a cookie is placed on your device. The procedure for managing cookies is slightly different for each Internet browser. You can check the specific steps in your browser's help menu. Similarly, you may be able to reset device identifiers or opt out of having identifiers collected or processed by using the appropriate setting on your mobile device.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.3. Interest-Based Advertising Tools</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    Advertising companies may participate in self-regulatory programs that allow you to opt out of interest-based ads. For more information, visit the following sites:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li><a href="https://youradchoices.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light">Digital Advertising Alliance</a></li>
                    <li><a href="https://www.iab.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light">Interactive Advertising Bureau</a></li>
                    <li><a href="https://www.aboutads.info/appchoices" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light">AppChoices</a> (for mobile apps).</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-3">
                    Opting out does not mean you will not see ads; it means you won't see personalized ads. If you delete cookies on your device after opting out, you will need to opt out again.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Google™ Cookies</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5.1. Google™ Maps API Cookies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Some features of our website and services rely on the use of Google™ Maps API Cookies. Such cookies will be stored on your device. By using these services, you consent to the storage and collection of such cookies and the access, usage, and sharing by Google of the data collected. For more information, see <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light">Google's Cookie Policy</a>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5.2. Google Analytics</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We use Google Analytics to collect information about your use of our services and generate reports on usage trends. For more details, visit <a href="https://support.google.com/analytics" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light">Google's Analytics Help Center</a>. You can opt out of Google's ad personalization at <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light">Google Ads Settings</a>.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Changes to This Cookies Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookies Policy periodically to reflect changes in how we use cookies or for legal and regulatory reasons. Updates will be posted on this page, and the "Effective Date" will be revised accordingly. We encourage you to review this policy regularly.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions or concerns about this Cookies Policy, please contact us at:
              </p>
              <div className="text-gray-300">
                <p>Email: <a href="mailto:contact@themetalapp.com" className="text-primary hover:text-primary-light">contact@themetalapp.com</a></p>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                By continuing to use our Services, you agree to this Cookies Policy. If you do not agree, please disable cookies or discontinue use of our Services.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

