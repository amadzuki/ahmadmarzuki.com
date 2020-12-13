import React from 'react'
import { useParams } from 'react-router-dom'
import styled from '@xstyled/styled-components'
import dayjs from 'dayjs'
import ReactHtmlParser from 'react-html-parser'

import Layout from '../components/Layout'

import posts from '../data/posts.json'

const Section = styled.box`
  color: primaryFont;
  background-color: primaryBackground;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Date = styled.h3``

const BlogContent = styled.p`
  line-height: 1.5;
  padding: 1em;
  font-size: 1.5em;
  width: 80vw;
`

const BlogPost = () => {
  const { postTitle } = useParams()

  const { title, content, date } = posts.find((post) => post.slug === postTitle)

  return (
    <Layout headingText={title} backgroundURL='url("/images/BlogImage.jpg")'>
      <Section>
        <Date>
          <time dateTime={date}>{dayjs(date).format('MMMM D, YYYY')}</time>
        </Date>
        <BlogContent>{ReactHtmlParser(content)}</BlogContent>
      </Section>
    </Layout>
  )
}

export default BlogPost
