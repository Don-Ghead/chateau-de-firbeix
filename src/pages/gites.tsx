import { NextPage } from 'next'
import AppBarVisibilityContext from '../components/appbar/AppBarVisibilityContext'
import { useContext, useEffect, useRef } from 'react'

const Gites: NextPage = () => {
  const { setIsAppBarVisible } = useContext(AppBarVisibilityContext)
  const elementToScrollTo = useRef<null | HTMLDivElement>(null)

  const executeScroll = () =>
    elementToScrollTo.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })

  useEffect(() => {
    executeScroll()
  }, [])

  const unselectedTextClasses = 'text-l font-normal opacity-70'
  const selectedTextClasses = ''

  return (
    <main>
      <section
        ref={elementToScrollTo}
        aria-label='panels showing each gite and their names below'
        className='flex w-full flex-col'
      >
        <div className='flex w-full flex-1 flex-row'>
          <img
            src='/images/home-gallery/pool-amenity.jpg'
            alt='Image of Les Papillons'
            className='h-[85vh] w-1/3 object-cover opacity-80 transition-all duration-200 hover:cursor-pointer hover:opacity-100'
          />
          <img
            src='/images/home-gallery/chateau-explore-area.jpg'
            alt='Image of Les Oiseaux'
            className='h-[85vh] w-1/3 object-cover opacity-80 transition-all duration-200 hover:cursor-pointer hover:opacity-100'
          />
          <img
            src='/images/home-gallery/french-2.jpg'
            alt='Image of Les Arbres'
            className='h-[85vh] w-1/3 object-cover opacity-80 transition-all duration-200 hover:cursor-pointer hover:opacity-100'
          />
        </div>
        <div className='flex h-[15vh] w-full flex-row items-center justify-around text-xl font-semibold '>
          <h4>Les Papillons</h4>
          <h4>Les Oiseaux</h4>
          <h4>Les Arbres</h4>
        </div>
      </section>
    </main>
  )
}

export default Gites
