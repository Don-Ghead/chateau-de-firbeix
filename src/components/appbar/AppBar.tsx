import { ReactNode, useContext, useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import AppBarVisibilityContext from './AppBarVisibilityContext'

const NavItem = ({ children }: { children: ReactNode }) => (
  <li className='font-primary text-2xl text-slate-700'>{children}</li>
)

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
  const { isAppBarVisible, setIsAppBarVisible } = useContext(
    AppBarVisibilityContext
  )

  const { data: session } = useSession()

  useEffect(() => {
    const handleScroll = () => {
      const currScrollPos = window.scrollY
      const visible = currScrollPos < lastScrollPos

      setIsAppBarVisible && setIsAppBarVisible(visible)
      setLastScrollPos(currScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollPos])

  return (
    <nav
      className={`sticky top-0 block ${
        !isAppBarVisible ? '-top-52' : ''
      } z-20 flex w-full flex-row justify-center border-b-2 border-b-slate-300 bg-slate-100 py-2 transition-all duration-700`}
    >
      <ul className='flex w-3/4 flex-wrap items-center justify-between self-center'>
        <NavItem>
          <Link href='/'>Home</Link>
        </NavItem>
        <NavItem>
          <Link href='/gites'>Gites</Link>
        </NavItem>
        <Image
          width={110}
          height={60}
          src='/chateau-logo.png'
          alt='Chateau Logo'
          className='px-3'
        />
        <NavItem>
          <Link href='/explore'>Explore</Link>
        </NavItem>
        <NavItem>
          <Link href='/contact'>Contact</Link>
        </NavItem>
        {/*{!session ? (*/}
        {/*  <AuthButton onClick={() => signIn()}>Login</AuthButton>*/}
        {/*) : (*/}
        {/*  <AuthButton onClick={() => signOut()}>Log Out</AuthButton>*/}
        {/*)}*/}
      </ul>
    </nav>
  )
}

export default AppBar
