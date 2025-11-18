import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';
const street = '/images/street-view.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image + Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src={street}
          alt="TSIA Partners Sydney CBD Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* dark overlay */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Trust badge */}
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
            Trusted Sydney Accountants Since 1972
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white">
            Your Trusted <br />
            <span className="font-semibold text-accent-500 relative">
              Financial Partners
              <span className="block text-4xl md:text-5xl font-normal mt-2 opacity-100">
                in Sydney CBD
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Expert accounting, tax planning & business advisory for individuals and businesses across Sydney.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer">
              <button className="bg-accent-500 hover:bg-accent-600 text-white font-medium px-10 py-5 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3 mx-auto sm:mx-0">
                Book Free Consultation
                <ChevronRight size={24} />
              </button>
            </a>

            <a href="/clients">
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 font-medium px-10 py-5 rounded-full text-lg transition-all duration-200">
                Who We Serve
              </button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-sm">
            {[
              '50+ Years Experience',
              'Chartered Accountants',
              'Tax Agents',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check size={18} className="text-accent-400" strokeWidth={3} />
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronRight className="rotate-90 text-white/60" size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;