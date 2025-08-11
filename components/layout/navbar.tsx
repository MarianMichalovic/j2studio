"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Domov" },
    // { href: "/about", label: "O nás" },
    { href: "/sluzby", label: "Služby" },
    { href: "/process", label: "Proces" },
    { href: "/contact", label: "Kontakt" },
  ]

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="fixed top-0 left-0 w-full h-32 bg-white border-b border-neutral-200 z-[9999]">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 shrink-0"
          onClick={() => handleNavClick("/")}
        >
          <img
            src="/anywebp/logo.jpg"
            alt="logo spolocnosti"
            className="w-16 md:w-28 absolute top-2 object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`text-sm font-bold transition-colors relative group ${pathname === item.href ? "text-black font-bold" : "text-neutral-500 hover:text-neutral-900"
                }`}
            >
              {item.label}
              <div
                className={`absolute -bottom-1 left-0 h-0.5 bg-orange-300 transition-all duration-300 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></div>
            </button>
          ))}

          <Button asChild className="bg-black hover:bg-neutral-800 text-white px-6 py-2 rounded-none text-sm">
            <Link href="/contact" onClick={() => handleNavClick("/contact")}>
              Kontaktujte ma
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
  className={`md:hidden absolute top-20 left-0 w-full bg-white border-t border-neutral-200 px-6 overflow-hidden transition-all duration-300 ease-in-out z-[9999] ${
    mobileOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
  }`}
>
  <div
    className={`flex flex-col items-start space-y-4 transition-opacity duration-300 ${
      mobileOpen ? "opacity-100" : "opacity-0"
    }`}
  >
    {navItems.map((item) => (
      <button
        key={item.href}
        onClick={() => handleNavClick(item.href)}
        className={`text-base font-bold transition-colors relative group text-left ${
          pathname === item.href
            ? "text-black font-bold"
            : "text-neutral-500 hover:text-neutral-900"
        }`}
      >
        {item.label}
        <div
          className={`absolute -bottom-1 left-0 h-0.5 bg-orange-300 transition-all duration-300 ${
            pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
          }`}
        ></div>
      </button>
    ))}

    <Button
      asChild
      className="bg-black hover:bg-neutral-800 text-white px-6 py-2 rounded-none text-sm w-full text-left"
    >
      <Link href="/contact" onClick={() => handleNavClick("/contact")}>
        Kontaktujte ma
      </Link>
    </Button>
  </div>
</div>
    </div>
  )
}