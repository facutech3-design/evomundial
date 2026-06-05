"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Globe, Music, Utensils, Languages, X, ChevronLeft, ChevronRight, MapPin, ExternalLink } from "lucide-react"

const PAISES = [
  {
    nombre: "Estados Unidos",
    emoji: "🇺🇸",
    sede: true,
    continente: "CONCACAF",
    idioma: "Ingles",
    comida: "Hamburguesas, hot dogs, BBQ",
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
    cancion: "Solo con Verte — Banda MS de Sergio Lizárraga",
    youtube: "https://www.youtube.com/watch?v=GOs96LMUCDA",
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
    cancion: "God's Plan — Drake",
    youtube: "https://www.youtube.com/watch?v=xpVfcZ0ZcFM",
    curiosidad: "Sede del Mundial 2026. Canada es conocido por su naturaleza increible, la aurora boreal y ser uno de los paises mas multiculturales del mundo.",
    color: "from-red-600 to-red-800",
    dato: "Sede 2026",
  },
  {
    nombre: "Panama",
    emoji: "🇵🇦",
    sede: false,
    continente: "CONCACAF",
    idioma: "Espanol",
    comida: "Sancocho, arroz con pollo, ceviche",
    cancion: "Otro Trago — Sech ft. Darell",
    youtube: "https://www.youtube.com/watch?v=t_qn-f7XfJo",
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
    cancion: "Gone Till November — Wyclef Jean",
    youtube: "https://www.youtube.com/watch?v=kI6MWZrl8v8",
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
    cancion: "Dushi Bida — Jeon ft. Ataniro",
    youtube: "https://www.youtube.com/watch?v=XRC_E6N-jq0",
    curiosidad: "Curacao debuta en su primer Mundial con una poblacion de solo 156 mil habitantes. Es la nacion mas pequena por poblacion en clasificar a un Mundial en toda la historia.",
    color: "from-sky-500 to-yellow-400",
    dato: "Debut historico",
  },
  {
    nombre: "Argentina",
    emoji: "🇦🇷",
    sede: false,
    continente: "CONMEBOL",
    idioma: "Espanol",
    comida: "Asado, empanadas, mate",
    cancion: "Siempre es Hoy — Fito Páez",
    youtube: "https://www.youtube.com/watch?v=9cRE69V9r1o",
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
    cancion: "Até Que Durou — Péricles",
    youtube: "https://www.youtube.com/watch?v=T3Y6RRSDm4o",
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
    cancion: "Zapateando Juyayay — JAYAC",
    youtube: "https://www.youtube.com/watch?v=347npLytra4",
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
    cancion: "Mandolín — Gustavo Pena (El Príncipe)",
    youtube: "https://www.youtube.com/watch?v=6dcz2vrcqi4",
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
    cancion: "Pájaro Campana — Berta Rojas",
    youtube: "https://www.youtube.com/watch?v=NYOU4EcVt5k",
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
    cancion: "Provenza — KAROL G",
    youtube: "https://www.youtube.com/watch?v=ca48oMV59LU",
    curiosidad: "Colombia llego a los cuartos de final del Mundial 2014 y vuelve al Mundial despues de no clasificar en 2022. Es el pais de magicos como Carlos Valderrama.",
    color: "from-yellow-400 to-red-500",
    dato: "Cafeteros",
  },
  {
    nombre: "Francia",
    emoji: "🇫🇷",
    sede: false,
    continente: "UEFA",
    idioma: "Frances",
    comida: "Baguette, queso, crepes",
    cancion: "Je veux — ZAZ",
    youtube: "https://www.youtube.com/watch?v=0TFNGRYMz1U",
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
    cancion: "Viva la libertad — Pedro Pastor ft. Suso Sudón",
    youtube: "https://www.youtube.com/watch?v=Aa394I6bq78",
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
    cancion: "Amar pelos dois — Salvador Sobral",
    youtube: "https://www.youtube.com/watch?v=ymFVfzu-2mw",
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
    cancion: "Formidable — Stromae",
    youtube: "https://www.youtube.com/watch?v=S_xH7noaqTA",
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
    cancion: "Rim Tim Tagi Dim — Baby Lasagna",
    youtube: "https://www.youtube.com/watch?v=kmg8EAD-Kjw",
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
    cancion: "Welcome to St. Tropez — DJ Antoine ft. Timati",
    youtube: "https://www.youtube.com/watch?v=Kh2FRFhS7QY",
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
    cancion: "Palmen aus Plastik — Bonez MC & RAF Camora",
    youtube: "https://www.youtube.com/watch?v=7_tWN9Iei7Y",
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
    cancion: "Someone You Loved — Lewis Capaldi",
    youtube: "https://www.youtube.com/watch?v=bCuhuePlP8o",
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
    cancion: "Simarik — Tarkan",
    youtube: "https://www.youtube.com/watch?v=cpp69ghR1IM",
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
    cancion: "Jedan dan, jedna noć — Dino Merlin",
    youtube: "https://www.youtube.com/watch?v=qRtYxFktzjw",
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
    cancion: "Srdce nehasnou — Karel Gott & Charlotte Ella Gottová",
    youtube: "https://www.youtube.com/watch?v=BibNLUQG_-4",
    curiosidad: "Chequia regresa a un Mundial por primera vez desde 2006. Patrik Schick, delantero de Bayer Leverkusen, es la estrella del equipo que vuelve al maximo escenario.",
    color: "from-red-600 to-sky-600",
    dato: "Vuelve en 2026",
  },
  {
    nombre: "Marruecos",
    emoji: "🇲🇦",
    sede: false,
    continente: "CAF",
    idioma: "Arabe y Frances",
    comida: "Cous cous, tagine, pastilla",
    cancion: "LM3ALLEM — Saad Lamjarred",
    youtube: "https://www.youtube.com/watch?v=_Fwf45pIAtM",
    curiosidad: "En Qatar 2022, Marruecos llego a las semifinales: el mejor resultado de Africa en la historia de los Mundiales. Un hito que inspiro a todo el continente africano.",
    color: "from-red-600 to-green-700",
    dato: "4to puesto 2022",
  },
  {
    nombre: "Senegal",
    emoji: "����🇳",
    sede: false,
    continente: "CAF",
    idioma: "Frances",
    comida: "Thieboudienne, yassa, mafe",
    cancion: "Xarma — Wally B. Seck",
    youtube: "https://www.youtube.com/watch?v=ZoWZ4xcn2Y4",
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
    cancion: "Kwaku The Traveller — Black Sherif",
    youtube: "https://www.youtube.com/watch?v=GIDiI5kyBDQ",
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
    cancion: "Sidi Mansour — Saber Rebaï",
    youtube: "https://www.youtube.com/watch?v=ztoGZFDi6t4",
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
    cancion: "Tempo Sabi — Djodje",
    youtube: "https://www.youtube.com/watch?v=SqcCVHfpNoo",
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
    cancion: "Eloko Oyo — Fally Ipupa",
    youtube: "https://www.youtube.com/watch?v=T4KNVT2w0mU",
    curiosidad: "La Republica Democratica del Congo vuelve al Mundial despues de 52 anos de ausencia. La ultima vez compitio en 1974 como Zaire. La Rumba congolena es Patrimonio de la UNESCO.",
    color: "from-sky-500 to-red-600",
    dato: "Vuelve en 2026",
  },
  {
    nombre: "Japon",
    emoji: "🇯🇵",
    sede: false,
    continente: "AFC",
    idioma: "Japones",
    comida: "Sushi, ramen, tempura",
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
    cancion: "Behet Ghol Midam — Mohsen Yeganeh",
    youtube: "https://www.youtube.com/watch?v=cDNDVtoJhik",
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
    cancion: "Muhabbat — Yulduz Usmonova",
    youtube: "https://www.youtube.com/watch?v=91akYiTpVY0",
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
    cancion: "Najahna — Omar AlAbdallat",
    youtube: "https://www.youtube.com/watch?v=Cujkkk_Um3A",
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
    cancion: "Bi El Milli — Fahad Al Kubaisi",
    youtube: "https://www.youtube.com/watch?v=2MNY4_bhe6k",
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
    cancion: "Eid Al Ashaq — Kadim Al Sahir",
    youtube: "https://www.youtube.com/watch?v=P-xzKghwfo4",
    curiosidad: "Irak regresa al Mundial despues de 40 anos de ausencia. Mesopotamia, la tierra entre el Tigris y el Eufrates, es considerada la cuna de la civilizacion humana.",
    color: "from-red-600 to-green-700",
    dato: "Vuelve en 2026",
  },
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

        {/* Imagen principal */}
        <div className="mb-10 rounded-3xl overflow-hidden h-80 md:h-96 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80"
            alt="Mapa del mundo con banderas de países"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
          <div className="sr-only">
            Imagen de un mapa del mundo mostrando banderas de diferentes países.
          </div>
        </div>

        {/* Header */}
        <div className="mb-10">
          <p className="text-9xl leading-none mb-4" role="img" aria-label="Ícono de Países y Culturas">🌍</p>
          <h2 className="text-5xl font-black text-foreground md:text-6xl mb-3">Países y Culturas</h2>
          <p className="text-accessible-lg text-foreground/85 text-pretty leading-relaxed font-semibold max-w-3xl">
            Los 48 clasificados al Mundial 2026. Toca cada país para descubrir su cultura, comida, música y curiosidades.
          </p>
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
                className="mb-2 text-8xl leading-none"
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
            {/* Container con dos paneles */}
            <div className="flex gap-8 items-center w-full max-w-5xl">
              {/* Panel izquierdo - Contenido */}
              <div
                className="relative flex-1 rounded-3xl bg-card shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header con gradiente */}
                <div className={`bg-gradient-to-br ${paisActual.color} p-8 text-white`}>
                  <div>
                    <h3 className="text-4xl font-black">{paisActual.nombre}</h3>
                  </div>
                  <div className="flex flex-col items-start gap-2 mt-4">
                    {paisActual.sede && (
                      <span className="rounded-full bg-white/25 px-4 py-2 text-base font-bold">
                        Sede 2026
                      </span>
                    )}
                    <span className="rounded-full bg-white/25 px-4 py-2 text-base font-bold">
                      {paisActual.dato}
                    </span>
                  </div>
                  <div className="mt-4 text-base text-white/50 font-semibold">
                    {indiceModal + 1} de {paisesFiltrados.length}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 rounded-xl bg-primary/10 p-4">
                      <Languages size={28} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold uppercase tracking-widest text-primary underline underline-offset-3">Idioma</p>
                      <p className="font-semibold text-foreground text-2xl mt-1">{paisActual.idioma}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 rounded-xl bg-success/10 p-4">
                      <Utensils size={28} className="text-success" />
                    </div>
                    <div>
                      <p className="text-lg font-bold uppercase tracking-widest text-success underline underline-offset-3">Comidas tipicas</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                        {paisActual.comida.split(",").map((plato) => (
                          <a
                            key={plato.trim()}
                            href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(plato.trim())}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-semibold text-foreground text-xl hover:text-primary underline underline-offset-2 transition-colors"
                            aria-label={`Ver imagen de ${plato.trim()} en Google`}
                          >
                            {plato.trim()}
                            <ExternalLink size={16} className="shrink-0 opacity-40" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 rounded-xl bg-creative/10 p-4">
                      <Music size={28} className="text-creative" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-bold uppercase tracking-widest text-creative underline underline-offset-3">Cancion mas escuchada</p>
                      <p className="font-semibold text-foreground text-xl leading-snug mt-1">{paisActual.cancion}</p>
                      <a
                        href={paisActual.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-lg font-bold text-white transition-all hover:bg-red-700 active:scale-95"
                        aria-label={`Escuchar ${paisActual.cancion} en YouTube`}
                      >
                        <ExternalLink size={18} />
                        Escuchar en YouTube
                      </a>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-muted p-6">
                    <p className="text-lg font-bold uppercase tracking-widest text-muted-foreground underline underline-offset-3 mb-3">
                      Dato interesante
                    </p>
                    <p className="text-lg leading-relaxed text-foreground">{paisActual.curiosidad}</p>
                  </div>
                </div>

                {/* Navegacion */}
                <div className="flex items-center justify-between gap-3 px-8 pb-8">
                  <button
                    onClick={anterior}
                    disabled={indiceModal === 0}
                    className="flex items-center gap-2 rounded-2xl bg-secondary px-5 py-3 text-lg font-bold text-secondary-foreground transition-all hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
                    aria-label="Pais anterior"
                  >
                    <ChevronLeft size={22} />
                    Anterior
                  </button>
                  <button
                    onClick={cerrar}
                    className="rounded-full bg-muted p-3 text-muted-foreground hover:bg-foreground hover:text-primary-foreground transition-all"
                    aria-label="Cerrar"
                  >
                    <X size={24} />
                  </button>
                  <button
                    onClick={siguiente}
                    disabled={indiceModal === paisesFiltrados.length - 1}
                    className="flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-lg font-bold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
                    aria-label="Pais siguiente"
                  >
                    Siguiente
                    <ChevronRight size={22} />
                  </button>
                </div>
              </div>

              {/* Panel derecho - Bandera prominente */}
              <div className="hidden lg:flex flex-col items-center justify-center max-w-xs">
                <div className="text-8xl leading-none drop-shadow-lg overflow-hidden" role="img" aria-label={`Bandera de ${paisActual.nombre}`}>
                  {paisActual.emoji}
                </div>
                <p className="text-2xl font-black text-white mt-6 text-center">{paisActual.nombre}</p>
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
              { n: "1", txt: "Elegimos un pais del mundo", emoji: "🌍" },
              { n: "2", txt: "Investigamos y dibujamos su bandera", emoji: "🤔" },
              { n: "3", txt: "Presentamos al grupo: somos sus embajadores", emoji: "👨‍🎓" },
            ].map((paso) => (
              <div key={paso.n} className="rounded-2xl bg-white/15 p-5">
                <div className="text-6xl mb-3">{paso.emoji}</div>
                <div className="text-3xl font-black mb-2">{paso.n}</div>
                <p className="text-base font-semibold leading-relaxed">{paso.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
