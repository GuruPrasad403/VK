import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer id="contact" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Let's Connect
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center space-y-2"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Phone className="w-6 h-6" />
              </motion.div>
              <p className="text-gray-300">Phone</p>
              <p className="font-semibold">+91 9513024777</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center space-y-2"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Mail className="w-6 h-6" />
              </motion.div>
              <p className="text-gray-300">Email</p>
              <p className="font-semibold">princesveenakalgagari@gmail.com</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center space-y-2"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className="w-6 h-6" />
              </motion.div>
              <p className="text-gray-300">Location</p>
              <p className="font-semibold">Ballari, Karnataka, India</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="border-t border-gray-800 pt-8"
          >
            <motion.p 
              className="text-gray-400 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
            >
              <span>© 2025 Veena Kalgagari. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>and dedication.</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;