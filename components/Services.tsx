import React from 'react';
import { Code, Cloud, Brain, Smartphone, Globe, Cog, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Build scalable, secure, and high-performance applications tailored to your business requirements. From web applications to enterprise solutions.',
      features: ['Full-stack Development', 'API Integration', 'Database Design', 'Quality Assurance']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate, optimize, and manage your infrastructure on leading cloud platforms. Reduce costs while improving scalability and reliability.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps Implementation', 'Cost Optimization']
    },
    {
      icon: Brain,
      title: 'AI/ML Consulting',
      description: 'Leverage artificial intelligence and machine learning to automate processes, gain insights, and create competitive advantages.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Create engaging mobile experiences across iOS and Android platforms with native performance and modern user interfaces.',
      features: ['Native Development', 'Cross-platform Solutions', 'UI/UX Design', 'App Store Optimization']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Build responsive, fast, and SEO-optimized websites and web applications that deliver exceptional user experiences.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Content Management', 'Performance Optimization']
    },
    {
      icon: Cog,
      title: 'Digital Transformation',
      description: 'Guide your organization through complete digital transformation with strategic planning and modern technology adoption.',
      features: ['Process Automation', 'Legacy System Modernization', 'Digital Strategy', 'Change Management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive software solutions designed to accelerate your business growth and digital transformation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-6">
                  <motion.div 
                    className="bg-gradient-primary p-3 rounded-lg flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="text-white" size={32} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* <motion.button 
                      className="flex items-center gap-2 text-secondary-500 hover:text-secondary-600 font-semibold transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </motion.button> */}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;