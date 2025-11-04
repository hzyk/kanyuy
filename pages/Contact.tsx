import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Simulate success for demo purposes
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl"
          >
            We're here to answer your questions and help you get started on your marketing journey.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Details */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-[#1A1A1A]">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#6C2BD9] focus:border-[#6C2BD9]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#6C2BD9] focus:border-[#6C2BD9]" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company (Optional)</label>
                  <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#6C2BD9] focus:border-[#6C2BD9]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#6C2BD9] focus:border-[#6C2BD9]"></textarea>
                </div>
                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#6C2BD9] hover:bg-[#4B1FA2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4B1FA2] disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </div>
                {submitStatus === 'success' && <p className="text-green-600">Message sent successfully! We'll be in touch soon.</p>}
                {submitStatus === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
              </form>
            </div>
            
            {/* Contact Details & Map */}
            <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A]">Contact Details</h3>
                  <div className="mt-6 space-y-4">
                      <div className="flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 bg-[#6C2BD9]/10 text-[#6C2BD9] rounded-lg flex items-center justify-center">
                              <Mail size={24}/>
                          </div>
                          <div className="ml-4">
                              <h4 className="text-lg font-semibold">Email</h4>
                              <a href="mailto:Kanyuymarketing.org@gmail.com" className="text-gray-600 hover:text-[#6C2BD9]">Kanyuymarketing.org@gmail.com</a>
                          </div>
                      </div>
                      <div className="flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 bg-[#6C2BD9]/10 text-[#6C2BD9] rounded-lg flex items-center justify-center">
                              <Phone size={24}/>
                          </div>
                          <div className="ml-4">
                              <h4 className="text-lg font-semibold">Phone</h4>
                              <a href="tel:+674772569" className="text-gray-600 hover:text-[#6C2BD9]">+674 77 25 69</a>
                          </div>
                      </div>
                      <div className="flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 bg-[#6C2BD9]/10 text-[#6C2BD9] rounded-lg flex items-center justify-center">
                              <MapPin size={24}/>
                          </div>
                          <div className="ml-4">
                              <h4 className="text-lg font-semibold">Address</h4>
                              <p className="text-gray-600">Buea, Southwest Region, Cameroon</p>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="h-80 w-full rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63632.65634568019!2d9.20162594191893!3d4.156163897184234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613175391694f3%3A0x3359632864115c54!2sBuea%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1720542387588!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map of Buea, Cameroon"
                    ></iframe>
                </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;