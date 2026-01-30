'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: 'Ajay sir',
    role: 'Mentor & Senior Developer',
    company: 'Webfliar',
    image: '/images/testimonials/ajay.jpg',
    content: 'An exceptional developer with a keen eye for detail and a passion for learning. Has consistently delivered high-quality work and shown remarkable growth during the internship.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Project Manager',
    company: 'Tech Solutions Inc.',
    image: '/images/testimonials/sarah.jpg',
    content: 'Working with them was a pleasure. They brought innovative solutions to complex problems and always met deadlines. Their technical skills and communication are top-notch.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Lead Developer',
    company: 'StartupXYZ',
    image: '/images/testimonials/michael.jpg',
    content: 'A talented full-stack developer who writes clean, maintainable code. Their ability to quickly understand requirements and implement solutions is impressive.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'UI/UX Designer',
    company: 'Creative Agency',
    image: '/images/testimonials/emily.jpg',
    content: 'Great collaboration skills and excellent attention to design details. They perfectly translated our designs into pixel-perfect, responsive interfaces.',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              What People <span className="gradient-text">Say</span>
            </h2>
            <div className="divider mx-auto mb-6" />
            <p className="section-subheading max-w-3xl mx-auto">
              Feedback from colleagues, mentors, and clients I've worked with
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card p-8"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-yellow-400 fill-yellow-400"
                      size={20}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
