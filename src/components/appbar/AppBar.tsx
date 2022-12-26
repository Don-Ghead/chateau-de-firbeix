import { navConfig } from './navconfig'
import { ReactNode, useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const NavItems = () => {
  return (
    <>
      {navConfig.map(({ displayText, navigationPath, onClick }) => {
        return (
          <li
            className='mr-6 font-primary text-2xl text-slate-700'
            key={`${displayText}`}
          >
            <Link onClick={onClick} href={navigationPath}>
              {displayText}
            </Link>
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
  <button className='font-primary text-2xl text-slate-700' onClick={onClick}>
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

      setIsVisible(visible)
      setLastScrollPos(currScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollPos])

  console.info({ session })

  return (
    <nav
      className={`sticky top-0 block ${
        !isVisible ? '-top-52' : ''
      } z-20 flex w-full flex-row justify-center border-b-2 border-b-slate-300 bg-slate-100 py-3 transition-all duration-700`}
    >
      <ul className='flex items-center justify-center self-center'>
        <NavItems />
      </ul>
      {!session ? (
        <AuthButton onClick={() => signIn()}>Login</AuthButton>
      ) : (
        <AuthButton onClick={() => signOut()}>Log Out</AuthButton>
      )}
    </nav>
  )
}

export default AppBar
