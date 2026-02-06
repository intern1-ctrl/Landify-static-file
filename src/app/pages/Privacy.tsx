import { Shield } from 'lucide-react';
import { motion } from 'motion/react';

const IMAGES = {
  banner: 'https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMjczMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
};

export function Privacy() {
  return (
    <div>
      {/* Privacy Header */}
      <section className="relative min-h-[40vh] flex items-center pt-24 overflow-hidden bg-white">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent z-0" />
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-gradient-to-tr from-green-50 to-transparent z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest mb-6">
              <Shield className="size-3" />
              <span>Security & Trust</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 font-display">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              We value your trust above all else. This document outlines how we protect
              your data and maintain the integrity of our digital ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Decorative Floating Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute right-10 top-32 hidden lg:block opacity-10"
        >
          <Shield className="size-64 text-blue-900" />
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
              <p className="text-gray-700 mb-0">
                <strong>Last Updated:</strong> February 5, 2026
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Landify ("we", "us", or "our") is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you participate in our agricultural ecosystem.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Full name and contact details</li>
                  <li>• Address and location information</li>
                  <li>• Phone number and email address</li>
                  <li>• Bank account details for payments</li>
                  <li>• Government-issued ID for verification</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Agricultural Data</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Land ownership and lease documents</li>
                  <li>• Cultivation records and practices</li>
                  <li>• Fertilizer and pesticide usage data</li>
                  <li>• Harvest yields and quality metrics</li>
                  <li>• Photos and documentation of field operations</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Transaction Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lease agreement details</li>
                  <li>• Payment history and records</li>
                  <li>• Delivery confirmations</li>
                  <li>• Commission and compensation data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• To process and manage lease agreements</li>
                  <li>• To facilitate payments to farmers, agents, and field officers</li>
                  <li>• To maintain records of agricultural operations</li>
                  <li>• To communicate updates and important information</li>
                  <li>• To prepare reports for investors and stakeholders</li>
                  <li>• To improve our services and operations</li>
                  <li>• To comply with legal and regulatory requirements</li>
                  <li>• To resolve disputes and enforce our terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Within the Ecosystem</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Information is shared among farmers, agents, field officers, and investors as
                  necessary to operate the agricultural ecosystem effectively.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Third Parties</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Payment processors for financial transactions</li>
                  <li>• Government authorities as required by law</li>
                  <li>• Agricultural experts for quality assessment</li>
                  <li>• Legal advisors for dispute resolution</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your
                  personal information:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Encrypted data transmission and storage</li>
                  <li>• Secure access controls and authentication</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Employee training on data protection</li>
                  <li>• Physical security of documents and records</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your information for as long as necessary to fulfill the purposes
                  outlined in this policy, comply with legal obligations, resolve disputes, and
                  enforce our agreements. Agricultural records are typically retained for 7 years.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Access:</strong> Request a copy of your personal data</li>
                  <li>• <strong>Correction:</strong> Update inaccurate or incomplete information</li>
                  <li>• <strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                  <li>• <strong>Restriction:</strong> Limit how we use your information</li>
                  <li>• <strong>Objection:</strong> Object to certain types of processing</li>
                  <li>• <strong>Portability:</strong> Receive your data in a structured format</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may use cookies and similar tracking technologies to improve user
                  experience, analyze usage patterns, and provide personalized content. You can
                  control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not directed to individuals under 18 years of age. We do not
                  knowingly collect personal information from children. If you are a parent or
                  guardian and believe your child has provided us with personal information,
                  please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any
                  changes by posting the new policy on our website and updating the "Last Updated"
                  date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <div className="bg-gradient-to-br from-green-50 to-gray-50 p-6 rounded-2xl border border-gray-100">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Email:</strong> privacy@landify.com</li>
                    <li><strong>Phone:</strong> +91 12345 67890</li>
                    <li><strong>Address:</strong> Agricultural Innovation Hub, Rural Development Center</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Consent</h2>
                <p className="text-gray-700 leading-relaxed">
                  By participating in the Landify ecosystem, you consent to the collection and use
                  of your information as described in this Privacy Policy.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
