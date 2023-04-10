import { useState } from 'react'
import BlogHideButton from './BlogHideButton'
import BlogEditButton from './BlogEditButton'
import { useRouter } from 'next/router'
import BlogDeleteButton from './BlogDeleteButton'
import ConfirmationModal from './ConfirmationModal'
import Link from 'next/link'
import { buttonSizes } from './sharedButtonValues'
import { Blog } from '@prisma/client'

interface IEditableBlogSummaryProps {
  blog: Blog
  showEditButtons?: boolean
  onDelete: () => void
}

const EditableBlogSummary = ({
  blog,
  showEditButtons = false,
  onDelete,
}: IEditableBlogSummaryProps) => {
  const router = useRouter()
  const [showConfirmation, setShowConfirmation] = useState(false)
  const btnSize = buttonSizes.md

  return (
    <article className='flex flex-col gap-2 rounded-sm bg-slate-100 p-4 shadow'>
      <div className='flex flex-row justify-between'>
        <h2 className='pb-2 text-3xl font-bold text-slate-600'>
          <Link href={`/blogs/${encodeURIComponent(blog.id)}/detailed`}>
            {blog.title}
          </Link>
        </h2>
        {showEditButtons && (
          <div className='flex gap-1'>
            <BlogEditButton
              onClick={() =>
                router.push(`/blogs/${encodeURIComponent(blog.id)}/detailed`)
              }
              size={btnSize}
            />
            <BlogHideButton isHidden={blog.isHidden} disabled size={btnSize} />
            <BlogDeleteButton
              onClick={() => setShowConfirmation(true)}
              size={btnSize}
            />
          </div>
        )}
      </div>
      <p className='text-slate-500'>{blog.content}</p>
      <ConfirmationModal
        title='Delete Blog'
        confirmButtonText='Delete'
        displayText={
          "Are you sure you want to delete this blog? If you're not sure you can just hide it temporarily. This action cannot be undone"
        }
        isOpen={showConfirmation}
        setIsOpen={setShowConfirmation}
        onConfirm={onDelete}
      />
    </article>
  )
}

export default EditableBlogSummary
