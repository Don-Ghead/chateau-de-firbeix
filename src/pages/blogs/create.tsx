import { NextPage } from 'next'
import { useEffect, useReducer, useState } from 'react'
import { trpc } from '../../utils/trpc'
import useIsAdmin from '../../utils/auth/useIsAdmin'
import ConfirmationModal from '../../components/blog-summary/ConfirmationModal'
import { useRouter } from 'next/router'
import 'easymde/dist/easymde.min.css'
import { Blog } from '@prisma/client'
import { BlogMarkdownEditor } from '../../components/blog-markdown-editor/BlogMarkdownEditor'

interface TBlogReducerAction {
  type: 'TITLE' | 'CONTENT' | 'ID'
  payload: string
}

const blogReducer = (state: Blog, action: TBlogReducerAction) => {
  switch (action.type) {
    case 'TITLE':
      return { ...state, title: action.payload }
    case 'CONTENT':
      return { ...state, content: action.payload }
    case 'ID':
      return { ...state, id: action.payload }
    default:
      return state
  }
}

const initialState = {
  title: '',
  content: '',
  isHidden: true,
  id: '',
  publishedDate: new Date(),
}

export const Create: NextPage = () => {
  const [formBlog, setFormBlog] = useReducer(blogReducer, initialState)
  const [formError, setFormError] = useState('')
  const [showPublishConfirmation, setShowPublishConfirmation] = useState(false)
  const [showDiscardConfirmation, setShowDiscardConfirmation] = useState(false)
  const createOrUpdateBlog = trpc.useMutation(['blogs.upsert'], {
    onSuccess: data => {
      !formBlog.id && setFormBlog({ type: 'ID', payload: data.id })
    },
  })
  const isAdmin = useIsAdmin()
  const router = useRouter()

  const saveContentInterval = 30000 // 30s

  const validateForm = () => {
    if (!formBlog.title || !formBlog.content) {
      return 'Fields cannot be empty'
    }
    if (formBlog.title.length > 255) {
      return 'Title cannot exceed 255 characters'
    }
    if (formBlog.content.length > 128000) {
      return 'Blog content is too long'
    }
    return ''
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (formBlog.title.trim() || formBlog.content.trim()) {
        createOrUpdateBlog.mutate({
          id: formBlog.id,
          blogContent: {
            title: formBlog.title,
            content: formBlog.content,
            images: [],
            isHidden: true,
          },
        })
      }
    }, saveContentInterval)

    // TODO - make sure this is the right way to clear an interval
    return () => clearInterval(interval)
  })

  const handleSaveForm = (publish: boolean) => {
    const formErrors = validateForm()
    setFormError(formErrors)
    if (formErrors) {
      setFormError(formErrors)
    } else {
      setFormError('')
      createOrUpdateBlog.mutate({
        id: formBlog.id,
        blogContent: {
          title: formBlog.title,
          content: formBlog.content,
          images: [],
          isHidden: !publish,
        },
      })
      router.push('/blogs')
    }
  }

  if (!isAdmin) return <>Not Authorised!</>

  return (
    <main>
      <form className='mx-10 mt-5 flex flex-col gap-2 rounded-md bg-slate-100 px-8 pt-6 pb-4 shadow-md'>
        <input
          id='blog-title'
          value={formBlog.title}
          className='rounded p-2 text-3xl font-bold text-slate-600 shadow focus:outline-slate-400'
          autoFocus
          placeholder='Title...'
          onChange={event =>
            setFormBlog({ type: 'TITLE', payload: event.target.value })
          }
        />
        <BlogMarkdownEditor
          content={formBlog.content}
          onChange={newContent =>
            setFormBlog({ type: 'CONTENT', payload: newContent })
          }
          onError={err => setFormError(err)}
        />
        {formError && (
          <h3 className='p-2 text-xl font-bold text-red-500'>{formError}</h3>
        )}
        {createOrUpdateBlog.error && (
          <h3 className='text-bold text-xl text-red-500 text-opacity-100'>
            {createOrUpdateBlog.error.message}
          </h3>
        )}
        {createOrUpdateBlog.isSuccess && (
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
        disableConfirmButton={createOrUpdateBlog.isLoading}
        onConfirm={() => handleSaveForm(true)}
      />
      <ConfirmationModal
        title='Discard Work in Progress'
        confirmButtonText='Discard'
        displayText="Are you sure you want to discard this content? It won't be recoverable"
        isOpen={showDiscardConfirmation}
        setIsOpen={setShowDiscardConfirmation}
        disableConfirmButton={createOrUpdateBlog.isLoading}
        onConfirm={() => handleSaveForm(true)}
      />
    </main>
  )
}

export default Create
