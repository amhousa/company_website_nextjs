import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background-dark text-text-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">BusinessDev Pro</h3>
            <p className="text-text-secondary">{t("footer.description")}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">{t("footer.product.title")}</h4>
            <ul className="space-y-2">
              {t("footer.product.items").map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-primary transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">{t("footer.company.title")}</h4>
            <ul className="space-y-2">
              {t("footer.company.items").map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-primary transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">{t("footer.connect.title")}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-primary transition duration-300">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition duration-300">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition duration-300">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition duration-300">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-text-secondary">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}

