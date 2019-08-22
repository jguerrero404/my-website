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
          soy 👉 <strong>José Guerrero</strong>,
          <br />
          desarrollador web 🚀
        </h1>
        <Buttons>
          <Link to="/portafolio">
            <Btn background="var(--primary-color)" color="#fff">
              Explora
            </Btn>
          </Link>
          <Link to="/contacto">
            <Btn background="var(--gray-5)">Contactame</Btn>
          </Link>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 2em);

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 40% 60%;
    width: 100%;
  }
`
const Title = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    margin-left: var(--gutter);
  }
  h1,
  strong {
    font-family: var(--font-head);
    color: #fff;
    line-height: 36px;
    font-size: 30px;
    @media (min-width: 512px) {
      line-height: 48px;
      font-size: 40px;
    }
  }
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: var(--primary-color);
    display: none;
    @media (min-width: 1024px) {
      display: block;
      width: 100%;
      max-width: 500px;
    }
  }
`

const Buttons = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  button:first-child {
    margin-right: var(--gutter);
  }
`
