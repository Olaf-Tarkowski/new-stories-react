import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  max-width: 1920px;
  background-color: rgb(255, 255, 255);
  margin: auto;
  font-family: "Readex Pro", sans-serif;
}
`;
