import React from 'react'

import uniqid from 'uniqid'
import { blogposts } from '../../portfolio'
import BlogpostContainer from '../../components/BlogpostContainer/BlogpostContainer'

import Skills from '../../components/Skills/Skills'

const BlogListPage = () => {
  if (!blogposts.length) return null

  return (
    <section id='blog' className='section blogposts'>
      <h2 className='section__title'>Blog</h2>

      <div className='projects__grid'>
        {blogposts.map((blogpost) => (
          <BlogpostContainer key={uniqid()} post={blogpost} />
        ))}
      </div>
      <Skills />
    </section>
  )
}

export default BlogListPage
