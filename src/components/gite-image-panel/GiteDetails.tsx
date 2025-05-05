import { useEffect } from 'react'
import GiteInfoPanel from './GiteInfoPanel'
import { Gite, giteDetailsMap } from './giteDetailsMap'

interface IGiteDetailsProps {
  giteName: Gite
}

const GiteDetails = ({ giteName }: IGiteDetailsProps) => {
  const { airbnbListingId, about } = giteDetailsMap[giteName]

  console.log(`Gite Name: ${giteName}, Embed ID: ${airbnbListingId}`)

  useEffect(() => {
    const scriptId = 'airbnb-jssdk'
    if (document.getElementById(scriptId)) {
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://www.airbnb.co.uk/embeddable/airbnb_jssdk'
    script.async = true

    document.body.appendChild(script)

    return () => {
      const existingScript = document.getElementById(scriptId)
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [giteName])

  return (
    <div className='flex w-full flex-col gap-8 pt-4 pb-8'>
      <div className='flex flex-col items-center'>
        <a
          className='text-blue-600 underline visited:text-purple-600 hover:text-blue-800'
          href={`https://www.airbnb.co.uk/rooms/${airbnbListingId}?guests=1&adults=1&s=67&unique_share_id=b280651a-22a8-4c0b-8d0a-27adbac8c924`}
          target='_blank'
          rel='noreferrer'
        >
          {"Link to listing (if below link doesn't work)"}
        </a>
        <div
          key={airbnbListingId}
          className='airbnb-embed-frame mx-auto h-[300px] w-[450px]'
          data-id={airbnbListingId}
          data-view='home'
          data-hide-price='true'
        >
          <a
            href={`https://www.airbnb.co.uk/rooms/${airbnbListingId}?check_in=2024-06-01&amp;check_out=2024-06-08&amp;guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget`}
          >
            View on Airbnb
          </a>
          <a
            href={`https://www.airbnb.co.uk/rooms/${airbnbListingId}?check_in=2024-06-01&amp;check_out=2024-06-08&amp;guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget`}
            rel='nofollow'
          >
            Home in Firbeix · ★5.0 · 3 bedrooms · 4 beds · 1.5 bathrooms
          </a>
        </div>
      </div>

      {/*<div className='flex w-full justify-center'>*/}
      {/*  <ImageGallery images={images} />*/}
      {/*</div>*/}

      <GiteInfoPanel />

      <div className='w-2/3 self-center px-8 text-chateau-secondary'>
        <h2 className='pb-4 text-3xl font-bold'>About this space</h2>
        <div 
          className='text-lg prose prose-lg max-w-none prose-headings:text-chateau-secondary prose-p:text-chateau-secondary prose-strong:text-chateau-secondary prose-ul:text-chateau-secondary prose-li:text-chateau-secondary'
          dangerouslySetInnerHTML={{ __html: about || '' }}
        />
      </div>
    </div>
  )
}

export default GiteDetails
