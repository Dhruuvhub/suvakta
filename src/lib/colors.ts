/** Suvakta brand palette — derived from logo teal (#326269 / #2D5F66) */
export const SUVAKTA = {
  50: "#E8F3F4",
  100: "#D1E8EA",
  200: "#A3D1D6",
  300: "#6BB5BD",
  400: "#4A9BA5",
  500: "#326269",
  600: "#2D5F66",
  700: "#244952",
  800: "#1A3D42",
  900: "#122B2E",
  950: "#0A1A1C",
  accent: "#6ECFD9",
} as const;

/** Teal gradient bands for rainbow SVG strips */
export const STRIP_COLORS = [
  SUVAKTA[500],
  SUVAKTA.accent,
  SUVAKTA[400],
  SUVAKTA[300],
] as const;

export const STRIP_OUTLINE = SUVAKTA[900];
