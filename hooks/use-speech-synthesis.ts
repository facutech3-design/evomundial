"use client"

import { useState, useCallback, useEffect } from "react"

export function useSpeechSynthesis() {
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(true)

  useEffect(() => {
    if (typeof window === "undefined") return
    const hasSupport = "speechSynthesis" in window
    setIsSupported(hasSupport)
    console.log("[v0] Speech Synthesis soportado:", hasSupport)
  }, [])

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      console.log("[v0] Error: speechSynthesis no disponible")
      return
    }

    if (!text || text.trim().length === 0) {
      console.log("[v0] Error: texto vacío")
      return
    }

    try {
      console.log("[v0] Iniciando síntesis de voz...")
      console.log("[v0] Texto (primeros 100 caracteres):", text.substring(0, 100))
      
      // Cancelar cualquier reproducción anterior
      window.speechSynthesis.cancel()
      
      // Crear utterancia
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "es-ES"
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 1

      // Eventos
      utterance.onstart = () => {
        console.log("[v0] Síntesis iniciada")
        setIsListening(true)
      }

      utterance.onend = () => {
        console.log("[v0] Síntesis finalizada")
        setIsListening(false)
      }

      utterance.onerror = (event) => {
        console.log("[v0] Error en síntesis:", event.error)
        setIsListening(false)
      }

      // Iniciar síntesis
      console.log("[v0] Llamando window.speechSynthesis.speak()...")
      window.speechSynthesis.speak(utterance)
      console.log("[v0] Síntesis iniciada correctamente")
    } catch (error) {
      console.log("[v0] Excepción:", error)
      setIsListening(false)
    }
  }, [])

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      setIsListening(false)
      console.log("[v0] Síntesis detenida")
    }
  }, [])

  const pauseResume = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume()
        setIsListening(true)
      } else {
        window.speechSynthesis.pause()
        setIsListening(false)
      }
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

