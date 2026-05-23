"use client"

import { useState } from "react"
import { Globe, Heart, Palette, Activity, Briefcase, ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "inicio", label: "Inicio", icon: null },
  { id: "paises", label: "Paises y Culturas", icon: Globe },
  { id: "valores", label: "Valores e Inclusion", icon: Heart },
  { id: "arte", label: "Arte y Creatividad", icon: Palette },
  { id: "actividades", label: "Actividades Adaptadas", icon: Activity },
  { id: "empleos", label: "Empleos del Mundial", icon: Briefcase },
]

export default function Navbar({
  active,
  onNavigate,
}: {
  active: string
  onNavigate: (id: string) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-foreground text-primary-foreground shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <button
          onClick={() => onNavigate("inicio")}
          className="flex items-center gap-2 group"
          aria-label="Ir al inicio"
        >
          <span className="text-2xl font-black tracking-tight text-white leading-none">
            EVO<span className="text-accent">MUNDIAL</span>
          </span>
          <span className="hidden md:block text-xs text-white/50 font-normal mt-1">
            2026
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {SECTIONS.slice(1).map((s) => {
            const Icon = s.icon
            return (
              <li key={s.id}>
                <button
                  onClick={() => onNavigate(s.id)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-700 transition-all",
                    active === s.id
                      ? "bg-accent text-accent-foreground"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {Icon && <Icon size={14} />}
                  {s.label}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-foreground border-t border-white/10 px-6 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {SECTIONS.slice(1).map((s) => {
              const Icon = s.icon
              return (
                <li key={s.id}>
                  <button
                    onClick={() => { onNavigate(s.id); setMenuOpen(false) }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold transition-all",
                      active === s.id
                        ? "bg-accent text-accent-foreground"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {Icon && <Icon size={18} />}
                    {s.label}
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
