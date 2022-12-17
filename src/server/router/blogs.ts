import { createRouter } from './context'
import { ZBlog } from '../../types/zod-blogs'
import * as trpc from '@trpc/server'

const authorisedBlogCreators = ['luketparsons@gmail.com']

export const blogRouter = createRouter()
  .mutation('create', {
    input: ZBlog,
    async resolve({ ctx, input }) {
      if (!ctx.session || !ctx.session.user) {
        throw new trpc.TRPCError({ code: 'UNAUTHORIZED' })
      }
      if (
        ctx.session.user?.email &&
        !authorisedBlogCreators.includes(ctx.session.user?.email)
      ) {
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
