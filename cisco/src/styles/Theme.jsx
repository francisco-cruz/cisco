import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    green: {
      50: "#E9F9EF",
      100: "#DEF6E7",
      200: "#BAECCD",
      300: "#21C25D",
      400: "#1EAF54",
      500: "#1A9B4A",
      600: "#199246",
      700: "#147438",
      800: "#0F572A",
      900: "#0C4421",
    },
    gray: {
        50: "#FBFBFB",
      100: "#F9F9F9",
      200: "#F3F3F3",
      300: "#D9D9D9",
      400: "#C3C3C3",
      500: "#AEAEAE",
      600: "#A3A3A3",
      700: "#828282",
      800: "#626262",
      900: "#4C4C4C",
    }
  },
});

export default Theme;