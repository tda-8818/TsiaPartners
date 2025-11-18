import { Section, Container } from '@/components/ui';
import { Shield, HeartHandshake, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

{/* Our Values */ }
const Values: React.FC = () => {
    const values = [
        {
            icon: Shield,
            title: 'Trust & Integrity',
            description: 'We operate with the highest ethical standards, ensuring your financial affairs are handled with complete transparency and professionalism.',
        },
        {
            icon: HeartHandshake,
            title: 'Client Partnership',
            description: 'We see ourselves as your long-term business partners, invested in your success and growth every step of the way.',
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Over 50 years of experience delivering exceptional accounting and advisory services to Sydney businesses.',
        },
        {
            icon: TrendingUp,
            title: 'Proactive Solutions',
            description: 'We don\'t just respond to problems – we anticipate opportunities and provide strategic guidance for your future.',
        },
    ];

    return (<Section background="white" padding="md" className="py-20 lg:py-32">
  <Container>
    {/* Header */}
    <motion.div className="text-center max-w-4xl mx-auto mb-16">
      <h2 className="text-5xl lg:text-6xl font-light text-neutral-900 mb-6">
        Our <span className="font-semibold text-accent-500 underline-accent">Values</span>
      </h2>
      <p className="text-xl lg:text-2xl text-neutral-600">
        The principles that guide everything we do
      </p>
    </motion.div>

    {/* One Beautiful Row */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {values.map((value, i) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group text-center"
        >
          <div className="inline-block p-6 rounded-full bg-gradient-to-br from-accent-500/10 to-accent-500/5 border border-accent-500/20 mb-6 group-hover:from-accent-500/20 transition-all">
            <value.icon size={36} className="text-accent-500" strokeWidth={1.8} />
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-3">
            {value.title}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed max-w-xs mx-auto">
            {value.description}
          </p>
        </motion.div>
      ))}
    </div>
  </Container>
</Section>
    );

};

export default Values;