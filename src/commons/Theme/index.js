import { createTheme } from "@mui/material";

const theme = createTheme({
    color: {
        primary : "#D32F2F",
        secondary: "#00BCD4",
        error: "#E64A19"
    },
    typography: {
        fontFamily: "Roboto"
    },
    shape: {
        borderRadius:4,
        backgroundColor: "7B1FA2",
        textColor: "#FFFFFF",
        borderColor : "#CCCCCC"
    }
});

export default theme;