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
          <MenuLink
            activeClassName="active"
            to="/"
            name="inicio"
            aria-label="inicio"
          >
            <IconHome />
            <Tag name={classTag}>Inicio</Tag>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink
            activeClassName="active"
            to="/acerca"
            name="acerca"
            aria-label="acerca"
          >
            <IconAbout />
            <Tag name={classTag}>Acerca</Tag>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink
            activeClassName="active"
            to="/skills"
            name="skills"
            aria-label="skills"
          >
            <IconSkill />
            <Tag name={classTag}>Skills</Tag>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink
            activeClassName="active"
            to="/portafolio"
            name="portafolio"
            aria-label="portafolio"
          >
            <IconPortfolio />
            <Tag name={classTag}>Portafolio</Tag>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink
            activeClassName="active"
            to="/contacto"
            name="contacto"
            aria-label="contacto"
          >
            <IconContact />
            <Tag name={classTag}>Contacto</Tag>
          </MenuLink>
        </MenuItem>
      </Menu>
    )
  }
}

export default Sidenav
