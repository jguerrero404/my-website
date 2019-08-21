import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import {
  IconYoutube,
  IconTwiter,
  IconGithub,
  IconSlack,
} from "../../utils/theme/icons"

import { FooterContainer, FooterCreated, FooterIcons } from "./styled"

function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
           social {
             twitter
             github
             slack
           }
          }
        }
      }
    `
  )
  return (
    <FooterContainer className="footer">
      <p>
        Tienes algun proyecto en mente?. <Link to="/contacto">Contactame</Link>{" "}
        y creemoslo juntos
      </p>
      <FooterCreated>
        <p> Copyright © {new Date().getFullYear()}</p>
        <p>
          Creado Por
          <Link to="/acerca"> José Guerrero</Link>
        </p>
      </FooterCreated>
      <FooterIcons>
        <a href="https://icon.com" className="icon-youtube">
          <i>
            <IconYoutube />
          </i>
        </a>
        <a href={site.siteMetadata.social.twitter} className="icon-twiter">
          <i>
            <IconTwiter />
          </i>
        </a>
        <a href={site.siteMetadata.social.github} className="icon-github">
          <i>
            <IconGithub />
          </i>
        </a>
        <a href={site.siteMetadata.social.slack} className="icon-slack">
          <i>
            <IconSlack />
          </i>
        </a>
      </FooterIcons>
    </FooterContainer>
  )
}

export default Footer
