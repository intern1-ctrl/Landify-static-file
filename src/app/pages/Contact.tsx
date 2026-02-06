import { PageBanner } from '../components/PageBanner';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Users, UserCog } from 'lucide-react';
import { useState } from 'react';

const IMAGES = {
  banner: 'https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JlZW4lMjBmYXJtaW5nfGVufDF8fHx8MTc3MDI5NzAxOHww&ixlib=rb-4.1.0&q=80&w=1080',
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', role: '', message: '' });
  };

  return (
    <div>
      {/* Contact Header */}
      <section className="relative h-screen flex items-center pt-24 overflow-hidden" style={{ backgroundColor: '#376E6F' }}>
        {/* Background Layer removed top shadow as requested */}
        <div className="absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Contact Us
              </h1>
              <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                Our support team and field experts are ready to assist you.
                Average response time: <span className="text-white font-bold">2 Hours</span>.
              </p>
            </motion.div>

            {/* Glowing Interaction Cards */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {[
                  { icon: Mail, label: 'Email Support', color: 'green' },
                  { icon: Phone, label: 'Hotline', color: 'emerald' },
                  { icon: MapPin, label: 'HQ Visit', color: 'lime' },
                  { icon: Send, label: 'Direct Message', color: 'teal' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-xl hover:bg-white transition-all cursor-pointer group relative overflow-hidden text-center"
                  >
                    <div className={`absolute -right-4 -top-4 size-24 bg-teal-500/10 blur-3xl group-hover:bg-teal-500/20 transition-all`} />
                    <item.icon className="size-8 text-[#17252A] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <span className="block text-[#17252A] font-bold text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Form Section - Unique High-Tech Design */}
      <section className="relative py-24 bg-[#57BA98] overflow-hidden">
        {/* Dynamic Data Lines */}
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-stretch">
            {/* Contact Information - Unique Digital Style */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 font-black text-xs uppercase tracking-[0.3em] mb-10">
                <div className="size-2 bg-green-500 rounded-full animate-pulse" />
                <span>Global Connectivity Ops</span>
              </div>

              <h2 className="text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
                Get in <span className="text-green-500">Immediate</span> <br /> Strategic Contact
              </h2>

              <p className="text-xl text-green-100/60 mb-12 leading-relaxed font-bold italic border-l-4 border-green-600 pl-6">
                Direct access to our operational hubs. Whether you're a farmer, investor,
                or agent, your communication is our priority.
              </p>

              <div className="space-y-10">
                {[
                  { icon: Mail, label: 'Email Protocol', value: 'contact@markwave.ai', color: 'green' },
                  { icon: Phone, label: 'Voice Link', value: '+91 77027 10290', color: 'blue' },
                  { icon: MapPin, label: 'Strategic HQ', value: 'Prime Tower, Gachibowli', color: 'purple' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center group-hover:bg-${item.color}-500 group-hover:scale-110 transition-all duration-500`}>
                      <item.icon className={`size-7 text-${item.color}-400 group-hover:text-white transition-colors`} />
                    </div>
                    <div>
                      <div className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-white text-xl font-black group-hover:text-green-400 transition-colors uppercase tracking-tight">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-green-500 font-black text-xs uppercase tracking-[0.4em] mb-4">Uptime & Availability</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-white">
                    <div className="text-lg font-black">MON - FRI</div>
                    <div className="text-gray-500 font-bold text-sm">09:00 - 18:00</div>
                  </div>
                  <div className="text-white text-right border-l border-white/10">
                    <div className="text-lg font-black">SATURDAY</div>
                    <div className="text-gray-500 font-bold text-sm">09:00 - 14:00</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Unique Glass Console Styling */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-white/5 rounded-[2rem]" />

              <div className="relative bg-slate-900/60 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 shadow-2xl">
                <h3 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase">
                  Terminal <span className="text-green-500">Input</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-green-500 font-bold text-[10px] uppercase tracking-[0.3em]">Full Identity</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-green-500 transition-colors font-medium text-lg placeholder:text-white/10"
                        placeholder="ENTER NAME"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-green-500 font-bold text-[10px] uppercase tracking-[0.3em]">Digital Mail</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-green-500 transition-colors font-medium text-lg placeholder:text-white/10"
                        placeholder="EMAIL@DOMAIN"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-green-500 font-bold text-[10px] uppercase tracking-[0.3em]">Select Protocol</label>
                    <select
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-green-500 transition-colors font-medium text-lg appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0a2e1f]">SELECT ROLE</option>
                      <option value="farmer" className="bg-[#0a2e1f]">FARMER</option>
                      <option value="agent" className="bg-[#0a2e1f]">AGENT</option>
                      <option value="field-officer" className="bg-[#0a2e1f]">FIELD OFFICER</option>
                      <option value="investor" className="bg-[#0a2e1f]">INVESTOR</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-green-500 font-bold text-[10px] uppercase tracking-[0.3em]">Detailed Inquiry</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-500 transition-colors font-medium placeholder:text-white/10 resize-none"
                      placeholder="MESSAGE CONTENT..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, backgroundColor: '#22c55e' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-white text-[#0a2e1f] rounded-xl font-black text-xs uppercase tracking-[0.5em] shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all flex items-center justify-center gap-3"
                  >
                    <Send className="size-4" />
                    Initialize Link
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Village Ops - Unique Pulse Hub Design */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Dynamic Pulse Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-50 rounded-full scale-0 animate-ping opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-black text-[#0a2e1f] mb-6 tracking-tighter uppercase italic">
              Regional <span className="text-green-600">Density</span>
            </h2>
            <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto tracking-wide">
              Powering agricultural innovation across 40+ strategic village sectors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Strategic Sectors', value: '40+', icon: MapPin },
              { label: 'Primary Producers', value: '100+', icon: Users },
              { label: 'Operations Command', value: '10+', icon: UserCog },
              { label: 'Field Logistics', value: '40+', icon: Send },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:bg-[#0a2e1f] transition-all duration-500 text-center shadow-lg"
              >
                <div className="size-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="size-8 text-green-600" />
                </div>
                <div className="text-5xl font-black text-[#0a2e1f] group-hover:text-white mb-2 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-400 group-hover:text-green-400 font-bold text-[10px] uppercase tracking-widest transition-colors mb-4">
                  {stat.label}
                </div>
                <div className="w-8 h-1 bg-green-600/20 mx-auto rounded-full group-hover:w-16 group-hover:bg-green-600 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
