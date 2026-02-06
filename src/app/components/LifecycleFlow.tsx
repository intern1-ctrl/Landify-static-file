import { motion } from 'motion/react';
import {
  UserCog,
  Users,
  Sprout,
  Scissors,
  TruckIcon,
  ArrowRight,
  IndianRupee,
  MapPin
} from 'lucide-react';

const lifecycleSteps = [
  {
    icon: UserCog,
    title: 'Field Officer',
    description: 'Manages agents across 40 villages',
    details: ['Collects cultivation data', 'Verifies records', 'Reports to investors'],
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: Users,
    title: 'Agent',
    description: 'Connects with farmers',
    details: ['Takes 1-year land lease', 'Pays ₹1 lakh/year', 'Maintains daily records'],
    color: 'from-green-600 to-green-700',
  },
  {
    icon: Sprout,
    title: 'Farmer',
    description: 'Cultivates green grass',
    details: ['Uses own resources', 'Applies fertilizers', 'Manages irrigation'],
    color: 'from-emerald-600 to-emerald-700',
  },
  {
    icon: Scissors,
    title: 'Harvesting',
    description: 'Grass cutting & bundling',
    details: ['Cut into bundles', 'Quality check', 'Prepare for transport'],
    color: 'from-amber-600 to-amber-700',
  },
  {
    icon: TruckIcon,
    title: 'Transportation',
    description: 'Safe delivery to investors',
    details: ['Tractor transport', 'Secure delivery', 'Final handover'],
    color: 'from-purple-600 to-purple-700',
  },
];

export function LifecycleFlow() {
  return (
    <section className="relative py-24 bg-[#2B1B17] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-2"
        >

          <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            The <span className="text-green-500 italic">Landify</span> Lifecycle
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
            A high-precision journey from governance to global delivery.
          </p>
        </motion.div>

        {/* Desktop Flow - Unique Tech Design */}
        <div className="hidden lg:block relative">
          {/* Connection Lines (Tech Trace Style) */}
          <div className="absolute top-[80px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

          <div className="grid grid-cols-5 gap-6">
            {lifecycleSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Step Number */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-4xl font-black text-white/5 group-hover:text-green-500/10 transition-colors uppercase italic">{index + 1}</div>

                <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 hover:border-green-500/40 transition-all duration-500 h-full flex flex-col group/card shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  {/* Icon Module */}
                  <div className={`size-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover/card:scale-110 group-hover/card:rotate-6 transition-transform`}>
                    <step.icon className="size-10 text-white" />
                  </div>

                  <h3 className="text-xl font-black text-white mb-4 text-center tracking-tight uppercase">
                    {step.title}
                  </h3>

                  <p className="text-xs text-green-400 text-center mb-6 font-bold tracking-widest uppercase">
                    {step.description}
                  </p>

                  <ul className="space-y-3 mt-auto">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-[11px] text-gray-300 flex items-start gap-2 font-medium">
                        <div className="size-1.5 rounded-full bg-green-500 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow Connector */}
                {index < lifecycleSteps.length - 1 && (
                  <div className="absolute top-[68px] -right-4 z-20">
                    <div className="bg-green-500 rounded-full p-2 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                      <ArrowRight className="size-4 text-white" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Flow */}
        <div className="lg:hidden space-y-8">
          {lifecycleSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-6">
                <div className={`size-16 flex-shrink-0 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                  <step.icon className="size-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-green-500/60 font-bold text-xs mb-4 tracking-widest uppercase">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-3">
                        <div className="size-2 rounded-full bg-green-600 mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats - Unique Monolith Plate Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {[
            { icon: MapPin, value: '40+', label: 'VILLAGES COVERED', color: 'green' },
            { icon: IndianRupee, value: '₹1 Lakh', label: 'ANNUAL LEASE / ACRE', color: 'blue' },
            { icon: Sprout, value: '100%', label: 'SUSTAINABLE OPS', color: 'emerald' },
          ].map((stat, i) => (
            <div key={i} className="relative group p-10 bg-[#57BA98] rounded-[3rem] border border-white/20 hover:bg-[#4ea889] transition-all text-center shadow-2xl">
              <stat.icon className="size-12 text-[#0a2e1f] mx-auto mb-6 group-hover:scale-125 transition-transform" />
              <div className="text-5xl font-black text-[#0a2e1f] mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-xs text-[#0a2e1f]/70 font-black tracking-[0.3em] uppercase">{stat.label}</div>
              <div className="mt-8 h-1 w-12 bg-[#0a2e1f]/20 mx-auto rounded-full group-hover:w-20 group-hover:bg-[#0a2e1f] transition-all duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
