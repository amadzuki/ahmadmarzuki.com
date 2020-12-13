import React from 'react'
import styled, { css, down } from '@xstyled/styled-components'
import { Link } from 'react-router-dom'

import RandomQuotes from './RandomQuotes'

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
`
const Title = styled.h1`
  font-size: 1.5em;
  color: secondaryOrange;
  margin-bottom: 0;
`
const Text = styled.p`
  font-family: monospace;
  color: #a6a6a6;
`
const SocialMediaBox = styled.div`
  display: flex;
`
const SocialLink = styled(Link)`
  display: block;
  margin: 16px 40px;
`
const Logo = styled.img`
  width: 30px;
`
const SeparatorLine = styled.div`
  width: 70vw;
  height: 3px;
  border-radius: 4;
  background-color: secondaryOrange;
  margin-bottom: 8px;
`
const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  ${down(
    'sm',
    css`
      flex-direction: column;
      justify-content: center;
    `
  )}
`
const Footer = () => {
  return (
    <FooterStyled>
      <RandomQuotes />
      <Title>links</Title>
      <SocialMediaBox>
        <SocialLink
          to={{ pathname: 'https://www.facebook.com/amadzuki7/' }}
          target='_blank'
        >
          <Logo src='images/icon-facebook.svg' />
        </SocialLink>
        <SocialLink
          to={{ pathname: 'https://www.instagram.com/amadzuki/' }}
          target='_blank'
        >
          <Logo src='images/icon-instagram.svg' />
        </SocialLink>
        <SocialLink
          to={{ pathname: 'https://github.com/amadzuki/saikou-client' }}
          target='_blank'
        >
          <Logo src='images/icon-github.svg' />
        </SocialLink>
        <SocialLink to={{ pathname: 'https://t.me/amadzuki' }} target='_blank'>
          <Logo src='images/icon-telegram.svg' />
        </SocialLink>
        <SocialLink
          to={{ pathname: 'https://wa.me/message/55S2UDEGSXMQC1' }}
          target='_blank'
        >
          <Logo src='images/icon-whatsapp.svg' />
        </SocialLink>
      </SocialMediaBox>
      <SeparatorLine />
      <TextBox>
        <Text>Copyright ©2020 Ahmad Marzuki</Text>
        <Text>Made with ♥ and ☕</Text> {/*eslint-disable-line*/}
      </TextBox>
    </FooterStyled>
  )
}

export default Footer
