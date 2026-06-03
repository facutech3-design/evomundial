"use client"

import { useState, useCallback, useRef, useEffect } from "react"

export function useSpeechSynthesis() {
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  // Verificar soporte y cargar voces al montar
  useEffect(() => {
    if (typeof window === "undefined") return
    
    const supported = "speechSynthesis" in window
    setIsSupported(supported)
    console.log("[v0] Speech Synthesis soportado:", supported)
    
    if (supported) {
      // Cargar voces disponibles
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices()
        console.log("[v0] Voces disponibles:", voices.length)
        voices.forEach((v, i) => {
          if (v.lang.includes("es")) {
            console.log(`[v0] Voz español ${i}:`, v.name, v.lang)
          }
        })
      }
      
      loadVoices()
      window.speechSynthesis.onvoiceschanged = loadVoices
    }
  }, [])

  const speak = useCallback((text: string) => {
    if (!text) {
      console.log("[v0] Error: texto vacío")
      return
    }

    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      console.log("[v0] Error: window.speechSynthesis no disponible")
      return
    }

    try {
      console.log("[v0] === Iniciando síntesis de voz ===")
      console.log("[v0] Texto:", text.substring(0, 100))
      
      // Cancelar cualquier reproducción anterior
      window.speechSynthesis.cancel()
      console.log("[v0] Cancelada reproducción anterior")
      
      // Crear utterancia
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "es-ES"
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 1

      // Intentar asignar voz en español
      const voices = window.speechSynthesis.getVoices()
      const spanishVoice = voices.find(v => v.lang.startsWith("es"))
      if (spanishVoice) {
        utterance.voice = spanishVoice
        console.log("[v0] Voz asignada:", spanishVoice.name)
      } else {
        console.log("[v0] No se encontró voz en español, usando voz por defecto")
      }

      utterance.onstart = () => {
        console.log("[v0] ✓ Síntesis iniciada")
        setIsListening(true)
      }

      utterance.onend = () => {
        console.log("[v0] ✓ Síntesis finalizada")
        setIsListening(false)
      }

      utterance.onerror = (event: SpeechSynthesisErrorEvent) => {
        console.log("[v0] ✗ Error:", event.error)
        setIsListening(false)
      }

      utterance.onpause = () => {
        console.log("[v0] Síntesis pausada")
      }

      utterance.onresume = () => {
        console.log("[v0] Síntesis reanudada")
      }

      utteranceRef.current = utterance
      
      console.log("[v0] Llamando a window.speechSynthesis.speak()...")
      const result = window.speechSynthesis.speak(utterance)
      console.log("[v0] Resultado:", result !== null)
      console.log("[v0] === Síntesis enviada al sistema ===")
    } catch (error) {
      console.log("[v0] Excepción en speak():", error)
      setIsListening(false)
    }
  }, [])

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
