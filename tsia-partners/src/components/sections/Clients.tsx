import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { Calculator, TrendingUp, Building2, FileText, Users, Shield } from 'lucide-react';

const Clients = () => {
  const clientTypes = [
    {
      icon: Calculator,
      title: 'Tax Services',
      description: 'Expert individual and business tax returns, planning, and compliance to maximise refunds and minimise liabilities.',
      features: ['Individual & Business Returns', 'Tax Planning', 'BAS & GST', 'ATO Representation'],
    },
    {
      icon: TrendingUp,
      title: 'Business Advisory',
      description: 'Strategic growth consulting, financial forecasting, and performance analysis to scale your business.',
      features: ['Strategic Planning', 'Cash Flow Management', 'KPIs & Reporting', 'Business Valuations'],
    },
    {
      icon: Building2,
      title: 'SMSF Services',
      description: 'Complete self-managed super fund setup, compliance, audit, and investment strategy.',
      features: ['SMSF Establishment', 'Annual Compliance & Audit', 'Investment Strategy', 'Pension Management'],
    },
    {
      icon: FileText,
      title: 'Accounting & Bookkeeping',
      description: 'Cloud-based bookkeeping, financial statements, payroll, and management reporting.',
      features: ['Xero / MYOB / QBO', 'Payroll & Super', 'Monthly Reporting', 'Financial Statements'],
    },
    {
      icon: Users,
      title: 'Trusts & Estate Planning',
      description: 'Family trusts, discretionary trusts, asset protection, and succession planning.',
      features: ['Trust Setup & Deeds', 'Distribution Minutes', 'Asset Protection', 'Estate Planning'],
    },
    {
      icon: Shield,
      title: 'Not-for-Profit & Charities',
      description: 'ACNC compliance, grant reporting, audit coordination, and governance support.',
      features: ['ACNC Reporting', 'Grant Applications', 'Audit Management', 'Board Reporting'],
    },
  ];

  return (
    <Section id="clients" background="white" padding="md">
      <Container>
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl lg:text-6xl font-light text-neutral-900 mb-4">
            Who <span className="font-semibold text-accent-500 underline-accent">We Serve</span>
          </h1>
          <p className="text-xl text-neutral-600">
            Tailored accounting and advisory solutions for every client type
          </p>
        </motion.div>

        {/* Unified Elegant Cards — NO RAINBOW */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTypes.map((client, i) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-neutral-50 to-neutral-100/50 p-8 rounded-3xl border border-neutral-200/70 shadow-md-subtle hover:shadow-xl-subtle hover:border-accent-500/40 transition-all duration-400 hover:-translate-y-3">
                {/* Icon — logo orange */}
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500/10 to-accent-500/5 rounded-2xl border border-accent-500/20 flex items-center justify-center mb-6 group-hover:from-accent-500/20 group-hover:border-accent-500/40 transition-all duration-300">
                <client.icon size={32} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                  {client.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {client.description}
                </p>

                {/* Features — with orange dots */}
                <ul className="space-y-2.5">
                  {client.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="text-center mt-20 mb-32 lg:mb-40" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto text-lg">
            Ready to get started or have a unique requirement?
          </p>
          <a href="/contact">
            <button className="bg-white text-accent-500 border-2 border-accent-500 hover:bg-accent-500 hover:text-white px-10 py-5 rounded-full font-semibold text-lg shadow-md-subtle hover:shadow-xl-subtle hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3">
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </a>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Clients;