"use client"

import { useSpeech } from "react-text-to-speech"

interface BotonLeerProps {
  texto: string
  etiqueta?: string
}

export function BotonLeer({ 
  texto, 
  etiqueta = "Escuchar" 
}: BotonLeerProps) {
  const { speechStatus, start, stop } = useSpeech({
    text: texto,
    lang: "es-AR",
    rate: 0.85,
    pitch: 1,
    volume: 1,
    preserveUtteranceQueue: false,
  })

  const hablando = speechStatus === "started"

  return (
    <button
      onClick={hablando ? stop : start}
      aria-label={hablando ? "Detener lectura" : etiqueta}
      className={`
        flex items-center gap-2 
        px-4 py-3 rounded-xl
        font-bold text-lg
        min-h-[52px] min-w-[52px]
        border-2 transition-all duration-200
        ${hablando 
          ? "bg-green-600 border-green-400 text-white scale-105" 
          : "bg-white border-gray-300 text-gray-800 hover:border-green-500"
        }
      `}
    >
      <span className="text-2xl" aria-hidden="true">
        {hablando ? "🔊" : "🔈"}
      </span>
      <span className="sr-only sm:not-sr-only">
        {hablando ? "Detener" : etiqueta}
      </span>
    </button>
  )
}
