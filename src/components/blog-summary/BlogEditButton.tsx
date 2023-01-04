import { AiOutlineEdit } from 'react-icons/all'

interface IBlogEditButtonProps {
  onClick: () => void
}

const BlogEditButton = ({ onClick }: IBlogEditButtonProps) => {
  return (
    <button className='rounded-md' onClick={onClick}>
      <AiOutlineEdit size='1.4rem' color='white' />
    </button>
  )
}

export default BlogEditButton
