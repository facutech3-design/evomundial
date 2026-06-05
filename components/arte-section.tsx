"use client"

import { useState } from "react"
import Image from "next/image"
import { Palette, Shirt, Flag, Sparkles, Paintbrush, ImageIcon } from "lucide-react"

const ACTIVIDADES_ARTE = [
  {
    id: "camiseta",
    icon: Shirt,
    titulo: "Diseñamos la camiseta",
    descripcion:
      "¿Cómo sería la camiseta ideal del centro? Elegimos colores, números, escudo y nombre. Cada persona diseña la suya.",
    materiales: ["Papel o tela blanca", "Marcadores de colores", "Pinturas textiles (si hay)", "Imaginación"],
    pasos: [
      "Miramos diseños de camisetas de distintos países",
      "Elegimos colores que representen al grupo",
      "Dibujamos la silueta de una camiseta",
      "La decoramos con nuestro nombre o número",
      "Compartimos y votamos la camiseta favorita",
    ],
    color: "bg-primary",
    textColor: "text-primary-foreground",
    image: "https://images.unsplash.com/photo-1503342394128-c104cbb67ba0?w=800&q=80",
    imageAlt: "Camisetas coloridas diseñadas",
  },
  {
    id: "bandera",
    icon: Flag,
    titulo: "Inventamos nuestra bandera",
    descripcion:
      "Si el centro fuera un país, ¿cómo sería su bandera? Qué símbolos, colores y formas nos representan a todos.",
    materiales: ["Papel de color", "Tijeras", "Cola vinílica", "Marcadores"],
    pasos: [
      "Hablamos de qué colores nos gustan y qué representan",
      "Elegimos un símbolo o figura que nos una",
      "Diseñamos la bandera entre todos",
      "Le ponemos un nombre a nuestro país imaginario",
      "Presentamos la bandera como si fuera oficial",
    ],
    color: "bg-success",
    textColor: "text-success-foreground",
    image: "https://images.unsplash.com/photo-1476764624898-61bb168e3c00?w=800&q=80",
    imageAlt: "Banderas coloridas diseñadas",
  },
  {
    id: "mascota",
    icon: Sparkles,
    titulo: "Creamos la mascota",
    descripcion:
      "Cada Mundial tiene una mascota oficial. Inventamos la nuestra: un animal, un personaje o un ser imaginario que represente los valores del grupo.",
    materiales: ["Papel", "Colores y marcadores", "Arcilla o plastilina (opcional)", "Lápices"],
    pasos: [
      "Pensamos qué animal o ser nos representa",
      "Lo dibujamos y le ponemos nombre",
      "Escribimos su historia: de dónde viene, qué poderes tiene",
      "La presentamos al grupo",
      "Creamos una historia especial de nuestra mascota",
    ],
    color: "bg-creative",
    textColor: "text-creative-foreground",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b2f?w=800&q=80",
    imageAlt: "Mascotas creativas dibujadas",
  },
  {
    id: "afiche",
    icon: ImageIcon,
    titulo: "Armamos el afiche del torneo",
    descripcion:
      "Creamos el afiche oficial del torneo del centro. Con nombre, fecha, equipos participantes y un eslogan que diga quiénes somos.",
    materiales: ["Papel grande (A3 o afiche)", "Revistas para recortar", "Marcadores gruesos", "Regla"],
    pasos: [
      "Decidimos el nombre del torneo del centro",
      "Inventamos los equipos que participan",
      "Diseñamos el afiche con toda la información",
      "Agregamos una frase que represente al grupo",
      "Lo colgamos en el centro",
    ],
    color: "bg-accent",
    textColor: "text-accent-foreground",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    imageAlt: "Afiches creativos del torneo",
  },
]

export default function ArteSection() {
  const [actividadActiva, setActividadActiva] = useState<string | null>(null)

  const actividad = ACTIVIDADES_ARTE.find((a) => a.id === actividadActiva)

  return (
    <section className="min-h-screen bg-background px-6 py-12 section-enter">
      <div className="mx-auto max-w-7xl">

        {/* Imagen principal con pictograma superpuesto */}
        <div className="mb-10 rounded-3xl overflow-hidden h-80 md:h-96 shadow-lg relative">
          <Image
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80"
            alt="Manos pintando arte colorido"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
          <div className="sr-only">
            Imagen de manos pintando con colores vibrantes en una obra de arte.
          </div>
          {/* Pictograma superpuesto */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-9xl drop-shadow-lg" role="img" aria-label="Ícono de Arte">🎨</p>
          </div>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-5xl font-black text-foreground md:text-6xl mb-3">Arte y Creatividad</h2>
          <p className="text-accessible-lg text-foreground/85 text-pretty leading-relaxed font-semibold max-w-3xl">
            El arte no tiene reglas ni límites. Cada Mundial genera una explosión de colores, formas y expresión. Nos sumamos a esa fiesta creativa.
          </p>
        </div>

        {/* Selector de actividades */}
        <div className="mb-10 flex flex-col gap-6">
          {ACTIVIDADES_ARTE.map((act) => {
            const Icon = act.icon
            const activa = actividadActiva === act.id
            return (
              <button
                key={act.id}
                onClick={() => setActividadActiva(activa ? null : act.id)}
                className={`flex flex-row rounded-3xl overflow-hidden border-3 transition-all active:scale-95 focus-visible:outline-3 focus-visible:outline-offset-2 hover:shadow-xl hover:-translate-y-1 ${
                  activa ? "border-foreground shadow-xl -translate-y-1" : "border-transparent"
                } ${act.color} ${act.textColor}`}
              >
                {/* Imagen a la izquierda */}
                <div className="relative w-80 h-52 flex-shrink-0 overflow-hidden bg-black/10">
                  <Image
                    src={act.image}
                    alt={act.imageAlt}
                    width={320}
                    height={208}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenido a la derecha */}
                <div className="flex flex-col p-8 flex-1">
                  <div className="mb-3 rounded-2xl bg-white/20 p-3 w-fit">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black mb-3 leading-tight">{act.titulo}</h3>
                  <p className="text-base opacity-90 leading-relaxed flex-1">{act.descripcion}</p>
                  <div className="mt-6 text-base font-bold opacity-95">
                    {activa ? "▼ Cerrar detalle" : "▶ Ver actividad"}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Detalle de actividad expandida */}
        {actividad && (
          <div className="mb-10 rounded-3xl border-2 border-foreground bg-card p-8 shadow-xl section-enter">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-accessible-2xl font-black text-foreground">{actividad.titulo}</h3>
              <button
                onClick={() => setActividadActiva(null)}
                className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-foreground hover:text-primary-foreground transition-all ml-4 shrink-0"
                aria-label="Cerrar detalle"
              >
                <span className="sr-only">Cerrar</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Materiales */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Paintbrush size={24} className="text-creative" />
                  <h4 className="font-black text-foreground uppercase text-base tracking-wide">
                    Necesitamos
                  </h4>
                </div>
                <ul className="space-y-3">
                  {actividad.materiales.map((mat) => (
                    <li key={mat} className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3 text-accessible-base font-semibold text-foreground">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-creative" aria-hidden="true" />
                      {mat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pasos */}
              <div>
                <h4 className="mb-4 font-black text-foreground uppercase text-base tracking-wide">
                  Paso a paso
                </h4>
                <ol className="space-y-3">
                  {actividad.pasos.map((paso, i) => (
                    <li key={paso} className="flex items-start gap-3 text-accessible-base text-foreground">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-creative text-xs font-black text-creative-foreground"
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
      </div>
    </section>
  )
}
