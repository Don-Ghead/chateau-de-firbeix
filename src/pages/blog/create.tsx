import { NextPage } from 'next'
import { FormEvent, useEffect, useState } from 'react'
import { trpc } from '../../utils/trpc'
import useIsAdmin from '../../utils/auth/useIsAdmin'

export const Create: NextPage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [formError, setFormError] = useState('')

  const createBlog = trpc.useMutation(['blog.create'])
  const isAdmin = useIsAdmin()

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!title || !description) {
      setFormError('Both fields must be filled in')
    } else {
      setFormError('')
      createBlog.mutate({
        title: title,
        content: description,
        images: [],
      })
    }
  }

  useEffect(() => {
    if (createBlog.isSuccess) {
      setTitle('')
      setDescription('')
    }
  }, [createBlog])

  if (!isAdmin) return <>Not Authorised!</>

  return (
    <main>
      <form
        onSubmit={handleSubmitForm}
        className='mx-3 flex flex-col bg-slate-600 p-3'
      >
        <label htmlFor='blog-title' className='text-slate-200'>
          Title
        </label>
        <input
          id='blog-title'
          value={title}
          className='text-slate-600'
          onChange={event => setTitle(event.target.value)}
        />
        <label htmlFor='blog-description' className='text-slate-200'>
          Description
        </label>
        <input
          id='blog-description'
          value={description}
          className='text-slate-600'
          onChange={event => setDescription(event.target.value)}
        />
        <button type='submit' className='border-slate-200 text-slate-200'>
          Submit
        </button>
        {formError && <h3 className='text-red-600'>{formError}</h3>}
        {createBlog.error && (
          <h3 className='text-red-600'>{createBlog.error.message}</h3>
        )}
        {createBlog.isSuccess && (
          <h3 className='text-green-600'>Successfully Added New Blog!</h3>
        )}
      </form>
    </main>
  )
}

export default Create
