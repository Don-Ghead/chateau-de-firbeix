import type { NextPage } from 'next'
import naturalPark from '/public/images/naturalparc-lake.jpg'
import chateauFront from '/public/images/chateau-front.jpg'
import chateauHomepage from '/public/images/chateau-homepage.jpeg'
import HorizontalContentArticle from '../components/home-content-section/HorizontalContentArticle'
import { chateauIntro } from '../components/home-content-section'
import ImageGallery from '../components/image-gallery/ImageGallery'
import { images } from '../components/image-gallery'
import HorizontalDivider from '../components/horizontal-divider/HorizontalDivider'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'
import { config } from '@react-spring/core'

/**
 * TODO - Make appbar work with parallax container
 */

const Home: NextPage = () => {
  const ref = useRef<IParallax>(null)

  return (
    <>
      {/*<header>*/}
      {/*  <div className='h-screen w-full bg-chateau-home bg-cover bg-fixed bg-center bg-no-repeat' />*/}
      {/*</header>*/}
      <main>
        <Parallax pages={2} ref={ref} config={{ ...config.stiff, clamp: true }}>
          <ParallaxLayer
            offset={0}
            speed={0.001}
            style={{
              backgroundImage: `url(${chateauHomepage.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <ParallaxLayer
            offset={0}
            speed={0}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingBottom: '1rem',
            }}
          >
            <h1 className='text-primary font-title text-6xl italic'>
              Le Château de Firbeix
            </h1>
          </ParallaxLayer>
          <ParallaxLayer offset={0.99} factor={3} speed={1}>
            <section
              aria-label='overview of the chateau'
              id='overview'
              className='bg-tan flex h-full w-full flex-col items-center gap-10'
            >
              <h2 className='text-primary pt-8 font-title text-6xl italic'>
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
          </ParallaxLayer>
        </Parallax>
      </main>
    </>
  )
}

export default Home
