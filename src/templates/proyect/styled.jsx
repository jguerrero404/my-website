import styled from "styled-components"

export const Article = styled.article`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 2em;
`

export const Title = styled.h1`
  display: block;
  width: 100%;
  grid-column: 1 / 3;
  line-height: 72px;
  margin: 49.8px 0;
  font-size: 3em;
  text-align: center;
  padding-bottom: 0.5em;
  border-bottom: var(--h-border);
  color: var(--h-color);

  font-family: var(--font-head);
  font-weight: 800;
  font-style: normal;
`

export const Content = styled.section`
  grid-column: 1 / 2;
  padding-left: 2em;
`
export const Video = styled.div`
  width: 100%;
  height: 550px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Info = styled.div`
  display: flex;
  background-color: var(--sidenav-bg);
  box-shadow: var(--card-shadow);
  min-height: 150px;
  margin: 0 auto;
  padding: 1em;
  margin-bottom: 2em;
`
export const Description = styled.div`
  width: 50%;
`
export const Details = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button:first-child {
    margin-right: 0.5em;
    background-color: var(--gray-2);
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 1em;
      margin-right: 0.25em;
    }
  }
  button:last-child {
    background-color: var(--orange);
  }
`
export const Tags = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`
export const Author = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-weight: 700;
  margin: 20px 0;
  color: #fff;

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 0.5em;
    box-shadow: var(--sidenav-shadow);
    background-color: var(--green);
  }
`
export const Body = styled.div`
  h2 {
    border-bottom: var(--h-border);
    padding-bottom: 0.7em;
    color: var(--h-color);
  }

  h3 {
    color: var(--text-color);
  }

  ol,
  ul {
    font-weight: 500;
  }
  p {
    line-height: 1.8;
  }
  em {
    font-weight: 700;
  }
  strong {
    font-weight: 700;
    font-size: 0.9em;
    color: var(--h-color);
  }
  p a {
    color: var(--h-color);
    font-weight: 600;
    box-shadow: inset 0 -3px 0 #b4e7f8;
    transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
    &:hover {
      background-color: rgba(0, 255, 242, 0.3);
    }
  }
`

export const Menu = styled.aside`
  grid-column: 2 / 3;
  
  &,
  nav {
    position: sticky;
    top: 0;
  }
  nav {
    
    max-height: 80vh;
    margin-bottom: 1em;
    padding: 1em 0.5em 0;
    overflow-y: auto;
    box-shadow: var(--toc-shadow);
    background: var(--sidenav-bg);
  }
  nav::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }
  nav::-webkit-scrollbar-track {
    background: var(--background);
  }
  nav::-webkit-scrollbar-thumb {
    background: var(--gray3);
  }
  nav::-webkit-scrollbar-thumb:hover {
    background: var(--gray4);
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  nav ul li {
    padding: 0.5em;
    border-bottom: 1px solid var(--gray-dark);
    line-height: 24px;
  }
  nav ul li a {
    color: var(--blue);
    font-weight: 500;
  }
  nav ul li ul li {
    line-height: 18px;
    margin: 0;
  }
  nav ul li ul li a {
    font-size: 0.75em;
    font-weight: 500;
    margin-left: 5px;
  }
  nav ul li ul li a {
    color: var(--text-color);
  }
`
