import { useSession } from 'next-auth/react'
import { ZRoleEnums } from '../../types/zod-auth'

const useIsAdmin = () => {
  // console.log(env.NEXT_PUBLIC_NODE_ENV)
  const { data: session } = useSession()

  return session?.user?.role === ZRoleEnums.Enum.ADMIN
}

export default useIsAdmin
