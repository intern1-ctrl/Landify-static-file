import { PageBanner } from '../components/PageBanner';
import { RoleCard } from '../components/RoleCard';
import { motion } from 'motion/react';
import { UserCog, Users, Sprout, Handshake } from 'lucide-react';
import farm2 from '../../assets/farm2.jpeg';
import farm8 from '../../assets/farm8.png';
import investofficer from '../../assets/officer.png';

const IMAGES = {
  banner: 'https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JlZW4lMjBmYXJtaW5nfGVufDF8fHx8MTc3MDI5NzAxOHww&ixlib=rb-4.1.0&q=80&w=1080',
  farmer: farm2,
  officer: investofficer,
  sustainable: farm8,
};

export function Roles() {
  return (
    <div>
      {/* Roles Header */}
      <section className="relative h-screen flex items-center pt-24 overflow-hidden" style={{ backgroundColor: '#C5CBE3' }}>
        {/* Background Layer removed top shadow as requested */}
        <div className="absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
                Roles
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-12 px-4">
                Our success is built on a perfectly synchronized three-tier system where expertise,
                connectivity, and dedication meet.
              </p>
            </motion.div>

            {/* Structured Role Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
              {[
                { icon: UserCog, label: 'Field Officer', color: 'from-purple-500/20 to-purple-600/10' },
                { icon: Users, label: 'Agent', color: 'from-blue-500/20 to-blue-600/10' },
                { icon: Sprout, label: 'Farmer', color: 'from-green-500/20 to-green-600/10' }
              ].map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`flex flex-col items-center p-6 rounded-2xl bg-slate-200/50 backdrop-blur-xl border border-slate-300 shadow-xl group hover:bg-slate-300/50 transition-all`}
                >
                  <role.icon className="size-10 text-slate-800 mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                  <span className="text-slate-900 font-bold tracking-wide uppercase text-xs">{role.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction - Unique Zen Focus Design */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-0 w-24 h-1 bg-green-600/20" />
        <div className="absolute top-1/2 right-0 w-24 h-1 bg-green-600/20" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <Handshake className="size-16 text-green-600 mx-auto mb-8 opacity-20" />
            <p className="text-3xl md:text-4xl text-gray-800 leading-[1.4] font-black tracking-tight italic">
              "Landify's success is a <span className="text-green-600">Symphony of Collaboration</span>, where every role is a vital instrument in our sustainable agricultural orchestra."
            </p>
            <div className="mt-12 flex justify-center gap-2">
              {[1, 2, 3].map(i => <div key={i} className="size-2 rounded-full bg-green-200" />)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Role Cards - Refined for viewport and impact */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {/* Role Cards remain high impact with current RoleCard component */}
          <RoleCard
            icon={UserCog}
            title="Field Officer"
            description="Strategic Operations Manager"
            responsibilities={[
              'Oversees agricultural operations across 40+ villages',
              'Manages and coordinates multiple agents in different regions',
              'Collects, verifies, and consolidates all cultivation data',
              'Conducts regular field inspections to ensure quality standards',
              'Prepares comprehensive reports for investors and stakeholders',
              'Coordinates logistics and transportation schedules',
              'Implements quality control measures at every stage',
              'Serves as primary point of contact for investors',
            ]}
            imageUrl={IMAGES.officer}
            gradient="from-purple-600 to-slate-900"
          />

          <RoleCard
            icon={Users}
            title="Agent"
            description="Village Coordinator & Data Manager"
            responsibilities={[
              'Establishes and maintains relationships with farmers in assigned villages',
              'Negotiates land lease agreements with clear terms and conditions',
              'Pays ₹1 lakh annual lease amount to each participating farmer per acre',
              'Maintains detailed daily records of farming activities',
              'Monitors grass cultivation progress and quality',
              'Acts as communication bridge between farmers and Field Officers',
              'Coordinates harvesting schedules and logistics',
              'Ensures compliance with sustainable farming practices',
            ]}
            imageUrl={IMAGES.sustainable}
            gradient="from-blue-600 to-slate-900"
            reverse
          />

          <RoleCard
            icon={Sprout}
            title="Farmer"
            description="Grass Cultivation Specialist"
            responsibilities={[
              'Leases land for one year under structured agreement',
              'Receives ₹1 lakh annually as guaranteed lease payment',
              'Cultivates green grass using own resources and expertise',
              'Applies appropriate fertilizers based on soil requirements',
              'Manages pesticide application for optimal grass health',
              'Handles irrigation and water management efficiently',
              'Maintains grass quality throughout the growth cycle',
              'Collaborates with agents for harvesting and collection',
            ]}
            imageUrl={IMAGES.farmer}
            gradient="from-green-600 to-slate-900"
          />
        </div>
      </section>

      {/* Collaboration - Unique Network Design */}
      <section className="relative py-24 bg-[#0F172A] overflow-hidden">
        {/* Network Lines Effect */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-6">
              <div className="size-2 bg-blue-400 rounded-full animate-pulse" />
              <span>Connectivity Protocol</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              Integrated <span className="text-blue-500 italic">Workflow</span>
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                icon: Handshake,
                title: 'Legal Integrity',
                description: 'Transparent, documented agreements with absolute clarity.',
                color: 'blue'
              },
              {
                icon: Users,
                title: 'Data Velocity',
                description: 'Real-time updates and constant communication loops.',
                color: 'purple'
              },
              {
                icon: Sprout,
                title: 'Shared Growth',
                description: 'A model where every stakeholder thrives together.',
                color: 'green'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-900/60 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all shadow-2xl"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center mb-8 border border-${item.color}-500/20`}>
                  <item.icon className={`size-8 text-${item.color}-400`} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Unique Achievement Design */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-black text-[#0f172a] mb-6 tracking-tighter uppercase font-serif italic">
              Empowerment <span className="text-green-600">&</span> Rewards
            </h2>
            <p className="text-xl text-gray-500 font-bold tracking-[0.2em] uppercase">Value across the ecosystem</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Sprout,
                title: 'Farmers',
                items: ['Guaranteed ₹1L Income', 'Full Resource Autonomy', 'Land Ownership Security', 'Sustainable Training'],
                color: 'green'
              },
              {
                icon: Users,
                title: 'Agents',
                items: ['High-yield Commissions', 'Village Network Growth', 'Professional Coaching', 'Regular Income Stream'],
                color: 'blue'
              },
              {
                icon: UserCog,
                title: 'Officers',
                items: ['Executive Leadership', 'Performance Bonuses', 'Regional Authority', '40+ Village Reach'],
                color: 'purple'
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : index === 2 ? 30 : 0, y: index === 1 ? 30 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-1 bg-gradient-to-b from-${benefit.color}-400 to-${benefit.color}-600 rounded-[2.5rem] shadow-xl hover:scale-[1.02] transition-transform`}
              >
                <div className="h-full bg-white rounded-[2.4rem] p-10 flex flex-col items-center">
                  <div className={`size-20 rounded-full bg-${benefit.color}-50 flex items-center justify-center mb-8 border-4 border-${benefit.color}-100`}>
                    <benefit.icon className={`size-10 text-${benefit.color}-600`} />
                  </div>
                  <h3 className={`text-3xl font-black text-${benefit.color}-900 mb-8 tracking-tighter uppercase`}>{benefit.title}</h3>
                  <ul className="space-y-4 w-full">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold group">
                        <div className={`size-6 rounded bg-${benefit.color}-600 flex items-center justify-center flex-shrink-0 group-hover:rotate-45 transition-transform`}>
                          <div className="size-2 bg-white rounded-full" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
