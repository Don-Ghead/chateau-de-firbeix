import { createRouter } from './context'
import { ZBlogUpsert } from '../../types/zod-blogs'
import * as trpc from '@trpc/server'
import { ZRoleEnums } from '../../types/zod-auth'
import { z } from 'zod'

export const blogRouter = createRouter()
  .mutation('upsert', {
    input: ZBlogUpsert,
    async resolve({ ctx, input }) {
      if (!ctx.session || !ctx.session.user) {
        throw new trpc.TRPCError({ code: 'UNAUTHORIZED' })
      }
      if (ctx.session.user.role !== ZRoleEnums.enum.ADMIN) {
        throw new trpc.TRPCError({ code: 'FORBIDDEN' })
      }
      const { title, content } = input.blogContent
      return await ctx.prisma.blog.upsert({
        create: {
          title,
          content,
        },
        update: {
          title,
          content,
          lastEditDate: new Date(),
        },
        where: {
          id: input.id,
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
