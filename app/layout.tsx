import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "J2Studio - Dizajnové interiéry na mieru",
  description: "Redefinujeme luxusné bývanie prostredníctvom bezkonkurenčného remeselného umenia a moderného dizajnu.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Navbar />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
