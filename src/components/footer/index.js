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
        Tienes algún proyecto en mente?.<Link to="/contacto"> Contacta me</Link>{" "}
        y creémoslo juntos.
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
          aria-label="twiter"
        >
          <i>
            <IconTwiter />
          </i>
        </OutboundLink>
        <OutboundLink
          href={site.siteMetadata.social.github}
          target="__blanck"
          className="icon-github"
          aria-label="github"
        >
          <i>
            <IconGithub />
          </i>
        </OutboundLink>
        <OutboundLink
          href={site.siteMetadata.social.linkedin}
          target="__blanck"
          className="icon-linkedin"
          aria-label="likedin"
        >
          <i>
            <IconLinkedin />
          </i>
        </OutboundLink>
        <OutboundLink
          href="https://icon.com"
          target="__blanck"
          className="icon-youtube"
          aria-label="youtube"
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
