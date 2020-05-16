import React from "react"
import styled from "@xstyled/styled-components"

const CardPortfolioStyled = styled.div`
  background-color: secondaryBackground;
  border-radius: 10;
  width: 364;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  margin: 1.5rem;
`
const PortfolioImageFrame = styled.div`
  height: 278;
  flex-basis: 370;
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
  display: flex;
  flex-basis: 300;
  flex-direction: column;
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
const PortfolioDescription = styled.p`
  padding-right: 1em;
`

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
        <PortfolioLink href={linkURL} target={"_blank"}>
          {linkText}
        </PortfolioLink>
        <PortfolioDescription>{description}</PortfolioDescription>
      </PortfolioTextsDiv>
    </CardPortfolioStyled>
  )
}

export default CardPortfolio
