"use client"

import { useState } from "react"
import Image from "next/image"
import { Music, ExternalLink, Search } from "lucide-react"
import { BotonLeer } from "@/components/boton-leer"

const HIMNOS_MUNDIALES = [
  { año: "1962", pais: "Chile", bandera: "cl", cancion: "El Rock del Mundial", artista: "Los Ramblers", youtube: "https://www.youtube.com/results?search_query=El+Rock+del+Mundial+Los+Ramblers+1962" },
  { año: "1966", pais: "Inglaterra", bandera: "gb", cancion: "World Cup Willie", artista: "Lonnie Donegan", youtube: "https://www.youtube.com/results?search_query=World+Cup+Willie+Lonnie+Donegan+1966" },
  { año: "1970", pais: "México", bandera: "mx", cancion: "Fútbol México 70", artista: "Los Hermanos Zavala", youtube: "https://www.youtube.com/results?search_query=Futbol+Mexico+70+Hermanos+Zavala" },
  { año: "1974", pais: "Alemania", bandera: "de", cancion: "Fútbol", artista: "Maryla Rodowicz", youtube: "https://www.youtube.com/results?search_query=Futbol+Maryla+Rodowicz+1974+Mundial" },
  { año: "1978", pais: "Argentina", bandera: "ar", cancion: "El Mundial", artista: "Ennio Morricone", youtube: "https://www.youtube.com/results?search_query=El+Mundial+Ennio+Morricone+1978" },
  { año: "1982", pais: "España", bandera: "es", cancion: "El Mundial", artista: "Plácido Domingo", youtube: "https://www.youtube.com/results?search_query=El+Mundial+Placido+Domingo+1982" },
  { año: "1986", pais: "México", bandera: "mx", cancion: "El Mundo Unido por un Balón", artista: "Juan Carlos Abara", youtube: "https://www.youtube.com/results?search_query=El+mundo+unido+balon+Mexico+1986" },
  { año: "1990", pais: "Italia", bandera: "it", cancion: "Un'estate italiana", artista: "Gianna Nannini y Edoardo Bennato", youtube: "https://www.youtube.com/results?search_query=Un+estate+italiana+Nannini+Bennato+1990" },
  { año: "1994", pais: "Estados Unidos", bandera: "us", cancion: "Gloryland", artista: "Daryl Hall & Sounds of Blackness", youtube: "https://www.youtube.com/results?search_query=Gloryland+Daryl+Hall+World+Cup+1994" },
  { año: "1998", pais: "Francia", bandera: "fr", cancion: "La Copa de la Vida", artista: "Ricky Martin", youtube: "https://www.youtube.com/results?search_query=La+Copa+de+la+Vida+Ricky+Martin+1998" },
  { año: "2002", pais: "Corea/Japón", bandera: "kr", cancion: "Boom", artista: "Anastacia", youtube: "https://www.youtube.com/results?search_query=Boom+Anastacia+World+Cup+2002" },
  { año: "2006", pais: "Alemania", bandera: "de", cancion: "The Time of Our Lives", artista: "Il Divo y Toni Braxton", youtube: "https://www.youtube.com/results?search_query=The+Time+of+Our+Lives+Il+Divo+Toni+Braxton+2006" },
  { año: "2010", pais: "Sudáfrica", bandera: "za", cancion: "Waka Waka (This Time for Africa)", artista: "Shakira", youtube: "https://www.youtube.com/results?search_query=Waka+Waka+Shakira+World+Cup+2010" },
  { año: "2014", pais: "Brasil", bandera: "br", cancion: "We Are One (Ole Ola)", artista: "Pitbull ft. Jennifer Lopez y Claudia Leitte", youtube: "https://www.youtube.com/results?search_query=We+Are+One+Ole+Ola+Pitbull+2014" },
  { año: "2018", pais: "Rusia", bandera: "ru", cancion: "Live It Up", artista: "Nicky Jam, Era Istrefi y Will Smith", youtube: "https://www.youtube.com/results?search_query=Live+It+Up+Nicky+Jam+Will+Smith+2018" },
  { año: "2022", pais: "Qatar", bandera: "qa", cancion: "Hayya Hayya (Better Together)", artista: "Trinidad Cardona, Davido y Aisha", youtube: "https://www.youtube.com/results?search_query=Hayya+Hayya+Better+Together+2022" },
  { año: "2026", pais: "USA/México/Canadá", bandera: "us", cancion: "Dai Dai", artista: "Shakira y Burna Boy", youtube: "https://www.youtube.com/results?search_query=Dai+Dai+Shakira+Burna+Boy+2026", esActual: true },
]

const CANCIONES_PAISES = [
  { pais: "Argentina", bandera: "ar", cancion: "La Mano de Dios", artista: "Diego Torres" },
  { pais: "Brasil", bandera: "br", cancion: "Aquarela do Brasil", artista: "Gal Costa" },
  { pais: "Francia", bandera: "fr", cancion: "Je Veux", artista: "Zaz" },
  { pais: "Alemania", bandera: "de", cancion: "99 Luftballons", artista: "Nena" },
  { pais: "España", bandera: "es", cancion: "Bamboleo", artista: "Gipsy Kings" },
  { pais: "Portugal", bandera: "pt", cancion: "Uma Casa Portuguesa", artista: "Amália Rodrigues" },
  { pais: "México", bandera: "mx", cancion: "Cielito Lindo", artista: "versión mariachi" },
  { pais: "Estados Unidos", bandera: "us", cancion: "Born in the USA", artista: "Bruce Springsteen" },
  { pais: "Canadá", bandera: "ca", cancion: "Sundown", artista: "Gordon Lightfoot" },
  { pais: "Uruguay", bandera: "uy", cancion: "La Cumparsita", artista: "instrumental tango" },
  { pais: "Colombia", bandera: "co", cancion: "La Bicicleta", artista: "Shakira y Carlos Vives" },
  { pais: "Ecuador", bandera: "ec", cancion: "Vasija de Barro", artista: "Los Shyris" },
  { pais: "Perú", bandera: "pe", cancion: "La Flor de la Canela", artista: "Chabuca Granda" },
  { pais: "Bolivia", bandera: "bo", cancion: "Llorando se fue", artista: "Los Kjarkas" },
  { pais: "Venezuela", bandera: "ve", cancion: "Moliendo Café", artista: "Hugo Blanco" },
  { pais: "Chile", bandera: "cl", cancion: "El Condor Pasa", artista: "instrumental andino" },
  { pais: "Paraguay", bandera: "py", cancion: "Recuerdos de Ypacaraí", artista: "Dyango" },
  { pais: "Marruecos", bandera: "ma", cancion: "Aïcha", artista: "Khaled" },
  { pais: "Senegal", bandera: "sn", cancion: "7 Seconds", artista: "Youssou N'Dour y Neneh Cherry" },
  { pais: "Nigeria", bandera: "ng", cancion: "Wetin Man Go Do", artista: "Fela Kuti" },
  { pais: "Egipto", bandera: "eg", cancion: "Habibi", artista: "Amr Diab" },
  { pais: "Camerún", bandera: "cm", cancion: "Soul Makossa", artista: "Manu Dibango" },
  { pais: "Costa de Marfil", bandera: "ci", cancion: "Sweet Mother", artista: "Prince Nico Mbarga" },
  { pais: "Sudáfrica", bandera: "za", cancion: "Waka Waka", artista: "Shakira (versión original)" },
  { pais: "Japón", bandera: "jp", cancion: "Sukiyaki", artista: "Kyu Sakamoto" },
  { pais: "Corea del Sur", bandera: "kr", cancion: "Gangnam Style", artista: "PSY" },
  { pais: "Arabia Saudita", bandera: "sa", cancion: "Jadal", artista: "Rabeh Saqer" },
  { pais: "Qatar", bandera: "qa", cancion: "Hayyak", artista: "Fahad Al Kubaisi" },
  { pais: "Indonesia", bandera: "id", cancion: "Bengawan Solo", artista: "Waldjinah" },
  { pais: "Australia", bandera: "au", cancion: "Down Under", artista: "Men at Work" },
  { pais: "Nueva Zelanda", bandera: "nz", cancion: "Poi E", artista: "Dalvanius Prime" },
  { pais: "Irán", bandera: "ir", cancion: "Morgh-e Sahar", artista: "Shajarian" },
  { pais: "Irak", bandera: "iq", cancion: "Fog El Nakhal", artista: "Kadim Al Sahir" },
  { pais: "Uzbekistán", bandera: "uz", cancion: "Mening Yurtim", artista: "Yulduz Usmanova" },
  { pais: "China", bandera: "cn", cancion: "Moli Hua", artista: "tradicional" },
  { pais: "India", bandera: "in", cancion: "Jai Ho", artista: "A.R. Rahman" },
  { pais: "Inglaterra", bandera: "gb", cancion: "Three Lions", artista: "Baddiel, Skinner y Lightning Seeds" },
  { pais: "Países Bajos", bandera: "nl", cancion: "Radar Love", artista: "Golden Earring" },
  { pais: "Bélgica", bandera: "be", cancion: "Puttin' on the Ritz", artista: "Taco" },
  { pais: "Austria", bandera: "at", cancion: "Edelweiss", artista: "The Sound of Music" },
  { pais: "Hungría", bandera: "hu", cancion: "Gloomy Sunday", artista: "Billie Holiday versión" },
  { pais: "Eslovaquia", bandera: "sk", cancion: "Cigánska", artista: "tradicional" },
  { pais: "Rumanía", bandera: "ro", cancion: "Dragostea Din Tei", artista: "O-Zone" },
  { pais: "Albania", bandera: "al", cancion: "Moj Kosovo", artista: "tradicional" },
  { pais: "Turquía", bandera: "tr", cancion: "Şımarık", artista: "Tarkan" },
  { pais: "Ucrania", bandera: "ua", cancion: "Chervona Ruta", artista: "Sofía Rotaru" },
  { pais: "Honduras", bandera: "hn", cancion: "Sopa de Caracol", artista: "Banda Blanca" },
  { pais: "Panamá", bandera: "pa", cancion: "El Tamborito", artista: "tradicional" },
]

function TarjetaCancion({ 
  pais, 
  bandera, 
  cancion, 
  artista, 
  youtube, 
  esActual = false 
}: { 
  pais: string
  bandera: string
  cancion: string
  artista: string
  youtube?: string
  esActual?: boolean
}) {
  const searchQuery = `${cancion} ${artista}`
  const youtubeUrl = youtube || `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`
  
  return (
    <div className={`rounded-3xl p-6 flex items-start gap-5 transition-all ${
      esActual 
        ? "border-4 border-green-500 bg-gradient-to-br from-green-600/10 to-transparent" 
        : "border-2 border-border bg-card hover:shadow-lg"
    }`}>
      {/* Bandera */}
      <div className="shrink-0">
        <img
          src={`https://flagcdn.com/64x48/${bandera}.png`}
          alt={`Bandera de ${pais}`}
          width={64}
          height={48}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-2xl font-black text-foreground">{pais}</h3>
          {esActual && (
            <span className="rounded-full bg-green-600 text-white text-xs font-bold px-3 py-1">
              🔥 ACTUAL
            </span>
          )}
        </div>
        <p className="text-xl font-bold text-foreground mb-1">{cancion}</p>
        <p className="text-lg text-muted-foreground font-semibold">{artista}</p>
        
        {/* Botón */}
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-5 py-3 transition-all active:scale-95 min-h-[52px]"
        >
          <span>▶</span>
          Escuchar en YouTube
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  )
}

export default function MusicaSection() {
  const [tabActivo, setTabActivo] = useState<"himnos" | "paises">("himnos")
  const [busqueda, setBusqueda] = useState("")

  const cancionesFiltradas = CANCIONES_PAISES.filter(c =>
    c.pais.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <section className="min-h-screen bg-background px-6 py-12 section-enter">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-9xl leading-none mb-4" role="img" aria-label="Ícono de Música">🎵</p>
          <h2 className="text-5xl font-black text-foreground md:text-6xl mb-3">La Música del Mundial</h2>
          <p className="text-accessible-lg text-foreground/85 text-pretty leading-relaxed font-semibold max-w-3xl">
            Escuchá las canciones de todos los mundiales y las representativas de cada una de las 48 selecciones.
          </p>
          <div className="mt-4">
            <BotonLeer 
              etiqueta="Escuchar sección"
              texto="La Música del Mundial. Escuchá las canciones de todos los mundiales y las representativas de cada una de las 48 selecciones."
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setTabActivo("himnos")}
            className={`flex items-center gap-3 rounded-2xl px-8 py-4 min-h-16 font-bold text-2xl transition-all ${
              tabActivo === "himnos"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-200 text-foreground hover:bg-gray-300"
            }`}
          >
            <span>🏆</span>
            Himnos de todos los mundiales
          </button>
          <button
            onClick={() => setTabActivo("paises")}
            className={`flex items-center gap-3 rounded-2xl px-8 py-4 min-h-16 font-bold text-2xl transition-all ${
              tabActivo === "paises"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-200 text-foreground hover:bg-gray-300"
            }`}
          >
            <span>🌍</span>
            Canciones de las 48 selecciones
          </button>
        </div>

        {/* Contenido Tab Himnos */}
        {tabActivo === "himnos" && (
          <div className="grid gap-6 md:grid-cols-2">
            {HIMNOS_MUNDIALES.map((himno) => (
              <TarjetaCancion
                key={himno.año}
                pais={himno.pais}
                bandera={himno.bandera}
                cancion={himno.cancion}
                artista={himno.artista}
                youtube={himno.youtube}
                esActual={himno.esActual || false}
              />
            ))}
          </div>
        )}

        {/* Contenido Tab Países */}
        {tabActivo === "paises" && (
          <>
            {/* Búsqueda */}
            <div className="mb-8 relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground" size={24} />
              <input
                type="text"
                placeholder="🔍 Buscar país..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full rounded-2xl bg-card border-2 border-border pl-14 pr-6 py-4 text-2xl font-semibold placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-16 transition-all"
              />
            </div>

            {/* Grid de canciones */}
            {cancionesFiltradas.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {cancionesFiltradas.map((item) => (
                  <TarjetaCancion
                    key={item.pais}
                    pais={item.pais}
                    bandera={item.bandera}
                    cancion={item.cancion}
                    artista={item.artista}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-2xl font-bold text-muted-foreground">
                  No hay resultados para "{busqueda}"
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
