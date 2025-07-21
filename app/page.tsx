"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BarChart2, Users, TrendingUp, ArrowRight } from "lucide-react"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (video) {
      // Manejadores de eventos para el video
      const handleCanPlay = () => {
        setVideoLoaded(true)
        console.log("Video can play")
      }

      const handleError = (e: any) => {
        console.error("Error loading video:", e)
        setVideoError(true)
      }

      // Agregar event listeners
      video.addEventListener("canplay", handleCanPlay)
      video.addEventListener("error", handleError)

      // Intentar cargar y reproducir el video
      video.load()

      // Intentar reproducir el video (con manejo de errores)
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log("Video playback started"))
          .catch((err) => {
            console.error("Error playing video:", err)
            // No establecer videoError aquí, ya que algunos navegadores requieren interacción del usuario
          })
      }

      // Cleanup
      return () => {
        video.removeEventListener("canplay", handleCanPlay)
        video.removeEventListener("error", handleError)
      }
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Video de fondo con imagen de fallback */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Fondo de respaldo que se mostrará si el video no carga */}
          <div className="absolute inset-0 bg-blue-950 z-0"></div>

          {/* Video con URL directa del blob */}
          <video
            ref={videoRef}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100 z-10" : "opacity-0"
            } ${videoError ? "hidden" : ""}`}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3205619-hd_1920_1080_25fps-JaEFbuKxl5FhZPKhQwMgtiAkHocdgp.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta videos HTML5.
          </video>

          {/* Overlay para mejorar la legibilidad del contenido */}
          <div className="absolute inset-0 bg-blue-950/70 z-20"></div>
        </div>

        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center gap-4 relative z-30">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Pulso%20360.jpg-teh3uboCgOvVBqpcc1z95RCmJBEECF.jpeg"
            alt="Pulso 360 Logo"
            width={120}
            height={120}
            className="mb-6"
          />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            Conoce la opinión pública con <span className="text-blue-400">Pulso 360</span>
          </h1>
          <p className="max-w-[700px] text-gray-300 md:text-xl">
            Plataforma líder en encuestas digitales y análisis de datos para entender las tendencias y opiniones que
            importan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Ver encuestas activas
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Conocer más
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Surveys */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Encuestas Destacadas</h2>
            <Link href="/encuestas" className="text-blue-600 hover:text-blue-800 flex items-center">
              Ver todas las encuestas
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Percepción Ciudadana 2024",
                description: "Comparte tu opinión sobre los servicios públicos y calidad de vida en tu ciudad.",
                participants: 1245,
                days: 5,
              },
              {
                title: "Hábitos de Consumo Digital",
                description: "Ayúdanos a entender cómo utilizas las plataformas digitales en tu día a día.",
                participants: 879,
                days: 8,
              },
              {
                title: "Tendencias Laborales Post-Pandemia",
                description: "¿Cómo ha cambiado tu experiencia laboral en los últimos años?",
                participants: 2156,
                days: 3,
              },
            ].map((survey, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-blue-100 hover:shadow-md transition-all"
              >
                <CardHeader>
                  <CardTitle>{survey.title}</CardTitle>
                  <CardDescription>{survey.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4 text-blue-500" />
                      <span>{survey.participants} participantes</span>
                    </div>
                    <div>
                      <span>Cierra en {survey.days} días</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">Participar ahora</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Results */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Resultados Recientes</h2>
            <Link href="/resultados" className="text-blue-600 hover:text-blue-800 flex items-center">
              Ver todos los resultados
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Preferencias Electorales 2023",
                description: "Análisis de intención de voto y percepción de candidatos a nivel nacional.",
                date: "Diciembre 2023",
              },
              {
                title: "Uso de Redes Sociales",
                description: "Patrones de uso y preferencias en plataformas digitales por grupos demográficos.",
                date: "Octubre 2023",
              },
            ].map((result, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-blue-100 hover:shadow-md transition-all"
              >
                <CardHeader>
                  <CardTitle>{result.title}</CardTitle>
                  <CardDescription>{result.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
                    <BarChart2 className="h-16 w-16 text-blue-300" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-sm text-gray-500">{result.date}</span>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Ver análisis completo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">¿Por qué elegir Pulso 360?</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Nuestra metodología y experiencia nos permite ofrecer resultados precisos y análisis profundos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-blue-500" />,
                title: "Amplio Alcance",
                description: "Llegamos a diversos segmentos demográficos para obtener muestras representativas.",
              },
              {
                icon: <BarChart2 className="h-10 w-10 text-blue-500" />,
                title: "Análisis Avanzado",
                description: "Utilizamos técnicas estadísticas avanzadas para interpretar los datos con precisión.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-blue-500" />,
                title: "Insights Accionables",
                description: "Convertimos datos en recomendaciones claras para la toma de decisiones.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-md transition-all"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-16 bg-blue-900 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitas una encuesta personalizada?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Diseñamos encuestas a medida para empresas, organizaciones y proyectos de investigación.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            Contáctanos
          </Button>
        </div>
      </section>
    </div>
  )
}
