export type StandardFont = {
  id: string;
  fullName: string;
};

export type StandardFonts = ReadonlyArray<StandardFont>;

export type GoogleFont = {
  family: string;
};

export type GoogleFonts = ReadonlyArray<GoogleFont>;

export type GoogleFontResponse = {
  items: GoogleFonts;
};

export type ComputedOpacity = {
  finalFontOpacity: number;
  fallbackFontOpacity: number;
};
