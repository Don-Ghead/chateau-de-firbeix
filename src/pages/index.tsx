import type { NextPage } from 'next'
import AppBar from '../components/appbar/AppBar'
import naturalPark from '/public/images/naturalparc-lake.jpg'
import chateauFront from '/public/images/chateau-front.jpg'
import HorizontalContentArticle from '../components/home-content-section/HorizontalContentArticle'
import { chateauIntro } from '../components/home-content-section'
import ImageGallery from '../components/image-gallery/ImageGallery'
import { images } from '../components/image-gallery'
import HorizontalDivider from '../components/horizontal-divider/HorizontalDivider'

/**
 * TODO - Make appbar hide on scroll down & appear on scroll up
 */

const Home: NextPage = () => {
  return (
    <>
      <AppBar />
      <header>
        <div className='h-screen w-full bg-chateau-home bg-cover bg-fixed bg-center bg-no-repeat' />
      </header>
      <main className='mx-auto flex flex-col items-center'>
        <div className='absolute left-1/2'>
          <h1 className='relative bottom-20 -left-1/2 font-title text-6xl italic text-primary'>
            Le Château de Firbeix
          </h1>
        </div>
        <section
          aria-label='overview of the chateau'
          id='overview'
          className='flex h-full w-full flex-col items-center gap-10 bg-tan'
        >
          <h2 className='pt-8 font-title text-6xl italic text-primary'>
            Chez Nous
          </h2>
          <HorizontalContentArticle
            image={chateauFront}
            imageDesc='Photo of Chateau de Firbeix from the front'
            description={chateauIntro}
            ariaLabel='intro to chateau de Firbeix'
            contentOrder='descriptionFirst'
          />
          <HorizontalDivider />
          <HorizontalContentArticle
            image={naturalPark}
            imageDesc={'natural parc Périgord-Limousin'}
            description={chateauIntro}
            ariaLabel='Description of location'
          />
          <HorizontalDivider />
          <section
            aria-label='The amenities at a the Château with slideshow'
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
