"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Users, Scale, Star, ChevronDown, ChevronUp } from "lucide-react"
import { BotonLeer } from "@/components/boton-leer"

const VALORES = [
  {
    icono: Heart,
    titulo: "Fair Play",
    subtitulo: "Juego limpio",
    descripcion:
      "Mas alla de ganar o perder, lo que importa es como jugamos. El fair play significa respetar al rival, al arbitro y las reglas. En la vida tambien se aplica: se puede competir con respeto.",
    pregunta: "¿Alguna vez sentiste que alguien no jugo limpio? ¿Como te hizo sentir?",
    color: "bg-primary",
    textColor: "text-primary-foreground",
    ejemplos: ["Ayudar a un rival que se cae", "No festerar un gol con burla", "Aceptar una decision aunque no nos guste"],
  },
  {
    icono: Users,
    titulo: "Inclusion",
    subtitulo: "Todos pueden jugar",
    descripcion:
      "El deporte debe ser para todos los cuerpos, todas las capacidades, todos los generos. Los Juegos Paralimpicos demuestran que la discapacidad no es un limite: es una forma diferente de alcanzar la excelencia.",
    pregunta: "¿Conocen algun deportista con discapacidad que admiren? ¿Que hace que sea especial?",
    color: "bg-success",
    textColor: "text-success-foreground",
    ejemplos: [
      "Juegos Paralimpicos desde 1960",
      "Futbol en silla de ruedas",
      "Deporte adaptado en la Argentina",
    ],
  },
  {
    icono: Scale,
    titulo: "Respeto",
    subtitulo: "La base de todo",
    descripcion:
      "En el Mundial se juntan personas de todo el mundo: diferentes culturas, idiomas, religiones y formas de vida. Respetar esa diferencia hace posible que el evento exista. El respeto es el idioma universal.",
    pregunta: "¿Que hace que una persona sea respetuosa? ¿Como se ve el respeto en un partido?",
    color: "bg-creative",
    textColor: "text-creative-foreground",
    ejemplos: [
      "Escuchar el himno del rival en silencio",
      "Saludar al rival al terminar",
      "No discriminar a nadie por su pais",
    ],
  },
  {
    icono: Star,
    titulo: "Superacion",
    subtitulo: "El esfuerzo que vale",
    descripcion:
      "Detras de cada jugador hay anos de trabajo, lesiones, fracasos y volver a empezar. La superacion personal no es solo en el deporte: es levantarse cada vez que algo se pone dificil.",
    pregunta: "¿En que momento de tu vida senti que te supere a vos mismo/a? ¿Como lo lograste?",
    color: "bg-accent",
    textColor: "text-accent-foreground",
    ejemplos: [
      "Jugadores que volvieron de lesiones graves",
      "Selecciones de paises pequenos que llegaron lejos",
      "Nuestros logros de cada dia",
    ],
  },
]

const HISTORIAS = [
  {
    nombre: "Lionel Messi",
    pais: "Argentina",
    bandera: "🇦🇷",
    historia:
      "A los 11 anos le diagnosticaron una deficiencia de hormona del crecimiento. El club de Barcelona pago su tratamiento con la condicion de que viajara a Espana. Lejos de su familia, solo, siguio entrenando. Hoy es considerado el mejor jugador de la historia.",
    valor: "Perseverancia",
  },
  {
    nombre: "Didier Drogba",
    pais: "Costa de Marfil",
    bandera: "🇨🇮",
    historia:
      "Cuando su pais estaba en guerra civil, Drogba uso su fama para pedir un cese al fuego en medio de una celebracion de la seleccion nacional. Sus palabras detuvieron temporalmente el conflicto. El futbol como herramienta de paz.",
    valor: "Solidaridad",
  },
  {
    nombre: "Nelson Mandela",
    pais: "Sudafrica",
    bandera: "🇿🇦",
    historia:
      "Cuando Sudafrica organizo el Mundial 2010, Mandela lo uso como simbolo de reconciliacion. Un pais que habia vivido el apartheid (separacion racial) celebro unido. El deporte como lenguaje de union.",
    valor: "Union",
  },
]

export default function ValoresSection() {
  const [expandido, setExpandido] = useState<number | null>(null)

  return (
    <section className="min-h-screen bg-background px-6 py-12 section-enter">
      <div className="mx-auto max-w-7xl">

        {/* Imagen principal */}
        <div className="mb-10 rounded-3xl overflow-hidden h-80 md:h-96 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
            alt="Personas de distintas culturas juntas celebrando"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
          <div className="sr-only">
            Imagen de personas de diferentes culturas y etnias juntas celebrando y apoyándose mutuamente.
          </div>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="w-24 h-24 mb-4">
            <svg width="96" height="96" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="35" r="14" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2"/>
              <circle cx="65" cy="35" r="14" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2"/>
              <circle cx="50" cy="52" r="14" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.2"/>
              <path d="M48 68 L52 68 L55 82 L45 82 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
              <path d="M28 52 L38 52 L35 68 L25 68 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
              <path d="M62 52 L72 52 L75 68 L65 68 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
              <line x1="35" y1="48" x2="50" y2="52" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="65" y1="48" x2="50" y2="52" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <h2 className="text-5xl font-black text-foreground md:text-6xl mb-3">Valores e Inclusión</h2>
          <p className="text-accessible-lg text-foreground/85 text-pretty leading-relaxed font-semibold max-w-3xl">
            El fútbol es un espejo de la sociedad. Hablamos de lo que nos importa: el respeto, la inclusión y lo que nos hace mejores personas.
          </p>
          
          {/* Botón para escuchar sección */}
          <div className="mt-4">
            <BotonLeer 
              etiqueta="Escuchar sección"
              texto="Valores e Inclusión. El deporte como espejo de la sociedad. Fair play, diversidad y representación."
            />
          </div>
        </div>

        {/* Valores accordeon */}
        <div className="mb-12 space-y-3">
          {VALORES.map((valor, i) => {
            const Icon = valor.icono
            const abierto = expandido === i
            return (
              <div key={valor.titulo} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <button
                  onClick={() => setExpandido(abierto ? null : i)}
                  className="flex w-full items-center gap-4 p-6 text-left transition-all hover:bg-muted/50"
                  aria-expanded={abierto}
                >
                  <div className={`rounded-xl p-3 ${valor.color} ${valor.textColor} shrink-0`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xl font-black text-foreground">{valor.titulo}</div>
                    <div className="text-sm text-muted-foreground">{valor.subtitulo}</div>
                  </div>
                  {abierto ? (
                    <ChevronUp size={20} className="text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-muted-foreground shrink-0" />
                  )}
                </button>

                {abierto && (
                  <div className="border-t border-border px-6 pb-6 pt-4">
                    <p className="text-accessible-base leading-relaxed text-foreground mb-4">{valor.descripcion}</p>

                    <div className="mb-4 rounded-2xl bg-muted p-4">
                      <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2">
                        Pregunta para reflexionar
                      </p>
                      <p className="text-base font-semibold text-foreground italic">{valor.pregunta}</p>
                    </div>

                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2">Ejemplos</p>
                      <ul className="space-y-1">
                        {valor.ejemplos.map((ej) => (
                          <li key={ej} className="flex items-start gap-2 text-sm text-foreground">
                            <span
                              className={`mt-1 h-2 w-2 shrink-0 rounded-full ${valor.color}`}
                              aria-hidden="true"
                            />
                            {ej}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Historias inspiradoras */}
        <div className="mb-8">
          <h3 className="mb-1 text-2xl font-black text-foreground">Historias que inspiran</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Personas que usaron el deporte para cambiar algo mas grande que un partido.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {HISTORIAS.map((h) => (
              <div
                key={h.nombre}
                className="flex flex-col rounded-3xl border-2 border-border bg-card p-7 shadow-sm transition-all hover:border-primary hover:shadow-md"
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="text-5xl leading-none" role="img" aria-label={`Bandera de ${h.pais}`}>{h.bandera}</span>
                  <div>
                    <div className="text-lg font-black text-foreground leading-tight">{h.nombre}</div>
                    <div className="text-sm text-muted-foreground font-semibold">{h.pais}</div>
                  </div>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-foreground flex-1">{h.historia}</p>
                <div className="mt-auto inline-flex items-center gap-2 rounded-full bg-success/15 px-4 py-2 text-sm font-bold text-success w-fit">
                  <span className="h-2 w-2 rounded-full bg-success shrink-0" aria-hidden="true" />
                  {h.valor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deporte Adaptado */}
        <div className="rounded-3xl bg-success p-8 text-success-foreground">
          <h3 className="mb-3 text-2xl font-black">Deporte Adaptado y Paralimpismo</h3>
          <p className="mb-6 text-lg text-success-foreground/85 leading-relaxed text-pretty">
            Los Juegos Paralimpicos nacieron en 1960 en Roma. Hoy son el segundo evento deportivo mas grande del mundo,
            despues de los Juegos Olimpicos. Cada 4 anos, atletas con distintas discapacidades compiten 
            al maximo nivel. La pregunta no es &quot;pueden o no pueden&quot; — la pregunta es como lo hacen.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { num: "1960", desc: "Primer juego Paralimpico" },
              { num: "+160", desc: "Paises participantes" },
              { num: "22", desc: "Deportes en los ultimos JJPP" },
              { num: "4500+", desc: "Atletas en cada edicion" },
            ].map((stat) => (
              <div key={stat.num} className="rounded-2xl bg-white/20 p-4 text-center">
                <div className="text-2xl font-black">{stat.num}</div>
                <div className="text-xs font-semibold opacity-80 mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
