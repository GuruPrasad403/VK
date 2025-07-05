import React from 'react';
import { Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4 ${
                darkMode 
                  ? 'bg-blue-900/50 text-blue-300 backdrop-blur-sm' 
                  : 'bg-blue-100 text-blue-800'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Target className="w-5 h-5" />
              <span className="font-semibold">Career Objective</span>
            </motion.div>
            <motion.h2 
              className={`text-4xl md:text-5xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My Vision
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className={`rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-sm border ${
              darkMode 
                ? 'bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-gray-600' 
                : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100'
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.p 
              className={`text-lg md:text-xl leading-relaxed text-center ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              To secure a challenging and growth-oriented position where I can effectively apply my 
              subject knowledge, communication skills, and leadership potential. I aim to contribute 
              meaningfully to the organization's success while continuously learning, evolving, and 
              achieving both personal and professional goals.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;