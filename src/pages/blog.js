import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import styled from '@xstyled/styled-components'

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
const PostLink = styled.p`
  font-size: 2em;
`
const Blog = () => {
  const match = useRouteMatch()

  return (
    <Layout
      headingText='Blog'
      buttonText='Read My Articles'
      buttonLink='#posts'
      backgroundURL='url("/images/BlogImage.jpg")'
    >
      <Section id='posts'>
        {posts.map((post, index) => {
          return (
            <PostLink key={index}>
              <Link
                to={`${match.url}/${post.slug}`}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                {post.title}
              </Link>
            </PostLink>
          )
        })}
      </Section>
    </Layout>
  )
}

export default Blog
