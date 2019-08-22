import PropTypes from "prop-types"
import React from "react"

import { HeaderContainer, HeaderTitle } from "./styled"

const Header = ({ siteTitle, textAlign }) => (
  <HeaderContainer>
    <HeaderTitle textAlign={textAlign}>{siteTitle}</HeaderTitle>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
