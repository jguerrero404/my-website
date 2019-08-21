import styled from "styled-components"
import { Link } from "gatsby"

export const Menu = styled.ul`
  background-color: inherit;
  margin: 0;
  position: fixed;
  z-index: 100;
  right: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  box-shadow: var(--sidenav-shadow);

  @media (min-width: 768px) {
    display: block;
    width: var(--sidenav-width);
    max-width: var(--sidenav-width);
    height: 100%;
    position: static;
  }
`
export const MenuItem = styled.li`
  list-style: none;
  width: var(--sidenav-width);
  height: var(--sidenav-width);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  box-shadow: 1.5px 0 5px -5px #010101;

  @media (min-width: 768px) {
    margin-bottom: 10px;
    box-shadow: none;
  }

  /* Active */
  .active > div {
    display: none;
  }
  .active > svg {
    fill: var(--green);
  }
`

export const MenuLink = styled(Link)`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: var(--sidenav-width);
  height: var(--sidenav-width);

  /* Estilos del titulo */
  div {
    display: none;
    @media (min-width: 768px) {
      display: block;
      position: fixed;
      transform: scale(0) translateX(0);
      left: -3px;
      transition: transform 0.3s ease-out;
      opacity: 0.8;
      z-index: 100;
    }
  }
  @media (min-width: 768px) {
    &:hover > div {
      transform: scale(1) translateX(70px);
      transition: transform 0ms ease-in;
    }
  }
  /* Estilos del icono */
  svg {
    fill: var(--text-color);
    width: 24px;
    height: 24px;

    @media (min-width: 768px) {
      width: 2em;
      height: 2em;
    }
  }

  @media (min-width: 768px) {
    &:hover > svg {
      fill: var(--green);
    }
  }
`
