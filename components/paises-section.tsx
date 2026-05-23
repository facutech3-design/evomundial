"use client"

import { useState, useEffect, useCallback } from "react"
import { Globe, Music, Utensils, Languages, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react"

const PAISES = [
  {
    nombre: "Argentina",
    bandera: "AR",
    emoji: "🇦🇷",
    sede: false,
    continente: "America del Sur",
    idioma: "Espanol",
    comida: "Asado, empanadas, mate",
    musica: "Tango, cumbia, folklore",
    curiosidad:
      "Argentina gano el Mundial 2022 en Qatar. Es el pais de Messi, el Che Guevara, el tango y los mejores vinos del mundo. Somos campeones del mundo.",
    color: "from-sky-500 to-blue-700",
    dato: "Campeon 2022",
  },
  {
    nombre: "Estados Unidos",
    bandera: "US",
    emoji: "🇺🇸",
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
    bandera: "MX",
    emoji: "🇲🇽",
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
    bandera: "CA",
    emoji: "🇨🇦",
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
    bandera: "BR",
    emoji: "🇧🇷",
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
    bandera: "FR",
    emoji: "🇫🇷",
    sede: false,
    continente: "Europa",
    idioma: "Frances",
    comida: "Baguette, queso, crepes",
    musica: "Chanson, electronica, hip hop",
    curiosidad:
      "Campeon del mundo en 1998 y 2018. El equipo frances es conocido por su diversidad: muchos jugadores tienen origen africano, lo que refleja la riqueza de Francia.",
    color: "from-blue-500 to-red-500",
    dato: "2 titulos",
  },
  {
    nombre: "Alemania",
    bandera: "DE",
    emoji: "🇩🇪",
    sede: false,
    continente: "Europa",
    idioma: "Aleman",
    comida: "Salchichas, pretzel, cerveza",
    musica: "Clasica, techno, schlager",
    curiosidad:
      "4 titulos mundiales. Alemania es conocida por su precision y organizacion. Su filosofia de juego influyo el futbol mundial por decadas.",
    color: "from-neutral-600 to-neutral-900",
    dato: "4 titulos",
  },
  {
    nombre: "Japon",
    bandera: "JP",
    emoji: "🇯🇵",
    sede: false,
    continente: "Asia",
    idioma: "Japones",
    comida: "Sushi, ramen, tempura",
    musica: "J-pop, taiko drums",
    curiosidad:
      "Japon sorprende en cada Mundial con su disciplina, respeto y trabajo en equipo. Los hinchas son famosos por limpiar los estadios despues de los partidos.",
    color: "from-red-500 to-red-700",
    dato: "Fair play",
  },
  {
    nombre: "Nigeria",
    bandera: "NG",
    emoji: "🇳🇬",
    sede: false,
    continente: "Africa",
    idioma: "Ingles",
    comida: "Jollof rice, suya, egusi soup",
    musica: "Afrobeats, highlife, juju",
    curiosidad:
      "Las 'Super Aguilas' son una de las selecciones mas populares de Africa. Nigeria tiene la economia mas grande del continente y es rica en diversidad cultural.",
    color: "from-green-600 to-green-800",
    dato: "Super Aguilas",
  },
  {
    nombre: "Marruecos",
    bandera: "MA",
    emoji: "🇲🇦",
    sede: false,
    continente: "Africa",
    idioma: "Arabe y Frances",
    comida: "Cous cous, tagine, pastilla",
    musica: "Gnawa, chaabi, rai",
    curiosidad:
      "En Qatar 2022, Marruecos llego a las semifinales: el mejor resultado de Africa en la historia de los Mundiales. Un hito para todo el continente.",
    color: "from-red-600 to-green-700",
    dato: "4to puesto 2022",
  },
]

const CONTINENTES = ["Todos", "America del Sur", "America del Norte", "Europa", "Asia", "Africa"]

export default function PaisesSection() {
  const [indiceModal, setIndiceModal] = useState<number | null>(null)
  const [filtro, setFiltro] = useState("Todos")

  const paisesFiltrados = filtro === "Todos" ? PAISES : PAISES.filter((p) => p.continente === filtro)

  const cerrar = useCallback(() => setIndiceModal(null), [])

  const anterior = useCallback(() => {
    setIndiceModal((i) => (i !== null && i > 0 ? i - 1 : i))
  }, [])

  const siguiente = useCallback(() => {
    setIndiceModal((i) => (i !== null && i < paisesFiltrados.length - 1 ? i + 1 : i))
  }, [paisesFiltrados.length])

  // Navegacion con teclado en el modal
  useEffect(() => {
    if (indiceModal === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar()
      if (e.key === "ArrowRight") siguiente()
      if (e.key === "ArrowLeft") anterior()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [indiceModal, cerrar, siguiente, anterior])

  const paisActual = indiceModal !== null ? paisesFiltrados[indiceModal] : null

  return (
    <section className="min-h-screen bg-background px-6 py-12 section-enter">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-start gap-4">
          <div className="shrink-0 rounded-2xl bg-primary p-4">
            <Globe size={32} className="text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-foreground md:text-5xl">Paises y Culturas</h2>
            <p className="mt-2 text-lg text-muted-foreground text-pretty">
              El mundo se reune en un estadio. Descubrimos de donde vienen, que comen, que musica escuchan y como viven.
            </p>
          </div>
        </div>

        {/* Filtros por continente */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CONTINENTES.map((c) => (
            <button
              key={c}
              onClick={() => { setFiltro(c); setIndiceModal(null) }}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                filtro === c
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/20"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid de paises */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {paisesFiltrados.map((pais, i) => (
            <button
              key={pais.nombre}
              onClick={() => setIndiceModal(i)}
              className={`group flex flex-col items-center rounded-2xl border-2 bg-card p-5 text-center transition-all hover:border-primary hover:shadow-lg hover:scale-105 active:scale-95 ${
                indiceModal === i ? "border-primary shadow-lg" : "border-border"
              }`}
            >
              <span
                className="mb-2 text-5xl"
                role="img"
                aria-label={`Bandera de ${pais.nombre}`}
              >
                {pais.emoji}
              </span>
              <span className="text-sm font-bold text-foreground leading-tight">{pais.nombre}</span>
              <span className="mt-1 text-xs text-muted-foreground">{pais.continente}</span>
              {pais.sede && (
                <span className="mt-2 rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground">
                  Sede 2026
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Modal con navegacion entre paises */}
        {paisActual !== null && indiceModal !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
            onClick={cerrar}
            role="dialog"
            aria-modal="true"
            aria-label={`Informacion sobre ${paisActual.nombre}`}
          >
            <div
              className="relative w-full max-w-lg rounded-3xl bg-card shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal con gradiente */}
              <div className={`bg-gradient-to-br ${paisActual.color} p-8 text-white`}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-7xl mb-3 leading-none">{paisActual.emoji}</div>
                    <h3 className="text-3xl font-black">{paisActual.nombre}</h3>
                    <div className="flex items-center gap-1.5 mt-1 text-white/75 text-sm font-semibold">
                      <MapPin size={14} />
                      {paisActual.continente}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {paisActual.sede && (
                      <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-bold">
                        Sede 2026
                      </span>
                    )}
                    <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-bold">
                      {paisActual.dato}
                    </span>
                  </div>
                </div>

                {/* Contador de pais */}
                <div className="mt-4 text-xs text-white/50 font-semibold">
                  {indiceModal + 1} de {paisesFiltrados.length}
                </div>
              </div>

              {/* Contenido del modal */}
              <div className="p-7 space-y-4">
                <div className="flex gap-3">
                  <div className="shrink-0 rounded-xl bg-primary/10 p-3">
                    <Languages size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Idioma</p>
                    <p className="font-semibold text-foreground text-base">{paisActual.idioma}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 rounded-xl bg-success/10 p-3">
                    <Utensils size={20} className="text-success" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Comidas tipicas</p>
                    <p className="font-semibold text-foreground text-base">{paisActual.comida}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 rounded-xl bg-creative/10 p-3">
                    <Music size={20} className="text-creative" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Musica</p>
                    <p className="font-semibold text-foreground text-base">{paisActual.musica}</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-muted p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">
                    Dato interesante
                  </p>
                  <p className="text-sm leading-relaxed text-foreground">{paisActual.curiosidad}</p>
                </div>
              </div>

              {/* Navegacion entre paises + cerrar */}
              <div className="flex items-center justify-between gap-3 px-7 pb-7">
                <button
                  onClick={anterior}
                  disabled={indiceModal === 0}
                  className="flex items-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-sm font-bold text-secondary-foreground transition-all hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
                  aria-label="Pais anterior"
                >
                  <ChevronLeft size={18} />
                  Anterior
                </button>

                <button
                  onClick={cerrar}
                  className="rounded-full bg-muted p-2.5 text-muted-foreground hover:bg-foreground hover:text-primary-foreground transition-all"
                  aria-label="Cerrar"
                >
                  <X size={20} />
                </button>

                <button
                  onClick={siguiente}
                  disabled={indiceModal === paisesFiltrados.length - 1}
                  className="flex items-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
                  aria-label="Pais siguiente"
                >
                  Siguiente
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Actividad grupal */}
        <div className="mt-12 rounded-3xl bg-primary p-8 text-primary-foreground">
          <h3 className="mb-2 text-2xl font-black">Actividad grupal: Somos Embajadores</h3>
          <p className="text-base text-primary-foreground/80 mb-6 leading-relaxed">
            Entre todos elegimos un pais que no conocemos y preparamos una presentacion: su bandera, su comida
            favorita y una curiosidad. Despues la compartimos con el grupo.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { n: "1", txt: "Elegimos un pais del mundo" },
              { n: "2", txt: "Investigamos y dibujamos su bandera" },
              { n: "3", txt: "Presentamos al grupo: somos sus embajadores" },
            ].map((paso) => (
              <div key={paso.n} className="rounded-2xl bg-white/15 p-5">
                <div className="text-3xl font-black mb-2">{paso.n}</div>
                <p className="text-sm font-semibold leading-relaxed">{paso.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
