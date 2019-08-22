import React from "react"

import { Link } from "gatsby"

import Img from "gatsby-image"

import {
  CardWrapper,
  CardContainer,
  CardContent,
  CardFooter,
  CardTitle,
  CardText,
  CardTag,
} from "./styled"

const Card = ({ title, text, tag, url, image }) => (
  <CardWrapper>
    <CardContainer>
      <Link to={url}>
        <Img fluid={image} />
      </Link>
      <CardContent>
        <Link to={url}>
          <CardTitle>{title}</CardTitle>
        </Link>
        <CardText>{text}</CardText>
      </CardContent>
      {tag ? (
        <CardFooter>
          {tag.map(tagItem => (
            <CardTag name={tagItem} key={tagItem}>
              #{tagItem}
            </CardTag>
          ))}
        </CardFooter>
      ) : (
        undefined
      )}
    </CardContainer>
  </CardWrapper>
)

export default Card
