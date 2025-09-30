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

    return (<Section background="white" padding="lg">
        <Container>
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-light text-neutral-900 mb-4">
                    Our <span className="font-semibold text-accent">Values</span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                    The principles that guide everything we do
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                    <motion.div
                        key={value.title}
                        className="flex gap-6 p-6 bg-white rounded-xl border border-neutral-200 hover:border-accent/30 hover:shadow-lg-subtle transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="w-14 h-14 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center text-neutral-700 flex-shrink-0">
                            <value.icon size={28} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                {value.title}
                            </h3>
                            <p className="text-neutral-600 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Container>
    </Section>
    );

};

export default Values;