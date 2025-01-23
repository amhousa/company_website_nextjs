import "./globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "./contexts/LanguageContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BusinessDev Pro",
  description: "Empowering businesses to reach new heights",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background-dark text-text-primary`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

