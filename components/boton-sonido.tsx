"use client"

import { Volume2, Volume1 } from "lucide-react"
import { useSpeech } from "@/hooks/use-speech"

interface BotonSonidoProps {
  texto: string
  variant?: "icon" | "inline"
}

export default function BotonSonido({ texto, variant = "icon" }: BotonSonidoProps) {
  const { hablar, detener, hablando } = useSpeech()

  const handleClick = () => {
    if (hablando) {
      detener()
    } else {
      hablar(texto)
    }
  }

  if (variant === "inline") {
    return (
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 rounded-full px-4 py-2 font-bold text-sm transition-all active:scale-95 ${
          hablando
            ? "bg-red-500 text-white hover:bg-red-600 animate-pulse"
            : "bg-white/20 text-white hover:bg-white/30"
        }`}
        aria-label={hablando ? "Detener lectura" : "Escuchar"}
        suppressHydrationWarning
      >
        {hablando ? (
          <>
            <Volume1 size={18} className="animate-bounce" />
            Escuchando...
          </>
        ) : (
          <>
            <Volume2 size={18} />
            Escuchar
          </>
        )}
      </button>
    )
  }

  // Icon variant (default)
  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center w-12 h-12 rounded-full transition-all active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 ${
        hablando
          ? "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/50"
          : "bg-white/20 text-white hover:bg-white/30"
      }`}
      aria-label={hablando ? "Detener lectura" : "Escuchar"}
      title={hablando ? "Detener lectura" : "Escuchar"}
      suppressHydrationWarning
    >
      {hablando ? (
        <Volume1 size={20} className="animate-bounce" />
      ) : (
        <Volume2 size={20} />
      )}
    </button>
  )
}
