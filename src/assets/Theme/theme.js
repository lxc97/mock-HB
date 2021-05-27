import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      light: "#ffca28",
      main: "#ffc107",
      dark: "#ffb300",
      contrastText: "#fff",
    },
    secondary: {
      light: "#4caf50",
      main: "#43a047",
      dark: "#388e3c",
      contrastText: "#fff",
    },
    error: {
      light: "#4caf50",
      main: "#f44336",
      dark: "#388e3c",
      contrastText: "#fff",
    },
    default: {
      main: "#fff",
      contrastText: "#000",
    },
  },
});

export default theme;
