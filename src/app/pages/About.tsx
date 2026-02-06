import { motion } from 'motion/react';
import { PageBanner } from '../components/PageBanner';
import { Target, Eye, Leaf, Users, TrendingUp, MapPin } from 'lucide-react';

import farm3 from '../../assets/farm3.jpeg';
import farm7 from '../../assets/farm5.jpeg';

const IMAGES = {
  banner: 'https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JlZW4lMjBmYXJtaW5nfGVufDF8fHx8MTc3MDI5NzAxOHww&ixlib=rb-4.1.0&q=80&w=1080',
  village: farm7,
};

export function About() {
  return (
    <div>
      {/* About Header */}
      <section className="relative h-screen flex items-center pt-24 overflow-hidden" style={{ backgroundColor: '#90AEAD' }}>
        {/* Background Layer */}
        <div className="absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="text-5xl md:text-7xl font-bold text-[#0a2e1f] mb-6 leading-tight">
                About Us
              </h1>
              <p className="text-xl text-[#0a2e1f]/90 max-w-xl leading-relaxed font-semibold">
                Landify is more than just an agricultural business; we are a community-driven ecosystem
                bridging the gap between traditional wisdom and modern innovation.
              </p>
            </motion.div>

            {/* Floating Features */}
            <div className="relative hidden lg:flex justify-end perspective-1000">
              <div className="relative w-full max-w-md aspect-square">
                {[
                  { icon: Target, text: 'Clear Vision', top: '10%', left: '10%', delay: 0.2 },
                  { icon: Users, text: '40+ Villages', top: '50%', left: '40%', delay: 0.4 },
                  { icon: Eye, text: 'Transparent Data', top: '20%', left: '60%', delay: 0.6 },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: feature.delay, duration: 0.6 }}
                    style={{ top: feature.top, left: feature.left }}
                    className="absolute p-6 rounded-2xl bg-[#0a2e1f] border border-white/20 shadow-2xl group hover:bg-[#14532d] transition-all cursor-default"
                  >
                    <feature.icon className="size-8 text-green-400 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="block text-white font-bold whitespace-nowrap">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Unique Community Design */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Abstract Topographic Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%230a2e1f' fill-opacity='1' fill-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")` }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >

              <h2 className="text-5xl md:text-6xl font-black text-[#0a2e1f] mb-8 leading-tight tracking-tight">
                Transforming <span className="text-green-600 underline underline-offset-8">Landscape</span> <br /> & Lives
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-medium">
                <p className="pl-6 border-l-4 border-green-600 italic text-xl text-gray-800">
                  "Landify is more than a business; it's a commitment to the earth and the hands that till it."
                </p>
                <p>
                  We operate across 40+ villages, creating a self-sustaining cycle that connects Field Officers,
                  Agents, and Farmers in a transparent, efficient network.
                </p>
                <p>
                  Through innovative lease agreements (₹1 lakh per acre), we've brought corporate structure
                  to rural grass cultivation, ensuring stability for families.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-green-600/5 rounded-[3rem] rotate-3" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img
                  src={IMAGES.village}
                  alt="Rural Village"
                  className="w-full h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent" />

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Unique Split Design */}
      <section className="relative h-[80vh] flex items-center bg-[#8FC1E3] overflow-hidden">
        <div className="relative z-10 w-full">
          <div className="grid md:grid-cols-2">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 md:p-24 border-r border-white/10 flex flex-col justify-center group hover:bg-white/5 transition-colors"
            >
              <Eye className="size-20 text-blue-400 mb-8 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-white text-5xl font-black mb-8 tracking-tighter uppercase">Our Vision</h3>
              <p className="text-blue-100/70 text-2xl leading-relaxed font-bold tracking-tight">
                To become India's most trusted sustainable agriculture network,
                connecting rural abundance with modern investment horizons.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 md:p-24 flex flex-col justify-center group hover:bg-white/5 transition-colors"
            >
              <Target className="size-20 text-green-400 mb-8 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-white text-5xl font-black mb-8 tracking-tighter uppercase">Our Mission</h3>
              <p className="text-green-100/70 text-2xl leading-relaxed font-bold tracking-tight">
                Empowering farmers through structured management and high-quality
                cultivation standards that deliver absolute reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainable Model - Unique Earthy Design */}
      <section className="relative py-24 bg-[#f3f4f1] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0a2e1f]/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-black text-[#0a2e1f] mb-6 tracking-tighter uppercase italic">
              The <span className="text-green-600">Landify</span> Standard
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-green-300" />
              <Leaf className="size-6 text-green-600" />
              <div className="h-px w-12 bg-green-300" />
            </div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed">
              We've Engineered a model where traditional wisdom meets corporate precision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Eco-Regeneration',
                description: 'Preserving soil vitality through scientifically backed sustainable rotations.',
                accent: 'border-green-400'
              },
              {
                icon: Users,
                title: 'Village Autonomy',
                description: 'Empowering local leadership while maintaining standardized quality.',
                accent: 'border-blue-400'
              },
              {
                icon: TrendingUp,
                title: 'Quality Scale',
                description: 'Architecturally structured growth that never compromises on results.',
                accent: 'border-purple-400'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group bg-white p-10 rounded-[2rem] border-b-8 ${item.accent} shadow-xl hover:-translate-y-4 transition-all duration-500`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-green-600 transition-colors">
                  <item.icon className="size-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-semibold">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Unique Monolith Design */}
      <section className="relative py-24 bg-[#57BA98] overflow-hidden">
        {/* Dynamic Light Rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: '40+', label: 'VILLAGES SECURED' },
              { value: '100+', label: 'ACTIVE PARTNERS' },
              { value: '₹1L', label: 'LEASE VALUE / ACRE' },
              { value: '100%', label: 'STAKEHOLDER TRUST' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative group"
              >
                <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter block group-hover:text-green-400 transition-colors drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  {stat.value}
                </div>
                <div className="text-green-500 font-bold text-xs tracking-[0.3em] uppercase">
                  {stat.label}
                </div>
                <div className="mt-4 w-12 h-1 bg-green-500/20 mx-auto rounded-full group-hover:w-20 group-hover:bg-green-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
