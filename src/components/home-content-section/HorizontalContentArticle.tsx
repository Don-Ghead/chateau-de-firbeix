import Image, { ImageProps } from 'next/image'

interface IHomeContentSectionProps {
  image: ImageProps['src']
  imageDesc: string
  description: string
  ariaLabel: string
  contentOrder?: 'imageFirst' | 'descriptionFirst'
}

const HorizontalContentArticle = ({
  image,
  imageDesc,
  description,
  ariaLabel,
  contentOrder = 'imageFirst',
}: IHomeContentSectionProps) => {
  const ImageSection = () => (
    <Image className='rounded-xl' src={image} alt={imageDesc} />
  )

  return (
    <article aria-label={ariaLabel} className='flex items-center px-6'>
      {contentOrder === 'imageFirst' && <ImageSection />}
      <div className='flex-2 flex justify-center text-center'>
        <p className='text-primary w-3/4 font-primary text-xl'>{description}</p>
      </div>
      {contentOrder === 'descriptionFirst' && <ImageSection />}
    </article>
  )
}

export default HorizontalContentArticle
