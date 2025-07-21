"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Lista de servicios para mantener consistencia entre desktop y mobile
  const servicios = [
    { nombre: "Diagnósticos", ruta: "/diagnosticos" },
    { nombre: "Estudios de mercado", ruta: "/estudios-de-mercado" },
    { nombre: "Estudios de opinión", ruta: "/estudios-de-opinion" },
    { nombre: "Panel de Consumidores", ruta: "/panel-de-consumidores" },
    { nombre: "Estudios económicos", ruta: "/estudios-economicos" },
    { nombre: "Encuesta multisectorial empresarial", ruta: "/encuesta-multisectorial" },
  ]

  // Lista de metodologías
  const metodologias = [
    { nombre: "Sesiones de Grupo", ruta: "/sesiones-de-grupo" },
    { nombre: "Encuestas Online", ruta: "/encuestas-online" },
    { nombre: "Encuestas", ruta: "/encuestas-metodologia" },
    { nombre: "Sondeos", ruta: "/sondeos-metodologia" },
  ]

  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Pulso%20360.jpg-teh3uboCgOvVBqpcc1z95RCmJBEECF.jpeg"
              alt="Pulso 360 Logo"
              width={40}
              height={40}
            />
            <span className="font-bold text-xl text-blue-900">Pulso 360</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Inicio
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                Servicios <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {servicios.map((servicio, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={servicio.ruta} className="w-full">
                      {servicio.nombre}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                Metodologías <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {metodologias.map((metodologia, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={metodologia.ruta} className="w-full">
                      {metodologia.nombre}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/nosotros" className="text-gray-700 hover:text-blue-600 font-medium">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-blue-600 font-medium">
              Contacto
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Iniciar sesión
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Participar</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Inicio
              </Link>
              <div>
                <p className="text-gray-700 font-medium py-2">Servicios</p>
                <div className="space-y-2 pl-4">
                  {servicios.map((servicio, index) => (
                    <Link
                      key={index}
                      href={servicio.ruta}
                      className="text-gray-700 hover:text-blue-600 font-medium py-1 block"
                    >
                      {servicio.nombre}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gray-700 font-medium py-2">Metodologías</p>
                <div className="space-y-2 pl-4">
                  {metodologias.map((metodologia, index) => (
                    <Link
                      key={index}
                      href={metodologia.ruta}
                      className="text-gray-700 hover:text-blue-600 font-medium py-1 block"
                    >
                      {metodologia.nombre}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/nosotros" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Nosotros
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Contacto
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 w-full">
                  Iniciar sesión
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Participar</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
