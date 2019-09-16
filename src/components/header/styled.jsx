import styled from "styled-components"

export const HeaderContainer = styled.header`
  font-family: var(--font-header);
  font-weight: 800;
  font-style: normal;
  color: #fff;
  line-height: 48px;
  margin: var(--gutter-big) 0;
  @media (min-width: 768px) {
    margin: var(--gutter) 0;
  }
`

export const HeaderTitle = styled.h1`
  display: block;
  margin: 0;
  padding-bottom: 0.1em;
  border-bottom: var(--h-border);
`
