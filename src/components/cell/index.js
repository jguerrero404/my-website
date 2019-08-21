import React from "react"

import { CellGroup, CellImage, CellTitle } from "./styled"

const Cell = ({ children, title }) => (
  <CellGroup>
    <CellImage>{children}</CellImage>
    <CellTitle>{title}</CellTitle>
  </CellGroup>
)

export default Cell
