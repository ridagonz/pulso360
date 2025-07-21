import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Pulso%20360.jpg-teh3uboCgOvVBqpcc1z95RCmJBEECF.jpeg"
                alt="Pulso 360 Logo"
                width={50}
                height={50}
              />
              <span className="font-bold text-xl">Pulso 360</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Plataforma líder en encuestas digitales y análisis de datos para entender las tendencias y opiniones que
              importan.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/pulso360survey" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/encuestas" className="text-gray-300 hover:text-white">
                  Encuestas activas
                </Link>
              </li>
              <li>
                <Link href="/resultados" className="text-gray-300 hover:text-white">
                  Resultados
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-white">
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/encuestas-personalizadas" className="text-gray-300 hover:text-white">
                  Encuestas personalizadas
                </Link>
              </li>
              <li>
                <Link href="/servicios/analisis-datos" className="text-gray-300 hover:text-white">
                  Análisis de datos
                </Link>
              </li>
              <li>
                <Link href="/servicios/consultoria" className="text-gray-300 hover:text-white">
                  Consultoría
                </Link>
              </li>
              <li>
                <Link href="/servicios/investigacion" className="text-gray-300 hover:text-white">
                  Investigación de mercados
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@pulso360.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Pulso 360. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
