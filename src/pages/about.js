import React from 'react'
import styled from '@xstyled/styled-components'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

const Section = styled.box`
  color: primaryFont;
  background-color: primaryBackground;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 2em;
`
const Line = styled.box`
  font-size: 1.5em;
  margin: 1em;
`
const AccentWord = styled.span`
  color: primaryOrange;
`

const About = () => {
  return (
    <Layout
      headingText='About'
      buttonText='Read My Story'
      buttonLink='#myStory'
      backgroundURL='url("/images/AboutImage.jpg")'
    >
      <Section id='myStory'>
        <Line>
          Born in <AccentWord>Papua</AccentWord>, yet a pure blooded{' '}
          <AccentWord>Minangnese</AccentWord>.
        </Line>
        <Line>
          Live and grew up in <AccentWord>Jakarta</AccentWord>.
        </Line>
        <Line>
          In the past, I've dreamed of becoming a{' '}
          <AccentWord>Scientist</AccentWord>, <AccentWord>Engineer</AccentWord>,{' '}
          <AccentWord>Entrepreneur</AccentWord>...
        </Line>
        <Line>
          Or a tech prophet like <AccentWord>Elon Musk</AccentWord>.
        </Line>
        <Line>
          You might call it <AccentWord>Naivety</AccentWord>, but I'd say it is{' '}
          <AccentWord>Novelty</AccentWord>.
        </Line>
        <Line>
          One day, I've come to love this rapid changing industry of{' '}
          <AccentWord>Web Development</AccentWord>.
        </Line>
        <Line>Still, some things never change...</Line>
        <Line alignSelf={'flex-end'} fontStyle={'italic'}>
          Read more in my blog{' '}
          <Link
            to='/blog'
            style={{
              textDecoration: 'none',
              color: 'orange',
            }}
          >
            HERE
          </Link>
        </Line>
      </Section>
    </Layout>
  )
}

export default About
