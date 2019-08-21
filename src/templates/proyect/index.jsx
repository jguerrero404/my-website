// Constructor
import React from "react"
import { graphql, Link } from "gatsby"
// Base
import Layout from "../../layout/index"
import SEO from "../../components/seo"
// UI
import Tag from "../../components/tag/index"
import Btn from "../../components/button/index.styled"
import { IconGithub } from "../../utils/theme/icons"

import {
  Article,
  Title,
  Content,
  Video,
  Info,
  Description,
  Details,
  Buttons,
  Tags,
  Author,
  Body,
  Menu,
} from "./styled"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        tags
      }
      html
    }
  }
`

class Proyect extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <SEO
          title={data.markdownRemark.frontmatter.title}
          description={data.markdownRemark.frontmatter.description}
        />
        <Article>
          <Title>{data.markdownRemark.frontmatter.title}</Title>
          <Menu>
            <nav>
              <ul>
                <li>
                  <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
                    Title
                  </a>
                  <ul>
                    <li>
                      <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
                        sub-title
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
                        sub-title
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
                        sub-title
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
                    Title
                  </a>
                  <ul>
                    <li>
                      <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
                        sub-title
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
                        sub-title
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
                        sub-title
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </Menu>
          <Content>
            <header>
              <Video>Video Aqui</Video>
              <Info>
                <Description>
                  <p>{data.markdownRemark.frontmatter.description}</p>
                  <Author>
                    {" "}
                    <div className="avatar"></div>
                    <div className="details">
                      <em>
                        Por <Link to="/acerca">José Guerrero</Link>
                      </em>
                    </div>
                  </Author>
                </Description>
                <Details>
                  <Buttons>
                    <Btn>
                      <IconGithub /> Repositorio
                    </Btn>
                    <Btn>Demo</Btn>
                  </Buttons>
                  <Tags>
                    {data.markdownRemark.frontmatter.tags.map(tag => (
                      <Tag name={tag} key={"tagProyect" + tag}>
                        #{tag}
                      </Tag>
                    ))}
                  </Tags>
                </Details>
              </Info>
            </header>
            <Body
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            ></Body>
          </Content>
        </Article>
      </Layout>
    )
  }
}

export default Proyect
