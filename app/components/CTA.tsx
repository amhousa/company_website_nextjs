import Link from "next/link"
import { useLanguage } from "../contexts/LanguageContext"

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-background-dark mb-4">{t("cta.title")}</h2>
        <p className="text-xl text-background-dark mb-8">{t("cta.description")}</p>
        <Link
          href="#"
          className="bg-background-dark text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-80 transition duration-300 inline-block"
        >
          {t("cta.button")}
        </Link>
      </div>
    </section>
  )
}

