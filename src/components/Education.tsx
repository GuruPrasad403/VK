import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="education" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4 ${
                darkMode 
                  ? 'bg-purple-900/50 text-purple-300 backdrop-blur-sm' 
                  : 'bg-purple-100 text-purple-800'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <GraduationCap className="w-5 h-5" />
              <span className="font-semibold">Academic Background</span>
            </motion.div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Education
            </h2>
          </motion.div>
          
          <motion.div 
            ref={ref}
            className={`rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-sm border ${
              darkMode 
                ? 'bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-gray-600' 
                : 'bg-gradient-to-r from-purple-50/80 to-indigo-50/80 border-purple-100'
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              <div className="flex-grow text-center md:text-left">
                <motion.h3 
                  className={`text-2xl md:text-3xl font-bold mb-4 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Bachelor of Computer
                </motion.h3>
                <motion.p 
                  className="text-xl text-purple-600 font-semibold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Sarala Devi Satish Chandra Agarwal
                </motion.p>
                
                <motion.div 
                  className={`flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">2010 – 2013</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;