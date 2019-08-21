import styled from "styled-components"

const Button = styled.button`
  width: ${({ width }) => width};
  border:  ${({ ghost }) => (ghost ? "1px solid var(--primary-color)" : "none")};
  padding: 1em 2em;
  text-decoration: none;
  text-align: center;
  font-family: var(--font-body);
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${({ ghost }) => (ghost ? "transparent" : "var(--primary-color)")};
  color: ${({ ghost }) => (ghost ? "var(--primary-color)" : "#fff")};
  display: block;
  line-height: 15px;
  font-size: 0.625em;

  @media (min-width: 768px) {
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
