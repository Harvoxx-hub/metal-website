import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - The Metal App",
  description: "Learn how The Metal App protects your privacy and handles your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-dark pt-20">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
            Privacy <span className="metallic-text">Policy</span>
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Last updated: August 1st, 2025
          </p>

          <div className="bg-dark-tertiary rounded-2xl p-5 sm:p-6 lg:p-8 border border-dark-border space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Welcome to METAL BLIND CONNECT App</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                This Privacy Policy takes effect from Friday, August 1st, 2025 (hereinafter referred to as the effective date).
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                In this Privacy Policy, references to "Our", "Ourselves", "We" or "Us", our Terms and Conditions (T&Cs), this Privacy Policy, and any or all other Agreements, are to Triple3JSolutions Inc. and the services offered on METAL BLIND CONNECT App website and mobile application facilitated by Triple3JSolutions Inc.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We, at Triple3JSolutions Inc., are committed to protecting your privacy and the data you submit to us to access our services. This Privacy Policy details how we collect, store, use, disclose, safeguard, and protect your information when you use services offered on our website, located at www.themetalapp.com or www.themetalapp.co.uk and our mobile application (METAL BLIND CONNECT App), including any related services (collectively, hereinafter called "Our Services").
              </p>
              <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-4 mt-6">
                <p className="text-white font-semibold mb-2">PLEASE READ THIS PRIVACY POLICY CAREFULLY.</p>
                <p className="text-gray-300">
                  IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT PROCEED WITH USING OUR SERVICES.
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                By continuing to use our services, you are deemed to have read, understood, and expressly agreed to and granted Us consent to collect, store, use, disclose, and safeguard your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Information/Data We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In order to effectively provide our services to you, we may collect the following data:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Identification Information/Data:</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Name, address, email address, phone number, date of birth, gender, sexual orientation, and other similar information/data.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">User Profile Information/Data:</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Content/data you generate in the course of using our services, including profile photos, videos, likes, biographical information, and opinions you choose to share.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Usage and Device Information/Data:</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Information/data about how you use our services, such as IP address, device IMEI, device model and type, browser type, operating system, access times, and pages viewed/accessed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Location Information/Data:</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Live and previous locations if you have enabled location services on your device while accessing our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Sensitive Data:</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Data related to sexual orientation, preferences, and any other special category information voluntarily provided during registration or through usage of the app.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Behavioral Data:</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Records of user-reported interactions or flagged activities, such as abusive or fraudulent behavior, for safety monitoring purposes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">How We Use Your Information/Data</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may use the information/data you supply to us during registration and in the course of using our services for the following purposes:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Core Services:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>To provide, operate, and maintain our services.</li>
                    <li>To improve, personalize, and expand our services.</li>
                    <li>To facilitate connections, matches, and communication between users.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Behavioral Monitoring and Safety:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>To analyze and monitor user interactions to detect and prevent fraudulent, harmful, or inappropriate behavior.</li>
                    <li>To act on reports of harassment, abuse, or other violations of our Terms and Conditions.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Geolocation Services:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>To analyze and understand location preferences and match users with others in similar or nearby locations.</li>
                    <li>To provide location-based features, such as nearby matches.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Communications:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>To communicate with you directly or through our partners for customer service, updates, and other information related to our services.</li>
                    <li>To send emails and push notifications.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Advertisements:</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    To analyze preferences and show advertisements tailored to your interests, either by ourselves or through our partners.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Compliance and Security:</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    To process transactions, detect and prevent fraudulent activities, and ensure the security of our services and users.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Legal Basis for Processing Your Information/Data</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you use our services from the European Economic Area (EEA) or other jurisdictions, we may process your data under the following legal bases:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Consent:</strong> You have explicitly granted consent to collect and process your data.</li>
                <li><strong>Contractual Obligations:</strong> To perform and provide the services outlined in our agreement.</li>
                <li><strong>Legitimate Interests:</strong> To improve our services and maintain safety without overriding your rights.</li>
                <li><strong>Compliance:</strong> To adhere to applicable laws and assist law enforcement when required.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Information/Data Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personally identifiable data without your prior notice and consent. We may share your data in the following scenarios:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Service Providers:</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    With developers or partners who assist in operating and maintaining our services, provided they agree to keep shared data confidential.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">User Sharing Controls:</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Profiles, photos, and biographical data may be shared with other users within the app as necessary for matching and connecting purposes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Legal Requests:</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    In response to lawful requests from enforcement agencies, regulatory bodies, or to comply with applicable laws.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Safety Measures:</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    To protect the rights, property, and safety of users, third parties, or Triple3JSolutions Inc. when actions are inconsistent with our Terms and Conditions.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Your Rights Under This Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Access:</strong> Request copies of your data.</li>
                <li><strong>Rectification:</strong> Request corrections to inaccurate or incomplete data.</li>
                <li><strong>Erasure:</strong> Request deletion of your data under certain conditions.</li>
                <li><strong>Restriction:</strong> Restrict how your data is accessed or processed by others.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">How We Secure Your Information/Data</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement the following measures to secure your data:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Data Encryption:</strong> Encrypt data at entry, during transmission, and at rest.</li>
                <li><strong>Access Control:</strong> Restrict access to data to authorized personnel only.</li>
                <li><strong>Audits and Incident Response:</strong> Conduct regular audits and maintain an incident response plan to handle breaches.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Information/Data Retention</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We retain your data as long as your account is active or as needed to provide services. Upon request, we will delete your data promptly unless required to retain it for legal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We may update this policy to comply with new laws or changes in our practices. Updates will be communicated via email or app notifications.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="text-gray-300">
                <p>Email: <a href="mailto:contact@themetalapp.com" className="text-primary hover:text-primary-light">contact@themetalapp.com</a></p>
                <p>Phone: <a href="tel:+12267913817" className="text-primary hover:text-primary-light">+1 (226) 791-3817</a></p>
                <p className="mt-2">
                  Triple3J Solutions Inc.<br />
                  257 Cathcart Cres<br />
                  Milton, ON L9T 7P2<br />
                  Canada
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
