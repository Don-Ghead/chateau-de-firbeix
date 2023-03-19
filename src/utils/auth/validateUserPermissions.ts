import { Session } from 'next-auth'
import * as trpc from '@trpc/server'
import { ZRoleEnums } from '../../types/zod-auth'

export const throwIfUserNotAdmin = (session: Session | null) => {
  if (!session || !session.user) {
    throw new trpc.TRPCError({ code: 'UNAUTHORIZED' })
  }
  if (session.user.role !== ZRoleEnums.enum.ADMIN) {
    throw new trpc.TRPCError({ code: 'FORBIDDEN' })
  }
}
