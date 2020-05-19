import React from "react"
import styled, { css, down } from "@xstyled/styled-components"

const CardPortfolioStyled = styled.div`
  background-color: secondaryBackground;
  border-radius: 10;
  max-width: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  margin: 1.5rem;

  ${down(
    "sm",
    css`
      max-width: 300;
    `
  )}
`
const PortfolioImageFrame = styled.div`
  height: 250;
  background-color: tertiaryBackground;
  border-radius: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const PortfolioImage = styled.img`
  max-width: 100%;
`
const PortfolioTextsDiv = styled.div`
  display: flex;
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
  ${down(
    "sm",
    css`
      font-size: 1.2em;
    `
  )}
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
