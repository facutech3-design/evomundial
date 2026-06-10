"use client"

import { useState, useEffect, useRef } from "react"
import EasySpeech from "easy-speech"

type Estado = "idle" | "loading" | "speaking" | "paused" | "error"

export function useEasySpeech() {
  const [estado, setEstado] = useState<Estado>("idle")
  const [listo, setListo] = useState(false)
  const inicializado = useRef(false)

  useEffect(() => {
    if (inicializado.current) return
    inicializado.current = true

    EasySpeech.init({ maxTimeout: 5000, interval: 250 })
      .then(() => {
        setListo(true)
      })
      .catch(() => {
        setEstado("error")
      })
  }, [])

  const hablar = async (texto: string) => {
    if (!listo) return
    
    try {
      // Detener cualquier lectura anterior
      await EasySpeech.cancel()
      setEstado("speaking")

      // Buscar voz en español
      const voices = EasySpeech.voices()
      const vozEspanol = 
        voices.find(v => v.lang === "es-AR") ||
        voices.find(v => v.lang === "es-MX") ||
        voices.find(v => v.lang.startsWith("es")) ||
        voices[0]

      await EasySpeech.speak({
        text: texto,
        voice: vozEspanol,
        rate: 0.85,
        pitch: 1,
        volume: 1,
        lang: "es-AR",
        // Callbacks
        start: () => setEstado("speaking"),
        end: () => setEstado("idle"),
        error: () => setEstado("idle"),
        pause: () => setEstado("paused"),
        resume: () => setEstado("speaking"),
      })
    } catch {
      setEstado("idle")
    }
  }

  const detener = async () => {
    await EasySpeech.cancel()
    setEstado("idle")
  }

  const pausar = () => {
    EasySpeech.pause()
    setEstado("paused")
  }

  const reanudar = () => {
    EasySpeech.resume()
    setEstado("speaking")
  }

  return { 
    hablar, 
    detener, 
    pausar, 
    reanudar, 
    estado, 
    listo 
  }
}
