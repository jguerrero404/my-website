import styled from "styled-components"

export const Author = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-weight: 700;
  margin: var(--gutter) 0;
  color: #fff;
  line-height: 17px;
  font-size: 13.8px;
  @media (min-width: 768px) {
    font-size: 18.4px;
    line-height: 23px;
  }
`

export const User = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: var(--gutter-small);
  box-shadow: var(--sidenav-shadow);
  overflow: hidden;
`
