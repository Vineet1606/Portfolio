import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiHtml5, SiTailwindcss,
  SiGit, SiGithub, SiMysql, SiCplusplus
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { 
          name: "React", 
          icon: <SiReact className="w-6 h-6" />,
          color: "bg-blue-50 text-blue-600 border-blue-200"
        },
        { 
          name: "JavaScript", 
          icon: <SiJavascript className="w-6 h-6" />,
          color: "bg-yellow-50 text-yellow-600 border-yellow-200"
        },
        { 
          name: "HTML/CSS", 
          icon: <SiHtml5 className="w-6 h-6" />,
          color: "bg-orange-50 text-orange-600 border-orange-200"
        },
        { 
          name: "Tailwind CSS", 
          icon: <SiTailwindcss className="w-6 h-6" />,
          color: "bg-teal-50 text-teal-600 border-teal-200"
        }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { 
          name: "Git", 
          icon: <SiGit className="w-6 h-6" />,
          color: "bg-red-50 text-red-600 border-red-200"
        },
        { 
          name: "GitHub", 
          icon: <SiGithub className="w-6 h-6" />,
          color: "bg-gray-50 text-gray-700 border-gray-200"
        },
        { 
          name: "SQL", 
          icon: <SiMysql className="w-6 h-6" />,
          color: "bg-blue-50 text-blue-600 border-blue-200"
        },
        { 
          name: "C++", 
          icon: <SiCplusplus className="w-6 h-6" />,
          color: "bg-purple-50 text-purple-600 border-purple-200"
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className={`flex items-center gap-3 px-5 py-2 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-md ${skill.color}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="font-medium text-base">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
             viewport={{ once: false }} 
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-100 rounded-full opacity-20 blur-xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
