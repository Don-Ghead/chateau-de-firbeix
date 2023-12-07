import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

type TAppBarVisibilityContext = {
  isAppBarVisible: boolean
  setIsAppBarVisible?: Dispatch<SetStateAction<boolean>>
}
const AppBarVisibilityContext = createContext<TAppBarVisibilityContext>({
  isAppBarVisible: true,
  setIsAppBarVisible: undefined,
})

export const AppBarVisibilityProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true)

  return (
    <AppBarVisibilityContext.Provider
      value={{ isAppBarVisible, setIsAppBarVisible }}
    >
      {children}
    </AppBarVisibilityContext.Provider>
  )
}

export default AppBarVisibilityContext
