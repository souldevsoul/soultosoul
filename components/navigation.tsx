'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Mic } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [showLogo, setShowLogo] = useState(false)
  const [hideHeader, setHideHeader] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const isHomepage = pathname === '/'

  const links = [
    { href: '/vision', label: 'vision' },
    { href: '/offline', label: 'offline' },
    { href: '/s2s-os', label: 's2s os' },
    { href: '/contact', label: 'connect', hasIcon: true },
  ]

  useEffect(() => {
    // Set initial state
    if (!isHomepage) {
      setShowLogo(true)
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (isHomepage) {
        // Homepage: reveal logo on scroll
        setShowLogo(currentScrollY > 100)
        setHideHeader(false)
      } else {
        // Other pages: hide entire header on scroll down, show on scroll up
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setHideHeader(false)
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setHideHeader(true)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isHomepage])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md transition-transform duration-300 ${
      !isHomepage && hideHeader ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo - always visible */}
        <Link
          href="/"
          className="font-eb-garamond font-bold text-2xl lowercase text-black hover:opacity-70 transition-opacity duration-300"
        >
          soultosoul
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-stack-sans lowercase transition-all duration-300 text-black hover:opacity-70 flex items-center gap-2"
            >
              {link.label}
              {link.hasIcon && <Mic className="w-4 h-4" />}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
