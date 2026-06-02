import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, Home as HomeIcon, Info, Workflow, Users, BookOpen } from 'lucide-react';
import logo from '../../assets/logo.png';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: HomeIcon, subLabel: 'Main Hub' },
    { path: '/about', label: 'About Us', icon: Info, subLabel: 'Our Mission' },
    { path: '/process', label: 'Process', icon: Workflow, subLabel: 'How it works' },
    { path: '/roles', label: 'Roles', icon: Users, subLabel: 'Ecosystem' },
    { path: '/blog', label: 'Blog', icon: BookOpen, subLabel: 'Insights' },
    { path: '/contact', label: 'Contact', icon: Phone, subLabel: 'Get In Touch' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
          }`}
      >
        <nav className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group z-50">
              <img
                src={logo}
                alt="Landify Logo"
                className={`transition-all duration-300 object-contain group-hover:scale-105 drop-shadow-lg ${isScrolled ? 'h-40' : 'h-40'
                  }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center gap-1.5 backdrop-blur-md rounded-full px-2.5 py-1.5 ml-auto border transition-all duration-300 ${isScrolled
              ? 'bg-green-50/70 border-green-100 shadow-sm'
              : 'bg-white/10 border-white/20 shadow-lg'
              }`}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2.5 font-bold text-sm group drop-shadow-sm z-10 ${isActive(link.path)
                    ? 'text-white'
                    : `${(isScrolled || location.pathname === '/roles' || location.pathname === '/about' || location.pathname === '/process') ? 'text-slate-900 hover:text-green-800' : 'text-white hover:text-green-200'}`
                    }`}
                >
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-green-600 rounded-full -z-10 shadow-md"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <div className={`p-1 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isActive(link.path)
                      ? 'bg-white/25 text-white'
                      : (isScrolled || location.pathname === '/roles' || location.pathname === '/about' || location.pathname === '/process')
                      ? 'bg-green-50 text-green-700 group-hover:bg-green-600 group-hover:text-white group-hover:rotate-6 shadow-sm'
                      : 'bg-white/15 text-white group-hover:bg-green-600 group-hover:text-white group-hover:rotate-6 shadow-sm'
                  }`}>
                    <link.icon className="size-3.5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-green-50/50 border border-green-100 hover:bg-green-50 transition-colors flex items-center justify-center shadow-sm"
            >
              {mobileMenuOpen ? (
                <X className="size-6 text-green-700" />
              ) : (
                <Menu className="size-6 text-green-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-1.5 bg-white rounded-2xl shadow-xl border border-green-100/50 mt-2 px-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group ${isActive(link.path)
                        ? 'bg-green-50/80 text-green-800 font-extrabold shadow-sm border border-green-100/50'
                        : 'text-gray-600 hover:bg-green-50/40 hover:text-green-600 font-semibold'
                        }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive(link.path)
                        ? 'bg-green-600 text-white shadow-md shadow-green-600/20 rotate-3'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-green-100 group-hover:text-green-700 group-hover:rotate-3'
                        }`}>
                        <link.icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-sm tracking-wide font-bold">{link.label}</span>
                        <span className="text-[10px] text-gray-400 font-medium group-hover:text-green-600/80 transition-colors uppercase tracking-widest mt-0.5">
                          {link.subLabel}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
            {/* About */}
            <div className="flex flex-col">
              <div className="mb-6 -ml-4">
                <img src={logo} alt="Landify Logo" className="h-56 w-auto object-contain" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs font-semibold">
                Cultivating sustainable agriculture through a structured village ecosystem.
                Empowering farmers, agents, and field officers across 40+ villages.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col pt-16">
              <h3 className="text-sm font-black text-white mb-8 uppercase tracking-[0.2em]">Quick Links</h3>
              <ul className="space-y-4 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-green-400 transition-colors font-semibold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col pt-16">
              <h3 className="text-sm font-black text-white mb-8 uppercase tracking-[0.2em]">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-300 hover:text-green-400 transition-colors font-semibold"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-300 hover:text-green-400 transition-colors font-semibold"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col pt-16">
              <h3 className="text-sm font-black text-white mb-8 uppercase tracking-[0.2em]">Contact Us</h3>
              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <MapPin className="size-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 font-medium">
                    206, 2nd floor, Block-A, PSR Prime Tower, Beside DLF, Gachibowli
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="size-5 text-green-500 flex-shrink-0" />
                  <a href="tel:+917075866239" className="text-gray-300 hover:text-green-400 transition-colors font-semibold">
                    +91 70758 66239
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="size-5 text-green-500 flex-shrink-0" />
                  <a href="mailto:contact@landify.in" className="text-gray-300 hover:text-green-400 transition-colors font-semibold">
                    contact@landify.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} LANDIFY INDIA PRIVATE LIMITED. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
