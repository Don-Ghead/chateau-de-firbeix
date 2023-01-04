import { BiHide, BiShow } from 'react-icons/bi'

interface IShowHideButton {
  isHidden: boolean
  onClick: (isHidden: boolean) => void
}

const BlogHideButton = ({ isHidden, onClick }: IShowHideButton) => (
  <button className='rounded-md' onClick={() => onClick(!isHidden)}>
    {isHidden ? (
      <BiHide size='1.5rem' color='white' />
    ) : (
      <BiShow size='1.5rem' color='white' />
    )}
  </button>
)

export default BlogHideButton
