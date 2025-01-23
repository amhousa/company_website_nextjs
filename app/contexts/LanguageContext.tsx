"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { translations } from "../translations"

type Language = "en" | "fa"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]
    for (const k of keys) {
      value = value[k]
      if (value === undefined) return key
    }
    return value
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

