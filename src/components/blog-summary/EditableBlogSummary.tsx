import { useState } from 'react'
import BlogHideButton from './BlogHideButton'
import BlogEditButton from './BlogEditButton'
import { useRouter } from 'next/router'
import BlogDeleteButton from './BlogDeleteButton'
import { trpc } from '../../utils/trpc'
import ConfirmationModal from './ConfirmationModal'
import Link from 'next/link'
import { buttonSizes } from './sharedButtonValues'

export interface IEditableBlog {
  title: string
  content: string
  id: string
  isHidden: boolean
}

interface IEditableBlogSummaryProps {
  blog: IEditableBlog
  showEditButtons?: boolean
}

const EditableBlogSummary = ({
  blog,
  showEditButtons = false,
}: IEditableBlogSummaryProps) => {
  const router = useRouter()
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formChanges, setFormChanges] = useState<IEditableBlog>(blog)
  const btnSize = buttonSizes.md

  const deleteBlog = trpc.useMutation(['blogs.delete'])

  return (
    <article className='flex flex-col gap-2 rounded-sm bg-slate-100 p-4 shadow'>
      <div className='flex flex-row justify-between'>
        <h2 className='pb-2 text-3xl font-bold text-slate-600'>
          <Link href={`/blogs/${encodeURIComponent(formChanges.id)}/detailed`}>
            {formChanges.title}
          </Link>
        </h2>
        {showEditButtons && (
          <div className='flex gap-1'>
            <BlogEditButton
              onClick={() =>
                router.push(
                  `/blogs/${encodeURIComponent(formChanges.id)}/detailed`
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
        )}
      </div>
      <p className='text-slate-500'>{formChanges.content}</p>
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
          deleteBlog.mutate(blog.id)
        }}
      />
    </article>
  )
}

export default EditableBlogSummary
