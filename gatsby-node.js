const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const proyectTemplate = path.resolve("./src/templates/proyect/index.js")

  const res = await graphql(`
    query {
      allContentfulProyects {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulProyects.edges.map(edge => {
    createPage({
      component: proyectTemplate,
      path: `/portafolio/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
