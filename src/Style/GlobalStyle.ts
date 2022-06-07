import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body{
    width: 100%;
    height:100vh;
    scroll-behavior:smooth;
    font-size:16px;
    font-family: 'Montserrat', sans-serif;
    color: ${DefaultTheme.secundary};
    background-color: ${DefaultTheme.tertiary}
  }

  input, button{
    outline:none;
    border:none;
  }

  a{
    text-decoration:none;
    color: inherit;
  }
`;
