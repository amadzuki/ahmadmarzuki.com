import React from "react"
import { useParams } from "react-router-dom"
import styled from "@xstyled/styled-components"

import Layout from "../components/Layout"

import posts from "../data/posts"

const Section = styled.box`
  color: primaryFont;
  background-color: primaryBackground;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BlogContent = styled.p`
  line-height: 1.5;
  padding: 1em;
  font-size: 1.5em;
`

const BlogPost = () => {
  const { postTitle } = useParams()

  const { title, content } = posts.find((post) => post.slug === postTitle)
  return (
    <Layout
      headingText={title}
      buttonText="Read"
      backgroundURL='url("/images/BlogImage.png")'
    >
      <Section>
        <BlogContent>{content}</BlogContent>
      </Section>
    </Layout>
  )
}

export default BlogPost
