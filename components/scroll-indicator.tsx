'use client'

import { useEffect, useState } from 'react'

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)
  const [buttonText, setButtonText] = useState('what we do')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Hide at bottom of page
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // Change text based on scroll position
      const sections = [
        { id: 'what-we-do', text: 'what we do' },
        { id: 'our-approach', text: 'our approach' },
        { id: 'contact', text: 'get in touch' }
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= windowHeight / 2) {
            const nextSection = sections[i + 1]
            setButtonText(nextSection ? nextSection.text : 'get in touch')
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    const currentSection = buttonText.toLowerCase().replace(/ /g, '-')
    const targetSection = document.getElementById(currentSection)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-12 right-12 flex flex-col items-center gap-2 text-foreground/40
        hover:text-foreground transition-all duration-300 group z-40 lowercase ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
    >
      <span className="font-space-grotesk text-sm tracking-wider font-medium">
        {buttonText}
      </span>
      <svg
        className="w-6 h-6 animate-bounce"
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
    </button>
  )
}
