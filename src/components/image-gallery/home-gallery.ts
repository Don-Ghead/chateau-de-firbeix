import french1 from '/public/images/home-gallery/french-1.jpeg'
import french2 from '/public/images/home-gallery/french-2.jpg'
import french3 from '/public/images/home-gallery/french-3.jpg'
import french4 from '/public/images/home-gallery/french-4.jpg'
import french5 from '/public/images/home-gallery/french-5.jpg'
import french6 from '/public/images/home-gallery/french-6.webp'
import french7 from '/public/images/home-gallery/french-7.jpg'
import french8 from '/public/images/home-gallery/french-8.webp'
import french9 from '/public/images/home-gallery/french-9.jpg'
import french10 from '/public/images/home-gallery/french-10.webp'
import { ReactImageGalleryProps } from 'react-image-gallery'

// export const images = [
//   french1,
//   french2,
//   french3,
//   french4,
//   french5,
//   french6,
//   french7,
//   french8,
//   french9,
//   french10,
// ]

export const images: ReactImageGalleryProps['items'] = [
  {
    original: french1.src,
    thumbnail: french1.src,
    originalWidth: 1920,
    originalHeight: 1080,
  },
  {
    original: french2.src,
    thumbnail: french2.src,
    originalWidth: 1920,
    originalHeight: 1080,
  },
  {
    original: french3.src,
    thumbnail: french3.src,
    originalWidth: 1920,
    originalHeight: 1080,
  },
  {
    original: french4.src,
    thumbnail: french4.src,
    originalWidth: 1920,
    originalHeight: 1080,
  },
  {
    original: french5.src,
    thumbnail: french5.src,
    originalWidth: 1920,
    originalHeight: 1080,
  },
]
