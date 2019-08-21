// Constructor
import React from "react"
import styled from "styled-components"
// Base
import Layout from "../layout/index"
import SEO from "../components/seo"
// UI
import Btn from "../components/button/index.styled"
import StyledInputs from "../components/contact/index"

const Container = styled.section`
  @media (min-width: 768px) {
    width: 60%;
    margin: 0 auto;
  }

  form {
    margin-bottom: var(--gutter-small);

    input,
    textarea {
      margin-bottom: var(--gutter-small);
      @media (min-width: 512px) {
        margin-bottom: 0;
      }
    }

    @media (min-width: 512px) {
      display: grid;
      grid-column: 1fr;
      grid-template-columns: 1fr 1fr;
      grid-gap: var(--gutter-small);

      input:first-child {
        grid-column: 1/2;
      }
      input:last-child {
        grid-column: 2/3;
      }
      textarea,
      button {
        grid-column: 1/3;
      }
    }
  }
`

const ContactPage = () => (
  <Layout title="Contacto">
    <SEO title="Contacto" />
    <Container>
      <form action="">
        <StyledInputs />
        <input type="text" placeholder="NOMBRE" />
        <input type="email" placeholder="CORREO" />
        <textarea name="mensaje" placeholder="MENSAJE"></textarea>
        <Btn width="100%">Enviar</Btn>
      </form>
    </Container>
  </Layout>
)

export default ContactPage
