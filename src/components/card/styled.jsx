import styled from "styled-components"
import Tag from "../tag/index"

export const CardWrapper = styled.article`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`

export const CardContainer = styled.div`
  min-height: 240px;
  height: fit-content;
  background-color: var(--card-bg);
  color: var(--text-color);
  padding: 0;
  box-shadow: var(--card-shadow);
  display: inline-flex;
  flex-direction: column;
  transform: translateY(0);
  transition: transform 0.3s;
  margin: 0 auto;

  &:hover {
    transform: translateY(-3px);
  }
`

export const CardContent = styled.div`
  padding: 0 1em;
  display: flex;
  flex-direction: column;
`

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 1em 1em;
`

export const CardTitle = styled.h3`
  font-weight: 800;
  font-style: normal;
  font-family: "ratio", sans-serif;
  color: var(--h-color);
  line-height: 28px;
  margin: 23.4px 0;
`

export const CardText = styled.p`
  line-height: 24px;
  margin-bottom: 1em;
  font-family: sans-serif;
`
export const CardTag = styled(Tag)`
  background-color: red;
`
