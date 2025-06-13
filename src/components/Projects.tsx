import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include real-time inventory, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Frontend",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["React", "TypeScript", "Socket.io", "Tailwind"],
      github: "#",
      live: "#",
      color: "from-green-600 to-teal-600"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      category: "Full Stack",
      description: "An intelligent analytics dashboard that provides insights using machine learning algorithms and beautiful data visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Next.js", "Python", "TensorFlow", "D3.js"],
      github: "#",
      live: "#",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "Social Media Platform",
      category: "Full Stack",
      description: "A complete social media platform with real-time messaging, post sharing, and advanced privacy controls.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tech: ["React", "Express", "PostgreSQL", "Redis"],
      github: "#",
      live: "#",
      color: "from-pink-600 to-red-600"
    },
    {
      id: 5,
      title: "Weather Forecast App",
      category: "Frontend",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Weather API", "Mapbox", "Chart.js"],
      github: "#",
      live: "#",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 6,
      title: "Cryptocurrency Tracker",
      category: "Frontend",
      description: "Real-time cryptocurrency tracking application with portfolio management and price alerts.",
      image: "https://images.unsplash.com/photo-1518544866330-4e716499f800?w=600&h=400&fit=crop",
      tech: ["React", "Redux", "CoinGecko API", "Material-UI"],
      github: "#",
      live: "#",
      color: "from-yellow-600 to-orange-600"
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20'
              }`}
              data-cursor="pointer"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5
                }}
                className="group bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden border border-purple-500/20 relative"
                style={{ perspective: "1000px" }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(project.id)}
                      className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                      data-cursor="pointer"
                    >
                      <Eye size={20} />
                    </motion.button>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                      data-cursor="pointer"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-green-600 rounded-full text-white hover:bg-green-700 transition-colors"
                      data-cursor="pointer"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </motion.div>

                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4 px-3 py-1 bg-purple-600 text-white text-sm rounded-full"
                  >
                    {project.category}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"
                    animate={{ 
                      color: ["#ffffff", "#a855f7", "#ffffff"]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Background Animation */}
                <motion.div
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%"]
                  }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 pointer-events-none`}
                  style={{ backgroundSize: "200% 200%" }}
                />

                {/* Floating Elements */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 pointer-events-none"
                    animate={{
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.8, 0.2]
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
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 rounded-2xl p-8 max-w-2xl w-full border border-purple-500/20"
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.05 }}
                          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                          data-cursor="pointer"
                        >
                          View Code
                        </motion.a>
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.05 }}
                          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                          data-cursor="pointer"
                        >
                          Live Demo
                        </motion.a>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;