'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'
import experienceData from '@/data/experience.json'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="divider mx-auto mb-6" />
            <p className="section-subheading max-w-3xl mx-auto">
              My professional journey and the amazing projects I've worked on
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-purple-500 transform md:-translate-x-1/2" />

            {/* Experience items */}
            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="card p-8 hover-lift"
                      >
                        {/* Header */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2 text-primary-600 dark:text-primary-400">
                            <FiBriefcase />
                            <span className="text-sm font-semibold uppercase tracking-wide">
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.position}
                          </h3>
                          <div className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3">
                            {exp.company}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <FiCalendar size={14} />
                              {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate!)}
                            </span>
                            <span className="flex items-center gap-1">
                              <FiMapPin size={14} />
                              {exp.location}
                            </span>
                          </div>
                          {exp.mentor && (
                            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                              Mentored by: <span className="font-semibold text-accent-600 dark:text-accent-400">{exp.mentor}</span>
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        {exp.achievements.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <FiAward className="text-accent-600" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm"
                                >
                                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-accent-500" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Projects */}
                        {exp.projects && exp.projects.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                              Notable Projects
                            </h4>
                            <div className="space-y-3">
                              {exp.projects.map((project, i) => (
                                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                                  <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                                    {project.name}
                                  </h5>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    {project.description}
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                      <span
                                        key={tech}
                                        className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
