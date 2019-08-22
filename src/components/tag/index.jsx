import React from "react"

import { Styles, Tag } from "./styled"

const TagComponent = ({ name, children, size }) => (
  <Styles>
    <Tag size={size} className={"tag-" + name}>
      {children}
    </Tag>
  </Styles>
)

export default TagComponent
