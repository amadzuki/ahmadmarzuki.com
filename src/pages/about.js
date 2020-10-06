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
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const ProfilePicture = styled.img`
  height: 5em;
  width: 5em;
  border-radius: 50%;
  border: 10px solid orange;
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
        <ProfileBox>
          <ProfilePicture src='/images/marzuki.jpg' />
          <Line fontSize='2em'>Ahmad Marzuki</Line>
        </ProfileBox>
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
          Having tried various things, it turns out they didn't click for me
        </Line>
        <Line>
          One day, I've come to love this rapid changing industry of{' '}
          <AccentWord>Web Development</AccentWord>.
        </Line>
        <Line>
          I've learned so much about it under the tutelage of{' '}
          <Link
            to={{ pathname: 'https://mhaidarhanif.com' }}
            target='_blank'
            style={{
              textDecoration: 'none',
              color: 'white',
              fontWeight: '600',
            }}
          >
            a seasoned veteran.
          </Link>{' '}
          And more importantly, <AccentWord>I enjoyed it!</AccentWord>
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
