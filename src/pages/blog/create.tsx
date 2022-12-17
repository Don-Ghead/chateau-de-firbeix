import { NextPage } from 'next'
import { useState } from 'react'
import { trpc } from '../../utils/trpc'

export const Create: NextPage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const createBlog = trpc.useMutation(['blog.create'])

  return (
    <main>
      <form
        onSubmit={event => {
          event.preventDefault()

          if (title && description) {
            createBlog.mutate({
              title: title,
              content: description,
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
    </main>
  )
}

export default Create
