import { NextPage } from 'next'
import { useState } from 'react'
import { trpc } from '../utils/trpc'

const Blog: NextPage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const createBlog = trpc.useMutation(['blog.create'])
  const { data: blogs, isLoading, error } = trpc.useQuery(['blog.getAll'])

  if (isLoading) return <h2>Loading...</h2>

  if (error) return <h2>Error Occurred</h2>

  return (
    <main>
      <h1 className='pt-4 text-3xl'>Chateau de Firbeix Blogs</h1>
      <form
        onSubmit={event => {
          event.preventDefault()

          if (title && description) {
            createBlog.mutate({
              title: title,
              description: description,
              images: [],
            })
          }

          setTitle('')
          setDescription('')
        }}
        className='mx-3 flex flex-col bg-slate-600 p-3'
      >
        <label htmlFor='blog-title'>Title</label>
        <input
          id='blog-title'
          value={title}
          className='text-slate-600'
          onChange={event => setTitle(event.target.value)}
        />
        <label htmlFor='blog-description'>Description</label>
        <input
          id='blog-description'
          value={description}
          className='text-slate-600'
          onChange={event => setDescription(event.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      <section>
        {blogs &&
          blogs.map(blog => (
            <div key={blog.title}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
          ))}
      </section>
    </main>
  )
}

export default Blog
