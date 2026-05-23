"use client"

import { useState } from "react"
import { Briefcase, Mic, Camera, Utensils, Shield, Stethoscope, Truck, Headphones, ChevronDown, ChevronUp } from "lucide-react"

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
      },
      {
        nombre: "Periodista de campo",
        descripcion:
          "Entrevista a jugadores, tecnicos y hinchas antes y despues de los partidos. Trabaja en el estadio, en el hotel de los equipos y en la zona mixta.",
        habilidades: ["Entrevistas", "Idiomas", "Adaptabilidad"],
      },
      {
        nombre: "Community manager",
        descripcion:
          "Maneja las redes sociales del evento: publica actualizaciones, fotos, videos y responde a los hinchas en todo el mundo en tiempo real.",
        habilidades: ["Redes sociales", "Redaccion rapida", "Creatividad digital"],
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
      },
      {
        nombre: "Fotografo de prensa",
        descripcion:
          "Captura los momentos mas importantes de los partidos. Sus fotos aparecen en diarios y revistas de todo el mundo. Un buen ojo y mucha paciencia son esenciales.",
        habilidades: ["Fotografia", "Rapidez de reflejos", "Edicion de imagen"],
      },
      {
        nombre: "Voluntario del evento",
        descripcion:
          "El ejercito invisible que hace funcionar cada Mundial. Guian al publico, dan informacion, ayudan a personas con discapacidad, reparten materiales. Son la cara amigable del evento.",
        habilidades: ["Atencion al publico", "Trabajo en equipo", "Idiomas basicos"],
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
      },
      {
        nombre: "Vendedor ambulante",
        descripcion:
          "Recorre las tribunas vendiendo bebidas, snacks y recuerdos. Tiene contacto directo con los hinchas de todo el mundo y necesita buena disposicion y energia.",
        habilidades: ["Atencion al publico", "Calculo basico", "Resistencia fisica"],
      },
      {
        nombre: "Cocinero de delegaciones",
        descripcion:
          "Prepara la comida de los jugadores y cuerpos tecnicos. Cada seleccion tiene sus necesidades nutricionales especificas. Un equipo medico y nutricional trabaja junto.",
        habilidades: ["Nutricion deportiva", "Cocina internacional", "Confidencialidad"],
      },
    ],
  },
  {
    area: "Seguridad y Salud",
    color: "bg-accent",
    textColor: "text-accent-foreground",
    icon: Shield,
    roles: [
      {
        nombre: "Personal de seguridad",
        descripcion:
          "Protege a jugadores, arbitros y publico. Revisa entradas y accesos, controla multitudes y actua ante emergencias. Requiere entrenamiento especifico.",
        habilidades: ["Gestion de multitudes", "Comunicacion", "Calma bajo presion"],
      },
      {
        nombre: "Kinesiologo y medico deportivo",
        descripcion:
          "Atiende a los jugadores durante y despues de los partidos. Trata lesiones en tiempo real y trabaja para que los atletas se recuperen lo antes posible.",
        habilidades: ["Kinesiologia", "Emergencias", "Trabajo en equipo medico"],
      },
    ],
  },
  {
    area: "Logistica y Organizacion",
    color: "bg-foreground",
    textColor: "text-primary-foreground",
    icon: Truck,
    roles: [
      {
        nombre: "Coordinador de traslados",
        descripcion:
          "Organiza como llegan y se van los equipos, arbitros y autoridades. Gestiona buses, autos y micros. Una logistica que involucra miles de personas.",
        habilidades: ["Organizacion", "Gestion del tiempo", "Comunicacion"],
      },
      {
        nombre: "Interprete de idiomas",
        descripcion:
          "Traduce en tiempo real durante conferencias de prensa, reuniones tecnicas y situaciones de emergencia. En un Mundial conviven docenas de idiomas.",
        habilidades: ["Idiomas (ingles, frances, espanol, etc.)", "Rapidez mental", "Concentracion"],
      },
      {
        nombre: "Responsable de accesibilidad",
        descripcion:
          "Garantiza que todas las personas con discapacidad puedan disfrutar del evento. Coordina rampas, asientos especiales, audiodescripcion y lenguaje de senas.",
        habilidades: ["Conocimiento de accesibilidad", "Empatia", "Resolucion de problemas"],
      },
    ],
  },
]

export default function EmpleosSection() {
  const [areaActiva, setAreaActiva] = useState<string | null>(null)
  const [rolSeleccionado, setRolSeleccionado] = useState<string | null>(null)

  return (
    <section className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-start gap-4">
          <div className="rounded-2xl bg-foreground p-4">
            <Briefcase size={32} className="text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-foreground md:text-5xl">Empleos del Mundial</h2>
            <p className="mt-2 text-lg text-muted-foreground text-pretty">
              Un Mundial no lo hacen solo los jugadores. Detras del escenario trabajan miles de personas con los 
              trabajos mas variados. Descubrimos que roles existen y cuales nos interesan.
            </p>
          </div>
        </div>

        {/* Dato importante */}
        <div className="mb-10 rounded-3xl bg-primary p-6 text-primary-foreground">
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-black">+100.000</div>
              <div className="text-sm opacity-80 font-semibold">empleos directos generados</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" aria-hidden="true" />
            <div className="text-center">
              <div className="text-4xl font-black">3</div>
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
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {area.roles.map((rol) => (
                        <div
                          key={rol.nombre}
                          className="rounded-2xl border border-border bg-muted/40 p-5 hover:border-primary hover:shadow-md transition-all cursor-pointer"
                          onClick={() =>
                            setRolSeleccionado(
                              rolSeleccionado === rol.nombre ? null : rol.nombre
                            )
                          }
                        >
                          <h4 className="mb-2 text-base font-black text-foreground">{rol.nombre}</h4>
                          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{rol.descripcion}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {rol.habilidades.map((h) => (
                              <span
                                key={h}
                                className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary"
                              >
                                {h}
                              </span>
                            ))}
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
          <h3 className="mb-3 text-2xl font-black">Actividad: Yo trabajo en el Mundial</h3>
          <p className="mb-6 text-lg text-success-foreground/85 leading-relaxed text-pretty">
            Cada participante elige el rol que mas le gusta o con el que mas se identifica. Luego preparamos 
            una presentacion breve: quien soy, que hago en el Mundial y por que me eligieron para ese trabajo.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/20 p-5">
              <div className="text-2xl font-black mb-2">1</div>
              <p className="font-semibold text-sm">Elegimos el rol que mas nos gusta de toda la lista</p>
            </div>
            <div className="rounded-2xl bg-white/20 p-5">
              <div className="text-2xl font-black mb-2">2</div>
              <p className="font-semibold text-sm">Preparamos como presentarnos: nombre, rol y una habilidad que tenemos</p>
            </div>
            <div className="rounded-2xl bg-white/20 p-5">
              <div className="text-2xl font-black mb-2">3</div>
              <p className="font-semibold text-sm">Presentamos al grupo como si fuera una entrevista de trabajo real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
