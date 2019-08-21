// Constructor
import React from "react"
import styled from "styled-components"
// Base
import Layout from "../layout/index"
import SEO from "../components/seo"
// UI
import { IconLogo } from "../utils/theme/icons"
import Btn from "../components/button/index.styled"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout footer="quitalo">
    <SEO title="José Guerrero" />
    <Container>
      <Title>
        <h1>
          Hola,
          <br />
          soy <strong>José Guerrero</strong>,
          <br />
          desarrollador web
        </h1>
        <Buttons>
          <Link to="/contacto">
            <Btn ghost>Contactame</Btn>
          </Link>
          <Btn>Resumen</Btn>
        </Buttons>
      </Title>
      <Logo>
        <IconLogo />
      </Logo>
    </Container>
  </Layout>
)

export default IndexPage

const Container = styled.section`
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
  height: calc(100vh - 3em);

  div {
    display: flex;
    height: calc(100vh - 3em);
    justify-content: center;
  }
`
const Title = styled.div`
  width: 100%;
  flex-direction: column;
  margin-left: 2rem;
  h1,
  strong {
    font-family: var(--font-head);
    line-height: 55.8px;
    font-size: 45.8px;
    color: #fff;
  }
`
const Logo = styled.div`
  svg {
    height: 100%;
    width: 100%;
    fill: var(--green);
  }
`

const Buttons = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  button:first-child {
    margin-right: 1em;
  }
`
