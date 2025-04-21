import { ReactNode } from 'react'
import InfoCard from '../home/info-card/InfoCard'
import { FaBed, FaBath, FaUsers, FaWheelchair, FaTv, FaFire } from 'react-icons/fa'
import VerticalDivider from '../vertical-divider/VerticalDivider'

interface IGiteInfoPanelProps {
  children?: ReactNode
}

const GiteInfoPanel = ({ children }: IGiteInfoPanelProps) => (
  <div className='flex w-full items-center justify-evenly bg-chateau-primary px-8 py-6'>
    <div className='flex flex-col gap-4'>
      <InfoCard
        Icon={FaBed}
        text='2 Bedrooms'
      />
      <InfoCard
        Icon={FaBath}
        text='1 Bathroom'
      />
    </div>
    <VerticalDivider />
    <div className='flex flex-col gap-4'>
      <InfoCard
        Icon={FaUsers}
        text='Sleeps 4'
      />
      <InfoCard
        Icon={FaWheelchair}
        text='Wheelchair Access'
      />
    </div>
    <VerticalDivider />
    <div className='flex flex-col gap-4'>
      <InfoCard
        Icon={FaTv}
        text='TV'
      />
      <InfoCard
        Icon={FaFire}
        text='BBQ'
      />
    </div>
  </div>
)

export default GiteInfoPanel 