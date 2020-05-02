import React from "react"
import PropTypes from "prop-types"
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

const Layout = ({ children, headingText, buttonText }) => {
  return (
    <div>
      <Hero>
        <Navigation></Navigation>
        <HeroHeader>
          <HeroHeading>{headingText}</HeroHeading>
          <HeroButton>{buttonText}</HeroButton>
        </HeroHeader>
      </Hero>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  headingText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}

Layout.defaultProps = {
  headingText: "Title",
  buttonText: "Button",
}

export default Layout
