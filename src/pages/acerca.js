// Constructor
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
// Base
import SEO from "../components/seo"
import Layout from "../layout/index"
// UI
import Cell from "../components/cell/index"
import Btn from "../components/button/index.styled"
import User from "../components/profile/index"
import {
  IconSkill,
  IconChess,
  IconBook,
  IconReadBook,
  IconPencil,
  IconBarGraph,
} from "../utils/theme/icons"

const Me = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  line-height: 1.2em;
  text-align: center;

  @media (min-width: 768px) {
    width: 60%;
  }

  p {
    font-family: var(--font-head);
    border-bottom: var(--h-border);
    border-top: var(--h-border);
    padding: var(--gutter-small) 0;
    font-size: 15px;
    line-height: 27px;
    @media (min-width: 768px) {
      line-height: 36px;
      font-size: 20px;
    }
  }
`

const Info = styled.section`
  margin-top: var(--gutter-big);
  display: grid;
  grid-gap: var(--gutter);
  grid-template-columns: repeat(auto-fit, minmax(300px, 399px));
  justify-content: center;
  align-items: center;
`

function AboutPage() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            cv
          }
        }
      }
    `
  )

  return (
    <Layout title="Acerca de mi">
      <SEO title="Acerca de" />
      <Me>
        <User
          firtsName="José"
          secondName="Guerrero"
          pro="Desarrollador web y escritor técnico independiente"
        />
        <p>
          Soy un desarrollador web full stack. Disfruto y encuentro facinante
          resolver problemas implementando características y nuevas tecnologías
          tanto en el frontend como en el backend.
        </p>
        <a href={site.siteMetadata.cv}>
          <Btn background="var(--green-dark)" color="#fff">
            Resumen
          </Btn>
        </a>
      </Me>
      <Info>
        <Cell title="Codeardor">
          <IconSkill />
        </Cell>
        <Cell title="Amante de la lectura">
          <IconReadBook />
        </Cell>
        <Cell title="Jugador de ajedrez">
          <IconChess />
        </Cell>
        <Cell title="Autodidacta">
          <IconBook />
        </Cell>
        <Cell title="Aprendiz en Traeding ">
          <IconBarGraph />
        </Cell>
        <Cell title="Creador de Contenidos">
          <IconPencil />
        </Cell>
      </Info>
    </Layout>
  )
}

export default AboutPage
