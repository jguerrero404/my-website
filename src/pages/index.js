// Constructor
import React from "react"
// Base
import Layout from "../layout/index"
import SEO from "../components/seo"
// UI
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hola Mundo</h1>
    <p>Bienvenido a tu nuevo sitio en Gatsby.</p>
    <p>Yolo mero jejej.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
