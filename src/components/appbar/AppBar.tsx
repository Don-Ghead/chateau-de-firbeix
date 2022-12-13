import { navConfig } from './navconfig'
import { ReactNode, useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const NavItems = () => {
  return (
    <>
      {navConfig.map(({ displayText, navigationPath, onClick }) => {
        return (
          <li className='mr-6' key={`${displayText}`}>
            <a
              className='hover:text-secondary font-primary text-2xl text-slate-700'
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

type TAuthButtonProps = {
  onClick: () => void
  children: ReactNode
}

const AuthButton = ({ onClick, children }: TAuthButtonProps) => (
  <button
    className='text-slate-700 outline-1 outline-slate-700'
    onClick={onClick}
  >
    {children}
  </button>
)

const AppBar = () => {
  const [lastScrollPos, setLastScrollPos] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const { data: session } = useSession()

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
      className={`sticky top-0 block ${
        !isVisible ? '-top-52' : ''
      } z-20 flex w-full flex-row border-b-2 border-b-slate-300 bg-slate-100 py-3 transition-all duration-700`}
    >
      <ul className='flex items-center justify-center'>
        <NavItems />
      </ul>
      {session ? (
        <AuthButton onClick={() => signIn()}>Login</AuthButton>
      ) : (
        <AuthButton onClick={() => signOut()}>Log Out</AuthButton>
      )}
    </nav>
  )
}

export default AppBar
