import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        brand: {
            900: "blue",
            800: "black",
            700: "pink",
        },
    },
};

export default customTheme