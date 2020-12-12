import React from 'react'
import styled from '@xstyled/styled-components'
import { Link } from 'react-router-dom'

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
`
const Title = styled.h1`
  font-size: 2em;
  color: secondaryOrange;
`
const Text = styled.p`
  font-family: monospace;
  color: secondaryOrange;
`
const SocialMediaBox = styled.div`
  display: flex;
`
const SocialLink = styled(Link)`
  display: block;
  margin: 20px 40px;
`
const Logo = styled.img`
  width: 40px;
`
const SeparatorLine = styled.div`
  width: 70vw;
  height: 6;
  border-radius: 4;
  background-color: secondaryOrange;
  margin-bottom: 1em;
`
const Footer = () => {
  return (
    <FooterStyled>
      <Title>connect with me</Title>
      <SocialMediaBox>
        <SocialLink
          to={{ pathname: 'https://github.com/amadzuki/saikou-client' }}
          target='_blank'
        >
          <Logo src='images/icon-facebook.svg' />
        </SocialLink>
        <SocialLink
          to={{ pathname: 'https://github.com/amadzuki/saikou-client' }}
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
        <SocialLink
          to={{ pathname: 'https://github.com/amadzuki/saikou-client' }}
          target='_blank'
        >
          <Logo src='images/icon-telegram.svg' />
        </SocialLink>
        <SocialLink
          to={{ pathname: 'https://github.com/amadzuki/saikou-client' }}
          target='_blank'
        >
          <Logo src='images/icon-whatsapp.svg' />
        </SocialLink>
      </SocialMediaBox>
      <SeparatorLine />
      <Text>Copyright ©2020 Ahmad Marzuki</Text>
    </FooterStyled>
  )
}

export default Footer
