import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#ffe5e5",
      100: "#fcbaba",
      200: "#f28f8f",
      300: "#e86565",
      400: "#de3b3b",
      500: "#c52222", // default brand color (red)
      600: "#9b1b1b",
      700: "#701414",
      800: "#460d0d",
      900: "#1d0505",
    },
  },

  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
  },
});
