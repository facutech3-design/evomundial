"use client"

import { useEasySpeech } from "@/hooks/use-easy-speech"

const TEXTO_COMPLETO = `
  Bienvenidos a EvoMundial 2026.
  Proyecto del Centro Día Evolutiva, Mendoza, Argentina.
  El Mundial es de todos.
  Secciones del sitio:
  Países y Culturas: Viajamos por el mundo. 
  Conocemos otros países.
  Valores e Inclusión: Respeto, fair play y diversidad.
  Arte y Creatividad: Pintamos, diseñamos y creamos juntos.
  Actividades Adaptadas: Jugamos y nos movemos. 
  El deporte es para todos.
  Empleos del Mundial: Descubrimos quién trabaja 
  en un mundial.
`

export function LectorGlobal() {
  const { hablar, detener, pausar, reanudar, 
          estado, listo } = useEasySpeech()

  if (!listo && estado !== "error") return null

  const acciones = {
    idle: {
      onClick: () => hablar(TEXTO_COMPLETO),
      emoji: "🔊",
      label: "Escuchar el sitio",
      bg: "bg-green-600 hover:bg-green-700",
      pulse: false,
    },
    loading: {
      onClick: () => {},
      emoji: "⏳",
      label: "Cargando voz...",
      bg: "bg-gray-500",
      pulse: true,
    },
    speaking: {
      onClick: pausar,
      emoji: "⏸️",
      label: "Pausar lectura",
      bg: "bg-yellow-500 hover:bg-yellow-600",
      pulse: true,
    },
    paused: {
      onClick: reanudar,
      emoji: "▶️",
      label: "Continuar lectura",
      bg: "bg-blue-600 hover:bg-blue-700",
      pulse: false,
    },
    error: {
      onClick: () => {},
      emoji: "❌",
      label: "Voz no disponible",
      bg: "bg-red-500",
      pulse: false,
    },
  }[estado]

  return (
    <div className="fixed bottom-6 right-6 z-50 
      flex flex-col items-end gap-2">
      
      {/* Etiqueta */}
      <span className="bg-black/75 text-white 
        text-sm font-bold px-3 py-1.5 
        rounded-full whitespace-nowrap">
        {acciones.label}
      </span>

      {/* Botón principal */}
      <button
        onClick={acciones.onClick}
        aria-label={acciones.label}
        className={`
          w-20 h-20 rounded-full
          text-4xl font-bold
          border-4 border-white
          shadow-2xl
          transition-all duration-200
          active:scale-90
          ${acciones.bg}
          ${acciones.pulse ? "animate-pulse" : ""}
        `}
      >
        {acciones.emoji}
      </button>

      {/* Botón detener — solo cuando está activo */}
      {(estado === "speaking" || estado === "paused") && (
        <button
          onClick={detener}
          aria-label="Detener lectura"
          className="w-12 h-12 rounded-full text-2xl
            bg-red-600 hover:bg-red-700
            border-2 border-white shadow-lg
            transition-all duration-200
            active:scale-90"
        >
          ⏹️
        </button>
      )}
    </div>
  )
}
