import { PageBanner } from '../components/PageBanner';

import { motion } from 'motion/react';
import { FileText, CheckCircle2, AlertCircle } from 'lucide-react';

const IMAGES = {
  banner: 'https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JlZW4lMjBmYXJtaW5nfGVufDF8fHx8MTc3MDI5NzAxOHww&ixlib=rb-4.1.0&q=80&w=1080',
};

export function Process() {
  return (
    <div>
      {/* Process Header */}
      <section className="relative h-screen flex items-center pt-24 overflow-hidden" style={{ backgroundColor: '#AC8968' }}>
        {/* Background Layer removed top shadow as requested */}
        <div className="absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Smaller Staggered Uniform Boxes */}
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 items-start max-w-md">
              {[
                { text: 'Setup', delay: 0.2, icon: FileText },
                { text: 'Cultivation', delay: 0.4, icon: CheckCircle2 },
                { text: 'Harvesting', delay: 0.6, icon: AlertCircle },
                { text: 'Logistics', delay: 0.8, icon: CheckCircle2 },
                { text: 'Reporting', delay: 1.0, icon: FileText },
                { text: 'Verification', delay: 1.2, icon: CheckCircle2 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                  className="w-full bg-[#3AAFA9]/40 backdrop-blur-md p-5 rounded-xl border border-white/40 shadow-xl group hover:bg-[#0a2e1f]/60 transition-all flex flex-col items-center text-center"
                >
                  <item.icon className="size-7 text-white mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold tracking-tight text-base">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Right Side: Title & Paragraph */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl leading-[0.9]">
                  Process
                </h1>

                <p className="text-xl text-orange-50 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                  A transparent, efficient, and meticulously verified journey.
                  We've optimized every hectare for maximum output and minimal waste.
                  Our process ensures quality at every step, from initial setup to final delivery.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* Detailed Process Steps - Unique Phased Road Design */}
      <section className="relative py-24 bg-[#FCFBF8] overflow-hidden">
        {/* Subtle Path Geometry */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-black text-[#4A3728] mb-6 tracking-tighter uppercase font-serif italic">
              Operational <span className="text-[#865D36]">Blueprint</span>
            </h2>
            <p className="text-xl text-gray-500 font-bold tracking-[0.2em] uppercase">Meticulous Execution Roadmap</p>
          </motion.div>

          <div className="space-y-32">
            {[
              {
                phase: 'PHASE 01',
                title: 'Strategic Onboarding',
                steps: [
                  'Field Officer village clustering and cluster mapping',
                  'Agent specialized region assignment',
                  'Farming Land high-precision suitability audit',
                  'Secure 1-Year Contract with ₹1L Guaranteed Payout',
                  'Initial Soil pH and Mineral enrichment planning',
                ],
                color: '#3B82F6',
              },
              {
                phase: 'PHASE 02',
                title: 'Cultivation Lifecycle',
                steps: [
                  'Traditional expertise applied to grass cultivation',
                  'Scientifically curated fertilizer deployment',
                  'Precision irrigation based on real-time atmospheric data',
                  'Daily activity logs synced with regional hubs',
                  'Unannounced Field Officer quality inspections',
                ],
                color: '#10B981',
              },
              {
                phase: 'PHASE 03',
                title: 'Precision Harvesting',
                steps: [
                  'Phase-based maturity assessment and marking',
                  'Logistics fleet coordination via GPS routing',
                  'Uniform bundling for standardized volume control',
                  'Secondary quality-sieve inspection at source',
                  'Safe bundle preparation for rough terrain transport',
                ],
                color: '#F59E0B',
              },
              {
                phase: 'PHASE 04',
                title: 'Streamlined Delivery',
                steps: [
                  'Rapid fleet mobilization for same-day collection',
                  'Real-time GPS tracking for investor visibility',
                  'Secure bundle anchoring for rural transit',
                  'Direct-to-Hub delivery with zero intermediate handling',
                  'Digital Proof of Delivery (PoD) with timestamping',
                ],
                color: '#8B5CF6',
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24`}
              >
                {/* Visual Connector Dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 size-8 bg-white border-4 border-gray-100 rounded-full z-20 hidden lg:block" />

                <div className="w-full lg:w-1/2">
                  <div
                    className="p-10 rounded-[3rem] bg-white shadow-2xl border-t-8 transition-transform hover:scale-[1.02] duration-500"
                    style={{ borderTopColor: section.color }}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className="px-4 py-1 rounded-full text-white font-black text-xs tracking-widest"
                        style={{ backgroundColor: section.color }}
                      >
                        {section.phase}
                      </div>
                      <h3 className="text-3xl font-black text-[#4A3728] tracking-tight">{section.title}</h3>
                    </div>
                    <ul className="space-y-4">
                      {section.steps.map((step, i) => (
                        <li key={i} className="flex gap-4 group">
                          <CheckCircle2 className="size-6 shrink-0" style={{ color: section.color }} />
                          <span className="text-gray-600 font-semibold leading-snug group-hover:text-black transition-colors">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden lg:flex w-1/2 justify-center">
                  <div className="text-[12rem] font-black opacity-[0.03] select-none" style={{ color: section.color }}>
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance - Unique Precision Lab Design */}
      <section className="relative py-24 bg-[#123C69] overflow-hidden">
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">
              Verification <span className="text-green-500">Integrity</span>
            </h2>
            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-green-500/50" />
              <AlertCircle className="size-8 text-green-500" />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-green-500/50" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: FileText,
                title: 'Data Governance',
                items: [
                  'Unalterable daily activity logs',
                  'Timestamped visual documentation',
                  'Digital resource consumption tracking',
                  'Verified quality certificates',
                  'Blockchain-ready delivery receipts'
                ],
                color: 'green'
              },
              {
                icon: AlertCircle,
                title: 'Audit Protocols',
                items: [
                  'Multi-stage Field Officer scrutiny',
                  'Algorithmic report cross-verification',
                  'Independent quality assessments',
                  'Investor-direct feedback loops',
                  'Data-driven efficiency optimization'
                ],
                color: 'amber'
              },
            ].map((box, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-900/60 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 hover:border-green-500/30 transition-all shadow-2xl"
              >
                <div className={`size-20 rounded-2xl bg-${box.color}-500/10 flex items-center justify-center mb-10 border border-${box.color}-500/20 group-hover:scale-110 transition-transform`}>
                  <box.icon className={`size-10 text-${box.color}-400`} />
                </div>
                <h3 className="text-3xl font-black text-white mb-8 tracking-tight uppercase">{box.title}</h3>
                <ul className="space-y-5">
                  {box.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-green-100/60 font-medium group/item">
                      <div className={`size-2 rounded-full bg-${box.color}-500 group-hover/item:scale-150 transition-transform shadow-[0_0_10px_rgba(34,197,94,0.5)]`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
