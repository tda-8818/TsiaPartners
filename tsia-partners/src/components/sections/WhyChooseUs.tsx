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

    const stats = [
        { value: 50, label: 'Years in Business', suffix: '+' },
        { value: 500, label: 'Happy Clients', suffix: '+' },
        { value: 100, label: 'Compliance Rate', suffix: '%' },
    ];

    const staticStats = [
        { text: '24/7', label: 'Support Available' },
    ];

    return (
        <Section background="grey" padding="lg">
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
                        Why Choose <span className="font-semibold relative text-accent">
                            TSIA Partners
                            <span className="absolute bottom-1 left-0 right-0 h-1 bg-accent/20 -z-10"></span>
                        </span>
                    </h2>
                    <p className="text-xl text-neutral-600 leading-relaxed">
                        Experience the difference of working with Sydney's most trusted accounting firm
                    </p>
                </motion.div>

                {/* Stats Bar - Now Animated */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 p-8 bg-white rounded-2xl shadow-lg-subtle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            endValue={stat.value}
                            label={stat.label}
                            suffix={stat.suffix}
                        />
                    ))}
                    {staticStats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">
                                {stat.text}
                            </div>
                            <div className="text-sm text-neutral-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            className="flex gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center text-neutral-700 flex-shrink-0 shadow-subtle">
                                <reason.icon size={24} strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                    {reason.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges */}
                <motion.div
                    className="mt-16 p-8 bg-white rounded-2xl border border-neutral-200 shadow-subtle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                            Accredited & Recognised
                        </h3>
                        <p className="text-neutral-600">
                            Members of leading professional accounting bodies
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                        {/* Images for professional badges */}
                        <img
                            src="/images/badges/ca-anz.svg"
                            alt="Chartered Accountants ANZ"
                            className="flex-1 min-w-[150px] max-w-[200px] h-25 object-contain"
                        />
                        <img
                            src="/images/badges/tax-pract-board.png"
                            alt="Tax Practitioners Board"
                            className="flex-1 min-w-[150px] max-w-[200px] h-30 object-contain"
                        />
                        <img
                            src="/images/badges/cpa.png"
                            alt="CPA Australia"
                            className="flex-1 min-w-[150px] max-w-[200px] h-20 object-contain"
                        />
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
};

export default WhyChooseUs;