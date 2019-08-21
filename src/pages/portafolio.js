// Contructors
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// Base
import Layout from "../layout/index"
import SEO from "../components/seo"
// UI
import Card from "../components/card/index"
import { CardGroup } from "../components/card/styled"

const PortfolioPage = () => {
  // Peticion de datos sobre los proyectos
  /* 
    1. Titulo del proyecto
    2. Descripción del proyecto
    3. Tags que caracterizan las tecnologias utilizadas en el proyecto
    4. Imagen con un maxwidth de 500px. Portada del proyecto
    5. Slug: es la el nombre de la carpeta del proyecto donde esta el contenido
  */
  const { data } = useStaticQuery(graphql`
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
  // Array de los proyectos
  const proyects = data.allMarkdownRemark.edges
  return (
    <Layout title="Portafolio">
      <SEO title="Portafolio" />
      <CardGroup>
        {proyects.map(proyect => {
          // Creacion del proyecto
          return (
            <Card
              image={proyect.node.frontmatter.image.childImageSharp.fluid}
              title={proyect.node.frontmatter.title}
              url={"/portafolio/" + proyect.node.fields.slug}
              text={proyect.node.frontmatter.description}
              tag={proyect.node.frontmatter.tags}
              key={proyect.node.fields.slug}
            ></Card>
          )
        })}
      </CardGroup>
    </Layout>
  )
}
export default PortfolioPage
