import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Mock CONTACT data for demo
const CONTACT = {
  address: "Sant Nagar, North Delhi, Delhi 110084",
  phoneNo: "+91 8287075528",
  email: "sumit.joshi0616@gmail.com"
}

function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [copiedText, setCopiedText] = useState('')

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopiedText(type)
    setTimeout(() => setCopiedText(''), 2000)
  }

  const contactCards = [
    {
      id: 'location',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: CONTACT.address,
      action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`, '_blank'),
      actionText: 'Open in Maps',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'phone',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: CONTACT.phoneNo,
      action: () => window.open(`tel:${CONTACT.phoneNo}`, '_self'),
      actionText: 'Call Now',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'email',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: CONTACT.email,
      action: () => window.open(`mailto:${CONTACT.email}`, '_self'),
      actionText: 'Send Email',
      gradient: 'from-pink-500 to-rose-600'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '⚡' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Portfolio', url: '#', icon: '🌐' }
  ]

  return (
    <div className='relative overflow-hidden'>
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 pb-20 border-b border-neutral-900">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-neutral-400 text-lg max-w-lg mx-auto">
            Let's create something amazing together. 
            Reach out through any channel below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 h-full transition-all duration-300 hover:border-neutral-600 hover:shadow-xl hover:shadow-black/20">
                <div className="absolute inset-0 bg-neutral-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-neutral-800 flex items-center justify-center text-neutral-300 shadow-lg group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>

                <div className="relative text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{card.value}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={card.action}
                      className="px-4 py-2 rounded-xl bg-neutral-800 text-white font-medium text-sm hover:bg-neutral-700 transition-all duration-300 transform hover:scale-105"
                    >
                      {card.actionText}
                    </button>
                    <button
                      onClick={() => handleCopy(card.value, card.id)}
                      className="px-4 py-2 rounded-xl border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-600 font-medium text-sm transition-all duration-300"
                    >
                      {copiedText === card.id ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {hoveredCard === card.id && (
                  <motion.div
                    layoutId="hoverEffect"
                    className="absolute -inset-px bg-neutral-700/50 rounded-2xl opacity-50 blur-sm"
                    style={{ zIndex: -1 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="relative z-10 bg-neutral-900/50 backdrop-blur-sm border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-neutral-400 text-sm flex items-center justify-center space-x-2"
            >
              <span>© 2025 Sumit Joshi. All rights reserved.</span>
              <span className="text-lg animate-pulse">💻</span>
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact