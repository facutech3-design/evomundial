"use client"

import { useState } from "react"
import Image from "next/image"
import { Accessibility, ChevronDown, ChevronUp, Users, Clock, Shield } from "lucide-react"
import { BotonSeccion } from "@/components/boton-seccion"

type Nivel = "Todos" | "Sentado" | "De pie" | "Mixto"

const ACTIVIDADES = [
  {
    id: 1,
    nombre: "Penal sentado",
    descripcion:
      "Desde una silla, cada participante lanza una pelota blanda hacia una meta (una caja, una botella, una tela). El portero también esta sentado. Todos tienen el mismo punto de partida.",
    nivel: "Sentado" as Nivel,
    participantes: "2 o mas",
    duracion: "10-20 min",
    materiales: ["Sillas", "Pelota blanda o globo", "Meta (caja o botella)"],
    adaptaciones: [
      "Usar pelota de foam o globo para reducir el impacto",
      "Acercar o alejar la meta segun la habilidad",
      "Permitir lanzar con ambas manos",
    ],
    objetivos: ["Coordinacion", "Concentracion", "Diversión grupal"],
    color: "border-primary bg-primary/5",
    badge: "bg-primary text-primary-foreground",
  },
  {
    id: 2,
    nombre: "Pase en circulo",
    descripcion:
      "El grupo se sienta en circulo. Se pasa una pelota usando manos, pies o cualquier parte del cuerpo. El objetivo es no dejar caer la pelota. Se puede hacer en silencio, con musica o con consignas.",
    nivel: "Sentado" as Nivel,
    participantes: "4 o mas",
    duracion: "10-15 min",
    materiales: ["Pelota blanda, globo o bolsa de tela", "Sillas en circulo", "Musica opcional"],
    adaptaciones: [
      "Usar globo inflado (mas lento y facil de controlar)",
      "Cambiar la regla: solo con la mano izquierda, o solo con la cabeza",
      "Agregar consignas: pasar y decir el nombre del que recibe",
    ],
    objetivos: ["Trabajo en equipo", "Atencion", "Vinculos grupales"],
    color: "border-success bg-success/5",
    badge: "bg-success text-success-foreground",
  },
  {
    id: 3,
    nombre: "Danza de las naciones",
    descripcion:
      "Exploramos el movimiento desde el ritmo de distintos paises. Cumbia (Colombia), samba (Brasil), tango (Argentina), tambores (Nigeria), danza contemporanea (Francia). Cada quien mueve lo que puede: manos, cabeza, torso.",
    nivel: "Mixto" as Nivel,
    participantes: "Todos",
    duracion: "20-30 min",
    materiales: ["Parlante con musica", "Playlist de musicas del mundo", "Espacio libre"],
    adaptaciones: [
      "Sentado o parado: el movimiento es libre",
      "Proponer consignas: mover solo los brazos, solo la cabeza",
      "Puede ser individual o en parejas/grupos",
    ],
    objetivos: ["Expresion corporal", "Cultura musical", "Alegria y liberacion"],
    color: "border-foreground bg-foreground/5",
    badge: "bg-foreground text-primary-foreground",
  },
]

const NIVELES: Nivel[] = ["Todos", "Sentado", "De pie", "Mixto"]

export default function ActividadesSection() {
  const [filtro, setFiltro] = useState<Nivel>("Todos")
  const [expandido, setExpandido] = useState<number | null>(null)
  const [imagenAmpliada, setImagenAmpliada] = useState<string | null>(null)

  const imagenesActividades: Record<number, string> = {
    1: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/penal%20sentado0-ZvBKXeNA9uC7yBjUnbBPPjixJWgZaT.png",
    2: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pase%20en%20circulo-aecu8RcYrrwGenYJFcmJf3sZu3TU7F.png",
    3: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/danza2-vDR3enWCLVBjA0bfWPhKI0PtSR0hfU.png",
  }

  const actsFiltradas =
    filtro === "Todos" ? ACTIVIDADES : ACTIVIDADES.filter((a) => a.nivel === filtro)

  return (
    <section className="min-h-screen bg-background px-6 py-12 section-enter">
      <div className="mx-auto max-w-7xl">

        {/* Imagen principal */}
        <div className="mb-10 rounded-3xl overflow-hidden h-80 md:h-96 shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disca%20basq-1ufRVQTjGAGvZpmtA9WHmQ9h8EAzCa.jpg"
            alt="Persona en silla de ruedas jugando basquetbol adaptado"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
          <div className="sr-only">
            Imagen de personas realizando actividades deportivas adaptadas.
          </div>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="w-24 h-24 mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/baloncesto%20adaptado%20ara-SP5IbDXiqOzwg8ItiFEJfsI8R1inMG.png"
              alt="Ícono de Actividades Adaptadas"
              width={96}
              height={96}
              className="w-24 h-24 object-contain"
            />
          </div>
          <h2 className="text-5xl font-black text-foreground md:text-6xl mb-3">Actividades Adaptadas</h2>
          <p className="text-accessible-lg text-foreground/85 text-pretty leading-relaxed font-semibold max-w-3xl">
            El deporte es para todos los cuerpos. Cada actividad está pensada para que todos puedan participar, cada uno a su manera. No hay forma incorrecta de jugar.
          </p>
          
          {/* Botón para escuchar sección */}
          <div className="mt-4">
            <BotonSeccion 
              texto="Actividades Adaptadas. Juegos y movimiento para todos los cuerpos. Porque el deporte es para todos."
            />
          </div>
        </div>

        {/* Principio guia */}
        <div className="mb-8 rounded-3xl bg-accent p-8 text-accent-foreground">
          <p className="text-accessible-xl font-black leading-relaxed">
            &quot;El deporte adaptado no simplifica el juego, lo universaliza. Permite que mas personas encuentren 
            un lugar en el juego. La inclusion no es una concesion: es una oportunidad para todos.&quot;
          </p>
          <p className="mt-3 text-accessible-base opacity-90 font-semibold">— Principio del proyecto EvoMundial</p>
        </div>

        {/* Filtros de posicion */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-muted-foreground mr-1">Posicion:</span>
          {NIVELES.map((n) => {
            const iconMap: Record<string, string> = {
              Todos: "Todos",
              Sentado: "Sentado (silla)",
              "De pie": "De pie",
              Mixto: "Mixto",
            }
            return (
              <button
                key={n}
                onClick={() => setFiltro(n)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                  filtro === n
                    ? "bg-foreground text-primary-foreground shadow-md scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-foreground/20"
                }`}
              >
                {iconMap[n] ?? n}
              </button>
            )
          })}
        </div>

        {/* Lista de actividades */}
        <div className="space-y-3">
          {actsFiltradas.map((act) => {
            const abierto = expandido === act.id
            return (
              <div key={act.id} className={`overflow-hidden rounded-2xl border-2 ${act.color} shadow-sm`}>
                <button
                  onClick={() => {
                    setExpandido(abierto ? null : act.id)
                    // Abrir imagen en modal si existe
                    if (!abierto && imagenesActividades[act.id]) {
                      setImagenAmpliada(imagenesActividades[act.id])
                    }
                  }}
                  className="flex w-full items-center gap-4 p-7 text-left transition-all hover:bg-black/5"
                  aria-expanded={abierto}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-black text-foreground">{act.nombre}</h3>
                      <span className={`rounded-full px-3 py-1 text-sm font-bold ${act.badge}`}>
                        {act.nivel}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-base text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Users size={16} />
                        {act.participantes}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={16} />
                        {act.duracion}
                      </span>
                    </div>
                  </div>
                  {abierto ? (
                    <ChevronUp size={24} className="text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-muted-foreground shrink-0" />
                  )}
                </button>

                {abierto && (
                  <div className="border-t border-border/50 px-7 pb-7 pt-5">
                    <p className="mb-8 text-lg leading-relaxed text-foreground">{act.descripcion}</p>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                      {/* Materiales */}
                      <div>
                        <h4 className="mb-3 text-sm font-black uppercase tracking-wide text-muted-foreground">
                          Materiales
                        </h4>
                        <ul className="space-y-1.5">
                          {act.materiales.map((m) => (
                            <li key={m} className="flex items-start gap-2 text-sm text-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" aria-hidden="true" />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Adaptaciones */}
                      <div>
                        <h4 className="mb-3 text-sm font-black uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                          <Shield size={14} />
                          Adaptaciones
                        </h4>
                        <ul className="space-y-1.5">
                          {act.adaptaciones.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-sm text-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden="true" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Objetivos */}
                      <div>
                        <h4 className="mb-3 text-sm font-black uppercase tracking-wide text-muted-foreground">
                          Objetivos
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {act.objetivos.map((o) => (
                            <span
                              key={o}
                              className="rounded-full bg-primary/15 px-3 py-1.5 text-xs font-bold text-primary"
                            >
                              {o}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Botón de sonido para la actividad */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <BotonSeccion 
                        texto={`${act.nombre}. ${act.descripcion}`}
                      />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Recordatorio inclusivo */}
        <div className="mt-10 rounded-3xl bg-foreground p-8 text-primary-foreground">
          <h3 className="mb-3 text-2xl font-black">Antes de empezar</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Preguntamos a cada persona como se siente hoy",
              "Recordamos que nadie esta obligado a participar de ninguna actividad",
              "Celebramos el intento tanto como el resultado",
              "Adaptamos las reglas en tiempo real segun lo que vemos",
              "El objetivo es pasar bien y conectar, no competir",
              "Si algo no funciona, lo cambiamos juntos",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <p className="text-sm font-semibold leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {imagenAmpliada && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2"
          onClick={() => setImagenAmpliada(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
        >
          <div 
            className="relative w-full max-w-6xl max-h-[95vh]"
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
    </section>
  )
}
