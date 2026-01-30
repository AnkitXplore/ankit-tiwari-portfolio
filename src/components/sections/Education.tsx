'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiCalendar, FiMapPin, FiBook } from 'react-icons/fi'
import educationData from '@/data/education.json'
import certificationsData from '@/data/certifications.json'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <div className="divider mx-auto mb-6" />
            <p className="section-subheading max-w-3xl mx-auto">
              My academic journey and professional certifications
            </p>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <FiBook className="text-primary-600" />
              Academic Background
            </h3>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.2 }}
                  className="card p-8 hover-lift"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-2xl font-bold">
                        {edu.institution.charAt(0)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                            {edu.institution}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <FiCalendar size={14} />
                              {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                            </span>
                            <span className="flex items-center gap-1">
                              <FiMapPin size={14} />
                              {edu.location}
                            </span>
                          </div>
                        </div>
                        <div className="px-4 py-2 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                          <span className="text-sm font-semibold text-accent-800 dark:text-accent-300">
                            GPA: {edu.gpa}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      {edu.achievements.length > 0 && (
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <FiAward className="text-accent-600" />
                            Achievements
                          </h5>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {edu.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                              >
                                <span className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-accent-500" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Coursework */}
                      {edu.coursework && (
                        <div>
                          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Relevant Coursework
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <span
                                key={course}
                                className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <FiAward className="text-primary-600" />
              Professional Certifications
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationsData.map((cert, index) => (
                <motion.a
                  key={cert.id}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="card p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                      <FiAward size={24} />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(cert.date).getFullYear()}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {cert.name}
                  </h4>

                  <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-3">
                    {cert.issuer}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
