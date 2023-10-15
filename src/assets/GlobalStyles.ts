import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    position: relative;
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1 1 auto;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input,
  textarea {
    border: none;
    outline: none;
    background-color: none;
  }
`;
