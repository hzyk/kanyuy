
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Swiper from 'swiper/bundle';
import { TEAM_MEMBERS } from '../constants';
import { Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C2BD9]/10 via-white to-[#4B1FA2]/10 -z-1"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-200/50 rounded-full filter blur-3xl opacity-50 animate-blob -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-200/50 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-200/50 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
            Meet the Minds Behind <span className="text-[#6C2BD9]">KANYUY MARKETING</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A diverse team of passionate experts dedicated to your success.
          </p>
        </motion.div>

        <div className="swiper-container relative">
          <div className="swiper-wrapper">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="swiper-slide p-2">
                <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden h-[450px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-md text-[#C0C0C0]">{member.position}</p>
                    <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-16">{member.bio}</p>
                  </div>
                  {/* Hover content */}
                  <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center p-6 text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-lg italic">"{member.quote}"</p>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-6 text-[#3B82F6] hover:text-blue-300 transition-colors">
                      <Linkedin size={32} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Swiper Navigation */}
          <div className="swiper-button-prev text-[#6C2BD9] after:text-2xl"></div>
          <div className="swiper-button-next text-[#6C2BD9] after:text-2xl"></div>
        </div>
        
        {/* Swiper Pagination */}
        <div className="swiper-pagination mt-8 relative"></div>

      </div>
    </section>
  );
};

export default Team;
