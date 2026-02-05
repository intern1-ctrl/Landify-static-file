import { PageBanner } from '../components/PageBanner';
import { RoleCard } from '../components/RoleCard';
import { motion } from 'motion/react';
import { UserCog, Users, Sprout, Handshake } from 'lucide-react';

const IMAGES = {
  banner: 'https://images.unsplash.com/photo-1661932912841-7557bed41c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwYWdyaWN1bHR1cmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcwMjk3MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  farmer: 'https://images.unsplash.com/photo-1629288465751-07e42186084f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB3b3JraW5nJTIwZmllbGQlMjBpbmRpYXxlbnwxfHx8fDE3NzAyOTcwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  officer: 'https://images.unsplash.com/photo-1582794496242-8165eed32971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmaWVsZCUyMG9mZmljZXIlMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc3MDI5NzAxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  sustainable: 'https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JlZW4lMjBmYXJtaW5nfGVufDF8fHx8MTc3MDI5NzAxOHww&ixlib=rb-4.1.0&q=80&w=1080',
};

export function Roles() {
  return (
    <div>
      <PageBanner
        title="Roles & Responsibilities"
        subtitle="Understanding the key players in our sustainable agriculture ecosystem"
        imageUrl={IMAGES.banner}
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              Landify's success is built on a three-tier system where Field Officers, Agents,
              and Farmers work together in harmony. Each role is carefully designed to ensure
              efficiency, transparency, and mutual benefit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Role Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
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
            gradient="from-purple-600 to-purple-700"
          />

          <RoleCard
            icon={Users}
            title="Agent"
            description="Village Coordinator & Data Manager"
            responsibilities={[
              'Establishes and maintains relationships with farmers in assigned villages',
              'Negotiates land lease agreements with clear terms and conditions',
              'Pays ₹1 lakh annual lease amount to each participating farmer',
              'Maintains detailed daily records of farming activities',
              'Monitors grass cultivation progress and quality',
              'Acts as communication bridge between farmers and Field Officers',
              'Coordinates harvesting schedules and logistics',
              'Ensures compliance with sustainable farming practices',
            ]}
            imageUrl={IMAGES.sustainable}
            gradient="from-blue-600 to-blue-700"
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
            gradient="from-green-600 to-green-700"
          />
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Collaboration & Communication
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our three-tier system works together seamlessly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: 'Clear Agreements',
                description: 'All roles operate under transparent, documented agreements with defined responsibilities and compensation',
              },
              {
                icon: Users,
                title: 'Regular Communication',
                description: 'Daily updates, weekly meetings, and monthly reviews ensure everyone stays aligned and informed',
              },
              {
                icon: Sprout,
                title: 'Shared Success',
                description: 'When one succeeds, all succeed - our model is designed for mutual growth and prosperity',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center mb-6">
                  <item.icon className="size-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits by Role
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center mb-6">
                <Sprout className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Farmers</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Guaranteed ₹1 lakh annual income</li>
                <li>• Use own resources and methods</li>
                <li>• Maintain land ownership</li>
                <li>• Learn sustainable practices</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6">
                <Users className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Agents</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Commission on successful leases</li>
                <li>• Build village network</li>
                <li>• Professional development</li>
                <li>• Regular income stream</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-6">
                <UserCog className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Field Officers</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Leadership position</li>
                <li>• Performance-based incentives</li>
                <li>• Career growth opportunities</li>
                <li>• Impact across 40+ villages</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
