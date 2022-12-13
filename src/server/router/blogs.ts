import { createRouter } from './context'
import { ZBlog } from '../../types/zod-blogs'
import * as trpc from '@trpc/server'

export const blogRouter = createRouter()
  .mutation('create', {
    input: ZBlog,
    async resolve({ ctx, input }) {
      if (!ctx.session || !ctx.session.user) {
        throw new trpc.TRPCError({ code: 'UNAUTHORIZED' })
      }
      return await ctx.prisma.blog.create({
        data: {
          title: input.title,
          content: input.description,
        },
      })
    },
  })
  // .mutation('delete', {
  //   input: z.string(),
  //   async resolve({ ctx, input }) {
  //     return await ctx.prisma.blog.delete({
  //       where: {
  //         id: input,
  //       },
  //     })
  //   },
  // })
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.blog.findMany()
    },
  })
