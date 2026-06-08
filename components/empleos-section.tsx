"use client"

import { useState } from "react"
import Image from "next/image"
import { Briefcase, Mic, Camera, Utensils, Stethoscope, Headphones, ChevronDown, ChevronUp } from "lucide-react"

const EMPLEOS = [
  {
    area: "Comunicacion y Medios",
    color: "bg-primary",
    textColor: "text-primary-foreground",
    icon: Mic,
    roles: [
      {
        nombre: "Comentarista deportivo",
        descripcion:
          "Narra los partidos en vivo por television o radio. Debe conocer las reglas del futbol, los jugadores, sus historias y saber hablar en publico con claridad y emocion.",
        habilidades: ["Comunicacion oral", "Conocimiento del deporte", "Trabajo bajo presion"],
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/relatores%20evolutiva-VgN1PRbtRRCpOdYANGjYaMXfjVYPfC.jpeg",
      },
      {
        nombre: "Periodista de campo",
        descripcion:
          "Entrevista a jugadores, tecnicos y hinchas antes y despues de los partidos. Trabaja en el estadio, en el hotel de los equipos y en la zona mixta.",
        habilidades: ["Entrevistas", "Idiomas", "Adaptabilidad"],
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comentariasta%20de%20campo-7bBhDwlFANt5wf6ivj7uYbUdIhVnP6.webp",
      },
    ],
  },
  {
    area: "Produccion del Evento",
    color: "bg-success",
    textColor: "text-success-foreground",
    icon: Camera,
    roles: [
      {
        nombre: "Director tecnico del estadio",
        descripcion:
          "Coordina todo lo que pasa dentro del estadio: las camaras, las pantallas gigantes, la musica, los efectos de luz y el funcionamiento general del espectaculo.",
        habilidades: ["Coordinacion de equipos", "Tecnologia", "Planificacion"],
        imagen: "https://images.unsplash.com/photo-1536240478035-b44f8c34cbbb?w=600&q=80",
      },
      {
        nombre: "Fotografo de prensa",
        descripcion:
          "Captura los momentos mas importantes de los partidos. Sus fotos aparecen en diarios y revistas de todo el mundo. Un buen ojo y mucha paciencia son esenciales.",
        habilidades: ["Fotografia", "Rapidez de reflejos", "Edicion de imagen"],
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/camarografa%20evolutiva-CRSg0HshR03geD672prlnN4f8Z7rEr.jpeg",
      },
    ],
  },
  {
    area: "Gastronomia y Servicios",
    color: "bg-creative",
    textColor: "text-creative-foreground",
    icon: Utensils,
    roles: [
      {
        nombre: "Cocinero de estadio",
        descripcion:
          "Prepara comida para miles de personas en pocas horas. El trabajo empieza horas antes de cada partido y requiere organizacion, velocidad y trabajo en equipo.",
        habilidades: ["Cocina en volumen", "Higiene alimentaria", "Trabajo bajo presion"],
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cocinero%20evolutiva-4RyQh9RB27lAM9db2VZtkwqvsQug7I.jpeg",
      },
      {
        nombre: "Vendedor ambulante",
        descripcion:
          "Recorre las tribunas vendiendo bebidas, snacks y recuerdos. Tiene contacto directo con los hinchas de todo el mundo y necesita buena disposicion y energia.",
        habilidades: ["Atencion al publico", "Calculo basico", "Resistencia fisica"],
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pepsi%20vendedor%20ambulante-epi1kjjvjYYe1TMyww06wfx7FqBEml.png",
      },
    ],
  },
]

export default function EmpleosSection() {
  const [areaActiva, setAreaActiva] = useState<string | null>(null)
  const [rolSeleccionado, setRolSeleccionado] = useState<string | null>(null)
  const [imagenAmpliada, setImagenAmpliada] = useState<string | null>(null)

  return (
    <section className="min-h-screen bg-background px-6 py-12 section-enter">
      <div className="mx-auto max-w-7xl">

        {/* Imagen principal */}
        <div className="mb-10 rounded-3xl overflow-hidden h-80 md:h-96 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80"
            alt="Estadio con trabajadores y vista interna"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
          <div className="sr-only">
            Imagen de un estadio lleno de personas trabajando en diferentes roles durante un evento deportivo.
          </div>
        </div>

        {/* Header con emoji al lado */}
        <div className="mb-10 flex items-start gap-4">
          <p className="text-8xl leading-none flex-shrink-0" role="img" aria-label="Ícono de Empleos">💼</p>
          <div>
            <h2 className="text-5xl font-black text-foreground md:text-6xl mb-3">Empleos del Mundial</h2>
            <p className="text-accessible-lg text-foreground/85 text-pretty leading-relaxed font-semibold max-w-3xl">
              Un Mundial no lo hacen solo los jugadores. Detrás del escenario trabajan miles de personas con los trabajos más variados. Descubrimos qué roles existen y cuáles nos interesan.
            </p>
          </div>
        </div>

        {/* Dato importante */}
        <div className="mb-10 rounded-3xl bg-primary p-8 text-primary-foreground">
          <div className="flex flex-wrap items-center gap-8">
            <div className="text-center">
              <div className="text-accessible-4xl font-black">+100.000</div>
              <div className="text-accessible-base opacity-90 font-semibold">empleos directos generados</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/30" aria-hidden="true" />
            <div className="text-center">
              <div className="text-accessible-4xl font-black">3</div>
              <div className="text-sm opacity-80 font-semibold">paises sede en 2026</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" aria-hidden="true" />
            <div className="flex-1">
              <p className="text-sm font-semibold leading-relaxed opacity-90">
                El Mundial 2026 generara empleos en gastronomia, comunicacion, logistica, seguridad, 
                salud, arte, tecnologia y mucho mas. El futbol necesita de todos los talentos.
              </p>
            </div>
          </div>
        </div>

        {/* Areas de trabajo */}
        <div className="space-y-3">
          {EMPLEOS.map((area) => {
            const Icon = area.icon
            const abierta = areaActiva === area.area
            return (
              <div key={area.area} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <button
                  onClick={() => setAreaActiva(abierta ? null : area.area)}
                  className="flex w-full items-center gap-4 p-6 text-left hover:bg-muted/50 transition-all"
                  aria-expanded={abierta}
                >
                  <div className={`rounded-xl p-3 shrink-0 ${area.color} ${area.textColor}`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-black text-foreground">{area.area}</div>
                    <div className="text-sm text-muted-foreground">{area.roles.length} roles para explorar</div>
                  </div>
                  {abierta ? (
                    <ChevronUp size={20} className="text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-muted-foreground shrink-0" />
                  )}
                </button>

                {abierta && (
                  <div className="border-t border-border px-6 pb-6 pt-4">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {area.roles.map((rol) => (
                        <div
                          key={rol.nombre}
                          className="rounded-2xl border-2 border-border overflow-hidden hover:border-primary hover:shadow-lg transition-all cursor-pointer bg-muted/40"
                          onClick={() =>
                            setRolSeleccionado(
                              rolSeleccionado === rol.nombre ? null : rol.nombre
                            )
                          }
                        >
                          {/* Imagen */}
                          <div 
                            className="relative w-full h-64 overflow-hidden bg-black/10 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={(e) => {
                              e.stopPropagation()
                              setImagenAmpliada(rol.imagen)
                            }}
                          >
                            <Image
                              src={rol.imagen}
                              alt={rol.nombre}
                              width={400}
                              height={300}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Contenido */}
                          <div className="p-6">
                            <h4 className="mb-3 text-xl font-black text-foreground">{rol.nombre}</h4>
                            <div className="flex flex-wrap gap-2">
                              {rol.habilidades.map((h) => (
                                <span
                                  key={h}
                                  className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
                                >
                                  {h}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Actividad: Yo trabajo en el Mundial */}
        <div className="mt-12 rounded-3xl bg-success p-8 text-success-foreground">
          <div className="mb-1 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            Actividad de cierre
          </div>
          <h3 className="mt-3 mb-3 text-3xl font-black">Yo trabajo en el Mundial</h3>
          <p className="mb-7 text-base text-success-foreground/85 leading-relaxed text-pretty max-w-2xl">
            Cada participante elige el rol que mas le gusta o con el que mas se identifica.
            Luego preparamos una presentacion breve: quien soy, que hago en el Mundial
            y por que me eligieron para ese trabajo.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/20 p-6">
              <div className="text-3xl font-black mb-3">1</div>
              <p className="font-bold text-base leading-snug">Elegimos el rol que mas nos gusta de toda la lista</p>
            </div>
            <div className="rounded-2xl bg-white/20 p-6">
              <div className="text-3xl font-black mb-3">2</div>
              <p className="font-bold text-base leading-snug">Preparamos como presentarnos: nombre, rol y una habilidad que tenemos</p>
            </div>
            <div className="rounded-2xl bg-white/20 p-6">
              <div className="text-3xl font-black mb-3">3</div>
              <p className="font-bold text-base leading-snug">Presentamos al grupo como si fuera una entrevista de trabajo real</p>
            </div>
          </div>
        </div>

        {/* Modal para imagen ampliada */}
        {imagenAmpliada && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setImagenAmpliada(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Imagen ampliada"
          >
            <div 
              className="relative w-full max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setImagenAmpliada(null)}
                className="absolute top-4 right-4 bg-background/90 hover:bg-background text-foreground rounded-full p-2 z-10 transition-colors"
                aria-label="Cerrar imagen ampliada"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={imagenAmpliada}
                alt="Imagen ampliada"
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
