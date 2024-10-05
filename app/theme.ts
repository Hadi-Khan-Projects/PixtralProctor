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
    grey4: generateColorArray("#adb5bd"),
    grey6: generateColorArray("#495057"),
    black: generateColorArray("#000000"),
    redLight: generateColorArray("#ffcccc"),
    orangeLight: generateColorArray("#ffe6cc"),
  }
});