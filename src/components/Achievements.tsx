import React from 'react';
import { Trophy, Star, Award, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';

interface AchievementsProps {
  darkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const achievements = [
    {
      icon: Trophy,
      title: "Best Employee – Pan India",
      description: "Recognized for outstanding performance across all Indian operations",
      metric: "1st",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Star,
      title: "Client Appreciations",
      description: "Received multiple client appreciations for service excellence",
      metric: "15+",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Award,
      title: "100% Quality Score",
      description: "Led nesting handover team with perfect quality score",
      metric: "100",
      suffix: "%",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Target,
      title: "72%+ Target Achievement",
      description: "Consistently achieved 72%+ target benchmarks",
      metric: "72",
      suffix: "%+",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Users,
      title: "League of Extraordinary (LOE)",
      description: "Recognized as LOE member for exceptional contributions",
      metric: "LOE",
      color: "from-red-400 to-red-600"
    }
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="achievements" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
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
                  ? 'bg-yellow-900/50 text-yellow-300 backdrop-blur-sm' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">Recognition</span>
            </motion.div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Key Achievements
            </h2>
          </motion.div>
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`rounded-2xl p-8 text-center backdrop-blur-sm border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-700/80 border-gray-600' 
                    : 'bg-gradient-to-br from-blue-50/80 to-indigo-50/80 border-blue-100'
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: darkMode 
                    ? "0 20px 40px rgba(0,0,0,0.3)" 
                    : "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-r ${achievement.color}`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <achievement.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="mb-4">
                  {typeof achievement.metric === 'string' ? (
                    <span className={`font-bold text-2xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {achievement.metric}
                    </span>
                  ) : (
                    <AnimatedCounter 
                      end={achievement.metric} 
                      suffix={achievement.suffix || ''} 
                      darkMode={darkMode}
                    />
                  )}
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {achievement.title}
                </h3>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;