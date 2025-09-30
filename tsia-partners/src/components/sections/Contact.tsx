import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/features/ContactForm';

const Contact: React.FC = () => {
    const contactDetails = [
        {
            icon: Phone,
            label: 'Phone',
            value: '02 9267 6533',
            link: 'tel:0292676533',
            description: 'Mon-Fri, 9am-5pm',
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'info@tsiapartners.com.au',
            link: 'mailto:info@tsiapartners.com.au',
            description: 'We respond within 24 hours',
        },
        {
            icon: MapPin,
            label: 'Visit Us',
            value: 'Suite 201, Level 2, 309 Pitt St',
            secondLine: 'Sydney, NSW 2000',
            link: 'https://maps.google.com/?q=309+Pitt+St+Sydney',
            description: 'CBD location, easy access',
        },
        {
            icon: Clock,
            label: 'Business Hours',
            value: 'Monday - Friday: 9:00am - 5:00pm',
            secondLine: 'Saturday - Sunday: Closed',
            description: 'After-hours by appointment',
        },
    ];

    return (
        <Section id="contact" background="grey" padding="lg">
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
                        Get in <span className="font-semibold text-accent relative">
                            Touch
                            <span className="absolute bottom-1 left-0 right-0 h-1 bg-accent/20 -z-10"></span>
                        </span>
                    </h2>
                    <p className="text-xl text-neutral-600 leading-relaxed">
                        Ready to take control of your financial future? Contact us today for a free consultation
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                                Let's Start a Conversation
                            </h3>
                            <p className="text-neutral-600">
                                Whether you have a question about our services, need advice, or want to discuss your financial goals, we're here to help.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactDetails.map((detail, index) => (
                                <motion.div
                                    key={detail.label}
                                    className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-accent/30 hover:shadow-md-subtle transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="flex gap-4">
                                        {/* Icon */}
                                        <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center text-neutral-700 flex-shrink-0 group-hover:bg-accent-subtle group-hover:border-accent/30 transition-all">
                                            <detail.icon size={24} strokeWidth={1.5} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="text-sm font-medium text-neutral-500 mb-1">
                                                {detail.label}
                                            </div>
                                            {detail.link ? (
                                                <a
                                                    href={detail.link}
                                                    target={detail.link.startsWith('http') ? '_blank' : undefined}
                                                    rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                    className="text-neutral-900 hover:text-accent font-semibold transition-colours block"
                                                >
                                                    {detail.value}
                                                    {detail.secondLine && (
                                                        <>
                                                            <br />
                                                            {detail.secondLine}
                                                        </>
                                                    )}
                                                </a>
                                            ) : (
                                                <div className="text-neutral-900 font-semibold">
                                                    {detail.value}
                                                    {detail.secondLine && (
                                                        <>
                                                            <br />
                                                            <span className="font-normal">{detail.secondLine}</span>
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                            <div className="text-sm text-neutral-500 mt-1">
                                                {detail.description}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Google Map */}
                        <motion.div
                            className="h-80 bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-md-subtle"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.617013841476!2d151.20521047570892!3d-33.87375977322468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3dd6bc6c15%3A0x1fdb27a1bcfdf431!2s309%20Pitt%20St%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1759216630944!5m2!1sen!2sau"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="TSIA Partners Location"
                            ></iframe>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};

export default Contact;