import type { NextPage } from 'next'
import HorizontalDivider from '../components/horizontal-divider/HorizontalDivider'
import Head from 'next/head'
import InfoPanel from '../components/InfoPanel/InfoPanel'

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
          <HorizontalDivider />
          <div className='pt-8 pb-14'>
            <InfoPanel />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
