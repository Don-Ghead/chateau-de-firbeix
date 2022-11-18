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
    <nav className='sticky top-0 z-20 w-full border-b-2 border-primary bg-tan py-3'>
      <ul className='flex items-center justify-center'>
        <NavItems />
      </ul>
    </nav>
  )
}

export default AppBar
