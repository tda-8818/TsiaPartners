import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Section } from '@/components/ui';
import { Award, Clock, Shield, Users, TrendingUp, HeartHandshake } from 'lucide-react';

interface StatItemProps {
    endValue: number;
    label: string;
    suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ endValue, label, suffix = '' }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    React.useEffect(() => {
        if (inView) {
            const controls = animate(count, endValue, { duration: 1, ease: "easeOut" });
            return controls.stop;
        }
    }, [inView, count, endValue]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">
                <motion.span>{rounded}</motion.span>{suffix}
            </div>
            <div className="text-sm text-neutral-600 font-medium">
                {label}
            </div>
        </div>
    );
};

const WhyChooseUs: React.FC = () => {
    const reasons = [
        {
            icon: Award,
            title: '50+ Years of Expertise',
            description: 'Trusted by Sydney businesses and individuals for over five decades of exceptional service.',
        },
        {
            icon: Users,
            title: 'Personalised Service',
            description: 'Dedicated account managers who take the time to understand your unique financial situation.',
        },
        {
            icon: Shield,
            title: 'Licensed Professionals',
            description: 'All our accountants are qualified Chartered Accountants and registered tax agents.',
        },
        {
            icon: Clock,
            title: 'Timely & Reliable',
            description: 'We meet all deadlines and keep you informed every step of the way.',
        },
        {
            icon: TrendingUp,
            title: 'Proactive Advice',
            description: 'Forward-thinking strategies to help you grow your wealth and minimise tax.',
        },
        {
            icon: HeartHandshake,
            title: 'Long-Term Partnership',
            description: 'We build lasting relationships and become an integral part of your success.',
        },
    ];

    return (
        <Section background="grey" padding="md" className="py-20 lg:py-32">
            <Container>
                {/* Header */}
                <motion.div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-5xl lg:text-6xl font-light text-neutral-900 mb-6">
                        Why Choose{' '}
                        <span className="font-semibold text-accent-500 relative">
                            TSIA Partners
                            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-accent-500/20 -z-10 rounded-full"></span>
                        </span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed">
                        Experience the difference of working with Sydney’s most trusted accounting firm
                    </p>
                </motion.div>

                {/* Animated Stats — now with subtle orange accent */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 p-10 bg-white rounded-3xl shadow-lg-subtle border border-accent-500/10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <StatItem endValue={50} label="Years in Business" suffix="+" />
                    <StatItem endValue={500} label="Happy Clients" suffix="+" />
                    <StatItem endValue={100} label="Compliance Rate" suffix="%" />
                    <div className="text-center">
                        <div className="text-5xl font-bold text-accent-500 mb-2">24/7</div>
                        <div className="text-sm text-neutral-600 font-medium">Support Available</div>
                    </div>
                </motion.div>

                {/* Reasons Grid — premium cards with orange icon glow */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-white rounded-3xl p-8 border border-neutral-200/70 shadow-md-subtle hover:shadow-xl-subtle hover:border-accent-500/30 transition-all duration-400 hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-500/10 to-accent-500/5 rounded-2xl border border-accent-500/20 flex items-center justify-center mb-6 group-hover:from-accent-500/20 transition-all">
                                    <reason.icon size={32} className="text-accent-500" strokeWidth={1.8} />
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{reason.title}</h3>
                                <p className="text-neutral-600 leading-relaxed">{reason.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges */}
                <motion.div className="mt-20 text-center">
                    <p className="text-neutral-600 mb-8">Accredited & Recognised</p>
                    <div className="flex flex-wrap justify-center items-center gap-12">
                        <img src="/images/badges/ca-anz.svg" alt="CA ANZ" className="h-16" />
                        <img src="/images/badges/tax-pract-board.png" alt="Tax Practitioners Board" className="h-20" />
                        <img src="/images/badges/cpa.png" alt="CPA Australia" className="h-14" />
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
};

export default WhyChooseUs;