export interface MemoryPhoto {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Memory {
  id: string;
  order: number;
  title: string;
  date: string;
  coordinates: [number, number]; // [lng, lat]
  location: string;
  description: string;
  photos: MemoryPhoto[];
  emoji?: string;
  isSpecial?: boolean; // final valentine pin
}

export interface RelationshipStats {
  startDate: string;
  placesVisited: number;
  photosTaken: number;
  adventuresTogether: number;
}
