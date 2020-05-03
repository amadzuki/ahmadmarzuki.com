import React from "react"
import styled from "@xstyled/styled-components"

import Layout from "../components/Layout"

const Section = styled.main`
  height: 100vh;
  color: primaryFont;
  background-color: primaryBackground;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SectionContent = styled.box`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const SectionHeader = styled.box`
  display: flex;
  flex-direction: column;
`
const SectionHeading = styled.box`
  font-size: 2.5em;
  color: secondaryOrange;
  border-top: 5;
  line-height: 1.5em;
  margin-bottom: 1em;
`
const SectionDescription = styled.box`
  font-size: 1.2em;
  margin: 0.3em;
`

const SectionAside = styled.aside`
  display: flex;
  flex-direction: column;
`

const CompanyList = styled.div`
  display: flex;
  height: 100;
  padding-left: 1em;
  align-items: center;
`
const CompanyLogo = styled.img`
  width: 90;
  height: 90;
`
const CompanyPosition = styled.div`
  padding: 1em;
  font-size: 1.5em;
`

const Home = () => {
  return (
    <Layout headingText="Hello, I'm Marzuki" buttonText="See My Portfolio">
      <Section>
        <SectionContent>
          <SectionHeader maxWidth={500}>
            <SectionHeading maxWidth={450}>
              I'm a Material Engineer turned Web Developer
            </SectionHeading>
            <SectionDescription>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              quae atque, provident iste voluptatum repellat id quod veniam,
              quam sunt eveniet officiis! Voluptatem debitis dicta quaerat
              eligendi minima vitae rem!
            </SectionDescription>
          </SectionHeader>
          <SectionAside>
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
    </Layout>
  )
}

export default Home
