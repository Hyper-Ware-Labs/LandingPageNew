import React, { useState } from 'react';
import { Shield, Clock, Users, Trophy, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const reasons = [
    {
      icon: Shield,
      title: 'Proven Track Record',
      description: 'Over 10 years of delivering successful software solutions with a 98% client satisfaction rate and zero security breaches.'
    },
    {
      icon: Clock,
      title: 'Agile Delivery',
      description: 'We use agile methodologies to deliver projects on time and within budget, with transparent communication throughout the process.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team consists of certified professionals with deep expertise in cutting-edge technologies and industry best practices.'
    },
    {
      icon: Trophy,
      title: 'Award-Winning Solutions',
      description: 'Recognized by industry leaders for innovation and excellence, our solutions have won multiple awards and accolades.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-First Approach',
      description: 'We stay ahead of technology trends and implement innovative solutions that give your business a competitive advantage.'
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % reasons.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose TechConsult?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Partner with us for reliable, innovative, and results-driven software solutions
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                className="group p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="bg-gradient-primary p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="text-white" size={36} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentCard * 100}%)` }}
            >
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 p-4"
                  >
                    <motion.div
                      className="group p-8 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 h-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div 
                        className="bg-gradient-primary p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="text-white" size={36} />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                        {reason.description}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevCard}
              className="bg-gradient-primary text-white p-3 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {reasons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentCard 
                      ? 'bg-gradient-primary scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextCard}
              className="bg-gradient-primary text-white p-3 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Call to Action */}
        {/* <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join hundreds of satisfied clients who have trusted us with their digital transformation journey.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;