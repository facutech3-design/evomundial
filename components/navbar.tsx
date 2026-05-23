"use client"

import { useState } from "react"
import { Globe, Heart, Palette, Activity, Briefcase, Home, Menu, X } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "inicio", label: "Inicio", icon: Home },
  { id: "paises", label: "Paises y Culturas", icon: Globe },
  { id: "valores", label: "Valores e Inclusion", icon: Heart },
  { id: "arte", label: "Arte y Creatividad", icon: Palette },
  { id: "actividades", label: "Actividades Adaptadas", icon: Activity },
  { id: "empleos", label: "Empleos del Mundial", icon: Briefcase },
]

// Colores de acento por seccion para el indicador activo
const SECTION_ACCENT: Record<string, string> = {
  inicio: "bg-white text-foreground",
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
  const activeIndex = SECTIONS.findIndex((s) => s.id === active)
  const progressPercent = ((activeIndex) / (SECTIONS.length - 1)) * 100

  return (
    <nav className="sticky top-0 z-50 bg-foreground text-primary-foreground shadow-lg">
      {/* Barra de progreso superior */}
      <div className="h-1 w-full bg-white/10" aria-hidden="true">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <button
          onClick={() => onNavigate("inicio")}
          className="flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <Image
            src="/evolutiva.jpeg"
            alt="Logo Evolutiva"
            width={40}
            height={40}
            className="rounded-lg object-contain bg-white p-0.5"
          />
          <div className="flex flex-col items-start leading-none">
            <span className="text-xl font-black tracking-tight text-white">
              EVO<span className="text-accent">MUNDIAL</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 mt-0.5">
              Centro Dia Evolutiva
            </span>
          </div>
          <span className="hidden md:block rounded-full bg-accent/20 px-2 py-0.5 text-xs font-bold text-accent">
            2026
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {SECTIONS.map((s) => {
            const Icon = s.icon
            const isActive = active === s.id
            return (
              <li key={s.id}>
                <button
                  onClick={() => onNavigate(s.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition-all",
                    isActive
                      ? cn(SECTION_ACCENT[s.id], "shadow-md scale-105")
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Icon size={14} />
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
            return Icon ? <><Icon size={16} />{s?.label}</> : null
          })()}
        </div>

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

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-foreground border-t border-white/10 px-6 pb-4">
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
                      "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold transition-all",
                      isActive
                        ? cn(SECTION_ACCENT[s.id], "shadow-sm")
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <Icon size={18} />
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
