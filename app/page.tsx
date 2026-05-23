"use client"

import { useState } from "react"
import Navbar, { SECTIONS } from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import PaisesSection from "@/components/paises-section"
import ValoresSection from "@/components/valores-section"
import ArteSection from "@/components/arte-section"
import ActividadesSection from "@/components/actividades-section"
import EmpleosSection from "@/components/empleos-section"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SECTION_IDS = SECTIONS.map((s) => s.id)

function renderSection(id: string, onNavigate: (id: string) => void) {
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

  const currentIndex = SECTION_IDS.indexOf(sectionActiva)
  const prevSection = currentIndex > 0 ? SECTION_IDS[currentIndex - 1] : null
  const nextSection = currentIndex < SECTION_IDS.length - 1 ? SECTION_IDS[currentIndex + 1] : null

  const prevLabel = prevSection ? SECTIONS.find((s) => s.id === prevSection)?.label : null
  const nextLabel = nextSection ? SECTIONS.find((s) => s.id === nextSection)?.label : null

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar active={sectionActiva} onNavigate={setSectionActiva} />

      <main className="flex-1" id="main-content">
        {renderSection(sectionActiva, setSectionActiva)}
      </main>

      {/* Footer navegacion entre secciones */}
      <footer className="border-t border-border bg-card px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* Boton anterior */}
          {prevSection ? (
            <button
              onClick={() => setSectionActiva(prevSection)}
              className="flex items-center gap-2 rounded-2xl bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground transition-all hover:bg-foreground hover:text-primary-foreground active:scale-95"
            >
              <ChevronLeft size={16} />
              <span className="hidden sm:inline">{prevLabel}</span>
              <span className="sm:hidden">Anterior</span>
            </button>
          ) : (
            <div />
          )}

          {/* Indicador de progreso */}
          <div className="flex items-center gap-2">
            {SECTION_IDS.map((id, i) => (
              <button
                key={id}
                onClick={() => setSectionActiva(id)}
                aria-label={`Ir a ${SECTIONS[i].label}`}
                className={`rounded-full transition-all ${
                  id === sectionActiva
                    ? "h-3 w-8 bg-primary"
                    : "h-3 w-3 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          {/* Boton siguiente */}
          {nextSection ? (
            <button
              onClick={() => setSectionActiva(nextSection)}
              className="flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 active:scale-95"
            >
              <span className="hidden sm:inline">{nextLabel}</span>
              <span className="sm:hidden">Siguiente</span>
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={() => setSectionActiva("inicio")}
              className="flex items-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all hover:opacity-90 active:scale-95"
            >
              Volver al inicio
              <ChevronRight size={16} />
            </button>
          )}
        </div>

        {/* Creditos */}
        <div className="mt-4 text-center text-xs text-muted-foreground">
          EvoMundial 2026 — Proyecto educativo e inclusivo — Centro Dia, Mendoza, Argentina
        </div>
      </footer>
    </div>
  )
}
