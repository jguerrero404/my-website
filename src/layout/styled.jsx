import styled from "styled-components"

export const Nav = styled.nav`
  background-color: var(--sidenav-bg);
  box-shadow: var(--sidenav-shadow);
  width: calc(100% - 45px);
  height: 45px;

  @media (min-width: 768px) {
    grid-column: 0 / 1;
    height: 100vh;
    min-height: 500px;
    overflow-x: visible;
    width: var(--sidenav-width);
    max-width: var(--sidenav-max-width);
    padding-top: var(--sidenav-width);
  }
`
export const Main = styled.main`
  padding: 1em;
  overflow-y: auto;

  /* Logo */
  .svg-logo {
    position: fixed;
    top: 0%;
    left: 0%;
    width: 45px;
    height: 45px;
    fill: var(--gray-0);
    background: linear-gradient(90deg, hsl(154, 92%, 40%), hsl(154, 92%, 30%));
    z-index: 1000;

    @media (min-width: 768px) {
      width: var(--sidenav-width);
      height: var(--sidenav-width);
      box-shadow: var(--sidenav-shadow);
    }
  }
`
