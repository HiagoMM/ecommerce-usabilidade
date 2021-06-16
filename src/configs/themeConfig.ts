import { createGlobalStyle } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
  }

`;
export const theme = {
  colors: {
    primary: "#3567d4",
    black: "#000000",
    white: "#ffffff",
  },
};

export const matTheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
    },
  },
});
