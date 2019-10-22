import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import {
  IconYoutube,
  IconTwiter,
  IconGithub,
  IconLinkedin,
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
              linkedin
              youtube
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
        <OutboundLink
          href={site.siteMetadata.social.twitter}
          target="__blanck"
          className="icon-twiter"
        >
          <i>
            <IconTwiter />
          </i>
        </OutboundLink>
        <OutboundLink
          href={site.siteMetadata.social.github}
          target="__blanck"
          className="icon-github"
        >
          <i>
            <IconGithub />
          </i>
        </OutboundLink>
        <OutboundLink
          href={site.siteMetadata.social.linkedin}
          target="__blanck"
          className="icon-linkedin"
        >
          <i>
            <IconLinkedin />
          </i>
        </OutboundLink>
        <OutboundLink
          href="https://icon.com"
          target="__blanck"
          className="icon-youtube"
        >
          <i>
            <IconYoutube />
          </i>
        </OutboundLink>
      </FooterIcons>
    </FooterContainer>
  )
}

export default Footer
