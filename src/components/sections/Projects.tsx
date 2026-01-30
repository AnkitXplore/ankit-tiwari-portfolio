'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'
import projectsData from '@/data/projects.json'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('All')

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projectsData.flatMap(p => p.category)))]

  // Filter projects
  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.includes(filter))

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="divider mx-auto mb-6" />
            <p className="section-subheading max-w-3xl mx-auto">
              A showcase of my best work and side projects
            </p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card h-full flex flex-col overflow-hidden group cursor-glow card-hover"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient-shift" />
                    
                    {/* Animated particles */}
                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => {
                        const positions = [
                          { left: '20%', top: '20%' },
                          { left: '70%', top: '30%' },
                          { left: '50%', top: '60%' },
                          { left: '30%', top: '70%' },
                          { left: '80%', top: '50%' },
                          { left: '40%', top: '40%' }
                        ];
                        const animations = [
                          { x: [0, 30, -20, 0], y: [0, -25, 0] },
                          { x: [0, -25, 20, 0], y: [0, -30, 0] },
                          { x: [0, 20, -30, 0], y: [0, -35, 0] },
                          { x: [0, -30, 25, 0], y: [0, -28, 0] },
                          { x: [0, 25, -20, 0], y: [0, -32, 0] },
                          { x: [0, -20, 30, 0], y: [0, -30, 0] }
                        ];
                        
                        return (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                            style={positions[i]}
                            animate={{
                              x: animations[i].x,
                              y: animations[i].y,
                              opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                              duration: 3 + i * 0.5,
                              repeat: Infinity,
                              delay: i * 0.3,
                              ease: "easeInOut"
                            }}
                          />
                        );
                      })}
                    </div>
                    
                    {/* Animated overlay pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          45deg,
                          transparent,
                          transparent 10px,
                          rgba(255,255,255,0.1) 10px,
                          rgba(255,255,255,0.1) 20px
                        )`,
                      }}
                    />
                    
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="flex items-center gap-1 px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-semibold shadow-lg">
                          <FiStar size={12} />
                          Featured
                        </span>
                      </div>
                    )}
                    
                    {/* Project title with animation */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <div className="text-center">
                        <div className="text-white text-6xl font-bold mb-2 drop-shadow-lg">
                          {project.title.charAt(0)}
                        </div>
                        <motion.div
                          className="h-1 bg-white rounded-full mx-auto"
                          initial={{ width: 0 }}
                          animate={{ width: "60%" }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                        />
                      </div>
                    </motion.div>
                    
                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1 mb-4 flex-grow">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400"
                        >
                          <span className="flex-shrink-0 w-1 h-1 mt-1.5 rounded-full bg-primary-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <FiGithub />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <FiExternalLink />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/AnkitXplore"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-hover cursor-glow"
            >
              <FiGithub className="mr-2" />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
