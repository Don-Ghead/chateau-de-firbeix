import { createProtectedRouter } from './context'
import { ZBlog } from '../../types/zod-blogs'

export const blogRouter = createProtectedRouter()
  .mutation('create', {
    input: ZBlog,
    async resolve({ ctx, input }) {
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
