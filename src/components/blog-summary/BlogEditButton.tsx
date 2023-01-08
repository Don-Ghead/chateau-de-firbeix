import { AiOutlineEdit } from 'react-icons/ai'
import { buttonSizes, TButtonSizes } from './sharedButtonValues'

interface IBlogEditButtonProps {
  onClick: () => void
  size: TButtonSizes
}

const BlogEditButton = ({
  onClick,
  size = buttonSizes.md,
}: IBlogEditButtonProps) => {
  return (
    <button className='rounded-md' onClick={onClick}>
      <AiOutlineEdit size={size} className='stroke-slate-600' />
    </button>
  )
}

export default BlogEditButton
