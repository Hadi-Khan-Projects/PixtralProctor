import { createTheme } from '@mantine/core';

// type for the color array
type ColorArray = [string, string, string, string, string, string, string, string, string, string];

// Modify the function to return a tuple
const generateColorArray = (color: string): ColorArray => {
  return [color, color, color, color, color, color, color, color, color, color];
};

export const theme = createTheme({
  colors: {
    white: generateColorArray('#FFFFFF'),
    blue: generateColorArray('#238be6'),
    grey1: generateColorArray("#e9ecef"),
    grey2: generateColorArray("#dee2e6"),
    grey3: generateColorArray("#ced4da"),
    grey4: generateColorArray("#adb5bd"),
    grey6: generateColorArray("#495057"),
    grey7: generateColorArray("#343a40"),
    grey8: generateColorArray("#212529"),
    black: generateColorArray("#000000"),
    redLight: generateColorArray("#ffcccc"),
    orangeLight: generateColorArray("#ffe6cc"),
    orange: generateColorArray("#e85d04"),
  }
});