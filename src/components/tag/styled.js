import styled from "styled-components"

export const Styles = styled.div`
  .tag-contrast {
    background-color: var(--text-color);
    color: var(--background);
  }
  .tag-error,
  .tag-correct {
    color: #fff;
    svg {
      width: 0.7em;
      height: 0.7em;
      fill: #fff;
    }
  }
  .tag-error {
    background-color: var(--red);
  }
  .tag-correct {
    background-color: var(--green);
  }
  .tag-node {
    background: #90c53f;
    color: #46483d;
  }
  .tag-mvp {
    color: #fff;
    background-image: linear-gradient(90deg, #ff8901, #db1d5f);
    font-weight: 700;
  }
  .tag-firebase {
    background-color: #ffcb2b;
    color: #12181a;
  }
  .tag-cloud-functions {
    background-color: var(--red);
    color: #fff;
  }
  .tag-react {
    color: #00d8ff;
    background: #222;
  }
  .tag-javascript {
    background-color: #f0db4f;
    color: #000;
  }
  .tag-vue {
    background: #41b883;
    color: #35495e;
  }
  .tag-git {
    color: #fff;
    background-color: #d72626;
  }
  .tag-gatsby {
    color: #fff;
    background-color: #9400ff;
  }
`
export const Tag = styled.span`
  display: inline-block;
  border-radius: ${({ size }) => (size ? "4px" : "2px")};
  padding: 0.2em 0.5em 0.3em;
  background-color: var(--tag-bg);
  color: var(--text-color);
  letter-spacing: 0.15ch;
  margin: 0.25em;
  font-size: ${({ size }) => (size ? "18px" : "10.5px")};
  line-height: ${({ size }) => (size ? "22px" : "13px")};
  font-weight: ${({ size }) => (size ? "700" : "600")};
  @media (min-width: 768px) {
    font-size: ${({ size }) => (size ? "1.2em" : "0.7em")};
    line-height: ${({ size }) => (size ? "29px" : "17px")};
  }
  font-family: var(--font-body);
`
