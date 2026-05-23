"use client"

import { useState, useEffect, useCallback } from "react"
import { Globe, Music, Utensils, Languages, X, ChevronLeft, ChevronRight, MapPin, ExternalLink } from "lucide-react"

const PAISES = [
  // --- SEDES (CONCACAF) ---
  {
    nombre: "Estados Unidos",
    emoji: "🇺🇸",
    sede: true,
    continente: "CONCACAF",
    idioma: "Ingles",
    comida: "Hamburguesas, hot dogs, BBQ",
    // Beyoncé es de Houston, Texas. "Crazy in Love" sigue siendo su cancion mas reproducida globalmente
    cancion: "Crazy in Love — Beyoncé",
    youtube: "https://www.youtube.com/watch?v=ViwtNLUqkMY",
    curiosidad: "Uno de los tres paises sede del Mundial 2026. Es el pais mas diverso del mundo, con mas de 300 idiomas hablados. Tiene 50 estados y millones de historias.",
    color: "from-red-500 to-blue-600",
    dato: "Sede 2026",
  },
  {
    nombre: "Mexico",
    emoji: "🇲🇽",
    sede: true,
    continente: "CONCACAF",
    idioma: "Espanol",
    comida: "Tacos, guacamole, mole",
    // Mexico: Banda MS de Sergio Lizarraga, top streamed en la decada en Mexico
    cancion: "Amor Secreto — Banda MS de Sergio Lizárraga",
    youtube: "https://www.youtube.com/watch?v=_ZpknE_UDVA",
    curiosidad: "Sede del Mundial 2026. Mexico ya organizo el Mundial dos veces: 1970 y 1986. Tiene una de las culturas mas antiguas del mundo con los mayas y aztecas.",
    color: "from-green-600 to-red-500",
    dato: "Sede 2026",
  },
  {
    nombre: "Canada",
    emoji: "🇨🇦",
    sede: true,
    continente: "CONCACAF",
    idioma: "Ingles y Frances",
    comida: "Poutine, maple syrup, salmon",
    // Canada: Drake es de Toronto. "God's Plan" fue el tema mas descargado de 2018
    cancion: "God's Plan — Drake",
    youtube: "https://www.youtube.com/watch?v=xpVfcZ0ZcFM",
    curiosidad: "Sede del Mundial 2026. Canada es conocido por su naturaleza increible, la aurora boreal y ser uno de los paises mas multiculturales del mundo.",
    color: "from-red-600 to-red-800",
    dato: "Sede 2026",
  },
  // --- CONCACAF clasificados ---
  {
    nombre: "Panama",
    emoji: "🇵🇦",
    sede: false,
    continente: "CONCACAF",
    idioma: "Espanol",
    comida: "Sancocho, arroz con pollo, ceviche",
    // Panama: Sech es de Panama. "Otro Trago" fue #1 en Hot Latin Songs, primer panameno en lograrlo
    cancion: "Otro Trago — Sech ft. Darell",
    youtube: "https://www.youtube.com/watch?v=DxNdnDEFaeA",
    curiosidad: "Panama une America del Norte y del Sur. El Canal de Panama, una de las obras de ingenieria mas importantes de la historia, conecta dos oceanos.",
    color: "from-red-500 to-blue-600",
    dato: "Los Canaleros",
  },
  {
    nombre: "Haiti",
    emoji: "🇭🇹",
    sede: false,
    continente: "CONCACAF",
    idioma: "Frances y Creole",
    comida: "Griot, riz et pois, pikliz",
    // Haiti: Wyclef Jean nacio en Haiti. "Hips Don't Lie" con artista haitiano mundialmente
    cancion: "Gone Till November — Wyclef Jean",
    youtube: "https://www.youtube.com/watch?v=0LqAHGBFONQ",
    curiosidad: "Haiti regresa al Mundial despues de 51 anos de ausencia. Fue el primer pais del Caribe en clasificar al Mundial en 1974 y ahora lo logra de nuevo.",
    color: "from-sky-600 to-red-600",
    dato: "Vuelve en 2026",
  },
  {
    nombre: "Curacao",
    emoji: "🇨🇼",
    sede: false,
    continente: "CONCACAF",
    idioma: "Holandes, Papiamento, Ingles",
    comida: "Keshi yena, stoba, funchi",
    // Curacao: Rody Juliana es el artista de tumba mas popular de la isla
    cancion: "Tur Kaminda — Rody Juliana",
    youtube: "https://www.youtube.com/watch?v=9bYLn8bRVgk",
    curiosidad: "Curacao debuta en su primer Mundial con una poblacion de solo 156 mil habitantes. Es la nacion mas pequena por poblacion en clasificar a un Mundial en toda la historia.",
    color: "from-sky-500 to-yellow-400",
    dato: "Debut historico",
  },
  // --- CONMEBOL ---
  {
    nombre: "Argentina",
    emoji: "🇦🇷",
    sede: false,
    continente: "CONMEBOL",
    idioma: "Espanol",
    comida: "Asado, empanadas, mate",
    // Argentina: "Muchachos" de La Mosca, himno del Mundial 2022, artista argentino
    cancion: "Muchachos (Ahora nos volvimos a ilusionar) — La Mosca",
    youtube: "https://www.youtube.com/watch?v=n3Tx4nQbMYI",
    curiosidad: "Argentina gano el Mundial 2022 en Qatar. Es el pais de Messi, el tango y los mejores vinos del mundo. Somos campeones del mundo.",
    color: "from-sky-400 to-blue-700",
    dato: "Campeon 2022",
  },
  {
    nombre: "Brasil",
    emoji: "🇧🇷",
    sede: false,
    continente: "CONMEBOL",
    idioma: "Portugues",
    comida: "Feijoada, churrasco, acai",
    // Brasil: Anitta es de Rio de Janeiro. "Envolver" fue #1 en YouTube global en 2022
    cancion: "Envolver — Anitta",
    youtube: "https://www.youtube.com/watch?v=Lgp5XbR4GpQ",
    curiosidad: "El pais con mas Mundiales ganados: 5 titulos. La seleccion se llama 'Canarinha' por el color amarillo de su camiseta. El carnaval de Rio es el mas famoso del mundo.",
    color: "from-yellow-400 to-green-600",
    dato: "5 titulos",
  },
  {
    nombre: "Ecuador",
    emoji: "🇪🇨",
    sede: false,
    continente: "CONMEBOL",
    idioma: "Espanol",
    comida: "Ceviche, llapingachos, seco de pollo",
    // Ecuador: Nicola Cruz es de Quito, pionero del "Andean electronic" con millones de streams
    cancion: "Prender el Alma — Nicola Cruz",
    youtube: "https://www.youtube.com/watch?v=YJyGqfMWTMg",
    curiosidad: "Ecuador tiene una de las mayores biodiversidades del planeta. Las Islas Galapagos, que inspiraron a Darwin, son parte de su territorio.",
    color: "from-yellow-400 to-blue-600",
    dato: "La Tri",
  },
  {
    nombre: "Uruguay",
    emoji: "🇺🇾",
    sede: false,
    continente: "CONMEBOL",
    idioma: "Espanol",
    comida: "Asado, chivito, mate",
    // Uruguay: Jorge Drexler es de Montevideo. "Todo se transforma" tiene 123M de streams
    cancion: "Todo se transforma — Jorge Drexler",
    youtube: "https://www.youtube.com/watch?v=A9jFPWv7bwk",
    curiosidad: "Uruguay fue campeon del primer Mundial de la historia en 1930, que se celebro en su propio pais. Una nacion chica con historia enorme.",
    color: "from-sky-500 to-sky-700",
    dato: "2 titulos",
  },
  {
    nombre: "Paraguay",
    emoji: "🇵🇾",
    sede: false,
    continente: "CONMEBOL",
    idioma: "Espanol y Guarani",
    comida: "Sopa paraguaya, chipa, bori bori",
    // Paraguay: Berta Rojas es la guitarrista clasica paraguaya mas reconocida mundialmente
    cancion: "Pájaro Campana — Berta Rojas",
    youtube: "https://www.youtube.com/watch?v=3e7BmrMV6YA",
    curiosidad: "Paraguay es uno de los pocos paises del mundo con dos idiomas oficiales: el espanol y el guarani. Vuelve al Mundial despues de ausentarse en 2014, 2018 y 2022.",
    color: "from-red-600 to-sky-600",
    dato: "Los Guaranies",
  },
  {
    nombre: "Colombia",
    emoji: "🇨🇴",
    sede: false,
    continente: "CONMEBOL",
    idioma: "Espanol",
    comida: "Bandeja paisa, arepas, sancocho",
    // Colombia: Karol G es de Medellin. "Provenza" supera 1.3 mil millones de streams en Spotify
    cancion: "Provenza — KAROL G",
    youtube: "https://www.youtube.com/watch?v=zD_GXuvw4AM",
    curiosidad: "Colombia llego a los cuartos de final del Mundial 2014 y vuelve al Mundial despues de no clasificar en 2022. Es el pais de magicos como Carlos Valderrama.",
    color: "from-yellow-400 to-red-500",
    dato: "Cafeteros",
  },
  // --- UEFA ---
  {
    nombre: "Francia",
    emoji: "🇫🇷",
    sede: false,
    continente: "UEFA",
    idioma: "Frances",
    comida: "Baguette, queso, crepes",
    // Francia: Stromae es de Bruselas (Belgica), no Francia. Jul es de Marsella, Francia
    cancion: "Bande organisée — Jul ft. SCH, Naps, Alonzo, Solda, Timal, Kofs, Houari",
    youtube: "https://www.youtube.com/watch?v=fIbNQOsyYOU",
    curiosidad: "Campeon del mundo en 1998 y 2018. El equipo frances es conocido por su diversidad: muchos jugadores tienen origen africano, reflejando la riqueza cultural de Francia.",
    color: "from-blue-500 to-red-500",
    dato: "2 titulos",
  },
  {
    nombre: "Alemania",
    emoji: "🇩🇪",
    sede: false,
    continente: "UEFA",
    idioma: "Aleman",
    comida: "Salchichas, pretzel, schnitzel",
    // Alemania: Rammstein es de Berlin. "Du Hast" es su cancion mas reproducida con ~830M streams
    cancion: "Du Hast — Rammstein",
    youtube: "https://www.youtube.com/watch?v=W3q8Od5qJio",
    curiosidad: "4 titulos mundiales. Alemania es conocida por su precision y organizacion. Su filosofia de juego influyo el futbol mundial durante decadas.",
    color: "from-neutral-500 to-neutral-800",
    dato: "4 titulos",
  },
  {
    nombre: "Espana",
    emoji: "🇪🇸",
    sede: false,
    continente: "UEFA",
    idioma: "Espanol",
    comida: "Paella, tortilla espanola, jamon",
    // Espana: Rosalia es de Barcelona. "Despecha" supero 1 mil millon de streams en Spotify en 2024
    cancion: "Despechá — Rosalía",
    youtube: "https://www.youtube.com/watch?v=Ap3AEfCxtRY",
    curiosidad: "Campeon del mundo en 2010 con el 'tiki-taka' que revoluciono el futbol. Es ademas campeon de Europa 2024. Tiene muchas culturas y lenguas dentro del mismo pais.",
    color: "from-red-600 to-yellow-400",
    dato: "Euro 2024",
  },
  {
    nombre: "Portugal",
    emoji: "🇵🇹",
    sede: false,
    continente: "UEFA",
    idioma: "Portugues",
    comida: "Bacalao, pasteis de nata, caldo verde",
    // Portugal: Salvador Sobral gano Eurovision 2017, artista mas reconocido de Portugal en la decada
    cancion: "Amar pelos dois — Salvador Sobral",
    youtube: "https://www.youtube.com/watch?v=SFzPPQJBFHI",
    curiosidad: "Portugal fue un gran navegante que exploro el mundo en el siglo XV. Cristiano Ronaldo, su capitan, es el maximo goleador historico de selecciones nacionales.",
    color: "from-green-700 to-red-600",
    dato: "Os Navegadores",
  },
  {
    nombre: "Inglaterra",
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    sede: false,
    continente: "UEFA",
    idioma: "Ingles",
    comida: "Fish and chips, Sunday roast, pie",
    // Inglaterra: Ed Sheeran es de Suffolk, Inglaterra. "Shape of You" ~5 mil millones de streams
    cancion: "Shape of You — Ed Sheeran",
    youtube: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    curiosidad: "Inglaterra es la cuna del futbol moderno. El primer partido oficial se jugo ahi en 1863. Ganaron su unico Mundial en 1966, de local. Con Harry Kane como estrella.",
    color: "from-red-600 to-red-800",
    dato: "Inventores del futbol",
  },
  {
    nombre: "Paises Bajos",
    emoji: "🇳🇱",
    sede: false,
    continente: "UEFA",
    idioma: "Holandes",
    comida: "Stroopwafels, arenque, stamppot",
    // Paises Bajos: Martin Garrix es de Amstelveen. "Animals" tiene +487M streams, icono de la EDM
    cancion: "Animals — Martin Garrix",
    youtube: "https://www.youtube.com/watch?v=gCYcHz2k5x0",
    curiosidad: "Paises Bajos invento el 'futbol total', un estilo revolucionario de los anos 70 con Cruyff. Sus jugadores llevan la camiseta naranja, el color nacional.",
    color: "from-orange-500 to-orange-700",
    dato: "Oranje",
  },
  {
    nombre: "Belgica",
    emoji: "🇧🇪",
    sede: false,
    continente: "UEFA",
    idioma: "Frances, holandes, aleman",
    comida: "Waffles, mejillones, chocolate",
    // Belgica: Stromae es de Bruselas, Belgica. "Formidable" domino Europa entera en 2013-2014
    cancion: "Formidable — Stromae",
    youtube: "https://www.youtube.com/watch?v=8U9s-QUpkzw",
    curiosidad: "Belgica tiene tres idiomas oficiales en un pais chico. En 2018 quedo en el tercer puesto del Mundial, el mejor resultado de su historia. De Bruyne lidera la nueva era.",
    color: "from-yellow-400 to-red-600",
    dato: "3er puesto 2018",
  },
  {
    nombre: "Croacia",
    emoji: "🇭🇷",
    sede: false,
    continente: "UEFA",
    idioma: "Croata",
    comida: "Burek, cevapi, strukli",
    // Croacia: Baby Lasagna es de Umag, Croacia. "Rim Tim Tagi Dim" fue 2do en Eurovision 2024
    cancion: "Rim Tim Tagi Dim — Baby Lasagna",
    youtube: "https://www.youtube.com/watch?v=vEiBer5wRMI",
    curiosidad: "Croacia quedo subcampeon en 1998 y 2022. Una nacion joven que se independizo en 1991 y ya tiene dos finales mundiales. Sus camisetas a cuadros son unicas en el mundo.",
    color: "from-red-500 to-sky-600",
    dato: "Subcampeon 2022",
  },
  {
    nombre: "Suiza",
    emoji: "🇨🇭",
    sede: false,
    continente: "UEFA",
    idioma: "Aleman, frances, italiano",
    comida: "Fondue, raclette, rosti",
    // Suiza: Imagine Dragons tienen origen suizo-estadounidense. DJ Antoine es suizo confirmado
    cancion: "Welcome to St. Tropez — DJ Antoine ft. Timati",
    youtube: "https://www.youtube.com/watch?v=wvzVhtTmDnE",
    curiosidad: "Suiza tiene cuatro idiomas oficiales y es sede de muchos organismos internacionales como la Cruz Roja. Granit Xhaka es el lider de un equipo muy solido.",
    color: "from-red-600 to-red-800",
    dato: "La Nati",
  },
  {
    nombre: "Austria",
    emoji: "🇦🇹",
    sede: false,
    continente: "UEFA",
    idioma: "Aleman",
    comida: "Schnitzel, strudel, sachertorte",
    // Austria: RAF Camora es de Viena. "Palmen aus Plastik" con Bonez MC, +1 mil millon de streams
    cancion: "Palmen aus Plastik — Bonez MC & RAF Camora",
    youtube: "https://www.youtube.com/watch?v=iVJ3mszmNPg",
    curiosidad: "Austria es cuna de Mozart y Schubert. Vuelve a un Mundial por primera vez desde 1998, liderada por Ralf Rangnick que la convirtio en una de las mejores selecciones de Europa.",
    color: "from-red-600 to-red-800",
    dato: "Vuelve en 2026",
  },
  {
    nombre: "Escocia",
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    sede: false,
    continente: "UEFA",
    idioma: "Ingles, gaelico",
    comida: "Haggis, shortbread, salmon ahumado",
    // Escocia: Lewis Capaldi es de Bathgate, Escocia. "Someone You Loved" +337M streams solo en UK
    cancion: "Someone You Loved — Lewis Capaldi",
    youtube: "https://www.youtube.com/watch?v=zABLecsR5UE",
    curiosidad: "Escocia termina una espera de 28 anos para volver a un Mundial. Tiene uno de los futboles mas antiguos del mundo y paisajes de montanas espectaculares.",
    color: "from-sky-600 to-sky-800",
    dato: "Vuelve en 2026",
  },
  {
    nombre: "Noruega",
    emoji: "🇳🇴",
    sede: false,
    continente: "UEFA",
    idioma: "Noruego",
    comida: "Salmon, bacalao, lefse",
    // Noruega: Alan Walker es de Bergen, Noruega. "Faded" supera 800M de streams en Spotify
    cancion: "Faded — Alan Walker",
    youtube: "https://www.youtube.com/watch?v=60ItHLz5WEA",
    curiosidad: "Noruega vuelve a un Mundial tras 28 anos de ausencia. Erling Haaland fue el maximo goleador de las Clasificatorias europeas con 16 goles, un record historico.",
    color: "from-red-600 to-sky-700",
    dato: "Haaland 16 goles",
  },
  {
    nombre: "Turquia",
    emoji: "🇹🇷",
    sede: false,
    continente: "UEFA",
    idioma: "Turco",
    comida: "Kebab, baklava, simit",
    // Turquia: Tarkan es de Alzey pero creció en Alemania, nació de padres turcos. Semicenk es turco
    cancion: "Simarik — Tarkan",
    youtube: "https://www.youtube.com/watch?v=HEqFaEpCKiQ",
    curiosidad: "Turquia quedo en tercer lugar del Mundial 2002 y vuelve ahora despues de 24 anos. Su pais une Europa y Asia. Tiene jovenes estrellas como Arda Guler y Kenan Yildiz.",
    color: "from-red-600 to-red-800",
    dato: "Vuelve en 2026",
  },
  {
    nombre: "Suecia",
    emoji: "🇸🇪",
    sede: false,
    continente: "UEFA",
    idioma: "Sueco",
    comida: "Kottbullar, knackebrod, gravlax",
    // Suecia: Avicii es de Estocolmo. "Wake Me Up" tiene +146M streams en Suecia y +1.5B global
    cancion: "Wake Me Up — Avicii",
    youtube: "https://www.youtube.com/watch?v=IcrbM1l_BoI",
    curiosidad: "Suecia vuelve al Mundial despues de ausencia en 2022. Viktor Gyokeres fue la estrella de la clasificacion con cuatro goles en los play-offs. Graham Potter dirige al equipo.",
    color: "from-yellow-400 to-sky-600",
    dato: "Vuelve en 2026",
  },
  {
    nombre: "Bosnia y Herzegovina",
    emoji: "🇧🇦",
    sede: false,
    continente: "UEFA",
    idioma: "Bosnio, serbio, croata",
    comida: "Cevapi, burek, begova corba",
    // Bosnia: Dino Merlin es de Sarajevo, el artista bosnio mas influyente de las ultimas decadas
    cancion: "Nije Do Mene — Dino Merlin",
    youtube: "https://www.youtube.com/watch?v=hq9L4Fek5cw",
    curiosidad: "Bosnia y Herzegovina clasifica a su segundo Mundial de la historia. Edin Dzeko, su capitan y estrella historica, lleva al equipo a su segunda participacion en el torneo.",
    color: "from-sky-500 to-yellow-400",
    dato: "2do Mundial",
  },
  {
    nombre: "Chequia",
    emoji: "🇨🇿",
    sede: false,
    continente: "UEFA",
    idioma: "Checo",
    comida: "Svickova, knedliky, goulash",
    // Chequia: Karel Gott es de Plzen, el artista checo mas escuchado de la historia con 85M vistas
    cancion: "Kdepak ty ptacku hnizdo mas — Karel Gott",
    youtube: "https://www.youtube.com/watch?v=l6kqu3kmR_s",
    curiosidad: "Chequia regresa a un Mundial por primera vez desde 2006. Patrik Schick, delantero de Bayer Leverkusen, es la estrella del equipo que vuelve al maximo escenario.",
    color: "from-red-600 to-sky-600",
    dato: "Vuelve en 2026",
  },
  // --- CAF ---
  {
    nombre: "Marruecos",
    emoji: "🇲🇦",
    sede: false,
    continente: "CAF",
    idioma: "Arabe y Frances",
    comida: "Cous cous, tagine, pastilla",
    // Marruecos: Saad Lamjarred es de Casablanca. "LM3ALLEM" supero 1 mil millon de vistas en YouTube
    cancion: "LM3ALLEM — Saad Lamjarred",
    youtube: "https://www.youtube.com/watch?v=_Fwf45pIAtM",
    curiosidad: "En Qatar 2022, Marruecos llego a las semifinales: el mejor resultado de Africa en la historia de los Mundiales. Un hito que inspiro a todo el continente africano.",
    color: "from-red-600 to-green-700",
    dato: "4to puesto 2022",
  },
  {
    nombre: "Senegal",
    emoji: "🇸🇳",
    sede: false,
    continente: "CAF",
    idioma: "Frances",
    comida: "Thieboudienne, yassa, mafe",
    // Senegal: Wally Seck es de Dakar, artista mas streamado en Senegal en 2022 segun YouTube
    cancion: "Dieureudieuf — Wally Seck",
    youtube: "https://www.youtube.com/watch?v=FUAW8kM2hdc",
    curiosidad: "Senegal es el campeon de la Copa Africa 2022. Sadio Mane es su jugador mas famoso y uno de los mejores del mundo. Los Leones de Teranga son una potencia africana.",
    color: "from-green-600 to-yellow-400",
    dato: "Leones de Teranga",
  },
  {
    nombre: "Costa de Marfil",
    emoji: "🇨🇮",
    sede: false,
    continente: "CAF",
    idioma: "Frances",
    comida: "Attieke, kedjenou, placali",
    // Costa de Marfil: Magic System es de Abidjan. "Magic in the Air" tiene 253M streams Spotify
    cancion: "Magic in the Air — Magic System ft. Chawki",
    youtube: "https://www.youtube.com/watch?v=BAkqJT_sMKQ",
    curiosidad: "Costa de Marfil tiene uno de los mejores jugadores africanos de la historia: Didier Drogba. Vuelve al Mundial por primera vez desde 2014 siendo la gran potencia del continente.",
    color: "from-orange-500 to-green-600",
    dato: "Elefantes",
  },
  {
    nombre: "Ghana",
    emoji: "🇬🇭",
    sede: false,
    continente: "CAF",
    idioma: "Ingles",
    comida: "Fufu, jollof rice, kelewele",
    // Ghana: Black Sherif es de Konongo, Ghana. Artista mas streamado en Ghana en 2023 y 2024
    cancion: "Kwaku The Traveller — Black Sherif",
    youtube: "https://www.youtube.com/watch?v=4an-xq4Bp5Y",
    curiosidad: "Ghana estuvo a punto de llegar a las semifinales en 2010, eliminada en cuartos por un penal de Suarez. Las Estrellas Negras son las esperanzas de Africa en 2026.",
    color: "from-yellow-400 to-red-600",
    dato: "Estrellas Negras",
  },
  {
    nombre: "Egipto",
    emoji: "🇪🇬",
    sede: false,
    continente: "CAF",
    idioma: "Arabe",
    comida: "Kushari, ful medames, ta'ameya",
    // Egipto: Amr Diab es de Port Said, Egipto. "Tamally Maak" tiene ~60M vistas anuales en YouTube
    cancion: "Tamally Maak — Amr Diab",
    youtube: "https://www.youtube.com/watch?v=EgmXTmj62ic",
    curiosidad: "Egipto es una de las civilizaciones mas antiguas del mundo, con 5000 anos de historia. Mohamed Salah, uno de los mejores jugadores del mundo, lidera a Los Faraones.",
    color: "from-red-600 to-yellow-400",
    dato: "Los Faraones",
  },
  {
    nombre: "Argelia",
    emoji: "🇩🇿",
    sede: false,
    continente: "CAF",
    idioma: "Arabe y Amazigh",
    comida: "Couscous, chakhchoukha, mechoui",
    // Argelia: Soolking es de Bab El Oued, Argel. "Liberté" tiene ~32M vistas anuales en YouTube
    cancion: "Liberté — Soolking ft. Ouled El Bahdja",
    youtube: "https://www.youtube.com/watch?v=CTAH-AqYm48",
    curiosidad: "Argelia vuelve al Mundial despues de ausencia en 2022. Campeon de Africa en 2019, tiene una de las hinchadas mas apasionadas del continente.",
    color: "from-green-600 to-green-800",
    dato: "Fenix del Desierto",
  },
  {
    nombre: "Tunez",
    emoji: "🇹🇳",
    sede: false,
    continente: "CAF",
    idioma: "Arabe",
    comida: "Brik, couscous, lablabi",
    // Tunez: Saber El Roubai es de Sfax, Tunez. Artista mas escuchado de Tunez en la decada
    cancion: "Loulou — Saber El Roubai",
    youtube: "https://www.youtube.com/watch?v=tFlX7p4IG9Q",
    curiosidad: "Tunez es uno de los paises africanos con mas participaciones mundialistas. Tiene una de las historias mas ricas de Africa del Norte y el Mediterraneo.",
    color: "from-red-600 to-red-800",
    dato: "Aguilas de Cartago",
  },
  {
    nombre: "Sudafrica",
    emoji: "🇿🇦",
    sede: false,
    continente: "CAF",
    idioma: "11 idiomas oficiales",
    comida: "Braai, bunny chow, bobotie",
    // Sudafrica: Master KG es de Limpopo. "Jerusalema" llego a 1.7 mil millones de reproducciones
    cancion: "Jerusalema — Master KG ft. Nomcebo Zikode",
    youtube: "https://www.youtube.com/watch?v=fCZVL_8D048",
    curiosidad: "Sudafrica fue sede del Mundial 2010, el primero celebrado en Africa. Vuelve al torneo por primera vez desde aquel ano. La vuvuzela, el instrumento de sus hinchas, es unica en el mundo.",
    color: "from-green-600 to-yellow-400",
    dato: "Bafana Bafana",
  },
  {
    nombre: "Cabo Verde",
    emoji: "🇨🇻",
    sede: false,
    continente: "CAF",
    idioma: "Portugues y Kriolu",
    comida: "Cachupa, lagosta, xerem",
    // Cabo Verde: Djodje es de Santiago, Cabo Verde. Artista de kizomba mas popular de la isla
    cancion: "Tempo Sabi — Djodje",
    youtube: "https://www.youtube.com/watch?v=gRJnTGaXb4k",
    curiosidad: "Cabo Verde debuta en su primer Mundial. Son la segunda nacion mas pequena por poblacion en clasificar a un Mundial en la historia. Un archipielago con una historia musical increible.",
    color: "from-sky-500 to-yellow-400",
    dato: "Debut historico",
  },
  {
    nombre: "Republica del Congo",
    emoji: "🇨🇩",
    sede: false,
    continente: "CAF",
    idioma: "Frances, lingala, swahili",
    comida: "Fufu, saka-saka, liboke",
    // RD Congo: Fally Ipupa es de Kinshasa. "Nakombela" tiene millones de vistas, rumba patrimonio UNESCO
    cancion: "Nakombela — Fally Ipupa",
    youtube: "https://www.youtube.com/watch?v=wJkebMcfVxg",
    curiosidad: "La Republica Democratica del Congo vuelve al Mundial despues de 52 anos de ausencia. La ultima vez compitio en 1974 como Zaire. La Rumba congolena es Patrimonio de la UNESCO.",
    color: "from-sky-500 to-red-600",
    dato: "Vuelve en 2026",
  },
  // --- AFC ---
  {
    nombre: "Japon",
    emoji: "🇯🇵",
    sede: false,
    continente: "AFC",
    idioma: "Japones",
    comida: "Sushi, ramen, tempura",
    // Japon: Creepy Nuts son de Osaka/Tokio. "Bling-Bang-Bang-Born" fue #1 en Spotify Japon 125 dias
    cancion: "Bling-Bang-Bang-Born — Creepy Nuts",
    youtube: "https://www.youtube.com/watch?v=SX_ViT4Ra7k",
    curiosidad: "Japon sorprende en cada Mundial con su disciplina y respeto. Los hinchas son famosos por limpiar los estadios despues de los partidos. Un ejemplo de fair play para el mundo.",
    color: "from-red-500 to-red-700",
    dato: "Fair play mundial",
  },
  {
    nombre: "Iran",
    emoji: "🇮🇷",
    sede: false,
    continente: "AFC",
    idioma: "Persa (Farsi)",
    comida: "Ghormeh sabzi, chelo kabab, ash reshteh",
    // Iran: Mohsen Yeganeh es de Teheran. "Betoool Bedoom" tiene 264M vistas en YouTube, record persa
    cancion: "Betoool Bedoom — Mohsen Yeganeh",
    youtube: "https://www.youtube.com/watch?v=7xRv2GzpXXQ",
    curiosidad: "Iran es una de las civilizaciones mas antiguas del mundo, con 7000 anos de historia. Es la seleccion asiatica con mas participaciones mundialistas.",
    color: "from-green-600 to-red-500",
    dato: "Team Melli",
  },
  {
    nombre: "Corea del Sur",
    emoji: "🇰🇷",
    sede: false,
    continente: "AFC",
    idioma: "Coreano",
    comida: "Kimchi, bibimbap, bulgogi",
    // Corea del Sur: BTS son de Seoul. "Dynamite" fue #1 en Billboard Hot 100, primer grupo coreano
    cancion: "Dynamite — BTS",
    youtube: "https://www.youtube.com/watch?v=gdZLi9oWNZg",
    curiosidad: "Corea del Sur llego a las semifinales del Mundial 2002. El K-pop y los dramas coreanos son fenomeno cultural mundial. Son un equipo muy solido y veloz.",
    color: "from-red-500 to-sky-600",
    dato: "Semifinal 2002",
  },
  {
    nombre: "Australia",
    emoji: "🇦🇺",
    sede: false,
    continente: "AFC",
    idioma: "Ingles",
    comida: "Vegemite, meat pie, pavlova",
    // Australia: The Kid LAROI es de Sydney. "STAY" con Justin Bieber tiene +3.89 mil millones streams
    cancion: "STAY — The Kid LAROI ft. Justin Bieber",
    youtube: "https://www.youtube.com/watch?v=kTJczUoc26U",
    curiosidad: "Australia llego a cuartos de final en el Mundial 2006. Es un pais inmenso conocido por sus marsupiales, la Gran Barrera de Coral y sus paisajes unicos.",
    color: "from-yellow-400 to-green-600",
    dato: "Socceroos",
  },
  {
    nombre: "Arabia Saudita",
    emoji: "🇸🇦",
    sede: false,
    continente: "AFC",
    idioma: "Arabe",
    comida: "Kabsa, jareesh, mandi",
    // Arabia Saudita: Rashed Al-Majed es de Riyadh, el artista khaleeji mas escuchado de la decada
    cancion: "Elli Lega Ahbabah — Rashed Al-Majed",
    youtube: "https://www.youtube.com/watch?v=42O51bcJyq0",
    curiosidad: "Arabia Saudita dio la sorpresa del siglo en Qatar 2022 ganandole a Argentina por 2-1. Actualmente muchas estrellas mundiales van a jugar a su liga.",
    color: "from-green-700 to-green-900",
    dato: "Sorpresa 2022",
  },
  {
    nombre: "Uzbekistan",
    emoji: "🇺🇿",
    sede: false,
    continente: "AFC",
    idioma: "Uzbeko",
    comida: "Plov, samsa, lagman",
    // Uzbekistan: Yulduz Usmanova es de Margilan, Uzbekistan. "Seni sevdim" 100M vistas en YouTube
    cancion: "Seni sevdim — Yulduz Usmanova",
    youtube: "https://www.youtube.com/watch?v=2H5JU2xOZjc",
    curiosidad: "Uzbekistan debuta en su primer Mundial. Es un pais de la Ruta de la Seda con ciudades milenarias como Samarcanda. Es el primer pais de Asia Central en clasificar.",
    color: "from-sky-500 to-green-600",
    dato: "Debut historico",
  },
  {
    nombre: "Jordania",
    emoji: "🇯🇴",
    sede: false,
    continente: "AFC",
    idioma: "Arabe",
    comida: "Mansaf, falafel, maqluba",
    // Jordania: Omar Al Abdallat es de Irbid, el cantante folklorico mas popular de Jordania
    cancion: "Ya Watan — Omar Al Abdallat",
    youtube: "https://www.youtube.com/watch?v=DjrVGOihDGs",
    curiosidad: "Jordania debuta en su primer Mundial de la historia. El pais alberga las ruinas de Petra, una de las Maravillas del Mundo, y el Mar Muerto.",
    color: "from-red-700 to-green-700",
    dato: "Debut historico",
  },
  {
    nombre: "Qatar",
    emoji: "🇶🇦",
    sede: false,
    continente: "AFC",
    idioma: "Arabe",
    comida: "Machboos, harees, luqaimat",
    // Qatar: Fahad Al Kubaisi es de Doha, interpreto el himno inaugural del Mundial 2022
    cancion: "Ahlam — Fahad Al Kubaisi",
    youtube: "https://www.youtube.com/watch?v=c_ITXMnHkuA",
    curiosidad: "Qatar fue sede del Mundial 2022 y ahora clasifica por primera vez a traves del proceso regular. Es el pais con mas gas natural del mundo y tiene impresionantes rascacielos.",
    color: "from-red-800 to-red-900",
    dato: "Ex sede 2022",
  },
  {
    nombre: "Irak",
    emoji: "🇮🇶",
    sede: false,
    continente: "AFC",
    idioma: "Arabe y Kurdo",
    comida: "Masgouf, dolma, biryani iraqui",
    // Irak: Kadim Al Sahir es de Mosul, el tenor arabe mas reconocido del mundo en la decada
    cancion: "Ya Imra'a Min Ramad — Kadim Al Sahir",
    youtube: "https://www.youtube.com/watch?v=GXkb30SaPJA",
    curiosidad: "Irak regresa al Mundial despues de 40 anos de ausencia. Mesopotamia, la tierra entre el Tigris y el Eufrates, es considerada la cuna de la civilizacion humana.",
    color: "from-red-600 to-green-700",
    dato: "Vuelve en 2026",
  },
  // --- OFC ---
  {
    nombre: "Nueva Zelanda",
    emoji: "🇳🇿",
    sede: false,
    continente: "OFC",
    idioma: "Ingles y Maori",
    comida: "Hangi, pavlova, fish and chips",
    cancion: "Royals — Lorde",
    youtube: "https://www.youtube.com/watch?v=nlcIKh6sBtc",
    curiosidad: "Nueva Zelanda es conocida por los All Blacks de rugby y los paisajes de El Senor de los Anillos. Es la seleccion con menor ranking FIFA en clasificar al Mundial 2026.",
    color: "from-sky-600 to-sky-800",
    dato: "All Whites",
  },
]

const CONTINENTES = ["Todos", "CONCACAF", "CONMEBOL", "UEFA", "CAF", "AFC", "OFC"]

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
              Los 48 clasificados al Mundial 2026, agrupados por confederacion. Toca cada bandera para descubrir su cultura, comida, musica y curiosidades.
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
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Cancion mas escuchada</p>
                    <p className="font-semibold text-foreground text-base leading-snug">{paisActual.cancion}</p>
                    <a
                      href={paisActual.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-red-700 active:scale-95"
                      aria-label={`Escuchar ${paisActual.cancion} en YouTube`}
                    >
                      <ExternalLink size={14} />
                      Escuchar en YouTube
                    </a>
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
