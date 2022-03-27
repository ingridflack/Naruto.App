import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global";
import theme from "../../styles/theme";
import Header from "../components/Header";
import { FilterProvider } from "../contexts/filter";
import { FavoriteProvider } from "../hooks/useFavorite";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <FilterProvider>
        <FavoriteProvider>
          <GlobalStyle />
          <Header />

          <Component {...pageProps} />
        </FavoriteProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}

export default MyApp;
