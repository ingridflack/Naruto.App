import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import { FilterProvider } from "../contexts/filter";
import { FavoriteProvider } from "../hooks/useFavorite";
import { GlobalStyle } from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <FilterProvider>
        <FavoriteProvider>
          <GlobalStyle />

          <Component {...pageProps} />
          <ToastContainer limit={3} autoClose={4000} />
        </FavoriteProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}

export default MyApp;
