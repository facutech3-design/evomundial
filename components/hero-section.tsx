"use client"

import { Globe, Heart, Palette, Activity, Briefcase, ChevronRight } from "lucide-react"

const CARDS = [
  {
    id: "paises",
    icon: Globe,
    titulo: "Paises y Culturas",
    descripcion: "Viajemos por el mundo sin salir del centro. Conocemos los paises sede y los que participan.",
    color: "bg-primary",
    textColor: "text-primary-foreground",
    accentBg: "bg-white/20",
  },
  {
    id: "valores",
    icon: Heart,
    titulo: "Valores e Inclusion",
    descripcion: "El deporte como espejo de la sociedad. Fair play, diversidad y representacion.",
    color: "bg-success",
    textColor: "text-success-foreground",
    accentBg: "bg-white/20",
  },
  {
    id: "arte",
    icon: Palette,
    titulo: "Arte y Creatividad",
    descripcion: "Disenamos camisetas, banderas y mascotas. La creatividad no tiene limites.",
    color: "bg-creative",
    textColor: "text-creative-foreground",
    accentBg: "bg-white/20",
  },
  {
    id: "actividades",
    icon: Activity,
    titulo: "Actividades Adaptadas",
    descripcion: "Juegos y movimiento para todos los cuerpos. Porque el deporte es para todos.",
    color: "bg-accent",
    textColor: "text-accent-foreground",
    accentBg: "bg-black/10",
  },
  {
    id: "empleos",
    icon: Briefcase,
    titulo: "Empleos del Mundial",
    descripcion: "Quien trabaja en un mundial? Conocemos todos los roles mas alla de los jugadores.",
    color: "bg-foreground",
    textColor: "text-primary-foreground",
    accentBg: "bg-white/20",
  },
]

export default function HeroSection({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <section className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden bg-foreground px-6 py-16 md:py-24 text-center">
        {/* Decorative circles */}
        <div
          className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full opacity-10"
          style={{ background: "oklch(0.82 0.18 85)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full opacity-10"
          style={{ background: "oklch(0.52 0.18 240)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-4 inline-block rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-foreground uppercase tracking-widest">
            Centro Dia — Mendoza, Argentina
          </div>

          <h1 className="mb-6 text-5xl font-black text-white md:text-7xl lg:text-8xl text-balance leading-none">
            El Mundial
            <br />
            <span className="text-accent">es de todos</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/75 md:text-xl leading-relaxed text-pretty">
            Un proyecto para explorar el Mundial 2026 desde la cultura, el arte, los valores y el movimiento. 
            Porque el mundo del futbol es mucho mas que el futbol.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex flex-col items-center rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm">
              <span className="text-3xl font-black text-accent">48</span>
              <span className="text-xs text-white/60 font-semibold uppercase tracking-wide">Selecciones</span>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm">
              <span className="text-3xl font-black text-accent">3</span>
              <span className="text-xs text-white/60 font-semibold uppercase tracking-wide">Paises Sede</span>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm">
              <span className="text-3xl font-black text-accent">104</span>
              <span className="text-xs text-white/60 font-semibold uppercase tracking-wide">Partidos</span>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm">
              <span className="text-3xl font-black text-accent">2026</span>
              <span className="text-xs text-white/60 font-semibold uppercase tracking-wide">El Ano</span>
            </div>
          </div>

          {/* Sede banner */}
          <div className="flex flex-wrap justify-center gap-3">
            {["Estados Unidos", "Mexico", "Canada"].map((pais) => (
              <span
                key={pais}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white"
              >
                {pais}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Cards de secciones */}
      <div className="bg-muted px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-2 text-center text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Exploramos juntos
          </h2>
          <p className="mb-8 text-center text-2xl font-black text-foreground md:text-3xl">
            Cinco caminos para descubrir el Mundial
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {CARDS.map((card) => {
              const Icon = card.icon
              return (
                <button
                  key={card.id}
                  onClick={() => onNavigate(card.id)}
                  className={`group flex flex-col items-start rounded-3xl p-6 text-left transition-all hover:scale-105 hover:shadow-xl active:scale-95 ${card.color} ${card.textColor}`}
                >
                  <div className={`mb-4 rounded-2xl p-3 ${card.accentBg}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="mb-2 text-lg font-black leading-tight">{card.titulo}</h3>
                  <p className={`mb-4 text-sm leading-relaxed opacity-80`}>{card.descripcion}</p>
                  <div className="mt-auto flex items-center gap-1 text-sm font-bold">
                    Explorar
                    <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
