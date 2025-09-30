import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button, Badge, Container } from '@/components/ui';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-subtle pt-32 pb-20 overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-subtle to-transparent pointer-events-none opacity-50" />
      
      {/* Minimal grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust Badge - Subtle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge variant="default" size="md" icon="✓">
                Trusted for 50+ Years in Sydney
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-5xl lg:text-6xl xl:text-7xl font-light text-neutral-900 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Your Trusted{' '}
              <span className="font-semibold text-accent relative">
                Financial Partners
                {/* Subtle orange underline */}
                <span className="absolute bottom-1 left-0 right-0 h-1 bg-accent/20 -z-10"></span>
              </span>{' '}
              in Sydney
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl lg:text-2xl text-neutral-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Expert accounting, tax, and business advisory services tailored for individuals, 
              businesses, and organisations. Experience the difference of working with seasoned professionals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button 
                variant="primary" 
                size="lg"
                icon={<ChevronRight size={20} />}
                iconPosition="right"
              >
                Book Free Consultation
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
              >
                Our Services
              </Button>
            </motion.div>

            {/* Trust Indicators - Minimal Style */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {[
                { icon: '50+', text: 'Years of Expertise' },
                { icon: '✓', text: 'Licensed Professionals' },
                { icon: '★', text: 'Sydney CBD Located' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-white border-2 border-neutral-200 rounded-full flex items-center justify-center text-neutral-700 font-bold text-sm shadow-subtle group-hover:border-accent/30 group-hover:shadow-md-subtle transition-all flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm lg:text-base text-neutral-600 font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl-subtle border border-neutral-200">
              {/* Placeholder for office image */}
              <div className="aspect-[4/5] lg:aspect-[3/4] bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg-subtle border border-neutral-200">
                    <span className="text-4xl">🏢</span>
                  </div>
                  <p className="text-neutral-500 font-medium">
                    Replace with your<br />professional office photo
                  </p>
                </div>
              </div>

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>

            {/* Floating Card 1 - Minimal Style */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl-subtle border border-neutral-100 hidden lg:block"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  📊
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 text-lg">Tax Excellence</div>
                  <div className="text-sm text-neutral-500">Individual & Business</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2 - Minimal Style */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl-subtle border border-neutral-100 hidden lg:block"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  💼
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 text-lg">Strategic Advisory</div>
                  <div className="text-sm text-neutral-500">Growth & Planning</div>
                </div>
              </div>
            </motion.div>

            {/* Subtle accent line */}
            <motion.div
              className="absolute top-1/3 -right-12 w-24 h-0.5 bg-gradient-to-r from-accent/30 to-transparent hidden xl:block"
              animate={{ 
                x: [0, 10, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowRight size={20} className="rotate-90" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;