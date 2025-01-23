import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">{t("testimonials.title1")}</span>{" "}
          <span className="text-secondary">{t("testimonials.title2")}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t("testimonials.items").map((testimonial, index) => (
            <div key={index} className="bg-background-light p-6 rounded-lg shadow-lg">
              <p className="text-text-secondary italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center">
                <Image
                  src={`/avatar-${index + 1}.jpg`}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-text-secondary text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

