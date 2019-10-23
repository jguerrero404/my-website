// Constructor
import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// Base
import Layout from "../../layout/index"
import SEO from "../../components/seo"
// UI
import Tag from "../../components/tag/index"
import Btn from "../../components/button/index.styled"
import { IconGithub, IconExternal } from "../../utils/theme/icons"
import User from "../../components/user/index"

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
  Body,
} from "./styled"

export const query = graphql`
  query($slug: String!) {
    contentfulProyects(slug: { eq: $slug }) {
      title
      description
      video
      tags
      repo
      demo
      body {
        json
      }
    }
  }
`
class Proyect extends React.Component {
  render() {
    const { data } = this.props
    const options = {
      renderNode: {
        "embedded-asset-block": node => {
          const alt = node.data.target.fields.title["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return <img alt={alt} url={url} />
        },
      },
    }
    return (
      <Layout>
        <SEO
          title={data.contentfulProyects.title}
          description={data.contentfulProyects.description}
        />
        <Article>
          <Title>{data.contentfulProyects.title}</Title>
          <Content>
            <header>
              <Video>
                <iframe
                  title="Proyecto"
                  src={data.contentfulProyects.video}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Video>
              <Info>
                <Description>
                  <p>{data.contentfulProyects.description}</p>
                  <User />
                </Description>
                <Details>
                  <Buttons>
                    <a href={data.contentfulProyects.repo} target="__blanck">
                      <Btn color="var(--sidenav-bg)" background="var(--gray-2)">
                        <IconGithub />
                        Repositorio
                      </Btn>
                    </a>
                    <a href={data.contentfulProyects.demo} target="__blanck">
                      <Btn color="#000" background="var(--orange)">
                        <IconExternal /> Demo
                      </Btn>
                    </a>
                  </Buttons>
                  <Tags>
                    {data.contentfulProyects.tags.split(",").map((tag, i) => (
                      <Tag name={tag} key={tag + i}>
                        #{tag}
                      </Tag>
                    ))}
                  </Tags>
                </Details>
              </Info>
            </header>
            <Body>
              {documentToReactComponents(
                data.contentfulProyects.body.json,
                options
              )}
            </Body>
          </Content>
        </Article>
      </Layout>
    )
  }
}

export default Proyect
