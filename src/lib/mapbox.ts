export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

// You can replace this with a custom Mapbox Studio style URL
// e.g., "mapbox://styles/yourusername/your-custom-style-id"
// For now, we use a light base and tint it via the map's paint properties
export const MAP_STYLE = "mapbox://styles/mapbox/light-v11";

export const INITIAL_VIEW = {
  longitude: -96.0,
  latitude: 33.0,
  zoom: 4.5,
  pitch: 0,
  bearing: 0,
};

export const FLY_TO_OPTIONS = {
  speed: 0.8,
  curve: 1.5,
  zoom: 14,
  pitch: 30,
  bearing: 0,
  duration: 3000,
};
