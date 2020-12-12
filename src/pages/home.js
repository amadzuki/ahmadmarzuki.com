import React from 'react'
import styled, { css, down } from '@xstyled/styled-components'

import Layout from '../components/Layout'
import CardPortfolio from '../components/CardPortfolio'

import appList from '../data/appList.json'
import stacks from '../data/stacks.json'

const Section = styled.box`
  color: primaryFont;
  background-color: primaryBackground;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background-repeat: no-repeat;
  background-size: cover;
`
const SectionContent = styled.box`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  flex-basis: 70%;
  ${down(
    'sm',
    css`
      flex-basis: 100%;
    `
  )}
`
const SectionHeader = styled.box`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  margin-bottom: 2em;
`
const AccentLine = styled.div`
  width: 30%;
  height: 4;
  background-color: secondaryOrange;
`
const SectionHeading = styled.h1Box`
  margin: 0.2em 0;
  color: primaryFont;
`
const SectionTitle = styled(SectionHeading)`
  color: secondaryOrange;
  ${down(
    'sm',
    css`
      font-size: 1.7em;
    `
  )}
`

const SectionDescription = styled.box`
  font-size: 1.2em;
  margin: 1em 0 1em 2em;

  ${down(
    'sm',
    css`
      font-size: 1em;
    `
  )}
`

const SectionExperience = styled.box`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CompanyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2em;
  margin: 0 1em 2em 0;
`
const CompanyLogo = styled.img`
  width: 90;
  height: 90;
`
const CompanyPosition = styled.div``

const CardImage = styled.img`
  margin: 1em 2em;
`

const Home = () => {
  return (
    <Layout
      headingText="Hello, I'm Marzuki"
      buttonText='See My Portfolio'
      buttonLink='#portfolio'
      backgroundURL='url("/images/HeroImageHome.jpg")'
    >
      <>
        <Section>
          <SectionContent flexDirection={'column'}>
            <SectionHeader>
              <AccentLine />
              <SectionTitle>
                I am a Material Engineer turned Web Developer
              </SectionTitle>
              <SectionDescription>
                I was graduated as Bachelor of Engineering. Had a taste of
                working as Intern Engineer in PT Timah and CSR at Elcorps and
                other side jobs. But still, it didn&lsquo;t click for me. And
                now I&lsquo;ve found my passion in coding. Feel free to wander
                around this personal website. I&lsquo;ve built it myself with
                React framework.
              </SectionDescription>
            </SectionHeader>
            <SectionHeader>
              <AccentLine />
              <SectionTitle>My background and experiences</SectionTitle>
            </SectionHeader>
            <SectionExperience>
              <CompanyList>
                <CompanyLogo src='/images/itb.png' />
                <CompanyPosition>ITB Alumnus</CompanyPosition>
              </CompanyList>
              <CompanyList>
                <CompanyLogo src='/images/elzatta.png' />
                <CompanyPosition>CSR Elcorps</CompanyPosition>
              </CompanyList>
              <CompanyList>
                <CompanyLogo src='/images/timah.png' />
                <CompanyPosition>Intern PT Timah</CompanyPosition>
              </CompanyList>
              <CompanyList>
                <CompanyLogo src='/images/icon-amadzuki-new.svg' />
                <CompanyPosition>Freelance Web Developer</CompanyPosition>
              </CompanyList>
            </SectionExperience>
          </SectionContent>
        </Section>
        <Section
          backgroundImage={'url("/images/technical_skill_background.jpg")'}
          flexDirection={'column'}
        >
          <SectionHeading mb={'1.5em'}>Technical Skills</SectionHeading>
          <SectionContent>
            {stacks.map((stack, index) => (
              <CardImage
                key={index}
                src={stack.imageSrc}
                alt={stack.imageAlt}
              />
            ))}
          </SectionContent>
        </Section>
        <Section flexDirection={'column'} id='portfolio'>
          <SectionHeading mb={'1em'}>Portfolio of Apps</SectionHeading>
          <SectionContent>
            {appList.map((app, index) => {
              return (
                <CardPortfolio
                  key={index}
                  imagePath={app.imagePath}
                  title={app.title}
                  linkURL={app.linkURL}
                  linkText={app.linkText}
                  description={app.description}
                />
              )
            })}
          </SectionContent>
        </Section>
      </>
    </Layout>
  )
}

export default Home
export { Section }
