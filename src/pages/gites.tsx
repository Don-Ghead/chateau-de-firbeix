import { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import GiteImagePanel from '../components/gite-image-panel/GiteImagePanel'
import GiteDetails from '../components/gite-image-panel/GiteDetails'
import {
  Gite,
  giteDetailsMap,
} from '../components/gite-image-panel/giteDetailsMap'

const Gites: NextPage = () => {
  const elementToScrollTo = useRef<null | HTMLDivElement>(null)
  const [selectedGite, setSelectedGite] = useState<Gite | undefined>(undefined)

  const executeScroll = () =>
    elementToScrollTo.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })

  useEffect(() => {
    executeScroll()
  }, [])

  return (
    <main>
      <section
        ref={elementToScrollTo}
        aria-label='panels showing each gite and their names below'
        className='flex w-full flex-col'
      >
        <div className='flex w-full flex-1 flex-row justify-center text-xl font-semibold'>
          <GiteImagePanel
            onClick={() => setSelectedGite('papillons')}
            isSelected={selectedGite === 'papillons'}
            giteDetails={giteDetailsMap.papillons}
          />
          <GiteImagePanel
            onClick={() => setSelectedGite('oiseaux')}
            isSelected={selectedGite === 'oiseaux'}
            giteDetails={giteDetailsMap.oiseaux}
          />
          <GiteImagePanel
            onClick={() => setSelectedGite('both')}
            isSelected={selectedGite === 'both'}
            giteDetails={giteDetailsMap.both}
          />
        </div>
        {selectedGite && (
          <div className='w-full'>
            <GiteDetails giteName={selectedGite} />
          </div>
        )}
      </section>
    </main>
  )
}

export default Gites
