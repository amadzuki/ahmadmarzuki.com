import React from "react"
import styled from "@xstyled/styled-components"
import { Link } from "react-router-dom"

const NavigationWrapper = styled.div`
  display: flex;
`
const LinkButton = styled.box`
  padding: 1.5em;
  margin: 1.5em;
`

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LinkButton>HOME</LinkButton>
      </Link>
      <LinkButton>
        <Link to="/about" style={{ textDecoration: "none" }}>
          ABOUT
        </Link>
      </LinkButton>
      <LinkButton>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          CONTACT
        </Link>
      </LinkButton>
      <LinkButton>
        <Link to="/blog" style={{ textDecoration: "none" }}>
          BLOG
        </Link>
      </LinkButton>
    </NavigationWrapper>
  )
}

export default Navigation
