import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechVision Solutions",
      location: "Chennai, India",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovators",
      location: "Bangalore, India",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.",
      achievements: [
        "Delivered 15+ successful projects",
        "Reduced development time by 30%",
        "Improved client satisfaction scores"
      ],
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      location: "Mumbai, India",
      period: "2019 - 2020",
      description: "Focused on creating responsive and interactive user interfaces. Worked closely with UX designers to implement innovative design solutions.",
      achievements: [
        "Built 10+ responsive websites",
        "Implemented modern CSS animations",
        "Optimized for mobile performance"
      ],
      color: "from-teal-600 to-blue-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A journey through my professional career, building innovative solutions and growing as a developer
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-500 to-purple-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-slate-900 z-10`}
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? 2 : -2
                  }}
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 relative overflow-hidden">
                    {/* Background Animation */}
                    <motion.div
                      animate={{ 
                        backgroundPosition: ["0% 0%", "100% 100%"]
                      }}
                      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5`}
                      style={{ backgroundSize: "200% 200%" }}
                    />

                    {/* Header */}
                    <div className="relative z-10">
                      <motion.h3 
                        className="text-xl font-bold text-white mb-2"
                        animate={{ 
                          color: ["#ffffff", "#a855f7", "#ffffff"]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        {exp.title}
                      </motion.h3>
                      
                      <motion.h4 
                        className="text-lg text-purple-400 mb-3"
                        whileHover={{ scale: 1.05 }}
                      >
                        {exp.company}
                      </motion.h4>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <motion.div 
                          className="flex items-center text-gray-400"
                          whileHover={{ color: "#a855f7" }}
                        >
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center text-gray-400"
                          whileHover={{ color: "#a855f7" }}
                        >
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </motion.div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <div className="flex items-center text-purple-400 mb-2">
                          <Award size={16} className="mr-2" />
                          <span className="font-semibold">Key Achievements</span>
                        </div>
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5 }}
                            className="flex items-start"
                          >
                            <motion.div 
                              className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: achIndex * 0.3
                              }}
                            />
                            <span className="text-gray-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Floating Elements */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
                        animate={{
                          x: [0, Math.random() * 50 - 25],
                          y: [0, Math.random() * 50 - 25],
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                          duration: Math.random() * 3 + 2,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Timeline Date (Mobile) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="md:hidden mt-4 ml-16 text-purple-400 font-semibold"
                >
                  {exp.period}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            data-cursor="pointer"
          >
            Download Full Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;