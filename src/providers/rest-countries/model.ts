export type LatLng = [string, string];

export interface Country {
  name: {
    common: string;
  };
  capital: string;
  population: number;
  area: number;
  latlng: LatLng;
  flags: { png: string };
}


