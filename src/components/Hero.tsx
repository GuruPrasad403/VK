import React from 'react';
import { MapPin, Phone, Mail, Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Content */}
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Veena Kalgagari
            </motion.h1>
            <motion.div 
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-blue-100"
              variants={itemVariants}
            >
              <motion.span 
                className="inline-block border-r-2 border-blue-300 pr-4 mr-4"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                Team Lead
              </motion.span>
              <motion.span 
                className="inline-block border-r-2 border-blue-300 pr-4 mr-4"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                Customer Service
              </motion.span>
              <motion.span 
                className="inline-block"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                People Management
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-blue-100">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                <MapPin className="w-5 h-5" />
                <span>Ballari, Karnataka, India</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                <Phone className="w-5 h-5" />
                <span>+91 9513024777</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                <Mail className="w-5 h-5" />
                <span>princesveenakalgagari@gmail.com</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.button 
              className="inline-flex items-center space-x-2 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold shadow-lg backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(255,255,255,0.3)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="cursor-pointer" 
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.2 }}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-blue-200" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;