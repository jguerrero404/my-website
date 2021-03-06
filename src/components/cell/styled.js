import styled from "styled-components"

export const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-gap: var(--gutter);
  align-items: center;
  margin: 0 var(--gutter);
  @media (min-width: 768px) {
    margin: 0;
  }
`

export const CellImage = styled.div`
  width: 60px;
  height: 60px;
  background: black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--sidenav-bg);

  svg {
    fill: var(--text-color);
    width: 1.5em;
  }
`

export const CellTitle = styled.div`
  border-bottom: 2px dashed var(--sidenav-bg);
  padding: 15px 0;
  font-size: 17px;
  @media (min-width: 768px) {
    font-size: 24px;
    padding: 30px 0;
  }
`
