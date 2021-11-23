export enum RoomTheme {
  ADVENTURE = "Aventura",
  TERROR = "Terror",
}

export enum RoomDifficulty {
  BEGGINERS = "Principiantes",
  INTERMEDIATE = "Intermedio",
  ADVANCE = "Avanzado",
}

export enum SurpriseFactor {
  LOW = "Bajo",
  INTERMEDIATE = "Intermedio",
  HIGH = "Alto",
}

export interface Room {
  name: string;
  description: string[];
  link: string;
  level: RoomDifficulty;
  surprise?: SurpriseFactor;
  minPlayers?: number;
  maxPlayers?: number;
  theme?: RoomTheme[];
}

export interface ContactInfo {
  address: string;
  location: string;
  province: string;
  country: string;
  website: string;
  email?: string;
  whatsapp?: string;
  phone?: string;
}

export interface Franchise {
  name: string;
  contact: ContactInfo;
  rooms: { [name: string]: Room };
}

export interface SocialMedia {
  [id: string]: string;
}

export interface Company {
  name: string;
  website: string;
  logo: string;
  socialMedia: SocialMedia;
  franchises: { [id: string]: Franchise };
}
