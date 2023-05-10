import { BiHide, BiShow } from 'react-icons/bi'
import { buttonSizes, TButtonSizes } from './sharedButtonValues'

interface IShowHideButton {
  isHidden: boolean
  onClick?: (isHidden: boolean) => void
  size: TButtonSizes
  disabled?: boolean
}

const BlogPubliclyVisibleButton = ({
  isHidden,
  onClick,
  size = buttonSizes.md,
  disabled = false,
}: IShowHideButton) => (
  <button
    className='rounded-md'
    disabled={disabled}
    onClick={() => onClick && onClick(!isHidden)}
  >
    {isHidden ? (
      <BiHide size={size} className='stroke-slate-600' />
    ) : (
      <BiShow size={size} className='stroke-slate-600' />
    )}
  </button>
)

export default BlogPubliclyVisibleButton
