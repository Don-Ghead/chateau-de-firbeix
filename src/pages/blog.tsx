import { NextPage } from 'next'
import { useState } from 'react'
import { trpc } from '../utils/trpc'

const Blog: NextPage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const createBlog = () => {
    try {
      trpc.useMutation(['blog.create'])
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <main>
      <form className='flex flex-col bg-slate-600'>
        <label htmlFor='blog-title'>Title</label>
        <input
          id='blog-title'
          onChange={event => setTitle(event.target.value)}
        />
        <label htmlFor='blog-description'>Description</label>
        <input
          id='blog-description'
          onChange={event => setDescription(event.target.value)}
        />
      </form>
      <button onClick={() => createBlog}>Submit</button>
    </main>
  )
}

export default Blog
