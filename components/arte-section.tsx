"use client"

import { useState } from "react"
import { Palette, Shirt, Flag, Star, Paintbrush, ImageIcon } from "lucide-react"

const ACTIVIDADES_ARTE = [
  {
    id: "camiseta",
    icon: Shirt,
    titulo: "Disenamos la camiseta",
    descripcion:
      "¿Como seria la camiseta ideal del centro? Elegimos colores, numeros, escudo y nombre. Cada persona disena la suya.",
    materiales: ["Papel o tela blanca", "Marcadores de colores", "Pinturas textiles (si hay)", "Imaginacion"],
    pasos: [
      "Miramos disenos de camisetas de distintos paises",
      "Elegimos colores que representen al grupo",
      "Dibujamos la silueta de una camiseta",
      "La decoramos con nuestro nombre o numero",
      "Compartimos y votamos la camiseta favorita",
    ],
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    id: "bandera",
    icon: Flag,
    titulo: "Inventamos nuestra bandera",
    descripcion:
      "Si el centro fuera un pais, ¿como seria su bandera? Que simbolos, colores y formas nos representan a todos.",
    materiales: ["Papel de color", "Tijeras", "Cola vinilica", "Marcadores"],
    pasos: [
      "Hablamos de que colores nos gustan y que representan",
      "Elegimos un simbolo o figura que nos una",
      "Disenamos la bandera entre todos",
      "Le ponemos un nombre a nuestro pais imaginario",
      "Presentamos la bandera como si fuera oficial",
    ],
    color: "bg-success",
    textColor: "text-success-foreground",
  },
  {
    id: "mascota",
    icon: Star,
    titulo: "Creamos la mascota",
    descripcion:
      "Cada Mundial tiene una mascota oficial. Inventamos la nuestra: un animal, un personaje o un ser imaginario que represente los valores del grupo.",
    materiales: ["Papel", "Colores y marcadores", "Arcilla o plastilina (opcional)", "Lapices"],
    pasos: [
      "Miramos mascotas de Mundiales anteriores (Fuleco, Zabivaka, Kaz y Adidas)",
      "Pensamos que animal o ser nos representa",
      "Lo dibujamos y le ponemos nombre",
      "Escribimos su historia: de donde viene, que poderes tiene",
      "La presentamos al grupo",
    ],
    color: "bg-creative",
    textColor: "text-creative-foreground",
  },
  {
    id: "afiche",
    icon: ImageIcon,
    titulo: "Armamos el afiche del torneo",
    descripcion:
      "Creamos el afiche oficial del torneo del centro. Con nombre, fecha, equipos participantes y un eslogan que diga quienes somos.",
    materiales: ["Papel grande (A3 o afiche)", "Revistas para recortar", "Marcadores gruesos", "Regla"],
    pasos: [
      "Decidimos el nombre del torneo del centro",
      "Inventamos los equipos que participan",
      "Disenamos el afiche con toda la informacion",
      "Agregamos una frase que represente al grupo",
      "Lo colgamos en el centro",
    ],
    color: "bg-accent",
    textColor: "text-accent-foreground",
  },
]

const MASCOTAS_MUNDIALES = [
  { mundial: "Argentina 1978", mascota: "Gauchito", descripcion: "Un nino gaucho con poncho y sombrero" },
  { mundial: "Mexico 1986", mascota: "Pique", descripcion: "Un chile jalapeño con bigotes y sombrero" },
  { mundial: "Francia 1998", mascota: "Footix", descripcion: "Un gallo azul con balon amarillo" },
  { mundial: "Sudafrica 2010", mascota: "Zakumi", descripcion: "Un leopardo verde y amarillo" },
  { mundial: "Brasil 2014", mascota: "Fuleco", descripcion: "Un armadillo azul y verde" },
  { mundial: "Rusia 2018", mascota: "Zabivaka", descripcion: "Un lobo con anteojos deportivos" },
  { mundial: "Qatar 2022", mascota: "La'eeb", descripcion: "Un keffiyeh blanco animado y jugueton" },
  { mundial: "USA-Mexico-Canada 2026", mascota: "Por definir", descripcion: "Se anuncia proximamente" },
]

export default function ArteSection() {
  const [actividadActiva, setActividadActiva] = useState<string | null>(null)

  const actividad = ACTIVIDADES_ARTE.find((a) => a.id === actividadActiva)

  return (
    <section className="min-h-screen bg-background px-6 py-12 section-enter">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-start gap-4">
          <div className="rounded-2xl bg-creative p-4">
            <Palette size={32} className="text-creative-foreground" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-foreground md:text-5xl">Arte y Creatividad</h2>
            <p className="mt-2 text-lg text-muted-foreground text-pretty">
              El arte no tiene reglas ni limites. Cada Mundial genera una explosion de colores, formas y expresion. 
              Nos sumamos a esa fiesta creativa.
            </p>
          </div>
        </div>

        {/* Selector de actividades */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ACTIVIDADES_ARTE.map((act) => {
            const Icon = act.icon
            const activa = actividadActiva === act.id
            return (
              <button
                key={act.id}
                onClick={() => setActividadActiva(activa ? null : act.id)}
                className={`flex flex-col rounded-3xl p-6 text-left transition-all hover:scale-105 active:scale-95 border-2 ${
                  activa ? "border-foreground" : "border-transparent"
                } ${act.color} ${act.textColor}`}
              >
                <div className="mb-3 rounded-2xl bg-white/20 p-3 w-fit">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-black mb-1 leading-tight">{act.titulo}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{act.descripcion}</p>
                <div className="mt-4 text-sm font-bold opacity-90">
                  {activa ? "Cerrar detalle" : "Ver actividad"}
                </div>
              </button>
            )
          })}
        </div>

        {/* Detalle de actividad expandida */}
        {actividad && (
          <div className="mb-10 rounded-3xl border-2 border-foreground bg-card p-8 shadow-xl section-enter">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-black text-foreground">{actividad.titulo}</h3>
              <button
                onClick={() => setActividadActiva(null)}
                className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-foreground hover:text-primary-foreground transition-all ml-4 shrink-0"
                aria-label="Cerrar detalle"
              >
                <span className="sr-only">Cerrar</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Materiales */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Paintbrush size={20} className="text-creative" />
                  <h4 className="font-black text-foreground uppercase text-sm tracking-wide">
                    Necesitamos
                  </h4>
                </div>
                <ul className="space-y-2">
                  {actividad.materiales.map((mat) => (
                    <li key={mat} className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3 text-sm font-semibold text-foreground">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-creative" aria-hidden="true" />
                      {mat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pasos */}
              <div>
                <h4 className="mb-3 font-black text-foreground uppercase text-sm tracking-wide">
                  Paso a paso
                </h4>
                <ol className="space-y-2">
                  {actividad.pasos.map((paso, i) => (
                    <li key={paso} className="flex items-start gap-3 text-sm text-foreground">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-creative text-xs font-black text-creative-foreground"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <span className="pt-0.5 leading-relaxed">{paso}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Mascotas de Mundiales */}
        <div>
          <h3 className="mb-2 text-2xl font-black text-foreground">Las mascotas del Mundial a traves de la historia</h3>
          <p className="mb-6 text-muted-foreground">
            Cada Mundial tiene un personaje que lo representa. Conocemos algunas de las mas famosas.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {MASCOTAS_MUNDIALES.map((m) => (
              <div
                key={m.mundial}
                className="rounded-2xl border border-border bg-card p-4 text-center hover:border-creative hover:shadow-md transition-all"
              >
                <div className="mb-2 mx-auto h-14 w-14 rounded-full bg-creative/15 flex items-center justify-center">
                  <Star size={24} className="text-creative" />
                </div>
                <div className="text-xs font-black uppercase tracking-wide text-muted-foreground mb-1">
                  {m.mundial}
                </div>
                <div className="text-base font-black text-foreground mb-1">{m.mascota}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{m.descripcion}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
