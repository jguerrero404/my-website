import styled from "styled-components"

const Button = styled.button`
  width: ${({ width }) => width};
  border: ${({ ghost, background }) =>
    ghost ? "1px solid " + background : "none"};
  padding: 1em 2em;
  text-decoration: none;
  text-align: center;
  font-family: var(--font-body);
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${({ ghost, background }) =>
    ghost ? "transparent" : background};
  color: ${({ ghost, color, background }) => (ghost ? background : color)};
  display: block;
  line-height: 12px;
  font-size: 9.38px;

  @media (min-width: 768px) {
    line-height: 15px;
    font-size: 12.5px;
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--card-shadow);
      transition: transform 0.2s ease;
    }
  }

  &:active {
    transform: scale(0.9);
  }
`

export default Button
