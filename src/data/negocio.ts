// Datos reales del negocio — confirmados por Cristian (01/07/2026).
// Reemplazar/actualizar acá cuando cambien precios, horarios o dirección.

export const NEGOCIO = {
  nombre: "El Quincho de Bere",
  tagline: "Tu lugar de descanso y diversión",
  direccion: "San Martín 9620, Mar del Plata",
  capacidad: 40,
  whatsappNumero: "5492235767784",
  whatsappDisplay: "223 576-7784",
  instagram: "https://www.instagram.com/quinchodebere/",
  tiktok: "https://www.tiktok.com/@quincho.bere",
  facebook: "https://www.facebook.com/people/Quincho-de-Bere/61568435588259/",
  // Cerrado por reformas hasta esta fecha (inclusive) — actualizar/quitar cuando reabra.
  reaperturaFecha: "2026-09-15",
};

// Conexión de solo lectura a la base de quincho-bere (app de gestión) para
// mostrar disponibilidad real. Usa la clave pública (anon) — el acceso está
// limitado por la función get_disponibilidad(), que solo devuelve fecha/turno/estado.
export const DISPONIBILIDAD = {
  supabaseUrl: "https://pmohyepcqfvkwijmljee.supabase.co",
  supabaseAnonKey: "sb_publishable_syUaThUY-PaE_8fNcR4e6w_azyDZryB",
  orgId: "0a4a642c-b3d1-4ce3-b325-bb40b188567b",
};

export function waLink(mensaje: string) {
  return `https://wa.me/${NEGOCIO.whatsappNumero}?text=${encodeURIComponent(mensaje)}`;
}

export const TURNOS = [
  { nombre: "Turno Día", horario: "11 a 17 hs", tipo: "dia" },
  { nombre: "Turno Noche", horario: "19 a 00 hs", tipo: "noche" },
  { nombre: "Día Completo", horario: "11 a 23 hs", tipo: "completo" },
];

export const INCLUYE = [
  { icon: "🏊", titulo: "Pileta 8x3m", desc: "Con solarium, deck y ducha exterior" },
  { icon: "🏠", titulo: "Quincho cerrado", desc: "Parrilla, mesada y cocina industrial" },
  { icon: "🍽️", titulo: "Vajilla completa", desc: "Pava eléctrica y cafetera de filtro" },
  { icon: "❄️", titulo: "Heladera con freezer", desc: "Espacio de sobra para bebidas y comida" },
  { icon: "📺", titulo: "Parlante, TV y WiFi", desc: "Para ambientar el evento" },
  { icon: "♿", titulo: "Baño adaptado", desc: "Con ducha, agua caliente y cambiador de pañales" },
  { icon: "🌳", titulo: "Pérgola", desc: "Sillones y hamacas paraguayas" },
  { icon: "🏓", titulo: "Ping pong y metegol", desc: "Más jenga gigante" },
  { icon: "🔥", titulo: "Fogón recreativo", desc: "Con asador, asientos y mesada" },
  { icon: "🌿", titulo: "Amplio parque", desc: "Espacio verde con juegos infantiles" },
  { icon: "⚽", titulo: "Tenis, fútbol y tejo", desc: "Actividades para todas las edades" },
  { icon: "🎥", titulo: "Cámaras de seguridad", desc: "Tranquilidad durante todo el evento" },
];

export const EXTRAS = [
  {
    icon: "🏰",
    titulo: "Inflable castillo con tobogán",
    desc: "Lo armamos antes de que llegues y lo retiramos al finalizar.",
    precio: "Consultar",
    img: "/img/extras/castillo-inflable.jpg",
  },
  {
    icon: "🍬",
    titulo: "Mesas candy",
    desc: "Mesas candy, con fondo de foto y neón opcional (\"Feliz Cumple\" o \"Celebremos\", según disponibilidad) y mini deco. No incluye golosinas ni vajilla, es solo ambientación.",
    precio: "Consultar",
    img: "/img/celebremos.jpeg",
  },
  {
    icon: "⛺",
    titulo: "Gazebo",
    desc: "Solo, con juego de living, o con 2 juegos de living.",
    precio: "Consultar",
    img: "/img/extras/gazebo.jpg",
  },
  {
    icon: "🍺",
    titulo: "Barra de cerveza tirada",
    desc: "Barra iluminada, canilla de cerveza tirada y limonada de cortesía. Cerveza se vende aparte.",
    precio: "Consultar",
    img: "/img/extras/barra-cerveza.jpg",
  },
  {
    icon: "🥩",
    titulo: "Parrillero",
    desc: "Solo, con camarera, o servicio de limpieza aparte.",
    precio: "Consultar",
    img: "/img/extras/parrillero.jpg",
  },
];

export const TIPOS_EVENTO = [
  { icon: "🎂", nombre: "Cumpleaños", img: "/img/galeria/eventos-cumple.jpg" },
  { icon: "👨‍👩‍👧‍👦", nombre: "Reuniones familiares", img: "/img/eventos/reuniones-familiares.jpg" },
  { icon: "💼", nombre: "Eventos empresariales" },
  { icon: "✝️", nombre: "Bautismos" },
  { icon: "🎭", nombre: "Fiestas temáticas", img: "/img/eventos/fiesta-disfraz.jpg" },
  { icon: "🎉", nombre: "Despedidas de año", img: "/img/eventos/despedida-trabajo.jpg" },
  { icon: "🍻", nombre: "Entre amigos", img: "/img/eventos/entre-amigos.jpg" },
];

export const SECTORES = [
  {
    id: "quincho",
    icon: "🏠",
    nombre: "Quincho interno",
    frase: "Un espacio cerrado y equipado para que el mal clima nunca sea un problema.",
    imgs: [
      "/img/sectores/sector-quincho-comedor.jpg",
      "/img/galeria/quincho-interior.jpg",
      "/img/sectores/sector-quincho-cocina.jpg",
      "/img/galeria/quincho-parrilla-cocina.jpg",
      "/img/sectores/sector-quincho-living.jpg",
    ],
  },
  {
    id: "pergola",
    icon: "🌳",
    nombre: "Pérgola",
    frase: "Sillones y hamacas paraguayas, a la sombra, junto a la pileta.",
    imgs: [
      "/img/sectores/sector-pergola-aerea.jpg",
      "/img/galeria/nocturna-pergola.jpg",
    ],
  },
  {
    id: "deck",
    icon: "☀️",
    nombre: "Deck",
    frase: "Deck de madera para tomar sol o compartir una mesa al aire libre.",
    imgs: [
      "/img/sectores/sector-deck-aerea.jpg",
      "/img/galeria/pileta-deck.jpg",
    ],
  },
  {
    id: "pileta",
    icon: "🏊",
    nombre: "Pileta",
    frase: "8x3 metros para refrescarse todo el evento.",
    imgs: [
      "/img/galeria/pileta-principal.jpg",
      "/img/galeria/pileta-deck.jpg",
      "/img/galeria/pileta-amigas.jpg",
      "/img/galeria/cumple-pileta.jpg",
    ],
  },
  {
    id: "fogon",
    icon: "🔥",
    nombre: "Fogón",
    frase: "Asador, asientos de piedra y mesada — ideal para la previa y la sobremesa.",
    imgs: [
      "/img/sectores/sector-fogon-nocturno.jpg",
      "/img/galeria/nocturna-fogon.jpg",
      "/img/sectores/sector-fogon-dia.jpg",
      "/img/galeria/fogon-en-familia.jpg",
    ],
  },
  {
    id: "juegos",
    icon: "🎠",
    nombre: "Zona de juegos",
    frase: "Hamaca, casita y juegos para que los chicos no paren.",
    imgs: [
      "/img/sectores/sector-juegos-hamaca.jpg",
      "/img/galeria/juegos-infantiles.jpg",
      "/img/galeria/juegos-pingpong.jpg",
    ],
  },
  {
    id: "parque",
    icon: "🌿",
    nombre: "Parque",
    frase: "Amplio espacio verde para tenis, fútbol o tejo.",
    imgs: [
      "/img/sectores/sector-parque-cancha.jpg",
      "/img/galeria/parque-verde.jpg",
      "/img/galeria/parque-hamacas.jpg",
      "/img/sectores/sector-parque-aerea.jpg",
    ],
  },
];

export const FAQS = [
  {
    q: "¿Están abiertos ahora?",
    a: `Estamos en reformas y reabrimos el ${new Date(NEGOCIO.reaperturaFecha + 'T00:00:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'long' })}. Ya podés consultar fechas a partir de ese día.`,
    keywords: ["abierto", "reformas", "cerrado", "reabren", "reapertura"],
  },
  {
    q: "¿Cuántas personas entran?",
    a: `El Quincho de Bere tiene capacidad para hasta ${NEGOCIO.capacidad} personas.`,
    keywords: ["capacidad", "personas", "cuantos", "entran", "cabe"],
  },
  {
    q: "¿Se puede llevar bebida?",
    a: "Sí, podés traer tus propias bebidas. También ofrecemos barra de cerveza tirada como extra opcional.",
    keywords: ["bebida", "alcohol", "cerveza", "tomar", "llevar"],
  },
  {
    q: "¿Hay estacionamiento?",
    a: "Sí, hay lugar para estacionar cerca del predio. No se pueden ingresar vehículos dentro del quincho.",
    keywords: ["estacionamiento", "auto", "estacionar", "cochera", "vehiculo"],
  },
  {
    q: "¿Qué incluye el alquiler?",
    a: "Quincho cerrado equipado (parrilla, cocina industrial, vajilla completa), pileta 8x3m, pérgola con juegos, fogón recreativo y amplio parque con juegos infantiles. Mirá la sección completa más arriba.",
    keywords: ["incluye", "que trae", "que tiene", "equipamiento"],
  },
  {
    q: "¿Qué pasa si llueve?",
    a: "El quincho cerrado está totalmente equipado para que el evento continúe sin problema aunque llueva. Si preferís, también podés reprogramar la fecha sin costo adicional, siempre sujeto a la disponibilidad del quincho.",
    keywords: ["llueve", "lluvia", "clima", "mal tiempo", "reprogramar"],
  },
  {
    q: "¿Se puede contratar catering?",
    a: "Sí, podés traer tu propio catering o contratar nuestro servicio de parrillero como extra opcional.",
    keywords: ["catering", "comida", "parrillero", "cocinero"],
  },
  {
    q: "¿Hay parrillero?",
    a: "Sí, ofrecemos parrillero como servicio extra, con opción de camarera y limpieza incluida.",
    keywords: ["parrillero", "asador", "parrilla"],
  },
  {
    q: "¿Aceptan mascotas?",
    a: "No, no se permiten mascotas.",
    keywords: ["mascota", "perro", "gato", "animal"],
  },
  {
    q: "¿Dónde está ubicado?",
    a: `Estamos en ${NEGOCIO.direccion}.`,
    keywords: ["ubicado", "direccion", "donde", "queda", "ubicacion"],
  },
  {
    q: "¿Cuáles son los horarios de los turnos?",
    a: "Turno Día de 11 a 17 hs, Turno Noche de 19 a 00 hs, y Día Completo de 11 a 23 hs. La decoración y la limpieza se hacen dentro del turno contratado, y hay una tolerancia máxima de 15 minutos al finalizar.",
    keywords: ["horario", "turno", "hora", "cuando", "tolerancia"],
  },
  {
    q: "¿Hay que limpiar al finalizar el evento?",
    a: "No es necesario limpiar los pisos, pero hay que dejar el lugar ordenado: recolectar los residuos, lavar la vajilla utilizada y reacomodar el mobiliario.",
    keywords: ["limpiar", "limpieza", "orden", "ordenado", "vajilla"],
  },
  {
    q: "¿Cobran depósito?",
    a: "Sí, cobramos un depósito de garantía que se devuelve al finalizar el evento. La seña para reservar no es reembolsable, aunque si hay mal clima podés reprogramar la fecha sin costo.",
    keywords: ["deposito", "garantia", "senia", "devuelve", "reintegro"],
  },
  {
    q: "¿Quién es responsable de la pileta?",
    a: "El uso de la pileta es responsabilidad de quien contrata el evento. No contamos con guardavidas, así que pedimos supervisar siempre a los niños.",
    keywords: ["pileta", "responsable", "responsabilidad", "guardavidas", "supervisar"],
  },
  {
    q: "¿Se puede llevar equipo de sonido o contratar una banda?",
    a: "El lugar ya cuenta con parlante propio, así que no es necesario traer el tuyo. Se permite volumen moderado; no se permiten bandas en vivo ni parlantes adicionales.",
    keywords: ["sonido", "parlante", "musica", "banda", "volumen", "dj"],
  },
  {
    q: "¿Tienen baño adaptado?",
    a: "Sí, contamos con baño adaptado, con ducha y cambiador de pañales.",
    keywords: ["baño adaptado", "accesible", "discapacidad", "silla de ruedas", "cambiador", "pañales"],
  },
  {
    q: "¿Se puede usar papel picado, confeti o espuma?",
    a: "No se permite papel picado, confeti (tampoco dentro de globos), bombuchas, espuma, inflables con agua ni pirotecnia — en general, nada que dificulte la limpieza del lugar.",
    keywords: ["papel picado", "confeti", "bombuchas", "espuma", "cotillon", "pirotecnia", "globos con agua"],
  },
];
