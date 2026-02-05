import { PageBanner } from '../components/PageBanner';
import { motion } from 'motion/react';

const IMAGES = {
  banner: 'https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JlZW4lMjBmYXJtaW5nfGVufDF8fHx8MTc3MDI5NzAxOHww&ixlib=rb-4.1.0&q=80&w=1080',
};

export function Terms() {
  return (
    <div>
      <PageBanner
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before participating in our ecosystem"
        imageUrl={IMAGES.banner}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-gradient-to-br from-green-50 to-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
              <p className="text-gray-700 mb-0">
                <strong>Last Updated:</strong> February 5, 2026
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions ("Terms") govern your participation in the Landify
                  agricultural ecosystem. By engaging with Landify as a Farmer, Agent, Field Officer,
                  or Investor, you agree to abide by these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Definitions</h2>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Landify:</strong> The agricultural business entity operating the green grass cultivation ecosystem.</li>
                  <li><strong>Farmer:</strong> Individual or entity leasing agricultural land for grass cultivation.</li>
                  <li><strong>Agent:</strong> Individual or entity coordinating between farmers and field officers.</li>
                  <li><strong>Field Officer:</strong> Individual or entity managing operations across multiple villages.</li>
                  <li><strong>Investor:</strong> Individual or entity receiving the cultivated grass produce.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Farmer Terms</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Land Lease Agreement</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Lease period is fixed at one (1) year from the date of agreement</li>
                  <li>• Annual lease payment of ₹1,00,000 (One Lakh Rupees) per farmer</li>
                  <li>• Payment to be made within 30 days of agreement signing</li>
                  <li>• Land must be suitable for green grass cultivation</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Cultivation Responsibilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Farmers must use their own resources for cultivation</li>
                  <li>• Proper application of fertilizers and pesticides as per guidelines</li>
                  <li>• Efficient management of irrigation and water supply</li>
                  <li>• Maintenance of grass health throughout the growth cycle</li>
                  <li>• Cooperation with agents for inspection and harvesting</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Agent Terms</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Responsibilities</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Establish contact with farmers in assigned villages</li>
                  <li>• Negotiate and execute lease agreements</li>
                  <li>• Maintain accurate daily records of all activities</li>
                  <li>• Coordinate between farmers and field officers</li>
                  <li>• Ensure compliance with quality standards</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Compensation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Commission based on successful lease agreements</li>
                  <li>• Performance bonuses for quality maintenance</li>
                  <li>• Payment within 45 days of successful delivery</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Field Officer Terms</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Oversee operations across assigned villages (up to 40+)</li>
                  <li>• Verify all data and reports from agents</li>
                  <li>• Conduct quality inspections at multiple stages</li>
                  <li>• Submit comprehensive reports to investors</li>
                  <li>• Coordinate logistics and transportation</li>
                  <li>• Maintain professional standards and ethics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Quality Standards</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• All grass must meet minimum quality specifications</li>
                  <li>• Regular inspections will be conducted</li>
                  <li>• Substandard produce may be rejected</li>
                  <li>• Quality documentation must be maintained</li>
                  <li>• Sustainable farming practices must be followed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Payment Terms</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• All payments subject to quality verification</li>
                  <li>• Payment delays due to quality issues are acceptable</li>
                  <li>• Disputes will be resolved through mediation</li>
                  <li>• Bank details must be accurate and verified</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Termination</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Either party may terminate with 30 days written notice</li>
                  <li>• Immediate termination for breach of terms</li>
                  <li>• Outstanding payments must be settled</li>
                  <li>• Land must be returned in original condition</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  Landify is not liable for natural disasters, crop failures due to weather conditions,
                  or other acts of God. All parties agree to share reasonable risks associated with
                  agricultural operations.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes arising from these Terms will be resolved through arbitration in
                  accordance with local laws. The venue for arbitration shall be the district
                  headquarters where operations are conducted.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Amendments</h2>
                <p className="text-gray-700 leading-relaxed">
                  Landify reserves the right to modify these Terms at any time. Participants will
                  be notified of changes via email or official communication channels.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms, please contact us at legal@landify.com or
                  call +91 12345 67890.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
