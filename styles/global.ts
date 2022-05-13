import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media (max-width: 1800px) {
  html {
    font-size: 100%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}


body {
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.gray.dark};
}

body,
input,
textarea,
select,
button {
  font: 400 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
  background-color: transparent;

}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

`;
