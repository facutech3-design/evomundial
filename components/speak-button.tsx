"use client"

import { Volume2, Volume1, VolumeX } from "lucide-react"
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis"
import { useState } from "react"

interface SpeakButtonProps {
  text: string
  label?: string
  variant?: "icon" | "button"
}

export default function SpeakButton({
  text,
  label = "Escuchar",
  variant = "icon",
}: SpeakButtonProps) {
  const { speak, stop, isListening } = useSpeechSynthesis()
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClick = () => {
    console.log("[v0] SpeakButton clicked")
    console.log("[v0] isListening:", isListening)
    console.log("[v0] text length:", text?.length)
    
    if (isListening) {
      console.log("[v0] Deteniendo lectura")
      stop()
    } else {
      if (!text || text.trim().length === 0) {
        console.log("[v0] Error: texto vacío, no se puede hablar")
        return
      }
      console.log("[v0] Iniciando lectura con:", text.substring(0, 50))
      speak(text)
    }
  }

  if (variant === "icon") {
    return (
      <div className="relative">
        <button
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`flex items-center justify-center w-16 h-16 rounded-full shadow-xl transition-all active:scale-95 focus-visible:outline-3 focus-visible:outline-offset-2 font-bold ${
            isListening
              ? "bg-red-500 hover:bg-red-600 text-white shadow-red-500/50 animate-pulse"
              : "bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent/50"
          }`}
          aria-label={isListening ? "Detener lectura" : "Escuchar página"}
          title={isListening ? "Detener lectura" : "Escuchar página"}
        >
          {isListening ? (
            <Volume1 size={28} className="animate-bounce" />
          ) : (
            <Volume2 size={28} />
          )}
        </button>
        {showTooltip && (
          <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap pointer-events-none shadow-lg">
            {isListening ? "Detener lectura" : "Escuchar página"}
          </div>
        )}
      </div>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-3 rounded-full px-6 py-4 font-black text-accessible-lg transition-all focus-visible:outline-3 focus-visible:outline-offset-2 shadow-lg hover:shadow-xl active:scale-95 ${
        isListening
          ? "bg-red-500 hover:bg-red-600 text-white animate-pulse"
          : "bg-accent text-accent-foreground hover:bg-accent/90"
      }`}
      aria-label={isListening ? "Detener lectura" : label}
    >
      {isListening ? (
        <>
          <VolumeX size={24} />
          Detener
        </>
      ) : (
        <>
          <Volume2 size={24} />
          {label}
        </>
      )}
    </button>
  )
}
