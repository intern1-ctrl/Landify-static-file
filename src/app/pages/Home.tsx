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

import farm3 from '../../assets/farm2.jpeg';
import farm4 from '../../assets/farm4.jpeg';
import farm6 from '../../assets/farm6.jpeg';
import farm5 from '../../assets/farm7.png';
import farm8 from '../../assets/farm3.jpeg';
import background from '../../assets/background.png';

const IMAGES = {
  hero: background,
  farmer: farm3,
  officer: farm4,
  tractor: farm5,
  sustainable: farm8,
};

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] hover:scale-105"
            style={{ backgroundImage: `url(${IMAGES.hero})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >


            <h1 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tight overflow-hidden">
              {"LANDIFY".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5 + i * 0.1,
                    duration: 0.8,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-green-200 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] filter brightness-110"
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg font-medium">
              A premium agricultural business connecting field officers, agents, and farmers
              across 40+ villages in a structured, sustainable ecosystem.
            </p>

            <div className="flex flex-wrap gap-4">


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

      {/* Values Section - Unique Organic Design */}
      <section className="relative py-24 bg-[#FCF9F1] overflow-hidden">
        {/* Decorative Background Symbol */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -ml-48 -mb-48" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >

            <h2 className="text-5xl md:text-6xl font-black text-[#1a2e1a] mb-6 tracking-tight">
              Why Choose <span className="text-green-600">Landify</span>
            </h2>
            <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Premium, trustworthy, and investor-ready agricultural solutions built for the future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Shield,
                title: 'Trustworthy',
                description: 'Transparent operations with verified data tracking across all stages of the lifecycle.',
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                iconBg: 'bg-blue-600'
              },
              {
                icon: Sprout,
                title: 'Sustainable',
                description: 'Eco-friendly practices ensuring long-term agricultural health and soil vitality.',
                bg: 'bg-green-50',
                border: 'border-green-200',
                iconBg: 'bg-green-600'
              },
              {
                icon: Target,
                title: 'Investor-Ready',
                description: 'Professional structure with clear ROI and organized delivery systems.',
                bg: 'bg-purple-50',
                border: 'border-purple-200',
                iconBg: 'bg-purple-600'
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative group ${value.bg} p-10 rounded-[2.5rem] border-2 ${value.border} shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500`}
              >
                <div className={`w-20 h-20 rounded-3xl ${value.iconBg} flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                  <value.icon className="size-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-medium">
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
            className="text-center mb-8"
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

      {/* Logistics Section - Unique Industrial Theme */}
      <section className="relative py-24 bg-[#57BA98] overflow-hidden">
        {/* Tech/Grid Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3AAFA9 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >


              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                Precision <span className="text-amber-500">Logistics</span> & Fast Delivery
              </h2>

              <p className="text-xl text-[#0a2e1f] mb-10 leading-relaxed font-bold">
                Our optimized transportation network ensures that every bundle of green grass is tracked
                and delivered with architectural precision across rural terrains.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { text: 'Uniform Bundling', sub: 'Precision cutting' },
                  { text: 'Quality Control', sub: 'Pre-load inspection' },
                  { text: 'Tractor Fleet', sub: 'Rural terrain ready' },
                  { text: 'Real-time Tracking', sub: 'GPS coordinated' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-[#0a2e1f]/10 p-4 rounded-xl border border-[#0a2e1f]/20 hover:border-amber-500/40 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </div>
                    <div>
                      <div className="text-[#0a2e1f] font-black">{item.text}</div>
                      <div className="text-[#0a2e1f]/60 text-sm whitespace-nowrap font-bold">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-amber-500/20 rounded-3xl" />
              <div className="absolute top-0 right-0 -mr-6 -mt-6 size-24 border-t-4 border-r-4 border-amber-500 opacity-30" />
              <div className="absolute bottom-0 left-0 -ml-6 -mb-6 size-24 border-b-4 border-l-4 border-amber-500 opacity-30" />

              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.2)] max-w-lg mx-auto border-4 border-[#1e293b]">
                <img
                  src={IMAGES.tractor}
                  alt="Tractor Transportation"
                  className="w-full h-[450px] object-cover object-top transition-all duration-500"
                />


                {/* Status Badge */}

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
