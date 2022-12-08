import { navConfig } from './navconfig'
import { useEffect, useState } from 'react'

const NavItems = () => {
  return (
    <>
      {navConfig.map(({ displayText, navigationPath, onClick }) => {
        return (
          <li className='mr-6' key={`${displayText}`}>
            <a
              className='text-primary hover:text-secondary font-primary text-2xl'
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

const AppBar = () => {
  const [lastScrollPos, setLastScrollPos] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currScrollPos = window.scrollY
      const visible = currScrollPos < lastScrollPos

      console.log(visible)

      setIsVisible(visible)
      setLastScrollPos(currScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollPos])

  return (
    <nav
      className={`fixed top-0 block ${
        !isVisible ? '-top-52' : ''
      } z-20 w-full border-b-2 border-b-slate-300 bg-slate-100 py-3 transition-all duration-700`}
    >
      <ul className='flex items-center justify-center'>
        <NavItems />
      </ul>
    </nav>
  )
}

export default AppBar
