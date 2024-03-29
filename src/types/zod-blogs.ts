import { z } from 'zod'

export const ZBlog = z.object({
  title: z.string(),
  content: z.string(),
  isHidden: z.boolean(),
  lastEditDate: z.date().optional(),
})

export const ZBlogUpsert = z.object({
  blogContent: ZBlog,
  id: z.string().optional(),
})
