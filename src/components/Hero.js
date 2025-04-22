'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const socialMediaLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/satyamkumarsingh',
      color: '#ffffff'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/satyamkumarsingh',
      color: '#0077b5'
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      url: 'https://instagram.com/satyamkumarsingh',
      color: '#e1306c'
    }
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-transparent text-white">
        <div className="container mx-auto px-4 text-center relative z-10">
        <div className="h-50"></div>
          <motion.h1
            className="text-8xl md:text-12xl font-bold mb-6"
            style={{ color:'var(--primary)', fontFamily: 'Luxurious Script' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Satyam Kumar Singh
          </motion.h1>
          <motion.p
            className="glass-card text-xl md:text-xl mb-8 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.04, boxShadow: "10px 10px 10px rgba(254, 98, 0, 0.8)", y: -10 }}
          >
            Machine Learning • Deep Learning • Agentic AI •  Artificial General Intelligence • GenAI
          </motion.p>
          <div className="h-50"></div>
          <motion.div
            className="flex flex-wrap justify-center gap-8 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {socialMediaLinks.map((social, index) => (
              <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary"
              style={{ 
                background: 'rgba(0,0,0,1)',
                color: social.color
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: `0 5px 15px ${social.color}40`
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-2xl sm:text-xl">{social.icon}</span>
            </motion.a>
            ))}
          </motion.div>
          <div className="h-10"></div>
          <motion.a
            href="#about"
            onClick={scrollToAbout}
            className="text-2xl animate-pulse text-primary flex items-center justify-center hover:text-opacity-80 transition-colors"
          >
            <FaChevronDown />
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Hero;