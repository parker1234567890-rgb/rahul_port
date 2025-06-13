import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-indigo-500" },
        { name: "Next.js", level: 85, color: "from-gray-700 to-gray-500" },
        { name: "Tailwind CSS", level: 88, color: "from-teal-500 to-cyan-500" },
        { name: "Framer Motion", level: 80, color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-600 to-emerald-500" },
        { name: "Express", level: 85, color: "from-gray-700 to-slate-600" },
        { name: "MongoDB", level: 80, color: "from-green-500 to-lime-500" },
        { name: "PostgreSQL", level: 75, color: "from-blue-700 to-indigo-600" },
        { name: "GraphQL", level: 70, color: "from-pink-600 to-rose-500" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, color: "from-orange-600 to-red-500" },
        { name: "Docker", level: 75, color: "from-blue-600 to-cyan-500" },
        { name: "AWS", level: 70, color: "from-yellow-600 to-orange-500" },
        { name: "Figma", level: 85, color: "from-purple-600 to-indigo-500" },
        { name: "Jest", level: 80, color: "from-red-600 to-pink-500" }
      ]
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life with royal precision and trusted reliability
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-6 border border-indigo-500/20 shadow-xl"
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-6 text-center"
                animate={{ 
                  color: ["#ffffff", "#6366f1", "#8b5cf6", "#ffffff"]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  delay: categoryIndex * 0.5
                }}
              >
                {category.title}
              </motion.h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: skillIndex * 0.1,
                      duration: 0.5
                    }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                        {skill.name}
                      </span>
                      <motion.span 
                        className="text-indigo-400 font-semibold"
                        animate={{ 
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: skillIndex * 0.2
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5,
                          delay: skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating skill icons */}
              <div className="relative mt-6 h-20 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-20"
                    animate={{
                      x: [0, 200],
                      y: [0, Math.random() * 40 - 20],
                      rotate: [0, 360],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: Math.random() * 5 + 5,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "linear"
                    }}
                    style={{
                      top: `${Math.random() * 60}%`
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Python", "Java", "PHP", "Laravel", "Vue.js", "Angular", 
              "Redux", "Socket.io", "Redis", "Elasticsearch", "Jenkins", "Kubernetes"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(99, 102, 241, 0.2)"
                }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 hover:text-white transition-colors cursor-pointer"
                data-cursor="pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;