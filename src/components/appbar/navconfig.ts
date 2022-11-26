type TNavConfigCommon = {
  displayText: string
}

type TNavConfigWithPath = TNavConfigCommon & {
  navigationPath: string
  onClick?: never
}

type TNavConfigWithOnClick = TNavConfigCommon & {
  navigationPath?: never
  onClick: () => void
}

type TNavConfigWithBoth = TNavConfigCommon & {
  navigationPath: string
  onClick: () => void
}

export type TNavConfig = Array<
  TNavConfigWithPath | TNavConfigWithOnClick | TNavConfigWithBoth
>

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
