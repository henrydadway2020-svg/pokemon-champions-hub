export type TournamentStatus = 'abierto' | 'cerrado' | 'en_curso' | 'finalizado';

export interface Prize {
  puesto: string;
  premio: string;
}

export interface Tournament {
  id: string;
  slug: string;
  nombre: string;
  bannerUrl: string;
  formato: string;
  fechaInicio: string;
  fechaFin?: string;
  modalidad: 'online' | 'presencial';
  ubicacion?: string;
  organizador: string;
  reglas: string;
  premios: Prize[];
  enlaceInscripcion: string;
  estado: TournamentStatus;
}

export interface NewsItem {
  id: string;
  slug: string;
  titulo: string;
  resumen: string;
  contenido: string;
  imagenDestacada: string;
  categoria: string;
  fechaPublicacion: string;
}

export const STATUS_LABEL: Record<TournamentStatus, string> = {
  abierto: 'Abierto',
  cerrado: 'Cerrado',
  en_curso: 'En curso',
  finalizado: 'Finalizado',
};
