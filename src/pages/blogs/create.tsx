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
  type: 'TITLE' | 'CONTENT' | 'ID' | 'RESET'
  payload: string
}

const initialState: Blog = {
  title: '',
  content: '',
  isHidden: true,
  id: '',
  publishedDate: new Date(),
  lastEditDate: new Date(),
}

const blogReducer = (state: Blog, action: TBlogReducerAction) => {
  switch (action.type) {
    case 'TITLE':
      return { ...state, title: action.payload }
    case 'CONTENT':
      return { ...state, content: action.payload }
    case 'ID':
      return { ...state, id: action.payload }
    case 'RESET':
      return { ...initialState }
    default:
      return state
  }
}

const validateBlogForm = (formBlog: Blog) => {
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

export const Create: NextPage = () => {
  const [formBlog, blogDispatch] = useReducer(blogReducer, initialState)
  const [formError, setFormError] = useState('')
  const [updateMessage, setUpdateMessage] = useState('')
  const [showPublishConfirmation, setShowPublishConfirmation] = useState(false)
  const [showDiscardConfirmation, setShowDiscardConfirmation] = useState(false)
  const createOrUpdateBlog = trpc.useMutation(['blogs.upsert'], {
    onSuccess: data => {
      !formBlog.id && blogDispatch({ type: 'ID', payload: data.id })
    },
  })
  const isAdmin = useIsAdmin()
  const router = useRouter()

  const saveContentInterval = 5000 // 30000 // 30s

  const handleSaveForm = (publish: boolean) => {
    const formErrors = validateBlogForm(formBlog)
    setFormError(formErrors)
    if (formErrors) {
      setFormError(formErrors)
    } else {
      setFormError('')
      createOrUpdateBlog.mutate(
        {
          id: formBlog.id,
          blogContent: {
            title: formBlog.title,
            content: formBlog.content,
            images: [],
            isHidden: !publish,
          },
        },
        { onSuccess: () => router.push('/blogs') }
      )
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const formErrors = validateBlogForm(formBlog)
      if (!formErrors) {
        setFormError('')
        createOrUpdateBlog.mutate(
          {
            id: formBlog.id,
            blogContent: {
              title: formBlog.title,
              content: formBlog.content,
              images: [],
              isHidden: true,
            },
          },
          {
            onSuccess: blog => {
              console.log('saved blog at ${blog.lastEditDate}')
              setUpdateMessage(
                `Last saved at ${blog.lastEditDate.toLocaleString()}`
              )
            },
          }
        )
      }
    }, saveContentInterval)

    // TODO - make sure this is the right way to clear an interval
    return () => clearInterval(interval)
  })

  if (!isAdmin) return <>Not Authorised!</>

  return (
    <main className='flex justify-center'>
      <div className='mt-5 flex w-3/4 flex-col'>
        <b className='self-start text-3xl font-bold text-slate-500'>
          Create new blog
        </b>
        <b className='text-l py-2 pl-1 text-slate-600'>
          Insert your blog content below, simply drag and and drop images to
          insert them!
        </b>
        <form className='flex flex-col gap-2 rounded-md bg-slate-100 px-8 pt-6 pb-4 shadow-md'>
          <input
            id='blog-title'
            value={formBlog.title}
            className='rounded p-2 text-3xl font-bold text-slate-600 shadow focus:outline-slate-400'
            autoFocus
            placeholder='Title...'
            onChange={event =>
              blogDispatch({ type: 'TITLE', payload: event.target.value })
            }
          />
          <BlogMarkdownEditor
            content={formBlog.content}
            onChange={newContent =>
              blogDispatch({ type: 'CONTENT', payload: newContent })
            }
            onError={err => setFormError(err)}
          />
          {formError && (
            <h3 className='py-1 text-xl font-bold text-red-500'>{formError}</h3>
          )}
          {createOrUpdateBlog.error && (
            <h3 className='text-xl text-red-500 text-opacity-100'>
              {createOrUpdateBlog.error.message}
            </h3>
          )}

          <div className='flex items-center justify-between'>
            {updateMessage && (
              <h3 className='text-l text-green-700 text-opacity-100'>
                {updateMessage}
              </h3>
            )}
            <div className='flex justify-center gap-2 self-end pt-2'>
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
          </div>
        </form>
      </div>
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
        onConfirm={() => blogDispatch({ type: 'RESET', payload: '' })}
      />
    </main>
  )
}

export default Create
