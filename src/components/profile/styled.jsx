import styled from "styled-components"

export const UserImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--green);
  border-radius: 50%;
  margin-bottom: 1em;
  @media (min-width: 768px) {
  }
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
    color: var(--green);
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
