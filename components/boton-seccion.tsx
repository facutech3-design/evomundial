"use client"

import { useEasySpeech } from "@/hooks/use-easy-speech"

interface Props {
  texto: string
}

export function BotonSeccion({ texto }: Props) {
  const { hablar, detener, estado } = useEasySpeech()
  const activo = estado === "speaking" || 
                 estado === "paused"

  return (
    <button
      onClick={activo 
        ? detener 
        : () => hablar(texto)}
      className={`
        flex items-center gap-2
        px-5 py-3 rounded-xl
        font-bold text-lg
        min-h-[52px]
        border-2 transition-all duration-200
        ${activo
          ? "bg-yellow-500 border-yellow-600 text-black"
          : "bg-white border-gray-300 text-gray-800 hover:border-green-500"
        }
      `}
      aria-label={activo 
        ? "Detener lectura" 
        : "Escuchar esta sección"}
    >
      <span className="text-2xl">
        {activo ? "⏸️" : "🔈"}
      </span>
      <span>
        {activo ? "Detener" : "Escuchar"}
      </span>
    </button>
  )
}
