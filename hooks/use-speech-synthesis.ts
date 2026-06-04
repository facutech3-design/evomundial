"use client"

import { useState, useCallback, useEffect } from "react"

export function useSpeechSynthesis() {
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    
    const hasSupport = "speechSynthesis" in window
    setIsSupported(hasSupport)
    console.log("[v0] useSpeechSynthesis: Support =", hasSupport)
    
    if (!hasSupport) {
      console.log("[v0] ADVERTENCIA: speechSynthesis no está disponible en este navegador")
    }
  }, [])

  const speak = useCallback((text: string) => {
    console.log("[v0] speak() llamado con texto de longitud:", text?.length)
    
    // Verificación adicional de window
    if (typeof window === "undefined") {
      console.log("[v0] speak(): window es undefined (SSR)")
      return
    }
    
    if (!("speechSynthesis" in window)) {
      console.log("[v0] speak(): window.speechSynthesis no existe")
      return
    }

    if (!text) {
      console.log("[v0] speak(): texto es falsy")
      return
    }

    const trimmedText = text.trim()
    if (trimmedText.length === 0) {
      console.log("[v0] speak(): texto vacío después de trim")
      return
    }

    try {
      console.log("[v0] === INICIANDO SÍNTESIS DE VOZ ===")
      console.log("[v0] Texto (primeros 100 chars):", trimmedText.substring(0, 100))
      
      // Cancelar reproducción anterior
      window.speechSynthesis.cancel()
      console.log("[v0] Reproducción anterior cancelada")
      
      // Crear utterancia
      const utterance = new SpeechSynthesisUtterance(trimmedText)
      utterance.lang = "es-ES"
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 1

      // Event handlers
      utterance.onstart = () => {
        console.log("[v0] ✓✓✓ SÍNTESIS INICIADA - SONIDO ESTÁ PLAYING ✓✓✓")
        setIsListening(true)
      }

      utterance.onend = () => {
        console.log("[v0] ✓ Síntesis completada")
        setIsListening(false)
      }

      utterance.onerror = (event) => {
        console.log("[v0] ✗✗✗ ERROR EN SÍNTESIS:", event.error)
        setIsListening(false)
      }

      // Enviar a síntesis
      console.log("[v0] Llamando window.speechSynthesis.speak()...")
      window.speechSynthesis.speak(utterance)
      console.log("[v0] ✓ speak() completado")
      console.log("[v0] === FIN INICIACIÓN SÍNTESIS ===")
    } catch (error) {
      console.log("[v0] ✗ Excepción en speak():", error)
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

