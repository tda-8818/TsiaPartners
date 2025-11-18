import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';

const About: React.FC = () => {
  const team = [
    {
      name: 'Jia Hao Tsia',
      role: 'Principal',
      qualifications: 'BMathFin, BSci(Hons), MPA, CA',
      registrations: 'Registered Tax Agent & ASIC Agent',
      bio: [
        "Jia is Principal of TSIA Partners. He has experience in both professional practice and banking services across small, medium-sized, corporate and institutional clients.",
        "His career began in banking where he held positions in credit committees, transfer pricing committees, and headed credit and economic reporting for the Australian Banking Division in the Asia & Oceania region.",
        "Jia moved to tax and accounting services to help grow his clients from a more hands-on perspective as a true business partner and consultant."
      ],
    },
    {
      name: 'Tom Tsia',
      role: 'Principal',
      qualifications: 'BComm, FCA, FCPA',
      registrations: 'Registered Tax Agent & Registered Auditor',
      bio: [
        "Tom is Principal of TSIA Partners and founder of L K Tsia Chartered Accountants. He has been a practitioner since 1975 — over 50 years of experience.",
        "As a Fellow Chartered Accountant, Fellow CPA, Registered Tax Agent and Registered Auditor, he provides tax, audit and accounting services to a wide range of clients including aviation, freight, manufacturing, hospitality, unions and associations."
      ],
    },
  ];

  const partners = [
    'Audit Services',
    'Depreciation Schedules',
    'Insolvency & Forensic Accounting',
    'Financial Planning',
    'Legal Services',
    'Mortgage Broking',
    'Research & Development Tax Incentives',
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero – Clean & Elegant */}
      <Section background="white" padding="md">
        <Container>
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl lg:text-7xl font-light text-neutral-900 mb-6">
              About <span className="font-semibold text-accent-500 underline-accent">TSIA Partners</span>
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Chartered Accountants & Tax Agents with over 50 years of combined experience serving Sydney businesses and individuals as true partners in growth.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Meet the Team – Premium Cards */}
      <Section background="grey" padding="md">
        <Container>
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-4">
              Meet <span className="font-semibold text-accent-500">Our Team</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-10 shadow-md-subtle hover:shadow-xl-subtle border border-neutral-200/70 hover:border-accent-500/30 transition-all duration-400">
                  <h3 className="text-2xl font-semibold text-neutral-900 text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent-500 font-medium text-center mb-6">
                    {member.role}
                  </p>
                  <p className="text-sm text-neutral-600 text-center mb-2">
                    {member.qualifications}
                  </p>
                  <p className="text-sm text-neutral-500 text-center mb-8">
                    {member.registrations}
                  </p>

                  <div className="space-y-4 text-neutral-600 leading-relaxed text-center">
                    {member.bio.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Partners – Clean List with Orange Dots */}
      <Section background="white" padding="md">
        <Container>
          <motion.div className="text-center mt-20 mb-16 lg:mt-32">
            <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-4">
              Our <span className="font-semibold text-accent-500">Partners</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We collaborate with trusted specialists so you have one point of contact for everything
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {partners.map((partner, i) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 p-5 bg-neutral-50/50 rounded-2xl hover:bg-accent-500/5 transition-colors duration-300"
                >
                  <div className="w-3 h-3 bg-accent-500 rounded-full flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{partner}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Final CTA – Full bleed, calm */}
      <Section background="grey" padding="lg" className="mt-20 lg:mt-32">
        <Container>
          <motion.div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-6">
              Ready to work with us?
            </h2>
            <p className="text-xl text-neutral-600 mb-10">
              Experience the TSIA Partners difference. Book your free consultation today.
            </p>
            <a href="/contact">
              <button className="bg-white text-accent-500 border-2 border-accent-500 hover:bg-accent-500 hover:text-white px-12 py-6 rounded-full font-semibold text-lg shadow-md-subtle hover:shadow-xl-subtle hover:-translate-y-1 transition-all duration-300">
                Book Free Consultation
              </button>
            </a>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};

export default About;