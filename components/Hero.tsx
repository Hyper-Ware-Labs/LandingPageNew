import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scheduleConsultation = () => {
    // Create Google Meet link for next day
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(10, 0, 0, 0); // Set to 10 AM
  
    // Format start and end time in Google Calendar's expected format: YYYYMMDDTHHMMSSZ
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
  
    const startDate = formatDate(tomorrow);
  
    // Example: set 1 hour duration
    const endDateObj = new Date(tomorrow.getTime() + 60 * 60 * 1000);
    const endDate = formatDate(endDateObj);
  
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation%20with%20HyperWare%20Labs&dates=${startDate}/${endDate}&details=Free%20consultation%20session%20to%20discuss%20your%20software%20development%20needs&location=Google%20Meet&add=hyperwarelabs@gmail.com`;
  
    window.open(googleCalendarUrl, '_blank');
  };
  

  const getQuote = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Where{' '}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Hype Meets Software
            </span>{' '}
            
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with cutting-edge technology. We deliver custom software solutions 
            that drive growth, improve efficiency, and give you a competitive edge in today's digital landscape.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={scheduleConsultation}
              className="bg-gradient-primary hover:bg-gradient-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={24} />
              Book a Free Consultation
            </motion.button>
            
            <motion.button
              onClick={getQuote}
              className="border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 transform hover:scale-105 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Quote
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;