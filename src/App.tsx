import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInUp from "./pages/sign-in-up/sign-in-up";
import { ThemeProvider as MatThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { matTheme, theme, GlobalStyle } from "./configs/themeConfig";
import Home from "./pages/home/home";
import ItensContextProvider from "./components/cartContext/cart.context";

export default function App() {
  return (
    <ItensContextProvider>
      <MatThemeProvider theme={matTheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route path="/sign-in-up">
                <SignInUp />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </MatThemeProvider>
    </ItensContextProvider>
  );
}
