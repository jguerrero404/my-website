import React from "react"
import styled from "styled-components"

import Layout from "../layout/index"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

import Card from "../components/card/index"

const CardGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 2rem;
  justify-content: center;
`

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              tags
              image {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout title="Portafolio">
      <SEO title="Portafolio" />
      <CardGroup>
        {data.allMarkdownRemark.edges.map(post => (
          <Card
            image={post.node.frontmatter.image.childImageSharp.fluid}
            title={post.node.frontmatter.title}
            url={"/portafolio/" + post.node.fields.slug}
            text={post.node.frontmatter.description}
            tag={post.node.frontmatter.tags}
            key={post.node.fields.slug}
          ></Card>
        ))}
      </CardGroup>
    </Layout>
  )
}
export default PortfolioPage
