import React from "react"
import PropTypes from "prop-types"
/*
  This web site is based in ITCSS and SMACSS
*/
// Generics
import { Reboot } from "../utils/base/reboot" // Reboot Globals styles
import { Colors } from "../utils/theme/colors" // (colors)
import { Typography } from "../utils/theme/typography" // (fonts)
import { VariableStyle } from "../utils/config/variableStyle" // (Variables Styles)
// Layout
import { Main, Nav } from "./styled"
// MODULES (SMACSS) or COMPONENTS (ITCSS)
import Header from "../components/header/index"
import Footer from "../components/footer/index"
import Menu from "../components/nav/index"
import { IconLogo } from "../utils/theme/icons"

const Layout = ({ children, title, textAlign }) => {
  return (
    <>
      <Reboot />
      <Colors />
      <Typography />
      <VariableStyle />

      <Nav role="navigation">
        <Menu />
      </Nav>
      <Main role="main">
        <IconLogo />
        {title ? <Header siteTitle={title} textAlign={textAlign} /> : undefined}
        {children}
        <Footer />
      </Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
