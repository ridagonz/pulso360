import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, BarChart2, Award } from "lucide-react"

export default function NosotrosPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Pulso 360</h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          Somos una empresa especializada en encuestas digitales y análisis de datos, comprometida con proporcionar
          insights valiosos sobre la opinión pública.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold">Misión</h2>
            </div>
            <p className="text-gray-700">
              Proporcionar información precisa y análisis profundos sobre la opinión pública a través de metodologías
              innovadoras de recolección y análisis de datos, ayudando a organizaciones y comunidades a tomar decisiones
              informadas.
            </p>
          </CardContent>
        </Card>
        <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold">Visión</h2>
            </div>
            <p className="text-gray-700">
              Ser la plataforma líder en la región para la recolección y análisis de opinión pública, reconocida por la
              precisión de nuestros datos, la profundidad de nuestros análisis y nuestro compromiso con la transparencia
              y la ética en la investigación.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Award className="h-10 w-10 text-blue-600" />,
              title: "Excelencia",
              description: "Nos esforzamos por la máxima calidad en cada encuesta y análisis que realizamos.",
            },
            {
              icon: <Users className="h-10 w-10 text-blue-600" />,
              title: "Inclusión",
              description: "Buscamos representar todas las voces y perspectivas en nuestras investigaciones.",
            },
            {
              icon: <BarChart2 className="h-10 w-10 text-blue-600" />,
              title: "Precisión",
              description: "Nos comprometemos con la exactitud y el rigor metodológico en nuestro trabajo.",
            },
            {
              icon: <Target className="h-10 w-10 text-blue-600" />,
              title: "Innovación",
              description: "Constantemente buscamos nuevas formas de mejorar nuestros métodos y análisis.",
            },
          ].map((value, index) => (
            <Card key={index} className="border hover:border-blue-200 hover:shadow-sm transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Guillermo Méndez",
              role: "CEO",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Andrés Méndez",
              role: "Director Ejecutivo",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Daniel González",
              role: "Analista de Datos",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* History */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Nuestra Historia</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4">
            Pulso 360 nació de la necesidad de proporcionar datos precisos y análisis profundos sobre la opinión pública
            en un mundo cada vez más digital. Fundada en 2023, nuestra empresa ha crecido rápidamente, estableciéndose
            como un referente en el campo de las encuestas digitales.
          </p>
          <p className="text-gray-700">
            Desde nuestros inicios, hemos estado comprometidos con la innovación metodológica y la ética en la
            investigación, valores que continúan guiando nuestro trabajo diario mientras expandimos nuestros servicios y
            alcance.
          </p>
        </div>
      </div>
    </div>
  )
}
