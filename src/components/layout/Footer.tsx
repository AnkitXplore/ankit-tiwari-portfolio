'use client'

import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import personalData from '@/data/personal.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' },
    ],
    social: [
      { name: 'GitHub', href: personalData.social.github, icon: FiGithub },
      { name: 'LinkedIn', href: personalData.social.linkedin, icon: FiLinkedin },
      { name: 'Twitter', href: personalData.social.twitter, icon: FiTwitter },
      { name: 'Email', href: personalData.social.email, icon: FiMail },
    ],
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              {`<${personalData.name.split(' ')[0]} />`}
            </h3>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer passionate about creating innovative web solutions.
            </p>
            <p className="text-sm text-gray-500">
              {personalData.availability}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-primary-600 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} {personalData.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Made with <FiHeart className="text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
