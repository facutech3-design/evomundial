"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Pictogramas ARASAAC como componentes SVG
const PictogramasMundo = () => (
  <div className="w-28 h-28 flex items-center justify-center">
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mundo%20ara-yv1yDRf3xUA5iEGFNg2KtOCOTMRXWG.png"
      alt="Mundo"
      width={112}
      height={112}
      className="w-28 h-28 object-contain"
    />
  </div>
)

const PictogramasPintura = () => (
  <div className="w-28 h-28 flex items-center justify-center">
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creatividadara-V4THdSzv7JJWMQ88Zt5g1xj5qgxmSs.png"
      alt="Arte y Creatividad"
      width={112}
      height={112}
      className="w-28 h-28 object-contain"
    />
  </div>
)

const PictogramasDeporte = () => (
  <div className="w-28 h-28 flex items-center justify-center">
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/baloncesto%20adaptado%20ara-SP5IbDXiqOzwg8ItiFEJfsI8R1inMG.png"
      alt="Actividades Adaptadas"
      width={112}
      height={112}
      className="w-28 h-28 object-contain"
    />
  </div>
)

const PictogramasTrabajo = () => (
  <div className="w-28 h-28 flex items-center justify-center">
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%C2%BFcu%C3%A1l%20es%20tu%20trabajo-IHmNAAbnDlvy8F4P0zI3iN4bOakoFd.png"
      alt="Empleos del Mundial"
      width={112}
      height={112}
      className="w-28 h-28 object-contain"
    />
  </div>
)

const PictogramasAmistad = () => (
  <svg width="112" height="112" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="35" r="12" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
    <circle cx="65" cy="35" r="12" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
    <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
    <path d="M47 62 L53 62 L55 75 L45 75 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2"/>
    <path d="M30 47 L40 47 L38 62 L28 62 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2"/>
    <path d="M60 47 L70 47 L72 62 L62 62 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2"/>
  </svg>
)

const SECTIONS = [
  { id: "paises", label: "Países y Culturas", icon: PictogramasMundo },
  { id: "arte", label: "Arte y Creatividad", icon: PictogramasPintura },
  { id: "actividades", label: "Actividades Adaptadas", icon: PictogramasDeporte },
  { id: "empleos", label: "Empleos del Mundial", icon: PictogramasTrabajo },
  { id: "valores", label: "Valores e Inclusión", icon: PictogramasAmistad },
]

// Colores de acento por seccion para el indicador activo
const SECTION_ACCENT: Record<string, string> = {
  paises: "bg-primary text-primary-foreground",
  valores: "bg-success text-success-foreground",
  arte: "bg-creative text-creative-foreground",
  actividades: "bg-accent text-accent-foreground",
  empleos: "bg-white text-foreground",
}

export default function Navbar({
  active,
  onNavigate,
}: {
  active: string
  onNavigate: (id: string) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Leer preferencia guardada al montar
  useEffect(() => {
    const saved = localStorage.getItem("evomundial-theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const dark = saved ? saved === "dark" : prefersDark
    setIsDark(dark)
    document.documentElement.classList.toggle("dark", dark)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("evomundial-theme", next ? "dark" : "light")
  }

  const activeIndex = SECTIONS.findIndex((s) => s.id === active)
  const progressPercent = ((activeIndex) / (SECTIONS.length - 1)) * 100

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      {/* Barra de progreso superior */}
      <div className="h-1 w-full bg-white/10" aria-hidden="true">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-full items-center justify-between px-6 py-4 gap-6">
        {/* Logo y Mundial - Lado izquierdo comprimido */}
        <div className="flex items-center gap-2 flex-shrink-0">

        </div>

        {/* Logo - Botón de Inicio */}
        <button
          onClick={() => onNavigate("inicio")}
          className="flex items-center hover:opacity-80 transition-opacity active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent flex-shrink-0"
          aria-label="Ir al inicio"
        >
          <Image
            src="/evolutiva.jpeg"
            alt="Logo Evolutiva"
            width={112}
            height={112}
            className="rounded-lg object-contain bg-white p-1 w-28 h-28"
          />
        </button>
          {SECTIONS.map((s) => {
            const Icon = s.icon
            const isActive = active === s.id
            return (
              <li key={s.id}>
                <button
                  onClick={() => onNavigate(s.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-2 text-base font-bold transition-all",
                    isActive
                      ? cn(SECTION_ACCENT[s.id], "shadow-md scale-100")
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Icon />
                  {s.label}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Seccion activa en tablet */}
        <div className="hidden md:flex lg:hidden items-center gap-2 text-sm font-bold text-white/70">
          {(() => {
            const s = SECTIONS.find((s) => s.id === active)
            const Icon = s?.icon
            return Icon ? <><Icon />{s?.label}</> : null
          })()}
        </div>

        {/* Boton tema + menu mobile */}
        <div className="flex items-center gap-2">
          {/* Toggle oscuro / claro */}
          <button
            onClick={toggleTheme}
            className="rounded-full bg-white/10 p-2.5 text-white transition-all hover:bg-white/20 active:scale-95"
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            title={isDark ? "Modo claro" : "Modo oscuro"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10 px-6 pb-4">
          <ul className="flex flex-col gap-1 pt-2" role="list">
            {SECTIONS.map((s) => {
              const Icon = s.icon
              const isActive = active === s.id
              return (
                <li key={s.id}>
                  <button
                    onClick={() => { onNavigate(s.id); setMenuOpen(false) }}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-4 py-4 text-accessible-lg font-bold transition-all",
                      isActive
                        ? cn(SECTION_ACCENT[s.id], "shadow-sm")
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <Icon />
                    {s.label}
                    {isActive && (
                      <span className="ml-auto text-xs opacity-70 font-normal">Estas aqui</span>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}

export { SECTIONS }
