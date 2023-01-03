import { IBlogSummaryProps } from './BlogSummary'
import Link from 'next/link'
import { BiHide, BiShow } from 'react-icons/bi'

interface IEditableBlogSummaryProps extends IBlogSummaryProps {
  canEdit?: boolean
  isHidden?: boolean
}

interface IShowHideButton {
  isHidden: boolean
  onClick: (isHidden: boolean) => void
}

const ShowHideButton = ({ isHidden, onClick }: IShowHideButton) => (
  <>
    {isHidden ? (
      <button className='rounded-md bg-slate-200'>
        <BiHide size='1.5rem' color='white' />
      </button>
    ) : (
      <BiShow size='1.5rem' color='white' />
    )}
  </>
)

const EditableBlogSummary = ({
  title,
  content,
  id,
  canEdit = true,
  isHidden = false,
}: IEditableBlogSummaryProps) => {
  return (
    <article key={id} className='rounded-lg bg-slate-500 p-2'>
      <div className='flex flex-row justify-between'>
        <label htmlFor='blog-title' className='text-slate-200'>
          Title
        </label>
        <input
          id='blog-title'
          value={title}
          className='text-slate-600'
          onChange={event => console.log(event.target.value)}
        />
        <ShowHideButton
          isHidden={isHidden}
          onClick={newHiddenValue => console.log(newHiddenValue)}
        />
      </div>
      <p className='text-slate-200'>{content}</p>
    </article>
  )
}

export default EditableBlogSummary
