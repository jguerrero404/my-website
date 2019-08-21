import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  input,
  textarea {
    width: 100%;
    border: none;
    padding: 1em 2em;
    text-decoration: none;
    font-family: var(--font-body);
    font-weight: 700;
    border-radius: 3px;
    font-size: 15px;
    line-height: 20px;
    background-color: var(--sidenav-bg);
  }

  textarea {
    max-width: 100%;
    min-width: 100%;
    height: 100%;
    max-height: 300px;
    min-height: 300px;
  }
`
