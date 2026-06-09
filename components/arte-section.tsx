"use client"

import { useState } from "react"
import Image from "next/image"
import { Palette, Shirt, Flag, Dog, Paintbrush } from "lucide-react"

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
    icon: Dog,
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
]

export default function ArteSection() {
  const [actividadActiva, setActividadActiva] = useState<string | null>(null)
  const [imagenAmpliada, setImagenAmpliada] = useState<string | null>(null)

  const imagenesActividades: Record<string, string> = {
    camiseta: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/camiseta%20%20dise%C3%B1o-EbVOKvkX69nPVmPi43ZEUU32VZLhWa.png",
    bandera: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nuestra%20bandera.%20-jRmd0vwlgGKbYwp3sCBJ4GbIzP1QOW.png",
    mascota: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mascota%20mundial-Ys8QNM7lxMFKl8bDe4Irz7pvJ8N23V.png",
  }

  const actividad = ACTIVIDADES_ARTE.find((a) => a.id === actividadActiva)

  return (
    <section className="min-h-screen bg-background px-6 py-12 section-enter">
      <div className="mx-auto max-w-7xl">

        {/* Header con imagen pequeña */}
        <div className="mb-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Contenido a la izquierda */}
          <div className="flex-1 flex items-start gap-4">
            <div className="w-24 h-24 flex-shrink-0">
              <svg width="96" height="96" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="25" width="70" height="55" rx="5" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.1"/>
                <circle cx="30" cy="40" r="10" fill="#FF6B6B"/>
                <circle cx="70" cy="45" r="10" fill="#4ECDC4"/>
                <circle cx="50" cy="65" r="10" fill="#FFE66D"/>
                <path d="M20 85 L80 85" stroke="currentColor" strokeWidth="3"/>
              </svg>
            </div>
            <div>
              <h2 className="text-5xl font-black text-foreground md:text-6xl mb-3">Arte y Creatividad</h2>
              <p className="text-accessible-lg text-foreground/85 text-pretty leading-relaxed font-semibold max-w-2xl">
                El arte no tiene reglas ni límites. Cada Mundial genera una explosión de colores, formas y expresión. Nos sumamos a esa fiesta creativa.
              </p>
            </div>
          </div>

          {/* Imagen pequeña a la derecha */}
          <div className="flex-shrink-0 rounded-2xl overflow-hidden w-full lg:w-72 h-48 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80"
              alt="Manos pintando arte colorido"
              width={400}
              height={300}
              className="w-full h-full object-cover"
              priority
            />
            <div className="sr-only">
              Imagen de manos pintando con colores vibrantes en una obra de arte.
            </div>
          </div>
        </div>

        {/* Selector de actividades */}
        <div className="mb-10 flex flex-col gap-6">
          {ACTIVIDADES_ARTE.map((act) => {
            const Icon = act.icon
            const activa = actividadActiva === act.id
            return (
              <button
                key={act.id}
                onClick={() => {
                  const esActivo = actividadActiva === act.id
                  setActividadActiva(esActivo ? null : act.id)
                  // Abrir imagen en modal automáticamente
                  if (!esActivo && imagenesActividades[act.id]) {
                    setImagenAmpliada(imagenesActividades[act.id])
                  }
                }}
                className={`flex flex-row rounded-3xl overflow-hidden border-3 transition-all active:scale-95 focus-visible:outline-3 focus-visible:outline-offset-2 hover:shadow-xl hover:-translate-y-1 ${
                  activa ? "border-foreground shadow-xl -translate-y-1" : "border-transparent"
                } ${act.color} ${act.textColor}`}
              >
                {/* Contenido a la derecha */}
                <div className="flex flex-col p-8 flex-1">
                  <div className="mb-6 rounded-2xl bg-white/20 p-4 w-fit">
                    <Icon size={64} />
                  </div>
                  <h3 className="text-4xl font-black mb-4 leading-tight">{act.titulo}</h3>
                  <p className="text-2xl opacity-90 leading-relaxed flex-1 font-semibold">{act.descripcion}</p>
                  <div className="mt-8 text-lg font-bold opacity-95">
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
            <div className="w-full">
              {actividadActiva === "camiseta" && (
                <div 
                  className="rounded-2xl overflow-hidden bg-white/5 w-full cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setImagenAmpliada("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/camiseta%20%20dise%C3%B1o-EbVOKvkX69nPVmPi43ZEUU32VZLhWa.png")}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/camiseta%20%20dise%C3%B1o-EbVOKvkX69nPVmPi43ZEUU32VZLhWa.png"
                    alt="Niños diseñando camisetas colaborativamente"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
              {actividadActiva === "bandera" && (
                <div 
                  className="rounded-2xl overflow-hidden bg-white/5 w-full cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setImagenAmpliada("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nuestra%20bandera.%20-jRmd0vwlgGKbYwp3sCBJ4GbIzP1QOW.png")}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nuestra%20bandera.%20-jRmd0vwlgGKbYwp3sCBJ4GbIzP1QOW.png"
                    alt="Niños sosteniendo bandera inclusiva diseñada"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
              {actividadActiva === "mascota" && (
                <div 
                  className="rounded-2xl overflow-hidden bg-white/5 w-full cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setImagenAmpliada("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mascota%20mundial-Ys8QNM7lxMFKl8bDe4Irz7pvJ8N23V.png")}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mascota%20mundial-Ys8QNM7lxMFKl8bDe4Irz7pvJ8N23V.png"
                    alt="Niños creando mascota del mundial"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
              {actividadActiva && actividadActiva !== "camiseta" && actividadActiva !== "bandera" && actividadActiva !== "mascota" && (
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
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal para imagen ampliada */}
      {imagenAmpliada && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setImagenAmpliada(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setImagenAmpliada(null)}
              className="absolute top-4 right-4 bg-background/90 hover:bg-background text-foreground rounded-full p-2 z-10 transition-colors"
              aria-label="Cerrar imagen ampliada"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={imagenAmpliada}
              alt="Imagen ampliada"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
