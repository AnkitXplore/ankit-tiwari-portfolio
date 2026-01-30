'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false')
    setShowConsent(false)
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container-custom">
            <div className="card-glass p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  🍪 Cookie Notice
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We use cookies to enhance your browsing experience and analyze site traffic. 
                  By clicking "Accept", you consent to our use of cookies.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={declineCookies}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="btn btn-primary text-sm"
                >
                  Accept
                </button>
              </div>
              <button
                onClick={declineCookies}
                className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
