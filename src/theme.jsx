import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: '#1d1f21'
        },
        secondary: {
            main: '#61dafb'
        },
    },
    typography: {
        fontFamily: 'Fira Mono',
        fontWeightLight: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700
    }
});

export default theme;
