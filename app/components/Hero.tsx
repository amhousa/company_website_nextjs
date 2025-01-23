import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-background-dark overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-primary">{t("hero.title1")}</span> <br />
            <span className="text-secondary">{t("hero.title2")}</span>
          </h1>
          <p className="text-xl text-text-secondary mb-6">{t("hero.description")}</p>
          <Link
            href="#"
            className="bg-primary text-background-dark px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-80 transition duration-300 inline-block"
          >
            {t("hero.cta")}
          </Link>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-secondary opacity-20 rounded-full blur-3xl"></div>
          <Image src="/hero-image.svg" alt={t("hero.altText")} width={600} height={400} className="relative z-10" />
        </div>
      </div>
    </section>
  )
}

