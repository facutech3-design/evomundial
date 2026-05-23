"use client"

import { useState } from "react"
import { Globe, MapPin, Music, Utensils, Languages, ChevronLeft, ChevronRight } from "lucide-react"

const PAISES = [
  {
    nombre: "Argentina",
    bandera: "🇦🇷",
    sede: false,
    continente: "America del Sur",
    idioma: "Espanol",
    comida: "Asado, empanadas, mate",
    musica: "Tango, cumbia, folklore",
    curiosidad:
      "Argentina gano el Mundial 2022 en Qatar. Es el pais de Messi, el Che Guevara, el tango y los mejores vinos del mundo.",
    color: "from-sky-400 to-blue-700",
    dato: "Campeon 2022",
  },
  {
    nombre: "Estados Unidos",
    bandera: "🇺🇸",
    sede: true,
    continente: "America del Norte",
    idioma: "Ingles",
    comida: "Hamburguesas, hot dogs, BBQ",
    musica: "Jazz, hip hop, country",
    curiosidad:
      "Uno de los tres paises sede del Mundial 2026. Es el pais mas diverso del mundo, con mas de 300 idiomas hablados. Tiene 50 estados y millones de historias.",
    color: "from-red-500 to-blue-600",
    dato: "Sede 2026",
  },
  {
    nombre: "Mexico",
    bandera: "🇲🇽",
    sede: true,
    continente: "America del Norte",
    idioma: "Espanol",
    comida: "Tacos, guacamole, mole",
    musica: "Mariachi, cumbia, banda",
    curiosidad:
      "Sede del Mundial 2026. Mexico ya organizo el Mundial dos veces: 1970 y 1986. Tiene una de las culturas mas antiguas del mundo con los mayas y aztecas.",
    color: "from-green-600 to-red-500",
    dato: "Sede 2026",
  },
  {
    nombre: "Canada",
    bandera: "🇨🇦",
    sede: true,
    continente: "America del Norte",
    idioma: "Ingles y Frances",
    comida: "Poutine, maple syrup, salmon",
    musica: "Folk, country, pop",
    curiosidad:
      "Sede del Mundial 2026. Canada es conocido por su naturaleza increible, la aurora boreal y ser uno de los paises mas multiculturales del mundo.",
    color: "from-red-600 to-red-800",
    dato: "Sede 2026",
  },
  {
    nombre: "Brasil",
    bandera: "🇧🇷",
    sede: false,
    continente: "America del Sur",
    idioma: "Portugues",
    comida: "Feijoada, churrasco, acai",
    musica: "Samba, bossa nova, funk",
    curiosidad:
      "El pais con mas Mundiales ganados: 5 titulos. La seleccion se llama 'Canarinha' por el color amarillo de su camiseta. El carnaval de Rio es el mas famoso del mundo.",
    color: "from-yellow-400 to-green-600",
    dato: "5 titulos",
  },
  {
    nombre: "Francia",
    bandera: "🇫🇷",
    sede: false,
    continente: "Europa",
    idioma: "Frances",
    comida: "Baguette, queso, crepes",
    musica: "Chanson, electronica, hip hop",
    curiosidad:
      "Campeon del mundo en 1998 y 2018. El equipo frances es conocido por su diversidad: muchos jugadores tienen origen africano, lo que refleja la historia de Francia.",
    color: "from-blue-500 to-red-500",
    dato: "2 titulos",
  },
  {
    nombre: "Alemania",
    bandera: "🇩🇪",
    sede: false,
    continente: "Europa",
    idioma: "Aleman",
    comida: "Salchichas, pretzel, cerveza",
    musica: "Clasica, techno, schlager",
    curiosidad:
      "4 titulos mundiales. Alemania es conocida por su precision y organizacion. Su filosofia de juego influyó el futbol mundial por decadas.",
    color: "from-neutral-700 to-neutral-900",
    dato: "4 titulos",
  },
  {
    nombre: "Japon",
    bandera: "🇯🇵",
    sede: false,
    continente: "Asia",
    idioma: "Japones",
    comida: "Sushi, ramen, tempura",
    musica: "J-pop, traditional taiko drums",
    curiosidad:
      "Japon sorprende en cada Mundial con su disciplina, respeto y trabajo en equipo. Los hinchas son famosos por limpiar los estadios despues de los partidos.",
    color: "from-red-500 to-red-700",
    dato: "Fair play",
  },
  {
    nombre: "Nigeria",
    bandera: "🇳🇬",
    sede: false,
    continente: "Africa",
    idioma: "Ingles",
    comida: "Jollof rice, suya, egusi soup",
    musica: "Afrobeats, highlife, juju",
    curiosidad:
      "Las 'Super Aguilas' son una de las selecciones mas populares de Africa. Nigeria tiene la economia mas grande del continente africano y es rica en diversidad cultural.",
    color: "from-green-600 to-green-800",
    dato: "Super Aguilas",
  },
  {
    nombre: "Marruecos",
    bandera: "🇲🇦",
    sede: false,
    continente: "Africa",
    idioma: "Arabe y Frances",
    comida: "Cous cous, tagine, pastilla",
    musica: "Gnawa, chaabi, rai",
    curiosidad:
      "En Qatar 2022, Marruecos llego hasta las semifinales, el mejor resultado de Africa en la historia de los Mundiales. Un hito para todo el continente.",
    color: "from-red-600 to-green-700",
    dato: "4to puesto 2022",
  },
]

const CONTINENTES = ["Todos", "America del Sur", "America del Norte", "Europa", "Asia", "Africa"]

export default function PaisesSection() {
  const [seleccionado, setSeleccionado] = useState<(typeof PAISES)[0] | null>(null)
  const [filtro, setFiltro] = useState("Todos")

  const paissesFiltrados = filtro === "Todos" ? PAISES : PAISES.filter((p) => p.continente === filtro)

  return (
    <section className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-start gap-4">
          <div className="rounded-2xl bg-primary p-4">
            <Globe size={32} className="text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-foreground md:text-5xl">Paises y Culturas</h2>
            <p className="mt-2 text-lg text-muted-foreground text-pretty">
              El mundo se reune en un estadio. Descubrimos de donde vienen, que comen, que musica escuchan y como viven.
            </p>
          </div>
        </div>

        {/* Filtros */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CONTINENTES.map((c) => (
            <button
              key={c}
              onClick={() => setFiltro(c)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                filtro === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/20"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid de paises */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {paissesFiltrados.map((pais) => (
            <button
              key={pais.nombre}
              onClick={() => setSeleccionado(pais)}
              className="group flex flex-col items-center rounded-2xl border-2 border-border bg-card p-4 text-center transition-all hover:border-primary hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span className="mb-2 text-5xl" role="img" aria-label={`Bandera de ${pais.nombre}`}>
                {pais.bandera}
              </span>
              <span className="text-sm font-bold text-foreground leading-tight">{pais.nombre}</span>
              <span className="mt-1 text-xs text-muted-foreground">{pais.continente}</span>
              {pais.sede && (
                <span className="mt-2 rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground">
                  Sede
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Modal / detalle del pais */}
        {seleccionado && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm"
            onClick={() => setSeleccionado(null)}
          >
            <div
              className="relative w-full max-w-lg rounded-3xl bg-card p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSeleccionado(null)}
                className="absolute right-4 top-4 rounded-full bg-muted p-2 text-muted-foreground hover:bg-secondary"
                aria-label="Cerrar"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Header del modal */}
              <div className={`-mx-8 -mt-8 mb-6 rounded-t-3xl bg-gradient-to-r ${seleccionado.color} p-8 text-white`}>
                <div className="text-6xl mb-3">{seleccionado.bandera}</div>
                <h3 className="text-3xl font-black">{seleccionado.nombre}</h3>
                <p className="text-white/80 text-sm">{seleccionado.continente}</p>
                {seleccionado.sede && (
                  <span className="mt-2 inline-block rounded-full bg-white/30 px-3 py-1 text-xs font-bold">
                    Sede del Mundial 2026
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="rounded-xl bg-primary/10 p-3">
                    <Languages size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Idioma</p>
                    <p className="font-semibold text-foreground">{seleccionado.idioma}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-xl bg-success/10 p-3">
                    <Utensils size={20} className="text-success" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Comidas tipicas</p>
                    <p className="font-semibold text-foreground">{seleccionado.comida}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-xl bg-creative/10 p-3">
                    <Music size={20} className="text-creative" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Musica</p>
                    <p className="font-semibold text-foreground">{seleccionado.musica}</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-muted p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">
                    Dato interesante
                  </p>
                  <p className="text-sm leading-relaxed text-foreground">{seleccionado.curiosidad}</p>
                </div>
              </div>

              <button
                onClick={() => setSeleccionado(null)}
                className="mt-6 w-full rounded-2xl bg-primary py-3 text-base font-bold text-primary-foreground transition-all hover:opacity-90 active:scale-95"
              >
                Siguiente pais
              </button>
            </div>
          </div>
        )}

        {/* Actividad grupal */}
        <div className="mt-12 rounded-3xl bg-primary p-8 text-primary-foreground">
          <h3 className="mb-2 text-2xl font-black">Actividad grupal</h3>
          <p className="text-lg text-primary-foreground/80 mb-4">
            Entre todos, elegimos un pais que no conocemos y preparamos una presentacion: su bandera, su comida favorita 
            y una curiosidad. Despues la compartimos con el grupo.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-2xl font-black mb-1">1</div>
              <p className="text-sm font-semibold">Elegimos un pais del mundo</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-2xl font-black mb-1">2</div>
              <p className="text-sm font-semibold">Investigamos y dibujamos su bandera</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-2xl font-black mb-1">3</div>
              <p className="text-sm font-semibold">Presentamos al grupo: somos embajadores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
