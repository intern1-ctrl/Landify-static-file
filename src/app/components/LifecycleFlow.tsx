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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Lifecycle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From field management to final delivery - a transparent, structured ecosystem
          </p>
        </motion.div>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200" />

            <div className="grid grid-cols-5 gap-4">
              {lifecycleSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <step.icon className="size-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow */}
                  {index < lifecycleSteps.length - 1 && (
                    <div className="absolute top-20 -right-2 z-10">
                      <div className="bg-white rounded-full p-2 shadow-md">
                        <ArrowRight className="size-4 text-green-600" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Flow */}
        <div className="lg:hidden space-y-6">
          {lifecycleSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                  <step.icon className="size-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {step.description}
                  </p>
                  <ul className="space-y-1.5">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <MapPin className="size-10 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">40+</div>
            <div className="text-sm text-gray-600">Villages Covered</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <IndianRupee className="size-10 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">₹1 Lakh</div>
            <div className="text-sm text-gray-600">Annual Lease per Farmer</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <Sprout className="size-10 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
            <div className="text-sm text-gray-600">Sustainable Practices</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
