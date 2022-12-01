import { ImageProps } from 'next/image'

interface IVerticalContentArticleProps {
  image: ImageProps['src']
  imageDesc: string
  description: string
  ariaLabel: string
  contentOrder?: 'imageFirst' | 'descriptionFirst'
}

const VerticalContentArticle = ({}: IVerticalContentArticleProps) => {
  return <></>
}

export default VerticalContentArticle
