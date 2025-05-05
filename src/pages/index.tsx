import type { NextPage } from 'next'
import Image from 'next/image'
import HorizontalDivider from '../components/horizontal-divider/HorizontalDivider'
import InfoPanel from '../components/home/info-panel/InfoPanel'
import ImageWithText from '../components/home/image-with-text/ImageWithText'

const Home: NextPage = () => {
  return (
    <>
      {/* Main viewport wrapper */}
      <div className='flex h-[85vh] w-full flex-col'>
        {/* Image container - Make it relative */}
        <div className='relative w-full flex-grow bg-chateau-home bg-cover bg-fixed bg-center bg-no-repeat'>
          {/* Centering using absolute positioning and transform */}
          <div className='absolute top-0 left-1/2 -translate-x-1/2'>
            {/* Use next/image for the logo with primary background */}
            <Image
              className='bg-chateau-primary bg-opacity-80'
              src='/chateau-logo.png'
              alt='Chateau de Firbeix Logo'
              layout='intrinsic'
              width={270}
              height={185}
              priority
            />
          </div>
        </div>
        {/* Content section (blurb, divider, insta) */}
        <div className='flex flex-col items-center gap-4 p-6'>
          <p className='w-3/5 text-center text-3xl italic text-chateau-secondary'>
            A beautiful piece of 14th century French history residing in the
            authentically French village of Firbeix surrounded by the
            picturesque countryside of the Dordogne.
          </p>
          <div className='w-1/3'>
            <HorizontalDivider />
          </div>
          <div
            className='bg-gradient-to-r from-yellow-500 via-pink-500
                        to-purple-600 bg-clip-text py-2
                        font-semibold text-transparent 
                        transition-opacity duration-300 hover:opacity-80'
          >
            <a
              href='https://www.instagram.com/chateaudefirbeix/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Chateau de Firbeix on Instagram'
              className='flex flex-row items-center gap-4'
            >
              <img
                src='/Instagram_icon.png'
                alt='Instagram logo'
                className='h-12 w-12'
              />
              <p className='font-title text-4xl'>Chateau de Firbeix</p>
            </a>
          </div>
        </div>
      </div>

      <main className='mx-auto flex flex-col items-center'>
        <section
          id='overview'
          className='flex h-full w-full flex-col items-center gap-5 pt-5'
        >
          <div className='pt-2 pb-10'>
            <InfoPanel />
          </div>
          <div className='mx-2 flex flex-1 flex-row gap-8 px-4 pb-14'>
            <ImageWithText
              alt='view of the gites'
              href='/gites'
              imageSrc={[
                '/images/home-gallery/french-2.jpg',
                '/images/home-gallery/pool-amenity.jpg',
                '/images/home-gallery/chateau-explore-area.jpg',
              ]}
              text={'Explore our gites'}
            />
            <ImageWithText
              alt='surrounding area'
              href='/explore'
              imageSrc={[
                '/images/home-gallery/chateau-explore-area.jpg',
                '/images/home-gallery/french-2.jpg',
                '/images/home-gallery/pool-amenity.jpg',
              ]}
              text={'Events'}
            />
            <ImageWithText
              alt='Pool and sunchairs'
              href='/explore'
              imageSrc={[
                '/images/home-gallery/pool-amenity.jpg',
                '/images/home-gallery/chateau-explore-area.jpg',
                '/images/home-gallery/french-2.jpg',
              ]}
              text={'Shared Spaces & Amenities'}
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
