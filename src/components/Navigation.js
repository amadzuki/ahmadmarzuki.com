import React, { useState } from "react"
import styled from "@xstyled/styled-components"
import { Link } from "react-router-dom"

const NavigationWrapper = styled.box`
  display: flex;
  position: fixed;
`
const LinkBox = styled(Link)`
  text-decoration: none;
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
      <LinkBox to="/">HOME</LinkBox>
      <LinkBox to="/about">ABOUT</LinkBox>
      <LinkBox to="/contact">CONTACT</LinkBox>
      <LinkBox to="/blog">BLOG</LinkBox>
    </NavigationWrapper>
  )
}

export default Navigation
