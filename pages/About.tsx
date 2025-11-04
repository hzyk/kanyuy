
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { DIFFERENTIATORS, VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-[#6C2BD9] to-[#4B1FA2] text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            About KANYUY MARKETING
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl"
          >
            The driving force behind data-infused creative marketing.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Our Story</h2>
            <p className="mt-4 text-lg text-gray-600">
              KANYUY MARKETING was born from a simple yet powerful idea: marketing should be both an art and a science. Frustrated by the divide between purely creative agencies and rigid data analytics firms, our founders envisioned a new kind of agency—one that bridges the gap.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Today, we are a global team of strategists, creatives, and analysts who thrive on solving complex challenges across a multitude of industries. We believe that the best results come from deeply understanding each client's unique world and applying tailored, data-driven creativity to help them conquer it.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://picsum.photos/seed/teamwork/800/600" alt="Team collaborating" className="rounded-lg shadow-2xl" loading="lazy" />
          </motion.div>
        </div>
      </AnimatedSection>
      
      {/* Mission & Vision */}
      <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
              <AnimatedSection>
                  <div className="p-8 bg-white rounded-lg shadow-lg h-full">
                      <h3 className="text-2xl font-bold text-[#6C2BD9]">Our Mission</h3>
                      <p className="mt-4 text-lg text-gray-600">To empower businesses of all sizes and niches with intelligent, creative, and results-oriented marketing solutions that drive sustainable growth and build lasting brand equity.</p>
                  </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                  <div className="p-8 bg-white rounded-lg shadow-lg h-full">
                      <h3 className="text-2xl font-bold text-[#4B1FA2]">Our Vision</h3>
                      <p className="mt-4 text-lg text-gray-600">To be the world's leading multi-niche marketing agency, renowned for our ability to turn industry-specific challenges into growth opportunities through innovation and strategic excellence.</p>
                  </div>
              </AnimatedSection>
          </div>
      </div>

      {/* What Makes Us Different */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">What Makes Us Different</h2>
            <p className="mt-4 text-lg text-gray-600">Our approach is designed for a new era of marketing.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DIFFERENTIATORS.map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-6 text-center bg-white rounded-xl border border-gray-200 hover:bg-[#6C2BD9] hover:text-white transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-100 group-hover:bg-white rounded-full transition-colors duration-300">
                  <item.icon className="text-[#6C2BD9] group-hover:text-[#4B1FA2]" size={32} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#1A1A1A] group-hover:text-white">{item.title}</h3>
                <p className="mt-2 text-gray-600 group-hover:text-gray-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600">The principles that guide every decision we make.</p>
            <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
                {VALUES.map((value, index) => (
                    <motion.div
                        key={value}
                        className="px-8 py-4 bg-white rounded-full shadow-md text-xl font-semibold text-[#4B1FA2]"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15, type: 'spring', stiffness: 120 }}
                    >
                        {value}
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default About;
