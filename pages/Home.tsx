
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
import { INDUSTRIES, CORE_PROMISES } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

const AnimatedCounter = ({ to }: { to: number }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: 1,
                transition: { duration: 0.5 }
            });
        }
    }, [isInView, controls]);

    return (
        <motion.span ref={ref} initial={{ opacity: 0 }} animate={controls}>
            {to.toLocaleString()}+
        </motion.span>
    );
};``

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-blue-100 opacity-50 -z-1"></div>
         <div className="absolute top-0 left-0 w-64 h-64 bg-[#6C2BD9]/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#1A1A1A] tracking-tight">
              Building Growth Across
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C2BD9] to-[#4B1FA2]">Every Industry.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
              Helping brands grow through data-driven creative marketing.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/services" className="px-8 py-3 bg-[#6C2BD9] text-white font-semibold rounded-lg shadow-md hover:bg-[#4B1FA2] transition-all duration-300 transform hover:scale-105">
                Explore Services
              </Link>
              <Link to="/contact" className="px-8 py-3 bg-transparent border-2 border-[#6C2BD9] text-[#6C2BD9] font-semibold rounded-lg hover:bg-[#6C2BD9] hover:text-white transition-all duration-300 transform hover:scale-105">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Overview */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Marketing Solutions for Your Niche</h2>
            <p className="mt-4 text-lg text-gray-600">We provide tailored strategies that speak the language of your industry.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {INDUSTRIES.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gradient-to-br from-[#6C2BD9] to-[#4B1FA2] rounded-full">
                  <industry.icon className="text-white" size={32} />
                </div>
                <h3 className="mt-4 font-semibold text-[#1A1A1A]">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Us Preview */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/seed/office/800/600" alt="KANYUY MARKETING office" className="rounded-lg shadow-2xl" loading="lazy" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A]">A Global Multi-Niche Marketing Agency</h2>
            <p className="mt-4 text-lg text-gray-600">KANYUY MARKETING was founded on the principle that every industry deserves specialized, intelligent marketing. We are a team of passionate experts dedicated to crafting bespoke strategies that deliver not just clicks, but real, sustainable growth for our clients worldwide.</p>
            <Link to="/about" className="mt-6 inline-flex items-center text-[#6C2BD9] font-semibold hover:text-[#4B1FA2] transition-colors duration-300">
              Learn More About Us <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Global Reach */}
      <div className="py-20 bg-gradient-to-r from-[#6C2BD9] to-[#4B1FA2] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <AnimatedSection>
              <h3 className="text-5xl font-extrabold"><AnimatedCounter to={50} /></h3>
              <p className="mt-2 text-lg font-medium opacity-80">Countries Served</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h3 className="text-5xl font-extrabold"><AnimatedCounter to={200} /></h3>
              <p className="mt-2 text-lg font-medium opacity-80">Satisfied Clients</p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <h3 className="text-5xl font-extrabold"><AnimatedCounter to={1500} /></h3>
              <p className="mt-2 text-lg font-medium opacity-80">Campaigns Launched</p>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      {/* Core Promises */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Our Core Promise</h2>
            <p className="mt-4 text-lg text-gray-600">The pillars of our success, and yours.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {CORE_PROMISES.map((promise, index) => (
              <motion.div 
                key={promise.title} 
                className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl hover:border-[#6C2BD9] transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <h3 className="text-xl font-bold text-[#1A1A1A]">{promise.title}</h3>
                <p className="mt-4 text-gray-600">{promise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
