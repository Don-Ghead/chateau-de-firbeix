import { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import GiteImagePanel from '../components/gite-image-panel/GiteImagePanel'

type TGite = 'arbres' | 'oiseaux' | 'papillons'

const Gites: NextPage = () => {
  const elementToScrollTo = useRef<null | HTMLDivElement>(null)
  const [selectedGite, setSelectedGite] = useState<TGite | undefined>(undefined)

  const executeScroll = () =>
    elementToScrollTo.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })

  useEffect(() => {
    executeScroll()
  }, [])

  // TODO - Configure text to be selected/unselected styled
  const unselectedTextClasses = 'text-xl font-semibold opacity-70'
  const selectedTextClasses = 'font-bold text-2xl opacity-100'

  return (
    <main>
      <section
        ref={elementToScrollTo}
        aria-label='panels showing each gite and their names below'
        className='flex w-full flex-col'
      >
        <div className='flex w-full flex-1 flex-row text-xl font-semibold'>
          <GiteImagePanel
            onClick={() => setSelectedGite('papillons')}
            isSelected={selectedGite === 'papillons'}
            selectedClassName={selectedTextClasses}
            imgSrc='/images/home-gallery/pool-amenity.jpg'
            imgAlt='Image of Les Papillons'
            giteText='Les Papillons'
          />
          <GiteImagePanel
            onClick={() => setSelectedGite('oiseaux')}
            isSelected={selectedGite === 'oiseaux'}
            selectedClassName={selectedTextClasses}
            imgSrc='/images/home-gallery/chateau-explore-area.jpg'
            imgAlt='Image of Les Oiseaux'
            giteText='Les Oiseaux'
          />
          <GiteImagePanel
            onClick={() => setSelectedGite('arbres')}
            isSelected={selectedGite === 'arbres'}
            selectedClassName={selectedTextClasses}
            imgSrc='/images/home-gallery/french-2.jpg'
            imgAlt='Image of Les Arbres'
            giteText='Les Arbres'
          />
        </div>
      </section>
    </main>
  )
}

export default Gites
