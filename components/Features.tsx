import { Lightbulb, TrendingUp, Users, Zap } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

const featureIcons = [Lightbulb, TrendingUp, Users, Zap]

export default function Features() {
  const { t } = useLanguage()

  return (
    <section id="features" className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">{t("features.title1")}</span>{" "}
          <span className="text-secondary">{t("features.title2")}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t("features.items").map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <div
                key={index}
                className="bg-background-dark p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                <div className="mb-4 text-accent">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

