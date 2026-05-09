import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f6edd3;
    color: #222;
  }

  img {
    display: block;
    width: 100%;
  }

  ul {
    list-style: none;
  }
`;