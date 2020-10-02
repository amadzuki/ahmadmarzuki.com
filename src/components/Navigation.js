import React, { useState } from 'react'
import styled, { css, down } from '@xstyled/styled-components'
import { NavLink } from 'react-router-dom'

const NavigationWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;

  &.dropDown {
    background-color: secondaryBackground;
  }
`
const LinkBox = styled.div`
  display: flex;

  ${down(
    'sm',
    css`
      display: none;
    `
  )}

  &.dropDown {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0.5em;
  margin: 2em 1.5em;
  color: whitesmoke;
  &:hover {
    color: orange;
  }

  &.selected {
    font-weight: 600;
    text-shadow: 0 0 1em orange;
  }
`

const IconImg = styled.img`
  height: 3em;
  margin: 1.2em;
`
const BurgerBox = styled.div`
  width: 20px;
  height: 20px;
  padding: 2em;
  display: none;
  cursor: pointer;

  ${down(
    'sm',
    css`
      display: block;
    `
  )}
`
const BurgerLine = styled.div`
  height: 1px;
  margin: 5px 0;
  background-color: white;
`

const Navigation = () => {
  const [display, setDisplay] = useState('flex')
  let position = 0
  window.addEventListener('scroll', () => {
    window.pageYOffset <= position ? setDisplay('flex') : setDisplay('none')
    position = window.pageXOffset
  })
  const [dropDownIsShown, setDropDownIsShown] = useState(false)
  return (
    <NavigationWrapper
      display={display}
      className={dropDownIsShown ? 'dropDown' : null}
    >
      <IconImg src='/images/icon-amadzuki-new.svg' />
      <LinkBox className={dropDownIsShown ? 'dropDown' : null}>
        <Link activeClassName='selected' exact to='/'>
          HOME
        </Link>
        <Link activeClassName='selected' to='/about'>
          ABOUT
        </Link>
        <Link activeClassName='selected' to='/contact'>
          CONTACT
        </Link>
        <Link activeClassName='selected' to='/blog'>
          BLOG
        </Link>
      </LinkBox>
      <BurgerBox
        onClick={() => {
          setDropDownIsShown(!dropDownIsShown)
        }}
      >
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
      </BurgerBox>
    </NavigationWrapper>
  )
}

export default Navigation
