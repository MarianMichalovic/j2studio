"use client"

import Link from "next/link"
import { Building2, Mail, Phone } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()

  const handleNavClick = (href: string) => {
    router.push(href)
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <footer className="px-6 py-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col space-y-8">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <img
            src="/logo.png"
            alt="logo spolocnosti"
            className="w-32 md:w-40 object-contain"
          />
              </Link>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>j2studiointerior@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+421 903 140 332</span>
                </div>
              </div>
            </div>

            {/* Navigation and Legal Links in Two Columns */}
            <div className="grid grid-cols-2 gap-8">
              {/* Navigation Links Column */}
              <div className="flex flex-col space-y-4">
                {[
                  { href: "/", label: "Domov" },
                  { href: "/about", label: "O nás" },
                  { href: "/portfolio", label: "Portfólio" },
                  { href: "/contact", label: "Kontakt" },
                ].map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors relative group text-left"
                  >
                    {item.label}
                    <div className="absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 w-0 group-hover:w-full"></div>
                  </button>
                ))}
              </div>

              {/* Legal Links Column */}
              <div className="flex flex-col space-y-4">
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Ochrana súkromia
                </Link>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Podmienky
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
            © 2025 J2Studio Design s.r.o. Všetky práva vyhradené.
          </div>
        </div>
      </div>
    </footer>
  )
}
