import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { UserImage, UserName, UserPro } from "./styled"

const UserProfile = ({ firtsName, secondName, pro }) => {
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
    <>
      <UserImage>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </UserImage>
      <UserName>
        <span>{firtsName}</span> {secondName}
      </UserName>
      <UserPro>{pro}</UserPro>
    </>
  )
}

export default UserProfile
