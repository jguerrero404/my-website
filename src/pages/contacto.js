// Constructor
import React, { Component } from "react"
// Base
import Layout from "../layout/index"
import SEO from "../components/seo"
// UI
import Btn from "../components/button/index.styled"
import { GlobalStyle, Container } from "../components/contact/index.styled"
import Tag from "../components/tag/index"
import { IconWarning, IconQuestion, IconCorrect } from "../utils/theme/icons"

const initialState = {
  name: "",
  email: "",
  message: "",
  nameErr: "",
  emailErr: "",
  messageErr: "",
  nameCorr: false,
  emailCorr: false,
  messageCorr: false,
}
export default class ContactPage extends Component {
  state = initialState

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleFocus = e => {
    this.setState({
      [`${e.target.name}Err`]: "",
      [`${e.target.name}Corr`]: false,
    })
    e.target.style.border = "none"
  }

  // handleInvalid = yolo => {
  //   yolo.style.border = "1px solid var(--red-dark)"
  // }

  validateName = () => {
    const borderInvalid = document.querySelector("#name")

    if (!this.state.name) {
      this.setState({
        nameErr: "Por favor, escribe tú nombre",
        nameCorr: false,
      })
      this.handleInvalid(borderInvalid)
      return false
    } else {
      this.setState({ nameErr: "", nameCorr: true })
    }
    return true
  }
  validateEmail = () => {
    const borderInvalid = document.querySelector("#eamil")

    if (!this.state.email) {
      this.setState({
        emailErr: "Por favor, escribe tú email",
        emailCorr: false,
      })
      this.handleInvalid(borderInvalid)
      return false
    } else if (!this.state.email.includes("@")) {
      this.setState({ emailErr: "Correo invalido", emailCorr: false })
      this.handleInvalid(borderInvalid)
      return false
    } else {
      this.setState({ emailErr: "", emailCorr: true })
    }
    return true
  }
  validateMessage = () => {
    const borderInvalid = document.querySelector("#message")

    if (!this.state.message) {
      this.setState({
        messageErr: "Por favor, escribe un mensaje",
        messageCorr: false,
      })
      this.handleInvalid(borderInvalid)
      return false
    } else {
      this.setState({ messageErr: "", messageCorr: true })
    }
    return true
  }

  handleSubmit = e => {
    e.preventDefault()
    const nameIsValid = this.validateName()
    const emailIsValid = this.validateEmail()
    const messageIsValid = this.validateMessage()

    if (nameIsValid && emailIsValid && messageIsValid) {
      console.log(this.state)
      this.setState(initialState)
    }
  }

  render() {
    return (
      <Layout title="Contacto">
        <SEO title="Contacto" />
        <Container>
          <GlobalStyle />
          <form onSubmit={this.handleSubmit}>
            <div className="inputContainer">
              {this.state.nameCorr ? (
                <div className="message-error">
                  <Tag name="correct">
                    <IconCorrect />
                  </Tag>
                  <Tag name="correct">Todo Correcto</Tag>
                </div>
              ) : null}
              {this.state.nameErr ? (
                <div className="message-error">
                  <Tag name="error">
                    <IconQuestion />
                  </Tag>
                  <Tag name="error">{this.state.nameErr}</Tag>
                </div>
              ) : null}
              <input
                id="name"
                name="name"
                type="text"
                placeholder="NOMBRE"
                onChange={this.handleChange}
                onBlur={this.validateName}
                onFocus={this.handleFocus}
                value={this.state.name}
              />
            </div>
            <div className="inputContainer">
              {this.state.emailCorr ? (
                <div className="message-error">
                  <Tag name="correct">
                    <IconCorrect />
                  </Tag>
                  <Tag name="correct">Todo Correcto</Tag>
                </div>
              ) : null}
              {this.state.emailErr ? (
                <div className="message-error">
                  <Tag name="error">
                    {this.state.emailErr === "Correo invalido" ? (
                      <IconWarning />
                    ) : (
                      <IconQuestion />
                    )}
                  </Tag>
                  <Tag name="error">{this.state.emailErr}</Tag>
                </div>
              ) : null}
              <input
                id="email"
                name="email"
                type="email"
                onBlur={this.validateEmail}
                placeholder="CORREO"
                onChange={this.handleChange}
                value={this.state.email}
                onFocus={this.handleFocus}
              />
            </div>
            <div className="inputContainer">
              {this.state.messageCorr ? (
                <div className="message-error">
                  <Tag name="correct">
                    <IconCorrect />
                  </Tag>
                  <Tag name="correct">Todo Correcto</Tag>
                </div>
              ) : null}
              {this.state.messageErr ? (
                <div className="message-error">
                  <Tag name="error">
                    <IconQuestion />
                  </Tag>
                  <Tag name="error">{this.state.messageErr}</Tag>
                </div>
              ) : null}
              <textarea
                id="message"
                name="message"
                placeholder="MENSAJE"
                onChange={this.handleChange}
                onBlur={this.validateMessage}
                value={this.state.message}
                onFocus={this.handleFocus}
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
