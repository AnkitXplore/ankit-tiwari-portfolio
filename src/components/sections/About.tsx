'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCheckCircle, FiHeart, FiCode } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaPython, FaJava } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import personalData from '@/data/personal.json'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { about } = personalData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading">
              About <span className="gradient-text">Ankit Tiwari</span>
            </h2>
            <div className="divider mx-auto mb-6" />
            <p className="section-subheading max-w-3xl mx-auto">
              Get to know more about my journey, skills, and what drives me as a developer
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {about.description.split('\n\n').map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6"
              >
                {[
                  { label: 'Years Experience', value: '2+' },
                  { label: 'Projects Completed', value: '15+' },
                  { label: 'Technologies', value: '20+' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    className="card p-6 text-center"
                  >
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Highlights & Tech Stack Visualization */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Animated Tech Stack Circle */}
              <div className="card p-8 relative overflow-hidden">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                  <FiCode className="text-primary-600" />
                  Tech Stack
                </h3>
                
                {/* Circular Tech Icons Animation */}
                <div className="relative h-80 flex items-center justify-center">
                  {/* Center Circle with "Y" replaced by code symbol */}
                  <motion.div
                    initial={{ scale: 0, rotate: 0 }}
                    animate={isInView ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-2xl z-10"
                  >
                    <FiCode className="text-4xl text-white" />
                  </motion.div>

                  {/* Orbiting Tech Icons */}
                  {[
                    { Icon: FaReact, color: '#61DAFB', delay: 0.6, angle: 0 },
                    { Icon: FaNodeJs, color: '#339933', delay: 0.7, angle: 45 },
                    { Icon: FaJsSquare, color: '#F7DF1E', delay: 0.8, angle: 90 },
                    { Icon: SiMongodb, color: '#47A248', delay: 0.9, angle: 135 },
                    { Icon: FaHtml5, color: '#E34F26', delay: 1.0, angle: 180 },
                    { Icon: FaCss3Alt, color: '#1572B6', delay: 1.1, angle: 225 },
                    { Icon: SiExpress, color: '#000000', delay: 1.2, angle: 270 },
                    { Icon: FaPython, color: '#3776AB', delay: 1.3, angle: 315 },
                  ].map(({ Icon, color, delay, angle }, index) => {
                    const radius = 120
                    const radian = (angle * Math.PI) / 180
                    const x = radius * Math.cos(radian)
                    const y = radius * Math.sin(radian)
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { 
                          scale: 1, 
                          opacity: 1,
                          rotate: [0, 360]
                        } : { scale: 0, opacity: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay,
                          rotate: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }
                        }}
                        className="absolute w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border-2 border-gray-200 dark:border-gray-700"
                        style={{
                          left: `calc(50% + ${x}px - 2rem)`,
                          top: `calc(50% + ${y}px - 2rem)`,
                        }}
                      >
                        <Icon className="text-3xl" style={{ color }} />
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Highlights */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <FiCheckCircle className="text-primary-600" />
                  Highlights
                </h3>
                <ul className="space-y-4">
                  {about.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Interests */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <FiHeart className="text-accent-600" />
                  Interests
                </h3>
                <div className="flex flex-wrap gap-3">
                  {about.interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                      className="tag"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
