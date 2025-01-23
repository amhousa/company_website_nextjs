import { Check } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Pricing() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">{t("pricing.title1")}</span>{" "}
          <span className="text-secondary">{t("pricing.title2")}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t("pricing.plans").map((plan, index) => (
            <div
              key={index}
              className={`bg-background-dark p-8 rounded-lg shadow-lg ${plan.popular ? "border-2 border-primary" : ""}`}
            >
              {plan.popular && (
                <span className="bg-primary text-background-dark text-xs font-semibold px-3 py-1 rounded-full uppercase mb-4 inline-block">
                  {plan.popular}
                </span>
              )}
              <h3 className="text-2xl font-bold text-primary mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-text-primary mb-6">
                {plan.price}
                <span className="text-text-secondary text-base font-normal">{plan.period}</span>
              </p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-text-secondary">
                    <Check className="h-5 w-5 text-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 rounded-md font-semibold ${plan.popular ? "bg-primary text-background-dark hover:bg-opacity-80" : "bg-background-light text-text-primary hover:bg-opacity-80"} transition duration-300`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

