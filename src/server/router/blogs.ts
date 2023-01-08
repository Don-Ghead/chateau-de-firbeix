import { createRouter } from './context'
import { ZBlog } from '../../types/zod-blogs'
import * as trpc from '@trpc/server'
import { ZRoleEnums } from '../../types/zod-auth'
import { z } from 'zod'

export const blogRouter = createRouter()
  .mutation('create', {
    input: ZBlog,
    async resolve({ ctx, input }) {
      if (!ctx.session || !ctx.session.user) {
        throw new trpc.TRPCError({ code: 'UNAUTHORIZED' })
      }
      if (ctx.session.user.role !== ZRoleEnums.enum.ADMIN) {
        throw new trpc.TRPCError({ code: 'FORBIDDEN' })
      }
      return await ctx.prisma.blog.create({
        data: {
          title: input.title,
          content: input.content,
        },
      })
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
  .query('get', {
    input: z.string(),
    async resolve({ ctx, input }) {
      if (
        ctx.session &&
        ctx.session.user &&
        ctx.session.user.role === ZRoleEnums.enum.ADMIN
      ) {
        return await ctx.prisma.blog.findUniqueOrThrow({
          where: { id: input },
        })
      }
      return await ctx.prisma.blog.findFirstOrThrow({
        where: { id: input, isHidden: { equals: false } },
      })
    },
  })
  .query('getAll', {
    async resolve({ ctx }) {
      if (
        ctx.session &&
        ctx.session.user &&
        ctx.session.user.role === ZRoleEnums.enum.ADMIN
      ) {
        return await ctx.prisma.blog.findMany()
      }
      return await ctx.prisma.blog.findMany({
        where: { isHidden: { equals: false } },
      })
    },
  })
