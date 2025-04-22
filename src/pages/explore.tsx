import { NextPage } from 'next'
import ParallaxSection from '../components/explore/ParallaxSection'

const amenities = [
  {
    title: 'The Pool',
    imgSrc: '/images/home-gallery/pool-amenity.jpg',
    description:
      'A heated pool complete with a shower and enough sunbeds for all guests.',
  },
  {
    title: 'The Barn',
    imgSrc: '/images/home-gallery/chateau-explore-area.jpg', // Placeholder image
    description:
      'An area with games such as Darts, table Football and Ping Pong for kids and adults alike to have some fun.',
  },
  {
    title: 'The Petanque Court',
    imgSrc: '/images/home-gallery/french-2.jpg', // Placeholder image
    description: 'A full sized Petanque court, with Boules on loan.',
  },
  {
    title: 'Decked Seating Area',
    imgSrc: '/images/home-gallery/french-3.jpg', // Placeholder image
    description:
      'Relax and unwind on the lovely decked seating areas available near the gites.',
  },
  {
    title: 'The Treehouse',
    imgSrc: '/images/home-gallery/french-4.jpg', // Placeholder image
    description:
      'A small area tucked away in the trees of the Chateau, perfect for quiet contemplation or a children\'s adventure.',
  },
]

const Explore: NextPage = () => {
  return (
    <main>
      {amenities.map((amenity, index) => (
        <ParallaxSection
          key={index}
          title={amenity.title}
          imgSrc={amenity.imgSrc}
          description={amenity.description}
        />
      ))}
    </main>
  )
}

export default Explore
