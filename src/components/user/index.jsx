import React from "react"
import { Author, User } from "./styled"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const UserComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/jose-guerrero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Author>
      <User>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </User>
      <div className="details">
        <em>
          Por <Link to="/acerca">José Guerrero</Link>
        </em>
      </div>
    </Author>
  )
}

export default UserComponent