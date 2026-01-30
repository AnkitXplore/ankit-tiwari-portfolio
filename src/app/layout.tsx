import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CookieConsent from '@/components/common/CookieConsent'
import ScrollToTop from '@/components/common/ScrollToTop'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Your Name - Full-Stack Developer Portfolio',
  description: 'Full-stack developer with expertise in React, Next.js, Node.js, and modern web technologies. Currently working at Webfliar as a Full-Stack Developer & SEO Specialist.',
  keywords: ['Full-Stack Developer', 'Web Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourusername.github.io/portfolio-new'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Your Name - Full-Stack Developer Portfolio',
    description: 'Full-stack developer with expertise in modern web technologies',
    siteName: 'Your Name Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Full-Stack Developer Portfolio',
    description: 'Full-stack developer with expertise in modern web technologies',
    creator: '@yourusername',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <CookieConsent />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
