import React, { useState } from "react"
import styled from "@xstyled/styled-components"
import { Link } from "react-router-dom"

const NavigationWrapper = styled.box`
  display: flex;
  position: fixed;
`
const LinkBox = styled.box`
  padding: 0.5em;
  margin: 2em 1.5em;
  color: whitesmoke;
  &:hover {
    color: orange;
  }
`

const IconBox = styled.img`
  max-width: 3em;
  margin: 1em;
`

const Navigation = () => {
  const [display, setDisplay] = useState("flex")
  const [position, setPosition] = useState(0)
  window.addEventListener("scroll", () => {
    window.pageYOffset <= position ? setDisplay("flex") : setDisplay("none")
    setPosition(window.pageYOffset)
  })
  return (
    <NavigationWrapper display={display}>
      <IconBox src="/images/icon-amadzuki-new.svg" />
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
