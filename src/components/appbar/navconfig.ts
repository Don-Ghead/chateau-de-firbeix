import { LinkProps } from 'next/link'

type TNavConfigWithPath = {
  displayText: string
  navigationPath: LinkProps['href']
  onClick?: () => void
}

export type TNavConfig = Array<TNavConfigWithPath>

export const navConfig: TNavConfig = [
  {
    displayText: 'Home',
    navigationPath: '/',
  },
  {
    displayText: 'Les Gites',
    navigationPath: '/gites',
  },
  {
    displayText: 'Blog',
    navigationPath: '/blog',
  },
  {
    displayText: 'Contact',
    navigationPath: '/contact',
  },
]

export default navConfig
