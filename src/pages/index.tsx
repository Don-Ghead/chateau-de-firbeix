import type { NextPage } from 'next'
import ImageGallery from '../components/image-gallery/ImageGallery'
import { images } from '../components/image-gallery'
import HorizontalDivider from '../components/horizontal-divider/HorizontalDivider'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chateau de Firbeix</title>
      </Head>
      <header>
        <div className='h-screen w-full bg-chateau-home bg-cover bg-fixed bg-center bg-no-repeat' />
      </header>
      <main className='mx-auto flex flex-col items-center'>
        <div className='absolute left-1/2'>
          <h1 className='text-primary relative bottom-20 -left-1/2 font-title text-6xl italic'>
            Le Château de Firbeix
          </h1>
        </div>
        <section
          aria-label='overview of the chateau'
          id='overview'
          className='bg-tan flex h-full w-full flex-col items-center gap-5'
        >
          {/*<h2 className='text-primary pt-8 font-title text-6xl italic'>*/}
          {/*  Chez Nous*/}
          {/*</h2>*/}
          <p className='mx-56 pt-16 text-center text-2xl'>
            A beautiful piece of 14th century French history residing in the
            authentically French village of Firbeix surrounded by the
            picturesque countryside of the Dordogne.
          </p>
          <HorizontalDivider />

          <section
            aria-label='The amenities at the Château with slideshow'
            className='flex flex-col items-center'
          >
            <ImageGallery images={images} />
          </section>
        </section>
      </main>
    </>
  )
}

export default Home
