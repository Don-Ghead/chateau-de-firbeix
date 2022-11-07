import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <div className='flex h-screen w-full overflow-auto'>
        <div className='flex-1 bg-chateau-home bg-cover bg-center bg-no-repeat' />
        <div className='absolute w-1/2'>
          <h1 className='absolute top-40 left-96 font-title text-6xl text-primary'>
            Welcome to the Chateau de Firbeix
          </h1>
        </div>
        <div className='flex h-screen w-full bg-chateau-home'></div>
      </div>
    </>
  )
}

export default Home
