import { navConfig } from './navconfig'
import { MutableRefObject, RefObject, useEffect, useState } from 'react'
import { IParallax } from '@react-spring/parallax'

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
      } z-20 w-full border-b-2 border-primary bg-tan py-3 transition-all duration-700`}
    >
      <ul className='flex items-center justify-center'>
        <NavItems />
      </ul>
    </nav>
  )
}

export default AppBar
