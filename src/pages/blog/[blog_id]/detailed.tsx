import { NextPage } from 'next'
import { useRouter } from 'next/router'
import BlogEditButton from '../../../components/blog-summary/BlogEditButton'
import BlogHideButton from '../../../components/blog-summary/BlogHideButton'
import BlogDeleteButton from '../../../components/blog-summary/BlogDeleteButton'
import DeleteConfirmationModal from '../../../components/blog-summary/DeleteConfirmationModal'
import { trpc } from '../../../utils/trpc'
import { useState } from 'react'
import { IEditableBlog } from '../../../components/blog-summary/EditableBlogSummary'
import useIsAdmin from '../../../utils/auth/useIsAdmin'
import { buttonSizes } from '../../../components/blog-summary/sharedButtonValues'
import TextAreaAutosize from 'react-textarea-autosize'

const Detailed: NextPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [inEditMode, setInEditMode] = useState(false)
  const [formChanges, setFormChanges] = useState<IEditableBlog | undefined>(
    undefined
  )
  const isAdmin = useIsAdmin()
  const router = useRouter()
  const { blog_id } = router.query

  const deleteBlog = trpc.useMutation(['blog.delete'])
  const { isLoading, error } = trpc.useQuery(['blog.get', blog_id as string], {
    onSuccess: data => {
      // only set the current form values the first time we load
      !formChanges && setFormChanges(data)
    },
  })

  if (!blog_id) return <>No Blog ID provided</>

  if (isLoading) return <>Loading...</>

  if (error) return <>{error.message}</>

  if (formChanges)
    return (
      <article className='m-10 flex flex-col gap-2 rounded-md bg-slate-100 p-8 shadow-md'>
        {isAdmin && (
          <div className='flex justify-end gap-2'>
            <BlogEditButton
              size={buttonSizes.lg}
              onClick={() => setInEditMode(!inEditMode)}
            />
            <BlogHideButton
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
          <TextAreaAutosize
            value={formChanges.content.trim()}
            id='blog-description'
            onChange={event =>
              setFormChanges({ ...formChanges, content: event.target.value })
            }
            className='text-md rounded p-2 text-slate-500 shadow focus:outline-slate-400'
          />
        ) : (
          <p className='rounded-sm text-slate-500'>
            {formChanges.content.trim()}
          </p>
        )}
        <DeleteConfirmationModal
          isOpen={showConfirmation}
          setIsOpen={setShowConfirmation}
          disableConfirmButton={deleteBlog.isLoading}
          onConfirm={() => {
            deleteBlog.mutate(formChanges.id)
          }}
        />
      </article>
    )

  // Fallback in case formChanges doesn't behave
  return <>Error Initialising Page</>
}

export default Detailed
