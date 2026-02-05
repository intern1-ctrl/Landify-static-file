import { Link, useLocation } from 'react-router-dom';
import { Sprout, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/process', label: 'Process' },
    { path: '/roles', label: 'Roles' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-green-600 to-green-800 p-2.5 rounded-xl group-hover:scale-105 transition-transform">
                <Sprout className="size-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent">
                Landify
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 transition-colors ${
                    isActive(link.path)
                      ? 'text-green-700'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
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
                <div className="py-4 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive(link.path)
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
      <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sprout className="size-8 text-green-300" />
                <span className="text-xl font-bold">Landify</span>
              </div>
              <p className="text-green-100 text-sm leading-relaxed">
                Cultivating sustainable agriculture through a structured village ecosystem.
                Empowering farmers, agents, and field officers across 40+ villages.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-green-100">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-green-200 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4 text-green-100">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/terms"
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-green-700 text-center text-sm text-green-200">
            <p>&copy; {new Date().getFullYear()} Landify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
