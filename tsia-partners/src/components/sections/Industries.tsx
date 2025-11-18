import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { 
  Building, Store, Hammer, Truck, Briefcase, GraduationCap,
  Heart, Home, Wrench, Users, TrendingUp, Globe 
} from 'lucide-react';

const Industries = () => {
  const industries = [
    { icon: Building,      title: 'Professional Services',     description: 'Lawyers, consultants, architects, engineers.' },
    { icon: Store,         title: 'Retail & Hospitality',      description: 'Cafés, restaurants, shops, hotels.' },
    { icon: Hammer,        title: 'Construction & Trades',     description: 'Builders, electricians, plumbers, trades.' },
    { icon: Truck,         title: 'Transport & Logistics',     description: 'Freight, delivery, warehousing.' },
    { icon: Briefcase,     title: 'Financial Services',        description: 'Brokers, advisers, lending firms.' },
    { icon: GraduationCap, title: 'Education & Childcare',     description: 'Schools, tutoring, childcare centres.' },
    { icon: Heart,         title: 'Healthcare',                description: 'Medical practices, allied health, pharmacies.' },
    { icon: Home,          title: 'Property & Real Estate',    description: 'Developers, agents, investors, strata.' },
    { icon: Wrench,        title: 'Manufacturing',             description: 'Factories, wholesalers, distributors.' },
    { icon: Users,         title: 'Not-for-Profits',           description: 'Charities, associations, community groups.' },
    { icon: TrendingUp,    title: 'Startups & Tech',           description: 'Software, SaaS, high-growth ventures.' },
    { icon: Globe,         title: 'Import & Export',           description: 'International trade and cross-border business.' },
  ];

  return (
    <Section id="industries" background="white" padding="md">
      <Container>
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl lg:text-6xl font-light text-neutral-900 mb-4">
            Industries <span className="font-semibold text-accent-500 underline-accent">We Serve</span>
          </h1>
          <p className="text-xl text-neutral-600">
            Deep sector experience across Sydney and beyond
          </p>
        </motion.div>

        {/* Unified Premium Cards — exactly like Clients page */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-neutral-50 to-neutral-100/50 p-8 rounded-3xl border border-neutral-200/70 shadow-md-subtle hover:shadow-xl-subtle hover:border-accent-500/40 transition-all duration-400 hover:-translate-y-3">
                {/* Icon — logo orange */}
                <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon size={32} strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {industry.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA with perfect spacing */}
        <motion.div 
          className="text-center mt-20 mb-32 lg:mb-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
            Don't see your industry?
          </h3>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto text-lg">
            We work across all sectors and love a challenge.
          </p>
          <a href="/contact">
            <button className="bg-white text-accent-500 border-2 border-accent-500 hover:bg-accent-500 hover:text-white px-10 py-5 rounded-full font-semibold text-lg shadow-md-subtle hover:shadow-xl-subtle hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3">
              Get in Touch
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </a>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Industries;