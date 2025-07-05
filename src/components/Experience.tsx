import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "Senior Team Leader",
      company: "Digitide Solutions Limited",
      period: "2018 – Present",
      responsibilities: [
        "Maintained accurate team operation records",
        "Guided members in resolving complex issues",
        "Delegated tasks based on skills and performance",
        "Built productive relationships with team and management"
      ]
    },
    {
      title: "Executive",
      company: "ARDS",
      period: "2024 – 2025",
      responsibilities: [
        "Engaged customers using strong verbal communication",
        "Led service level improvement initiatives"
      ]
    },
    {
      title: "Executive",
      company: "Tata Business Support Services",
      period: "2014 – 2018",
      responsibilities: [
        "Resolved customer complaints while maintaining service quality",
        "Displayed professional phone etiquette",
        "Handled difficult calls effectively with problem-solving skills"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
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
              <Briefcase className="w-5 h-5" />
              <span className="font-semibold">Professional Journey</span>
            </motion.div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Work Experience
            </h2>
          </motion.div>
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`rounded-2xl p-8 shadow-lg backdrop-blur-sm border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800/80 border-gray-700 hover:bg-gray-800' 
                    : 'bg-white/80 border-gray-100 hover:bg-white'
                }`}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: darkMode 
                    ? "0 20px 40px rgba(0,0,0,0.3)" 
                    : "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <motion.h3 
                      className={`text-2xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                      whileHover={{ color: darkMode ? '#60A5FA' : '#2563EB' }}
                    >
                      {exp.title}
                    </motion.h3>
                    <p className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</p>
                  </div>
                  <motion.div 
                    className={`flex items-center space-x-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">{exp.period}</span>
                  </motion.div>
                </div>
                
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.1 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{resp}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;