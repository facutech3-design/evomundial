"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { Globe, Heart, Palette, Activity, Briefcase, ChevronRight, ChevronLeft } from "lucide-react"
import BotonSonido from "@/components/boton-sonido"

const CARDS = [  {
    id: "paises",
    titulo: "Países y Culturas",
    descripcion: "Viajamos por el mundo. Conocemos otros países.",
    emoji: "🌍",
    pictograma: "mundo",
    boton: "Ver países del mundo",
    color: "bg-primary",
    textColor: "text-primary-foreground",
    accentBg: "bg-white/20",
    texto: "Países y Culturas. Viajamos por el mundo sin salir del centro. Conocemos los países sede y los que participan.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80",
    imageAlt: "Mapa del mundo con banderas de distintos países",
  },
  {
    id: "valores",
    titulo: "Valores e Inclusión",
    descripcion: "Respeto, fair play y diversidad. El deporte une.",
    emoji: "🤝",
    boton: "Ver valores",
    color: "bg-success",
    textColor: "text-success-foreground",
    accentBg: "bg-white/20",
    texto: "Valores e Inclusión. El deporte como espejo de la sociedad. Fair play, diversidad y representación.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    imageAlt: "Personas de distintas culturas unidas en equipo",
  },
  {
    id: "arte",
    titulo: "Arte y Creatividad",
    descripcion: "Pintamos, diseñamos y creamos juntos.",
    emoji: "🎨",
    boton: "Ver arte y creatividad",
    color: "bg-creative",
    textColor: "text-creative-foreground",
    accentBg: "bg-white/20",
    texto: "Arte y Creatividad. Diseñamos camisetas, banderas y mascotas. La creatividad no tiene límites.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
    imageAlt: "Manos pintando con colores vivos",
  },
  {
    id: "actividades",
    titulo: "Actividades Adaptadas",
    descripcion: "Jugamos y nos movemos. El deporte es para todos.",
    emoji: "🏃",
    boton: "Ver actividades",
    color: "bg-accent",
    textColor: "text-accent-foreground",
    accentBg: "bg-black/10",
    texto: "Actividades Adaptadas. Juegos y movimiento para todos los cuerpos. Porque el deporte es para todos.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disca%20basq-1ufRVQTjGAGvZpmtA9WHmQ9h8EAzCa.jpg",
    imageAlt: "Persona en silla de ruedas jugando basquetbol adaptado",
  },
  {
    id: "empleos",
    titulo: "Empleos del Mundial",
    descripcion: "¿Quién trabaja en un mundial? Lo descubrimos.",
    emoji: "💼",
    boton: "Ver empleos",
    color: "bg-foreground",
    textColor: "text-primary-foreground",
    accentBg: "bg-white/20",
    texto: "Empleos del Mundial. ¿Quién trabaja en un mundial? Conocemos todos los roles más allá de los jugadores.",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",
    imageAlt: "Estadio de fútbol con trabajadores y mucho movimiento",
  },
]

const PAISAJES = [
  {
    src: "/images/cordon-plata.jpg",
    titulo: "Cordon del Plata",
    lugar: "Mendoza",
  },
  {
    src: "/images/valle-luna.jpg",
    titulo: "Valle de la Luna",
    lugar: "San Juan",
  },
  {
    src: "/images/lago-cholila.jpg",
    titulo: "Lago Cholila",
    lugar: "Chubut",
  },
  {
    src: "/images/perito-moreno.jpg",
    titulo: "Glaciar Perito Moreno",
    lugar: "Santa Cruz",
  },
  {
    src: "/images/iguazu.jpg",
    titulo: "Cataratas del Iguazu",
    lugar: "Misiones",
  },
  {
    src: "/images/hornocal.jpg",
    titulo: "Cerro Hornocal",
    lugar: "Jujuy",
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

function Carrusel() {
  const [actual, setActual] = useState(0)
  const total = PAISAJES.length

  const anterior = useCallback(() => setActual((p) => (p - 1 + total) % total), [total])
  const siguiente = useCallback(() => setActual((p) => (p + 1) % total), [total])

  useEffect(() => {
    const id = setInterval(siguiente, 5000)
    return () => clearInterval(id)
  }, [siguiente])

  const paisaje = PAISAJES[actual]

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl" style={{ aspectRatio: "16/7" }}>
      {PAISAJES.map((p, i) => (
        <div
          key={p.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === actual ? 1 : 0 }}
        >
          <Image
            src={p.src}
            alt={`${p.titulo}, ${p.lugar}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5">
            <p className="text-xl font-black text-white drop-shadow-md">{p.titulo}</p>
            <p className="text-sm font-semibold text-white/70">{p.lugar}, Argentina</p>
          </div>
        </div>
      ))}

      {/* Botones navegacion */}
      <button
        onClick={anterior}
        aria-label="Imagen anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2.5 text-white backdrop-blur-sm hover:bg-black/60 transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={siguiente}
        aria-label="Imagen siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2.5 text-white backdrop-blur-sm hover:bg-black/60 transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 right-5 flex gap-1.5">
        {PAISAJES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActual(i)}
            aria-label={`Ir a imagen ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === actual ? "bg-white w-5 h-2" : "bg-white/40 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function PictogramaCard({ tipo }: { tipo: string }) {
  if (tipo === "mundo") {
    return (
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mundo%20ara-yv1yDRf3xUA5iEGFNg2KtOCOTMRXWG.png"
        alt="Mundo"
        width={48}
        height={48}
        className="w-12 h-12 object-contain"
      />
    )
  }
  return <span className="text-4xl">{tipo}</span>
}

function CountdownUnit({ value, label, emoji }: { value: number; label: string; emoji?: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm min-w-[90px]">
      {emoji && <span className="text-3xl mb-2" role="img">{emoji}</span>}
      <span className="text-3.5xl font-black text-accent leading-none tabular-nums" suppressHydrationWarning>
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-2 text-sm font-bold uppercase tracking-widest text-white/80">{label}</span>
    </div>
  )
}

export default function HeroSection({ onNavigate }: { onNavigate: (id: string) => void }) {
  const { dias, horas, minutos, segundos } = useCountdown(MUNDIAL_DATE)

  return (
    <section className="min-h-screen section-enter">
      {/* Hero con fondo Messi + copa */}
      <div className="relative overflow-hidden px-6 py-14 md:py-20 text-center">
        {/* Imagen de fondo: Messi besando la copa */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/messi-copa.jpg"
            alt="Messi besando la Copa del Mundo 2022"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Overlay oscuro para legibilidad del texto */}
          <div className="absolute inset-0 bg-black/65" />
        </div>

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

          <h1 className="mb-5 text-5xl font-black text-white md:text-7xl lg:text-9xl text-balance leading-tight tracking-tight">
            El Mundial
            <br />
            <span className="text-accent">es de todos</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-accessible-lg text-white/85 md:text-accessible-xl leading-relaxed text-pretty font-semibold">
            Un proyecto para explorar el Mundial 2026 desde la cultura, el arte,
            los valores y el movimiento. Porque el mundo del futbol es mucho
            mas que el futbol.
          </p>

          {/* Countdown */}
          <div className="mb-8">
            <p className="mb-6 text-accessible-xl font-black uppercase tracking-widest text-white text-center">
              ⏳ Falta para el mundial 2026
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CountdownUnit value={dias} label="Días" emoji="📅" />
              <CountdownUnit value={horas} label="Horas" emoji="🕐" />
              <CountdownUnit value={minutos} label="Minutos" emoji="⏱️" />
              <CountdownUnit value={segundos} label="Segundos" emoji="⚡" />
            </div>
            <p className="mt-4 text-accessible-base text-white/80 font-semibold text-center">
              Primer partido: 11 de junio de 2026
            </p>
          </div>

          {/* Stats del torneo con emojis */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 mb-8">
            {[
              { num: "48", desc: "Selecciones", emoji: "⚽" },
              { num: "3", desc: "Países Sede", emoji: "🏟️" },
              { num: "104", desc: "Partidos", emoji: "🎯" },
              { num: "16", desc: "Grupos", emoji: "👥" },
            ].map((stat) => (
              <div
                key={stat.desc}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3"
              >
                <span className="text-2xl mb-1">{stat.emoji}</span>
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

      {/* Carrusel de paisajes argentinos */}
      <div className="bg-muted px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-center text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Argentina, nuestra tierra
          </p>
          <p className="mb-6 text-center text-2xl font-black text-foreground text-balance">
            Los paisajes que nos inspiran
          </p>
          <Carrusel />
        </div>
      </div>

      {/* Cards de secciones */}
      <div className="bg-background px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-center text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Exploramos juntos
          </p>
          <p className="mb-8 text-center text-3xl font-black text-foreground md:text-4xl text-balance">
            Cinco caminos para descubrir el Mundial
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {CARDS.map((card) => {
              return (
                <button
                  key={card.id}
                  onClick={() => onNavigate(card.id)}
                  className="flex flex-col rounded-2xl overflow-hidden border-2 border-gray-200 bg-white hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-2"
                >
                  {/* IMAGEN REAL */}
                  <div className="relative w-full h-52 overflow-hidden bg-gray-200">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  {/* Pictograma encima de la imagen */}
                  <div className="absolute bottom-3 left-3 bg-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
                    <PictogramaCard tipo={card.pictograma || card.emoji} />
                  </div>
                  </div>

                  {/* CONTENIDO */}
                  <div className="flex flex-col gap-3 p-6">
                    <h3 className="text-2xl font-black tracking-wide text-gray-900 leading-tight uppercase">
                      {card.titulo}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {card.descripcion}
                    </p>
                    <div className="w-full mt-2 py-4 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl rounded-xl border-2 border-primary transition-all duration-200 min-h-[56px] flex items-center justify-center pointer-events-none">
                      {card.boton}
                    </div>
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
