// Constructor
import React from "react"
import styled from "styled-components"
// Base
import Layout from "../layout/index"
import SEO from "../components/seo"
// UI
import Tag from "../components/tag/index"

const mySkills = [
  "html",
  "javascript",
  "ajax",
  "websocket",
  "css",
  "jquery",
  "responsive-desing",
  "react",
  "animation",
  "auth",
  "pug",
  "vue",
  "git",
  "github",
  "gitlap",
  "boostrap",
  "fundation",
  "bulma",
  "materialize",
  "sass",
  "styled-components",
  "sql",
  "php",
  "node",
  "linux",
  "nosql",
  "pwa",
  "gatsby",
  "express",
  "graphql",
]

const MyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const SkillsPAge = () => (
  <Layout title="Skills">
    <MyContainer>
      <SEO title="Skills y Experiencia" />
      {mySkills.map(skill => (
        <Tag size="lg" name={skill} key={"skill" + skill}>
          #{skill}
        </Tag>
      ))}
    </MyContainer>
  </Layout>
)

export default SkillsPAge
