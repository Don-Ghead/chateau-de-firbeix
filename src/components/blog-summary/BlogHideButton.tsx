import { BiHide, BiShow } from 'react-icons/bi'
import { buttonSizes, TButtonSizes } from './sharedButtonValues'

interface IShowHideButton {
  isHidden: boolean
  onClick: (isHidden: boolean) => void
  size: TButtonSizes
}

const BlogHideButton = ({
  isHidden,
  onClick,
  size = buttonSizes.md,
}: IShowHideButton) => (
  <button className='rounded-md' onClick={() => onClick(!isHidden)}>
    {isHidden ? (
      <BiHide size={size} className='stroke-slate-600' />
    ) : (
      <BiShow size={size} className='stroke-slate-600' />
    )}
  </button>
)

export default BlogHideButton
