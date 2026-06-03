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
  const { speak, stop, isListening, isSupported } = useSpeechSynthesis()
  const [showTooltip, setShowTooltip] = useState(false)

  if (!isSupported) {
    return null
  }

  const handleClick = () => {
    if (isListening) {
      stop()
    } else {
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
          className="flex items-center justify-center w-11 h-11 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-all active:scale-95 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label={isListening ? "Detener lectura" : "Escuchar página"}
          title={isListening ? "Detener lectura" : "Escuchar página"}
        >
          {isListening ? (
            <Volume1 size={20} className="animate-pulse" />
          ) : (
            <Volume2 size={20} />
          )}
        </button>
        {showTooltip && (
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none">
            {isListening ? "Detener" : "Escuchar"}
          </div>
        )}
      </div>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 rounded-full px-4 py-2.5 font-bold text-accessible-sm transition-all focus-visible:outline-3 focus-visible:outline-offset-2 ${
        isListening
          ? "bg-red-500 hover:bg-red-600 text-white"
          : "bg-accent text-accent-foreground hover:opacity-90"
      }`}
      aria-label={isListening ? "Detener lectura" : label}
    >
      {isListening ? (
        <>
          <VolumeX size={18} />
          Detener
        </>
      ) : (
        <>
          <Volume2 size={18} />
          {label}
        </>
      )}
    </button>
  )
}
