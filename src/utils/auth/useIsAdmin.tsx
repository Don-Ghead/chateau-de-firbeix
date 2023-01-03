import { useSession } from 'next-auth/react'
import { ZRoleEnums } from '../../types/zod-auth'

const useIsAdmin = () => {
  const { data: session } = useSession()

  return session?.user?.role === ZRoleEnums.Enum.ADMIN
}

export default useIsAdmin
