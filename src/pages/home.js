import React from "react"
import styled from "@xstyled/styled-components"

import Layout from "../components/Layout"

const Section = styled.box`
  height: 100vh;
  background-color: secondaryBackground;
`
// const SectionHeader = styled.box`
// `

const Home = () => {
  return (
    <Layout>
      <Section></Section>
    </Layout>
  )
}

export default Home