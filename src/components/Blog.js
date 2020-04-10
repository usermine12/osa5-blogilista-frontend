import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import blogService from '../services/blogs.js'

const BlogMeta = ({ blog }) => {
  const [blogState, setBlogState] = useState(blog)
  const user = useSelector(state => state.user)

  const removeForm = () => (
    <form onSubmit={removeBlog}>
      <button type='submit'>remove</button>
    </form>
  )

  const addLike = event => {
    event.preventDefault()
    const newBlog = {
      ...blogState,
      likes: blogState.likes + 1
    }
    blogService.update(newBlog, blog.id)
    setBlogState(newBlog)
  }

  const removeBlog = () => {
    if (window.confirm(`Delete ${blogState.title} blog?`)) {
      blogService.remove(blogState.id)
    }
  }

  return (
    <>
      {blogState.url} <br />
      likes: {blogState.likes}
      <form onSubmit={(event) => addLike(event)}>
        <button type='submit'>like</button> <br />
      </form>
      {blogState.user.name} <br />
      {user.name === blog.user.name
        ? removeForm()
        : null
      }
    </>
  )
}

const Blog = ({ blog, user, id }) => {
  const [metaVisible, setMetaVisible] = useState(false)

  const showMeta = () => (
    <div>
      <BlogMeta blog={blog} user={user} />
      <form onSubmit={event => {
        event.preventDefault()
        setMetaVisible(!metaVisible)}
      } className='visibleMeta'>
        <button type='submit'>hide</button>
      </form>
    </div>
  )

  const hideMeta = () => (
    <form onSubmit={event => {
      event.preventDefault()
      setMetaVisible(!metaVisible)}
    } className='hiddenMeta'>
      <button id={`${id}-button`} type='submit'>view</button>
    </form>
  )

  return (
    <div className='blogView'>
      {blog.title} {blog.author}
      {metaVisible
        ? showMeta()
        : hideMeta()}
    </div>
  )
}

export default Blog
