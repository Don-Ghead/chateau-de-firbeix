import { ElementType, ReactNode } from 'react'

export interface IInfoPanel {
  text: ReactNode
  Icon: ElementType
}

const InfoCard = ({ text, Icon }: IInfoPanel) => (
  <div className='flex-1 px-4'>
    <div className='flex flex-auto items-center'>
      <Icon className={`h-8 min-w-max pr-4 text-chateau-secondary`} />
      <p className={`text-md text-chateau-secondary`}>{text}</p>
    </div>
  </div>
)

export default InfoCard
