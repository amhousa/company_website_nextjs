"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en")
  }

  return (
    <header className="bg-background-light shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="BusinessDev Pro Logo" width={40} height={40} />
          <span className="text-xl font-bold text-primary">BusinessDev Pro</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#features" className="text-text-secondary hover:text-primary transition duration-300">
            {t("header.features")}
          </Link>
          <Link href="#testimonials" className="text-text-secondary hover:text-primary transition duration-300">
            {t("header.testimonials")}
          </Link>
          <Link href="#pricing" className="text-text-secondary hover:text-primary transition duration-300">
            {t("header.pricing")}
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 text-text-secondary hover:text-primary transition duration-300"
          >
            <Globe size={20} />
            <span>{language === "en" ? "FA" : "EN"}</span>
          </button>
          <Link
            href="#"
            className="bg-primary text-background-dark px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300"
          >
            {t("header.getStarted")}
          </Link>
        </div>
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-light">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#features"
              className="block px-3 py-2 text-text-secondary hover:text-primary transition duration-300"
            >
              {t("header.features")}
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 text-text-secondary hover:text-primary transition duration-300"
            >
              {t("header.testimonials")}
            </Link>
            <Link
              href="#pricing"
              className="block px-3 py-2 text-text-secondary hover:text-primary transition duration-300"
            >
              {t("header.pricing")}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 text-text-secondary hover:text-primary transition duration-300"
            >
              <Globe size={20} />
              <span>{language === "en" ? "FA" : "EN"}</span>
            </button>
            <Link
              href="#"
              className="block px-3 py-2 text-background-dark bg-primary hover:bg-opacity-80 transition duration-300 rounded-md"
            >
              {t("header.getStarted")}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

