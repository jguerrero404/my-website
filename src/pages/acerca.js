import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../layout/index"

import Cell from "../components/cell/index"
import Btn from "../components/button/index.styled"
import User from "../components/profile/index"

const Me = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
`

const Info = styled.section`
  margin-top: 2em;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 399px));
  justify-content: center;
  align-items: center;
`

const AboutPage = () => (
  <Layout title="Acerca de mi">
    <SEO title="Acerca de" />
    <Me>
      <User firtsName="José" secondName="Guerrero" pro="Desarrollador Web" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere
        sapiente, soluta repudiandae vero sequi, dolore aliquid debitis beatae
        ipsam quas quod dolorem neque modi mollitia, officiis possimus omnis
        molestias totam.
      </p>
      <Btn width="25%">Resumen</Btn>
    </Me>
    <Info>
      <Cell title="Codeardor" />
      <Cell title="Amante de la lectura" />
      <Cell title="Jugador de ajedrez" />
      <Cell title="Autodidacta" />
      <Cell title="Aprendiz en Traeding " />
      <Cell title="Creador de Contenidos" />
    </Info>
  </Layout>
)

export default AboutPage
