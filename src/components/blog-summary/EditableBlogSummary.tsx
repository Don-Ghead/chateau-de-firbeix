import { IBlog } from './BlogSummary'
import { useState } from 'react'
import BlogHideButton from './BlogHideButton'
import BlogEditButton from './BlogEditButton'
import { useRouter } from 'next/router'
import BlogDeleteButton from './BlogDeleteButton'
import { trpc } from '../../utils/trpc'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import Link from 'next/link'
import { buttonSizes } from './sharedButtonValues'

export interface IEditableBlog extends IBlog {
  isHidden: boolean
}

interface IEditableBlogSummaryProps {
  blog: IEditableBlog
}

const EditableBlogSummary = ({ blog }: IEditableBlogSummaryProps) => {
  const router = useRouter()
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formChanges, setFormChanges] = useState<IEditableBlog>(blog)
  const btnSize = buttonSizes.md

  const deleteBlog = trpc.useMutation(['blog.delete'])

  return (
    <article className='flex flex-col gap-2 rounded-sm bg-slate-500 p-4 shadow-lg'>
      <div className='flex flex-row justify-between'>
        <h2 className='text bold pb-2 text-3xl text-slate-200'>
          <Link href={`blog/${encodeURIComponent(formChanges.id)}/detailed`}>
            {formChanges.title}
          </Link>
        </h2>
        <label htmlFor='blog-title' className='text-2xl text-slate-200'>
          Title
        </label>
        <div className='flex gap-1'>
          <BlogEditButton
            onClick={() =>
              router.push(
                `/blog/${encodeURIComponent(formChanges.id)}/detailed`
              )
            }
            size={btnSize}
          />
          <BlogHideButton
            isHidden={formChanges.isHidden}
            onClick={newHiddenValue =>
              setFormChanges({ ...formChanges, isHidden: newHiddenValue })
            }
            size={btnSize}
          />
          <BlogDeleteButton
            onClick={() => setShowConfirmation(true)}
            size={btnSize}
          />
        </div>
      </div>
      <input
        id='blog-title'
        value={formChanges.title}
        className='rounded-sm bg-slate-200 text-slate-600'
        onChange={event =>
          setFormChanges({ ...formChanges, title: event.target.value })
        }
      />

      <label htmlFor='blog-title' className='text-2xl text-slate-200'>
        Description
      </label>
      <textarea
        rows={3}
        id='blog-description'
        value={formChanges.content}
        className='overflow-ellipsis rounded-sm bg-slate-200 text-slate-600'
        onChange={event =>
          setFormChanges({ ...formChanges, content: event.target.value })
        }
      />
      <DeleteConfirmationModal
        isOpen={showConfirmation}
        setIsOpen={setShowConfirmation}
        disableConfirmButton={deleteBlog.isLoading}
        onConfirm={() => {
          deleteBlog.mutate(blog.id)
        }}
      />
    </article>
  )
}

export default EditableBlogSummary
