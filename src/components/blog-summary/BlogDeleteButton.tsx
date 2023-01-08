import { AiOutlineDelete } from 'react-icons/ai'
import { buttonSizes, TButtonSizes } from './sharedButtonValues'

interface IBlogDeleteButtonProps {
  onClick: () => void
  size: TButtonSizes
}

const BlogDeleteButton = ({
  onClick,
  size = buttonSizes.md,
}: IBlogDeleteButtonProps) => {
  return (
    <>
      <button className='rounded-md' onClick={onClick}>
        <AiOutlineDelete size={size} className='stroke-slate-600' />
      </button>
    </>
  )
}

export default BlogDeleteButton
