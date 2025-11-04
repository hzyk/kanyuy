
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-[#6C2BD9] to-[#4B1FA2] text-white text-center">
         <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Our Marketing Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl"
          >
            Tailored strategies designed to deliver exceptional results for your specific industry.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="h-full bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="p-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-[#6C2BD9] to-[#4B1FA2] text-white">
                          <service.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-[#1A1A1A]">{service.title}</h3>
                      </div>
                    </div>
                    <p className="mt-5 text-base text-gray-600">{service.description}</p>
                    <div className="mt-6">
                      <Link to="/contact" className="inline-block px-6 py-2 bg-[#3B82F6] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                        {service.cta || 'Get Started'}
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Don't See Your Industry?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Our expertise is vast and adaptable. If you don't see your specific niche listed, don't worry. We thrive on new challenges and are confident we can build a winning strategy for you.
            </p>
            <div className="mt-8">
                <Link 
                    to="/contact" 
                    className="inline-block px-10 py-4 bg-[#6C2BD9] text-white font-bold rounded-lg shadow-lg hover:bg-[#4B1FA2] transition-all duration-300 transform hover:scale-105"
                >
                    Discuss Your Project
                </Link>
            </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Services;
