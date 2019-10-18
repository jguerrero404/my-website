import styled from "styled-components"

export const UserImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: var(--gutter);
`

export const UserName = styled.h2`
  text-align: center;
  font-size: 1.5em;
  margin: 0 0 0.1em;
  color: var(--gray-1);
  @media (min-width: 768px) {
    font-size: 2em;
  }

  span {
    color: var(--primary-color);
  }
`
export const UserPro = styled.h3`
  text-align: center
  font-size: .75em;
  letter-spacing: 0.15ch;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 1em;
  }
`
