"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import Navbar, { SECTIONS } from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import PaisesSection from "@/components/paises-section"
import ValoresSection from "@/components/valores-section"
import ArteSection from "@/components/arte-section"
import ActividadesSection from "@/components/actividades-section"
import EmpleosSection from "@/components/empleos-section"
import SpeakButton from "@/components/speak-button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SECTION_IDS = SECTIONS.map((s) => s.id)

function SectionContent({
  id,
  onNavigate,
}: {
  id: string
  onNavigate: (id: string) => void
}) {
  switch (id) {
    case "inicio":
      return <HeroSection onNavigate={onNavigate} />
    case "paises":
      return <PaisesSection />
    case "valores":
      return <ValoresSection />
    case "arte":
      return <ArteSection />
    case "actividades":
      return <ActividadesSection />
    case "empleos":
      return <EmpleosSection />
    default:
      return <HeroSection onNavigate={onNavigate} />
  }
}

export default function Home() {
  const [sectionActiva, setSectionActiva] = useState("inicio")
  const [renderKey, setRenderKey] = useState(0)
  const mainContentRef = useRef<HTMLDivElement>(null)
  const [pageText, setPageText] = useState("Bienvenido a EvoMundial")

  const handleNavigate = useCallback((id: string) => {
    setSectionActiva(id)
    setRenderKey((k) => k + 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  // Extraer texto de la sección actual para lectura
  useEffect(() => {
    if (mainContentRef.current) {
      const textContent = mainContentRef.current.innerText || mainContentRef.current.textContent || ""
      if (textContent.trim().length > 0) {
        setPageText(textContent)
      }
    }
  }, [sectionActiva, renderKey])

  const currentIndex = SECTION_IDS.indexOf(sectionActiva)
  const prevSection = currentIndex > 0 ? SECTION_IDS[currentIndex - 1] : null
  const nextSection = currentIndex < SECTION_IDS.length - 1 ? SECTION_IDS[currentIndex + 1] : null

  const prevLabel = prevSection ? SECTIONS.find((s) => s.id === prevSection)?.label : null
  const nextLabel = nextSection ? SECTIONS.find((s) => s.id === nextSection)?.label : null

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar active={sectionActiva} onNavigate={handleNavigate} />

      <main className="flex-1" id="main-content" ref={mainContentRef}>
        {/* key fuerza re-mount y dispara la animacion section-enter en globals.css */}
        <div key={renderKey}>
          <SectionContent id={sectionActiva} onNavigate={handleNavigate} />
        </div>
      </main>

      {/* Botón de escuchar fijo en esquina */}
      {pageText && (
        <div className="fixed bottom-8 right-8 z-40 drop-shadow-2xl">
          <SpeakButton text={pageText} label="Escuchar página" variant="icon" />
        </div>
      )}

      {/* Footer navegacion entre secciones */}
      <footer className="border-t border-border bg-card px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* Boton anterior */}
          {prevSection ? (
            <button
              onClick={() => handleNavigate(prevSection)}
              className="flex items-center gap-2 rounded-2xl bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground transition-all hover:bg-foreground hover:text-primary-foreground active:scale-95"
            >
              <ChevronLeft size={16} />
              <span className="hidden sm:inline">{prevLabel}</span>
              <span className="sm:hidden">Anterior</span>
            </button>
          ) : (
            <div />
          )}

          {/* Indicador de progreso con puntos */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Secciones">
            {SECTION_IDS.map((id, i) => (
              <button
                key={id}
                onClick={() => handleNavigate(id)}
                role="tab"
                aria-selected={id === sectionActiva}
                aria-label={`Ir a ${SECTIONS[i].label}`}
                title={SECTIONS[i].label}
                className={`rounded-full transition-all duration-300 ${
                  id === sectionActiva
                    ? "h-3 w-8 bg-primary"
                    : "h-3 w-3 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          {/* Boton siguiente o volver al inicio */}
          {nextSection ? (
            <button
              onClick={() => handleNavigate(nextSection)}
              className="flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 active:scale-95"
            >
              <span className="hidden sm:inline">{nextLabel}</span>
              <span className="sm:hidden">Siguiente</span>
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={() => handleNavigate("inicio")}
              className="flex items-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all hover:opacity-90 active:scale-95"
            >
              Volver al inicio
              <ChevronRight size={16} />
            </button>
          )}
        </div>

        {/* Creditos */}
        <p className="mt-4 text-center text-sm text-muted-foreground font-semibold">
          EvoMundial 2026 — Proyecto educativo e inclusivo — Centro Dia, Mendoza, Argentina
        </p>
      </footer>
    </div>
  )
}
