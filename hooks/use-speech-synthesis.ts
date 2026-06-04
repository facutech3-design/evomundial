"use client"

import { useState, useCallback, useEffect } from "react"

export function useSpeechSynthesis() {
  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const hasSupport = "speechSynthesis" in window
    console.log("[v0] Speech Synthesis soportado:", hasSupport)
  }, [])

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      console.log("[v0] speechSynthesis no disponible")
      return
    }

    if (!text || !text.trim()) {
      console.log("[v0] Texto vacío")
      return
    }

    try {
      window.speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance(text.trim())
      utterance.lang = "es-ES"
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 1

      utterance.onstart = () => {
        console.log("[v0] SONIDO INICIADO - Leyendo en voz alta")
        setIsListening(true)
      }

      utterance.onend = () => {
        console.log("[v0] Lectura completada")
        setIsListening(false)
      }

      utterance.onerror = (event) => {
        console.log("[v0] Error:", event.error)
        setIsListening(false)
      }

      window.speechSynthesis.speak(utterance)
    } catch (error) {
      console.log("[v0] Excepción:", error)
      setIsListening(false)
    }
  }, [])

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      setIsListening(false)
    }
  }, [])

  return {
    speak,
    stop,
    isListening,
  }
}


