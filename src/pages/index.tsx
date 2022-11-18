import type { NextPage } from 'next'
import AppBar from '../components/AppBar/AppBar'
import Image from 'next/image'
import naturalPark from '/public/images/naturalparc-lake.jpg'
import chateauFront from '/public/images/chateau-front.jpg'

const Home: NextPage = () => {
  return (
    <>
      <AppBar title={'Chateau de Firbeix'} />
      <header>
        <div className='h-[60vh] w-full bg-chateau-home bg-cover bg-fixed bg-center bg-no-repeat' />
      </header>
      <main className='mx-auto flex flex-col items-center'>
        <h1 className='absolute top-40 left-96 font-title text-6xl text-primary'>
          Welcome to the Château de Firbeix
        </h1>
        <section
          id='overview'
          className='flex h-full w-full flex-col items-center gap-2 bg-tan'
        >
          <h2 className='pb-4 pt-8 font-title text-6xl text-primary'>
            Le Chateau
          </h2>
          <div className='flex items-center gap-2 px-3'>
            <div className='flex-2 flex justify-center text-center'>
              <p className='w-3/4 font-primary text-xl text-primary'>
                Set in the picturesque countryside of the Dordogne is a
                beautiful piece of 14th century French history. This chateau
                resides in the authentically french village of Firbeix, a
                stones-throw away from the Parc naturel régional
                Périgord-Limousin.
              </p>
            </div>
            <Image
              className='rounded-xl'
              src={chateauFront}
              alt='Photo of Chateau de Firbeix from the front'
            />
          </div>

          {/*Trying to figure out a nicer way of spacing stuff than above, not necessary*/}
          <div
            className='flex items-center justify-between
           gap-2 px-3'
          >
            <Image
              alt='natural parc Périgord-Limousin'
              src={naturalPark}
              className='rounded-xl'
            />
            <div className='flex-2 '>
              <p className='w-3/4 font-primary text-xl text-primary'>
                Set in the picturesque countryside of the Dordogne is a
                beautiful piece of 14th century French history. This chateau
                resides in the authentically french village of Firbeix, a
                stones-throw away from the Parc naturel régional
                Périgord-Limousin.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
