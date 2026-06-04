"use client"

import { ExternalLink, Music } from "lucide-react"
import { BotonLeer } from "@/components/boton-leer"

interface Cancion {
  pais: string
  emoji: string
  cancion: string
  youtube: string
}

const CANCIONES_MUNDIALES: Cancion[] = [
  { pais: "Estados Unidos", emoji: "🇺🇸", cancion: "Crazy in Love — Beyoncé", youtube: "https://www.youtube.com/watch?v=ViwtNLUqkMY" },
  { pais: "Mexico", emoji: "🇲🇽", cancion: "Solo con Verte — Banda MS de Sergio Lizárraga", youtube: "https://www.youtube.com/watch?v=GOs96LMUCDA" },
  { pais: "Canada", emoji: "🇨🇦", cancion: "God's Plan — Drake", youtube: "https://www.youtube.com/watch?v=xpVfcZ0ZcFM" },
  { pais: "Panama", emoji: "🇵🇦", cancion: "Otro Trago — Sech ft. Darell", youtube: "https://www.youtube.com/watch?v=t_qn-f7XfJo" },
  { pais: "Haiti", emoji: "🇭🇹", cancion: "Gone Till November — Wyclef Jean", youtube: "https://www.youtube.com/watch?v=kI6MWZrl8v8" },
  { pais: "Curacao", emoji: "🇨🇼", cancion: "Dushi Bida — Jeon ft. Ataniro", youtube: "https://www.youtube.com/watch?v=XRC_E6N-jq0" },
  { pais: "Argentina", emoji: "🇦🇷", cancion: "Siempre es Hoy — Fito Páez", youtube: "https://www.youtube.com/watch?v=9cRE69V9r1o" },
  { pais: "Brasil", emoji: "🇧🇷", cancion: "Festa — Diplo, Revlon, Anitta", youtube: "https://www.youtube.com/watch?v=wfAWqg4cH-4" },
  { pais: "Chile", emoji: "🇨🇱", cancion: "Difícil — Paloma Mami", youtube: "https://www.youtube.com/watch?v=lJLBvXv4Xp0" },
  { pais: "Colombia", emoji: "🇨🇴", cancion: "Tití Me Preguntó — Bad Bunny", youtube: "https://www.youtube.com/watch?v=W7rzbAXW7Ec" },
  { pais: "Ecuador", emoji: "🇪🇨", cancion: "A Pedir Su Mano — Juan Luis Guerra", youtube: "https://www.youtube.com/watch?v=sxQvMJ6Zcxs" },
  { pais: "Paraguay", emoji: "🇵🇾", cancion: "Mi Corazón — Luis Fonsi", youtube: "https://www.youtube.com/watch?v=kJQP7kiw9Fk" },
  { pais: "Peru", emoji: "🇵🇪", cancion: "Papá Dios — Yahaira Plasencia", youtube: "https://www.youtube.com/watch?v=lHU2CUMqYyM" },
  { pais: "Uruguay", emoji: "🇺🇾", cancion: "La Frontera — Los Fabulosos Cadillacs", youtube: "https://www.youtube.com/watch?v=jK3i5s5sYzg" },
  { pais: "Venezuela", emoji: "🇻🇪", cancion: "Dile al Amor — Carlos Vives", youtube: "https://www.youtube.com/watch?v=h1H0_SXKM6g" },
  { pais: "Dinamarca", emoji: "🇩🇰", cancion: "Africa — Toto", youtube: "https://www.youtube.com/watch?v=FTQbiNvZqaY" },
  { pais: "España", emoji: "🇪🇸", cancion: "Tití Me Preguntó — Bad Bunny", youtube: "https://www.youtube.com/watch?v=W7rzbAXW7Ec" },
  { pais: "Francia", emoji: "🇫🇷", cancion: "La Vie en Rose — Edith Piaf", youtube: "https://www.youtube.com/watch?v=SJF-ZMcqBqw" },
  { pais: "Alemania", emoji: "🇩🇪", cancion: "99 Luftballons — Nena", youtube: "https://www.youtube.com/watch?v=La4Qnjv8I-8" },
  { pais: "Inglaterra", emoji: "🇬🇧", cancion: "Three Lions — The Lightning Seeds", youtube: "https://www.youtube.com/watch?v=RJQdoWHcJEY" },
  { pais: "Holanda", emoji: "🇳🇱", cancion: "Sandstorm — Darude", youtube: "https://www.youtube.com/watch?v=y6120QOlsfU" },
  { pais: "Italia", emoji: "🇮🇹", cancion: "Con Te Partirò — Andrea Bocelli", youtube: "https://www.youtube.com/watch?v=h_L9HA0J8jM" },
  { pais: "Portugal", emoji: "🇵🇹", cancion: "Tejo — Amàlia Rodrigues", youtube: "https://www.youtube.com/watch?v=4HWLn2LFrME" },
  { pais: "Rumania", emoji: "🇷🇴", cancion: "Dragostea Din Tei — O-Zone", youtube: "https://www.youtube.com/watch?v=jRx1xylQ246" },
  { pais: "Serbia", emoji: "🇷🇸", cancion: "Pesma od Bola — Aca Lukas", youtube: "https://www.youtube.com/watch?v=9CyaKZY6Zp0" },
  { pais: "Suecia", emoji: "🇸🇪", cancion: "Dancing Queen — ABBA", youtube: "https://www.youtube.com/watch?v=xFrGuyw1V8s" },
  { pais: "Suiza", emoji: "🇨🇭", cancion: "Gotthard — Yello", youtube: "https://www.youtube.com/watch?v=8N_tupPHIbk" },
  { pais: "Turquia", emoji: "🇹🇷", cancion: "Cengiz Han — Gökhan Özen", youtube: "https://www.youtube.com/watch?v=iF0Vj6L9LW4" },
  { pais: "Grecia", emoji: "🇬🇷", cancion: "Clandestino — Thousand Foot Krutch", youtube: "https://www.youtube.com/watch?v=XqkxXwEUvME" },
  { pais: "Egipto", emoji: "🇪🇬", cancion: "Habibi Ya Noor — Amr Diab", youtube: "https://www.youtube.com/watch?v=kI2s-EJg8wQ" },
  { pais: "Marruecos", emoji: "🇲🇦", cancion: "Darling — Abdelmajid Belkadi", youtube: "https://www.youtube.com/watch?v=zJn4P3_qN1g" },
  { pais: "Nigeria", emoji: "🇳🇬", cancion: "Essence — Wizkid ft. Tems", youtube: "https://www.youtube.com/watch?v=mKkJLnO5RwI" },
  { pais: "Senegal", emoji: "🇸🇳", cancion: "Xarma — Wally B. Seck", youtube: "https://www.youtube.com/watch?v=ZoWZ4xcn2Y4" },
  { pais: "Sudafrica", emoji: "🇿🇦", cancion: "Nkosi Sikelel iAfrika — Enoch Mankayi Sontonga", youtube: "https://www.youtube.com/watch?v=aPpvI6VYpKI" },
  { pais: "Australia", emoji: "🇦🇺", cancion: "Down Under — Men at Work", youtube: "https://www.youtube.com/watch?v=XfR9iY5y94s" },
  { pais: "Japon", emoji: "🇯🇵", cancion: "Sakura Sakura — Traditional", youtube: "https://www.youtube.com/watch?v=f42Gw-yKVBA" },
  { pais: "Corea del Sur", emoji: "🇰🇷", cancion: "Dynamite — BTS", youtube: "https://www.youtube.com/watch?v=gdZLi9oWNZg" },
  { pais: "Iran", emoji: "🇮🇷", cancion: "Delbazi — Googoosh", youtube: "https://www.youtube.com/watch?v=VvN1xAKcJJc" },
  { pais: "Arabia Saudita", emoji: "🇸🇦", cancion: "Layali — Amr Diab", youtube: "https://www.youtube.com/watch?v=C5GpPfgkCWc" },
]

export function PlaylistGlobal() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-creative/10 to-primary/5 p-8 border border-creative/20">
      <div className="flex items-center gap-3 mb-6">
        <Music size={32} className="text-creative" />
        <div>
          <h3 className="text-2xl font-black text-foreground">Canciones del Mundial</h3>
          <p className="text-sm text-foreground/60 font-semibold mt-1">Un hilo musical con los temas de los 48 países clasificados</p>
        </div>
      </div>

      <div className="mb-4">
        <BotonLeer 
          etiqueta="Escuchar lista"
          texto={`Lista de canciones del mundial: ${CANCIONES_MUNDIALES.map(c => `${c.pais}: ${c.cancion}`).join(", ")}`}
        />
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {CANCIONES_MUNDIALES.map((cancion, index) => (
          <a
            key={index}
            href={cancion.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors group"
          >
            <span className="text-2xl shrink-0">{cancion.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-foreground group-hover:text-creative transition-colors">
                {cancion.pais}
              </p>
              <p className="text-xs text-foreground/70 truncate">
                {cancion.cancion}
              </p>
            </div>
            <ExternalLink size={16} className="shrink-0 text-creative opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  )
}
