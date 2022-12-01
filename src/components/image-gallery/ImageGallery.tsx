import ReactImageGallery, { ReactImageGalleryProps } from 'react-image-gallery'

interface IImageGalleryProps {
  images: ReactImageGalleryProps['items']
}

const ImageGallery = ({ images }: IImageGalleryProps) => {
  return (
    <div className='w-4/5'>
      <ReactImageGallery items={images} showBullets />
    </div>
  )
}

export default ImageGallery
