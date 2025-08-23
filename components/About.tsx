import React from 'react';
import { Users, Target, Eye, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCounterAnimation } from '../hooks/useCounterAnimation';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { ref: statsRef, isIntersecting: statsVisible } = useIntersectionObserver();
  
  const projectsCounter = useCounterAnimation(5, 2000);
  const clientsCounter = useCounterAnimation(20, 2000);
  const experienceCounter = useCounterAnimation(100, 2000);
  const teamCounter = useCounterAnimation(3, 2000);

  React.useEffect(() => {
    if (statsVisible) {
      projectsCounter.setIsVisible(true);
      clientsCounter.setIsVisible(true);
      experienceCounter.setIsVisible(true);
      teamCounter.setIsVisible(true);
    }
  }, [statsVisible]);

  const stats = [
    { counter: projectsCounter, suffix: '+', label: 'Solution in Development' },
    { counter: clientsCounter, suffix: '+', label: 'Technology we Specialize in' },
    { counter: experienceCounter, suffix: '%', label: 'Commitment to Innovation' },
    { counter: teamCounter, suffix: '+', label: 'Team Members' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About HyperWare Labs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate technologists dedicated to delivering innovative software solutions 
              that transform businesses and drive success.
            </p>
          </motion.div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.counter.count}{stat.suffix}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-8 rounded-xl bg-gray-50 dark:bg-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital marketplace.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 rounded-xl bg-gray-50 dark:bg-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be the leading software consultancy that bridges the gap between cutting-edge 
                technology and real-world business solutions.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 rounded-xl bg-gray-50 dark:bg-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Excellence, integrity, innovation, and client success are at the core of everything 
                we do. We believe in building long-term partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;