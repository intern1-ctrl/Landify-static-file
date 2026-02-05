import { motion } from 'motion/react';
import { LifecycleFlow } from '../components/LifecycleFlow';
import { RoleCard } from '../components/RoleCard';
import {
  Sprout,
  UserCog,
  Users,
  TruckIcon,
  Shield,
  Target,
  Leaf,
  ChevronDown
} from 'lucide-react';

import farm3 from '../../assets/farm3.jpeg';
import farm4 from '../../assets/farm4.jpeg';
import farm6 from '../../assets/farm6.jpeg';

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1761055277862-c0962cb4c8ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGdyYXNzJTIwZmllbGQlMjBzdW5saWdodCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MDI5NzAxNnww&ixlib=rb-4.1.0&q=80&w=1080',
  farmer: 'https://images.unsplash.com/photo-1629288465751-07e42186084f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB3b3JraW5nJTIwZmllbGQlMjBpbmRpYXxlbnwxfHx8fDE3NzAyOTcwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  officer: farm3,
  tractor: farm4,
  sustainable: 'https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JlZW4lMjBmYXJtaW5nfGVufDF8fHx8MTc3MDI5NzAxOHww&ixlib=rb-4.1.0&q=80&w=1080',
};

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/85 via-green-800/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/20"
            >
              <Leaf className="size-4" />
              <span className="text-sm">Sustainable Agriculture Ecosystem</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cultivating Green Grass,
              <span className="block text-green-300">Growing Communities</span>
            </h1>

            <p className="text-xl md:text-2xl text-green-50 mb-8 leading-relaxed">
              A premium agricultural business connecting field officers, agents, and farmers
              across 40+ villages in a structured, sustainable ecosystem.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#lifecycle"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-green-800 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-shadow"
              >
                Explore Our Process
              </motion.a>
              <motion.a
                href="#roles"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-green-600/20 backdrop-blur-md text-white rounded-full font-semibold border-2 border-white/30 hover:bg-green-600/30 transition-colors"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="size-6" />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Landify
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium, trustworthy, and investor-ready agricultural solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Trustworthy',
                description: 'Transparent operations with verified data tracking across all stages',
                gradient: 'from-blue-600 to-blue-700',
              },
              {
                icon: Sprout,
                title: 'Sustainable',
                description: 'Eco-friendly practices ensuring long-term agricultural health',
                gradient: 'from-green-600 to-green-700',
              },
              {
                icon: Target,
                title: 'Investor-Ready',
                description: 'Professional structure with clear ROI and organized delivery',
                gradient: 'from-purple-600 to-purple-700',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6`}>
                  <value.icon className="size-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Flow */}
      <div id="lifecycle">
        <LifecycleFlow />
      </div>

      {/* Role-Based Sections */}
      <section id="roles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three key roles working together to create a sustainable agricultural network
            </p>
          </motion.div>

          <div className="space-y-20">
            <RoleCard
              icon={Sprout}
              title="Farmer"
              description="Cultivating Green Grass with Expertise"
              responsibilities={[
                'Cultivates green grass using own resources and expertise',
                'Applies fertilizers and pesticides for optimal growth',
                'Manages irrigation and water supply efficiently',
                'Maintains grass health throughout the growth cycle',
                'Earns ₹1 lakh annually through land lease agreement',
              ]}
              imageUrl={IMAGES.farmer}
              gradient="from-green-600 to-green-700"
            />

            <RoleCard
              icon={Users}
              title="Agent"
              description="Connecting Farmers to Opportunity"
              responsibilities={[
                'Establishes contact with farmers across villages',
                'Negotiates and secures 1-year land lease agreements',
                'Pays ₹1 lakh per year to each participating farmer',
                'Maintains detailed daily records of all activities',
                'Acts as communication bridge between farmers and field officers',
              ]}
              imageUrl={IMAGES.sustainable}
              gradient="from-blue-600 to-blue-700"
              reverse
            />

            <RoleCard
              icon={UserCog}
              title="Field Officer"
              fullView
              description="Managing Operations Across 40 Villages"
              responsibilities={[
                'Oversees agents and farmers across 40+ villages',
                'Collects and verifies all cultivation data',
                'Ensures quality standards are maintained',
                'Sends comprehensive reports to investors',
                'Coordinates logistics and delivery schedules',
              ]}
              imageUrl={IMAGES.officer}
              gradient="from-purple-600 to-purple-700"
            />
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 mb-6">
                <TruckIcon className="size-5 text-white" />
                <span className="text-white font-semibold">Logistics & Delivery</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Safe & Reliable Transportation
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our organized delivery process ensures green grass bundles reach investors
                safely and on time through dedicated tractor transport.
              </p>

              <ul className="space-y-4">
                {[
                  'Harvested grass cut into uniform bundles',
                  'Quality inspection before transport',
                  'Dedicated tractor fleet for rural roads',
                  'GPS tracking for all deliveries',
                  'Direct delivery to investor locations',
                  'Documentation and proof of delivery',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xs mx-auto">
                <img
                  src={IMAGES.tractor}
                  alt="Tractor Transportation"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Sustainable Agriculture Network
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Whether you're a farmer, agent, or investor - there's a place for you in our ecosystem
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 bg-white text-green-800 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
