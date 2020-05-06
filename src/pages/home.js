import React from "react"
import styled from "@xstyled/styled-components"

import Layout from "../components/Layout"
import CardPortfolio from "../components/CardPortfolio"

import appList from "../data/appList"

const Section = styled.box`
  color: primaryFont;
  background-color: primaryBackground;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SectionContent = styled.box`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
`
const SectionHeader = styled.box`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
`
const AccentLine = styled.box`
  height: 4;
  background-color: secondaryOrange;
`
const SectionHeading = styled.box`
  font-size: 2.5em;
  color: primaryFont;
  line-height: 1.5em;
`
const SectionDescription = styled.box`
  font-size: 1.2em;
  margin: 1.5em 0;
`

const SectionAside = styled.box`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
`

const CompanyList = styled.div`
  display: flex;
  justify-content: start;
`
const CompanyLogo = styled.img`
  width: 90;
  height: 90;
`
const CompanyPosition = styled.div`
  margin: 1em;
  font-size: 1.7em;
`

const CardImage = styled.img`
  margin: 1em 2em;
`
const SeparatorLine = styled.div`
  width: 70vw;
  height: 6;
  border-radius: 4;
  background-color: secondaryOrange;
  margin-bottom: 3em;
`

const Home = () => {
  return (
    <Layout
      headingText="Hello, I'm Marzuki"
      buttonText="See My Portfolio"
      buttonLink="#portfolio"
      backgroundURL='url("/images/HeroImageHome.jpg")'
    >
      <Section height={"100vh"}>
        <SectionContent>
          <SectionHeader maxWidth={450} mr={50}>
            <AccentLine width={300}></AccentLine>
            <SectionHeading color={"secondaryOrange"}>
              I'm a Material Engineer turned Web Developer
            </SectionHeading>
            <SectionDescription>
              I was graduated as Bachelor of Engineering. Had a taste of working
              as Intern Engineer in PT Timah and CSR at Elcorps and other side
              jobs. But still, it didn't click for me. And now I've found my
              passion in coding. Feel free to wander around this personal
              website. I've built it myself with React framework. I learned this
              all in 2 months from a great programmer.
            </SectionDescription>
          </SectionHeader>
          <SectionAside maxWidth={450}>
            <CompanyList>
              <CompanyLogo src="/images/itb.png"></CompanyLogo>
              <CompanyPosition>Graduated from ITB</CompanyPosition>
            </CompanyList>
            <CompanyList>
              <CompanyLogo src="/images/elzatta.png"></CompanyLogo>
              <CompanyPosition>CSR at Elcorps</CompanyPosition>
            </CompanyList>
            <CompanyList>
              <CompanyLogo src="/images/timah.png"></CompanyLogo>
              <CompanyPosition>Engineer at PT Timah</CompanyPosition>
            </CompanyList>
          </SectionAside>
        </SectionContent>
      </Section>
      <Section
        padding={"2em"}
        backgroundImage={`url("/images/technical_skill_background.jpg")`}
        flexDirection={"column"}
      >
        <SectionHeading mb={"1.5em"}>Technical Skills</SectionHeading>
        <SectionContent>
          <CardImage src="/images/html.svg" alt="" />
          <CardImage src="/images/css.svg" alt="" />
          <CardImage src="/images/javascript.svg" alt="" />
          <CardImage src="/images/react.svg" alt="" />
          <CardImage src="/images/redux.svg" alt="" />
          <CardImage src="/images/figma.svg" alt="" />
        </SectionContent>
      </Section>
      <Section flexDirection={"column"} id="portfolio">
        <SectionHeading fontSize={"3.5em"} m={"1em"}>
          Portfolio of Apps
        </SectionHeading>
        {appList.map((app) => {
          return (
            <CardPortfolio
              imagePath={app.imagePath}
              title={app.title}
              linkURL={app.linkURL}
              linkText={app.linkText}
              description={app.description}
            ></CardPortfolio>
          )
        })}
      </Section>
      <Section height={110} flexDirection={"column"}>
        <SeparatorLine></SeparatorLine>
        <div>Copyright © 2020 Ahmad Marzuki</div>
      </Section>
    </Layout>
  )
}

export default Home
