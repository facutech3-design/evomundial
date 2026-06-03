"use client"

import { useState, useCallback, useRef, useEffect } from "react"

export function useSpeechSynthesis() {
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  // Verificar soporte al montar
  useEffect(() => {
    const supported = typeof window !== "undefined" && ("speechSynthesis" in window || "webkitSpeechSynthesis" in window)
    setIsSupported(supported)
  }, [])

  const speak = useCallback((text: string) => {
    if (!text || text.trim().length === 0) {
      console.log("[v0] No hay texto para leer")
      return
    }

    if (!isSupported) {
      console.log("[v0] Síntesis de voz no soportada")
      return
    }

    try {
      // Cancelar cualquier reproducción anterior
      window.speechSynthesis.cancel()
      
      // Pequeña pausa para asegurar que se cancele bien
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = "es-ES"
        utterance.rate = 0.9 // Velocidad un poco más lenta para mejor comprensión
        utterance.pitch = 1
        utterance.volume = 1

        utterance.onstart = () => {
          console.log("[v0] Iniciando lectura")
          setIsListening(true)
        }

        utterance.onend = () => {
          console.log("[v0] Lectura finalizada")
          setIsListening(false)
        }

        utterance.onerror = (event) => {
          console.log("[v0] Error en síntesis:", event.error)
          setIsListening(false)
        }

        utteranceRef.current = utterance
        console.log("[v0] Iniciando síntesis de voz con", text.substring(0, 50) + "...")
        window.speechSynthesis.speak(utterance)
      }, 100)
    } catch (error) {
      console.log("[v0] Error al iniciar síntesis:", error)
      setIsListening(false)
    }
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
