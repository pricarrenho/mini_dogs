import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: ${theme.font.family};
    }

    h1 {
      font-size: ${theme.font.sizes.lg};
    }
  `}
`;
