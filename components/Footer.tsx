import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>enquiry@hyperwarelabs.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>+91 9007105455</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>
                Kolkata, West Bengal, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-blue-100 hover:text-white transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-blue-100 hover:text-white transition-colors duration-200"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-blue-100 hover:text-white transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="block text-blue-100 hover:text-white transition-colors duration-200"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-blue-100 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="http://linkedin.com/company/hyperware-labs/" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/HyperWareLabs/" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="https://www.facebook.com/share/1BKDoAmHQH/" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/hyperwarelabs/" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-200">
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Stay connected with us for the latest updates on technology trends, 
              industry insights, and company news.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="text-2xl font-bold mb-4">HyperWare Labs</div>
          <p className="text-blue-100">
            &copy; 2025 HyperWare Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;