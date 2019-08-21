// Constructor
import React, { Component } from "react"
// Base
import Layout from "../layout/index"
import SEO from "../components/seo"
// UI
import Btn from "../components/button/index.styled"
import { GlobalStyle, Container } from "../components/contact/index.styled"
import Tag from "../components/tag/index"
import { IconQuestion } from "../utils/theme/icons"

const initialState = {
  name: "",
  email: "",
  message: "",
  formErrors: {
    name: "",
    email: "",
    message: "",
  },
}

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&´*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)

export default class ContactPage extends Component {
  state = initialState

  formValid = () => {
    let valid = true
    const { formErrors, ...rest } = this.state

    Object.values(formErrors).forEach(element => {
      element.length > 0 && (valid = false)
    })

    Object.values(rest).forEach(element => {
      element === "" && (valid = false)
    })

    return valid
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleBlur = e => {
    const { name, value } = e.target
    let formErrors = this.state.formErrors

    switch (name) {
      case "name":
        formErrors.name =
          value.length < 3 ? "Minimo 3 caracteres son requeridos" : ""

        break
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "Correo invalido"
        break
      default:
        formErrors.message =
          value.length < 3 ? "Minimo 3 caracteres son requeridos" : ""
        break
    }

    this.setState({ formErrors })
  }

  handleSubmit = e => {
    e.preventDefault()
    const state = this.state
    let formErrors = this.state.formErrors

    if (this.formValid()) {
      console.log(state)
      this.setState(initialState)
    } else {
      const nameErr = "Por favor, dime tú nombre"
      const emailErr = "Por favor, dime tú correo"
      const messageErr = "Por favor, dime tú mensaje"

      if (this.state === initialState) {
        formErrors.name = nameErr
        formErrors.email = emailErr
        formErrors.message = messageErr

        this.setState({ formErrors })
      } else {
        if (state.name === "") {
          formErrors.name = nameErr
        }
        if (state.email === "") {
          formErrors.email = emailErr
        }
        if (state.message === "") {
          formErrors.message = messageErr
        }
        this.setState({ formErrors })
      }
    }
  }

  render() {
    const { formErrors } = this.state
    return (
      <Layout title="Contacto">
        <SEO title="Contacto" />
        <Container>
          <GlobalStyle />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              {formErrors.name.length > 0 && (
                <div className="message-error">
                  <Tag name="error">
                    <IconQuestion />
                  </Tag>
                  <Tag name="error">{formErrors.name}</Tag>
                </div>
              )}
              <input
                name="name"
                className={formErrors.name.length > 0 ? "error" : null}
                type="text"
                placeholder="NOMBRE"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={this.state.name}
              />
            </div>
            <div className="form-group">
              {formErrors.email.length > 0 ? (
                <div className="message-error">
                  <Tag name="error">
                    <IconQuestion />
                  </Tag>
                  <Tag name="error">{formErrors.email}</Tag>
                </div>
              ) : (
                ""
              )}
              <input
                name="email"
                className={formErrors.email.length > 0 ? "error" : null}
                type="email"
                placeholder="CORREO"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              {formErrors.message.length > 0 ? (
                <div className="message-error">
                  <Tag name="error">
                    <IconQuestion />
                  </Tag>
                  <Tag name="error">{formErrors.message}</Tag>
                </div>
              ) : (
                ""
              )}
              <textarea
                name="message"
                className={formErrors.message.length > 0 ? "error" : null}
                placeholder="MENSAJE"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={this.state.message}
              ></textarea>
            </div>
            <Btn width="100%" background="var(--primary-color)" color="#fff">
              Enviar
            </Btn>
          </form>
        </Container>
      </Layout>
    )
  }
}
