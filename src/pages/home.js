import React from "react"
import styled from "@xstyled/styled-components"

import Navigation from "../components/Navigation"
import MainHeading from "../components/MainHeading"

const Hero = styled.box`
  margin: 0;
  height: 100vh;
  background: no-repeat center/cover url("/images/HeroImage.jpg");
`

const MainButton = styled.box`
  font-size: 1.2rem;
  margin: 1em;
  padding: 0.5em 1em;
  background-color: orange;
  border-radius: 0.5em;
  color: black;
`

const Home = () => {
  return (
    <div>
      <Hero>
        <Navigation></Navigation>
        <MainHeading>
          <MainButton>See My Portfolio</MainButton>
        </MainHeading>
      </Hero>
    </div>
  )
}

export default Home
