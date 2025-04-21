import { ReactNode } from 'react'
import InfoCard from '../info-card/InfoCard'
import { FiMapPin } from 'react-icons/fi'
import { FaSwimmingPool } from 'react-icons/fa'
import { BsHouses } from 'react-icons/bs'
import VerticalDivider from '../../vertical-divider/VerticalDivider'

interface IInfoPanelProps {
  children?: ReactNode
}

const InfoPanel = ({ children }: IInfoPanelProps) => (
  <div className='flex items-center bg-chateau-primary py-6'>
    <InfoCard
      Icon={FiMapPin}
      text={
        'A stones-throw away from the Parc naturel régional Périgord-Limousin'
      }
    />
    <VerticalDivider />
    <InfoCard
      Icon={FaSwimmingPool}
      text={
        'Available to all visitors is the shared pool in which to relax and cool off after a day basking in the French sun.'
      }
    />
    <VerticalDivider />
    <InfoCard
      Icon={BsHouses}
      text={
        'The Château is comprised of 4 stunning self-contained guest gites to accommodate groups and families of any size.'
      }
    />
  </div>
)

export default InfoPanel
