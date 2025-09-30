import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section, Card } from '@/components/ui';
import { Award, Users, TrendingUp, Shield, Briefcase, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Jia Hao Tsia',
      role: 'Principal',
      qualifications: 'BMathFin, BSci(Hons), MPA, CA',
      registrations: 'Registered Tax Agent and ASIC Agent',
      bio: [
        "Jia is Principal of Tsia Partners. He has experience in both professional practice and banking services across small, medium-sized, corporate and institutional clients.",
        "Jia's career began in banking where he's held a number of positions in credit committees, transfer pricing committees, and heading the credit and economic reporting for the Australian Banking Division in the Asia & Oceania region.",
        "Jia moved across to tax and accounting services in order to help grow his clients from a more hands-on perspective as a business partner and consultant."
      ],
    },
    {
      name: 'Tom Tsia',
      role: 'Principal',
      qualifications: 'BComm, FCA, FCPA',
      registrations: 'Registered Tax Agent, Registered Auditor',
      bio: [
        "Tom is Principal of Tsia Partners, and is the founder of L K Tsia Chartered Accountants. He has been a practitioner since 1975 with over 45 years of experience.",
        "As a FCA, FCPA, Registered Tax Agent and Registered Auditor, he provides tax, audit and accounting services to a large range of clients which has included Aviation companies, Freight businesses, Manufacturers, Restaurants, Unions and Associations."
      ],
    },
  ];

  

  const partners = [
    'Audit Services',
    'Depreciation Services',
    'Insolvency & Forensic Accounting Services',
    'Financial Planning',
    'Legal Services',
    'Mortgage Services',
    'Research and Development',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-light text-neutral-900 mb-6 leading-tight">
              About <span className="font-semibold text-accent relative">
                TSIA Partners
                <span className="absolute bottom-1 left-0 right-0 h-1 bg-accent/20 -z-10"></span>
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed mb-8">
              Chartered Accountants and Tax Agents
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Tsia Partners brings together over 50 years of experience working with businesses and individuals as advisers, consultants and business partners. We specialise in tax, accounting, and business advisory.
            </p>
          </motion.div>
        </Container>
      </Section>

      

      {/* Meet the Team */}
      <Section background="grey" padding="lg">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-light text-neutral-900 mb-4">
              Meet the <span className="font-semibold text-accent">Team</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your financial success
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card variant="elevated" padding="lg" className="h-full">
                  {/* Photo Placeholder */}
                  <div className="w-32 h-32 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-lg-subtle">
                    <Users size={48} className="text-neutral-400" />
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-accent font-semibold mb-3">
                      {member.role}
                    </div>
                    <div className="text-sm text-neutral-600 mb-2">
                      {member.qualifications}
                    </div>
                    <div className="text-sm text-neutral-500">
                      {member.registrations}
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="space-y-4">
                    {member.bio.map((paragraph, idx) => (
                      <p key={idx} className="text-neutral-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Partners */}
      <Section background="white" padding="lg">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-light text-neutral-900 mb-4">
              Our <span className="font-semibold text-accent">Partners</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We partner with a number of professionals ensuring you can have one managed point of contact
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-neutral-200 hover:border-accent/30 hover:shadow-md-subtle transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-neutral-700 font-medium">{partner}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="grey" padding="lg">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-4">
              Ready to work with us?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Experience the TSIA Partners difference. Book your free consultation today.
            </p>
            <a href="/contact">
              <button className="bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full font-semibold shadow-md-subtle hover:shadow-lg-subtle hover:-translate-y-0.5 transition-all duration-300">
                Get in Touch
              </button>
            </a>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};

export default About;