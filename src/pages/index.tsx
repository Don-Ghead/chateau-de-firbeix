import type { NextPage } from 'next'
import AppBar from '../components/appbar/AppBar'
import naturalPark from '/public/images/naturalparc-lake.jpg'
import chateauFront from '/public/images/chateau-front.jpg'
import HomeContentSection from '../components/home-content-section/HomeContentSection'
import { chateauIntro } from '../components/home-content-section'

/**
 * TODO - Make appbar hide on scroll down & appear on scroll up
 */

const Home: NextPage = () => {
  return (
    <>
      <AppBar />
      <header>
        <div className='h-[60vh] w-full bg-chateau-home bg-cover bg-fixed bg-center bg-no-repeat' />
      </header>
      <main className='mx-auto flex flex-col items-center'>
        <h1 className='absolute top-40 left-96 font-title text-6xl italic text-primary'>
          Le Château de Firbeix
        </h1>
        <section
          aria-label='overview of the chateau'
          id='overview'
          className='flex h-full w-full flex-col items-center gap-10 bg-tan'
        >
          <h2 className='pt-8 font-title text-6xl italic text-primary'>
            Chez Nous
          </h2>
          <HomeContentSection
            image={chateauFront}
            imageDesc='Photo of Chateau de Firbeix from the front'
            description={chateauIntro}
            ariaLabel='intro to chateau de Firbeix'
            contentOrder='descriptionFirst'
          />
          <div className='w-4/5 border-b-2 border-primary' />
          <HomeContentSection
            image={naturalPark}
            imageDesc={'natural parc Périgord-Limousin'}
            description={chateauIntro}
            ariaLabel='Description of location'
          />
          <div className='w-4/5 border-b-2 border-primary' />
          <section
            aria-label='The amenities at a the Château with slideshow'
            className='flex flex-col items-center'
          >
            {/* IMAGE SLIDESHOW */}
          </section>
        </section>
      </main>
    </>
  )
}

export default Home
