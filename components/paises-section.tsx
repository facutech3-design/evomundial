"use client"

import { useState, useEffect, useCallback } from "react"
import { Globe, Music, Utensils, Languages, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react"

const PAISES = [
  // --- SEDES ---
  {
    nombre: "Estados Unidos",
    emoji: "🇺🇸",
    sede: true,
    continente: "America del Norte",
    idioma: "Ingles",
    comida: "Hamburguesas, hot dogs, BBQ",
    musica: "Jazz, hip hop, country",
    curiosidad: "Uno de los tres paises sede del Mundial 2026. Es el pais mas diverso del mundo, con mas de 300 idiomas hablados. Tiene 50 estados y millones de historias.",
    color: "from-red-500 to-blue-600",
    dato: "Sede 2026",
  },
  {
    nombre: "Mexico",
    emoji: "🇲🇽",
    sede: true,
    continente: "America del Norte",
    idioma: "Espanol",
    comida: "Tacos, guacamole, mole",
    musica: "Mariachi, cumbia, banda",
    curiosidad: "Sede del Mundial 2026. Mexico ya organizo el Mundial dos veces: 1970 y 1986. Tiene una de las culturas mas antiguas del mundo con los mayas y aztecas.",
    color: "from-green-600 to-red-500",
    dato: "Sede 2026",
  },
  {
    nombre: "Canada",
    emoji: "🇨🇦",
    sede: true,
    continente: "America del Norte",
    idioma: "Ingles y Frances",
    comida: "Poutine, maple syrup, salmon",
    musica: "Folk, country, pop",
    curiosidad: "Sede del Mundial 2026. Canada es conocido por su naturaleza increible, la aurora boreal y ser uno de los paises mas multiculturales del mundo.",
    color: "from-red-600 to-red-800",
    dato: "Sede 2026",
  },
  // --- AMERICA DEL SUR ---
  {
    nombre: "Argentina",
    emoji: "🇦🇷",
    sede: false,
    continente: "America del Sur",
    idioma: "Espanol",
    comida: "Asado, empanadas, mate",
    musica: "Tango, cumbia, folklore",
    curiosidad: "Argentina gano el Mundial 2022 en Qatar. Es el pais de Messi, el tango y los mejores vinos del mundo. Somos campeones del mundo.",
    color: "from-sky-400 to-blue-700",
    dato: "Campeon 2022",
  },
  {
    nombre: "Brasil",
    emoji: "🇧🇷",
    sede: false,
    continente: "America del Sur",
    idioma: "Portugues",
    comida: "Feijoada, churrasco, acai",
    musica: "Samba, bossa nova, funk",
    curiosidad: "El pais con mas Mundiales ganados: 5 titulos. La seleccion se llama 'Canarinha' por el color amarillo de su camiseta. El carnaval de Rio es el mas famoso del mundo.",
    color: "from-yellow-400 to-green-600",
    dato: "5 titulos",
  },
  {
    nombre: "Uruguay",
    emoji: "🇺🇾",
    sede: false,
    continente: "America del Sur",
    idioma: "Espanol",
    comida: "Asado, chivito, mate",
    musica: "Candombe, murga, tango",
    curiosidad: "Uruguay fue campeon del primer Mundial de la historia en 1930, que se celebro en su propio pais. Una nacion chica con historia enorme.",
    color: "from-sky-500 to-sky-700",
    dato: "2 titulos",
  },
  {
    nombre: "Colombia",
    emoji: "🇨🇴",
    sede: false,
    continente: "America del Sur",
    idioma: "Espanol",
    comida: "Bandeja paisa, arepas, sancocho",
    musica: "Cumbia, vallenato, salsa",
    curiosidad: "Colombia llego a los cuartos de final del Mundial 2014. Es el pais de magicos como Carlos Valderrama y el nuevo boom del futbol latinoamericano.",
    color: "from-yellow-400 to-red-500",
    dato: "Cafeteros",
  },
  {
    nombre: "Ecuador",
    emoji: "🇪🇨",
    sede: false,
    continente: "America del Sur",
    idioma: "Espanol",
    comida: "Ceviche, llapingachos, seco de pollo",
    musica: "Pasillo, cumbia, chicha",
    curiosidad: "Ecuador tiene una de las mayores biodiversidades del planeta. Las Islas Galapagos, que inspiraron a Darwin, son parte de su territorio.",
    color: "from-yellow-400 to-blue-600",
    dato: "La Tri",
  },
  {
    nombre: "Venezuela",
    emoji: "🇻🇪",
    sede: false,
    continente: "America del Sur",
    idioma: "Espanol",
    comida: "Arepas, pabellón criollo, cachapas",
    musica: "Joropo, salsa, merengue",
    curiosidad: "Venezuela clasifica al Mundial 2026 por primera vez en su historia. Un hito historico para la Vinotinto y para todo el pais.",
    color: "from-yellow-400 to-red-600",
    dato: "Primera vez",
  },
  {
    nombre: "Bolivia",
    emoji: "🇧🇴",
    sede: false,
    continente: "America del Sur",
    idioma: "Espanol, quechua, aimara",
    comida: "Salteñas, fricasé, silpancho",
    musica: "Huayno, morenada, cumbia",
    curiosidad: "Bolivia juega sus partidos de local en La Paz, a 3600 metros sobre el nivel del mar. Sus rivales sienten el efecto de la altitud al jugar alli.",
    color: "from-red-500 to-green-600",
    dato: "Verde",
  },
  // --- AMERICA CENTRAL Y CARIBE ---
  {
    nombre: "Honduras",
    emoji: "🇭🇳",
    sede: false,
    continente: "America Central",
    idioma: "Espanol",
    comida: "Baleadas, tamales, sopa de caracol",
    musica: "Punta, cumbia, corridos",
    curiosidad: "Honduras tiene acceso al Oceano Pacifico y al Atlantico. Fue uno de los primeros paises de America Central en participar en Mundiales.",
    color: "from-sky-500 to-sky-700",
    dato: "Bicolor",
  },
  {
    nombre: "Panama",
    emoji: "🇵🇦",
    sede: false,
    continente: "America Central",
    idioma: "Espanol",
    comida: "Sancocho, arroz con pollo, ceviche",
    musica: "Salsa, reggaeton, tipico",
    curiosidad: "Panama une America del Norte y del Sur. El Canal de Panama, una de las obras de ingenieria mas importantes de la historia, esta en este pais.",
    color: "from-red-500 to-blue-600",
    dato: "El Canal",
  },
  {
    nombre: "Costa Rica",
    emoji: "🇨🇷",
    sede: false,
    continente: "America Central",
    idioma: "Espanol",
    comida: "Gallo pinto, olla de carne, casado",
    musica: "Cumbia, son tico, calypso",
    curiosidad: "Costa Rica tiene mas del 25% de su territorio como area protegida. Llego a cuartos de final en Brasil 2014 eliminando a Italia y Uruguay.",
    color: "from-red-600 to-sky-600",
    dato: "Ticos",
  },
  {
    nombre: "Jamaica",
    emoji: "🇯🇲",
    sede: false,
    continente: "America Central",
    idioma: "Ingles",
    comida: "Jerk chicken, ackee, bammy",
    musica: "Reggae, dancehall, ska",
    curiosidad: "Jamaica es cuna del reggae y del atleta mas rapido de la historia, Usain Bolt. Regresa a un Mundial por primera vez en decadas.",
    color: "from-yellow-400 to-green-700",
    dato: "Reggae Boyz",
  },
  // --- EUROPA ---
  {
    nombre: "Francia",
    emoji: "🇫🇷",
    sede: false,
    continente: "Europa",
    idioma: "Frances",
    comida: "Baguette, queso, crepes",
    musica: "Chanson, electronica, hip hop",
    curiosidad: "Campeon del mundo en 1998 y 2018. El equipo frances es conocido por su diversidad: muchos jugadores tienen origen africano, reflejando la riqueza de Francia.",
    color: "from-blue-500 to-red-500",
    dato: "2 titulos",
  },
  {
    nombre: "Alemania",
    emoji: "🇩🇪",
    sede: false,
    continente: "Europa",
    idioma: "Aleman",
    comida: "Salchichas, pretzel, cerveza",
    musica: "Clasica, techno, schlager",
    curiosidad: "4 titulos mundiales. Alemania es conocida por su precision y organizacion. Su filosofia de juego influyo el futbol mundial durante decadas.",
    color: "from-neutral-500 to-neutral-800",
    dato: "4 titulos",
  },
  {
    nombre: "Espana",
    emoji: "🇪🇸",
    sede: false,
    continente: "Europa",
    idioma: "Espanol",
    comida: "Paella, tortilla espanola, jamon",
    musica: "Flamenco, pop, reggaeton",
    curiosidad: "Campeon del mundo en 2010 con un estilo de juego llamado 'tiki-taka' que revoluciono el futbol. Tiene muchos idiomas y culturas distintas dentro del mismo pais.",
    color: "from-red-600 to-yellow-400",
    dato: "1 titulo",
  },
  {
    nombre: "Portugal",
    emoji: "🇵🇹",
    sede: false,
    continente: "Europa",
    idioma: "Portugues",
    comida: "Bacalao, pasteis de nata, caldo verde",
    musica: "Fado, pop, folklore",
    curiosidad: "Portugal fue un gran navegante que exploro el mundo en el siglo XV. Cristiano Ronaldo es el maximo goleador historico de selecciones nacionales.",
    color: "from-green-700 to-red-600",
    dato: "Os Navegadores",
  },
  {
    nombre: "Italia",
    emoji: "🇮🇹",
    sede: false,
    continente: "Europa",
    idioma: "Italiano",
    comida: "Pizza, pasta, gelato",
    musica: "Opera, pop, hip hop",
    curiosidad: "Italia tiene 4 titulos mundiales y es cuna del Renacimiento, el arte, la arquitectura y gran parte de la cultura occidental. La Azzurra vuelve al Mundial.",
    color: "from-sky-500 to-green-600",
    dato: "4 titulos",
  },
  {
    nombre: "Inglaterra",
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    sede: false,
    continente: "Europa",
    idioma: "Ingles",
    comida: "Fish and chips, Sunday roast, pie",
    musica: "Rock, pop, britpop",
    curiosidad: "Inglaterra es la cuna del futbol moderno. El primer partido oficial se jugo ahi en 1863. Ganaron su unico Mundial en 1966, de local.",
    color: "from-red-600 to-red-800",
    dato: "Inventores",
  },
  {
    nombre: "Holanda",
    emoji: "🇳🇱",
    sede: false,
    continente: "Europa",
    idioma: "Holandes",
    comida: "Stroopwafels, herring, stamppot",
    musica: "House, dance, pop",
    curiosidad: "Holanda invento el 'futbol total', un estilo revolucionario en los anos 70. Sus jugadores llevan la camiseta naranja, el color nacional.",
    color: "from-orange-500 to-orange-700",
    dato: "Oranje",
  },
  {
    nombre: "Belgica",
    emoji: "🇧🇪",
    sede: false,
    continente: "Europa",
    idioma: "Frances, holandes, aleman",
    comida: "Waffles, mejillones, chocolate",
    musica: "Pop, rock, jazz",
    curiosidad: "Belgica tiene tres idiomas oficiales en un pais chico. En 2018 quedo en el tercer puesto del Mundial, el mejor resultado de su historia.",
    color: "from-yellow-400 to-red-600",
    dato: "3er puesto 2018",
  },
  {
    nombre: "Croacia",
    emoji: "🇭🇷",
    sede: false,
    continente: "Europa",
    idioma: "Croata",
    comida: "Burek, cevapi, prstaci",
    musica: "Klapa, pop, folk",
    curiosidad: "Croacia quedo subcampeon en 1998 y 2022. Una nacion joven que se independizo en 1991 y ya tiene dos finales mundiales. Sus jugadores llevan la camiseta a cuadros rojos y blancos.",
    color: "from-red-500 to-sky-600",
    dato: "Subcampeon 2022",
  },
  {
    nombre: "Suiza",
    emoji: "🇨🇭",
    sede: false,
    continente: "Europa",
    idioma: "Aleman, frances, italiano",
    comida: "Fondue, raclette, rosti",
    musica: "Folk alpino, pop, yodel",
    curiosidad: "Suiza tiene cuatro idiomas oficiales y es sede de muchos organismos internacionales como la Cruz Roja. Es uno de los paises mas estables del mundo.",
    color: "from-red-600 to-red-800",
    dato: "La Nati",
  },
  {
    nombre: "Austria",
    emoji: "🇦🇹",
    sede: false,
    continente: "Europa",
    idioma: "Aleman",
    comida: "Schnitzel, strudel, knodel",
    musica: "Clasica, pop, folk",
    curiosidad: "Austria es cuna de Mozart, Beethoven y Schubert. Tiene una de las tradiciones musicales mas ricas del mundo. El Equipo de Austria retorna al Mundial.",
    color: "from-red-600 to-red-800",
    dato: "Das Team",
  },
  {
    nombre: "Serbia",
    emoji: "🇷🇸",
    sede: false,
    continente: "Europa",
    idioma: "Serbio",
    comida: "Cevapi, burek, gibanica",
    musica: "Turbo folk, pop, gipsy",
    curiosidad: "Serbia ha producido algunos de los mejores jugadores de baloncesto y futbol de Europa. Belgrado es una de las capitales mas vibrantes del este de Europa.",
    color: "from-red-600 to-blue-700",
    dato: "Orlovi",
  },
  {
    nombre: "Escocia",
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    sede: false,
    continente: "Europa",
    idioma: "Ingles, gaelico",
    comida: "Haggis, shortbread, smoked salmon",
    musica: "Gaita, folk, rock",
    curiosidad: "Escocia es uno de los paises con futbol mas antiguo del mundo, con clubes que existen desde 1860. Tiene los paisajes de montanas mas espectaculares de Europa.",
    color: "from-sky-600 to-sky-800",
    dato: "La Tela",
  },
  {
    nombre: "Turquia",
    emoji: "🇹🇷",
    sede: false,
    continente: "Europa",
    idioma: "Turco",
    comida: "Kebab, baklava, simit",
    musica: "Pop turco, folk, arabesk",
    curiosidad: "Turquia quedo en tercer lugar del Mundial 2002. Su pais une Europa y Asia. Tiene una cultura milenaria que mezcla Oriente y Occidente.",
    color: "from-red-600 to-red-800",
    dato: "Ay-Yildizlilar",
  },
  {
    nombre: "Hungria",
    emoji: "🇭🇺",
    sede: false,
    continente: "Europa",
    idioma: "Hungaro",
    comida: "Goulash, langos, paprika",
    musica: "Folk, pop, clasica",
    curiosidad: "Hungria fue una de las grandes potencias del futbol en los anos 50 con el 'Equipo de Oro'. Vuelve al Mundial despues de muchos anos.",
    color: "from-red-500 to-green-600",
    dato: "Magyarok",
  },
  // --- AFRICA ---
  {
    nombre: "Marruecos",
    emoji: "🇲🇦",
    sede: false,
    continente: "Africa",
    idioma: "Arabe y Frances",
    comida: "Cous cous, tagine, pastilla",
    musica: "Gnawa, chaabi, rai",
    curiosidad: "En Qatar 2022, Marruecos llego a las semifinales: el mejor resultado de Africa en la historia de los Mundiales. Un hito para todo el continente.",
    color: "from-red-600 to-green-700",
    dato: "4to puesto 2022",
  },
  {
    nombre: "Nigeria",
    emoji: "🇳🇬",
    sede: false,
    continente: "Africa",
    idioma: "Ingles",
    comida: "Jollof rice, suya, egusi soup",
    musica: "Afrobeats, highlife, juju",
    curiosidad: "Las 'Super Aguilas' son una de las selecciones mas populares de Africa. Nigeria tiene la economia mas grande del continente y es rica en diversidad cultural.",
    color: "from-green-600 to-green-800",
    dato: "Super Aguilas",
  },
  {
    nombre: "Senegal",
    emoji: "🇸🇳",
    sede: false,
    continente: "Africa",
    idioma: "Frances",
    comida: "Thieboudienne, yassa, mafe",
    musica: "Mbalax, afrobeats, sabar",
    curiosidad: "Senegal es el campeon de la Copa Africa 2022. En 2002 llego a cuartos de final del Mundial y en 2022 fue a los octavos. Sadio Mane es su jugador mas famoso.",
    color: "from-green-600 to-yellow-400",
    dato: "Leone de Teranga",
  },
  {
    nombre: "Costa de Marfil",
    emoji: "🇨🇮",
    sede: false,
    continente: "Africa",
    idioma: "Frances",
    comida: "Attieke, kedjenou, placali",
    musica: "Coupé-décalé, zouglou, afrobeats",
    curiosidad: "Costa de Marfil tiene uno de los mejores jugadores africanos de la historia: Didier Drogba. Campeon de Africa 2023, vuelve con fuerza al Mundial.",
    color: "from-orange-500 to-green-600",
    dato: "Elefantes",
  },
  {
    nombre: "Camerun",
    emoji: "🇨🇲",
    sede: false,
    continente: "Africa",
    idioma: "Frances e Ingles",
    comida: "Ndole, eru, sanga",
    musica: "Makossa, bikutsi, afropop",
    curiosidad: "Los 'Leones Indomables' son uno de los equipos mas exitosos de Africa. Roger Milla se hizo famoso en el Mundial 1990 con mas de 38 anos.",
    color: "from-yellow-400 to-green-700",
    dato: "Leones Indomables",
  },
  {
    nombre: "Ghana",
    emoji: "🇬🇭",
    sede: false,
    continente: "Africa",
    idioma: "Ingles",
    comida: "Fufu, jollof rice, kelewele",
    musica: "Highlife, hiplife, afrobeats",
    curiosidad: "Ghana estuvo a punto de llegar a las semifinales en 2010, eliminada en cuartos por un penal de Suarez. Las Estrellas Negras son las esperanzas de Africa.",
    color: "from-yellow-400 to-red-600",
    dato: "Estrellas Negras",
  },
  {
    nombre: "Egipto",
    emoji: "🇪🇬",
    sede: false,
    continente: "Africa",
    idioma: "Arabe",
    comida: "Kushari, ful medames, ta'ameya",
    musica: "Pop arabe, sha'bi, chaabi",
    curiosidad: "Egipto es la civilizacion mas antigua del mundo, con 5000 anos de historia. Mohamed Salah es uno de los mejores jugadores del mundo actualmente.",
    color: "from-red-600 to-yellow-400",
    dato: "Los Faraones",
  },
  {
    nombre: "Mali",
    emoji: "🇲🇱",
    sede: false,
    continente: "Africa",
    idioma: "Frances",
    comida: "Tiguadege na, fufu, thieboudienne",
    musica: "Blues del desierto, kora, wassoulou",
    curiosidad: "Mali es un pais del Sahel con una historia rica en imperios medievales. Los Aguila de Mali son una de las selecciones emergentes de Africa.",
    color: "from-yellow-400 to-green-600",
    dato: "Aigles",
  },
  // --- ASIA ---
  {
    nombre: "Japon",
    emoji: "🇯🇵",
    sede: false,
    continente: "Asia",
    idioma: "Japones",
    comida: "Sushi, ramen, tempura",
    musica: "J-pop, taiko drums, enka",
    curiosidad: "Japon sorprende en cada Mundial con su disciplina, respeto y trabajo en equipo. Los hinchas son famosos por limpiar los estadios despues de los partidos.",
    color: "from-red-500 to-red-700",
    dato: "Fair play",
  },
  {
    nombre: "Corea del Sur",
    emoji: "🇰🇷",
    sede: false,
    continente: "Asia",
    idioma: "Coreano",
    comida: "Kimchi, bibimbap, bulgogi",
    musica: "K-pop, trot, hip hop",
    curiosidad: "Corea del Sur llego a las semifinales del Mundial 2002 que organizo junto a Japon. El K-pop y los dramas coreanos son fenomeno cultural mundial.",
    color: "from-red-500 to-sky-600",
    dato: "Semifinal 2002",
  },
  {
    nombre: "Iran",
    emoji: "🇮🇷",
    sede: false,
    continente: "Asia",
    idioma: "Persa (Farsi)",
    comida: "Ghormeh sabzi, chelo kabab, ash reshteh",
    musica: "Pop persa, pop clasico, dastgah",
    curiosidad: "Iran es una de las civilizaciones mas antiguas del mundo, con 7000 anos de historia. Es la seleccion asiatica con mas participaciones mundialistas.",
    color: "from-green-600 to-red-500",
    dato: "Team Melli",
  },
  {
    nombre: "Arabia Saudita",
    emoji: "🇸🇦",
    sede: false,
    continente: "Asia",
    idioma: "Arabe",
    comida: "Kabsa, jareesh, mandi",
    musica: "Pop arabe, khaleeji, pop occidental",
    curiosidad: "Arabia Saudita dio la sorpresa del siglo en Qatar 2022 ganandole a Argentina por 2-1. Grandes jugadores europeos van a jugar alli actualmente.",
    color: "from-green-700 to-green-900",
    dato: "Sorpresa 2022",
  },
  {
    nombre: "Australia",
    emoji: "🇦🇺",
    sede: false,
    continente: "Asia",
    idioma: "Ingles",
    comida: "Vegemite, meat pie, pavlova",
    musica: "Rock australiano, pop, folk aborigen",
    curiosidad: "Australia llego a cuartos de final en el Mundial 2006. Es un pais inmenso conocido por sus marsupiales, la Gran Barrera de Coral y los kangaroos.",
    color: "from-yellow-400 to-green-600",
    dato: "Socceroos",
  },
  {
    nombre: "Uzbekistan",
    emoji: "🇺🇿",
    sede: false,
    continente: "Asia",
    idioma: "Uzbeko",
    comida: "Plov, samsa, lagman",
    musica: "Pop uzbeko, tradicional, dutar",
    curiosidad: "Uzbekistan clasifica al Mundial por primera vez en su historia. Es un pais de la Ruta de la Seda con ciudades milenarias como Samarcanda.",
    color: "from-sky-500 to-green-600",
    dato: "Primera vez",
  },
  // --- OCEANIA ---
  {
    nombre: "Nueva Zelanda",
    emoji: "🇳🇿",
    sede: false,
    continente: "Oceania",
    idioma: "Ingles y Maori",
    comida: "Hangi, pavlova, fish and chips",
    musica: "Folk maori, rock, pop",
    curiosidad: "Nueva Zelanda es conocida por los All Blacks de rugby, los Kiwis y los paisajes de la saga El Senor de los Anillos. El futbol crece cada vez mas.",
    color: "from-sky-600 to-sky-800",
    dato: "All Whites",
  },
]

const CONTINENTES = ["Todos", "America del Sur", "America del Norte", "America Central", "Europa", "Africa", "Asia", "Oceania"]

export default function PaisesSection() {
  const [indiceModal, setIndiceModal] = useState<number | null>(null)
  const [filtro, setFiltro] = useState("Todos")

  const paisesFiltrados = filtro === "Todos" ? PAISES : PAISES.filter((p) => p.continente === filtro)

  const cerrar = useCallback(() => setIndiceModal(null), [])

  const anterior = useCallback(() => {
    setIndiceModal((i) => (i !== null && i > 0 ? i - 1 : i))
  }, [])

  const siguiente = useCallback(() => {
    setIndiceModal((i) => (i !== null && i < paisesFiltrados.length - 1 ? i + 1 : i))
  }, [paisesFiltrados.length])

  useEffect(() => {
    if (indiceModal === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar()
      if (e.key === "ArrowRight") siguiente()
      if (e.key === "ArrowLeft") anterior()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [indiceModal, cerrar, siguiente, anterior])

  const paisActual = indiceModal !== null ? paisesFiltrados[indiceModal] : null

  return (
    <section className="min-h-screen bg-background px-6 py-12 section-enter">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex items-start gap-4">
          <div className="shrink-0 rounded-2xl bg-primary p-4">
            <Globe size={32} className="text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-foreground md:text-5xl">Paises y Culturas</h2>
            <p className="mt-2 text-lg text-muted-foreground text-pretty">
              Los {PAISES.length} paises del Mundial 2026. Toca cada bandera para descubrir su cultura, comida, musica y curiosidades.
            </p>
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="mb-3 flex items-center justify-between">
          <div className="text-sm font-bold text-muted-foreground">
            {paisesFiltrados.length === PAISES.length
              ? `${PAISES.length} paises en total`
              : `${paisesFiltrados.length} paises en ${filtro}`}
          </div>
          {filtro !== "Todos" && (
            <button
              onClick={() => { setFiltro("Todos"); setIndiceModal(null) }}
              className="text-xs font-bold text-primary underline underline-offset-2 hover:opacity-70"
            >
              Ver todos
            </button>
          )}
        </div>

        {/* Filtros por continente */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CONTINENTES.map((c) => (
            <button
              key={c}
              onClick={() => { setFiltro(c); setIndiceModal(null) }}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                filtro === c
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/20"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid de paises */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {paisesFiltrados.map((pais, i) => (
            <button
              key={pais.nombre}
              onClick={() => setIndiceModal(i)}
              className={`group flex flex-col items-center rounded-2xl border-2 bg-card p-4 text-center transition-all hover:border-primary hover:shadow-lg hover:scale-105 active:scale-95 ${
                indiceModal === i ? "border-primary shadow-lg" : "border-border"
              }`}
            >
              <span
                className="mb-2 text-4xl leading-none"
                role="img"
                aria-label={`Bandera de ${pais.nombre}`}
              >
                {pais.emoji}
              </span>
              <span className="text-xs font-bold text-foreground leading-tight">{pais.nombre}</span>
              {pais.sede && (
                <span className="mt-1.5 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
                  Sede
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Modal con navegacion entre paises */}
        {paisActual !== null && indiceModal !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
            onClick={cerrar}
            role="dialog"
            aria-modal="true"
            aria-label={`Informacion sobre ${paisActual.nombre}`}
          >
            <div
              className="relative w-full max-w-lg rounded-3xl bg-card shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header con gradiente */}
              <div className={`bg-gradient-to-br ${paisActual.color} p-8 text-white`}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-7xl mb-3 leading-none">{paisActual.emoji}</div>
                    <h3 className="text-3xl font-black">{paisActual.nombre}</h3>
                    <div className="flex items-center gap-1.5 mt-1 text-white/75 text-sm font-semibold">
                      <MapPin size={14} />
                      {paisActual.continente}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {paisActual.sede && (
                      <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-bold">
                        Sede 2026
                      </span>
                    )}
                    <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-bold">
                      {paisActual.dato}
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-xs text-white/50 font-semibold">
                  {indiceModal + 1} de {paisesFiltrados.length}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-7 space-y-4">
                <div className="flex gap-3">
                  <div className="shrink-0 rounded-xl bg-primary/10 p-3">
                    <Languages size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Idioma</p>
                    <p className="font-semibold text-foreground text-base">{paisActual.idioma}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 rounded-xl bg-success/10 p-3">
                    <Utensils size={20} className="text-success" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Comidas tipicas</p>
                    <p className="font-semibold text-foreground text-base">{paisActual.comida}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 rounded-xl bg-creative/10 p-3">
                    <Music size={20} className="text-creative" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Musica</p>
                    <p className="font-semibold text-foreground text-base">{paisActual.musica}</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-muted p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">
                    Dato interesante
                  </p>
                  <p className="text-sm leading-relaxed text-foreground">{paisActual.curiosidad}</p>
                </div>
              </div>

              {/* Navegacion */}
              <div className="flex items-center justify-between gap-3 px-7 pb-7">
                <button
                  onClick={anterior}
                  disabled={indiceModal === 0}
                  className="flex items-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-sm font-bold text-secondary-foreground transition-all hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
                  aria-label="Pais anterior"
                >
                  <ChevronLeft size={18} />
                  Anterior
                </button>
                <button
                  onClick={cerrar}
                  className="rounded-full bg-muted p-2.5 text-muted-foreground hover:bg-foreground hover:text-primary-foreground transition-all"
                  aria-label="Cerrar"
                >
                  <X size={20} />
                </button>
                <button
                  onClick={siguiente}
                  disabled={indiceModal === paisesFiltrados.length - 1}
                  className="flex items-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
                  aria-label="Pais siguiente"
                >
                  Siguiente
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Actividad grupal */}
        <div className="mt-12 rounded-3xl bg-primary p-8 text-primary-foreground">
          <h3 className="mb-2 text-2xl font-black">Actividad grupal: Somos Embajadores</h3>
          <p className="text-base text-primary-foreground/80 mb-6 leading-relaxed">
            Entre todos elegimos un pais que no conocemos y preparamos una presentacion: su bandera, su comida
            favorita y una curiosidad. Despues la compartimos con el grupo.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { n: "1", txt: "Elegimos un pais del mundo" },
              { n: "2", txt: "Investigamos y dibujamos su bandera" },
              { n: "3", txt: "Presentamos al grupo: somos sus embajadores" },
            ].map((paso) => (
              <div key={paso.n} className="rounded-2xl bg-white/15 p-5">
                <div className="text-3xl font-black mb-2">{paso.n}</div>
                <p className="text-sm font-semibold leading-relaxed">{paso.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
