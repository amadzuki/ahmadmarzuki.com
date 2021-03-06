import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, down } from '@xstyled/styled-components'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Hero = styled.box`
  height: 100vh;
  background: no-repeat center/cover;
  background-color: black;
`
const HeroHeader = styled.header`
  height: 100%;
  color: primaryFont;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const HeroHeading = styled.h1`
  font-size: 3em;
  ${down(
    'sm',
    css`
      font-size: 2em;
    `
  )}
`

const HeroButton = styled.a`
  font-size: 1.2rem;
  margin: 1em;
  padding: 0.5em 1em;
  background-color: primaryOrange;
  border-radius: 0.5em;
  color: black;
  text-decoration: none;
`

const Layout = ({
  children,
  headingText,
  buttonText,
  buttonLink,
  backgroundURL,
}) => {
  return (
    <div>
      <Navigation />
      <Hero backgroundImage={backgroundURL}>
        <HeroHeader>
          <HeroHeading>{headingText}</HeroHeading>
          {buttonText && (
            <HeroButton href={buttonLink}>{buttonText}</HeroButton>
          )}
        </HeroHeader>
      </Hero>
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  headingText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  backgroundURL: PropTypes.string.isRequired,
}

Layout.defaultProps = {
  headingText: 'Title',
}

export default Layout
