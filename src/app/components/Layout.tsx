import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, Home as HomeIcon, Info, Workflow, Users } from 'lucide-react';
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
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/process', label: 'Process', icon: Workflow },
    { path: '/roles', label: 'Roles', icon: Users },
    { path: '/contact', label: 'Contact', icon: Phone },
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
            <div className={`hidden md:flex items-center gap-1 backdrop-blur-md rounded-full px-2 py-1 ml-auto border transition-all duration-300 ${isScrolled
              ? 'bg-green-50/50 border-green-100 shadow-sm'
              : 'bg-white/10 border-white/20 shadow-lg'
              }`}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 rounded-full transition-all duration-300 flex items-center gap-2 font-bold text-sm group drop-shadow-sm ${isActive(link.path)
                    ? 'bg-green-600 text-white shadow-md'
                    : `${(isScrolled || location.pathname === '/roles' || location.pathname === '/about' || location.pathname === '/process') ? 'text-slate-900' : 'text-white'} hover:bg-black/5 hover:text-green-800`
                    }`}
                >
                  <link.icon className={`size-4 transition-transform group-hover:scale-110 ${isActive(link.path) ? 'text-white' : (isScrolled || location.pathname === '/roles' || location.pathname === '/about' || location.pathname === '/process' ? 'text-green-800' : 'text-white')}`} />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-green-50 transition-colors"
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
                <div className="py-4 space-y-1 bg-white rounded-2xl shadow-xl border border-green-100/50 mt-2 px-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${isActive(link.path)
                        ? 'bg-green-50 text-green-700'
                        : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
                        }`}
                    >
                      {link.label}
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
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
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
                      className="text-gray-400 hover:text-green-500 transition-colors font-medium"
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
                    className="text-gray-400 hover:text-green-500 transition-colors font-medium"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-green-500 transition-colors font-medium"
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
                  <span className="text-gray-400">
                    206, 2nd floor, Block-A, PSR Prime Tower, Beside DLF, Gachibowli
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="size-5 text-green-500 flex-shrink-0" />
                  <a href="tel:+917702710290" className="text-gray-400 hover:text-green-500 transition-colors font-medium">
                    +91 77027 10290
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="size-5 text-green-500 flex-shrink-0" />
                  <a href="mailto:contact@markwave.ai" className="text-gray-400 hover:text-green-500 transition-colors font-medium">
                    contact@markwave.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Landify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
