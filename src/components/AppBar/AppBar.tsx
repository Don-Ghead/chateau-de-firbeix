import { navConfig } from './navconfig'

interface IAppBarProps {
  title: string
}

const NavItems = () => {
  return (
    <>
      {navConfig.map(({ displayText, navigationPath, onClick }) => {
        return (
          <li className='mr-6' key={`${displayText}`}>
            <a
              className='font-primary text-2xl text-primary hover:text-secondary'
              onClick={onClick}
              href={navigationPath}
            >
              {displayText}
            </a>
          </li>
        )
      })}
    </>
  )
}

const AppBar = ({ title }: IAppBarProps) => {
  return (
    <ul className='sticky top-0 flex w-full items-center justify-center border-b-2 border-primary bg-tan py-3'>
      <NavItems />
    </ul>
  )
}

export default AppBar
