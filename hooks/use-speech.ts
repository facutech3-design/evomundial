"use client"

import { useState, useCallback, useEffect } from "react"

export function useSpeech() {
  const [hablando, setHablando] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const iniciar = () => {
      const voices = window.speechSynthesis.getVoices()
      console.log("[v0] Voces disponibles:", voices.length)
    }

    if (window.speechSynthesis.getVoices().length > 0) {
      iniciar()
    } else {
      window.speechSynthesis.onvoiceschanged = iniciar
    }
  }, [])

  const hablar = useCallback((texto: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return

    if (!texto || !texto.trim()) return

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(texto)
    utterance.lang = "es-AR"
    utterance.rate = 0.85
    utterance.pitch = 1
    utterance.volume = 1

    const iniciar = () => {
      const voices = window.speechSynthesis.getVoices()
      const voz = voices.find((v) => v.lang.startsWith("es")) || voices[0]
      if (voz) utterance.voice = voz

      utterance.onstart = () => setHablando(true)
      utterance.onend = () => setHablando(false)
      utterance.onerror = () => setHablando(false)

      window.speechSynthesis.speak(utterance)
    }

    if (window.speechSynthesis.getVoices().length > 0) {
      iniciar()
    } else {
      window.speechSynthesis.onvoiceschanged = iniciar
    }
  }, [])

  const detener = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    setHablando(false)
  }, [])

  return { hablar, detener, hablando }
}
