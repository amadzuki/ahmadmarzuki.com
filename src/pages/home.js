import React from "react"
import styled from "@xstyled/styled-components"

import Layout from "../components/Layout"
import CardPortfolio from "../components/CardPortfolio"

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
  margin: 0 2em;
`

const Home = () => {
  return (
    <Layout headingText="Hello, I'm Marzuki" buttonText="See My Portfolio">
      <Section height={"100vh"}>
        <SectionContent>
          <SectionHeader maxWidth={450} mr={50}>
            <AccentLine width={300}></AccentLine>
            <SectionHeading color={"secondaryOrange"}>
              I'm a Material Engineer turned Web Developer
            </SectionHeading>
            <SectionDescription>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              quae atque, provident iste voluptatum repellat id quod veniam,
              quam sunt eveniet officiis! Voluptatem debitis dicta quaerat
              eligendi minima vitae rem!
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
        height={366}
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
      <Section flexDirection={"column"}>
        <SectionHeading fontSize={"3.5em"} m={"1em"}>
          Portfolio of Apps
        </SectionHeading>
        <CardPortfolio
          imagePath="/images/screenshot-todo.png"
          title="Todos"
          linkURL="https://todos.ahmadmarzuki.com"
          linkText="todos.ahmadmarzuki.com"
          description="A simple to-do list web app to plan your day. Inspired by Microsoft Todo with different style. Built on basic HTML, CSS, and Vanilla Javascript."
        ></CardPortfolio>
      </Section>
    </Layout>
  )
}

export default Home
