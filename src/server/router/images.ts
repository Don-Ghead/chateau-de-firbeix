import { createRouter } from './context'
import * as trpc from '@trpc/server'
import { ZRoleEnums } from '../../types/zod-auth'
import { z } from 'zod'

export const imageRouter = createRouter()
  .mutation('addToS3Bucket', {
    input: z.instanceof(File),
    async resolve({ ctx, input }) {
      if (!ctx.session || !ctx.session.user) {
        throw new trpc.TRPCError({ code: 'UNAUTHORIZED' })
      }
      if (ctx.session.user.role !== ZRoleEnums.enum.ADMIN) {
        throw new trpc.TRPCError({ code: 'FORBIDDEN' })
      }
    },
  })
  .mutation('delete', {
    input: z.string(),
    async resolve({ ctx, input }) {
      if (!ctx.session || !ctx.session.user) {
        throw new trpc.TRPCError({ code: 'UNAUTHORIZED' })
      }
      if (ctx.session.user.role !== ZRoleEnums.enum.ADMIN) {
        throw new trpc.TRPCError({ code: 'FORBIDDEN' })
      }
      return await ctx.prisma.blog.delete({
        where: {
          id: input,
        },
      })
    },
  })
