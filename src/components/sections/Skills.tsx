'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
  FaDocker, FaAws, FaFigma, FaServer, FaTools, FaLightbulb,
  FaCode, FaMobile, FaBolt, FaTasks, FaPalette, FaPen,
  FaSearch, FaPuzzlePiece, FaUsers, FaBookReader, FaUserTie,
  FaClock, FaComments
} from 'react-icons/fa'
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux,
  SiFramer, SiExpress, SiMongodb, SiPostgresql, SiGraphql,
  SiPrisma, SiSocketdotio, SiVercel, SiPostman
} from 'react-icons/si'
import skillsData from '@/data/skills.json'

// Icon mapping
const iconMap: { [key: string]: any } = {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
  FaDocker, FaAws, FaFigma, FaServer, FaTools, FaLightbulb,
  FaCode, FaMobile, FaBolt, FaTasks, FaPalette, FaPen,
  FaSearch, FaPuzzlePiece, FaUsers, FaBookReader, FaUserTie,
  FaClock, FaComments,
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux,
  SiFramer, SiExpress, SiMongodb, SiPostgresql, SiGraphql,
  SiPrisma, SiSocketdotio, SiVercel, SiPostman
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState('technical')

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="divider mx-auto mb-6" />
            <p className="section-subheading max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-200 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'technical'
                    ? 'bg-white dark:bg-gray-700 text-primary-600 shadow-md'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Technical Skills
              </button>
              <button
                onClick={() => setActiveTab('soft')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'soft'
                    ? 'bg-white dark:bg-gray-700 text-primary-600 shadow-md'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Soft Skills
              </button>
            </div>
          </div>

          {/* Technical Skills */}
          {activeTab === 'technical' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              {skillsData.categories.map((category, catIndex) => {
                const CategoryIcon = iconMap[category.icon] || FaCode

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: catIndex * 0.1 }}
                  >
                    <div className="card p-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <CategoryIcon className="text-primary-600" size={28} />
                        {category.name}
                      </h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        {category.skills.map((skill, skillIndex) => {
                          const SkillIcon = iconMap[skill.icon] || FaCode

                          return (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                              className="space-y-2"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <SkillIcon
                                    size={20}
                                    style={{ color: skill.color }}
                                  />
                                  <span className="font-medium text-gray-900 dark:text-white">
                                    {skill.name}
                                  </span>
                                </div>
                                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="skill-bar">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                  transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 + 0.2, duration: 1 }}
                                  className="skill-bar-fill"
                                />
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          {/* Soft Skills */}
          {activeTab === 'soft' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData.softSkills.map((skill, index) => {
                const SkillIcon = iconMap[skill.icon] || FaLightbulb

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="card p-6"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white">
                        <SkillIcon size={32} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
