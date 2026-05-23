"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Globe, Heart, Palette, Activity, Briefcase, ChevronRight } from "lucide-react"

const CARDS = [
  {
    id: "paises",
    icon: Globe,
    titulo: "Paises y Culturas",
    descripcion: "Viajamos por el mundo sin salir del centro. Conocemos los paises sede y los que participan.",
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

// Fecha de inicio del Mundial 2026: 11 de junio de 2026
const MUNDIAL_DATE = new Date("2026-06-11T00:00:00")

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now()
    if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
    return {
      dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((diff / (1000 * 60)) % 60),
      segundos: Math.floor((diff / 1000) % 60),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-sm min-w-[72px]">
      <span className="text-4xl font-black text-accent leading-none tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-xs font-bold uppercase tracking-widest text-white/60">{label}</span>
    </div>
  )
}

export default function HeroSection({ onNavigate }: { onNavigate: (id: string) => void }) {
  const { dias, horas, minutos, segundos } = useCountdown(MUNDIAL_DATE)

  return (
    <section className="min-h-screen section-enter">
      {/* Hero */}
      <div className="relative overflow-hidden bg-foreground px-6 py-14 md:py-20 text-center">
        {/* Decoracion de fondo: circulos de color solido con baja opacidad */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full opacity-[0.08]"
          style={{ background: "oklch(0.82 0.18 85)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full opacity-[0.08]"
          style={{ background: "oklch(0.52 0.18 240)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.04]"
          style={{ background: "oklch(0.6 0.18 145)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Logo + identificacion del instituto */}
          <div className="mb-6 flex flex-col items-center gap-3">
            <div className="rounded-2xl bg-white p-3 shadow-lg">
              <Image
                src="/evolutiva.jpeg"
                alt="Logo Instituto Evolutiva"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-foreground uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-accent-foreground/60 pulse-soft" aria-hidden="true" />
              Centro Dia Evolutiva — Mendoza, Argentina
            </div>
          </div>

          <h1 className="mb-5 text-5xl font-black text-white md:text-7xl lg:text-8xl text-balance leading-none tracking-tight">
            El Mundial
            <br />
            <span className="text-accent">es de todos</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70 md:text-xl leading-relaxed text-pretty">
            Un proyecto para explorar el Mundial 2026 desde la cultura, el arte,
            los valores y el movimiento. Porque el mundo del futbol es mucho
            mas que el futbol.
          </p>

          {/* Countdown */}
          <div className="mb-6">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-white/50">
              Faltan para el Mundial 2026
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CountdownUnit value={dias} label="dias" />
              <CountdownUnit value={horas} label="horas" />
              <CountdownUnit value={minutos} label="min" />
              <CountdownUnit value={segundos} label="seg" />
            </div>
            <p className="mt-3 text-xs text-white/40 font-semibold">
              Primer partido: 11 de junio de 2026
            </p>
          </div>

          {/* Stats del torneo */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 mb-8">
            {[
              { num: "48", desc: "Selecciones" },
              { num: "3", desc: "Paises Sede" },
              { num: "104", desc: "Partidos" },
              { num: "16", desc: "Grupos" },
            ].map((stat) => (
              <div
                key={stat.desc}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3"
              >
                <span className="text-2xl font-black text-white">{stat.num}</span>
                <span className="text-xs text-white/50 font-semibold uppercase tracking-wide mt-0.5">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Sedes con banderas */}
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {[
              { pais: "Estados Unidos", emoji: "🇺🇸", detalle: "11 ciudades sede" },
              { pais: "Mexico", emoji: "🇲🇽", detalle: "3 ciudades sede" },
              { pais: "Canada", emoji: "🇨🇦", detalle: "2 ciudades sede" },
            ].map(({ pais, emoji, detalle }) => (
              <div
                key={pais}
                className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-sm"
              >
                <span
                  className="text-5xl leading-none"
                  role="img"
                  aria-label={`Bandera de ${pais}`}
                >
                  {emoji}
                </span>
                <span className="text-sm font-black text-white">{pais}</span>
                <span className="text-xs text-white/50 font-semibold">{detalle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards de secciones */}
      <div className="bg-muted px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-center text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Exploramos juntos
          </p>
          <p className="mb-8 text-center text-3xl font-black text-foreground md:text-4xl text-balance">
            Cinco caminos para descubrir el Mundial
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {CARDS.map((card) => {
              const Icon = card.icon
              return (
                <button
                  key={card.id}
                  onClick={() => onNavigate(card.id)}
                  className={`group flex flex-col items-start rounded-3xl p-7 text-left transition-all hover:scale-[1.03] hover:shadow-xl active:scale-95 ${card.color} ${card.textColor}`}
                >
                  <div className={`mb-4 rounded-2xl p-3 ${card.accentBg}`}>
                    <Icon size={30} />
                  </div>
                  <h3 className="mb-2 text-xl font-black leading-tight">{card.titulo}</h3>
                  <p className={`mb-5 text-sm leading-relaxed opacity-80 flex-1`}>{card.descripcion}</p>
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
