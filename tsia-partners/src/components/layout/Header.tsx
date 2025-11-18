import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Who We Serve', href: '/clients' },
    { label: 'Industries', href: '/industries' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-md-subtle'
          : 'bg-white/95 backdrop-blur-sm'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="TSIA Partners"
                className="h-12 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="relative text-neutral-700 hover:text-accent-500 font-medium transition-colors group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 ease-out group-hover:w-full" />
                </motion.a>
              ))}

              <a
                href="tel:0292676533"
                className="flex items-center gap-2 text-neutral-700 hover:text-accent-500 font-medium transition-colors"
              >
                <Phone size={18} />
                <span className="hidden lg:inline">02 9267 6533</span>
              </a>

              <button className="inline-flex items-center justify-center rounded-full font-semibold bg-white text-accent-500 border-2 border-accent-500 hover:bg-accent-500 hover:text-white shadow-md-subtle hover:shadow-lg-subtle hover:-translate-y-0.5 focus:ring-accent-500/30 transition-all duration-300 px-6 py-2.5 text-sm">
                Free Consultation
              </button>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-accent-500"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed top-20 left-0 right-0 bg-white z-40 shadow-xl-subtle max-h-[calc(100vh-80px)] overflow-y-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <nav className="px-6 py-8 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-neutral-700 hover:text-accent-500 hover:bg-accent-500/10 rounded-xl font-medium transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.a
                  href="tel:0292676533"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-neutral-700 hover:text-accent-500 hover:bg-accent-500/10 rounded-xl font-medium transition-colors"
                >
                  <Phone size={20} />
                  02 9267 6533
                </motion.a>

                <motion.div className="pt-4">
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center rounded-full font-semibold bg-white text-accent-500 border-2 border-accent-500 hover:bg-accent-500 hover:text-white shadow-md-subtle hover:shadow-lg-subtle hover:-translate-y-0.5 focus:ring-accent-500/30 transition-all duration-300 px-8 py-4 text-base"
                    >
                    Book Free Consultation
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;