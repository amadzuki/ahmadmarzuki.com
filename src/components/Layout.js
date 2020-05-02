import React from "react"
import styled from "@xstyled/styled-components"

import Navigation from "../components/Navigation"

const Hero = styled.box`
  height: 100vh;
  background: no-repeat center/cover url("/images/HeroImage.jpg");
`
const HeroHeader = styled.header`
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const HeroHeading = styled.h1`
  font-size: 3em;
`

const HeroButton = styled.button`
  font-size: 1.2rem;
  margin: 1em;
  padding: 0.5em 1em;
  background-color: primaryBackground;
  border: none;
  border-radius: 0.5em;
  color: black;
`

const Layout = ({ children }) => {
  return (
    <div>
      <Hero>
        <Navigation></Navigation>
        <HeroHeader>
          <HeroHeading>Hello, I'm Marzuki</HeroHeading>
          <HeroButton>See My Portfolio</HeroButton>
        </HeroHeader>
      </Hero>
      {children}
    </div>
  )
}

export default Layout
