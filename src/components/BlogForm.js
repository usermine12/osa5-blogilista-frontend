import React, { useState } from 'react'

const BlogForm = ({ addBlog }) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const newBlog = {
      title: newTitle,
      author: newAuthor,
      url: newUrl
    }
    addBlog(newBlog)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a new</h2>
      Title:
      <input
        id='blogform-title'
        type='text'
        value={newTitle}
        onChange={({ target }) => setNewTitle(target.value)}
      />
      Author:
      <input
        id='blogform-author'
        type='text'
        value={newAuthor}
        onChange={({ target }) => setNewAuthor(target.value)}
      />
      Url:
      <input type='text'
        id='blogform-url'
        value={newUrl}
        onChange={({ target }) => setNewUrl(target.value)}
      />
      <button id='submit-button' type='submit'>Add Blog</button>
    </form>
  )
}

export default BlogForm