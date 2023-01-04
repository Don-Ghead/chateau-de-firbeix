import { AiOutlineDelete } from 'react-icons/all'

interface IBlogDeleteButtonProps {
  onClick: () => void
}

const BlogDeleteButton = ({ onClick }: IBlogDeleteButtonProps) => {
  return (
    <>
      <button className='rounded-md' onClick={onClick}>
        <AiOutlineDelete size='1.4rem' color='white' />
      </button>
    </>
  )
}

export default BlogDeleteButton
