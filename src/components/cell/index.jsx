import React from "react"

import { CellGroup, CellImage, CellTitle } from "./styled"

const Cell = ({ image, title }) => (
  <CellGroup>
    <CellImage image={image}></CellImage>
    <CellTitle>{title}</CellTitle>
  </CellGroup>
)

export default Cell
