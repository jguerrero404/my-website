import styled, { createGlobalStyle } from "styled-components"

export const Container = styled.section`
  @media (min-width: 768px) {
    width: 60%;
    margin: 0 auto;
  }

  form {
    margin-bottom: var(--gutter-small);

    div {
      margin-bottom: var(--gutter-small);
      @media (min-width: 1024px) {
        margin-bottom: 0;
      }
    }

    @media (min-width: 1024px) {
      display: grid;
      grid-column: 1fr;
      grid-template-columns: 1fr 1fr;
      grid-gap: var(--gutter-small);

      div:first-child {
        grid-column: 1/2;
      }
      div:nth-child(2) {
        grid-column: 2/3;
      }
      div:nth-child(3),
      button {
        grid-column: 1/3;
        width: 100%;
      }
    }
  }
`
export const GlobalStyle = createGlobalStyle`
  input,
  textarea {
    width: 100%;
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
    
    &:invalid {
      box-shadow: none;

      &:hover {
        
        &::before {
          display: none;
        }
        &::after {
          display: none;
        }
      }
    }
    &:required {
      box-shadow: none;
    }
  }

  textarea {
    max-width: 100%;
    min-width: 100%;
    height: 100%;
    max-height: 200px;
    min-height: 200px;
    @media (min-width: 1024px) {
      max-height: 300px;
    min-height: 300px;
    }
  }
  .inputContainer {
    position: relative;
  }
  .message-error {
    display: flex;
    
    div:first-child,
    div:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    .message-error {
    position: absolute;
    right: 0;
    top: 20px;
    margin-right: 2.5px;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    width: 24px;
    height:  24px;


    div:first-child:hover ~ div:last-child {
      opacity: 1;
      transform: scale(1);
    }
    div:last-child {
      display: flex;
      justify-content: flex-end;
      min-width: 300px;
      opacity: 0;
      transform: scale(0);
      transition: opacity 0.3s;

    }
  }
  }
`
