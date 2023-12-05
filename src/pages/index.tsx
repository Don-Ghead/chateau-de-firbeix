import type { NextPage } from 'next'
import HorizontalDivider from '../components/horizontal-divider/HorizontalDivider'
import Head from 'next/head'
import InfoPanel from '../components/home/info-panel/InfoPanel'
import ImageWithText from '../components/home/image-with-text/ImageWithText'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chateau de Firbeix</title>
      </Head>
      <header aria-label='wide angle view of the chateau'>
        <div className='h-screen w-full bg-chateau-home bg-cover bg-fixed bg-center bg-no-repeat' />
      </header>
      <main className='mx-auto flex flex-col items-center'>
        <section
          aria-label='overview of the chateau'
          id='overview'
          className='flex h-full w-full flex-col items-center gap-5'
        >
          <p className='w-3/5 pt-12 text-center text-3xl italic'>
            A beautiful piece of 14th century French history residing in the
            authentically French village of Firbeix surrounded by the
            picturesque countryside of the Dordogne.
          </p>
          <div className='w-1/3'>
            <HorizontalDivider />
          </div>
          <div className='pt-8 pb-10'>
            <InfoPanel />
          </div>
          <div className='mx-2 flex flex-1 flex-row gap-8 px-4 pb-14'>
            <ImageWithText
              alt='surrounding area'
              imageSrc='/images/home-gallery/chateau-explore-area.jpg'
              text={'Discover the area'}
            />
            <ImageWithText
              alt='view of the gites'
              imageSrc='/images/home-gallery/french-2.jpg'
              text={'Explore our gites'}
            />
            <ImageWithText
              alt='Pool and sunchairs'
              imageSrc='/images/home-gallery/pool-amenity.jpg'
              text={'Shared Spaces & Events'}
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
