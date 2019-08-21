import React from "react"

import { UserImage, UserName, UserPro } from "./styled"

const UserProfile = ({ firtsName, secondName, pro }) => (
  <>
    <UserImage />
    <UserName>
      <span>{firtsName}</span> {secondName}
    </UserName>
    <UserPro>{pro}</UserPro>
  </>
)

export default UserProfile
