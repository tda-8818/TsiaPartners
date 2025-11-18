'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import ContactForm from '@/components/features/ContactForm';

const Contact = () => {
    return (
        <div className="pt-20">

            {/* Hero */}
            <Section background="white" padding="md">
                <Container>
                    <motion.div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl lg:text-6xl font-light text-neutral-900 mb-6">
                            Get in <span className="font-semibold text-accent-500 underline-accent">Touch</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-neutral-600">
                            Book instantly or send us a message — whatever works for you.
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* Main Content + Map */}
            <Section background="grey" padding="md" className="py-20 lg:py-32">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

                        {/* Left Column: Booking + Contact Info */}
                        <div className="space-y-8">

                            {/* Booking Options */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl p-10 shadow-md-subtle border border-neutral-200/70"
                            >
                                <h3 className="text-2xl font-semibold text-neutral-900 mb-8 flex items-center gap-3">
                                    <Calendar className="text-accent-500" size={28} />
                                    Book a Consultation
                                </h3>

                                <div className="space-y-5">

                                    {/* Free In-Person */}
                                    <a href="https://calendly.com/etjunk333/free-30-min-in-person-sydney-cbd" target="_blank" rel="noopener noreferrer"
                                        className="block p-8 bg-white rounded-3xl border-2 border-accent-500/20 hover:border-accent-500 hover:shadow-xl-subtle transition-all group text-left">
                                        <h4 className="text-xl font-semibold text-neutral-900 mb-2">Free 30-Minute In-Person</h4>
                                        <p className="text-neutral-600 mb-4">Meet us at our Sydney CBD office</p>
                                        <span className="text-accent-500 font-semibold group-hover:text-accent-600">Book Now</span>
                                    </a>

                                    {/* Most Popular — Free Call */}
                                    <a href="https://calendly.com/etjunk333/30min" target="_blank" rel="noopener noreferrer"
                                        className="block p-8 bg-accent-500/8 rounded-3xl border-2 border-accent-500/40 hover:border-accent-500 hover:bg-accent-500/12 hover:shadow-xl-subtle transition-all group text-left">
                                        <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                                            Free 30-Minute Call
                                            <span className="ml-3 text-xs bg-accent-500/30 px-3 py-1 rounded-full">Most Popular</span>
                                        </h4>
                                        <p className="text-neutral-700 mb-4">Phone or video — no obligation</p>
                                        <span className="text-accent-600 font-semibold">Book Now</span>
                                    </a>

                                    {/* Paid 1-Hour Session */}
                                    <a href="https://calendly.com/etjunk333/paid-1-hr-tax-planning-session-250-350" target="_blank" rel="noopener noreferrer"
                                        className="block p-8 bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-3xl hover:from-accent-600 hover:to-accent-700 hover:shadow-2xl transition-all shadow-lg group text-left">
                                        <h4 className="text-xl font-semibold mb-2">1-Hour Tax Planning Session</h4>
                                        <p className="opacity-90 mb-4">$250–$350 (deductible from future fees)</p>
                                        <span className="font-semibold">Book Strategy Session</span>
                                    </a>

                                </div>
                            </motion.div>

                            {/* Direct Contact */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-3xl p-10 shadow-md-subtle border border-neutral-200/70"
                            >
                                <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Or Reach Us Directly</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-accent-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                                            <MapPin size={28} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-neutral-900">Office</p>
                                            <p className="text-neutral-600">Suite 201, Level 2<br />309 Pitt Street<br />Sydney NSW 2000</p>
                                        </div>
                                    </div>
                                    <a href="tel:0292676533" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-accent-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                            <Phone size={28} />
                                        </div>
                                        <span className="text-lg font-medium text-neutral-700 group-hover:text-accent-500">02 9267 6533</span>
                                    </a>
                                    <a href="mailto:general@tsiapartners.com.au" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-accent-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                            <Mail size={28} />
                                        </div>
                                        <span className="text-lg font-medium text-neutral-700 group-hover:text-accent-500">general@tsiapartners.com.au</span>
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Form + Map */}
                        <div className="space-y-8">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <ContactForm />
                            </motion.div>

                            {/* Google Maps */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl shadow-md-subtle border border-neutral-200/70 overflow-hidden"
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.867947289367!2d151.2074363152095!3d-33.8674879806579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae1f2d3b8e4f%3A0x9e8f8e8f8e8f8e8f!2s309%20Pitt%20St%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1700000000000"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="TSIA Partners Location"
                                />
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Contact;