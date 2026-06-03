"use client"

import { useState, useCallback, useRef } from "react"

export function useSpeechSynthesis() {
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(
    typeof window !== "undefined" && ("speechSynthesis" in window || "webkitSpeechSynthesis" in window)
  )
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const speak = useCallback((text: string) => {
    if (!isSupported) {
      alert("Síntesis de voz no soportada en tu navegador")
      return
    }

    // Cancelar cualquier reproducción anterior
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "es-ES"
    utterance.rate = 0.9 // Velocidad un poco más lenta para mejor comprensión
    utterance.pitch = 1
    utterance.volume = 1

    utterance.onstart = () => {
      setIsListening(true)
    }

    utterance.onend = () => {
      setIsListening(false)
    }

    utterance.onerror = () => {
      setIsListening(false)
    }

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [isSupported])

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
    setIsListening(false)
  }, [])

  const pauseResume = useCallback(() => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume()
      setIsListening(true)
    } else {
      window.speechSynthesis.pause()
      setIsListening(false)
    }
  }, [])

  return {
    speak,
    stop,
    pauseResume,
    isListening,
    isSupported,
  }
}
