import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart2, PieChart, LineChart, Download, Share2 } from "lucide-react"

export default function ResultadosPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resultados y Análisis</h1>
          <p className="text-gray-600 mt-1">Explora los resultados de nuestras encuestas y estudios</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Categorías
          </Button>
          <Button variant="outline" size="sm">
            Año: 2024
          </Button>
        </div>
      </div>

      <Tabs defaultValue="recientes" className="mb-8">
        <TabsList className="grid w-full md:w-auto grid-cols-3">
          <TabsTrigger value="recientes">Recientes</TabsTrigger>
          <TabsTrigger value="destacados">Destacados</TabsTrigger>
          <TabsTrigger value="tematicos">Temáticos</TabsTrigger>
        </TabsList>
        <TabsContent value="recientes" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Preferencias Electorales 2023",
                description: "Análisis de intención de voto y percepción de candidatos a nivel nacional.",
                category: "Política",
                date: "Diciembre 2023",
                chartType: "bar",
              },
              {
                title: "Uso de Redes Sociales",
                description: "Patrones de uso y preferencias en plataformas digitales por grupos demográficos.",
                category: "Tecnología",
                date: "Octubre 2023",
                chartType: "pie",
              },
              {
                title: "Percepción de Seguridad",
                description: "Estudio sobre la percepción ciudadana de seguridad en diferentes zonas urbanas.",
                category: "Sociedad",
                date: "Septiembre 2023",
                chartType: "line",
              },
              {
                title: "Hábitos de Consumo Sostenible",
                description: "Análisis de comportamientos y actitudes hacia productos y servicios sostenibles.",
                category: "Medio Ambiente",
                date: "Agosto 2023",
                chartType: "bar",
              },
            ].map((result, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-blue-100 hover:shadow-md transition-all"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{result.title}</CardTitle>
                      <CardDescription className="mt-1">{result.description}</CardDescription>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {result.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center">
                    {result.chartType === "bar" && <BarChart2 className="h-16 w-16 text-blue-300" />}
                    {result.chartType === "pie" && <PieChart className="h-16 w-16 text-blue-300" />}
                    {result.chartType === "line" && <LineChart className="h-16 w-16 text-blue-300" />}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-sm text-gray-500">{result.date}</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      PDF
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Share2 className="h-4 w-4" />
                      Compartir
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="destacados">
          <div className="grid grid-cols-1 gap-8">
            <Card className="border-2 border-blue-100 hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">Estudio Anual: Tendencias Digitales 2023</CardTitle>
                    <CardDescription className="mt-1">
                      Análisis completo de las tendencias digitales, comportamientos en línea y adopción tecnológica en
                      la región.
                    </CardDescription>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    Informe Especial
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-100 rounded-md p-4 flex flex-col items-center">
                    <BarChart2 className="h-10 w-10 text-blue-500 mb-2" />
                    <h3 className="font-medium">Uso de Plataformas</h3>
                  </div>
                  <div className="bg-gray-100 rounded-md p-4 flex flex-col items-center">
                    <PieChart className="h-10 w-10 text-blue-500 mb-2" />
                    <h3 className="font-medium">Demografía Digital</h3>
                  </div>
                  <div className="bg-gray-100 rounded-md p-4 flex flex-col items-center">
                    <LineChart className="h-10 w-10 text-blue-500 mb-2" />
                    <h3 className="font-medium">Tendencias Temporales</h3>
                  </div>
                </div>
                <p className="text-gray-600">
                  Este estudio anual recopila datos de más de 10,000 participantes para ofrecer una visión completa del
                  panorama digital actual.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-sm text-gray-500">Diciembre 2023</span>
                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700">Ver informe completo</Button>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    Descargar
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="tematicos">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Tecnología",
                description: "Estudios sobre adopción tecnológica y tendencias digitales",
                count: 12,
              },
              {
                title: "Política",
                description: "Análisis de opinión pública y tendencias electorales",
                count: 8,
              },
              {
                title: "Economía",
                description: "Percepción económica y hábitos de consumo",
                count: 10,
              },
              {
                title: "Sociedad",
                description: "Estudios sobre temas sociales y calidad de vida",
                count: 15,
              },
              {
                title: "Medio Ambiente",
                description: "Conciencia ambiental y sostenibilidad",
                count: 6,
              },
              {
                title: "Educación",
                description: "Análisis del sistema educativo y tendencias",
                count: 9,
              },
            ].map((category, index) => (
              <Card key={index} className="border hover:border-blue-200 hover:shadow-sm transition-all">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{category.count} estudios disponibles</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver estudios
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
