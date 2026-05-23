"use client"

import { useState } from "react"
import { Activity, Users, Clock, Shield, ChevronDown, ChevronUp } from "lucide-react"

type Nivel = "Todos" | "Sentado" | "De pie" | "Mixto"

const ACTIVIDADES = [
  {
    id: 1,
    nombre: "Penal sentado",
    descripcion:
      "Desde una silla, cada participante lanza una pelota blanda hacia una meta (una caja, una botella, una tela). El portero también esta sentado. Todos tienen el mismo punto de partida.",
    nivel: "Sentado" as Nivel,
    participantes: "2 o mas",
    duracion: "10-20 min",
    materiales: ["Sillas", "Pelota blanda o globo", "Meta (caja o botella)"],
    adaptaciones: [
      "Usar pelota de foam o globo para reducir el impacto",
      "Acercar o alejar la meta segun la habilidad",
      "Permitir lanzar con ambas manos",
    ],
    objetivos: ["Coordinacion", "Concentracion", "Diversión grupal"],
    color: "border-primary bg-primary/5",
    badge: "bg-primary text-primary-foreground",
  },
  {
    id: 2,
    nombre: "Pase en circulo",
    descripcion:
      "El grupo se sienta en circulo. Se pasa una pelota usando manos, pies o cualquier parte del cuerpo. El objetivo es no dejar caer la pelota. Se puede hacer en silencio, con musica o con consignas.",
    nivel: "Sentado" as Nivel,
    participantes: "4 o mas",
    duracion: "10-15 min",
    materiales: ["Pelota blanda, globo o bolsa de tela", "Sillas en circulo", "Musica opcional"],
    adaptaciones: [
      "Usar globo inflado (mas lento y facil de controlar)",
      "Cambiar la regla: solo con la mano izquierda, o solo con la cabeza",
      "Agregar consignas: pasar y decir el nombre del que recibe",
    ],
    objetivos: ["Trabajo en equipo", "Atencion", "Vinculos grupales"],
    color: "border-success bg-success/5",
    badge: "bg-success text-success-foreground",
  },
  {
    id: 3,
    nombre: "Torneo de bo-boce",
    descripcion:
      "Version adaptada de la bocce. Se lanza una pelota pequeña (pallino) y cada participante tira su pelota intentando acercarse. Funciona perfecto en todas las posiciones y espacios pequenos.",
    nivel: "Mixto" as Nivel,
    participantes: "2 a 8",
    duracion: "20-30 min",
    materiales: ["Pelotas de distintos colores", "Una pelota pequena o marcador (pallino)", "Espacio libre"],
    adaptaciones: [
      "El pallino puede ser un globo o tela colorida",
      "Jugar desde silla o de pie segun cada persona",
      "Modificar distancias segun la habilidad",
    ],
    objetivos: ["Precision", "Estrategia", "Competencia amigable"],
    color: "border-creative bg-creative/5",
    badge: "bg-creative text-creative-foreground",
  },
  {
    id: 4,
    nombre: "Relevo mundial",
    descripcion:
      "El grupo se divide en 'selecciones'. Cada equipo tiene una bandera de un pais diferente. Los equipos realizan una serie de tareas (pasar la pelota, caminar hasta un punto, resolver una pregunta de cultura) y suman puntos.",
    nivel: "Mixto" as Nivel,
    participantes: "6 o mas",
    duracion: "30-45 min",
    materiales: ["Banderas de cartulina de cada pais", "Pelotas", "Preguntas escritas", "Planilla de puntos"],
    adaptaciones: [
      "Cada tarea se adapta a las posibilidades de cada participante",
      "Equipos mixtos con distintas capacidades: todos aportan algo diferente",
      "Las preguntas culturales equilibran lo fisico con lo cognitivo",
    ],
    objetivos: ["Cooperacion", "Conocimiento cultural", "Dinamica grupal"],
    color: "border-accent bg-accent/5",
    badge: "bg-accent text-accent-foreground",
  },
  {
    id: 5,
    nombre: "Danza de las naciones",
    descripcion:
      "Exploramos el movimiento desde el ritmo de distintos paises. Cumbia (Colombia), samba (Brasil), tango (Argentina), tambores (Nigeria), danza contemporanea (Francia). Cada quien mueve lo que puede: manos, cabeza, torso.",
    nivel: "Mixto" as Nivel,
    participantes: "Todos",
    duracion: "20-30 min",
    materiales: ["Parlante con musica", "Playlist de musicas del mundo", "Espacio libre"],
    adaptaciones: [
      "Sentado o parado: el movimiento es libre",
      "Proponer consignas: mover solo los brazos, solo la cabeza",
      "Puede ser individual o en parejas/grupos",
    ],
    objetivos: ["Expresion corporal", "Cultura musical", "Alegria y liberacion"],
    color: "border-foreground bg-foreground/5",
    badge: "bg-foreground text-primary-foreground",
  },
]

const NIVELES: Nivel[] = ["Todos", "Sentado", "De pie", "Mixto"]

export default function ActividadesSection() {
  const [filtro, setFiltro] = useState<Nivel>("Todos")
  const [expandido, setExpandido] = useState<number | null>(null)

  const actsFiltradas =
    filtro === "Todos" ? ACTIVIDADES : ACTIVIDADES.filter((a) => a.nivel === filtro)

  return (
    <section className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-start gap-4">
          <div className="rounded-2xl bg-accent p-4">
            <Activity size={32} className="text-accent-foreground" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-foreground md:text-5xl">Actividades Adaptadas</h2>
            <p className="mt-2 text-lg text-muted-foreground text-pretty">
              El deporte es para todos los cuerpos. Cada actividad esta pensada para que todos puedan participar, 
              cada uno a su manera. No hay forma incorrecta de jugar.
            </p>
          </div>
        </div>

        {/* Principio guia */}
        <div className="mb-8 rounded-3xl bg-accent p-6 text-accent-foreground">
          <p className="text-lg font-black leading-relaxed">
            &quot;El deporte adaptado no simplifica el juego, lo universaliza. Permite que mas personas encuentren 
            un lugar en el juego. La inclusion no es una concesion: es una oportunidad para todos.&quot;
          </p>
          <p className="mt-2 text-sm opacity-80 font-semibold">— Principio del proyecto EvoMundial</p>
        </div>

        {/* Filtros */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-muted-foreground mr-2">Posicion:</span>
          {NIVELES.map((n) => (
            <button
              key={n}
              onClick={() => setFiltro(n)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                filtro === n
                  ? "bg-foreground text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-foreground/20"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Lista de actividades */}
        <div className="space-y-3">
          {actsFiltradas.map((act) => {
            const abierto = expandido === act.id
            return (
              <div key={act.id} className={`overflow-hidden rounded-2xl border-2 ${act.color} shadow-sm`}>
                <button
                  onClick={() => setExpandido(abierto ? null : act.id)}
                  className="flex w-full items-center gap-4 p-6 text-left transition-all hover:bg-black/5"
                  aria-expanded={abierto}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-xl font-black text-foreground">{act.nombre}</h3>
                      <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${act.badge}`}>
                        {act.nivel}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {act.participantes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {act.duracion}
                      </span>
                    </div>
                  </div>
                  {abierto ? (
                    <ChevronUp size={20} className="text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-muted-foreground shrink-0" />
                  )}
                </button>

                {abierto && (
                  <div className="border-t border-border/50 px-6 pb-6 pt-4">
                    <p className="mb-6 text-base leading-relaxed text-foreground">{act.descripcion}</p>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                      {/* Materiales */}
                      <div>
                        <h4 className="mb-3 text-sm font-black uppercase tracking-wide text-muted-foreground">
                          Materiales
                        </h4>
                        <ul className="space-y-1.5">
                          {act.materiales.map((m) => (
                            <li key={m} className="flex items-start gap-2 text-sm text-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" aria-hidden="true" />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Adaptaciones */}
                      <div>
                        <h4 className="mb-3 text-sm font-black uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                          <Shield size={14} />
                          Adaptaciones
                        </h4>
                        <ul className="space-y-1.5">
                          {act.adaptaciones.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-sm text-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden="true" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Objetivos */}
                      <div>
                        <h4 className="mb-3 text-sm font-black uppercase tracking-wide text-muted-foreground">
                          Objetivos
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {act.objetivos.map((o) => (
                            <span
                              key={o}
                              className="rounded-full bg-primary/15 px-3 py-1.5 text-xs font-bold text-primary"
                            >
                              {o}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Recordatorio inclusivo */}
        <div className="mt-10 rounded-3xl bg-foreground p-8 text-primary-foreground">
          <h3 className="mb-3 text-2xl font-black">Antes de empezar</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Preguntamos a cada persona como se siente hoy",
              "Recordamos que nadie esta obligado a participar de ninguna actividad",
              "Celebramos el intento tanto como el resultado",
              "Adaptamos las reglas en tiempo real segun lo que vemos",
              "El objetivo es pasar bien y conectar, no competir",
              "Si algo no funciona, lo cambiamos juntos",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <p className="text-sm font-semibold leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
