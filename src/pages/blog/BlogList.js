import React from 'react'

import uniqid from 'uniqid'
import { blogposts } from '../../portfolio'
import BlogpostContainer from '../../components/BlogpostContainer/BlogpostContainer'

const BlogListPage = () => {
  if (!blogposts.length) return null

  return (
    <section id='Blog' className='section blogposts'>
      <h2 className='section__title'>Blog</h2>

      <div className='projects__grid'>
        {blogposts.map((blogpost) => (
          <BlogpostContainer key={uniqid()} post={blogpost} />
        ))}
      </div>
    </section>
  )
}

export default BlogListPage