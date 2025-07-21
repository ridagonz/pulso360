import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Calendar, Filter } from "lucide-react"

export default function EncuestasPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Encuestas</h1>
          <p className="text-gray-600 mt-1">Participa en nuestras encuestas y haz que tu opinión cuente</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            Filtrar
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            Ordenar por: Recientes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="activas" className="mb-8">
        <TabsList className="grid w-full md:w-auto grid-cols-3">
          <TabsTrigger value="activas">Activas</TabsTrigger>
          <TabsTrigger value="proximas">Próximas</TabsTrigger>
          <TabsTrigger value="pasadas">Pasadas</TabsTrigger>
        </TabsList>
        <TabsContent value="activas" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Percepción Ciudadana 2024",
                description: "Comparte tu opinión sobre los servicios públicos y calidad de vida en tu ciudad.",
                category: "Sociedad",
                participants: 1245,
                days: 5,
              },
              {
                title: "Hábitos de Consumo Digital",
                description: "Ayúdanos a entender cómo utilizas las plataformas digitales en tu día a día.",
                category: "Tecnología",
                participants: 879,
                days: 8,
              },
              {
                title: "Tendencias Laborales Post-Pandemia",
                description: "¿Cómo ha cambiado tu experiencia laboral en los últimos años?",
                category: "Economía",
                participants: 2156,
                days: 3,
              },
              {
                title: "Preferencias de Entretenimiento",
                description: "Cuéntanos sobre tus hábitos de consumo de contenido y entretenimiento.",
                category: "Cultura",
                participants: 567,
                days: 12,
              },
              {
                title: "Movilidad Urbana",
                description: "Evaluación de los sistemas de transporte y movilidad en las principales ciudades.",
                category: "Urbanismo",
                participants: 1023,
                days: 7,
              },
              {
                title: "Educación Virtual",
                description: "Experiencias y desafíos en la educación a distancia y virtual.",
                category: "Educación",
                participants: 1578,
                days: 9,
              },
            ].map((survey, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-blue-100 hover:shadow-md transition-all"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{survey.title}</CardTitle>
                      <CardDescription className="mt-1">{survey.description}</CardDescription>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {survey.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4 text-blue-500" />
                      <span>{survey.participants} participantes</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4 text-blue-500" />
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
        </TabsContent>
        <TabsContent value="proximas">
          <div className="text-center py-12">
            <p className="text-gray-500">Próximamente nuevas encuestas. ¡Mantente atento!</p>
          </div>
        </TabsContent>
        <TabsContent value="pasadas">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hábitos de Lectura 2023",
                description: "Análisis de los hábitos de lectura y consumo de libros.",
                category: "Cultura",
                participants: 1876,
                date: "Diciembre 2023",
              },
              {
                title: "Satisfacción con Servicios de Streaming",
                description: "Evaluación de las plataformas de streaming más populares.",
                category: "Entretenimiento",
                participants: 2341,
                date: "Noviembre 2023",
              },
              {
                title: "Tendencias Alimentarias",
                description: "Preferencias y hábitos alimenticios de la población.",
                category: "Salud",
                participants: 1543,
                date: "Octubre 2023",
              },
            ].map((survey, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-blue-100 hover:shadow-md transition-all opacity-75"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{survey.title}</CardTitle>
                      <CardDescription className="mt-1">{survey.description}</CardDescription>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                      {survey.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4 text-gray-500" />
                      <span>{survey.participants} participantes</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4 text-gray-500" />
                      <span>{survey.date}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver resultados
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
