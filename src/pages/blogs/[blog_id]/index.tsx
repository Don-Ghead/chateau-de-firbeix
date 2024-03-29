import { NextPage } from 'next'
import { useRouter } from 'next/router'
import BlogEditButton from '../../../components/blog-summary/BlogEditButton'
import BlogPubliclyVisibleButton from '../../../components/blog-summary/BlogPubliclyVisibleButton'
import BlogDeleteButton from '../../../components/blog-summary/BlogDeleteButton'
import ConfirmationModal from '../../../components/blog-summary/ConfirmationModal'
import { trpc } from '../../../utils/trpc'
import { useState } from 'react'
import useIsAdmin from '../../../utils/auth/useIsAdmin'
import { buttonSizes } from '../../../components/blog-summary/sharedButtonValues'
import TextAreaAutosize from 'react-textarea-autosize'
import BlogSkeleton from '../../../components/blog-summary/BlogSkeleton'
import { Blog } from '@prisma/client'
import { BlogMarkdownEditor } from '../../../components/blog-markdown-editor/BlogMarkdownEditor'

const Detailed: NextPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [inEditMode, setInEditMode] = useState(false)
  const [formChanges, setFormChanges] = useState<Blog | undefined>(undefined)
  const [formError, setFormError] = useState('')
  const isAdmin = useIsAdmin()
  const router = useRouter()
  const { blog_id } = router.query

  const deleteBlog = trpc.useMutation(['blogs.delete'])
  const { isLoading, error } = trpc.useQuery(['blogs.get', blog_id as string], {
    onSuccess: data => {
      // only set the current form values the first time we load
      !formChanges && setFormChanges(data)
    },
    onError: err => {
      setFormError(err.message)
    },
  })

  if (!blog_id) return <>No Blog ID provided</>

  if (isLoading) return <BlogSkeleton />

  // TODO - Replace content Input with EasyMDE
  return (
    <>
      <h3 className='text-bold py-5 text-center text-2xl font-bold text-red-600'>
        {error && error.message}
      </h3>
      {formChanges && (
        <article className='mx-10 flex flex-col gap-2 rounded-md bg-slate-100 p-8 shadow-md'>
          {isAdmin && (
            <div className='flex justify-end gap-2'>
              <BlogEditButton
                size={buttonSizes.lg}
                onClick={() => setInEditMode(!inEditMode)}
              />
              <BlogPubliclyVisibleButton
                isHidden={formChanges.isHidden}
                size={buttonSizes.lg}
                onClick={newHiddenValue =>
                  setFormChanges({ ...formChanges, isHidden: newHiddenValue })
                }
              />
              <BlogDeleteButton
                size={buttonSizes.lg}
                onClick={() => setShowConfirmation(true)}
              />
            </div>
          )}
          {inEditMode ? (
            <input
              id='blog-title'
              value={formChanges.title.trim()}
              className='rounded p-2 text-3xl font-bold text-slate-600 shadow focus:outline-slate-400'
              placeholder='Blog Title'
              onChange={event =>
                setFormChanges({ ...formChanges, title: event.target.value })
              }
            />
          ) : (
            <h1 className='rounded-sm text-3xl font-bold text-slate-600'>
              {formChanges.title.trim()}
            </h1>
          )}
          {inEditMode ? (
            <BlogMarkdownEditor
              content={formChanges.content.trim()}
              onChange={updatedContent =>
                setFormChanges({ ...formChanges, content: updatedContent })
              }
              onError={setFormError}
            />
          ) : (
            <p className='text-lg text-slate-500'>{formChanges.content}</p>
          )}
          <ConfirmationModal
            title='Delete Blog'
            confirmButtonText='Delete'
            displayText={
              "Are you sure you want to delete this blog? If you're not sure you can just hide it temporarily. This action cannot be undone"
            }
            isOpen={showConfirmation}
            setIsOpen={setShowConfirmation}
            disableConfirmButton={deleteBlog.isLoading}
            onConfirm={() => {
              deleteBlog.mutate(formChanges.id)
            }}
          />
        </article>
      )}
    </>
  )
}

export default Detailed
