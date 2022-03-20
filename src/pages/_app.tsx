import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global";
import theme from "../../styles/theme";
import Header from "../components/Header";
import { CharactersProvider } from "../contexts/characters";
import { FavoriteProvider } from "../hooks/useFavorite";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CharactersProvider>
        <FavoriteProvider>
          <GlobalStyle />
          <Header />

          <Component {...pageProps} />
        </FavoriteProvider>
      </CharactersProvider>
    </ThemeProvider>
  );
}

export default MyApp;
