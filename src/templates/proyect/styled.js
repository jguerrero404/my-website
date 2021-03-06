import styled from "styled-components"

export const Article = styled.article`
  /* @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 0 var(--gutter);
    grid-template-rows: 2;
  } */
`

export const Title = styled.h1`
  display: block;
  width: 100%;
  grid-column: 1 / 3;
  line-height: 54px;
  margin: var(--gutter-big) 0;
  font-size: 30px;
  text-align: center;
  padding-bottom: var(--gutter-small);
  border-bottom: var(--h-border);
  color: var(--h-color);

  font-family: var(--font-head);
  font-weight: 800;
  font-style: normal;

  @media (min-width: 768px) {
    line-height: 72px;
    font-size: 3em;
  }
  @media (min-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: 1;
  }
`

export const Content = styled.section`
  /* margin: var(--gutter) 0; */
  width: 100%;
  @media (min-width: 1024px) {
    /* grid-column: 1 / 2;
    grid-row: 2;
    padding-left: var(--gutter-big);
    margin: 0; */
    max-width: 918px;
    margin: 0 auto;
  }
`
export const Video = styled.div`
  width: 100%;
  height: 450px;
  background-color: black;
  iframe {
    width: 100%;
    height: 100%;
  }
`
export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: var(--sidenav-bg);
  box-shadow: var(--card-shadow);
  min-height: 150px;
  margin: 0 auto;
  padding: var(--gutter);
  margin-bottom: var(--gutter-big);
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const Description = styled.div`
  line-height: 24.83px;
  font-size: 13.8px;
  margin-top: calc(30px + var(--gutter));
  @media (min-width: 768px) {
    margin: 0;
    line-height: 33.1167px;
    font-size: 18.4px;
  }

  p {
    margin: 0;
  }
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`
export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  margin-top: var(--gutter);
  @media (min-width: 768px) {
    position: static;
    margin: 0;
  }

  button {
    margin-right: var(--gutter-small);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 1em;
      margin-right: 0.25em;
    }
  }
`
export const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`
export const Body = styled.div`
  line-height: 27px;
  font-size: 15px;
  @media (min-width: 768px) {
    line-height: 36px;
    font-size: 20px;
  }
  h2 {
    border-bottom: var(--h-border);
    padding-bottom: 0.7em;
    color: var(--h-color);
    font-size: 22.5px;
    line-height: 27px;
    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 36px;
    }
  }

  h3 {
    color: var(--text-color);
    line-height: 22px;
    font-size: 17.55px;
    @media (min-width: 768px) {
      line-height: 28px;
      font-size: 23.4px;
    }
  }

  ol,
  ul {
    font-weight: 400;
  }

  em {
    font-weight: 700;
  }
  strong {
    font-weight: 700;
    font-size: 0.9em;
    color: var(--h-color);
  }
  p a,
  li a {
    color: var(--h-color);
    font-weight: 600;
    box-shadow: inset 0 -3px 0 #b4e7f8;
    transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
    &:hover {
      background-color: rgba(0, 255, 242, 0.3);
    }
  }
`
