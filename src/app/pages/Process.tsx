import { PageBanner } from '../components/PageBanner';
import { LifecycleFlow } from '../components/LifecycleFlow';
import { motion } from 'motion/react';
import { FileText, CheckCircle2, AlertCircle } from 'lucide-react';

const IMAGES = {
  banner: 'https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMjczMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
};

export function Process() {
  return (
    <div>
      <PageBanner
        title="Our Process"
        subtitle="A transparent, step-by-step journey from field to delivery"
        imageUrl={IMAGES.banner}
      />

      {/* Main Lifecycle */}
      <LifecycleFlow />

      {/* Detailed Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Detailed Process Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every step is documented, verified, and optimized for transparency
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                phase: 'Phase 1',
                title: 'Initial Setup & Land Lease',
                steps: [
                  'Field Officer identifies target villages and coordinates with local authorities',
                  'Agents are assigned to specific village clusters for focused operations',
                  'Farmers are contacted and land suitability is assessed',
                  'One-year lease agreements are signed with ₹1 lakh annual payment',
                  'Land preparation begins with soil testing and fertilizer planning',
                ],
                color: 'blue',
              },
              {
                phase: 'Phase 2',
                title: 'Cultivation & Maintenance',
                steps: [
                  'Farmers cultivate green grass using their own resources',
                  'Regular fertilizer and pesticide application as per schedule',
                  'Daily irrigation management based on weather conditions',
                  'Agents maintain detailed daily records of all activities',
                  'Field Officers conduct periodic quality inspections',
                ],
                color: 'green',
              },
              {
                phase: 'Phase 3',
                title: 'Harvesting & Quality Control',
                steps: [
                  'Grass maturity assessment by Field Officers',
                  'Harvesting schedule coordinated with transportation team',
                  'Grass cut into uniform bundles for easy handling',
                  'Quality inspection ensures only premium grass proceeds',
                  'Bundles prepared for safe transportation',
                ],
                color: 'amber',
              },
              {
                phase: 'Phase 4',
                title: 'Transportation & Delivery',
                steps: [
                  'Tractor fleet mobilized for collection from villages',
                  'GPS tracking enabled for all transportation vehicles',
                  'Bundles loaded securely for rural road conditions',
                  'Direct delivery to investor locations',
                  'Documentation and proof of delivery completed',
                ],
                color: 'purple',
              },
              {
                phase: 'Phase 5',
                title: 'Reporting & Payment',
                steps: [
                  'Field Officer compiles comprehensive reports',
                  'Data verification and quality assessment',
                  'Investor reports sent with delivery confirmation',
                  'Payment processing for all stakeholders',
                  'Feedback collection for continuous improvement',
                ],
                color: 'indigo',
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-${section.color}-600 to-${section.color}-700 flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className={`inline-block px-3 py-1 rounded-full bg-${section.color}-100 text-${section.color}-700 text-sm font-semibold mb-3`}>
                      {section.phase}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`size-5 text-${section.color}-600 flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <FileText className="size-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Documentation Standards
              </h3>
              <ul className="space-y-3">
                {[
                  'Daily activity logs maintained by agents',
                  'Photo documentation of cultivation stages',
                  'Digital records of fertilizer and water usage',
                  'Quality inspection certificates',
                  'Delivery receipts with timestamps',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <AlertCircle className="size-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Verification Process
              </h3>
              <ul className="space-y-3">
                {[
                  'Field Officer inspections at multiple stages',
                  'Cross-verification of agent reports',
                  'Third-party quality assessments',
                  'Investor feedback integration',
                  'Continuous improvement based on data',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
