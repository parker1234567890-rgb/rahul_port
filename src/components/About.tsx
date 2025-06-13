import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code size={24} />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with industry best practices"
    },
    {
      icon: <Palette size={24} />,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces that delight and engage users"
    },
    {
      icon: <Zap size={24} />,
      title: "Performance",
      description: "Optimized solutions for speed, efficiency, and seamless user experience"
    },
    {
      icon: <Heart size={24} />,
      title: "Passion",
      description: "Dedicated to creating amazing digital experiences with attention to detail"
    },
    {
      icon: <Award size={24} />,
      title: "Quality",
      description: "Delivering excellence in every project with rigorous testing and refinement"
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description: "Working closely with clients to bring their vision to life"
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
    hidden: { x: -50, opacity: 0 },
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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="w-full h-96 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl overflow-hidden shadow-2xl">
                <motion.div
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%"]
                  }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                  className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-6xl font-bold text-white"
                  style={{ backgroundSize: "200% 200%" }}
                >
                  RP
                </motion.div>
              </div>
              
              {/* Floating Elements */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-indigo-400 rounded-full"
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Crafting Digital Excellence with Royal Precision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience in creating 
                innovative web applications that clients trust. I specialize in React, Node.js, and modern web 
                technologies, always striving to deliver exceptional user experiences with the highest standards of quality and reliability.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-300 leading-relaxed">
                My journey in web development started with a curiosity for how things work on 
                the internet. Today, I focus on building scalable applications that solve 
                real-world problems while maintaining clean, efficient code that stands the test of time.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(99, 102, 241, 0.1)"
                  }}
                  className="p-4 rounded-lg border border-indigo-500/20 backdrop-blur-sm group cursor-pointer transition-all duration-300"
                  data-cursor="pointer"
                >
                  <motion.div 
                    className="text-indigo-400 mb-2 group-hover:text-indigo-300 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-8 mt-8"
            >
              {[
                { number: "50+", label: "Projects Delivered" },
                { number: "5+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <motion.div 
                    className="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text"
                    animate={{ 
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;