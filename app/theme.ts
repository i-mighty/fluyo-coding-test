import { NativeBaseProvider, extendTheme } from "native-base";

export const theme = extendTheme({
  components: {
    Button: {
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        rounded: "38",
        _text: { fontWeight: 800 },
      },
      defaultProps: {
        colorScheme: "red",
      },
    },
    // Heading: {
    //   // Can pass also function, giving you access theming tools
    //   baseStyle: ({ colorMode }) => {
    //     return {
    //       color: colorMode === "dark" ? "red.300" : "blue.300",
    //       fontWeight: "normal",
    //     };
    //   },
    // },
  },
});
