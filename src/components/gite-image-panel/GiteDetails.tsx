import ImageGallery from '../image-gallery/ImageGallery'
import GiteInfoPanel from './GiteInfoPanel'

interface IGiteDetailsProps {
  giteName: string
}

const GiteDetails = ({ giteName }: IGiteDetailsProps) => {
  const images = [
    {
      original: '/images/home-gallery/pool-amenity.jpg',
      thumbnail: '/images/home-gallery/pool-amenity.jpg',
      originalWidth: 1920,
      originalHeight: 1080,
    },
    {
      original: '/images/home-gallery/chateau-explore-area.jpg',
      thumbnail: '/images/home-gallery/chateau-explore-area.jpg',
      originalWidth: 1920,
      originalHeight: 1080,
    },
    {
      original: '/images/home-gallery/french-2.jpg',
      thumbnail: '/images/home-gallery/french-2.jpg',
      originalWidth: 1920,
      originalHeight: 1080,
    },
  ]

  return (
    <div className='flex w-full flex-col gap-8 pb-8'>
      <GiteInfoPanel />
        
      <div className='flex w-full justify-center'>
          <ImageGallery images={images} />
      </div>
      
      <div className='prose w-2/3 px-8 text-chateau-secondary self-center'>
        <h2 className='text-2xl font-bold'>Description</h2>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className='text-lg'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default GiteDetails 