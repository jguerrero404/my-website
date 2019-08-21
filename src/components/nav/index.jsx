import React from "react"
import Tag from "../tag"
import {
  IconHome,
  IconAbout,
  IconSkill,
  IconPortfolio,
  IconContact,
} from "../../utils/theme/icons"

import { Menu, MenuItem, MenuLink } from "./styled"

class Sidenav extends React.Component {
  render() {
    const classTag = "contrast"
    return (
      <Menu>
        <MenuItem>
          <MenuLink activeClassName="active" to="/">
            <IconHome />
            <Tag name={classTag}>Inicio</Tag>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink activeClassName="active" to="/acerca">
            <IconAbout />
            <Tag name={classTag}>Acerca</Tag>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink activeClassName="active" to="/skills">
            <IconSkill />
            <Tag name={classTag}>Skills</Tag>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink activeClassName="active" to="/portafolio">
            <IconPortfolio />
            <Tag name={classTag}>Portafolio</Tag>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink activeClassName="active" to="/contacto">
            <IconContact />
            <Tag name={classTag}>Contacto</Tag>
          </MenuLink>
        </MenuItem>
      </Menu>
    )
  }
}

export default Sidenav
