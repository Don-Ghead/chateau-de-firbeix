import Image, { ImageProps } from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useState } from 'react'
import HorizontalDivider from '../../horizontal-divider/HorizontalDivider'

interface IImageWithTextProps {
  imageSrc: string
  onHoverImgs?: [string]
  text: string
  alt: ImageProps['alt']
}

const ImageWithText = ({ imageSrc, text, alt }: IImageWithTextProps) => {
  const imgSrc = useState(imageSrc)

  return (
    <div className='flex w-full min-w-min flex-col gap-3'>
      <div>
        <img alt={alt} src={imageSrc} />
      </div>
      <div className='flex flex-row items-center justify-between'>
        <p>{text.trim()}</p>
        <FaArrowRightLong className={`h-6 min-w-max pr-1`} />
      </div>
      <div className='w-1/2'>
        <HorizontalDivider />
      </div>
    </div>
  )
}

export default ImageWithText
