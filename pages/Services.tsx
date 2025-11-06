import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BarChart, Construction } from "lucide-react";

// Modal component
const Modal = ({ isOpen, onClose, title, children, image }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl shadow-xl p-8 relative"
        >
          {/* Header Image */}
          <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />

          {/* Title */}
          <h2 className="text-3xl font-bold mt-6 mb-4 text-gray-900">{title}</h2>

          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-700 text-xl font-bold hover:text-gray-900">×</button>

          {/* Content */}
          <div className="space-y-10">{children}</div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Services = () => {
  const [open, setOpen] = useState<string | null>(null);

  // Helper to open examples in new tab
  const openExample = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
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
            {/* Skincare card */}
            <div className="h-full bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-[#6C2BD9] to-[#4B1FA2] text-white">
                    <Sparkles size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">Skincare Marketing</h3>
                  <p className="mt-2 text-gray-600">Landing pages, product photography, bookings, and local SEO for skincare brands.</p>
                </div>
              </div>
              <div className="mt-6">
                <button onClick={() => setOpen("skincare")} className="w-full px-4 py-2 bg-[#6C2BD9] text-white rounded-lg font-semibold hover:bg-[#4B1FA2] transition-colors">View Services</button>
              </div>
            </div>

            {/* Digital Marketing card */}
            <div className="h-full bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-[#6C2BD9] to-[#4B1FA2] text-white">
                    <BarChart size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">Digital Marketing</h3>
                  <p className="mt-2 text-gray-600">SEO, PPC, social media, content creation, and email marketing solutions.</p>
                </div>
              </div>
              <div className="mt-6">
                <button onClick={() => setOpen("digital")} className="w-full px-4 py-2 bg-[#6C2BD9] text-white rounded-lg font-semibold hover:bg-[#4B1FA2] transition-colors">View Services</button>
              </div>
            </div>

            {/* Construction card */}
            <div className="h-full bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-[#6C2BD9] to-[#4B1FA2] text-white">
                    <Construction size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">Construction Marketing</h3>
                  <p className="mt-2 text-gray-600">Project showcases, drone photography, and B2B lead generation.</p>
                </div>
              </div>
              <div className="mt-6">
                <button onClick={() => setOpen("construction")} className="w-full px-4 py-2 bg-[#6C2BD9] text-white rounded-lg font-semibold hover:bg-[#4B1FA2] transition-colors">View Services</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {/* Skincare Modal */}
      <Modal
        isOpen={open === "skincare"}
        onClose={() => setOpen(null)}
        title="Skincare Marketing Services"
        image="https://png.pngtree.com/thumb_back/fw800/background/20240308/pngtree-beauty-and-facial-with-a-black-woman-in-studio-to-promote-image_15637536.jpg"
      >
        <div className="space-y-8">
          <div>
            <p className="text-gray-700 text-lg">We help skincare businesses attract more clients with professional websites, videos, social media, and brand-building strategies.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="mailto:contact@yourcompany.com" className="px-4 py-2 bg-pink-500 text-white rounded-lg font-semibold">Get Free Consultation</a>
              <button onClick={() => openExample('https://images.unsplash.com/photo-1600180758890-6d2b6f3d34c2?auto=format&fit=crop&w=1400&q=80')} className="px-4 py-2 border rounded-lg">View Portfolio</button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Skincare Marketing Services</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Website Development</h4>
                <p className="text-sm text-gray-600 mt-1">Beautiful, conversion-focused websites for skincare brands.</p>
                <button onClick={() => openExample('https://images.unsplash.com/photo-1587560699334-cc4ff2a225d2')} className="text-indigo-600 text-sm mt-2">View Example →</button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Product Photography</h4>
                <p className="text-sm text-gray-600 mt-1">Professional product shots that showcase your brand.</p>
                <button onClick={() => openExample('https://images.unsplash.com/photo-1607082348824-0a14a35cf98a')} className="text-indigo-600 text-sm mt-2">See Photos →</button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Social Media</h4>
                <p className="text-sm text-gray-600 mt-1">Engaging content for Instagram, TikTok & more.</p>
                <button onClick={() => openExample('https://images.unsplash.com/photo-1527236438218-d2c0f3a2a8d4')} className="text-indigo-600 text-sm mt-2">View Samples →</button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Local SEO</h4>
                <p className="text-sm text-gray-600 mt-1">Get found by local clients searching for skincare.</p>
                <button onClick={() => openExample('https://images.unsplash.com/photo-1559526324-593bc073d938')} className="text-indigo-600 text-sm mt-2">Learn More →</button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Work</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <img onClick={() => openExample('https://images.unsplash.com/photo-1526178611918-17a2d04c1f68')} src="https://images.unsplash.com/photo-1526178611918-17a2d04c1f68?auto=format&fit=crop&w=300&h=300&q=80" alt="Portfolio 1" className="rounded-lg cursor-pointer hover:opacity-75 transition" />
              <img onClick={() => openExample('https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f')} src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=300&h=300&q=80" alt="Portfolio 2" className="rounded-lg cursor-pointer hover:opacity-75 transition" />
              <img onClick={() => openExample('https://images.unsplash.com/photo-1612817288484-6f916006741a')} src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=300&h=300&q=80" alt="Portfolio 3" className="rounded-lg cursor-pointer hover:opacity-75 transition" />
              <img onClick={() => openExample('https://images.unsplash.com/photo-1570554886111-e80b8c7ebbb7')} src="https://images.unsplash.com/photo-1570554886111-e80b8c7ebbb7?auto=format&fit=crop&w=300&h=300&q=80" alt="Portfolio 4" className="rounded-lg cursor-pointer hover:opacity-75 transition" />
            </div>
          </div>
        </div>
      </Modal>

      {/* Digital Marketing Modal */}
      <Modal
        isOpen={open === "digital"}
        onClose={() => setOpen(null)}
        title="Digital Marketing Services"
        image="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80"
      >
        <div className="space-y-8">
          <div>
            <p className="text-gray-700 text-lg">Comprehensive digital marketing solutions to grow your brand online through SEO, PPC, social media, and content marketing.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="mailto:contact@yourcompany.com" className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold">Start Your Campaign</a>
              <button onClick={() => openExample('https://images.unsplash.com/photo-1557800636-894a64c1696f')} className="px-4 py-2 border rounded-lg">View Case Studies</button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Digital Marketing Services</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Search Engine Optimization</h4>
                <p className="text-sm text-gray-600 mt-1">Rank higher on Google and drive organic traffic.</p>
                <button onClick={() => openExample('https://images.unsplash.com/photo-1508830524289-0adcbe822b40')} className="text-indigo-600 text-sm mt-2">View Results →</button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">PPC Advertising</h4>
                <p className="text-sm text-gray-600 mt-1">Targeted ads on Google, Facebook & Instagram.</p>
                <button onClick={() => openExample('https://images.unsplash.com/photo-1518770660439-4636190af475')} className="text-indigo-600 text-sm mt-2">See Campaigns →</button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Content Marketing</h4>
                <p className="text-sm text-gray-600 mt-1">Blogs, videos, and social media content.</p>
                <button onClick={() => openExample('https://images.unsplash.com/photo-1515165562839-978bbcf18277')} className="text-indigo-600 text-sm mt-2">View Content →</button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Analytics & Reporting</h4>
                <p className="text-sm text-gray-600 mt-1">Track and optimize your marketing ROI.</p>
                <button onClick={() => openExample('https://images.unsplash.com/photo-1460925895917-afdab827c52f')} className="text-indigo-600 text-sm mt-2">See Example →</button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Our Process</h3>
            <div className="mt-4 space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold">Research & Strategy</h4>
                  <p className="text-sm text-gray-600">We analyze your market, competitors, and opportunities.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold">Implementation</h4>
                  <p className="text-sm text-gray-600">Execute campaigns across chosen channels.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold">Optimization</h4>
                  <p className="text-sm text-gray-600">Continuous monitoring and improvement of results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Construction Modal */}
      <Modal
        isOpen={open === "construction"}
        onClose={() => setOpen(null)}
        title="Construction Marketing Services"
        image="https://tse1.mm.bing.net/th/id/OIP.VE6ajKhELABfIItURvm1OQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
      >
        <div className="space-y-8">
          <div>
            <p className="text-gray-700 text-lg">Specialized marketing services for construction companies: project showcases, drone photography, and B2B lead generation.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="mailto:contact@yourcompany.com" className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold">Get Started</a>
              <button onClick={() => openExample('https://images.unsplash.com/photo-1505842465776-3d595b1f4a5d')} className="px-4 py-2 border rounded-lg">View Projects</button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Construction Marketing Services</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Project Showcases</h4>
                <p className="text-sm text-gray-600 mt-1">Professional website portfolios for your work.</p>
                <button onClick={() => openExample('https://images.unsplash.com/photo-1494526585095-c41746248156')} className="text-indigo-600 text-sm mt-2">View Example →</button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Drone Photography</h4>
                <p className="text-sm text-gray-600 mt-1">Aerial shots and videos of your projects.</p>
                <button onClick={() => openExample('https://images.unsplash.com/photo-1505842465776-3d595b1f4a5d')} className="text-indigo-600 text-sm mt-2">See Photos →</button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Lead Generation</h4>
                <p className="text-sm text-gray-600 mt-1">Targeted B2B campaigns for new contracts.</p>
                <button onClick={() => openExample('https://images.unsplash.com/photo-1504593811423-6dd665756598')} className="text-indigo-600 text-sm mt-2">View Results →</button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Online Quotation</h4>
                <p className="text-sm text-gray-600 mt-1">Simple quote request systems for clients.</p>
                <button onClick={() => openExample('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70')} className="text-indigo-600 text-sm mt-2">See Demo →</button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Featured Projects</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <img onClick={() => openExample('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122')} src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=300&h=300&q=80" alt="Project 1" className="rounded-lg cursor-pointer hover:opacity-75 transition" />
              <img onClick={() => openExample('https://images.unsplash.com/photo-1485627941502-d2e6429a8af0')} src="https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?auto=format&fit=crop&w=300&h=300&q=80" alt="Project 2" className="rounded-lg cursor-pointer hover:opacity-75 transition" />
              <img onClick={() => openExample('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77')} src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=300&h=300&q=80" alt="Project 3" className="rounded-lg cursor-pointer hover:opacity-75 transition" />
              <img onClick={() => openExample('https://images.unsplash.com/photo-1590381105924-c72589b9ef3f')} src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=300&h=300&q=80" alt="Project 4" className="rounded-lg cursor-pointer hover:opacity-75 transition" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Services;
