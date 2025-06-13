import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, Mail } from 'lucide-react';
import Typed from 'typed.js';

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'Full Stack Developer',
          'UI/UX Designer',
          'React Specialist',
          'Problem Solver',
          'Creative Thinker'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
      });

      return () => typed.destroy();
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, Math.random() * 2, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center relative z-10"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                  RP
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold text-white mb-4"
        >
          <motion.span
            animate={{ 
              backgroundPosition: ["0%", "100%"],
              backgroundSize: ["100% 100%", "100% 100%"]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-300%"
            style={{ backgroundSize: "300% 100%" }}
          >
            Ragul PS
          </motion.span>
        </motion.h1>

        {/* Typed Text */}
        <motion.div
          variants={itemVariants}
          className="text-2xl md:text-3xl text-indigo-300 mb-8 h-12"
        >
          <span ref={typedRef}></span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Passionate developer crafting digital experiences that blend creativity with functionality. 
          Transforming ideas into elegant, user-centered solutions with royal precision and trustworthy execution.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            onClick={() => scrollToSection('#projects')}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-2"
            data-cursor="pointer"
          >
            <Eye size={20} />
            View My Work
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('#contact')}
            whileHover={{ 
              scale: 1.05,
              borderColor: "#6366f1",
              backgroundColor: "rgba(99, 102, 241, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 rounded-full font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            data-cursor="pointer"
          >
            <Mail size={20} />
            Get In Touch
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ 
              scale: 1.05,
              borderColor: "#8b5cf6"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            data-cursor="pointer"
          >
            <Download size={20} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-indigo-400 cursor-pointer"
          onClick={() => scrollToSection('#about')}
        >
          <ArrowDown size={32} className="mx-auto" />
          <p className="text-sm mt-2">Scroll to explore</p>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity }
        }}
        className="absolute top-20 left-10 w-20 h-20 border-2 border-indigo-400 rounded-full opacity-20"
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, -20, 0]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity }
        }}
        className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-20"
      />
    </section>
  );
};

export default Hero;