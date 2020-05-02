import React from "react"
import styled from "@xstyled/styled-components"

const HeadingContainer = styled.box`
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3em;
`

const MainHeading = ({ children }) => {
  return (
    <HeadingContainer>
      Hello, I'm Marzuki
      {children}
    </HeadingContainer>
  )
}

export default MainHeading
