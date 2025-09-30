import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { 
  Building, 
  Store, 
  Hammer, 
  Truck, 
  Briefcase, 
  GraduationCap,
  Heart,
  Home,
  Wrench,
  Users,
  TrendingUp,
  Globe
} from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: Building,
      title: 'Professional Services',
      description: 'Lawyers, consultants, architects, and other professional firms.',
    },
    {
      icon: Store,
      title: 'Retail & Hospitality',
      description: 'Cafés, restaurants, shops, and retail businesses.',
    },
    {
      icon: Hammer,
      title: 'Construction & Trades',
      description: 'Builders, electricians, plumbers, and construction companies.',
    },
    {
      icon: Truck,
      title: 'Transport & Logistics',
      description: 'Freight, delivery services, and logistics companies.',
    },
    {
      icon: Briefcase,
      title: 'Financial Services',
      description: 'Brokers, advisers, and financial planning firms.',
    },
    {
      icon: GraduationCap,
      title: 'Education & Childcare',
      description: 'Schools, childcare centres, and educational services.',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Medical practices, allied health, and healthcare providers.',
    },
    {
      icon: Home,
      title: 'Property & Real Estate',
      description: 'Property developers, real estate agents, and investors.',
    },
    {
      icon: Wrench,
      title: 'Manufacturing',
      description: 'Manufacturers, wholesalers, and distributors.',
    },
    {
      icon: Users,
      title: 'Not-For-Profits',
      description: 'Charities, associations, and community organisations.',
    },
    {
      icon: TrendingUp,
      title: 'Startups & Tech',
      description: 'Technology companies and high-growth startups.',
    },
    {
      icon: Globe,
      title: 'Import & Export',
      description: 'International trade and import/export businesses.',
    },
  ];

  return (
    <Section id="industries" background="white" padding="lg">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-4">
            Industries We <span className="font-semibold relative text-accent">
              Serve
              <span className="absolute bottom-1 left-0 right-0 h-1 bg-accent/20 -z-10"></span>
            </span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Specialised expertise across diverse industry sectors throughout Sydney
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-accent/30 hover:shadow-lg-subtle transition-all cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center text-neutral-700 mb-4 group-hover:bg-accent-subtle group-hover:border-accent/30 transition-all">
                <industry.icon size={24} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 p-8 bg-gradient-subtle rounded-2xl border border-neutral-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
            Don't see your industry listed?
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            We work with businesses across all sectors. Our experienced team can tailor our services to meet your specific industry requirements.
          </p>
          <a href="/contact">
            <button className="bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full font-semibold shadow-md-subtle hover:shadow-lg-subtle hover:-translate-y-0.5 transition-all duration-300">
              Get in Touch
            </button>
          </a>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Industries;