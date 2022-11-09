import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <div className='h-screen w-full bg-chateau-home bg-cover bg-fixed bg-center bg-no-repeat' />
      <h1 className='absolute top-40 left-96 font-title text-6xl text-primary'>
        Welcome to the Chateau de Firbeix
      </h1>
      <div className='h-1/4 w-full bg-tan text-6xl'>
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
    </>
  )
}

export default Home
