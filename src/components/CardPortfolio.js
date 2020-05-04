import React from "react"
import styled from "@xstyled/styled-components"

const CardPortfolioStyled = styled.div`
  background-color: secondaryBackground;
  border-radius: 10;
  height: 313;
  width: 841;
  display: flex;
  align-items: center;
  padding-left: 1em;
`
const PortfolioImageFrame = styled.div`
  height: 278;
  width: 370;
  background-color: tertiaryBackground;
  border-radius: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const PortfolioImage = styled.img`
  max-width: 362;
  max-height: 191;
`
const PortfolioTextsDiv = styled.div`
  padding-left: 1.5em;
`
const PortfolioTitle = styled.h1`
  color: primaryOrange;
`
const PortfolioLink = styled.a`
  font-size: 1.5em;
  text-decoration: none;
  font-family: monospace;
  color: secondaryOrange;
`
const PortfolioDescription = styled.p``

const CardPortfolio = ({
  imagePath,
  title,
  linkURL,
  linkText,
  description,
}) => {
  return (
    <CardPortfolioStyled>
      <PortfolioImageFrame>
        <PortfolioImage src={imagePath} />
      </PortfolioImageFrame>
      <PortfolioTextsDiv>
        <PortfolioTitle>{title}</PortfolioTitle>
        <PortfolioLink href={linkURL}>{linkText}</PortfolioLink>
        <PortfolioDescription>{description}</PortfolioDescription>
      </PortfolioTextsDiv>
    </CardPortfolioStyled>
  )
}

export default CardPortfolio
