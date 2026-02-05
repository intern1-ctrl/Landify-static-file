import { PageBanner } from '../components/PageBanner';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const IMAGES = {
  banner: 'https://images.unsplash.com/photo-1761055277862-c0962cb4c8ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGdyYXNzJTIwZmllbGQlMjBzdW5saWdodCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MDI5NzAxNnww&ixlib=rb-4.1.0&q=80&w=1080',
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
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch to join our sustainable agriculture network"
        imageUrl={IMAGES.banner}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you're a farmer interested in our lease program, an agent looking to
                join our network, or an investor seeking opportunities, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@landify.com</p>
                    <p className="text-gray-600">support@landify.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 12345 67890</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">
                      Agricultural Innovation Hub<br />
                      Rural Development Center<br />
                      District Headquarters
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+91 12345 67890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      I am interested as a *
                    </label>
                    <select
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select your role</option>
                      <option value="farmer">Farmer</option>
                      <option value="agent">Agent</option>
                      <option value="field-officer">Field Officer</option>
                      <option value="investor">Investor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your interest in Landify..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                  >
                    <Send className="size-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Serving 40+ Villages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Our network spans across multiple districts, bringing sustainable agriculture
              opportunities to rural communities.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: 'Villages', value: '40+' },
                { label: 'Active Farmers', value: '100+' },
                { label: 'Field Officers', value: '10+' },
                { label: 'Agents', value: '25+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
