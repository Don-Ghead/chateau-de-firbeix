import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { trpc } from '../../utils/trpc'
import useIsAdmin from '../../utils/auth/useIsAdmin'
import TextAreaAutosize from 'react-textarea-autosize'
import ConfirmationModal from '../../components/blog-summary/ConfirmationModal'
import { useRouter } from 'next/router'

export const Create: NextPage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [formError, setFormError] = useState('')
  const [showPublishConfirmation, setShowPublishConfirmation] = useState(false)
  const [showDiscardConfirmation, setShowDiscardConfirmation] = useState(false)
  const createBlog = trpc.useMutation(['blogs.create'])
  const isAdmin = useIsAdmin()
  const router = useRouter()

  const handleSaveForm = (publish: boolean) => {
    if (!title || !description) {
      setFormError('Both fields must be filled in')
    } else {
      setFormError('')
      createBlog.mutate({
        title: title,
        content: description,
        images: [],
        isHidden: !publish,
      })
    }
  }

  useEffect(() => {
    if (createBlog.isSuccess && !createBlog.isLoading) {
      setTitle('')
      setDescription('')
    }
  }, [createBlog.isSuccess, createBlog.isLoading])

  if (!isAdmin) return <>Not Authorised!</>

  return (
    <main>
      <form className='mx-10 mt-5 flex flex-col gap-2 rounded-md bg-slate-100 px-8 pt-6 pb-4 shadow-md'>
        <input
          id='blog-title'
          value={title}
          className='rounded p-2 text-3xl font-bold text-slate-600 shadow focus:outline-slate-400'
          autoFocus
          placeholder='Title...'
          onChange={event => setTitle(event.target.value)}
        />
        <TextAreaAutosize
          value={description.trim()}
          id='blog-description'
          placeholder='Content...'
          onChange={event => setDescription(event.target.value)}
          className='text-md rounded p-2 text-slate-500 shadow focus:outline-slate-400'
        />
        {formError && (
          <h3 className='p-2 text-xl font-bold text-red-500'>{formError}</h3>
        )}
        {createBlog.error && (
          <h3 className='text-bold text-xl text-yellow-500'>
            {createBlog.error.message}
          </h3>
        )}
        {createBlog.isSuccess && (
          <h3 className='text-green-600'>Successfully Added New Blog!</h3>
        )}
        <div className='flex justify-center gap-2 pt-2'>
          <button
            onClick={event => {
              event.preventDefault()
              setShowDiscardConfirmation(true)
            }}
            className='rounded-md bg-red-500 px-3 py-1 text-xl text-white shadow'
          >
            Discard
          </button>
          <button
            onClick={event => {
              event.preventDefault()
              handleSaveForm(false)
            }}
            className='rounded-md bg-white px-3 py-1 text-xl text-slate-600 shadow'
          >
            Save
          </button>
          <button
            onClick={event => {
              event.preventDefault()
              setShowPublishConfirmation(true)
            }}
            className='rounded-md bg-white px-3 py-1 text-xl text-slate-600 shadow'
          >
            Publish
          </button>
        </div>
      </form>
      <ConfirmationModal
        severity='success'
        title='Publish Blog To Website'
        confirmButtonText='Publish'
        displayText='Are you sure you want to publish this blog? You can hide, edit and delete it from the edit screen.'
        isOpen={showPublishConfirmation}
        setIsOpen={setShowPublishConfirmation}
        disableConfirmButton={createBlog.isLoading}
        onConfirm={() => handleSaveForm(true)}
      />
      <ConfirmationModal
        title='Discard Work in Progress'
        confirmButtonText='Discard'
        displayText="Are you sure you want to discard this content? It won't be recoverable"
        isOpen={showDiscardConfirmation}
        setIsOpen={setShowDiscardConfirmation}
        disableConfirmButton={createBlog.isLoading}
        onConfirm={() => handleSaveForm(true)}
      />
    </main>
  )
}

export default Create
