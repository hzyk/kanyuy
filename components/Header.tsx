
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-extrabold text-[#1A1A1A]">
              KANYUY <span className="text-[#6C2BD9]">MARKETING</span>
            </h1>
          </NavLink>
          <nav className="hidden md:flex md:space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.href.replace('#', '')}
                className={({ isActive }) =>
                  `relative text-base font-medium text-[#1A1A1A] hover:text-[#6C2BD9] group ${isActive ? 'text-[#6C2BD9]' : ''}`
                }
              >
                {link.label}
                <span className={`absolute bottom-[-4px] left-0 w-full h-0.5 bg-[#6C2BD9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#1A1A1A]">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-white shadow-lg absolute w-full"
          >
            <nav className="flex flex-col items-center space-y-4 py-4">
              {NAV_LINKS.map((link) => (
                <motion.div variants={menuItemVariants} key={link.label}>
                  <NavLink
                    to={link.href.replace('#', '')}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `text-lg font-medium ${isActive ? 'text-[#6C2BD9]' : 'text-[#1A1A1A]'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
