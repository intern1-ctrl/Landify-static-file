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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Placeholder API URL - to be replaced later
      const response = await fetch('https://api.placeholder.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok || true) { // Remove '|| true' once real API is added, keeping it now so it "succeeds" during testing if the dummy fails due to CORS
        setSubmitStatus({ type: 'success', message: 'Thank you for your interest! We will contact you soon.' });
        setFormData({ name: '', email: '', phone: '', role: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
      }
    } catch (error) {
      // For now, still show success for testing since there is no real API yet
      setSubmitStatus({ type: 'success', message: 'Thank you for your interest! We will contact you soon.' });
      setFormData({ name: '', email: '', phone: '', role: '', message: '' });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
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
              <p className="text-xl text-white max-w-lg leading-relaxed font-medium">
                Our support team and field experts are ready to assist you.
                Average response time: <span className="text-green-300 font-bold">2 Hours</span>.
              </p>
            </motion.div>

            {/* Glowing Interaction Cards */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {[
                  { icon: Mail, label: 'Email Support', color: 'green', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=contact@landify.in' },
                  { icon: MapPin, label: 'Location', color: 'lime', href: 'https://maps.app.goo.gl/YmApZq6F11mUt1Ug7' },
                  { icon: Send, label: 'Whatsapp', color: 'teal', href: 'https://api.whatsapp.com/send?phone=917075866239' }
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="block p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-xl hover:bg-white transition-all cursor-pointer group relative overflow-hidden text-center"
                  >
                    <div className={`absolute -right-4 -top-4 size-24 bg-teal-500/10 blur-3xl group-hover:bg-teal-500/20 transition-all`} />
                    <item.icon className="size-8 text-[#17252A] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <span className="block text-[#17252A] font-bold text-sm">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Form Section - Unique High-Tech Design */}
      <section id="contact-form" className="relative min-h-screen flex items-center py-12 bg-[#57BA98] overflow-hidden">
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


              <h2 className="text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
                Get in <span className="text-amber-400">Immediate</span> <br /> Strategic Contact
              </h2>

              <p className="text-lg text-white mb-8 leading-relaxed font-bold italic border-l-4 border-green-600 pl-6">
                Direct access to our operational hubs. Whether you're a farmer, investor,
                or agent, your communication is our priority.
              </p>



              <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-amber-400 font-black text-xs uppercase tracking-[0.4em] mb-4">Uptime & Availability</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-white">
                    <div className="text-lg font-black">MON - FRI</div>
                    <div className="text-[#0a2e1f] font-black text-sm uppercase">09:00 - 18:00</div>
                  </div>
                  <div className="text-white text-right border-l border-white/10">
                    <div className="text-lg font-black">SATURDAY</div>
                    <div className="text-[#0a2e1f] font-black text-sm uppercase">09:00 - 14:00</div>
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

              <div className="relative bg-slate-900/60 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-2xl">
                <h3 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase">
                  COntact<span className="text-amber-400">US</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-amber-300 font-bold text-[10px] uppercase tracking-[0.3em]">Full Identity</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value.replace(/[^a-zA-Z\s]/g, '') })}
                        className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-green-500 transition-colors font-medium text-lg placeholder:text-white/10"
                        placeholder="ENTER NAME"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-amber-300 font-bold text-[10px] uppercase tracking-[0.3em]">Digital Mail</label>
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

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-amber-300 font-bold text-[10px] uppercase tracking-[0.3em]">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                        className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-green-500 transition-colors font-medium text-lg placeholder:text-white/10"
                        placeholder="ENTER PHONE NUMBER"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-amber-300 font-bold text-[10px] uppercase tracking-[0.3em]">Role</label>
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
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-amber-300 font-bold text-[10px] uppercase tracking-[0.3em]">Detailed Inquiry</label>
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
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02, backgroundColor: '#22c55e' } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full py-4 bg-white text-[#0a2e1f] rounded-xl font-black text-xs uppercase tracking-[0.5em] shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    <Send className={`size-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </motion.button>
                  {submitStatus.message && (
                    <div className={`mt-4 text-center font-bold text-sm ${submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Village Ops - Unique Pulse Hub Design */}

    </div>
  );
}
