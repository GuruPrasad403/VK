import React from 'react';
import { Settings, TrendingUp, Users, Clock, Crown, MessageCircle, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skills = [
    { name: "Project Management", icon: Settings, level: 95 },
    { name: "Sales Expertise", icon: TrendingUp, level: 90 },
    { name: "Teamwork", icon: Users, level: 98 },
    { name: "Time Management", icon: Clock, level: 92 },
    { name: "Leadership", icon: Crown, level: 96 },
    { name: "Effective Communication", icon: MessageCircle, level: 94 },
    { name: "Critical Thinking", icon: Brain, level: 88 }
  ];

  const languages = [
    { name: "English", level: 95 },
    { name: "Kannada", level: 100 },
    { name: "Hindi", level: 90 },
    { name: "Telugu", level: 85 }
  ];

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
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
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
                  ? 'bg-green-900/50 text-green-300 backdrop-blur-sm' 
                  : 'bg-green-100 text-green-800'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Settings className="w-5 h-5" />
              <span className="font-semibold">Expertise</span>
            </motion.div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Skills & Languages
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Section */}
            <motion.div 
              ref={ref}
              className={`rounded-2xl p-8 shadow-lg backdrop-blur-sm border ${
                darkMode 
                  ? 'bg-gray-800/80 border-gray-700' 
                  : 'bg-white/80 border-gray-100'
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className={`text-2xl font-bold mb-8 text-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Core Skills
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-6"
              >
                {skills.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          <skill.icon className="w-5 h-5 text-blue-600" />
                        </motion.div>
                        <span className={`font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm font-semibold ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Languages Section */}
            <motion.div 
              className={`rounded-2xl p-8 shadow-lg backdrop-blur-sm border ${
                darkMode 
                  ? 'bg-gray-800/80 border-gray-700' 
                  : 'bg-white/80 border-gray-100'
              }`}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className={`text-2xl font-bold mb-8 text-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Languages
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-6"
              >
                {languages.map((lang, index) => (
                  <motion.div key={index} variants={itemVariants} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {lang.name}
                      </span>
                      <span className={`text-sm font-semibold ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {lang.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <motion.div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.level}%` } : {}}
                        transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;