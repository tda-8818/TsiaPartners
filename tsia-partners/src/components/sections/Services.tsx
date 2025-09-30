import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Container, Section } from '@/components/ui';
import { ChevronRight, Calculator, TrendingUp, Building2, FileText, Users, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Tax Services',
      description: 'Individual and business tax returns, tax planning, and compliance services to maximise your refunds and minimise your liabilities.',
      features: [
        'Individual Tax Returns',
        'Business Tax Returns',
        'Tax Planning & Strategy',
        'BAS & GST Services',
      ],
      link: '/services/tax',
    },
    {
      icon: TrendingUp,
      title: 'Business Advisory',
      description: 'Strategic planning, financial analysis, and business growth consulting to help you make informed decisions.',
      features: [
        'Strategic Planning',
        'Financial Analysis',
        'Cash Flow Management',
        'Business Valuations',
      ],
      link: '/services/advisory',
    },
    {
      icon: Building2,
      title: 'SMSF Services',
      description: 'Self-managed super fund setup, compliance, and ongoing administration to secure your retirement.',
      features: [
        'SMSF Establishment',
        'Annual Compliance',
        'Investment Strategy',
        'Pension Management',
      ],
      link: '/services/smsf',
    },
    {
      icon: FileText,
      title: 'Accounting Services',
      description: 'Comprehensive bookkeeping, financial statements, and reporting to keep your business running smoothly.',
      features: [
        'Bookkeeping',
        'Financial Statements',
        'Payroll Services',
        'Cloud Accounting',
      ],
      link: '/services/accounting',
    },
    {
      icon: Users,
      title: 'Trust Services',
      description: 'Fixed, unit, discretionary, and testamentary trust services for asset protection and estate planning.',
      features: [
        'Trust Establishment',
        'Trust Accounting',
        'Distribution Planning',
        'Compliance & Reporting',
      ],
      link: '/services/trusts',
    },
    {
      icon: Shield,
      title: 'Not-For-Profit',
      description: 'Specialised accounting services for charities and not-for-profit organisations with ACNC compliance.',
      features: [
        'ACNC Reporting',
        'Grant Management',
        'Audit Coordination',
        'Governance Support',
      ],
      link: '/services/nfp',
    },
  ];

  return (
    <Section id="services" background="white" padding="lg">
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
            Our <span className="font-semibold relative text-accent">
              Services
              <span className="absolute bottom-1 left-0 right-0 h-1 bg-accent/20 -z-10"></span>
            </span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Comprehensive accounting and tax solutions tailored to your unique needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                variant="default" 
                hover
                className="h-full group cursor-pointer border-neutral-200 hover:border-accent/30 transition-all"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-neutral-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                        <ChevronRight size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <a 
                    href={service.link}
                    className="text-neutral-700 hover:text-accent font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ChevronRight size={16} />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-neutral-600 mb-6">
            Can't find what you're looking for? We offer customised solutions for your unique needs.
          </p>
          <a href="/contact">
            <button className="bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full font-semibold shadow-md-subtle hover:shadow-lg-subtle hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2">
              Discuss Your Requirements
              <ChevronRight size={20} />
            </button>
          </a>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Services;