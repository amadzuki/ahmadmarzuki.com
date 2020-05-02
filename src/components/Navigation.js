import React from "react"
import styled from "@xstyled/styled-components"
import { Link } from "react-router-dom"

const NavigationWrapper = styled.div`
  display: flex;
  position: fixed;
`
const LinkBox = styled.box`
  padding: 1em;
  margin: 2em;
  color: whitesmoke;
  &:hover {
    background-color: secondary;
  }
`

const Navigation = () => {
  return (
    <NavigationWrapper>
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
