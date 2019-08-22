import styled from "styled-components"
import { Link } from "gatsby"

export const Menu = styled.ul`
  background-color: inherit;
  margin: 0;
  position: fixed;
  z-index: 100;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 45px);
  height: 45px;
  margin-left: 45px;

  @media (min-width: 768px) {
    display: block;
    width: 70px;
    max-width: var(--sidenav-max-width);
  }
`
export const MenuItem = styled.li`
  list-style: none;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  @media (mi-width: 768px) {
    margin-bottom: 10px;
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

  @media (min-width) {
    width: 70px;
    height: 70px;

    &:hover {
      opacity: 1;
      fill: "#000";
    }
  }

  /* Estilos del titulo */
  div {
    position: fixed;
    transform: scale(0) translateX(0);
    left: -3px;
    transition: transform 0.3s ease-out;
    opacity: 0.8;
  }
  &:hover > div {
    transform: scale(1) translateX(70px);
    transition: transform 0ms ease-in;
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

  &:hover > svg {
    fill: var(--green);
  }
`
