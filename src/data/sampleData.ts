import type { Tournament, NewsItem } from './types';

// Datos de ejemplo. Cuando conectemos D1, estas funciones se reemplazan
// por consultas reales (ver src/lib/db.ts, pendiente de implementar).
export const sampleTournaments: Tournament[] = [
  {
    id: '1',
    slug: 'copa-champions-vgc-2026',
    nombre: 'Copa Champions VGC 2026',
    bannerUrl: '',
    formato: 'VGC Regulation I',
    fechaInicio: '2026-08-15T18:00:00',
    modalidad: 'online',
    organizador: 'Liga Texcoco',
    reglas: 'Equipo de 6 Pokémon, se seleccionan 4 para batalla. Clausulas: Species Clause, Item Clause. Nivel 50.',
    premios: [
      { puesto: '1er lugar', premio: 'Tarjeta de regalo $500 MXN + banner personalizado' },
      { puesto: '2do lugar', premio: 'Tarjeta de regalo $250 MXN' },
      { puesto: '3er lugar', premio: 'Tarjeta de regalo $100 MXN' },
    ],
    enlaceInscripcion: 'https://forms.gle/ejemplo',
    estado: 'abierto',
  },
  {
    id: '2',
    slug: 'torneo-tcg-mexico-julio',
    nombre: 'Torneo TCG México — Julio',
    bannerUrl: '',
    formato: 'TCG Estándar',
    fechaInicio: '2026-07-20T16:00:00',
    modalidad: 'presencial',
    ubicacion: 'Texcoco de Mora, México',
    organizador: 'Club TCG Texcoco',
    reglas: 'Formato estándar vigente. Mazo de 60 cartas, sin proxies.',
    premios: [{ puesto: '1er lugar', premio: 'Booster box + trofeo' }],
    enlaceInscripcion: 'https://discord.gg/ejemplo',
    estado: 'en_curso',
  },
  {
    id: '3',
    slug: 'clasificatorio-smogon-ou',
    nombre: 'Clasificatorio Smogon OU',
    bannerUrl: '',
    formato: 'Smogon OU',
    fechaInicio: '2026-06-01T20:00:00',
    modalidad: 'online',
    organizador: 'Comunidad Showdown MX',
    reglas: 'Reglas estándar de Smogon OU vigentes. Se juega en Pokémon Showdown.',
    premios: [{ puesto: '1er lugar', premio: 'Rol especial en Discord' }],
    enlaceInscripcion: 'https://challonge.com/ejemplo',
    estado: 'finalizado',
  },
];

export const sampleNews: NewsItem[] = [
  {
    id: '1',
    slug: 'nueva-regulacion-vgc',
    titulo: 'Nueva Regulación VGC ya disponible',
    resumen: 'Se anunciaron los cambios de la próxima temporada competitiva y cómo afectan al meta actual.',
    contenido: '',
    imagenDestacada: '',
    categoria: 'Meta',
    fechaPublicacion: '2026-07-05',
  },
  {
    id: '2',
    slug: 'resultados-torneo-tcg-junio',
    titulo: 'Resultados del Torneo TCG de junio',
    resumen: 'Repasamos los mazos ganadores y las jugadas más destacadas del evento.',
    contenido: '',
    imagenDestacada: '',
    categoria: 'Torneos',
    fechaPublicacion: '2026-06-28',
  },
];
