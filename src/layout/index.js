import React, { Component } from "react"
import PropTypes from "prop-types"
/*
  This web site is based in ITCSS and SMACSS
*/
// Generics
import { Reboot } from "../utils/base/reboot" // Reboot Globals styles
import { Colors } from "../utils/theme/colors" // (colors)
import { Typography } from "../utils/theme/typography" // (fonts)
import { VariableStyle } from "../utils/config/variableStyle" // (Variables Styles)
import { TimelineMax, Expo } from "gsap"
// Layout
import { Main, Nav } from "./styled"
// MODULES (SMACSS) or COMPONENTS (ITCSS)
import Header from "../components/header/index"
import Footer from "../components/footer/index"
import Menu from "../components/nav/index"
import { IconLogo } from "../utils/theme/icons"

class Layout extends Component {
  componentDidMount() {
    return new TimelineMax()
      .to("#container", 1, {
        x: 0,
        ease: Expo.easeOut,
      })
      .to(
        "#container",
        1,
        {
          opacity: 1,
          ease: Expo.easeOut,
        },
        "-= 0.65"
      )
  }

  render() {
    const { children, title, textAlign, footer } = this.props
    return (
      <>
        <Reboot />
        <Colors />
        <Typography />
        <VariableStyle />

        <Nav role="navigation">
          <IconLogo />
          <Menu />
        </Nav>
        <Main role="main">
          <div id="container">
            {title ? (
              <Header siteTitle={title} textAlign={textAlign} />
            ) : (
              undefined
            )}
            {children}
            {footer === undefined ? <Footer /> : undefined}
          </div>
        </Main>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
