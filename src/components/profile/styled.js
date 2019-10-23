import styled from "styled-components"

export const UserImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`

export const UserName = styled.h2`
  color: var(--green);
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin: 10px 0 0.1em;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`
export const UserPro = styled.h3`
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.15ch;
  color: #fff;
  @media (min-width: 768px) {
    width: 50%;
    font-size: 18px;
    line-height: 1.2;
  }
`
