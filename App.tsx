
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Skincare from './pages/skincare';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-white text-[#1A1A1A] antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skincare" element={<Skincare/>}/>
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTopButton />
      </div>
    </HashRouter>
  );
};

export default App;
