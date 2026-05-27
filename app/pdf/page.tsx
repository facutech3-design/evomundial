import Image from "next/image"
import type { Metadata } from "next"
import BotonImprimir from "./boton-imprimir"

export const metadata: Metadata = {
  title: "EvoMundial 2026 — Presentacion",
  description: "Documento de presentacion del proyecto EvoMundial 2026 del Centro Dia Evolutiva, Mendoza.",
}

const SECCIONES = [
  {
    titulo: "Paises y Culturas",
    descripcion:
      "Exploramos los 48 paises participantes del Mundial 2026. Conocemos su bandera, idioma, comidas tipicas, una cancion representativa y una curiosidad cultural. Es una vuelta al mundo desde Mendoza.",
    icono: "🌍",
    color: "#1a6fb3",
  },
  {
    titulo: "Valores e Inclusion",
    descripcion:
      "El futbol nos ensena valores como el respeto, el trabajo en equipo, la perseverancia y la amistad. Reflexionamos sobre como esos valores se viven dentro y fuera de la cancha.",
    icono: "❤️",
    color: "#e05c2a",
  },
  {
    titulo: "Arte y Creatividad",
    descripcion:
      "Pintamos banderas, creamos mapas del mundo, disenamos camisetas y exploramos el arte de cada cultura participante. La creatividad no tiene limite.",
    icono: "🎨",
    color: "#2a9e5e",
  },
  {
    titulo: "Actividades Adaptadas",
    descripcion:
      "Juegos y actividades fisicas pensadas para todos: futbol adaptado, atletismo, juegos sensoriales y desafios de coordinacion. El movimiento es de todos.",
    icono: "⚽",
    color: "#7b3fb5",
  },
  {
    titulo: "Empleos del Mundial",
    descripcion:
      "Conocemos los distintos trabajos que hacen posible un Mundial: utileros, traductores, camareros, medicos, periodistas, cocineros y muchos mas. El mundo laboral en accion.",
    icono: "💼",
    color: "#c49a00",
  },
]

const PAISES_SEDE = [
  { nombre: "Estados Unidos", emoji: "🇺🇸", detalle: "11 ciudades sede" },
  { nombre: "Mexico", emoji: "🇲🇽", detalle: "3 ciudades sede" },
  { nombre: "Canada", emoji: "🇨🇦", detalle: "2 ciudades sede" },
]

const DATOS = [
  { numero: "48", etiqueta: "Selecciones" },
  { numero: "3", etiqueta: "Paises Sede" },
  { numero: "104", etiqueta: "Partidos" },
  { numero: "5", etiqueta: "Modulos" },
]

export default function PdfPage() {
  return (
    <div
      className="pdf-root font-sans"
      style={{ background: "#f5f7fa", minHeight: "100vh" }}
    >
      {/* Estilos de impresion */}
      <style>{`
        @media print {
          @page { margin: 0; size: A4; }
          .pdf-root { background: white !important; }
          .no-print { display: none !important; }
          .page-break { page-break-after: always; }
        }
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        body { margin: 0; font-family: 'Nunito', sans-serif; }
      `}</style>

      {/* Boton imprimir - no aparece en PDF */}
      <BotonImprimir />

      {/* ===== PAGINA 1: PORTADA ===== */}
      <div
        className="page-break"
        style={{
          width: "210mm",
          minHeight: "297mm",
          margin: "0 auto",
          background: "white",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
        }}
      >
        {/* Franja superior azul */}
        <div style={{ background: "#1a6fb3", padding: "32px 40px 24px", display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ background: "white", borderRadius: 14, padding: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/evolutiva.jpeg" alt="Logo Evolutiva" width={64} height={64} style={{ objectFit: "contain", display: "block" }} />
          </div>
          <div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>
              Centro Dia Evolutiva — Mendoza, Argentina
            </p>
            <p style={{ color: "white", fontSize: 13, fontWeight: 600, margin: "4px 0 0", opacity: 0.8 }}>
              Proyecto educativo e inclusivo
            </p>
          </div>
        </div>

        {/* Cuerpo portada */}
        <div style={{ flex: 1, padding: "48px 40px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

          {/* Titulo principal */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 48 }}>⚽</span>
              <div>
                <h1 style={{ margin: 0, fontSize: 52, fontWeight: 900, color: "#1a6fb3", lineHeight: 1 }}>
                  EvoMundial
                </h1>
                <h2 style={{ margin: 0, fontSize: 36, fontWeight: 900, color: "#e05c2a", lineHeight: 1.1 }}>
                  2026
                </h2>
              </div>
            </div>
            <p style={{ fontSize: 18, color: "#444", fontWeight: 600, margin: "16px 0 0", maxWidth: 480, lineHeight: 1.5 }}>
              Un proyecto para explorar el Mundial 2026 desde la cultura, el arte, los valores y el movimiento.
              Porque el mundo del futbol es mucho mas que el futbol.
            </p>
          </div>

          {/* Foto Messi */}
          <div style={{ margin: "32px 0", borderRadius: 18, overflow: "hidden", height: 240, position: "relative", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
            <Image
              src="/images/messi-copa.jpg"
              alt="Messi con la Copa del Mundo 2022"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }} />
            <p style={{ position: "absolute", bottom: 14, left: 18, color: "white", fontWeight: 800, fontSize: 15, margin: 0 }}>
              Argentina, Campeon del Mundo — Qatar 2022
            </p>
          </div>

          {/* Datos rapidos */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
            {DATOS.map((d) => (
              <div key={d.etiqueta} style={{ background: "#f0f6ff", borderRadius: 12, padding: "16px 10px", textAlign: "center", border: "2px solid #dce9f8" }}>
                <p style={{ margin: 0, fontSize: 32, fontWeight: 900, color: "#1a6fb3" }}>{d.numero}</p>
                <p style={{ margin: "4px 0 0", fontSize: 12, fontWeight: 700, color: "#666", textTransform: "uppercase", letterSpacing: "0.08em" }}>{d.etiqueta}</p>
              </div>
            ))}
          </div>

          {/* Sedes */}
          <div style={{ marginTop: 24 }}>
            <p style={{ margin: "0 0 10px", fontSize: 12, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Paises Sede
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              {PAISES_SEDE.map((s) => (
                <div key={s.nombre} style={{ flex: 1, background: "#fff8f0", border: "2px solid #ffdec0", borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 28 }}>{s.emoji}</span>
                  <div>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: 14, color: "#333" }}>{s.nombre}</p>
                    <p style={{ margin: 0, fontSize: 11, color: "#999", fontWeight: 600 }}>{s.detalle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pie portada */}
          <div style={{ marginTop: 28, paddingTop: 18, borderTop: "2px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ margin: 0, fontSize: 12, color: "#aaa", fontWeight: 600 }}>Proyecto EvoMundial 2026 — Centro Dia Evolutiva</p>
            <p style={{ margin: 0, fontSize: 12, color: "#aaa", fontWeight: 600 }}>Mendoza, Argentina — 2026</p>
          </div>
        </div>
      </div>

      {/* ===== PAGINA 2: QUE ES EL PROYECTO ===== */}
      <div
        className="page-break"
        style={{
          width: "210mm",
          minHeight: "297mm",
          margin: "0 auto",
          background: "white",
          padding: "40px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
          boxSizing: "border-box",
        }}
      >
        <HeaderPagina numero={2} titulo="Que es EvoMundial" />

        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, margin: "20px 0 28px", fontWeight: 600 }}>
          EvoMundial es un proyecto educativo e inclusivo del <strong style={{ color: "#1a6fb3" }}>Centro Dia Evolutiva de Mendoza</strong> que
          utiliza el Mundial de Futbol 2026 como punto de partida para explorar el mundo: sus culturas, idiomas, gastronomia,
          musica, valores y deportes. Esta pensado para adolescentes y adultos jovenes con discapacidad,
          con actividades adaptadas, accesibles y motivadoras.
        </p>

        {/* Objetivo */}
        <div style={{ background: "#f0f6ff", borderRadius: 16, padding: "20px 24px", marginBottom: 28, borderLeft: "5px solid #1a6fb3" }}>
          <p style={{ margin: 0, fontWeight: 800, fontSize: 15, color: "#1a6fb3", textTransform: "uppercase", letterSpacing: "0.08em" }}>Objetivo General</p>
          <p style={{ margin: "8px 0 0", fontSize: 14, color: "#444", lineHeight: 1.6, fontWeight: 600 }}>
            Generar un espacio de aprendizaje y participacion significativa donde cada persona pueda
            conectarse con el mundo, conocer otras culturas, desarrollar valores y expresarse creativamente
            a traves del contexto del Mundial 2026.
          </p>
        </div>

        {/* Modulos */}
        <p style={{ fontWeight: 800, fontSize: 16, color: "#222", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Modulos del proyecto
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {SECCIONES.map((s, i) => (
            <div key={s.titulo} style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "#fafafa", borderRadius: 14, padding: "16px 18px", border: `2px solid ${s.color}22` }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: `${s.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 22 }}>
                {s.icono}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ background: s.color, color: "white", borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 800 }}>
                    Modulo {i + 1}
                  </span>
                  <p style={{ margin: 0, fontWeight: 800, fontSize: 14, color: "#222" }}>{s.titulo}</p>
                </div>
                <p style={{ margin: 0, fontSize: 13, color: "#666", lineHeight: 1.55, fontWeight: 500 }}>{s.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <PiePagina />
      </div>

      {/* ===== PAGINA 3: PAISES Y CULTURAS ===== */}
      <div
        className="page-break"
        style={{
          width: "210mm",
          minHeight: "297mm",
          margin: "0 auto",
          background: "white",
          padding: "40px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
          boxSizing: "border-box",
        }}
      >
        <HeaderPagina numero={3} titulo="Paises y Culturas" />

        <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65, margin: "16px 0 24px", fontWeight: 600 }}>
          Exploramos los <strong>48 paises</strong> que participan del Mundial 2026. De cada uno aprendemos su idioma,
          sus comidas tipicas, una cancion representativa y una curiosidad cultural unica. Un viaje por el mundo
          desde Mendoza.
        </p>

        {/* Ejemplo de tarjeta — 3 paises sede */}
        <p style={{ fontWeight: 800, fontSize: 13, color: "#888", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>
          Ejemplo — Paises Sede del Mundial 2026
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
          {[
            { emoji: "🇺🇸", nombre: "Estados Unidos", idioma: "Ingles", comida: "Hamburguesas, hot dogs, BBQ", cancion: "Crazy in Love — Beyonce", curiosidad: "Uno de los tres paises sede del Mundial 2026. Es el pais mas diverso del mundo, con mas de 300 idiomas hablados." },
            { emoji: "🇲🇽", nombre: "Mexico", idioma: "Espanol", comida: "Tacos, guacamole, mole", cancion: "Solo con Verte — Banda MS", curiosidad: "Mexico ya organizo el Mundial dos veces: 1970 y 1986. Tiene una de las culturas mas antiguas del mundo con los mayas y aztecas." },
            { emoji: "🇨🇦", nombre: "Canada", idioma: "Ingles y Frances", comida: "Poutine, maple syrup, salmon", cancion: "God's Plan — Drake", curiosidad: "Canada es conocido por su naturaleza increible, la aurora boreal y ser uno de los paises mas multiculturales del mundo." },
          ].map((p) => (
            <div key={p.nombre} style={{ display: "flex", gap: 16, background: "#fafafa", borderRadius: 14, padding: "14px 18px", border: "2px solid #e8f0fb" }}>
              <span style={{ fontSize: 36, lineHeight: 1 }}>{p.emoji}</span>
              <div style={{ flex: 1 }}>
                <p style={{ margin: "0 0 6px", fontWeight: 900, fontSize: 16, color: "#1a6fb3" }}>{p.nombre}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 16px", marginBottom: 8 }}>
                  <p style={{ margin: 0, fontSize: 12, color: "#888" }}><strong style={{ color: "#444" }}>Idioma:</strong> {p.idioma}</p>
                  <p style={{ margin: 0, fontSize: 12, color: "#888" }}><strong style={{ color: "#444" }}>Comida:</strong> {p.comida}</p>
                  <p style={{ margin: 0, fontSize: 12, color: "#888" }} style={{ gridColumn: "1/-1" }}><strong style={{ color: "#444" }}>Cancion:</strong> {p.cancion}</p>
                </div>
                <p style={{ margin: 0, fontSize: 12, color: "#777", lineHeight: 1.5, fontStyle: "italic" }}>{p.curiosidad}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mapa continentes */}
        <div style={{ background: "#f0f6ff", borderRadius: 16, padding: "18px 22px", border: "2px solid #dce9f8" }}>
          <p style={{ margin: "0 0 12px", fontWeight: 800, fontSize: 13, color: "#1a6fb3", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Distribucion por Confederaciones
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
            {[
              { conf: "UEFA (Europa)", paises: "16", color: "#1a6fb3" },
              { conf: "CONMEBOL (Sudamerica)", paises: "6", color: "#2a9e5e" },
              { conf: "CONCACAF (N y C America)", paises: "8+3 sedes", color: "#e05c2a" },
              { conf: "CAF (Africa)", paises: "9", color: "#c49a00" },
              { conf: "AFC (Asia)", paises: "8", color: "#7b3fb5" },
              { conf: "OFC (Oceania)", paises: "1", color: "#e0507a" },
            ].map((c) => (
              <div key={c.conf} style={{ background: "white", borderRadius: 10, padding: "10px 12px", border: `2px solid ${c.color}44` }}>
                <p style={{ margin: 0, fontWeight: 800, fontSize: 11, color: c.color }}>{c.conf}</p>
                <p style={{ margin: "3px 0 0", fontWeight: 900, fontSize: 20, color: "#222" }}>{c.paises} <span style={{ fontSize: 11, color: "#aaa", fontWeight: 600 }}>paises</span></p>
              </div>
            ))}
          </div>
        </div>

        <PiePagina />
      </div>

      {/* ===== PAGINA 4: VALORES + ARTE + ACTIVIDADES ===== */}
      <div
        style={{
          width: "210mm",
          minHeight: "297mm",
          margin: "0 auto",
          background: "white",
          padding: "40px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
          boxSizing: "border-box",
        }}
      >
        <HeaderPagina numero={4} titulo="Actividades y Metodologia" />

        {/* Valores */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: 14, color: "#e05c2a", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Valores e Inclusion
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
            {["Respeto", "Trabajo en equipo", "Perseverancia", "Amistad", "Inclusion", "Juego limpio", "Esfuerzo", "Alegria"].map((v) => (
              <div key={v} style={{ background: "#fff5f0", border: "2px solid #ffdec0", borderRadius: 10, padding: "10px", textAlign: "center" }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 12, color: "#c84a18" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Arte */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: 14, color: "#2a9e5e", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Arte y Creatividad
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { act: "Pintado de banderas", detalle: "Cada participante elige un pais y pinta su bandera con los colores oficiales." },
              { act: "Diseno de camisetas", detalle: "Creamos camisetas para una seleccion imaginaria con nombre y numero propio." },
              { act: "Mapas del mundo", detalle: "Ubicamos en el mapa los paises participantes y sus capitales." },
              { act: "Collage cultural", detalle: "Construimos un collage con elementos visuales de cada cultura: comidas, monumentos y trajes." },
            ].map((a) => (
              <div key={a.act} style={{ background: "#f0faf5", border: "2px solid #b8ecd4", borderRadius: 12, padding: "12px 14px" }}>
                <p style={{ margin: "0 0 4px", fontWeight: 800, fontSize: 13, color: "#1f7a4f" }}>{a.act}</p>
                <p style={{ margin: 0, fontSize: 12, color: "#666", lineHeight: 1.5 }}>{a.detalle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actividades adaptadas */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: 14, color: "#7b3fb5", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Actividades Adaptadas
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { act: "Futbol adaptado", detalle: "Partido con reglas modificadas, arcos grandes y pelota sonora para mayor accesibilidad." },
              { act: "Atletismo inclusivo", detalle: "Carreras cortas, lanzamiento de pelota y salto en largo con ayuda tecnica si se necesita." },
              { act: "Juegos sensoriales", detalle: "Actividades de estimulacion sensorial inspiradas en deportes olimpicos." },
              { act: "Desafios de coordinacion", detalle: "Circuitos motores con conos, aros y cintas inspirados en entrenamientos de selecciones." },
            ].map((a) => (
              <div key={a.act} style={{ background: "#f9f0ff", border: "2px solid #d8b8f0", borderRadius: 12, padding: "12px 14px" }}>
                <p style={{ margin: "0 0 4px", fontWeight: 800, fontSize: 13, color: "#5e2fa0" }}>{a.act}</p>
                <p style={{ margin: 0, fontSize: 12, color: "#666", lineHeight: 1.5 }}>{a.detalle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Empleos */}
        <div>
          <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: 14, color: "#c49a00", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Empleos del Mundial
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Utilero", "Traductor / Interprete", "Camarero / Mozo", "Medico deportivo", "Periodista", "Cocinero", "Seguridad", "Limpieza", "Fotografia", "Asistente tecnico", "Vendedor de entradas", "Guia turistico"].map((e) => (
              <span key={e} style={{ background: "#fffbea", border: "2px solid #ffe79a", borderRadius: 8, padding: "5px 12px", fontSize: 12, fontWeight: 700, color: "#8a6800" }}>{e}</span>
            ))}
          </div>
        </div>

        <PiePagina />
      </div>
    </div>
  )
}

function HeaderPagina({ numero, titulo }: { numero: number; titulo: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, paddingBottom: 16, borderBottom: "3px solid #e8f0fb", marginBottom: 4 }}>
      <div style={{ width: 36, height: 36, borderRadius: 9, background: "#1a6fb3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ color: "white", fontWeight: 900, fontSize: 15 }}>{numero}</span>
      </div>
      <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900, color: "#1a6fb3" }}>{titulo}</h2>
      <div style={{ flex: 1 }} />
      <span style={{ fontSize: 13, fontWeight: 700, color: "#bbb" }}>EvoMundial 2026</span>
    </div>
  )
}

function PiePagina() {
  return (
    <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "2px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 28 }}>
      <p style={{ margin: 0, fontSize: 11, color: "#bbb", fontWeight: 600 }}>Centro Dia Evolutiva — Mendoza, Argentina</p>
      <Image src="/evolutiva.jpeg" alt="Logo Evolutiva" width={28} height={28} style={{ objectFit: "contain", opacity: 0.4 }} />
      <p style={{ margin: 0, fontSize: 11, color: "#bbb", fontWeight: 600 }}>Proyecto EvoMundial 2026</p>
    </div>
  )
}
