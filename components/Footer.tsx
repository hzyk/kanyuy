import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1">
            <h3 className="text-xl font-extrabold">
              KANYUY <span className="text-[#6C2BD9]">MARKETING</span>
            </h3>
            <p className="mt-4 text-gray-400">Marketing That Works. Helping brands grow through data-driven creative marketing.</p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-gray-200">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink to={link.href.replace('#','')} className="text-gray-400 hover:text-white transition-colors duration-300">{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-gray-200">Contact Info</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="text-[#6C2BD9] mr-3" />
                <a href="mailto:Kanyuymarketing.org@gmail.com" className="text-gray-400 hover:text-white">Kanyuymarketing.org@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#6C2BD9] mr-3" />
                <a href="tel:+674772569" className="text-gray-400 hover:text-white">+674 77 25 69</a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-[#6C2BD9] mr-3 mt-1" />
                <span className="text-gray-400">Buea, Southwest Region, Cameroon</span>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-gray-200">Follow Us</h4>
            <div className="flex mt-4 space-x-4">
              {SOCIAL_LINKS.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#6C2BD9] transition-colors duration-300">
                  <link.icon size={24} />
                </a>
              ))}
              <a href="https://wa.me/674772569" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kanyuy Marketing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;