import styled from "styled-components"

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 250px;
  margin-top: 120px;
  opacity: 0.8;
  font-family: sans-serif;

  &,
  p {
    margin-bottom: 0;
    line-height: 1.5em;
    font-size: 0.8em;

    @media (min-width: 768px) {
      font-size: 0.9em;
    }
  }
`
export const FooterCreated = styled.div`
  border-bottom: 2px dashed var(--sidenav-bg);
  border-top: 2px dashed var(--sidenav-bg);
  margin: 0.5em 0 1.5em;
  padding: 10px 0;
`
export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1em;
    margin: 0 0.2em;
    font-size: 1.5em;
  }

  .icon-youtube {
    fill: #ff0a00;
  }
  .icon-twiter {
    fill: #1da1f2;
  }
  .icon-github {
    fill: #333;
  }
  .icon-slack {
    fill: #ce1f5b;
  }
`
