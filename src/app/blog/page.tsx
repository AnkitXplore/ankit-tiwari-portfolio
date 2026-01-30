'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi'

// Sample blog posts - In production, fetch from CMS or markdown files
const blogPosts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 15: A Complete Guide',
    description: 'Learn how to build modern web applications with Next.js 15, featuring the new App Router, Server Components, and more.',
    date: '2024-03-15',
    readingTime: '8 min read',
    tags: ['Next.js', 'React', 'Web Development'],
    coverImage: '/images/blog/nextjs-guide.jpg',
  },
  {
    slug: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS: Tips and Tricks',
    description: 'Discover advanced Tailwind CSS techniques to build beautiful, responsive interfaces faster.',
    date: '2024-03-10',
    readingTime: '6 min read',
    tags: ['Tailwind CSS', 'CSS', 'Design'],
    coverImage: '/images/blog/tailwind-tips.jpg',
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for React Developers',
    description: 'Essential TypeScript patterns and practices to write type-safe React applications.',
    date: '2024-03-05',
    readingTime: '10 min read',
    tags: ['TypeScript', 'React', 'Best Practices'],
    coverImage: '/images/blog/typescript-react.jpg',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-heading">
            My <span className="gradient-text">Blog</span>
          </h1>
          <div className="divider mx-auto mb-6" />
          <p className="section-subheading max-w-3xl mx-auto">
            Thoughts, tutorials, and insights on web development, programming, and technology
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card h-full overflow-hidden group cursor-pointer"
                >
                  {/* Cover Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-500 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-50">
                      📝
                    </div>
                    {/* Replace with actual image when available */}
                    {/* <Image src={post.coverImage} alt={post.title} fill className="object-cover" /> */}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <FiCalendar size={14} />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock size={14} />
                        {post.readingTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:gap-3 transition-all">
                      Read More
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400">
            More articles coming soon! Follow me on social media for updates.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
