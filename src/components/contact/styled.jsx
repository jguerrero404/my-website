import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  input,
  textarea {
    width: 100%;
    border: none;
    font-size: 18px;
    padding: .5em 1em;
    line-height: 22px;
    text-decoration: none;
    font-family: var(--font-body);
    font-weight: 700;
    border-radius: 3px;
    background-color: var(--sidenav-bg);
    color: var(--text-color);
    @media (min-width: 512px) {
      padding: 1em 2em;  
    }
  }

  textarea {
    max-width: 100%;
    min-width: 100%;
    height: 100%;
    max-height: 300px;
    min-height: 300px;
  }
`
