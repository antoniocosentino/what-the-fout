import { ComputedOpacity } from "../types";

export const getComputedOpacity = (value: number): ComputedOpacity => {
  // the idea of this method is to reproduce a crossfader effect
  // example:
  // original value 50: 100% + 100%
  // original value 25: 100% + 50%
  // original value 75: 50% + 100%

  if (value === 50) {
    return {
      finalFontOpacity: 100,
      fallbackFontOpacity: 100,
    };
  }

  const convertedPercentage = (100 * value) / 50;

  if (value < 50) {
    return {
      finalFontOpacity: 100,
      fallbackFontOpacity: convertedPercentage,
    };
  }

  if (value > 50) {
    return {
      finalFontOpacity: 100 - (convertedPercentage - 100),
      fallbackFontOpacity: 100,
    };
  }

  return {
    finalFontOpacity: 100,
    fallbackFontOpacity: 100,
  };
};
