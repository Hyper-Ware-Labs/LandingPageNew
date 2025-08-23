import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
//import myImage  from 'Untitled_design__1_-fotor-2025080314046-removebg-preview.png';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${
      isScrolled ? 'bg-gradient-primary shadow-lg' : 'bg-gradient-primary'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => scrollToSection('home')}>
          {/* group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 */}
             <div className="p-2  " style={{width:'13%'}}>
              {/* <Zap className="w-6 h-6 text-white" />
              <img src="Logo2.png" className="w-6 h-6 text-white"/> */}
               <img src='Untitled_design__1_-fotor-2025080314046-removebg-preview.png'style={{width:'101%'}}/>
            </div> 
           
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-transparent">
              HyperWare Labs
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-blue-200 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-blue-200 transition-colors duration-200"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-blue-200 transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-white hover:text-blue-200 transition-colors duration-200"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-200 transition-colors duration-200"
            >
              Contact
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 text-white hover:text-blue-200 transition-colors duration-200"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-white hover:text-blue-200 transition-colors duration-200"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-blue-200 transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-blue-200 transition-colors duration-200 text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-blue-200 transition-colors duration-200 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="text-white hover:text-blue-200 transition-colors duration-200 text-left"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-blue-200 transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;