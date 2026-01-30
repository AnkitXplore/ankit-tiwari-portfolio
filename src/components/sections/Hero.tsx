'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import Image from 'next/image'
import personalData from '@/data/personal.json'

export default function Hero() {
  const { name, title, roles, social, resumeUrl, profileImage } = personalData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-400" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-600" />
        </div>
      </div>

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">{name}</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="h-20 md:h-16">
              <TypeAnimation
                sequence={roles.flatMap(role => [role, 2000])}
                wrapper="h2"
                speed={50}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0"
            >
              {title} passionate about creating innovative web solutions and building
              exceptional digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={resumeUrl}
                download
                className="btn btn-primary group"
              >
                <FiDownload className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn btn-outline"
              >
                <FiMail className="mr-2" />
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: social.github, label: 'GitHub' },
                { icon: FiLinkedin, href: social.linkedin, label: 'LinkedIn' },
                { icon: FiTwitter, href: social.twitter, label: 'Twitter' },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-200"
                  aria-label={item.label}
                >
                  <item.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Animated rings */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-20 blur-2xl"
              />
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-4 rounded-full bg-gradient-to-l from-accent-500 to-purple-500 opacity-20 blur-2xl"
              />

              {/* Pulse ring animation */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-full border-4 border-primary-400"
              />

              {/* Rotating particles around avatar */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                    }}
                    animate={{
                      rotate: [0, 360],
                      translateX: [0, 180],
                      translateY: [0, 0],
                    }}
                    transition={{
                      duration: 10 + i * 0.5,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>

              {/* Profile Image Container */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                />
                
                {/* Glitch effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                  animate={{
                    x: ['-100%', '100%'],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}
                />

                {/* Profile image or placeholder */}
                <Image
                  src="/images/avatar.svg"
                  alt={`${name} - Professional Avatar`}
                  fill
                  className="object-cover z-10"
                  priority
                />
                
                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-50"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(99, 102, 241, 0.5)',
                      '0 0 40px rgba(99, 102, 241, 0.8)',
                      '0 0 20px rgba(99, 102, 241, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>

              {/* Enhanced floating badges */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  type: "spring",
                  stiffness: 100,
                }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg border-2 border-primary-200 dark:border-primary-800"
              >
                <motion.span 
                  className="text-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  💻
                </motion.span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg border-2 border-accent-200 dark:border-accent-800"
              >
                <motion.span 
                  className="text-2xl"
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                >
                  🚀
                </motion.span>
              </motion.div>

              {/* Additional floating elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: 1,
                }}
                className="absolute top-1/4 -left-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
              >
                <span className="text-xl">⚡</span>
              </motion.div>

              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: 1.5,
                }}
                className="absolute bottom-1/4 -right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
              >
                <span className="text-xl">🎯</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
