"use client"

import { useState, useCallback, useRef, useEffect } from "react"

export function useSpeechSynthesis() {
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  // Verificar soporte al montar
  useEffect(() => {
    const supported = typeof window !== "undefined" && "speechSynthesis" in window
    setIsSupported(supported)
    console.log("[v0] Speech Synthesis soportado:", supported)
  }, [])

  const speak = useCallback((text: string) => {
    if (!text) {
      console.log("[v0] Error: No hay texto para leer")
      return
    }

    try {
      console.log("[v0] speak() llamado con texto:", text.substring(0, 80) + "...")
      console.log("[v0] isSupported actual:", isSupported)
      
      // Usar speechSynthesis directamente en lugar de isSupported
      if (!window.speechSynthesis) {
        console.log("[v0] Error: window.speechSynthesis no existe")
        return
      }

      // Cancelar cualquier reproducción anterior
      window.speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "es-ES"
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 1

      utterance.onstart = () => {
        console.log("[v0] ✓ Síntesis iniciada")
        setIsListening(true)
      }

      utterance.onend = () => {
        console.log("[v0] ✓ Síntesis finalizada")
        setIsListening(false)
      }

      utterance.onerror = (event: SpeechSynthesisErrorEvent) => {
        console.log("[v0] ✗ Error de síntesis:", event.error)
        setIsListening(false)
      }

      utteranceRef.current = utterance
      
      console.log("[v0] Llamando a speechSynthesis.speak()...")
      window.speechSynthesis.speak(utterance)
      console.log("[v0] speak() ejecutado")
    } catch (error) {
      console.log("[v0] Excepción en speak():", error)
      setIsListening(false)
    }
  }, [isSupported])

  const stop = useCallback(() => {
    console.log("[v0] Deteniendo síntesis...")
    window.speechSynthesis.cancel()
    setIsListening(false)
  }, [])

  const pauseResume = useCallback(() => {
    if (window.speechSynthesis.paused) {
      console.log("[v0] Reanudando síntesis...")
      window.speechSynthesis.resume()
      setIsListening(true)
    } else {
      console.log("[v0] Pausando síntesis...")
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
