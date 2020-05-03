import React from "react"
import styled from "@xstyled/styled-components"
import { Link } from "react-router-dom"

const NavigationWrapper = styled.div`
  display: flex;
  position: fixed;
`
const LinkBox = styled.box`
  padding: 0.5em;
  margin: 2em;
  color: whitesmoke;
  &:hover {
    color: orange;
  }
`

const IconBox = styled.img`
  max-width: 3em;
`

const Navigation = () => {
  return (
    <NavigationWrapper>
      <IconBox src="/images/icon-amadzuki-new.svg"></IconBox>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LinkBox>HOME</LinkBox>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <LinkBox>ABOUT</LinkBox>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <LinkBox>CONTACT</LinkBox>
      </Link>
      <Link to="/blog" style={{ textDecoration: "none" }}>
        <LinkBox>BLOG</LinkBox>
      </Link>
    </NavigationWrapper>
  )
}

export default Navigation
