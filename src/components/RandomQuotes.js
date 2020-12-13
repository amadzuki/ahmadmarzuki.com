import React from 'react'
import styled from '@xstyled/styled-components'
import randomQuotes from 'random-quotes'

const RandomQuotesStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #575757;
`
const Quote = styled.p`
  font-style: italic;
  font-size: 20px;
  color: orange;
  margin: 1em;
`
const Author = styled.p`
  font-size: 20px;
  color: orange;
  margin: 1em;
`
const RandomQuotes = () => {
  const { body, author } = randomQuotes()

  return (
    <RandomQuotesStyled>
      <Quote>&quot;{body}&quot;</Quote>
      <Author>{author}</Author>
    </RandomQuotesStyled>
  )
}
export default RandomQuotes
