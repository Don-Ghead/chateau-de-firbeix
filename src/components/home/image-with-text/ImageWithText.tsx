import Image, { ImageProps } from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useEffect, useRef, useState } from 'react'
import HorizontalDivider from '../../horizontal-divider/HorizontalDivider'

interface IImageWithTextProps {
  /**
   * Defines an array of string paths which point to images
   * The image will rotate through the images when the user hovers over them
   * If you provide a single string then it disables the image rotation behaviour
   * By that same logic the default image which shows when not hovering is
   * the first in the array (index 0)
   */
  imageSrc: string[]
  text: string
  alt: ImageProps['alt']
}

const ImageWithText = ({ text, alt, imageSrc }: IImageWithTextProps) => {
  const [imageSrcIndex, setImageSrcIndex] = useState(0)
  const [intervalId, setIntervalId] = useState<undefined | NodeJS.Timer>(
    undefined
  )

  const startImageRotation = () => {
    const numImages = imageSrc.length
    let interval
    if (numImages !== 1) {
      setImageSrcIndex(imageSrcIndex + 1)
      interval = setInterval(() => {
        if (imageSrcIndex === numImages - 1) {
          setImageSrcIndex(0)
        } else {
          setImageSrcIndex(prevState => prevState + 1)
        }
      }, 2000)
      setIntervalId(interval)
    }
  }

  const resetImageRotation = () => {
    clearInterval(intervalId)
    setIntervalId(undefined)
    setImageSrcIndex(0)
  }

  return (
    <div className='flex w-full min-w-min flex-col gap-3'>
      <div
        onMouseEnter={startImageRotation}
        className='hover:shadow-md'
        onMouseLeave={resetImageRotation}
      >
        <img alt={alt} src={imageSrc[imageSrcIndex]} />
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
