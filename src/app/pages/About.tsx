import { motion } from 'motion/react';
import { PageBanner } from '../components/PageBanner';
import { Target, Eye, Leaf, Users, TrendingUp, MapPin } from 'lucide-react';

const IMAGES = {
  banner: 'https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JlZW4lMjBmYXJtaW5nfGVufDF8fHx8MTc3MDI5NzAxOHww&ixlib=rb-4.1.0&q=80&w=1080',
  village: 'https://images.unsplash.com/photo-1661932912841-7557bed41c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwYWdyaWN1bHR1cmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcwMjk3MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
};

export function About() {
  return (
    <div>
      <PageBanner
        title="About Landify"
        subtitle="Building a sustainable agricultural future through innovation and community"
        imageUrl={IMAGES.banner}
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transforming Rural Agriculture
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Landify is a premium agricultural business dedicated to cultivating green grass
                  through a structured, sustainable village ecosystem. We operate across 40+ villages,
                  creating opportunities for farmers while delivering quality produce to investors.
                </p>
                <p>
                  Our unique three-tier system connects Field Officers, Agents, and Farmers in a
                  transparent, efficient network that ensures every stakeholder benefits from our
                  sustainable practices.
                </p>
                <p>
                  Through innovative lease agreements and professional management, we've created
                  a model that empowers rural communities while maintaining the highest standards
                  of quality and reliability.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.village}
                  alt="Village Agriculture"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6">
                <Eye className="size-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the leading sustainable agriculture ecosystem in India, empowering
                rural communities through innovative farming practices and creating a model
                that balances profitability with environmental responsibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center mb-6">
                <Target className="size-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To cultivate high-quality green grass through a transparent, structured system
                that provides stable income to farmers, ensures efficient operations through
                agents and field officers, and delivers reliable results to investors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainable Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sustainable Agriculture Model
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach combines traditional farming wisdom with modern business practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Eco-Friendly',
                description: 'Sustainable practices that preserve soil health and minimize environmental impact',
              },
              {
                icon: Users,
                title: 'Community-Focused',
                description: 'Empowering 40+ villages with stable income and agricultural opportunities',
              },
              {
                icon: TrendingUp,
                title: 'Growth-Oriented',
                description: 'Scalable model designed for expansion while maintaining quality standards',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all text-center"
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

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '40+', label: 'Villages' },
              { value: '100+', label: 'Farmers' },
              { value: '₹1L', label: 'Annual Lease' },
              { value: '100%', label: 'Sustainable' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-green-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-green-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
