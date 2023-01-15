import { z } from 'zod'

export const ZBlog = z.object({
  title: z.string(),
  content: z.string(),
  images: z.array(z.string().url()),
  isHidden: z.boolean(),
})
