"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar el botón después de un pequeño retraso para mejorar la experiencia de usuario
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Número de WhatsApp y mensaje predefinido
  const phoneNumber = "5215512345678" // Reemplazar con el número real (formato: código de país + número)
  const message = "Hola, me gustaría obtener más información sobre Pulso 360."

  // URL para abrir WhatsApp con el mensaje predefinido
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <span className="absolute right-full mr-3 bg-gray-800 text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Escríbenos por WhatsApp
        </span>
      </Link>
    </div>
  )
}
