import styled from "styled-components"

export const HeaderContainer = styled.header`
  font-family: sans-serif;
  font-weight: 800;
  font-style: normal;
  color: #fff;
  line-height: 48px;
  margin: 2.34em 0.5em 1.34em;
  @media (min-width: 768px) {
    margin: 26.8px 0;
  }
`

export const HeaderTitle = styled.h1`
  display: block;
  margin: 0;
  padding-bottom: 0.1em;
  border-bottom: 2px dashed var(--sidenav-bg);
  text-align: ${({ textAlign }) => textAlign}};
`
