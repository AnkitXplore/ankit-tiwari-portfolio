'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiCalendar, FiClock, FiShare2 } from 'react-icons/fi'
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string

  // Sample blog post data - In production, fetch based on slug
  const post = {
    title: 'Getting Started with Next.js 15: A Complete Guide',
    description: 'Learn how to build modern web applications with Next.js 15',
    date: '2024-03-15',
    readingTime: '8 min read',
    author: 'Your Name',
    tags: ['Next.js', 'React', 'Web Development'],
    content: `
      <h2>Introduction</h2>
      <p>Next.js 15 brings exciting new features and improvements to the React framework. In this comprehensive guide, we'll explore everything you need to know to get started.</p>
      
      <h2>What's New in Next.js 15?</h2>
      <p>Next.js 15 introduces several groundbreaking features that make building web applications even more efficient and enjoyable.</p>
      
      <h3>1. Enhanced App Router</h3>
      <p>The App Router has been significantly improved with better performance and new capabilities for building complex applications.</p>
      
      <h3>2. Server Components</h3>
      <p>Server Components allow you to render components on the server, reducing the JavaScript bundle size sent to the client.</p>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js 15 project, run:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <h2>Conclusion</h2>
      <p>Next.js 15 is a powerful framework that makes building modern web applications a breeze. Start building today!</p>
    `,
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  const shareLinks = [
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`,
      color: 'hover:text-blue-400',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      color: 'hover:text-blue-500',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <article className="container-custom py-16 max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <FiArrowLeft />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <span className="flex items-center gap-2">
              <FiCalendar />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2">
              <FiClock />
              {post.readingTime}
            </span>
            <span>By {post.author}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="tag"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <FiShare2 />
              Share:
            </span>
            <div className="flex gap-3">
              {shareLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                  aria-label={`Share on ${social.name}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Enjoyed this article?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share it with your network!
              </p>
            </div>
            <div className="flex gap-3">
              {shareLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                  aria-label={`Share on ${social.name}`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </motion.footer>
      </article>
    </div>
  )
}
