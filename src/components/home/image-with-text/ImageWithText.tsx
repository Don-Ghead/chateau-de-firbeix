import Image, { ImageProps } from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useEffect, useRef, useState } from 'react'
import HorizontalDivider from '../../horizontal-divider/HorizontalDivider'
import Link from 'next/link'

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
  href: string
}

const ImageWithText = ({ text, alt, imageSrc, href }: IImageWithTextProps) => {
  const [imageSrcIndex, setImageSrcIndex] = useState(0)
  const [intervalId, setIntervalId] = useState<undefined | NodeJS.Timer>(
    undefined
  )
  const imageIndexRef = useRef(0)

  useEffect(() => {
    imageIndexRef.current = imageSrcIndex
  }, [])
  const startImageRotation = () => {
    const numImages = imageSrc.length
    let interval
    if (numImages !== 1) {
      // this is just so we change the image the first time we hover over an image
      // and then we start the interval slideshow
      setImageSrcIndex(imageSrcIndex + 1)
      interval = setInterval(() => {
        console.log(imageIndexRef.current)
        if (imageIndexRef.current === numImages - 1) {
          console.log('reset index')
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
    <Link href={href}>
      <div className='flex w-full min-w-min cursor-pointer flex-col gap-3'>
        <div
          onMouseEnter={startImageRotation}
          className='hover:shadow-md transition-shadow duration-300'
          onMouseLeave={resetImageRotation}
        >
          <img alt={alt} src={imageSrc[imageSrcIndex]} />
        </div>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-chateau-secondary transition-colors duration-300 hover:text-opacity-75'>{text.trim()}</p>
          <FaArrowRightLong className='h-6 min-w-max pr-1 text-chateau-secondary transition-colors duration-300 hover:text-opacity-75' />
        </div>
        <div className='w-1/2'>
          <HorizontalDivider />
        </div>
      </div>
    </Link>
  )
}

export default ImageWithText
