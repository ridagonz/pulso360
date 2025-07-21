"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ChevronLeft, ChevronRight, Clock, Users, AlertCircle, CheckCircle2 } from "lucide-react"

export default function EncuestaPage({ params }: { params: { id: string } }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [completed, setCompleted] = useState(false)
  const totalSteps = 5

  // Datos de ejemplo para la encuesta
  const encuestaData = {
    id: params.id,
    title: "Percepción Ciudadana 2024",
    description:
      "Esta encuesta busca entender la percepción de los ciudadanos sobre los servicios públicos y la calidad de vida en su ciudad.",
    estimatedTime: "5-7 minutos",
    participants: 1245,
    category: "Sociedad",
    questions: [
      {
        id: 1,
        type: "single",
        question: "¿Cómo calificaría la calidad de los servicios públicos en su ciudad?",
        options: ["Excelente", "Buena", "Regular", "Mala", "Muy mala"],
      },
      {
        id: 2,
        type: "multiple",
        question:
          "¿Cuáles de los siguientes servicios públicos considera que necesitan mejoras urgentes? (Seleccione todos los que apliquen)",
        options: [
          "Transporte público",
          "Recolección de basura",
          "Alumbrado público",
          "Seguridad",
          "Espacios recreativos",
          "Servicios de salud",
        ],
      },
      {
        id: 3,
        type: "scale",
        question: "En una escala del 1 al 10, ¿qué tan satisfecho está con la calidad de vida en su ciudad?",
        min: 1,
        max: 10,
      },
      {
        id: 4,
        type: "text",
        question: "¿Qué cambios o mejoras sugeriría para aumentar la calidad de vida en su ciudad?",
      },
      {
        id: 5,
        type: "single",
        question:
          "¿Considera que las autoridades locales están abordando adecuadamente las necesidades de la comunidad?",
        options: ["Definitivamente sí", "Probablemente sí", "Neutral", "Probablemente no", "Definitivamente no"],
      },
    ],
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    } else {
      setCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = () => {
    // Aquí iría la lógica para enviar las respuestas
    setCompleted(true)
  }

  const currentQuestion = encuestaData.questions[currentStep - 1]
  const progress = (currentStep / totalSteps) * 100

  if (completed) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col items-center">
        <Card className="w-full max-w-3xl border-2 border-green-100">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 bg-green-100 p-3 rounded-full">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <CardTitle className="text-2xl md:text-3xl">¡Gracias por participar!</CardTitle>
            <CardDescription className="text-base mt-2">
              Tu opinión es muy valiosa para nosotros y contribuye a entender mejor la percepción ciudadana.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              Los resultados de esta encuesta serán analizados y publicados en nuestra sección de resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={() => (window.location.href = "/encuestas")}>
                Ver más encuestas
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => (window.location.href = "/")}>
                Volver al inicio
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      {/* Encabezado de la encuesta */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{encuestaData.title}</h1>
            <p className="text-gray-600 mt-1">{encuestaData.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="mr-1 h-4 w-4 text-blue-500" />
              <span>{encuestaData.estimatedTime}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="mr-1 h-4 w-4 text-blue-500" />
              <span>{encuestaData.participants} participantes</span>
            </div>
            <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
              {encuestaData.category}
            </span>
          </div>
        </div>
      </div>

      {/* Progreso de la encuesta */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progreso</span>
          <span className="text-sm font-medium text-gray-700">
            {currentStep} de {totalSteps}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Pregunta actual */}
      <Card className="border-2 border-gray-100 mb-8">
        <CardHeader>
          <CardTitle className="text-xl">
            {currentStep}. {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentQuestion.type === "single" && (
            <RadioGroup defaultValue="">
              {currentQuestion.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 py-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {currentQuestion.type === "multiple" && (
            <div className="space-y-3">
              {currentQuestion.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </div>
          )}

          {currentQuestion.type === "scale" && (
            <div className="py-6 px-4">
              <Slider defaultValue={[5]} max={currentQuestion.max} min={currentQuestion.min} step={1} />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>Nada satisfecho</span>
                <span>Muy satisfecho</span>
              </div>
            </div>
          )}

          {currentQuestion.type === "text" && (
            <Textarea placeholder="Escribe tu respuesta aquí..." className="min-h-[150px]" />
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1} className="flex items-center">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Anterior
          </Button>
          {currentStep < totalSteps ? (
            <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 flex items-center">
              Siguiente
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
              Enviar encuesta
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Notas e información adicional */}
      <div className="flex items-start p-4 bg-blue-50 rounded-lg">
        <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-blue-800">Información importante</h3>
          <p className="text-sm text-blue-700 mt-1">
            Todas tus respuestas son anónimas y serán utilizadas únicamente con fines estadísticos. Puedes guardar tu
            progreso y continuar más tarde si lo necesitas.
          </p>
        </div>
      </div>
    </div>
  )
}
