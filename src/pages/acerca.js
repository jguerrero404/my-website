// Constructor
import React from "react"
import styled from "styled-components"
// Base
import SEO from "../components/seo"
import Layout from "../layout/index"
// UI
import Cell from "../components/cell/index"
import Btn from "../components/button/index.styled"
import User from "../components/profile/index"

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
      <Btn background="var(--primary-color)" color="#fff">
        Resumen
      </Btn>
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
